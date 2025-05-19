"use client"

import { ReactNode } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DashboardSideMenu from "@/widgets/dashboard-side-menu";
import DashboardNavbar from "@/widgets/dashboard-navbar";
import DashboardHeader from "@/widgets/dashboard-header";
import { alpha } from '@mui/material/styles';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <DashboardSideMenu />
      <DashboardNavbar />
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
            : alpha(theme.palette.background.default, 1),
          overflow: 'auto',
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 },
          }}
        >
          <DashboardHeader />
          {children}
        </Stack>
      </Box>
    </Box>
  );
}