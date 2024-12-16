import React from 'react';
import '../style.css';

function Menu() {
  return (
    <div id="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        <div className="menu-item">
          <img src="item1.jpeg" alt="Espresso image" />
          <h3>Espresso</h3>
          <p><i>Strong, concentrated shot</i></p>
          <span>N5370.00</span><br />
          <button className="btn">Order</button>
        </div>
        <div className="menu-item">
          <img src="item2.jpeg" alt="Cappuccino image" />
          <h3>Cappuccino</h3>
          <p><i>Espresso, steamed milk, and foam</i></p>
          <span>N3585.78</span><br />
          <button className="btn">Order</button>
        </div>
        <div className="menu-item">
          <img src="item3.jpeg" alt="Latte image" />
          <h3>Latte</h3>
          <p><i>Espresso and steamed milk</i></p>
          <span>N6834.23</span><br />
          <button className="btn">Order</button>
        </div>
        <div className="menu-item">
          <img src="item4.jpeg" alt="Mocha image" />
          <h3>Mocha</h3>
          <p><i>Espresso, chocolate syrup and steamed milk</i></p>
          <span>N5500.00</span><br />
          <button className="btn">Order</button>
        </div>
        <div className="menu-item">
          <img src="item5.jpeg" alt="Cortado image" />
          <h3>Cortado</h3>
          <p><i>Equal parts espresso and milk</i></p>
          <span>N5829.20</span><br />
          <button className="btn">Order</button>
        </div>
        <div className="menu-item">
          <img src="item6.jpeg" alt="Americano image" />
          <h3>Americano</h3>
          <p><i>Espresso diluted with hot water</i></p>
          <span>N7650.00</span><br />
          <button className="btn">Order</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
