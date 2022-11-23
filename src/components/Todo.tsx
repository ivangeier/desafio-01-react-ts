import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Todo.module.css';
import { TodoItem } from './TodoItem';
import { v4 as uuidV4 } from 'uuid';

interface Task {
   id: string,
   task: string,
   isDone: boolean
}

export function Todo() {

   const [tasks, setTasks] = useState<Task[]>([])

   const [newTaskText, setNewTaskText] = useState('');

   function handleCreateNewTask(event: FormEvent) {
      event.preventDefault();

      const newTask = {
         id: uuidV4(),
         task: newTaskText,
         isDone: false
      }

      setTasks([...tasks, newTask]);
      setNewTaskText('');
   }

   function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
      setNewTaskText(event?.target.value)
   }

   function deleteTask(id: string) {
      const newTaskList = tasks.filter(task => task.id != id)
      setTasks(newTaskList);
   }

   function changeTaskStatus(id: string) {
      const newTaskListStatus = tasks.map(task => {
         if (task.id == id) {
            task.isDone = !task.isDone;
         }
         return task
      })
      setTasks(newTaskListStatus);
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
         <section className='tasks'>
            {tasks.map(task => {
               return (
                  <TodoItem
                     key={task.id}
                     task={task.task}
                     isDone={task.isDone}
                     id={task.id}
                     onDeleteTask={deleteTask}
                     onChangeTaskStatus={changeTaskStatus}
                  />
               )
            })}
         </section>
      </form>
   )
}