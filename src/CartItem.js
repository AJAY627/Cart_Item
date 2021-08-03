import React from 'react';

class Cartitem extends React.Component {
   
    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })
    //     promise.then(() =>{
    //         //setState acts like a synchronus call
    //         this.setState({qty: this.state.qty + 10});

    //         this.setState({qty: this.state.qty + 10});

    //         this.setState({qty: this.state.qty + 10});

    //         console.log('state' , this.state);
    //     })
    // }
    // increaseQuantuty =()=> {
       // console.log('this', this.state);
       // setState form 1
    //    this.setState ({
    //        qty: this.state.qty + 1
    //     }, () => { -----------React give use a call back function bec this is a ascy
     // console.log('this', this.state);
   //      });
    //setState form 2

    // this.setState ((prevState) => {
    //     return{
    //         qty: prevState.qty + 1
    //     }
    // });
    // }
    // decreaseQuantity = () => {
    //     const {qty} = this.state;
    //     if(qty === 0){
    //         return;
    //     }

    //     console.log('this', this.state);
        
    //     this.setState ((prevState) => {
    //         return{
    //         qty: prevState.qty - 1
    //     }
    //     });
    // }


    render() {
        const { price, title, qty } = this.props.product;
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
                        <img 
                        alt ="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992651.png"
                         onClick={()=> this.props.onIncreaseQuantity(this.props.product)}
                        >

                        </img>
                        <img 
                        alt ="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/104/104616.png"
                         onClick={this.decreaseQuantity}
                        >
                        </img>
                        <img alt ="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/1214/1214428.png">
                        </img>
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