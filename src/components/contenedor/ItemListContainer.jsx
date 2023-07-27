import Item from "../Item";
import './ItemListContainer.css';

function ListItem(props) {
    const renderProductos = () => {
        const productos = props.items.map((producto) => {
            return (
                <div key={producto.id}>
                    <h1>{producto.title}</h1>
                    <h1>{producto.price}</h1>
                    <img src={producto.image} alt={producto.name} height={100} width={100} />    
                </div>
            );
        });
        return productos;    
    }  

    return (
        <div>
            <h1>Nuestros productos</h1>
            {renderProductos()}
        </div>
    );
}

export default ListItem;
