import { useNavigate } from "react-router";

import OnboardingDots from "./onbordingdots";

import "../../scss/onboarding.scss";

export default function Onboarding2() {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <header>
        <figure className="intro">
          <div className="intro__img">
            <img src="../projekt-ui/screens/Onboarding 3.png" alt="" />
          </div>
          <figcaption className="intro__text">
            <h2>Become a Savvy Global Citizen.</h2>
            <p>
              Discover tailored news that aligns with your interest and
              preferences. Your personalized new journey awaits!
            </p>
          </figcaption>
        </figure>
      </header>
      <footer>
        <OnboardingDots current={2} />
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
                navigate("/onboarding3");
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
