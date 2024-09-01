import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleComplete(task._id)}>
        {task.title}
      </span>
      <button onClick={() => onDeleteTask(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
