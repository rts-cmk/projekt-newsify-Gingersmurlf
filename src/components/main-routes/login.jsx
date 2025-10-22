import { useNavigate } from "react-router";

export default function Login() {
    
    const navigate = useNavigate()

  return (
    <div className="wrapper">
      <header>
        <figure>
          <img src="../../projekt-ui/screens/newsify_logo1.svg" alt="" />
        </figure>
        <figcaption>
          <h2>Newsify</h2>
          <p>Welcome! Lets dive into you account!</p>
        </figcaption>
      </header>
      <nav>
        <ul>
          <li><button onClick={() => {
            navigate("/home")
          }}>Continue with Facebook</button></li>
          <li><button
            onClick={() => {
                navigate("/home")
            }}
          >Continue with Google</button></li>
        </ul>
        <h3>or</h3>
        <button
            onClick={() => {
                navigate("/home")
            }}
        >Sign in with password</button>
      </nav>
    </div>
  );
}
