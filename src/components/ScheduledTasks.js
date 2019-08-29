import React from 'react';
import '../scss/ScheduledTasks.scss';
import DayList from './DayList';

const ScheduledTasks = props => {
  return (
    <div className="scheduled-tasks-ctn">
      <DayList tasks={props.tasks} day="Today" />
      <DayList tasks={props.tasks} day="Tomorrow" />
    </div>
  )
}

export default ScheduledTasks;