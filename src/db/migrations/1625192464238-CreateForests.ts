import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateForests1625192464238 implements MigrationInterface {
  name = "CreateForests1625192464238";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "forest" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "type" text NOT NULL, "blurb" text NOT NULL, "imageUrl" text NOT NULL, "description" text NOT NULL, "location" jsonb NOT NULL, "hectares" integer NOT NULL, "country" text NOT NULL, "carbonStoredSeries" jsonb NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_013abc3aa4fe96b410557623bec" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "forest"`);
  }
}
