import React, { useState } from "react"

const PlayerForm = (props) => {
  const [name, setName] = useState(props.name || "")
  const [position, setPosition] = useState(props.position || "")

  const handleSubmit = (e) => {
    e.preventDefault()
  
    if (props.id) {
      props.updatePlayer(props.authorId, { id: props.id, name, position })
      console.log("update here:")
    } else {
      props.addPlayer(props.authorId, { name, position })
    }
    setName("")
    setPosition("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>{props.id ? "Edit" : "New"} Player</h1>
      <p>Name</p>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <p>Position</p>
      <input
        value={position}
        onChange={(e) => {
          setPosition(e.target.value)
        }}
      />
      <br />
      <button>{props.id ? "update" : "save"}</button>
    </form>
  )
}

export default PlayerForm