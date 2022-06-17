import BasketballForm from "../Basketball/BasketballForm"
import Basketball from "./Basketball"
import { useContext } from "react"
import { DataContext } from "../providers/DataProviders"
import basketballs from "../Basketball/Basketballs"
  
const Crud = (props) => {
  const {
    basketballs,
    players,
    addBasketball,
  } = useContext(DataContext)
  
  const normalizeBasketballsAndRender = ()=>{
    
    const normalizedBasketballs = basketballs.map(a=>{
      return {
        id:a.id,
        team: a.team,
        coach: a.coach,
        players: players.filter(b=> b.basketball_id === a.id)
      }
    })
  
    return normalizedBasketballs.map(na=> <Basketball key={na.id} {...na}/>)
  }
  
  
  return (
    <div>
      <h1>Sports app</h1>
      <h3>Basketballs</h3>
      
      <BasketballForm addBasketball={addBasketball} />
      <div className="component">
        {normalizeBasketballsAndRender()}
      </div>
    </div>
  )
  }
export default Crud