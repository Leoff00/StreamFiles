import { Router } from "express";
import { StreamFilesController } from "./controller/StreamFilesController.mjs";

const router = Router();

router.post("/test", new StreamFilesController().handle);

export { router };
