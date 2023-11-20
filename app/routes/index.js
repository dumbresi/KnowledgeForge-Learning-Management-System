import courseRouter from './course-route.js'
import instructorRouter from './instructor-route.js'
import userRouter from './user-route.js'

export default (app) =>{
    app.use('/courses',courseRouter);
    app.use('/instructor',instructorRouter);
    app.use('/user', userRouter)
}