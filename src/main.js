import { getTasks } from "./services/TaskService.js";
getTasks().then((tasks) => console.log("Task list:", tasks));
