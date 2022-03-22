import {useState} from 'react'

function Form(){
    function meuCadastro(e){
        e.preventDefault()
        console.log(`o nome de usuário é: ${name} a senha é: ${password}`)
    }

const [name,setName] = useState()
const [password, setPassword] = useState()

    return (
        <div>
            <form onSubmit={meuCadastro}>
                <h1>Meu Cadastro</h1>
                    <div>
                        <label htmlFor="name">Nome: </label>
                            <input type="text" id="name" name="name" placeholder="digite seu nome" onChange={(e) => setName(e.target.value)}/>
                            </div>
                    <div>
                        <label htmlFor="password">Senha: </label>
                             <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e)=> setPassword(e.target.value)} />   
                            </div>
                    <div>
                            <input type="submit" value="cadastrar"/>
                            </div>
                
            </form>
        </div>
    )
}
export default Form