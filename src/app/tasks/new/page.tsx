"use client"

import { tasksApiService } from "@/entities/tasks/api";
import Button from "@/shared/ui/Button";
import Title from "@/shared/ui/Title";
import { useCallback } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";


interface ITaskForm {
  title: string
  description?: string
}

export default function TasksNewPage() {
  const { register, handleSubmit } = useForm<ITaskForm>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit = useCallback<SubmitHandler<ITaskForm>>((data) => {
    tasksApiService.createTask(data);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <Title>Adding new task</Title>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  type="text"
                  autoComplete="title"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1 focus:outline-indigo-600 sm:text-sm/6"
                  {...register('title', { required: true, maxLength: 50 })}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1 focus:outline-indigo-600 sm:text-sm/6"
                  {...register('description', { maxLength: 500 })}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences to describe task.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-4">
          <Button btn="ghost">
            Cancel
          </Button>
          <Button type="submit"btn="primary">
            Save
          </Button>
        </div>
      </form>
    </>
  )
}