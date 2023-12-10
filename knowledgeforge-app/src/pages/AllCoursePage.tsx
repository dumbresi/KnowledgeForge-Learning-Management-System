import React ,{useState, useEffect} from 'react'
import CourseCard from '../components/CourseCard';
import * as CourseService from '../services/course-service';
import Course from '../models/Course';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import SearchBox from '../components/SearchBox';
import Sidebar from '../components/Sidebar';
import logo from "../resources/knowledgeForge.jpeg";
import Topbar from "../components/Topbar";
import * as Paths from '../resources/paths'
import * as AuthService from '../services/auth-service'


const AllCoursePage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch course data from an API
    const fetchData = async () => {
      try {
        const data = CourseService.getCourses();
        setCourses(await data);
        setFilteredCourses(courses);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, []);

  // const [courseList, setCourses]=useState([...courses]);
  const searchHandler = (query: string) => {
    const filteredCourses = [...courses].filter((c) =>
      c.title.toLowerCase().includes(query.toLowerCase())
    );
    if (query!=="") {
      setFilteredCourses(filteredCourses);
    }else{
      setFilteredCourses(courses);
    }
    console.log(filteredCourses);
  };
  const handleLogout=async()=>{
    const response = await AuthService.logout();

    if(response.status==200){
      navigate(Paths.loginPath);
    }

  }

  return (
    <div className="h-screen bg-background_cream flex ">
      <div>
        <Sidebar />
      </div>
      
      <div className='flex flex-row justify-center'>
    <nav>
        <ul>
          <li>
            <Link to="/user/register">Register</Link>
          </li>
          <li>
            <Link to="/user/login">Login</Link>
          </li>
          <li>
            <Link to="/user/current">User Details</Link>
          </li>
        </ul>
      </nav>
    </div> 

      <div className="w-[95%] h-auto rounded-md bg-background_cream ab">
        <div>
          <Topbar />
        </div>
        <div className="grid gap-1 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] p-2">
          {courses.map((courseItem) => (
            <CourseCard course={courseItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCoursePage;
