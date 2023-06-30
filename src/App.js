import { useEffect } from 'react';



import './App.css';
import { Paths } from './Components/Routes';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(r => r.ok? r.json() : console.log(r))
    .then(d => console.log(d))
    .catch(e => alert(e))
  },[])

  return (
    <div
      className="App font-main text-2xl min-h-screen min-w-screen justify-center items-center
      flex flex-col text-slate-300 bg-gradient-to-t from-slate-600 via-zinc-800 to-zinc-900">
      <Paths />
    </div>
  );
}

export default App;
