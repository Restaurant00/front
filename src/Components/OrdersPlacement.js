import React from 'react';
import ChosenPlates from './ChosenPlates'

function OrdersPage() {
  // State to store orders matrix
  const [ordersMatrix, setOrdersMatrix] = React.useState([]);

  // Function to handle adding an order
  const addOrder = () => {
    // Add the plate to the orders matrix
    setOrdersMatrix(prevOrders => [...prevOrders, <ChosenPlates key={prevOrders.length} />]);
  };

  return (
    <div>
      <button onClick={addOrder}>Add Order</button>
      <OrderMatrix ordersMatrix={ordersMatrix} />
    </div>
  );
}

// OrderMatrix component to display orders in a matrix
// OrderMatrix component to display orders in a matrix
// OrderMatrix component to display orders in a matrix
function OrderMatrix({ ordersMatrix }) {
    return (
      <div className="order-container">
        {ordersMatrix.map((row, rowIndex) => (
          <div key={rowIndex} className="order-row">
            {row}
          </div>
        ))}
      </div>
    );
  }
  
  

export default OrdersPage;
