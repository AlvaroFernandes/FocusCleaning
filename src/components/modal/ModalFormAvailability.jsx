import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ModalFormAvailability = ({ data }) => {
  const type = data;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      suburb: "",
      cleanType: type
    }
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="quote-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit(onSubmit)}>
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
