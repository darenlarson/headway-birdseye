import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <>

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

    </>
  )
}

export default TaskList;