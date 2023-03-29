import React from 'react'
import { Grid} from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import charactorModel from '../models/character.model'
// import {Link, useNavigate} from 'react-router-dom'
import './style.scss'


interface ProTypes{
  item:charactorModel
}
const CardItem = (props:ProTypes) => {
  // const navigate = useNavigate()

  return(
   
      <div className='heroCard'>
        <div className='heroCardWrapper'> 
          <div className='heroImage'>
            <img src={props.item.thumbnail.path+"/portrait_fantastic."+props.item.thumbnail.extension} alt={props.item.name} ></img>
          </div>
          <div className='heroName'>
            {props.item.name}
          </div>
        </div>
      </div>
          
  )
}

export default CardItem