import React from 'react';
import './index.css';

function App() {
  return (
    <div className="banner">
      <div className="navbar">
        <img src="logo1.png" className="logo" alt="logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">O nas</a></li>
          <li><a href="#">Usługi</a></li>
          <li><a href="#">Przykłady produktów</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </div>

      <div className="content">
        <h1>Cięcie laserem metalu</h1>
        <p>Cięcie laserowe to nowoczesny sposób obróbki materiału. Laser emituje wiązkę światła o ogromnej mocy, 
          która jest w stanie rozgrzać metal do bardzo wysokiej temperatury, co umożliwia jego cięcie lub spawanie. 
          Cięcie laserem jest bardzo precyzyjne, bowiem pozwala na osiągnięcie dużej dokładności, nawet przy bardzo 
          skomplikowanych kształtach. Jest to szczególnie ważne przy produkcji wyrobów precyzyjnych, takich jak części 
          samochodowe czy elementy elektroniczne.
        </p>
        <div>
          <button type="button"><span></span>Dowiedz się więcej</button>
        </div>
      </div>
    </div>
  );
}

export default App;