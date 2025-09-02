import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const newDate = new Date();
  res.json({
    unix: newDate.getTime(),
    utc: newDate.toUTCString(),
  });
});

router.get("/:date", (req, res) => {
  let date = req.params.date;

  if (!isNaN(date)) {
    date = parseInt(date);
  }

  const parseDate = new Date(date);

  if (parseDate.toString() === "Invalid Date") {
    res.json({
      error: "Invalid Date",
    });
  }

  res.json({
    unix: parseDate.getTime(),
    utc: parseDate.toUTCString(),
  });
});

export default router;
