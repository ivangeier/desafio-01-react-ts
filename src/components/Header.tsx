import styles from './Header.module.css';
import rocketLogo from '../assets/rocketLogo.svg'

export function Header() {
   return (
      <header className={styles.header}>
         <img src={rocketLogo} alt="Rocket logo" />
         <p><span>to</span><span>do</span></p>
      </header>
   )
}