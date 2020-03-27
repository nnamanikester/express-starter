const { Router } = require("express");
const LogEntry = require("../models/LogEntry");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.send(entries);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const log = await logEntry.save();
    res.json(log);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
