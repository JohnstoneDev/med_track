import { useEffect } from 'react';

import { Paths } from './Components/Routes';

function App() {

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(r => r.ok? console.log("Server is Up!") : console.log(r))
    .then(d => console.log(d))
    .catch(e => alert(e))
  },[])

  return (
      <div
        className="font-main text-2xl min-h-screen min-w-screen items-center space-y-4 bg-neutral-900 text-white overflow-hidden">
        <Paths />
      </div>
  );
}

export default App;
