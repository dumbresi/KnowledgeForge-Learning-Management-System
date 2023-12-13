import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import * as AuthService from "../services/auth-service";
import * as Paths from "../resources/paths";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login(): JSX.Element {
  const handleSuccessfulLogin = () => {
    toast.success("Login Successful", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleFailedLogin = () => {
    toast.error("Invalid Login", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // const handleLoginFailed = (message: string) => {
  //   console.log("login failed:" + message);
  // };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [activeTab, setActiveTab] = useState("student");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  async function loginUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (activeTab === "student") {
      try {
        const response = await AuthService.loginUser(
          JSON.stringify({ email, password })
        );
        if (response.status === 200) {
          const data = await response.json();
          const storeData = {
            userName: data.sanitizedUser.userName,
            email: data.sanitizedUser.email,
            contactNumber: data.sanitizedUser.contactNumber,
            userType: "user",
          };
          console.log(storeData);
          dispatch(signInSuccess(storeData));
          handleSuccessfulLogin();
          navigate("/");
        } else {
          handleFailedLogin();
        }
      } catch (error) {
        handleFailedLogin();
      }
    }
    if (activeTab === "instructor") {
      try {
        const response = await AuthService.loginInstructor(
          JSON.stringify({ email, password })
        );
        if (response.ok) {
          const data = await response.json();
          // Handle the 'data' as needed
          const storeData = {
            userName: data.instructor.name,
            email: data.instructor.email,
            contactNumber: data.instructor.contactNumber,
            userType: "instructor",
          };
          dispatch(signInSuccess(storeData));
          console.log("Logged in");
          handleSuccessfulLogin();
          navigate("/");
        } else {
          handleFailedLogin();
        }
      } catch (error) {
        handleFailedLogin();
      }
    }
  }

  const takeToSignUpPage = () => {
    console.log("take user to register page");
    navigate(Paths.registerPath);
  };

  return (
    <div className="Login bg-white">
      <ToastContainer />
      <div className="tabs flex flex-row justify-between">
        <div
          className={`tab ${
            activeTab === "instructor" ? "active" : ""
          } w-1/2 border-2 p-2  duration-300 transition text-center ${
            activeTab === "instructor"
              ? "border-stone-600 bg-sky-800 text-white font-semibold"
              : "border-transparent text-gray-700 hover:bg-sky-100"
          } rounded-tl-lg shadow-xl`}
          onClick={() => handleTabClick("instructor")}
        >
          Instructor Login
        </div>
        <div
          className={`tab ${
            activeTab === "student" ? "active" : ""
          } w-1/2 border-2 p-2 transition duration-300 text-center ${
            activeTab === "student"
              ? " border-stone-600 bg-sky-800 text-white font-semibold"
              : "border-transparent text-gray-700 hover:bg-sky-100"
          } rounded-tr-lg shadow-xl`}
          onClick={() => handleTabClick("student")}
        >
          Student Login
        </div>
      </div>

      <div className="login-content">
        {activeTab === "instructor" && (
          <div className="flex-col justify-center items-center">
            <br />
            {/* Add instructor login form here */}
            <div className="flex-col justify-center items-center text-center bg-[#fdebd7] w-fit bg-white m-auto w-auto">
              <form onSubmit={loginUser}>
                <input
                  className="input-field m-2"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  type="email"
                  placeholder="Instructor Email"
                />
                <br />

                <input
                  className="input-field m-2"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  type="password"
                  placeholder="Instructor Password"
                />

                <br />
                <br />
                {/* <input type="submit" value="Login" /> */}
                <button className="submit-button" type="submit">
                  Login
                </button>
                <br />
                <br />
                <div className="text-center m-auto">
                  New Instructor?{" "}
                  <button
                    className="text-sky-500 hover:underline"
                    onClick={takeToSignUpPage}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === "student" && (
          <div className="">
            <br />
            {/* Add student login form here */}
            <div className="flex-col justify-center items-center text-center bg-[#fdebd7] w-fit bg-white m-auto w-auto">
              <form onSubmit={loginUser}>
                <input
                  className="input-field m-2"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  type="email"
                  placeholder="Email"
                />

                <br />

                <input
                  className="input-field m-2"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  type="password"
                  placeholder="Passowrd"
                />

                <br />
                <br />

                {/* <input type="submit" value="Login" /> */}

                <button className="submit-button m-auto" type="submit">
                  Login
                </button>

                <br />
                <br />

                <div className="text-center m-auto">
                  New user?{" "}
                  <button
                    className="text-sky-500 hover:underline"
                    onClick={takeToSignUpPage}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
