export default function Header({ isShowing = false }) {
  return (
    <>
      <header className="header">
        <figure className="header__figure">
          <img className="credit" src="../poweredby_nytimes_200c.png" alt="" />
          <img src="../projekt-ui/screens/newsify_logo_1.svg" alt="logo" />
          <h1>Newsify</h1>
        </figure>
        {isShowing ? (
          <nav className="header__nav">
            <input
              placeholder="Search news"
              type="text"
              name=""
              id=""
              className="header__search"
            />
          </nav>
        ) : null}
      </header>
    </>
  );
}
