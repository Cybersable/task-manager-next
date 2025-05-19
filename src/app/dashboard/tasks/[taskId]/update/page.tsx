import Title from "@/shared/ui/Title";
import { tasksApiService } from "@/entities/tasks/api";
import TasksUpdateForm from "@/features/tasks/update-form";

export default async function TasksUpdatePage({ params }: { params: Promise<{ taskId: string }> }) {
  const { taskId } = await params;

  const task = await tasksApiService
    .getTasksItem(taskId)
    .then((response) => response.data);

  return (
      <>
        <div className="flex justify-between items-center">
          <Title>Updating task</Title>
        </div>
        <TasksUpdateForm task={task} />
      </>
  )
}