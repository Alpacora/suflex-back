-- CreateTable
CREATE TABLE "_CharacterToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CharacterToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "characters" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CharacterToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToUser_AB_unique" ON "_CharacterToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToUser_B_index" ON "_CharacterToUser"("B");
