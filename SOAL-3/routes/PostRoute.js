import express from "express";
import {
  createData,
  deleteData,
  detailData,
  getData,
  updateData,
} from "../controller/CreateController.js";

const router = express.Router();

// CRUD

// create
router.post("/createData", createData);
router.get("/getData", getData);
router.put("/updateData/:id", updateData);
router.get("/detailData/:id", detailData);
router.delete("/deleteData/:id", deleteData);

export default router;
