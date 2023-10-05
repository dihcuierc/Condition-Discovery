import classes from "./ConditionList.module.css";
import { useEffect, useState } from "react";
import SearchSymptom from "./SearchSymptom";
import { Outlet, Link } from "react-router-dom";
import conditionData from "../symptoms.json";

function ConditionList() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [matchingConditions, setMatchingConditions] = useState([]);

  useEffect(() => {
    if (selectedSymptoms.length === 0) {
      setMatchingConditions([]);
    } else {
      const initialConditions = conditionData[selectedSymptoms[0].value] || [];
      const commonConditions = initialConditions.filter((condition) =>
        selectedSymptoms.every((symptom) =>
          conditionData[symptom.value]?.includes(condition)
        )
      );

      setMatchingConditions(commonConditions);
    }
  }, [selectedSymptoms]);

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Condition</h1>
      <div style={{ display: "flex" }}>
        <div className={classes.searchbar}>
          <SearchSymptom
            selectedSymptoms={selectedSymptoms}
            setSelectedSymptoms={setSelectedSymptoms}
            conditionKeys={Object.keys(conditionData)}
          />
        </div>
        <div className={classes.conditionList}>
          <h2>Possible Conditions:</h2>
          {matchingConditions.length === 0 ? (
            <p className={classes.none}>No conditions found.</p>
          ) : (
            <div>
              {matchingConditions.map((condition) => (
                <Link
                  to={condition}
                  key={condition}
                  className={classes.condition}
                >
                  <h4 key={condition}>{condition}</h4>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default ConditionList;
