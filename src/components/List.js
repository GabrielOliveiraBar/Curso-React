import Item from './Item'
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
           
                <Item marca= "Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item/>
                <li>Item 2</li>
                

            
        </>
        
    )
}

export default List