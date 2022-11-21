import { Header } from './components/Header'
import { Todo } from './components/Todo';
import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Todo />
        </main>
      </div>
    </>
  )
}

export default App
