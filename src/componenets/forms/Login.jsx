import { Placeholder } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./form.css";
import { GoBook } from "react-icons/go";
import { Link } from "react-router";

export default function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  // console.log(watch("example")) // watch input value by passing the name of it

  const onSubmit = () => {
    console.log("hello");
  };

  return (
    <div className="form-main-container">
      <div className="form-heading">
        <h1>
          {" "}
          <GoBook /> Bookly{" "}
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="forms-input">
          {/* register your input into the hook by invoking the "register" function */}

          <div className="email">
            <label htmlFor="">Email</label>
            <input
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
              <span
                className="
          error"
              >
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="password">
            <label htmlFor="">password</label>

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
              <span
                className="
          error"
              >
                {errors.password.message}
              </span>
            )}

            <div className="forgetPassword">
              <h6>
                {" "}
                <Link to=""> Forget Password ?</Link>
              </h6>
            </div>
          </div>
        </div>

        <input  className="sub-btn" type="submit" />

        <div className="nothaveAccount">
              <h6>New to Bookly ?  <Link to="/signup">SignUp</Link></h6>         
        </div>
      </form>
    </div>
  );
}
