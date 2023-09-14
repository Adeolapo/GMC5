// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './store/actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(editTask(task.id, { ...task, description: updatedDescription }));
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.description}</span>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default Task;
