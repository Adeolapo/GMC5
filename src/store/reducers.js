
// reducers.js
const initialState = {
    tasks: [],
    filter: 'all', // You can use 'all', 'done', 'notDone' as filter options.
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
  
      case 'EDIT_TASK':
        const updatedTasks = state.tasks.map((task) =>
          task.id === action.payload.taskId ? action.payload.updatedTask : task
        );
        return {
          ...state,
          tasks: updatedTasks,
        };
  
      case 'FILTER_TASKS':
        return {
          ...state,
          filter: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  