# Condition Discovery

JLK Technology Project Assignment

- Details can be found in the word document `condition-discovery-web.docx`.
- Data can be found in the CSV file `symptoms.csv`.

## Condition Discovery Webpage

### Functionalities

1. Auto-complete SearchBar

   - Search options include a list of medical symptoms that user can select from. Users can select a variety of symptoms (e.g., high_fever, nausea)

   - Possible medical conditions will then be determined based on the symptoms indicated by the user.

2. Drug List

   - Users can click on the possible medical conditions will which give them a list of drugs available to cure the medical condition.

   - Data is fetched from `https://drug-app-7o2mnqk4sa-as.a.run.app/getDrugs/{condition}`

### Running the Webpage

1. Clone the folder

```bash
git clone https://github.com/dihcuierc/JLK-Technology.git
```

2. Download dependencies and start frontend

```bash
cd frontend/
npm i
npm start
```

3. Open up another terminal, download dependencies and start backend

```bash
cd backend/
npm i
npm start
```

### Extras

- Frontend webpage was created using Reactjs `npx create-react-app`.
- Backend was created using Nodejs and Expressjs.
- As this project was done as an internship application assignment, only the basic functionalities are implemented. An improved version can be found in my other branch.
