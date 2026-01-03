import {adduser, getuser} from "../controllers/FirstController.js";
import express from "express";
const router = express.Router();
router.get('/get-user',getuser);
router.get('/add-user',adduser);
export default router;