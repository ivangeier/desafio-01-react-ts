import { ClipboardText } from 'phosphor-react';
import React from 'react'
import styles from './EmptyTasks.module.css';

export default function EmptyTasks() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.content}>
            <ClipboardText size={56} />
            <h1>Você ainda não tem tarefas cadastradas</h1>
            <h2>Crie tarefas e organize seus itens a fazer</h2>
         </div>
      </div>
   )
}
