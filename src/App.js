
import './App.css';
import HellowWord from './components/HellowWord'
import SayMyName from './components/SayMyName'

import List from './components/List'
import Teste from './components/Teste'

function App() {
  const nome = "Maria"
  return (
    <div className="App">
     
     <HellowWord/>
     <SayMyName nome="Gabriel"/>
     <SayMyName nome="João"/>
     <SayMyName nome={nome}/>
    
     <List/>
     <Teste/>
    </div>
  );
}

export default App;
