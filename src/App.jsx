/* eslint-disable react/prop-types */
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { setUser } from './actions';
import './App.css';
import { server } from './bff';
import { Footer, StyledHeader } from './components/';
import { Authorization, Main, Registration, Users } from './pages/';

const Content = styled.div({
  margin: '20px',
  padding: '120px 0 0',
});

const AppColumn = styled.div({
  position: 'relative',
  width: '1000px',
  minHeight: '100%',
  margin: '0 auto',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('userData'));

    if (user) {
      server.authorize(user.login, user.password).then(({ res, error }) => {
        if (error) {
          return;
        }

        dispatch(setUser(res));
      });
    }
  }, []);

  return (
    <AppColumn>
      <StyledHeader />
      <Content>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
}

export default App;
