import React from "react";
import '../styles/Home.css';


function Home() {
  const champions = [{ name: 'Batosai', atk: 6, def: 4, agi: 4, resis: 6 },
  { name: 'Zamushi', atk: 5, def: 4, agi: 7, resis: 4 }]

  return (
    <div className="container">
      <label htmlFor="Champions">Escolha seu Campeão</label>

      <select name="Champions" id="Champions">
        <option value="Batosai">Batosai</option>
        <option value="Zamushi">Zamushi</option>
      </select>

      <div>
        <h2>Atributos</h2>
        {champions.map(champion => {
          return (
            <>

              <div>O nome dele e  {champion.name}</div>
              <div>Sua força e de {champion.atk}</div>
              <div>Sua Defesa e{champion.def}</div>
              <div>Sua agilidade e de {champion.agi}</div>
              <div>Sua resistencia e de {champion.resis}</div>

            </>


          )
        })}

      </div>

    </div>
  );
}

export default Home;
