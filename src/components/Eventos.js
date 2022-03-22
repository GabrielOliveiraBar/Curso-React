import Button from './Eventos/Button'

function Eventos (){
    
    function meuEvento(){
    console.log(`Ativando primeiro Evento `)
    }
    
    function segundoEvento(){
        console.log('Ativando segundo evento')
    }
return (
<div>
    <p>Clique para disparar evento:</p>
    <Button event={meuEvento} text="Ativar primeiro evento"/>
    <Button event={segundoEvento} text="Ativar segundo evento"/>
    
</div>
)
}
export default Eventos