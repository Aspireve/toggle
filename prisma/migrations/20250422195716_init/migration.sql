-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "device_id" TEXT NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceState" (
    "id" SERIAL NOT NULL,
    "device_id" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "pressure" DOUBLE PRECISION NOT NULL,
    "light_level" DOUBLE PRECISION NOT NULL,
    "soil_moisture" DOUBLE PRECISION NOT NULL,
    "motion_detected" BOOLEAN NOT NULL,
    "co2_level" DOUBLE PRECISION NOT NULL,
    "gas_leak" BOOLEAN NOT NULL,
    "flame_detected" BOOLEAN NOT NULL,
    "noise_level" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deviceId" INTEGER NOT NULL,

    CONSTRAINT "DeviceState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MachineState" (
    "id" SERIAL NOT NULL,
    "device_id" TEXT NOT NULL,
    "water_pump" BOOLEAN NOT NULL,
    "acid_solution" BOOLEAN NOT NULL,
    "npk_solution" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deviceId" INTEGER NOT NULL,

    CONSTRAINT "MachineState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Device_device_id_key" ON "Device"("device_id");

-- AddForeignKey
ALTER TABLE "DeviceState" ADD CONSTRAINT "DeviceState_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("device_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MachineState" ADD CONSTRAINT "MachineState_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "Device"("device_id") ON DELETE RESTRICT ON UPDATE CASCADE;
