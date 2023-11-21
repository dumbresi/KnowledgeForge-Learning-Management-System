import courseRouter from './course-route.js'
import moduleRouter from './module-route.js'

export default (app) =>{
    app.use('/courses',courseRouter);
    app.use('/modules',moduleRouter);
}

