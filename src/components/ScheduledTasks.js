import React from 'react';
import '../scss/ScheduledTasks.scss';
import DayList from './DayList';

const ScheduledTasks = ({ tasks }) => {
  return (
    <div className="scheduled-tasks-ctn">
      <DayList tasks={tasks} day="Today" />
      <DayList tasks={tasks} day="Tomorrow" />
    </div>
  )
}

export default ScheduledTasks;