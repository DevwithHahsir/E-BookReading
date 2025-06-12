import React from 'react'
import { useForm } from "react-hook-form";
import "./form.css"

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

      <input
        defaultValue="email"
        placeholder="Enter Email"
        {...register("email", {
          required: "Email is required", // Added custom message for 'required'
          minLength: {
            value: 3,
            message: "Enter the correct Email",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <span style={{ color: "red" }}>{errors.email.message}</span>
      )}

      <input
        type="password"
        placeholder="Enter Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).+$/,
            message:
              "Password must contain at least 1 uppercase letter and 1 special character (!@#$%^&*)",
          },
          validate: (value) => {
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least 1 uppercase letter";
            }
            if (!/[!@#$%^&*]/.test(value)) {
              return "Password must contain at least 1 special character (!@#$%^&*)";
            }
            return true;
          },
        })}
      />
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password.message}</span>
      )}

      <input type="submit" />
    </form>
  );
}
