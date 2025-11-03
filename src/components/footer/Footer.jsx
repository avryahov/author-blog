import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>© Авторский блог, {currentYear}</div>
      <div>blog@example.com</div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://yandex.ru/weather/widget/..." frameborder="0" allowtransparency="true" style="width: 200px; height: 50px;"></iframe>`,
        }}
      ></div>
    </footer>
  );
};
