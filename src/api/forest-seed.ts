import { Connection } from "typeorm";
import { Forest } from "./forest-entity";

const seeds: Partial<Forest>[] = [
  {
    blurb: "This conservation project protects forested land",
    name: "Alligator River",
    imageUrl: "/Pachama-Project-AlligatorRiver-RiverView.jpg",
    hectares: 1113,
    description:
      "This conservation project protects forested land in the tidal region of northeastern North Carolina adjacent to the Alligator River National Wildlife Refuge. Most neighboring properties have been harvested, burned on site and then converted to agricultural land for crop production such as wheat and corn. This project was instead preserved via carbon markets, and the property has been safely placed under a Conservation Easement with USDA to ensure perpetuity of the natural forest. The proceeds from carbon revenue are used to fund the continuing management and natural restoration of this forest.",
    country: "United States",
    type: "conservation",
    location: [45, 45],
    carbonStoredSeries: [],
  },
  {
    blurb: "This conservation project protects forested land",
    name: "Hudson Farm",
    imageUrl: "/Pachama-Project-HudsonFarm-View.jpg",
    hectares: 9013,
    description:
      "This conservation project protects forested land in the tidal region of northeastern North Carolina adjacent to the Alligator River National Wildlife Refuge. Most neighboring properties have been harvested, burned on site and then converted to agricultural land for crop production such as wheat and corn. This project was instead preserved via carbon markets, and the property has been safely placed under a Conservation Easement with USDA to ensure perpetuity of the natural forest. The proceeds from carbon revenue are used to fund the continuing management and natural restoration of this forest.",
    country: "United States",
    type: "conservation",
    location: [45, 45],
    carbonStoredSeries: [],
  },
  {
    blurb: "This conservation project protects forested land",
    name: "Pocosin Lakes",
    imageUrl: "/Pachama-Project-PocosinLakes-National-Wildlife-Refuge.jpg",
    hectares: 2513,
    description:
      "This conservation project protects forested land in the tidal region of northeastern North Carolina adjacent to the Alligator River National Wildlife Refuge. Most neighboring properties have been harvested, burned on site and then converted to agricultural land for crop production such as wheat and corn. This project was instead preserved via carbon markets, and the property has been safely placed under a Conservation Easement with USDA to ensure perpetuity of the natural forest. The proceeds from carbon revenue are used to fund the continuing management and natural restoration of this forest.",
    country: "United States",
    type: "reforestation",
    location: [45, 45],
    carbonStoredSeries: [],
  },
];

export async function seedDb(conn: Connection) {
  const repo = conn.getRepository(Forest);
  const thereAreNoForestsYet = (await repo.count()) === 0;
  if (thereAreNoForestsYet) {
    await Promise.all(seeds.map((s) => repo.save(s)));
  }
}
