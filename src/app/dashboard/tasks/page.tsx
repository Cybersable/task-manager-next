import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TasksTable from '@/widgets/tasks-table';
import { routesList } from "@/services/routes";
import Link from "next/link";

export default function TasksPage() {

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Tasks list
        </Typography>
        <Button 
          variant="outlined"
          color="secondary"
          size="small"
          href={routesList.tasksNew.path}
          LinkComponent={Link}
        >
          Add task
        </Button>
      </Box>
      <Paper sx={{ height: 400, width: '100%' }}>
        <TasksTable />
      </Paper>
    </Box>
  );
};
