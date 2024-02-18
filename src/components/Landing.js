
import React , {useEffect , useState} from "react";
import {getCoin} from  '../services/api';
import Loader from "./Loader";
import styles from "./Landing.module.css";
const Landing = () =>{

const [coins, setCoins] = useState([]);
const [search, setSearch] = useState({});

 
 useEffect (() => {
    const fetchApi = async() => {
     const data = await getCoin();
     console.log(data)
     setCoins(data)
    }

    fetchApi()
 } , [])

 const searchHandler = event => {
   setSearch(event.target.value);
 }

 const searchedCoins = coins.filter(coin => coin.name.includes(search.toLowerCase()))



 return(

  <>
  <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler}/>
     {

       coins.length ?
        
    <div className={styles.coinContainer}>
    {
       
       coins.map(coin => <coin 
         key={coin.id}
         name = {coin.name}
         image = {coin.image}
         symbol = {coin.symbol}
         price = {coin.current_price} 
         marketCap = {coin.market_cap}
         priceChange= {coin.price_change_percentage_24h}
       />)
      
    }

</div>:
<Loader />

   }

  </>
 );
}

export default Landing;