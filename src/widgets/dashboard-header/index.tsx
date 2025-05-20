import * as React from 'react';
import Stack from '@mui/material/Stack';
import ColorModeIconDropdown from '@/features/theme/color-mode-icon-dropdown';
import NavigationBreadcrumbs from '@/shared/ui/breadcrumbs';

export default function DashboardHeader() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavigationBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}