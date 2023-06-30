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
      flex flex-col text-yellow-200 bg-teal-900">
      <h1 className='font-headings text-5xl pb-5'>General Kenobi </h1>
      <Paths />
    </div>
  );
}

export default App;
