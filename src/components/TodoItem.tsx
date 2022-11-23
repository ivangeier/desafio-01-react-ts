import { Circle, Trash } from 'phosphor-react';
import styles from './TodoItem.module.css';
import doneImage from '../assets/done.svg';

interface TodoItemProps {
   task: string;
   isDone: boolean;
   id: string;
   onDeleteTask: (id: string) => void;
   onChangeTaskStatus: (id: string) => void;
}

export function TodoItem({ task, isDone, id, onDeleteTask, onChangeTaskStatus }: TodoItemProps) {

   function handleDeleteTask() {
      onDeleteTask(id);
   }

   function handleStatusChange() {
      onChangeTaskStatus(id);
   }

   return (
      <div className={styles.wrapper}>
         <div>
            {isDone
               ? <img
                  src={doneImage}
                  alt="done"
                  className={styles.checked}
                  onClick={handleStatusChange}
               />
               : <Circle
                  size={18}
                  className={styles.circle}
                  onClick={handleStatusChange}
               />
            }
         </div>
         <div className={`${styles.task} ${isDone ? styles.done : ''}`}>
            {task}
         </div>
         <div onClick={handleDeleteTask}>
            <Trash size={18} className={styles.delete} />
         </div>
      </div>
   )
}
