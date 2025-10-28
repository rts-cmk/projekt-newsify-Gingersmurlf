import Header from "./components/html/header";
import Footer from "./components/html/footer";
import { useEffect } from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { li } from "motion/react-client";

export default function App() {
  const [data, setData] = useState([]);
  const [type, setType] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `/nyt/svc/search/v2/articlesearch.json?q=${type}&api-key=${apiKey}`
      );
      const result = await response.json();
      setData(result.response.docs);
    }
    fetchData();
  }, [type, apiKey]);


  const categories = ["europe", "health", "sport", "travel", "business"];

  return (
    <div className="wrapper">
      <Header isShowing />
      <main>
        <ul>
          {categories.map((category) => {
            return (
              <li className="news" key={category}>
                <div
                  className="news__top"
                  onClick={() => setType(type === category ? null : category)}
                >
                  <figure>
                    <img
                      src="../projekt-ui/screens/newsify_logo_1.svg"
                      alt=""
                    />
                    <figcaption>{category}</figcaption>
                  </figure>
                  <ArrowRight />
                </div>
                <ul className="news__content">
                  {type === category &&
                    data.map((article) => (
                      <li key={article._id}>
                        <figure>
                          <img src={article.multimedia.thumbnail.url} alt="" />
                          <figcaption>
                            <h3>{article.headline.main}</h3>
                            <p>{article.snippet}</p>
                            <a target="_blank" href={article.web_url}>See more</a>
                          </figcaption>
                        </figure>
                      </li>
                    ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
