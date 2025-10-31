import Header from "./components/html/header";
import Footer from "./components/html/footer";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const categories = ["europe", "health", "sport", "business", "travel"];
const apiKey = import.meta.env.VITE_API_KEY;
const existing = new Set(JSON.parse(localStorage.getItem("articleId")) || []);
const snapPoints = [0, 100];

export default function App() {
  const [type, setType] = useState(null);

  const { isLoading, isPending, error, data } = useQuery({
    queryKey: ["home_articles", type],
    queryFn: async () => {
      const response = await fetch(
        `/nyt/svc/search/v2/articlesearch.json?q=${type}&api-key=${apiKey}`
      );
      const result = await response.json();
      return result.response.docs;
    },
  });

  if (isPending || isLoading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="wrapper">
      <Header isShowing />
      <main>
        <ul className="category__container">
          {categories.map((category) => {
            return (
              <li className="news" key={category}>
                <div
                  className={`news__top ${
                    type === category ? "active__header" : ""
                  }`}
                  onClick={() => setType(type === category ? null : category)}
                >
                  <figure>
                    <img
                      src="../projekt-ui/screens/newsify_logo_1.svg"
                      alt=""
                    />
                    <figcaption className="news__caption">
                      {category}
                    </figcaption>
                  </figure>
                  <ChevronDown
                    className={`news__arrow ${
                      type === category ? "active" : ""
                    }`}
                  />
                </div>
                <ul className="news__content">
                  {type === category &&
                    data.map((article) => (
                      <motion.li
                        key={article._id}
                        drag="x"
                        dragElastic={0.1}
                        dragConstraints={{ left: -104, right: 0 }}
                        dragTransition={{
                          modifyTarget: (targetX) => {
                            const closest = snapPoints.reduce((a, b) =>
                              Math.abs(b - targetX) < Math.abs(a - targetX)
                                ? b
                                : a
                            );
                          },
                        }}
                      >
                        <figure>
                          <img src={article.multimedia.thumbnail.url} alt="" />
                          <figcaption>
                            <h3>{article.headline.main}</h3>
                            <p>{article.snippet}</p>
                            <a target="_blank" href={article.web_url}>
                              See more
                            </a>
                          </figcaption>
                          <Bookmark article={article} />
                        </figure>
                      </motion.li>
                    ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </main>
      <div className="filler"></div>
      <Footer />
    </div>
  );
}

function Bookmark({ article }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = existing.has(article._id);
    if (stored) setSaved(true);
  }, [article._id]);

  return (
    <button
      className="save__delete__container green"
      onClick={() => {
        if (!saved) {
          existing.add(article._id);
          localStorage.setItem(
            "articleId",
            JSON.stringify(Array.from(existing))
          );
          setSaved(true);
        } else {
          existing.delete(article._id);
          localStorage.setItem(
            "articleId",
            JSON.stringify(Array.from(existing))
          );
          setSaved(false);
        }
      }}
    >
      <svg
        className={`save__delete` + (saved ? " saved" : "")}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
