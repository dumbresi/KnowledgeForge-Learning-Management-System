import React from "react";

type CourseCard ={
    course:{
        title: string,
        instructor: string,
        duration: string,
        fees: number,
        category: string,
        subCategory: string,
        thumbnail: string,
        description: string,
        noOfModules: number,
        creationTime: string,
        avg_star_rating: number
    }
}
const CourseCard :React.FC<CourseCard>  =({ course })=> {

    return(
        <div className="course-card">
            <img src={`${course.thumbnail}`}></img>
            <p>{`${course.title}`}</p>
            <p>{`${course.category}`}</p>
        </div>
    )
}

export default CourseCard