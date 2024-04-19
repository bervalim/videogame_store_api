-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "image" VARCHAR(200) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_id_key" ON "Image"("id");
