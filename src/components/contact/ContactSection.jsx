import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_CONTACT_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY }
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
    reset();
  };

  return (
    <div>
      <div className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-page">
                <img src="/assets/img/contact/photo1.jpeg" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-form dark-bg">
                <div className="section-title">
                  <h2>Lets talk...</h2>
                </div>
                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-12">
                      <label>Your Name*</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6">
                      <label>Email Address*</label>
                      <input
                        type="email"
                        placeholder="E-mail Address"
                        {...register("email", { required: true })}
                      />
                      {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="col-md-6">
                      <label>Phone Number*</label>
                      <input
                        type="number"
                        placeholder="Phone number"
                        {...register("phone", { required: true })}
                      />
                      {errors.phone && <span>This field is required</span>}
                    </div>
                    <div className="col-12">
                      <label>Subject*</label>
                      <input
                        type="text"
                        placeholder="Subject"
                        {...register("subject", { required: true })}
                      />
                      {errors.subject && <span>This field is required</span>}
                    </div>
                    <div className="col-12">
                      <label>Message*</label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder="Write here..."
                        {...register("message", { required: true })}
                      />
                      {errors.message && <span>This field is required</span>}
                    </div>
                  </div>
                  <button type="submit" className="bordered-btn">
                    Send now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
