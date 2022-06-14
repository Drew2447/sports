import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const BasketballShow = ()=>{
    const [basketball, setBasketball] = useState({})
    const [players, setplayers] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        getBasketballData()
    },[])

    const getBasketballData = async()=>{
        try{
          let basketballRes = await axios.get(`/api/basketballs/${id}`)
          setBasketball(basketballRes.data)
          let playersRes = await axios.get(`/api/basketballs/${id}/players`)
          setplayers(playersRes.data)
        }catch(err){
          alert('error occured getting Data')
        }
    }
    return (
        <div>
            <h1>Basketball Show</h1>
            <Link to='/basketballs'>back to basketballs</Link>
            <p>id: {id}</p>
            <p>basketball: {JSON.stringify(basketball)}</p>
            <p>players: {JSON.stringify(players)}</p>

        </div>
    )
}
export default BasketballShow