"use client"

import { useCallback, useEffect, useState } from "react";
import { tasksApiService } from "@/entities/tasks/api";
import { Task } from "@/entities/tasks/model";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = useCallback(() => {
    tasksApiService.getTasks()
      .then((response) => setTasks(response.data));
  }, []);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <h2 className="text-xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl">
        Tasks list
      </h2>
      {tasks.length
        ? <ul role="list" className="divide-y divide-gray-100 pt-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between gap-x-6 py-5">
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
    </>
  );
};