import { Router } from "express";
import { StreamFilesController } from "./controller/StreamFilesController.js";

const router = Router();

router.post("/test", new StreamFilesController().handle);

export { router };
