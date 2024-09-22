import { Router } from "express";
import { userModel } from "../models/index.js";

export const userRoute = Router();
userRoute.get("/users", async (_, res) => {
  const users = await userModel.find({});
  res.json(users);
});
