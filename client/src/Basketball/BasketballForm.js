import React, { useContext, useState } from "react"
import { DataContext } from "../providers/DataProviders";

const BasketballForm = (props)=>{
  const [team, setTeam] =useState(props.team ? props.team : "")
  const [coach, setCoach] =useState(props.coach ? props.coach : "")
  const {addBasketball, updateBasketball} = useContext(DataContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ team, coach })
    if (props.id) {
      updateBasketball({ id: props.id, team, coach })
      console.log("update here:")
    } else {
      addBasketball({ team, coach })
    }
    setTeam("")
    setCoach("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>{props.id ? "Edit" : "New"} Form</h1>
      <p>Team</p>
      <input
        value={team}
        onChange={(e)=>{
          setTeam(e.target.value)
        }}
      />
      <p>Coach</p>
      <input
        value={coach}
        onChange={(e)=>{
          setCoach(e.target.value)
        }}
      />
      <br />
      <button>{props.id ? "update" : "save"}</button>
    </form>
      
  )
}

export default BasketballForm