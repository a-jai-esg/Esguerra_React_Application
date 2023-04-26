import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function displayLogin() {
  return (
    <>
      <section></section>
      <form className="form-signin">
        <div className="icon-area" align="center">
          <img className="mb-4" src={reactLogo} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        </div>
        <div className="form-group">
          <label for="inputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <small>
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </small>
        </div>

        <button type="submit" className="btn btn-submit btn-primary">
          Login
        </button>
      </form>
    </>
  );
}

export default displayLogin;
