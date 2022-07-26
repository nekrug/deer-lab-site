CREATE TABLE "research" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" varchar,
  "long_description" varchar,
  "image_source" varchar,
  "enrollment_form_url" varchar,
  "status" varchar,
  "type" varchar,
  "sort_order" numeric,
  "deleted_on" timestamp,
  "deleted_by" varchar,
  "created_on" timestamp,
  "created_by" varchar
);

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "biography" varchar,
  "image_source" varchar,
  "active_yn" varchar(1),
  "deleted_on" timestamp,
  "deleted_by" varchar,
  "created_on" timestamp,
  "created_by" varchar
);

CREATE TABLE "role" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" varchar,
  "deleted_on" timestamp,
  "deleted_by" varchar,
  "created_on" timestamp,
  "created_by" varchar
);

CREATE TABLE "user_role" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "role_id" int NOT NULL,
  "created_on" timestamp,
  "created_by" varchar
);

ALTER TABLE "user_role" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "user_role" ADD FOREIGN KEY ("role_id") REFERENCES "role" ("id");
