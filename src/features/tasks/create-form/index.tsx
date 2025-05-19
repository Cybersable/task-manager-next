"use client"

import { useCallback } from "react";
import { tasksApiService } from "@/entities/tasks/api";
import TasksForm, { ITaskForm } from "@/entities/tasks/ui/form";

export default function TasksCreateForm() {
    const onFormSubmit = useCallback((data: ITaskForm) => {
        tasksApiService.createTask(data);
    }, []);

    return (<TasksForm onFormSubmit={onFormSubmit} />);
}