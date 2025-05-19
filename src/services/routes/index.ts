export const routesList = {
    home: {
        key: 'HOME_PAGE',
        path: '/',
    },
    tasks: {
        key: 'TASKS_PAGE',
        path: '/tasks',
    },
    tasksItem: (taskId: string) => ({
        key: `TASKS_${taskId}_PAGE`,
        path: `/tasks/${taskId}`
    }),
    tasksNew: {
        key: 'TASKS_NEW_PAGE',
        path: '/tasks/new',
    },
    tasksUpdate: (taskId: string) => ({
        key: `TASKS_UPDATE_${taskId}_PAGE`,
        path: `/tasks/update/${taskId}`,
    }),
} as const;