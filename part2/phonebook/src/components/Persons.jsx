import React from "react";

const Persons = ({ persons, search, onDelete }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((person) => (
          <div key={person.id}>
            <p key={person.id}>
              {person.name} {person.number}
            </p>
            <button onClick={() => onDelete(person.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default Persons;
