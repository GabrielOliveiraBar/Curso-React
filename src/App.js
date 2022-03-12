
import './App.css';
import HellowWord from './components/HellowWord'

function App() {
  const name = 'Matheus'

  function Sum(a,b){
    return a+b
  }

  const url = 'https://via.placeholder.com/150'
  return (
    <div className="App">
     <h2>alterando JSX</h2>
     <p>Meu primeiro APP.</p>
     <p>Olá,{name}</p>
     <p>Soma: {Sum(1,2)}</p>
     <img src={url} alt="minha imagem" />
     <HellowWord/>
    </div>
  );
}

export default App;
