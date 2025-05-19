import { tasksApiService } from "@/entities/tasks/api";
import TasksUpdateForm from "@/features/tasks/update-form";
import { Typography } from "@mui/material";

export default async function TasksUpdatePage({ params }: { params: Promise<{ taskId: string }> }) {
  const { taskId } = await params;

  const task = await tasksApiService
    .getTasksItem(taskId)
    .then((response) => response.data);

  return (
      <>
        <div className="flex justify-between items-center">
          <Typography variant="h4" gutterBottom>Updating task</Typography>
        </div>
        <TasksUpdateForm task={task} />
      </>
  )
}