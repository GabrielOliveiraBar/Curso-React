
import './App.css';
import HellowWord from './components/HellowWord'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const nome = "Maria"
  return (
    <div className="App">
     
     <HellowWord/>
     <SayMyName nome="Gabriel"/>
     <SayMyName nome="João"/>
     <SayMyName nome={nome}/>
     <Pessoa nome="Maria" idade="6" profissão = "progamadora" foto = "https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
