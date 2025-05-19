"use client"

import { Task } from "@/entities/tasks/model";
import { useCallback } from "react";
import { tasksApiService } from "@/entities/tasks/api";
import TasksForm, { ITaskForm } from "@/entities/tasks/ui/form";

export default function TasksUpdateForm({ task }: { task: Task }) {
    const onFormSubmit = useCallback((data: ITaskForm) => {
        tasksApiService.updateTask(task.id, data);
    }, [task]);

    return (<TasksForm task={task} onFormSubmit={onFormSubmit} />);
}