import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [firebaseError, setFirebaseError] = useState("");
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const name = `${data.firstName} ${data.lastName}`;
    console.log(name);
    const email = data.email;
    const password = data.password;
    const photoUrl = ` ${data?.photo ? data?.photo : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}`;
    const userInfo = {
      name,
      email,
      password,
      photoUrl,
    };
    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateUser(name, photoUrl);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            navigate("/")
          });
      }) 
      .catch((error) => {
        setFirebaseError(error.message);
        console.log(firebaseError);
        setError("root", {
          message: firebaseError,
        });
      });


  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Please Include Your First Name",
                  },
                })}
                type="text"
                placeholder="First Name"
                className="input input-bordered"
              />
              {errors.firstName && (
                <p className="text-red-600">{errors.firstName.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Please Include Your Last Name",
                  },
                })}
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
              />
              {errors.lastName && (
                <p className="text-red-600">{errors.lastName.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                {...register("photo")}
                type="text"
                placeholder="Photo Url"
                className="input input-bordered"
              />
            </div>
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
                    message: "Provide a valid email",
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
              <div className="relative" >
              <span className="absolute inset-y-0 right-4 flex items-center pl-2 ">
                    <button
                      type="button"
                      title="search"
                      className="p-1 focus:outline-none focus:ring"
                    >
                      {
                        showPass ? (
                          <IoEye
                          className="text-signBtn"
                            onClick={() => setShowPass(!showPass)}
                          />
                        ) : (
                          <IoEyeOff
                            onClick={() => setShowPass(!showPass)}
                          />
                        )
                      }
                    </button>
                  </span>
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
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="input input-bordered w-full py-2 pl-10 text-sm rounded-md  focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
              </div>
            </div>
            <div className="form-control mt-6">
              <button disabled={isSubmitting} className="btn btn-primary">
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Register"
                )}
              </button>
              {errors.root && (
                <p className="text-red-600">{errors.root.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
