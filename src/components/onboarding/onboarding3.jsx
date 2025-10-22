import { useNavigate } from "react-router";

export default function Onboarding3() {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <header>
        <figure>
          <img src="../projekt-ui/screens/Onboarding 4.png" alt="" />
          <figcaption>Enhance your News Journey Now</figcaption>
        </figure>
      </header>
      <main>
        <p>
          Be part of our dynamic community and contribute your insights and
          participate in enriching conversations.
        </p>
      </main>
      <footer>
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          Continue
        </button>
      </footer>
    </div>
  );
}
