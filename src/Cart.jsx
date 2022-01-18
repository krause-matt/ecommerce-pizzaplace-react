import React, { Component } from "react";
import orderServer from "./api/orders";

import Navbar from "./Navbar";
import CartItem from "./CartItem";

class Cart extends Component {
  state = {
    orders: [],
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
  }

  render() {
    return (
      <React.Fragment>
        <Navbar cartNum={this.state.orders.length} />
        <h3 className="m-3 pb-2 font-weight-bold border-bottom">Cart</h3>      
          <div className="row">
            <div className="col-md-6">
              {this.state.orders.map((item) => {
                return (
                  <CartItem ordersProp={item} image={this.state.image}/>
                )
              })}
            </div>
            <div className="col-md-6">
            Payment details
            </div>
          </div>        
      </React.Fragment>
    );
  };

  componentDidMount = async () => {
    const serverResponse = await orderServer.get("/orders");
    const currentOrders = [...serverResponse.data];
    this.setState({ orders: currentOrders })
  }
};

export default Cart;