//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
        price: 99,
        title: 'Wtach',
        qty: 1,
        img:'https://cdn.shopify.com/s/files/1/2996/3226/files/bwc_home_hero_mach1_a8e94ad6-7a02-426d-a3f4-1ce853a19ea1.jpg?v=1602331578',
        id: 1
        },
        {
            price: 999,
            title: 'Mobile Phone',
            qty: 3,
            img:'https://thumbs.dreamstime.com/z/old-red-telephone-19634830.jpg',
            id:2
        },
        {
            price: 999,
            title: 'Laptop',
            qty: 2,
            img:'https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg',
            id:3
        }
      ]
       
    }
  //  this.increaseQuantuty = this.increaseQuantuty.bind(this); //bind of this
  //this.testing();
}
handleIncreaseQuantity=(product) => {
    console.log('Hey please inc the quantity', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    })
}
handleDecreaseQuantity=(product) => {
    console.log('Hey please inc the quantity', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;

    this.setState({
        products: products
    })
}
handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);//[{}]

    this.setState({
        products: items
    })
}
getCartCount = () => {
  const { products } = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty
  })

  return count;
}
getCartTotal =() => {
  const { products } = this.state;

let cartTotal = 0;

products.map((product) => {
  cartTotal = cartTotal + product.qty * product.price
})
 return cartTotal;
}
  render(){
    const { products } = this.state;
  return (
    <div className="App">
       <Navbar count={this.getCartCount()}/>
       <Cart
       products ={ products }
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct = {this. handleDeleteProduct}
       />
       <div style = { {padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
}



export default App;
