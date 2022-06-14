import { useEffect, useState } from "react";
import axios from 'axios'

const BasketballList = () => {
  const [basketballs, setBasketballs] = useState([]);
  useEffect(() => {
    getBasketballs();
  }, []);

  const renderBasketballs = () => {
    return basketballs.map((a) => {
      return (
        <div className="component">
          <p>{a.name}</p>
          <p></p>
        </div>
      );
    });
  };

  const getBasketballs = async () => {
    try {
      let res = await axios.get("/api/basketballs");
      setBasketballs(res.data);
    } catch (err) {
      alert("err getasketballs occured");
    }
  };
  return (
    <div>
      <h1>Basketball List</h1>
      {renderBasketballs()}
    </div>
  );
};

export default BasketballList;