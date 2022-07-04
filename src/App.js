import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';


function App() {
 
  //tasks is defined in the useState()
  //setTasks works the tasks array
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Task1',
        day: 'Day1',
        reminder: true,
    },
    {
        id: 2,
        text: 'Task2',
        day: 'Day2',
        reminder: true,
    },
    {
        id: 3,
        text: 'Task3',
        day: 'Day3',
        reminder: false,
    }
])

//Delete Task
const deleteTask = (id) => {
  //console.log('delete', id);
  console.log(id);
  // console.log(task.id);
  setTasks(tasks.filter( (task) => task.id !== id ));
}

// Toggle Reminder
/* Needs id because it needs to know which one to toggle;  
   Function references are passed down..Behavior declared at top (here)
*/
const toggleReminder = (id) => {
  setTasks(tasks.map( (task) => task.id === id ? {
    ...task, reminder: !task.reminder
  } : task))
}

  return (
    <div className='container'>

      <Header title='Task Tracker'/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
        onToggle={toggleReminder} /> : "No tasks"}
      <AddTask />
    </div>
  );
}

export default App;
