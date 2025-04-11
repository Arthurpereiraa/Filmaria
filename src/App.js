import './App.css';
import AppRouters from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="app">
      <AppRouters/>
      <ToastContainer autoClose={3000} position='top-right' />
      
    </div>
  );
}

export default App;
