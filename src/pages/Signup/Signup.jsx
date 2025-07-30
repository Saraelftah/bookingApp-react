// import style from "./Signin.module.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import sideImg from "../../assets/images/BG.png";
import logo from "../../assets/images/blueLogo.png";
import facebook from "../../assets/images/facebook-color.svg";
import google from "../../assets/images/google-color.svg";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    toast.success("Registered Successfully!");
    navigate("/login");
  };

  return (
    <>
      <div className="container flex ">
        <div
          className={`w-5/6 mx-auto lg:w-2/4 bg-white rounded-3xl py-15 px-8 `}
        >
          <Link to="/">
            <div className="w-30 mb-8 mx-auto">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center mb-5"
          >
            <h2 className="text-3xl font-bold">Signup</h2>
            {/* username */}
            <div className="flex flex-col py-2 gap-2 w-5/6">
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="input input-info w-full"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 6,
                    message: "Username must be at least 6 characters",
                  },
                })}
              />
              {errors.username && (
                <div className="text-red-500">
                  <i class="fa-solid fa-circle-exclamation"></i>{" "}
                  <span className="text-sm">{errors.username.message}</span>
                </div>
              )}
            </div>
            {/* email */}
            <div className="flex flex-col py-2 gap-2 w-5/6 ">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email..."
                className="input input-info w-full"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                    message: "Email is not valid",
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-500">
                  <i class="fa-solid fa-circle-exclamation"></i>{" "}
                  <span className="text-sm">{errors.email.message} </span>
                </div>
              )}
            </div>
            {/* Password */}
            <div className="flex flex-col py-2 gap-2 w-5/6 ">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter your password..."
                className="input input-info w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                    message:
                      "Password must contain uppercase, lowercase, number, and special character",
                  },
                })}
              />
              {errors.password && (
                <div className="text-red-500">
                  <i class="fa-solid fa-circle-exclamation"></i>
                  <span className="text-sm"> {errors.password.message} </span>
                </div>
              )}
            </div>
            {/* confirm password */}
            <div className="flex flex-col py-2 gap-2 w-5/6 ">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password..."
                className="input input-info w-full"
                {...register("confirmPassword", {
                  required: "Confirmation is required",
                  validate: (value) =>
                    value === watch("password") || "Password do not match",
                })}
              />
              {errors.confirmPassword && (
                <div className="text-red-500">
                  <i class="fa-solid fa-circle-exclamation"></i>{" "}
                  <span className="text-red-500 text-sm">
                    {" "}
                    {errors.confirmPassword.message}{" "}
                  </span>
                </div>
              )}
            </div>

            {/* phone */}
            <div className="flex flex-col py-2 gap-2 w-5/6 ">
              <label htmlFor="">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number..."
                className="input input-info w-full"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10,12}$/,
                    message: "Phone number must contain only digits",
                  },
                })}
              />
              {errors.phone && (
                <div className="text-red-500">
                  <i class="fa-solid fa-circle-exclamation"></i>
                  <span className="text-sm"> {errors.phone.message} </span>
                </div>
              )}
            </div>

            {/* country */}
            <div className="flex flex-col py-2 gap-2 w-5/6 ">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                className="select select-info w-full"
                {...register("country", {
                  required: "Country is required",
                })}
              >
                <option value="" disabled selected>
                  Select your country
                </option>
                <option value="Egypt">Egypt</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="Qatar">Qatar</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              {errors.country && (
                <div className="text-red-500">
                  <i class="fa-solid fa-circle-exclamation"></i>{" "}
                  <span className="text-sm">{errors.country.message}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-5/6  mt-3 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-blue-500 hover:bg-blue-700 text-white"
            >
              Register
            </button>
          </form>

          <div className="mb-5">
            <p className="text-center">
              Already have an account?{" "}
              <NavLink to="/login">
                {" "}
                <b className="text-blue-600">Login</b>{" "}
              </NavLink>{" "}
            </p>
          </div>

          <div className="text-center flex flex-col items-center justify-center gap-3">
            <p className="mb-3">
              <b>Signup </b>With Others
            </p>

            <Link className="flex gap-2 items-center justify-center bg-white py-3 rounded-3xl border border-gray-200 w-3/4  hover:bg-gray-50">
              <div className="w-5 md:w-8">
                <img src={google} alt="google" />
              </div>
              <p>Signup With Google</p>
            </Link>

            <Link className="flex gap-2 items-center justify-center bg-white py-3 rounded-3xl border border-gray-200 w-3/4 hover:bg-gray-50">
              <div className="w-5 md:w-8">
                <img src={facebook} alt="facebook" />
              </div>
              <p>Signup With Facebook</p>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <img src={sideImg} alt="image" className="  h-full object-fit" />
        </div>
      </div>
    </>
  );
}

export default Signup;
