import moduleRouter from "./module-route.js";

export default (app)=>{
    app.use('/modules',moduleRouter);
}