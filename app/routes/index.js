<<<<<<< HEAD
import courseRouter from './course-route.js'

export default (app) =>{
    app.use('/courses',courseRouter);
=======
import moduleRouter from "./module-route.js";

export default (app)=>{
    app.use('/modules',moduleRouter);
>>>>>>> b4f9893a74aea673a0fa24ba71abe74e5c8aeeea
}