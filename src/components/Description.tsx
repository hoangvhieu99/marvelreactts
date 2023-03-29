import React from "react";
import charactorModel from "../models/character.model";
import {useParams} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react'
const Description= () => {
  const {id} = useParams();
  const [item,setItem]=useState<charactorModel>();
  const fetch= async()=>{
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=958aab8fcb3e9d7cee17ff067d39efa8&hash=3d242e0a827072c4ea7cda29e409097b`
    const res = await axios.get(url)
    console.log(res.data.data.results[0])
    setItem(res.data.data.results[0])
  }
  fetch();
  return (
    // <Container>
      <div className='heroCard'>
        <div className='heroCardWrapper'> 
          <div className='heroImage'>
            <img src={item?.thumbnail.path+"/portrait_fantastic."+item?.thumbnail.extension} alt={item?.name} ></img>
          </div>
          <div className='heroName'>
            {item?.description}
          </div>
        </div>
      </div>
    
      
  );
};

export default Description;