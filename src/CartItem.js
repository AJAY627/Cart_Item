import React from 'react';

class Cartitem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img:''
        }
    }
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {style.image}/>
                </div>
                <div className="right-block">
                    <div style = {{fountSize : 25}}>{title}</div>
                    <div style = {{color : '#777'}}>Rs {price}</div>
                    <div style = {{color : '#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons */}
                        <img alt ="increase" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992651.png"></img>
                        <img alt ="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/104/104616.png"></img>
                        <img alt ="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/1214/1214428.png"></img>
                    </div>
                </div>

            </div>
        )
    }
}
const style = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      backgroundColor: '#ccc'
    }
  }

export default Cartitem;