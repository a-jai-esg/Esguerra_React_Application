import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <form className="form-signin">
    <div className="icon-area" align="center">
      <img className="mb-4" src={reactLogo} alt="" width="72" height="72"/>
      <h1 className="h3 mb-3 font-weight-normal">Login</h1>
    </div>
    <div className="form-group">
      <label for="InputEmail">Email address</label>
      <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div className="form-group">
      <label for="InputPassword">Password</label>
      <input type="password" className="form-control" id="InputPassword" placeholder="Password"/>
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <small>
        <label className="form-check-label" for="exampleCheck1">Remember me</label>
      </small>
    </div>
    
    <button type="submit" className="btn btn-submit btn-primary">Login</button>
    </form>
    </> 
  );

}

export default App
