import { router } from "./routes.mjs";
import express from "express";

const app = express();

app.use(router);
app.use(express.json());

export { app };
