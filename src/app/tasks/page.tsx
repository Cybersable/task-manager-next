"use client"

import { useEffect, useState } from "react";

interface ITask {
  id: string
  title: string
  description: string
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<ITask[] | undefined>();

  useEffect(() => {
    fetch("http://localhost:4200/api/tasks")
      .then(response => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch(err => console.error(err.message));
  }, []);

  return (
    <>
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
        Tasks list
      </h2>
      <ul role="list" className="divide-y divide-gray-100">
        {tasks?.map((task) => (
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
    </>
  );
};