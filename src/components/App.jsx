import Junk from "./Junk";

import butterfly from "../images/2056977.svg";
import "../styles/index.scss";

const App = () => {
  const sec2Exec = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve("moneeeeeeey"), 2000)
    );

  const asyncFunc = async () => {
    console.log(await sec2Exec());
  };
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hello r</h1>
        </section>
        <img
          src={butterfly}
          alt="butterfly"
          width="250px"
          onClick={asyncFunc}
        />
        <Junk />
      </main>
    </>
  );
};

export default App;
