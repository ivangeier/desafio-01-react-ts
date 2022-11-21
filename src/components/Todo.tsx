import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './Todo.module.css';
import { TodoItem } from './TodoItem';
import { v4 as uuidV4 } from 'uuid';

interface Task {
   id?: string,
   task: string,
   isDone: boolean
}

const tasksArray = [
   {
      id: "1",
      task: "Estudar React",
      isDone: false
   },
   {
      id: "2",
      task: "Estudar TypeScript",
      isDone: true
   },
   {
      id: "3",
      task: "Estudar Bot Telegram",
      isDone: false
   }
]

export function Todo() {

   const [tasks, setTasks] = useState(tasksArray)

   const [newTaskText, setNewTaskText] = useState('');

   function handleCreateNewTask(event: any) {
      event.preventDefault();

      const newTask = {
         id: uuidV4(),
         task: newTaskText,
         isDone: false
      }

      setTasks([...tasks, newTask]);
      setNewTaskText('');
   }

   function handleNewTaskChange(event: any) {
      setNewTaskText(event?.target.value)
   }

   function deleteTask(id: string) {
      const newTaskList = tasks.filter(task => task.id != id)
      setTasks(newTaskList);
   }

   return (
      <form onSubmit={handleCreateNewTask} className={styles.form}>
         <main>
            <input
               type="text"
               name='task'
               placeholder='Adicione uma nova tarefa'
               onChange={handleNewTaskChange}
               value={newTaskText}
               required
            />
            <button>
               Criar
               <PlusCircle size={18} />
            </button>
         </main>
         <section>
            {tasks.map(task => {
               return (
                  <TodoItem
                     key={task.id}
                     task={task.task}
                     isDone={task.isDone}
                     id={task.id}
                     onDeleteTask={deleteTask}
                  />
               )
            })}
         </section>
      </form>
   )
}