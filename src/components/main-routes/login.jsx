import { useNavigate } from "react-router";

import "../../scss/login.scss";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login__wrapper">
      <header className="login__header">
        <figure className="login__figure">
          <img
            className="loggin__header"
            src="../../../projekt-ui/screens/newsify_logo_1.svg"
            alt=""
          />
        </figure>
        <figcaption>
          <h2>Newsify</h2>
          <p>Welcome! Lets dive into you account!</p>
        </figcaption>
      </header>
      <nav className="navigate">
        <ul>
          <li>
            <button
              className="navigate__facebook"
              onClick={() => {
                navigate("/home");
              }}
            >
              Continue with Facebook
            </button>
          </li>
          <li>
            <button
              className="navigate__google"
              onClick={() => {
                navigate("/home");
              }}
            >
              Continue with Google
            </button>
          </li>
        </ul>
        <h3>
          <span>or</span>
        </h3>
        <ul>
          <li>
            <button
              className="navigate__password"
              onClick={() => {
                navigate("/home");
              }}
            >
              Sign in with password
            </button>
          </li>
        </ul>
        <div className="login__div">
          <p>Don't have an account?</p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Sign up</a>
        </div>
      </nav>
    </div>
  );
}
