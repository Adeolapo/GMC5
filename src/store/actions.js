
// actions.js
export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  export const editTask = (taskId, updatedTask) => {
    return {
      type: 'EDIT_TASK',
      payload: { taskId, updatedTask },
    };
  };
  
  export const filterTasks = (filterType) => {
    return {
      type: 'FILTER_TASKS',
      payload: filterType,
    };
  };
  