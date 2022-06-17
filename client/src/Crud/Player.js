import { useContext, useState } from "react"
import { DataContext } from "../providers/DataProviders"
import PlayerForm from "./PlayerForm"

const Player = ({ baskerball_id, id, name, position }) => {
  const { deletePlayer, updatePlayer } = useContext(DataContext)
  const [newForm, setNewForm] = useState(false)
  return (
    <div className="player btn">
      <p>
        {name}-{position}{" "}
        <br/>
        <span
          onClick={() => {
            setNewForm(!newForm)
          }}
          className="btn"
        >
          edit
        </span>
        <br/>
        <span
          className="btn"
          onClick={() => {
            deletePlayer(baskerball_id, id)
          }}
        >
          delete
        </span>
      </p>
      {newForm && (
        <PlayerForm
          updatePlayer={updatePlayer}
          baskerballId={baskerball_id}
          id={id}
          name={name}
          position={position}
        />
      )}
    </div>
  )
}

export default Player