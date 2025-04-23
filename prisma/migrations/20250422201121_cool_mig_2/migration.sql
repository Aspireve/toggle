/*
  Warnings:

  - You are about to drop the column `deviceId` on the `DeviceState` table. All the data in the column will be lost.
  - You are about to drop the column `deviceId` on the `MachineState` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DeviceState" DROP COLUMN "deviceId";

-- AlterTable
ALTER TABLE "MachineState" DROP COLUMN "deviceId";
