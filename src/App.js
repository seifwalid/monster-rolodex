import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState(""); //[value,setvalue Name ]
  const [monsters, setMonster] = useState([]);
  const[filteredMonsters,setFilterMonster]=useState([]);
  const [stringField, setStringField] = useState("");
  useEffect(() => {
    console.log("effect fired ");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  useEffect(() => {}, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onStringChange=(event)=>{
    setStringField(event)
  }

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  console.log(filteredMonster);


  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search Monster"
        className="Monster"
      />

      <SearchBox
        onChangeHandler={onStringChange}
        placeholder="set string "
       
      />

      <CardList monsters={filteredMonster} />
    </div>
  );
};
// class App extends Component {
//   // runs first
//   constructor() {

//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   // runs 3rd and rerenders
//   componentDidMount() {

// }
// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//   });
// };
//   //runs 2nd
//   render() {
//     const{monsters,searchField}=this.state;
//     const{onSearchChange}=this;

//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (

//     );
//   }
// }

export default App;
