"use client"

import Button from "@/shared/ui/Button";
import { tasksApiService } from "@/entities/tasks/api";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { routesList } from "@/services/routes";

export default function TaskDelete({ taskId }: { taskId: string }) {
    const { replace } = useRouter();

    const onClick = useCallback(() => {
        window.confirm("Do you really want to delete this task?") &&
        tasksApiService.deleteTask(taskId)
            .then(() => {
                replace(routesList.tasks.path);
            });
    }, [taskId]);

    return (
        <Button btn="dangerLink" onClick={onClick}>Delete task</Button>
    )
}