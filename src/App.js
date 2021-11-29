import logo from './logo.svg';
import './App.css';
import Join from './components/Join'
import Chat from './components/Chat'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Join />}/>
        <Route path="/chat" element={<Chat />}/>
      </Routes>
    </div>
  );
}

export default App;
