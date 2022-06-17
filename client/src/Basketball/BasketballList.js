import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router"

const BasketballList = () => {
  const [basketballs, setBasketballs] = useState([])
  const navigate = useNavigate
  useEffect(() => {
    getBasketballs()
  }, [])

  const renderBasketballs = () => {
    return basketballs.map((a) => {
      return (
        <div key={a.id} className="component">
          <p>{a.team}</p>
          <button onClick={()=> navigate(`/basketballs/${a.id}`)}>Show</button>
        </div>
      )
    })
  }

  const getBasketballs = async () => {
    try {
      let res = await axios.get("/api/basketballs")
      setBasketballs(res.data)
    } catch (err) {
      alert("err getasketballs")
    }
  }
  return (
    <div>
      <h1>Team List</h1>
      {renderBasketballs()}
    </div>
  )
}

export default BasketballList