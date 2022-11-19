import { Circle, Trash } from 'phosphor-react';
import styles from './TodoItem.module.css';

export function TodoItem() {
   return (
      <div className={styles.wrapper}>
         <div>
            <Circle size={18} className={styles.circle} />
         </div>
         <div className={styles.task}>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
         </div>
         <div>
            <Trash size={18} className={styles.delete} />
         </div>
      </div>
   )
}
