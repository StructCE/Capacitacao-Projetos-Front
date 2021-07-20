import { BrowserRouter } from 'react-router-dom';
import UserProvider from './hooks/useUserContext';
import { Routes } from './routes';
import GlobalStyle from './syles';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
