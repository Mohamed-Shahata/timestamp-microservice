import express from "express";
import appRoutes from "./app.routes.js";

const app = express();
const PORT = 5000;

// app.get("/", (req, res) => {
//   res.send("Timestamp Microservice");
// });

app.use("/api", appRoutes);

app.listen(PORT, () => console.log(`Server is live on port ${PORT}`));
