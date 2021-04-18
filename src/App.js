import React from "react";

function App() {
  const profiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name:"noName"}
  ]
  return (
    <React.Fragment>
      {
          profiles.map((profile) => {
            return <User name={profile.name} age={profile.age}/>
          })
      }
    </React.Fragment>
  )
  
}

function User(props) {
  return <div>Hi, I am {props.name}, and {props.age} years old</div>
}

User.defaultProps = {
  age:1
}

export default App;
