function Header() {
  return (
    <>
      <div className="parent">
        <header className="flex container">
          <p className="brand">Gizmo</p>
          <nav>
            <ul className="flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
