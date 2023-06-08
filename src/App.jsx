import { useState } from "react";

const App = () => {
  const [plaque, setPlaque] = useState("");
  const [bgColor, setBgColor] = useState("#e0e0e0");
  const chars = plaque.split("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const choicedChar = chars[2].find((item) =>
    //   item.include(["a", "b", "c"].map((i) => i))
    // );
    if (chars[2] === "آ") {
      setBgColor("red");
    }
    if (chars[2] === "ع") {
      setBgColor("gold");
    }
    if (chars[2] === "پ") {
      setBgColor("green");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ backgroundColor: bgColor }} className="wrapper">
        <div className="inputLeft">
          <div className="blueDiv">
            <img src="./img/ax.jpg" alt="" />
            <div className="iranDiv">
              <span>IR</span>
              <span>IRAN</span>
            </div>
          </div>
          <input
            type="text"
            value={plaque}
            onChange={(e) => setPlaque(e.target.value)}
            maxLength={6}
            minLength={6}
            required
          />
        </div>
        <div className="inputRight">
          <span>ایران</span>
          <input type="text" maxLength={2} minLength={2} required/>
        </div>
      </div>
      <button type="submit">Click</button>
    </form>
  );
};

export default App;
