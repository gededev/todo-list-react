import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import mockTasks from './data/mockTasks';
import Task from './models/Task';

//Local Storage Idea coming from Dev Ed : https://www.youtube.com/watch?v=pCA4qpQDZD8&ab_channel=DevEd
//Way to have a "persistent data" instead of using static mock data. Should be replaced by an API usage through service with a back end, like Express Js + PostGreSQL (or MongoDB for persistency)

function App() {
  const [tasks, setTasks] = useState<Task[]>(()=> getLocalTasks()) //should be replaced by a setter on a useEffect with an empty dependency array to launch a service to get the tasks when connected to API

  useEffect(()=>{
    saveLocalTasks()
  },[tasks])

  function saveLocalTasks() {
    if(tasks) localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  function getLocalTasks() {
    const localTasks = localStorage.getItem("tasks")
    if(localTasks === "[]" || localTasks === null) {
      return mockTasks
    }
    else{
     return JSON.parse(localTasks)
    }
  }

  return (
    <div className="App">
      <div className='content'>
        <TaskForm setter={setTasks}/>
        <TaskList tasks={tasks} setter={setTasks}/>
      </div>
    </div>
  );
}

export default App;
