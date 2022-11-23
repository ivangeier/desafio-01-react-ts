import React from 'react'
import styles from './StatusBar.module.css';

interface StatusBarInterface {
   created: number;
   done: number;
}

export function StatusBar({ created, done }: StatusBarInterface) {
   return (
      <div className={styles.wrapper}>
         <div className={styles.createdItemsBox}>
            <span>Tarefas criadas</span>
            <span className={styles.info}>{created}</span>
         </div>
         <div className={styles.doneItemsBox}>
            <span>Concluídas</span>
            <span className={styles.info}>{done} de {created}</span>
         </div>
      </div>
   )
}
