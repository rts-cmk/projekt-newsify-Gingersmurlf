import { useNavigate } from "react-router";

export default function Onboarding2() {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <header>
        <figure>
          <img src="../projekt-ui/screens/Onboarding 3.png" alt="" />
          <figcaption>Become a Savvy Global Citizen.</figcaption>
        </figure>
      </header>
      <main>
        <p>
          Discover tailored news that aligns with your interest and preferences.
          Your personalized new journey awaits!
        </p>
      </main>
      <footer>
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          Skip
        </button>
        <button
          onClick={() => {
            navigate("/onboarding3");
          }}
        >
          Continue
        </button>
      </footer>
    </div>
  );
}
