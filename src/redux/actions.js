import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});

export const deleteTask = createAction('tasks/deleteTask', taskId => {
  return {
    payload: taskId,
  };
});

export const toggleCompleted = createAction('tasks/toggleCompleted', taskId => {
  return {
    payload: taskId,
  };
});

export const setStatusFilter = createAction(
  'filters/setStatusFilter',
  value => {
    return {
      payload: value,
    };
  }
);
