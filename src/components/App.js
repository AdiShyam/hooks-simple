import React, { useState } from 'react';
import './App.css';

const App = () => {

  // state = { resource: "posts" }
  const [resource, setResource ] = useState('posts');
  // render() {
    console.log("the useState isssssss"+ useState('posts'))
    return (
      <div>
        <div>
          <button onClick = {() => setResource('posts')} > Posts</button>
          <button  onClick = {() => setResource('todos')} >Todos</button>
        </div>
        {resource}
      </div>
    );
  // }
}

export default App;
