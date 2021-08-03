import React from "react";
import Cartitem from "./CartItem";


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
          products: [
            {
            price: 99,
            title: 'Wtach',
            qty: 1,
            img:'',
            id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 3,
                img:'',
                id:2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 2,
                img:'',
                id:3
            }
          ]
           
        }
      //  this.increaseQuantuty = this.increaseQuantuty.bind(this); //bind of this
      //this.testing();
    }
    render() {
        const { products } = this.state;
        return (
        <div className="cart">         
         {products.map((product) => {
            return (
                 <Cartitem 
                 product = {product} 
                 key={product.id}
                />
            )
         })}

        </div>
        );
    }
}

export default Cart; 