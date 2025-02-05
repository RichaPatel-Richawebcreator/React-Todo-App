import { useState } from 'react'
import './Todo.css'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage';

export const Todo = () => {


  const [task, setTask] = useState(getLocalStorageTodoData);

  const handleFormSubmit = (inputValue) => {
    const {id, content, checked} = inputValue

    // to check if input field is empty or not
    if(!content) return;
    
    // to check if data is already existing or not.
    // if(task.includes(inputValue)) return
    const ifTodoContentMatched  = task.find((curTask) => curTask.content === content );
    if(ifTodoContentMatched) return;
    setTask((prevTask) => [...prevTask, {id, content, checked}]);
  }

  // add data to local Storage

  setLocalStorageTodoData(task);

  const handleDeleteTask = (seletedTask) => {
    const updatedTask = task.filter((curTask) => curTask.content !== seletedTask);
    setTask(updatedTask);
  }

  const handleClearTodoData = () => {
    setTask([]);
  }

  const handleCheckedTask = (checkedTask) => {
    const updatedTask = task.map((curTask) => {
      if(curTask.content === checkedTask) {
        return {...curTask, checked: !curTask.checked}
      }else{
        return curTask
      }
    })
    setTask(updatedTask);
  } 

  // const handleDoneTask = (completedTask) => {
  //   console.log(completedTask);

  // }

  return (
    <>
        <section className='todo-container'>
            <header>
              <h1>Todo List</h1>
              <TodoDate />
            </header>
            <TodoForm onAddTodo = {handleFormSubmit} />
            <section className='myUnOrdList'>
              <ul className='todo-list'>
                {
                  task.map((curTask)=> {
                    return(
                      <TodoList key={curTask.id} data={curTask.content} checked={curTask.checked} ondeleteTask={handleDeleteTask} onCheckedTask={handleCheckedTask} />
                    )
                  })
                }
              </ul>
            </section>
            <section>
              <button className='clear-btn' onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    </>
  )
}
