import classes from "./DrugItem.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DrugItem() {
  const params = useParams();
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    const axiosFetchData = async () => {
      await axios
        .get(`http://localhost:4000/symptoms?param=${params.drugs}`)
        .then((res) => {
          setDrugs(res.data);
        });
    };
    axiosFetchData();
  }, [params.drugs]);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>List of Drugs to Treat {params.drugs}</h2>
      {!drugs.detail ? (
        <ul className={classes.list}>
          {drugs.map((drug, index) => (
            <li key={index} className={classes.item}>
              <p className={classes.item}>{drug}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={classes.fail}>No drugs available</h2>
      )}
    </div>
  );
}

export default DrugItem;
