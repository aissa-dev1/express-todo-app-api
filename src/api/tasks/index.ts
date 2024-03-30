import { Router } from "express";
import * as controller from "./controller";

const router = Router();

router.get("/", controller.getAllTasks);

router.post("/create_task", controller.createTask);

router.delete("/delete_task/:id", controller.deleteTask);

router.delete("/delete_all_tasks", controller.deleteAllTasks);

router.patch("/update_task_completion/:id", controller.updateTaskCompletion);

router.patch("/update_task_info/:id", controller.updateTaskInfo);

export default router;
