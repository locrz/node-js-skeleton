import { Router } from "express";

const routes = Router();

routes.use("/", (req, res) => {
  res.json({ status: 200, message: "success" });
});

export default routes;
