import { useNavigate } from "react-router";

export default function Onboarding1() {
  localStorage.setItem("visited", "true");

  const navigate = useNavigate()

  return (
    <div className="wrapper">
      <header>
        <figure>
          <img src="../projekt-ui/screens/Onboarding 2.png" alt="" />
          <figcaption>Stay Connected, Everywhere, Anytime</figcaption>
        </figure>
      </header>
      <main>
        <p>
          Welcome to Newsify, your ultimate destination for breaking news,
          exclusive stories, and tailored content
        </p>
      </main>
      <footer>
        <button
          onClick={() => {
            navigate("/home")
          }}
        >Skip</button>
        <button
          onClick={() => {
            navigate("/onboarding2")
          }}
        >Continue</button>
      </footer>
    </div>
  );
}
