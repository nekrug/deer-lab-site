CREATE TABLE "research" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL UNIQUE,
  "description" varchar,
  "long_description" varchar,
  "image_source" varchar,
  "enrollment_form_url" varchar,
  "status" varchar default "draft",
  "type_id" int NOT NULL,
  "sort_order" numeric,
  "deleted_on" timestamp,
  "deleted_by" varchar,
  "created_on" timestamp,
  "created_by" varchar
);

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "email" varchar NOT NULL,
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
  "name" varchar NOT NULL UNIQUE,
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

CREATE TABLE "research_type" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL UNIQUE
);

ALTER TABLE "user_role" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "user_role" ADD FOREIGN KEY ("role_id") REFERENCES "role" ("id");

ALTER TABLE "research" ADD FOREIGN KEY ("type_id") REFERENCES "research_type" ("id");

INSERT INTO research_type (name) VALUES 
  ('study'),
  ('project');

--  ALTER TABLE research ADD CONSTRAINT constraint_name UNIQUE (name);
/*
DROP TABLE research
DROP TABLE user
DROP TABLE role
DROP TABLE user_role
DROP TABLE research_type
*/