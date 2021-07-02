import { Router } from "express";
import forests from "./api/forest-controller";

const router = Router();

router.use("/api/forests", forests);

export default router;
