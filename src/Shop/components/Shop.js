import axios from 'axios';
import {useState,useEffect} from 'react';

function Shop()
{
    const [optionValue,setOptionValue] = useState([]);
    useEffect(()=>{ axios.get(`http://localhost:3020/api/Subcategory/getAllSubCategory`)
      .then(res => {
       const sub=res.data.subCategory;
       for(let i=0;i<sub.length;i++)
       {
        setOptionValue(optionValue=>[...optionValue,sub[i].name]);
       }
      })
      .catch(error=>console.log({msg:error.message})) },[])
    return (
        <select defaultValue="All">
            <option value="All" key="All">All</option>
            {optionValue.map(subcat=> <option value={subcat} key={subcat} >{subcat}</option> )}
        </select>
    )
}

export default Shop;