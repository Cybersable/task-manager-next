"use client";

import { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@/shared/ui/data-grid';
import { useCallback, useEffect, useState } from "react";
import { tasksApiService } from "@/entities/tasks/api";
import { Task } from "@/entities/tasks/model";
import { useRouter } from "next/navigation";
import { routesList } from "@/services/routes";

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'description', headerName: 'Description', width: 250 },
];

export default function TasksTable() {
  const [tasks, setTasks] = useState<Task[]>([]);
  // const [loading, setLoading] = useState(true);
  const { push } = useRouter();

  const fetchTasks = useCallback(() => {
    tasksApiService.getTasks()
      .then((response) => setTasks(response.data));
  }, []);

  const onTaskCardClick = useCallback((taskId: string) => {
    push(routesList.tasksItem(taskId).path);
  }, [push]);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <DataGrid
      rows={tasks}
      columns={columns}
    />
  );
}