import { Toaster } from 'react-hot-toast';
import './App.css';
import Routing from './utils/Routing/Routing';

function App() {
  return (
    <div>
      <Routing/>
      <Toaster/>
    </div>
  );
}

export default App;
