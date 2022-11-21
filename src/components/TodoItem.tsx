import { Circle, Trash } from 'phosphor-react';
import styles from './TodoItem.module.css';

export function TodoItem({ task, isDone, id, onDeleteTask }: any) {

   function handleDeleteTask() {
      onDeleteTask(id)
   }

   return (
      <div className={styles.wrapper}>
         <div>
            <Circle size={18} className={styles.circle} />
         </div>
         <div className={styles.task}>
            {task}
         </div>
         <div onClick={handleDeleteTask}>
            <Trash size={18} className={styles.delete} />
         </div>
      </div>
   )
}
