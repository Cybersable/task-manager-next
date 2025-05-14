export interface GetTasksResponse {
  id: string
  title: string
  description?: string
}

export interface CreateTaskData {
  title: string
  description?: string
}

export interface UpdateTaskData extends CreateTaskData {

}