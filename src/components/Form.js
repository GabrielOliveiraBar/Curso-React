function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("cadasstrou o usuário.")
    }
    return(
        <div>
            <h1>Cadastre-se</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input Type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Form