import { Request, Router } from "express";
import { Forest } from "./forest-entity";

const router = Router();

router.get("/", async (req: Request, res) => {
  res.json(await req.db.getRepository(Forest).find());
});

router.get("/:forestId", async (req: Request, res) => {
  const forestId = req.params.forestId;
  if (forestId == "undefined") {
    return res.status(404).send();
  }
  res.json(await req.db.getRepository(Forest).findOne(forestId));
});

export default router;
