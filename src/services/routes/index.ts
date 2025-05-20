export const routesList = {
    home: {
        key: 'HOME_PAGE',
        path: '/',
    },
    dashboard: {
        key: 'DASHBOARD_PAGE',
        path: '/dashboard',
    },
    tasks: {
        key: 'TASKS_PAGE',
        path: '/dashboard/tasks',
    },
    tasksItem: (taskId: string) => ({
        key: `TASKS_${taskId}_PAGE`,
        path: `/dashboard/tasks/${taskId}`
    }),
    tasksNew: {
        key: 'TASKS_NEW_PAGE',
        path: '/dashboard/tasks/new',
    },
    tasksUpdate: (taskId: string) => ({
        key: `TASKS_UPDATE_${taskId}_PAGE`,
        path: `/dashboard/tasks/${taskId}/update`,
    }),
} as const;