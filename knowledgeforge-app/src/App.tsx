import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import AllCoursePage from "./pages/AllCoursePage";
import RegisterUserPage from "./pages/RegisterUserPage";
import InstructorDetails from "./pages/InstructorDetails";
import UserPage from "./pages/UserPage";
import * as Paths from "./resources/paths";
import CourseDetails from "./components/CourseDetails";
import AddCoursePage from "./pages/AddCoursePage";
import Sidebar from "./components/Sidebar";
import SettingsPage from "./pages/SettingsPage";
import UserCourses from "./pages/UserCourses";
import AddModulePage from "./pages/AddModulePage";
import ContactUs from "./pages/Contactus";

function App() {
  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("./service-worker.ts")
          .then((registration) => {
            console.log("Service Worker registered:", registration);
          })
          .catch((error) => {
            console.log("Service Worker registration failed:", error);
          });
      });
    }
  }, []);

  const category = (category: string) => {
    // TODO
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <AllCoursePage pageType={"allCourses"} />
                {/* {<UserPage/>} */}
              </div>
            }
          />

          <Route element={<Sidebar category={category} />}></Route>
          <Route
            path={Paths.registerPath}
            element={<RegisterUserPage isLogin={false} />}
          />
          <Route
            path={Paths.loginPath}
            element={<RegisterUserPage isLogin={true} />}
          />
          <Route path={Paths.courseDetailsPath} element={<CourseDetails />} />
          <Route path={Paths.userDetailsPath} element={<UserPage />} />
          <Route
            path={Paths.instructorDetailsPath}
            element={<InstructorDetails />}
          />
          <Route path={Paths.addCoursePath} element={<AddCoursePage />} />
          <Route path={Paths.settingsPath} element={<SettingsPage />} />
          <Route path={Paths.userCourses} element={<UserCourses />} />
          <Route path={Paths.addModulePage} element={<AddModulePage />} />
          <Route path={Paths.contactUs} element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
