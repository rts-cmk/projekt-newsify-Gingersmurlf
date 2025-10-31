import Header from "../html/header";
import Footer from "../html/footer";

export default function Archive() {
  return (
    <div className="wrapper">
      <Header isShowing />

      {Object.entries(localStorage).map(([key, value]) => {
        const article = JSON.parse(value);
        console.log(article);
      })}
      <Footer />
    </div>
  );
}
