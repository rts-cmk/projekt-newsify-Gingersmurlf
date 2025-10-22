import { useNavigate } from "react-router";

import OnboardingDots from "./onbordingdots";

import "../../scss/onboarding.scss";

export default function Onboarding1() {
  localStorage.setItem("visited", "true");

  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <header>
        <figure className="intro">
          <div className="intro__img">
            <img src="../projekt-ui/screens/Onboarding 2.png" alt="" />
          </div>
          <figcaption className="intro__text">
            <h2>Stay Connected, Everywhere, Anytime</h2>
            <p>
              Welcome to Newsify, your ultimate destination for breaking news,
              exclusive stories, and tailored content
            </p>
          </figcaption>
        </figure>
      </header>
      <footer>
        <OnboardingDots current={1} />
        <ul className="intro__buttons">
          <li>
            <button
              className="skip__button"
              onClick={() => {
                navigate("/login");
              }}
            >
              Skip
            </button>
          </li>

          <li>
            <button
              className="continue__button"
              onClick={() => {
                navigate("/onboarding2");
              }}
            >
              Continue
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
}
