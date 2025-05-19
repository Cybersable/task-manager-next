"use client"

import { useCallback, useEffect, useState } from "react";
import { tasksApiService } from "@/entities/tasks/api";
import { Task } from "@/entities/tasks/model";
import { useRouter } from "next/navigation";
import { routesList } from "@/services/routes";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { push } = useRouter();

  const fetchTasks = useCallback(() => {
    tasksApiService.getTasks()
      .then((response) => setTasks(response.data));
  }, []);

  const onAddTaskBtnClick = useCallback(() => {
    push(routesList.tasksNew.path);
  }, []);

  const onTaskCardClick = useCallback((taskId: string) => {
    push(routesList.tasksItem(taskId).path);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Tasks list
        </Typography>
        <Button variant="outlined" color="secondary" size="small" onClick={onAddTaskBtnClick}>
          Add task  
        </Button>
      </Box>
      <Box>
        {tasks.length
          ? <ul role="list" className="divide-y divide-gray-100 pt-2">
            {tasks.map((task) => (
              <li 
                key={task.id}
                className="flex justify-between gap-x-6 py-5 cursor-pointer"
                onClick={() => onTaskCardClick(task.id)}
              >
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">{task.title}</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">{task.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          : <p className="text-l font-semibold pt-5 text-gray-600">Tasks list is empty.</p>
        }
      </Box>
    </Box>
  );
};