import { Route, Routes } from 'react-router-dom';
import styles from './Blog.module.css';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

const Main = () => <div>Главная</div>;
const Post = () => <div>Статья</div>;
const Authorization = () => <div>Вход</div>;
const Registration = () => <div>Регистрация</div>;
const Users = () => <div>Пользователи</div>;
const NotFound = () => <div>404: Страница не найдена</div>;

export const Blog = () => {
  return (
    <div className={styles.appColumn}>
      <Header />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
