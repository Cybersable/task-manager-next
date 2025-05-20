"use client"

import { Button } from "@mui/material";
import { tasksApiService } from "@/entities/tasks/api";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { routesList } from "@/services/routes";

export default function TaskDelete({ taskId }: { taskId: string }) {
  const { replace } = useRouter();

  const onClick = useCallback(() => {
    if (!window.confirm("Do you really want to delete this task?")) {
        return;
    }

    tasksApiService.deleteTask(taskId)
      .then(() => {
        replace(routesList.tasks.path);
      });
  }, [taskId, replace]);

  return (<Button onClick={onClick}>Delete task</Button>);
}