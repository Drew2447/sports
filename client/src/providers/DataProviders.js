import axios from "axios"
import React, { useEffect, useState } from "react"

export const DataContext = React.createContext()
const DataProviders = (props) => {
  const [basketballs, setBasketBalls] = useState([])
  const [basketballsPlayers, setBasketBallsPlayers] = useState(null)
  const [players, setPlayers] = useState([])
  const [activeBasketBall, setActiveAuther] =useState(null)
  useEffect(() => {
    getBasketBallsAndPlayers()
  },[])
const getBasketBallsAndPlayers = async ()=>{
  try{
    let res = await axios('/api/basketballs')

    setBasketBalls(res.data)
    let res1 = await axios('/api/players')

    setPlayers(res1.data)
    console.log(res1, res)
  } catch(err){
    alert('err getBasketBalls')
  }
}
const getBasketBall = async (basketballId)=>{
  try {
    let res =await axios.get(`/api/basketball/${basketballId}`)
    setActiveAuther(res.data)
  } catch (err){
    alert('err getBasketBall')
  }
}
const addBasketBall = async(basketball)=>{
  if(!basketball.team || basketball.team === ''){
    alert('bad team')
    return
  }
  try{
    let res = await axios.post('api/basketballs',basketball)
    setBasketBalls([res.data, ...basketballs])
  } catch (err) {
    alert('err addBasketBall')
  }
}
const updateBasketBall = async(basketball)=>{
  if (basketball.team === "" || !basketball.id) {
    alert("bad basketball data")
    return
  } 
  try{
    let res = await axios.put(`api/basketballs/${basketball.id}`,basketball)
    let updateBasketBall = basketballs.map(a=> a.id === res.data.id ? res.data :a)
    setBasketBalls(updateBasketBall)
  } catch (err) {
    alert('err addBasketBall')
  }
}
const deleteBasketBall = async (id) => {
  try {
    await axios.delete(`/api/basketballs/${id}`)
    setBasketBalls(basketballs.filter((a) => a.id !== id))
  } catch (err) {
    alert("err occured addBasketBall")
  }
}
const getBasketBallsPlayers = async (basketballId)=>{
  if (!basketballId){
    alert('no id')
    return
  }
  try{
    let res = await axios.get(`/api/basketballs/${basketballId}/players`)
    setBasketBallsPlayers(res.data)
  }catch(err){
    alert('err getPlayers')
  }
}
const updateBasketBallsPlayer = async (basketballId, player) => {
  try {
    let res = await axios.put(`/api/basketballs/${basketballId}/players/${player.id}`, player)
    let updateBasketBallsPlayers =  basketballsPlayers.map((b) => (b.id === res.data.id ? res.data : b))
    setBasketBallsPlayers(updateBasketBallsPlayers)
  } catch (err) {
    alert("err occured getBasketBallsPlayers")
  }
}
const addBasketBallsPlayer =async (basketballId, player)=>{
  try{
    let res =await axios.post(`/api/basketball/${basketballId}/players`, player)
    setBasketBallsPlayers([res.data, ...basketballsPlayers])
  } catch (err){
    alert('err getBasketBallsPlayers')
  }
}
const deleteBasketBallsPlayer = async (basketballId, playerId) => {
  try {
    let res = await axios.delete(`/api/basketballs/${basketballId}/players/${playerId}`)
    let updateBasketBallsPlayers =  basketballsPlayers.filter((b) => (b.id !== res.data.id))
    setBasketBallsPlayers(updateBasketBallsPlayers)
  } catch (err) {
    alert("err occured deleteBasketBallsPlayer")
  }
}
const deletePlayer = async (basketballId, playerId) => {
  try {
    let res = await axios.delete(`/api/basketballs/${basketballId}/players/${playerId}`)
    let updatePlayers =  players.filter((b) => (b.id !== res.data.id))
    setPlayers(updatePlayers)
  } catch (err) {
    alert("err occured deleteBasketBallsPlayer")
  }
}
const addPlayer = async (basketballId, player) => {
  try {
    let res = await axios.post(`/api/basketballs/${basketballId}/players`, player)
    setPlayers([res.data, ...players])
  } catch (err) {
    alert("err occured getBasketBallsPlayers")
  }
}
const updatePlayer = async (basketballId, player) => {
  try {
    let res = await axios.put(`/api/basketballs/${basketballId}/players/${player.id}`, player)
    let updatePlayers =  players.map((b) => (b.id === res.data.id ? res.data : b))
    setPlayers(updatePlayers)
  } catch (err) {
    alert("err occured getBasketBallsPlayers")
  }
}
return (
  <DataContext.Provider
    value={{
      deletePlayer,
        addPlayer,
        updatePlayer,
        deleteBasketBall,
        updateBasketBall,
        basketballs,
        getBasketBallsAndPlayers,
        addBasketBall,
        basketballsPlayers,
        getBasketBallsPlayers,
        updateBasketBallsPlayer,
        addBasketBallsPlayer,
        deleteBasketBallsPlayer,
        activeBasketBall,
        getBasketBall,
        players
    }}
  >
    {props.children}
  </DataContext.Provider>
)
}

export default DataProviders