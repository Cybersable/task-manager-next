import Title from "@/shared/ui/Title";
import TasksCreateForm from "@/features/tasks/create-form";

export default function TasksNewPage() {

  return (
    <>
      <div className="flex justify-between items-center">
        <Title>Adding new task</Title>
      </div>
      <TasksCreateForm />
    </>
  );
}