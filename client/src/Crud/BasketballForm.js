import React, { useState } from "react"

const BasketballForm = (props) => {
  const [team, setTeam] = useState(props.team ? props.team : "")
  const [coach, setCoach] = useState(props.coach || "")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ team, coach })
    if (props.id) {
      props.updateBasketball({ id: props.id, team, coach })
      console.log("update here:")
      if(props.setShowEditForm){
        props.setShowEditForm(false)
      }
    } else {
      props.addBasketball({ team, coach })
      console.log("create here:", { team, coach })
    }
    setCoach("")
    setTeam("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>{props.id ? "Edit" : "New"} Form</h1>
      <p>Team</p>
      <input
        value={team}
        onChange={(e) => {
          setTeam(e.target.value)
        }}
      />
      <br/>
      <p>Coach</p>
      <input
        value={coach}
        onChange={(e) => {
          setCoach(e.target.value)
        }}
      />
      <br />
      <button>{props.id ? "update" : "save"}</button>
    </form>
  )
}

export default BasketballForm