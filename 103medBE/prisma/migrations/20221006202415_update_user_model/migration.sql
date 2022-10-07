-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Drug" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "doses" TEXT,
    "state" TEXT,
    "count" TEXT,
    "werehouse" TEXT,
    "category" TEXT
);
INSERT INTO "new_Drug" ("category", "count", "description", "doses", "id", "name", "state", "werehouse") SELECT "category", "count", "description", "doses", "id", "name", "state", "werehouse" FROM "Drug";
DROP TABLE "Drug";
ALTER TABLE "new_Drug" RENAME TO "Drug";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
