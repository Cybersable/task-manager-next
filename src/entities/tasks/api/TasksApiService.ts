import { api } from "@/shared/rest-api/api";
import {
  CreateTaskData,
  GetTasksResponse, UpdateTaskData
} from "@/entities/tasks/api/model";

export class TasksApiService {
  private BASE_URL = '/tasks';

  getTasks() {
    return api.get<GetTasksResponse[]>(this.BASE_URL);
  }

  createTask(data: CreateTaskData) {
    return api.post(this.BASE_URL, data);
  }

  updateTask(id: string, data: UpdateTaskData) {
    return api.patch(`${this.BASE_URL}/${id}`, data);
  }

  deleteTask(id: string) {
    return api.delete(`${this.BASE_URL}/${id}`);
  }
}