import courseRouter from './course-route.js'
import instructorRouter from './instructor-route.js'

export default (app) =>{
    app.use('/courses',courseRouter);
    app.use('/instructor',instructorRouter);
}