import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Авторский блог</div>
      <div className={styles.description}>Веб-технологии, код, разбор ошибок</div>
    </header>
  );
};
