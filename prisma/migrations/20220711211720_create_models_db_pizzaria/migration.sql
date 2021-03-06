/*
  Warnings:

  - You are about to drop the `tb_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tb_order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tb_item" DROP CONSTRAINT "tb_item_order_id_fkey";

-- DropForeignKey
ALTER TABLE "tb_item" DROP CONSTRAINT "tb_item_product_id_fkey";

-- DropTable
DROP TABLE "tb_item";

-- DropTable
DROP TABLE "tb_order";

-- CreateTable
CREATE TABLE "tb_orders" (
    "id" TEXT NOT NULL,
    "table" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_up" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_items" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_up" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "tb_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_items" ADD CONSTRAINT "tb_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "tb_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_items" ADD CONSTRAINT "tb_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "tb_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
