import { useNavigate } from "react-router";

import OnboardingDots from "./onbordingdots";

import "../../scss/onboarding.scss";

export default function Onboarding3() {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <header>
        <figure className="intro">
          <div className="intro__img">
            <img src="../projekt-ui/screens/Onboarding 4.png" alt="" />
          </div>
          <figcaption className="intro__text">
            <h2>Enhance your News Journey Now</h2>
            <p>
              Be part of our dynamic community and contribute your insights and
              participate in enriching conversations.
            </p>
          </figcaption>
        </figure>
      </header>
      <footer>
        <OnboardingDots current={3} />
        <ul className="intro__buttons">
          <li>
            <button
              className="continue__button"
              onClick={() => {
                navigate("/login");
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
