
import './App.css';
import HellowWord from './components/HellowWord'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'

function App() {
  const nome = "Maria"
  return (
    <div className="App">
     
     <HellowWord/>
     <SayMyName nome="Gabriel"/>
     <SayMyName nome="João"/>
     <SayMyName nome={nome}/>
     <Pessoa nome="Maria" idade="6" profissão = "progamadora" foto = "https://via.placeholder.com/150"/>
     <List/>
    </div>
  );
}

export default App;
