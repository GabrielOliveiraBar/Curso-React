
import './App.css'
import Form from './components/Form'
import Eventos from './components/Eventos'
import Teste from './components/Teste'



function App() {
 
  return (
    <div className="App">
     <h1>Testando Eventos</h1>
     <Eventos  numero="2"/>
     <Eventos  numero="1"/>
     <Form/>
     <Teste/>
     
    </div>
  )
}

export default App;
