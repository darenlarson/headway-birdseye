import React from 'react';
import '../scss/TaskList.scss';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">

      {tasks.map(task => (
        <Task
          key={task.id}
          project={task.project}
          title={task.title}
          dueDate={task.dueDate}
          dueTime={task.dueTime}
          completed={task.complete}
        />
      ))}

    </div>
  )
}

export default TaskList;