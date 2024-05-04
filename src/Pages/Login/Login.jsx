import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/Use Auth Context/UseAuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const {logIn, githubLogin, googleLogin} = useAuth();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit =  (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    logIn(email, password)
    .then(async result => {
      console.log(result);
      await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate(location?.state ? location?.state : "/")
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500
          });
        });
    })
    .catch(error => console.error(error));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("Google Login", result);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => console.log(error));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log("Github Login", result);
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email. Example: example@example.com",
                  },
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                  // /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    message:
                      "Password must have one uppercase, one lowercase, one number and one special case character",
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button disabled={isSubmitting} className="btn btn-primary">
                {isSubmitting ? <span className="loading loading-spinner loading-lg"></span>
                :
                <span>Login</span>
                }
                </button>
            </div>
          </form>
            <p className="text-center">Or Login with</p>
          <div className="flex flex-row justify-around items-center">
            <button onClick={handleGoogleLogin} className="btn btn-secondary btn-outline" >Google</button>
            <button onClick={handleGithubLogin} className="btn btn-outline btn-primary" >Github</button>
          </div>
          <p><small>Don&apos;t have any account? please <Link className="text-blue-600 font-bold" to={"/register"} >Register</Link></small></p>
        </div>
      </div>
    </div>
  );
};



export default Login;
