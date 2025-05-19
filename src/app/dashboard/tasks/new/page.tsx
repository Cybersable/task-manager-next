import TasksCreateForm from "@/features/tasks/create-form";
import { Typography } from "@mui/material";

export default function TasksNewPage() {

  return (
    <>
      <div className="flex justify-between items-center">
        <Typography variant="h4" gutterBottom>Adding new task</Typography>
      </div>
      <TasksCreateForm />
    </>
  );
}