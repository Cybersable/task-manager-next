import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import { routesList } from "@/services/routes";

import Link from 'next/link';

const mainListItems = [
  { 
    text: 'Dashboard',
    route: routesList.dashboard,
    icon: <HomeRoundedIcon />
  },
  { 
    text: 'Tasks',
    route: routesList.tasks,
    icon: <AssignmentRoundedIcon />
  },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item) => (
          <ListItem key={item.route.key} disablePadding sx={{ display: 'block' }}>
              <ListItemButton selected={item.route.path === routesList.dashboard.path} LinkComponent={Link} href={item.route.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
};
