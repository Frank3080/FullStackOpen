import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import { useEffect } from "react";
import axios from "axios";
import personServices from "./services/personServices";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    personServices.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    const existingPerson = persons.find((person) => person.name === newName);

    if (!newName || !newNumber) {
      alert("You have to fill out both forms");
      return;
    }

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = {
          ...existingPerson,
          number: newNumber,
        };

        personServices
          .updatePerson(existingPerson.id, updatedPerson)
          .then((response) => {
            setPersons(
              persons.map((person) => {
                person.id === existingPerson.id ? response : person;
              })
            );
            setNewName("");
            setNewNumber("");
          });
      }
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    personServices.create(newPerson).then((response) => {
      setPersons(persons.concat(response));
      setNewName("");
      setNewNumber("");
    });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleDelete = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Do you want to delete ${personToDelete.name}`)) {
      personServices.deletePerson(id).then(() => {
        setPersons(persons.filter((person) => person.id != id));
      });
    }
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
      <Persons persons={persons} search={search} onDelete={handleDelete} />
    </div>
  );
};

export default App;
