import classes from "./SearchSymptom.module.css";
import Select from "react-select";

export default function SearchSymptom({
  conditionKeys,
  setSelectedSymptoms,
  selectedSymptoms,
}) {
  const handleSymptomChange = (selectedOptions) => {
    setSelectedSymptoms(selectedOptions);
  };
  const symptomOptions = conditionKeys.map((key) => ({
    value: key,
    label: key,
  }));

  return (
    <div>
      <div className={classes.selector}>
        <h2 className={classes.title}>Symptom Selector</h2>
        <Select
          isMulti
          options={symptomOptions}
          value={selectedSymptoms}
          onChange={handleSymptomChange}
          className={classes.options}
        />
      </div>
      <div>
        <h2>Selected Symptoms:</h2>
        {selectedSymptoms.length === 0 && (
          <p className={classes.none}>No symptoms selected</p>
        )}
        <ul>
          {selectedSymptoms.map((symptom) => (
            <li key={symptom.value} classes={classes.selected}>
              <h3>{symptom.label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
