// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './store/actions';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask({ id: Date.now(), description: taskDescription, isDone: false }));
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddTask;
