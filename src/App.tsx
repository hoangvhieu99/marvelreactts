import React, {useEffect, useState} from 'react'
import CardItem from './components/CardItem';
import HeaderPage from './components/HeaderPage'
import './App.scss'
import axios from 'axios';
import charactorModel from './models/character.model';
import {useNavigate} from 'react-router-dom'
import { Input } from 'semantic-ui-react'
import {Routes, Route} from 'react-router-dom'
import { Description } from './components/Description';

const hash="9946f4109fe961f7215e6eec750f2e86"
function App() {
const [item,setItem]=useState<Array<charactorModel>>([])
const [loading,setLoading]=useState<boolean>(false)
useEffect(()=>{
  getCharacter()
},[])
const getCharacter =()=>{
  let heroesArrray:Array<charactorModel>=[]
  const url="http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=640ad3691684b421a578d223fcebb80b&hash="+hash
  axios.get(url).then((response)=>{
    // console.log("response",response)
    response.data.data.results.forEach((e:any)=>{
      heroesArrray.push({
        id: e.id,
        image: e.thumbnail.path+"/portrait_fantastic."+e.thumbnail.extension,
        name: e.name
      })
    })
    setItem(heroesArrray)
  }).catch((error)=> {
    console.log("error",error)
  })
}


// const navigate = useNavigate()

//   function goBack() {
//     navigate(`/${item.id}`)
//   }
  return (
    <>
      <HeaderPage/>
      {/* <div>
        <Input placeholder='Search...' 
        value={item}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button>search</button>
      </div> */}
      <div className='scrollWrapper'>
        <div className='cardArea'>
          
            {item.length>0 && item.map((e:charactorModel,index:number)=>{
           
              return(
                <div className='cardAreaColumn' key={index}>
                  <CardItem item={e}/>
                </div>
              )
            })}
        </div>
      </div>
      <Routes>
        {/* <Route path='/'/> */}
        <Route path='/:id' element={<Description/>}/>
      </Routes>
    </>
  )
}

export default App
