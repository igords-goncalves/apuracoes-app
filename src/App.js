import { useState } from 'react';
import Header from './components/header/Header';
import Main from './pages/Main';

function App() {

  const [label, setLabel] = useState()

  const changeLabel = (label) => setLabel(label)

  return (
    <div className="App">
      <Header onChange={changeLabel}/>
      <Main label={label}/>
    </div>
  );
}

export default App;
