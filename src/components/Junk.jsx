import { useState } from "react";

const Junk = () => {
  const [current, setCurrent] = useState({});
  const hello = { billie: "jean", rooster: 1 };

  const sorry = {
    ...hello,
    iguana: true,
  };

  const handleChoose = (el) => setCurrent(el);
  return (
    <div>
      <button onClick={() => handleChoose(hello)}>hello</button>
      <button onClick={() => handleChoose(sorry)}>sry</button>
      <ul>
        {Object.entries(current).map((entry, idx) => (
          <li key={idx}>
            {entry[0]} - {entry[1].toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Junk;
