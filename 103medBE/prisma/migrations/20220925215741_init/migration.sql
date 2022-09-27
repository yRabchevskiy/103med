-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "rang" TEXT NOT NULL,
    "birstday" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Drug" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "doses" TEXT,
    "state" TEXT NOT NULL,
    "count" TEXT,
    "werehouse" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
