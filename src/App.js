import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import GlobalStyle from './syles';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
