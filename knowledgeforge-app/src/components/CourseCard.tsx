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
        <div className="border border-gray-400 m-2 rounded-md bg-white h-60 flex flex-col">
            
            <div className="h-1/3 bg-red-400"><img alt='loading'src={`${course.thumbnail}`}></img></div>
            <div className="px-4 pt-3 pb-2">{`${course.title}`}</div>
            <div className="flex flex-row px-5 py-0">
                <div className="flex flex-col text-xs text-gray-600">
                    Number of lessons
                    <h3>{course.noOfModules}</h3>
                </div>
            </div>
            <hr className="h-2" />
            
            <div className="px-3 text-xs text-gray-600">
                {course.description}
                <p className="text-center">{`${course.category}`}</p>
            </div>

            
        </div>
    )
}

export default CourseCard