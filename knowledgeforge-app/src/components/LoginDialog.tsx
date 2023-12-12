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

function Login(): JSX.Element {
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
      const response = await AuthService.loginUser(
        JSON.stringify({ email, password })
      );

      const data = await response.json();
      // Handle the 'data' as needed

      if (response.status === 200) {
        dispatch(signInSuccess(data.sanitizedUser));
        navigate("/");
      }
    }
    if (activeTab === "instructor") {
      const response = await AuthService.loginInstructor(
        JSON.stringify({ email, password })
      );

      const data = await response.json();
      // Handle the 'data' as needed

      if (response.status === 200) {
        navigate("/");
      }
    }
  }

  const takeToSignUpPage = () => {
    console.log("take user to register page");
    navigate(Paths.registerPath);
  };

  return (
    <div className="Login bg-white">
      <div className="tabs flex flex-row justify-between">
        <div
          className={`tab ${
            activeTab === "instructor" ? "active" : ""
          } w-1/2 border-2 p-2 hover:bg-light_blue transition text-center ${
            activeTab === "instructor"
              ? "border-light_blue bg-light_blue text-white"
              : "border-transparent text-gray-700"
          } rounded-tl-lg shadow-md`}
          onClick={() => handleTabClick("instructor")}
        >
          Instructor Login
        </div>
        <div
          className={`tab ${
            activeTab === "student" ? "active" : ""
          } w-1/2 border-2 p-2 hover:bg-light_blue transition text-center ${
            activeTab === "student"
              ? "border-light_blue bg-light_blue text-white"
              : "border-transparent text-gray-700"
          } rounded-tr-lg shadow-md`}
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
                  New user?{" "}
                  <button
                    className="text-light_blue hover:underline"
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
                    className="text-light_blue hover:underline"
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
