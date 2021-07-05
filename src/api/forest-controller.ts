import { Request, Router } from "express";
import { object } from "superstruct";
import { Connection, Repository } from "typeorm";
import { Forest } from "./forest-entity";

const router = Router();

function onlyTruthyValues(o) {
  const res = {};
  Object.entries(o).forEach(([key, val]) => {
    if (val) {
      res[key] = val;
    }
  });
  return res;
}

const fuzzyFields = ["name"];

function buildQuery(db: Connection, query: any) {
  return Object.entries(query).reduce((builder, [key, val]: any) => {
    if (fuzzyFields.includes(key)) {
      // TODO fix injection vulnurability for key
      return builder.andWhere(`LOWER(${key}) LIKE :${key}`, {
        [key]: `%${val.toLowerCase()}%`,
      });
    } else {
      // TODO fix injection vulnurability for key
      return builder.andWhere(`${key} = :${key}`, { [key]: val });
    }
  }, db.getRepository(Forest).createQueryBuilder());
}

router.get("/", async (req: Request, res) => {
  const filteredQuery = onlyTruthyValues(req.query);
  res.json(await buildQuery(req.db, filteredQuery).getMany());
});

router.get("/:forestId", async (req: Request, res) => {
  const forestId = req.params.forestId;
  if (forestId == "undefined") {
    return res.status(404).send();
  }
  res.json(await req.db.getRepository(Forest).findOne(forestId));
});

export default router;
