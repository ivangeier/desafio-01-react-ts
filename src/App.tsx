import { Header } from './components/Header'
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <TodoInput />
        <TodoItem />
      </div>
    </>
  )
}

export default App
