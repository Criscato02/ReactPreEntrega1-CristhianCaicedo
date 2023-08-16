import Item from "../Item";

function ListItem(props) {
    const renderProductos = () => {
        const productos = props.items.map((producto) => {
            return (
                props.items.map((item) =>{
                    return(
                        <Item
                            key={item.id}
                            item={item}
                            onClick={props.onClick}
                        />
                    )
                })
            )
        });
        return productos;    
    }  

    return (

        <div className="list__products">
            {renderProductos()}
        </div>
    );
}

export default ListItem;
