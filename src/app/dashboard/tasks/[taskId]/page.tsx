import { tasksApiService } from "@/entities/tasks/api";
import { routesList } from "@/services/routes";
import { Typography } from "@mui/material";
import TaskDelete from "@/features/tasks/delete";
import Link from "next/link";
import Button from "@mui/material/Button";

export default async function TasksPage({ params }: { params: Promise<{ taskId: string }>}) {
    const { taskId } = await params;
    
    const task = await tasksApiService
      .getTasksItem(taskId)
      .then((response) => response.data);

    return (
      <div className="flex flex-col">
        <div className="flex justify-between items-center w-full">
          <Typography variant="h4" gutterBottom>{task.title}</Typography>
        </div>
        <p className="mt-2 truncate text-xs/5 text-gray-500">{task.description}</p>
        <div className="flex justify-end gap-1 items-center">
          <TaskDelete taskId={taskId} />
          |
          <Button 
            variant="outlined"
            color="secondary"
            size="small"
            href={routesList.tasksUpdate(taskId).path}
            LinkComponent={Link}
          >
            Update task
          </Button>
        </div>
      </div>
    );
}