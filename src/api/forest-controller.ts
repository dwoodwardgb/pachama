import { Request, Router } from "express";
import { Forest } from "./forest-entity";

const router = Router();

router.get("/", async (req: Request, res) => {
  res.json(await req.db.getRepository(Forest).find());
});

export default router;
