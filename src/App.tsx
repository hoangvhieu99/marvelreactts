import React, {useEffect, useState} from 'react'
import CardItem from './components/CardItem';
import HeaderPage from './components/HeaderPage'
import './App.scss'
import axios from 'axios';
import charactorModel from './models/character.model';
import {BrowserRouter, Link,useNavigate} from 'react-router-dom'
import { Input } from 'semantic-ui-react'
import {Routes, Route} from 'react-router-dom'
import Description from './components/Description';


const hash="3d242e0a827072c4ea7cda29e409097b"
function App() {
const [item,setItem]=useState<Array<charactorModel>>([])
const [loading,setLoading]=useState<boolean>(false)
useEffect(()=>{
  getCharacter()
},[])
const getCharacter =()=>{
  // let heroesArrray:Array<charactorModel>=[]
  const url="http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=958aab8fcb3e9d7cee17ff067d39efa8&hash="+hash
  axios.get(url).then((response)=>{
    // console.log("response",response)
    // response.data.data.results as Array<charactorModel>
    const heros= response.data.data.results as Array<charactorModel>
    // response.data.data.results.forEach((e:any)=>{
    //   heroesArrray.push({
    //     id: e.id,
    //     thumbnail: e.thumbnail.path+e.thumbnail.extension,
    //     name: e.name,
    //     description: e.description
    //   })
    // })
    setItem(heros)
    // setItem(heroesArrray)
  }).catch((error)=> {
    console.log("error",error)
  })
}


  return (
    <>

      <HeaderPage/>
      {/* <BrowserRouter> */}
          <div className='scrollWrapper'>
            <div className='cardArea'>
              
                {item.length>0 && item.map((e:charactorModel,index:number)=>{
              
                  return(
                    <div className='cardAreaColumn' key={index}>
                      <Link to={`/${e.id}`} className="">
                          <CardItem item={e}/>
                      </Link>
                    </div>
                  )
                })}
            </div>
          </div>
        {/* <Routes>
          <Route path='/:id' element={<Description/>}/>
        </Routes> */}
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
