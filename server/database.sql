CREATE TABLE "our_toDos" (
"id" SERIAL PRIMARY KEY,
"todo" VARCHAR(150),
"status" BOOLEAN DEFAULT FALSE
);

INSERT INTO "our_toDos" ("todo", "status")
VALUES ('Wash the car', 'true'),('Get 8hrs of sleep','False');