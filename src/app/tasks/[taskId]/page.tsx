import { tasksApiService } from "@/entities/tasks/api";
import { routesList } from "@/services/routes";
import Link from "@/shared/ui/Link";
import Title from "@/shared/ui/Title";

export default async function TasksPage({ params }: { params: Promise<{ taskId: string }>}) {
    const { taskId } = await params;
    
    const task = await tasksApiService
      .getTasksItem(taskId)
      .then((response) => response.data);

    const path = routesList.tasksUpdate(taskId).path;

    return (
      <div className="flex flex-col">
        <div className="flex justify-between items-center w-full">
          <Title>{task.title}</Title>
          <Link href={path}>Update task</Link>
        </div>
        <p className="mt-2 truncate text-xs/5 text-gray-500">{task.description}</p>
      </div>
    );
}