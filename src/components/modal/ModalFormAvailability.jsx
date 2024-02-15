import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ModalFormAvailability = ({ data }) => {
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
      suburb: "",
      message: "",
      type: ""
    }
  });
  const onSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_AVAILABILITY_ID,
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
    <div className="quote-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12">
                  <label>Your Name*</label>
                  <input
                    type="text"
                    placeholder="Your Name"
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
                    type="phone"
                    placeholder="Phone number"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && <span>This field is required</span>}
                </div>
                <div className="col-12">
                  <label>Suburb*</label>
                  <input
                    type="text"
                    placeholder="Suburb"
                    {...register("suburb", { required: true })}
                  />
                  {errors.suburb && <span>This field is required</span>}
                </div>
                <div className="col-12">
                  <label>Message*</label>
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={5}
                    placeholder="Write here..."
                    {...register("message", { required: true })}
                  />
                  {errors.message && <span>This field is required</span>}
                </div>
                <div style={{ display: "none" }}>
                  <input type="text" {...register("type")} value={data} />
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
  );
};

export default ModalFormAvailability;
