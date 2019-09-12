import React from 'react';
import { Route } from "react-router-dom";
import LoginView from './views/LoginView';
import TaskManagementView from './views/TaskManagementView';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginView} />
      <Route path="/task-manager" component={TaskManagementView} />
    </div>
  );
}

export default App;