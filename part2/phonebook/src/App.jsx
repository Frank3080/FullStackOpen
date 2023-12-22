import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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

    if (numbers.some((entry) => entry.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
      return;
    }

    const numberObject = {
      number: newNumber,
      date: new Date().toISOString(),
      id: numbers.length + 1,
    };

    setNumbers(numbers.concat(numberObject));
    setNewNumber(""); //
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
    if (!newName || !newNumber) {
      alert("You have to fill out both forms");
      return;
    }

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    axios.post("http://localhost:3001/persons", newPerson).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
      setNewNumber("");
    });
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
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
