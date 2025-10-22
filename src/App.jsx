import Header from "./components/html/header";
import Footer from "./components/html/footer";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null)

  const apiKey = import.meta.env.VITE_API_KEY;

  let type = search

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `/nyt/svc/search/v2/articlesearch.json?q=${type}&api-key=${apiKey}`
      );
      const result = await response.json();
      setData(result);
    }
    // fetchData();
  }, []);
  console.log(data);

  return (
    <div className="wrapper">
      <Header isShowing />
      <main>
        <ul>
          <li
          onClick={() => setSearch("health")}
          >Health</li>
          <li>Sport</li>
          <li>Travel</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
