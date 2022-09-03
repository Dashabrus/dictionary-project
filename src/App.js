import logo from "./logo.png";
import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo " alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <a
            href="https://glittering-dodol-e58a2e.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Open-source{" "}
          </a>
          code by{" "}
          <a
            href="https://github.com/Dashabrus/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Dasha Brus
          </a>
        </footer>
      </div>
    </div>
  );
}
