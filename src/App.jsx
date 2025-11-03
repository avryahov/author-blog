/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { Footer } from './components/footer/footer.jsx';
import { StyledHeader } from './components/header/header.jsx';
import { Main } from './pages/Main.jsx';

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
  return (
    <AppColumn>
      <StyledHeader />
      <Content>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
}

export default App;
