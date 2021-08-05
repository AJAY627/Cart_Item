import React from 'react';

const CartItem = (props) => {
    const {  price,title, qty } = props.product;
        
      //increase and decrease and delete item
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
          } = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                   <img style={styles.image} src={product.img}/>
                </div>
                <div className="rigth-block">
                    <div style={{fontSige: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                <div className=" cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase"
                     className="action-icons"
                      src=" https://image.flaticon.com/icons/png/128/992/992651.png"
                        // onClick={this.increaseQuantity.bind(this)}/>
                        onClick={() => onIncreaseQuantity(product)}
                     />

                    <img alt="decrease"
                     className="action-icons" 
                     src="https://image.flaticon.com/icons/png/512/992/992683.png"
                     onClick={() => onDecreaseQuantity(product)}
                     />

                    <img alt="delete"
                    className="action-icons"
                     src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                    onClick = {() => onDeleteProduct(product.id)}
                    />
                </div>
               
                </div>

            </div>
        );
    }

  const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadous: 4,
        background: '#ccc'
    }
}
export default CartItem;