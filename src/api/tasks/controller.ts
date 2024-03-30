import { Request, Response } from "express";
import Task from "./models/task";

export async function getAllTasks(req: Request, res: Response) {
  try {
    const tasks = await Task.find();
    return res.status(200).json({ tasks });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error when trying to get the tasks!" });
  }
}

export async function createTask(req: Request, res: Response) {
  try {
    const name = req.body.name as string;
    const description = req.body.description as string;
    const tasks = await Task.find();

    if (!name) {
      return res.status(500).json({ message: "Please provide a task name!" });
    }

    if (!description) {
      return res
        .status(500)
        .json({ message: "Please provide a task description!" });
    }

    if (tasks.some((t) => t.name === name)) {
      return res
        .status(500)
        .json({ message: `Task with name '${name}' already exists!` });
    }

    const createTime = Date.now();

    const task = await Task.create({
      name,
      description,
      completed: false,
      createdAt: createTime,
      updatedAt: createTime,
    });

    await task.save();
    return res
      .status(200)
      .json({ task, message: `Task with name ${name} created!` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error when trying to create a task!" });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const task = await Task.findOne({ _id: req.params.id });

    if (!task) {
      return res
        .status(404)
        .json({ message: "No task found with the given id!" });
    }

    await Task.deleteOne({ _id: task._id });
    return res.status(200).json({ message: "Task deleted successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error when trying to delete a task!" });
  }
}

export async function deleteAllTasks(req: Request, res: Response) {
  try {
    const role = req.query.role as string;
    const allow = req.query.allow as string;

    if (role !== "admin" || allow !== "true") {
      return res
        .status(403)
        .json({ message: "You don't have access to this endpoint!" });
    }

    await Task.deleteMany({});
    return res.status(200).json({ message: "Tasks deleted successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error when trying to delete tasks!" });
  }
}

export async function updateTaskCompletion(req: Request, res: Response) {
  try {
    const completed = req.body.completed as boolean;
    const task = await Task.findOne({ _id: req.params.id });

    if (!task) {
      return res
        .status(404)
        .json({ message: "No task found with the given id!" });
    }

    const updateTime = Date.now();

    await Task.updateOne(
      { _id: task._id },
      { $set: { completed, updatedAt: updateTime } }
    );
    if (completed) {
      return res.status(200).json({
        updatedAt: updateTime,
        message: "Task uncompleted successfully!",
      });
    } else {
      return res.status(200).json({
        updatedAt: updateTime,
        message: "Task completed successfully!",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error when trying to update a task!" });
  }
}

export async function updateTaskInfo(req: Request, res: Response) {
  try {
    const name = req.body.name as string;
    const description = req.body.description as string;
    const tasks = await Task.find();
    const task = await Task.findOne({ _id: req.params.id });

    if (!task) {
      return res
        .status(404)
        .json({ message: "No task found with the given id!" });
    }

    if (!name) {
      return res.status(500).json({ message: "Please provide a task name!" });
    }

    if (!description) {
      return res
        .status(500)
        .json({ message: "Please provide a task description!" });
    }

    const updateTime = Date.now();

    await Task.updateOne(
      { _id: task._id },
      { $set: { name, description, updatedAt: updateTime } }
    );
    return res.status(200).json({
      name,
      description,
      updatedAt: updateTime,
      message: "Task updated successfully!",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error when trying to update a task!" });
  }
}
