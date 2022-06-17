import { useContext, useState } from "react";
import { DataContext } from "../providers/DataProviders";
import BasketballForm from "./BasketballForm";
import Player from "./Player";
import PlayerForm from "./PlayerForm";

const Basketball = ({ id, team, players, coach }) => {
  const [showForm, setShowForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const { deleteBasketball, addPlayer, updateBasketball } = useContext(DataContext)
  return (
    <div className="basketball component">
      <h5>
        {team}{" "} {coach}
        <br/>
        <span
          onClick={() => {
            setShowEditForm(!showEditForm)
          }}
          className="btn"
        >
          edit
        </span>
        <br/>
        <span className="btn" onClick={() => deleteBasketball(id)}>
          delete
        </span>
      </h5>
      {showEditForm && <BasketballForm id={id} team={team} coach={coach} updateBasketball={updateBasketball} setShowEditForm={setShowEditForm}/>}

      <div className="players component">
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "hide" : "new"} player
        </button>
        {showForm && <PlayerForm addPlayer={addPlayer} basketballId={id} />}
        {players.map((b) => (
          <Player {...b} />
        ))}
      </div>
    </div>
  )
}

export default Basketball