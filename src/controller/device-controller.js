const prisma = require("../prisma/client");

// Register a new device
exports.registerDevice = async (req, res) => {
  try {
    const { device_id, name } = req.body;
    let device = await prisma.device.findUnique({
      where: {
        device_id,
      },
    });
    if (!device) {
      device = await prisma.device.create({
        data: {
          device_id,
          name,
          machine_state: {
            create: {
              water_pump: false,
              acid_solution: true,
              npk_solution: false,
            },
          },
        },
        include: {
          machine_state: true,
        },
      });
    }
    return res.status(201).json(device);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Post device state
exports.postDeviceState = async (req, res) => {
  try {
    const { device_id } = req.params;
    const state = req.body;

    const device = await prisma.device.findUnique({
      where: { device_id },
    });

    if (!device) return res.status(404).json({ error: "Device not found" });

    const newState = await prisma.deviceState.create({
      data: {
        ...state,
        device_id: device.device_id
      },
    });

    res.status(201).json(newState);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.postMachineState = async (req, res) => {
  try {
    const { device_id } = req.params;
    const machineState = req.body;

    const device = await prisma.device.findUnique({ where: { device_id } });
    if (!device) return res.status(404).json({ error: "Device not found" });

    const latestState = await prisma.machineState.findFirst({
      where: { device_id },
      orderBy: { created_at: "desc" },
    });

    if (!latestState) {
      return res
        .status(404)
        .json({ error: "No machine state found for this device" });
    }

    const updatedState = await prisma.machineState.update({
      where: { id: latestState.id },
      data: machineState,
    });

    res.status(201).json(updatedState);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get latest machine state
exports.getLatestMachineState = async (req, res) => {
  try {
    const { device_id } = req.params;
    const device = await prisma.device.findUnique({ where: { device_id } });

    if (!device) return res.status(404).json({ error: "Device not found" });

    const latestState = await prisma.machineState.findFirst({
      where: { device_id },
    });

    res.status(200).json(latestState);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all device states
exports.getDeviceStates = async (req, res) => {
  try {
    const { device_id } = req.params;
    const device = await prisma.device.findUnique({ where: { device_id } });

    if (!device) return res.status(404).json({ error: "Device not found" });

    const states = await prisma.deviceState.findMany({
      where: { device_id },
      orderBy: { created_at: "desc" },
    });

    res.status(200).json(states);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
