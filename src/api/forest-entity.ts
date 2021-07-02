import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export type ForestType = "conservation" | "reforestation";
export const forestTypes: ForestType[] = ["conservation", "reforestation"];

@Entity()
export class Forest {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text" })
  type: ForestType;

  @Column({ type: "text" })
  blurb: string;

  @Column({ type: "text" })
  imageUrl: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "jsonb" })
  location: any;

  @Column()
  hectares: number;

  @Column({ type: "text" })
  country: string;

  @Column({ type: "jsonb" })
  carbonStoredSeries: number[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
