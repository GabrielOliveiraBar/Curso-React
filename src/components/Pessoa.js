// {var,var,var} var dentro do props para simplificar o JSX.

import PropTypes from 'prop-types'
function Pessoa ({nome,idade,profissão}){
    return(
        <div>
            
          
           
           
            <ul>
                <li>{profissão}</li>
                <li>{nome}</li>
                <li>{idade}</li>
                </ul>
           
    
        </div>
    )
}

Pessoa.propTypes={
    profissão: PropTypes.string.isRequired,
    nome: PropTypes.string,
    idade: PropTypes.number,
}

Pessoa.defaultProps={
    
nome: "faltou o nome",

idade:"coloque a dat agr porra",

profissão:"faltou a profissão",


}

export default Pessoa