import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is Mandatory"),
  lastName: yup.string().required("Last Name is Mandatory"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is Mandatory"),
  age: yup.number().integer().positive().required("Age is Mandatory"),
  password: yup
    .string()
    .required()
    .min(4, "At least 4 characters are required")
    .max(15, "At most 15 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // Log form state for debugging
  console.log("Form State:", { isValid, isDirty, errors });

  return (
    <div className="form">
      <div className="title">Sign Up</div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input {...register("firstName")} placeholder="First Name..." />
        <p>{errors.firstName?.message}</p>
        <input {...register("lastName")} placeholder="Last Name..." />
        <p>{errors.lastName?.message}</p>
        <input {...register("email")} placeholder="Email..." />
        <p>{errors.email?.message}</p>
        <input {...register("age")} placeholder="Age..." type="number" />
        <p>{errors.age?.message}</p>
        <input
          {...register("password")}
          type="password"
          placeholder="Password..."
        />
        <p>{errors.password?.message}</p>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password..."
        />
        <p>{errors.confirmPassword?.message}</p>
        <input disabled={isValid} type="submit" id="submit" />
      </form>
    </div>
  );
};

export default Form;
