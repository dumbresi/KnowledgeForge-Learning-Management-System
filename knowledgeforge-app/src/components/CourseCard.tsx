import { type } from "os";
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
const CourseCard =(props:CourseCard)=> {

    return(
        <div>
            
        </div>
    )
}