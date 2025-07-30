import { useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import sideImg from "../../assets/images/BG.png";
import logo from "../../assets/images/blueLogo.png";
import google from "../../assets/images/google-color.svg";
import facebook from "../../assets/images/facebook-color.svg";
import toast from "react-hot-toast";

// import style from "./Login.module.css";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === data.email &&
      storedUser.password === data.password
    ) {
      toast.success("Login Successful");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
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
            <h2 className="text-3xl font-bold">Login</h2>

            {/* email */}
            <div className="flex flex-col py-5 gap-2 w-5/6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email..."
                id="email"
                className="input input-info w-full"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <div className="text-red-500">
                  <i class="fa-solid fa-circle-exclamation"></i>{" "}
                  <span>{errors.email.message} </span>
                </div>
              )}
            </div>

            <div className="flex flex-col py-5 gap-2 w-5/6 ">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password..."
                id="password"
                className="input input-info w-full"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <div className="text-red-500">
                  <i class="fa-solid fa-circle-exclamation"></i>
                  <span> {errors.password.message} </span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-5/6  mt-3 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-blue-500 hover:bg-blue-700 text-white"
            >
              Login
            </button>
          </form>

          <div className="mb-5">
            <p className="text-center">
              Don't have an account?{" "}
              <NavLink to="/signup">
                {" "}
                <b className="text-blue-600">Register</b>{" "}
              </NavLink>{" "}
            </p>
          </div>

          <div className="text-center flex flex-col items-center justify-center gap-3">
            <p className="mb-3">
              <b>Login </b>With Others
            </p>

            <Link className="flex gap-2 items-center justify-center bg-white py-3 rounded-3xl border border-gray-200 w-3/4  hover:bg-gray-50">
              <div className="w-5 md:w-8">
                <img src={google} alt="google" />
              </div>
              <p>Login With Google</p>
            </Link>

            <Link className="flex gap-2 items-center justify-center bg-white py-3 rounded-3xl border border-gray-200 w-3/4 hover:bg-gray-50">
              <div className="w-5 md:w-8">
                <img src={facebook} alt="facebook" />
              </div>
              <p>Login With Facebook</p>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <img src={sideImg} alt="image" />
        </div>
      </div>
    </>
  );
}

export default Login;
