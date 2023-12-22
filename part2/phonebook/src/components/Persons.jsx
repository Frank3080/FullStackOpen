import React from "react";

const Persons = ({ persons, numbers, search }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((person, index) => (
          <p key={index}>
            {person.name}
            {numbers[index] && ` - ${numbers[index].number}`}
          </p>
        ))}
    </div>
  );
};

export default Persons;
