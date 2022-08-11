import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Task from './models/Task';

//Local Storage Idea coming from Dev Ed : https://www.youtube.com/watch?v=pCA4qpQDZD8&ab_channel=DevEd
//Way to have a "persistent data" instead of using static mock data. Should be replaced by an API usage through service with a back end, like Express Js + PostGreSQL (or MongoDB for persistency)

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <div className="App">
      <TaskForm setter={setTasks}/>
      <TaskList tasks={tasks} setter={setTasks}/>
    </div>
  );
}

export default App;
