//url routes for authentication
import { login, signup, logout } from "../controllers/auth.controllers.js";
import express from "express";

const router = express.Router();

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);
export default router