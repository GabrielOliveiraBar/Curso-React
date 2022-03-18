

function Eventos ({numero}){
    
    function meuEvento(){
    console.log(`ops, fui Ativaado!!! ${numero}`)
    
}
return (
<div>
    <p>Clique para disparar evento:</p>
    <button onClick={meuEvento}>Ativar!</button>
</div>
)
}
export default Eventos