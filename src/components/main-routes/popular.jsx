import Header from "../html/header";
import Footer from "../html/footer";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";

const time_interval = [1, 7, 30];
const apiKey = import.meta.env.VITE_API_KEY;

export default function Popular() {
  const [period, setPeriod] = useState(0);

  const { isLoading, isPending, error, data} = useQuery({
    queryKey: ["popular_articles", period],
    queryFn: async () => {
      if(period === 0) return {};
      const response = await fetch(
        `/nyt/svc/mostpopular/v2/viewed/${period}.json?api-key=${apiKey}`
      );
      const result = await response.json();
      return result.results;
    },
    enabled: true,
  });

  if (isPending || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="wrapper">
      <Header isShowing />
      <main>
        <ul className="category__container">
          {time_interval.map((category) => {
            return (
              <li className="news" key={category}>
                <div
                  className={`news__top ${
                    period === category ? "active__header" : ""
                  }`}
                  onClick={() =>
                    setPeriod(period === category ? 0 : category)
                  }
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
                      period === category ? "active" : ""
                    }`}
                  />
                </div>
                <ul className="news__content">
                  {period === category &&
                    data.map((article) => (
                      <li key={article.id}>
                        <figure>
                          <img
                            src={article.media?.[0]?.["media-metadata"][0].url}
                            alt=""
                          />
                          <figcaption>
                            <h3>{article.title}</h3>
                            <p>{article.abstract}</p>
                            <a target="_blank" href={article.url}>
                              See more
                            </a>
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
      <div className="filler"></div>
      <Footer />
    </div>
  );
}
