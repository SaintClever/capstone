import expres from "express";
import { createUser, readUser, updateUser, deleteUser, searchUser } from "../controllers/userController.js";

const router = expres.Router();

// router.get("/", readUser);
router.post("/api", createUser);
router.get("/api", readUser);
router.put("/api", updateUser);
router.delete("/api/:_id", deleteUser);
// router.get("/api/:firstName", searchUser);

export { router as userRoutes };