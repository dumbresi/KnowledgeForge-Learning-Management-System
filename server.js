import express from "express";
import initialize from "./app/app.js";
const app = express();
const port =3000;
initialize(app);

<<<<<<< HEAD
app.listen(port,()=>console.log("listening on port 3000"))
=======
app.listen(port,()=>console.log("listening on port 3000"));
>>>>>>> b4f9893a74aea673a0fa24ba71abe74e5c8aeeea
