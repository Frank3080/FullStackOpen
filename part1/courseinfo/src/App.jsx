const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.content} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part
        content={props.parts[0]["content"]}
        exercises={props.parts[0]["exercises"]}
      />
      <Part
        content={props.parts[1]["content"]}
        exercises={props.parts[1]["exercises"]}
      />
      <Part
        content={props.parts[2]["content"]}
        exercises={props.parts[2]["exercises"]}
      />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.parts[0]["exercises"] +
          props.parts[1]["exercises"] +
          props.parts[2]["exercises"]}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { content: "Fundamentals of React", exercises: 10 },
    { content: "Using props to pass data", exercises: 7 },
    { content: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
