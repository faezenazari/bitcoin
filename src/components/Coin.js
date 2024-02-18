import React from 'react';
import styles from "./Coin.module.css";
const Coin = (name , image , symbol , priceChange , price , market_cap) => {
 return (
  <div className={container}>
   <img  className={image} src={image}></img>
   <span className={name}>{name}</span>
   <span className={symbol}>{symbol.toUpperCase()}</span>
   <span className={price}>{price.toLocaleString()}</span>
   <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange }>{priceChange}</span>
   <span className={market_cap}>{market_cap.toLocaleString()}</span>

   
  </div>
 );
};
{}
export default Coin;