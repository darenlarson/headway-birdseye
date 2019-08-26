import React from 'react';
import '../css/TaskList.css';
import Task from './Task';

const TaskList = props => {
  return (
    <div className="task-list">

      {props.tasks.map(task => (
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