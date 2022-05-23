import { router } from "./routes.js";
import express from "express";
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(router);
app.use(express.urlencoded({ extended: true }));

export { app };
