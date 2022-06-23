import React from "react";
import "../styles/Home.css";
import BatosaiImg from "../assets/batosai.jpg";
import ZamushiImg from "../assets/zamushi.jpg";

function Home() {
  const champions = [
    {
      name: "Batosai",
      atk: 6,
      def: 4,
      agi: 4,
      resis: 6,
      img: BatosaiImg,
    },
    {
      name: "Zamushi",
      atk: 5,
      def: 4,
      agi: 7,
      resis: 4,
      img: ZamushiImg,
    },
  ];

  const monster = [
    { name: "Singed", atk: 4, def: 6, agi: 4, resis: 6 },
    { name: "Warkwik", atk: 6, def: 3, agi: 6, resis: 5 },
    { name: "Snorlax", atk: 6, def: 8, agi: 2, resis: 8 },
    { name: "Teemo", atk: 8, def: 5, agi: 8, resis: 6 },
  ];

  const selectChampion = () => {
    return (
      <>
        <div>
          <h2>Atributos</h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {champions.map((champion) => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "12px",
                      marginLeft: "24px",
                      width: "200px",
                      backgroundImage: champion.img,
                    }}
                  >
                    <div>O nome dele é: {champion.name}</div>
                    <div>Sua força é: {champion.atk}</div>
                    <div>Sua defesa é: {champion.def}</div>
                    <div>Sua agilidade é: {champion.agi}</div>
                    <div>Sua resistencia é: {champion.resis}</div>
                  </div>
                  <img
                    src={champion.img}
                    style={{ height: "220px", marginLeft: "-24px" }}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "12px" }}
        >
          <label htmlFor="Champions">Escolha seu campeão</label>
          <select name="Champions" id="Champions">
            <option value="Batosai">Batosai</option>
            <option value="Zamushi">Zamushi</option>
          </select>
        </div>

        <button>Confirmar</button>
      </>
    );
  };

  return (
    <div className="container">
      {selectChampion()}
      {/* {selectChampion()} */}
    </div>
  );
}

export default Home;
