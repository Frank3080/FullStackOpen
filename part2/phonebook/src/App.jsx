import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [numbers, setNumbers] = useState([{ number: "1234-1234-1232" }]);
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const addName = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const nameObject = {
      name: newName,
      date: new Date().toISOString(),
      id: persons.length + 1,
    };

    setPersons(persons.concat(nameObject));
    setNewName("");
  };

  const addNumber = (event) => {
    event.preventDefault();

    if (numbers.some((number) => number.name === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
      return;
    }

    const numberObject = {
      number: newNumber,
      date: new Date().toISOString(),
      id: numbers.length + 1,
    };

    setNumbers(numbers.concat(numberObject));
    setNewNumber("");
  };

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    if (newName === "" || newNumber === "") {
      alert("You have to fill out both forms");
      return;
    }

    addName(event);
    addNumber(event);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onSearchChange={handleSearchChange} />
      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} numbers={numbers} search={search} />
    </div>
  );
};

export default App;
