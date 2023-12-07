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
        avg_star_rating: number,
        moduleIDs: Array<any>
    }
}
const CourseCard :React.FC<CourseCard>  =({ course })=> {

    return(
        <div className="border-2 border-black m-2 rounded-md">
            <img src={`${course.thumbnail}`}></img>
            <p className="text-center">{`${course.title}`}</p>
            <p className="text-center">{`${course.category}`}</p>
        </div>
    )
}

export default CourseCard