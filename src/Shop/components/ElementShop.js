import axios from 'axios';
import {useState,useEffect} from 'react';

function ElementShop()
{
    useEffect(()=>{ axios.get(`http://localhost:3020/api/Element/getElement`,{ params : {id:"62cc1e469e0a8afad019cc1a"}})
      .then(res => {
       console.log(res.data);
      })
      .catch(error=>console.log({msg:error.message})) },[])
}

export default ElementShop;