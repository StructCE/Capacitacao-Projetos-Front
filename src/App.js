import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserProvider from './hooks/useUserContext';
import Routes from './routes';
import GlobalStyle from './syles';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <GlobalStyle />
        <Routes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
