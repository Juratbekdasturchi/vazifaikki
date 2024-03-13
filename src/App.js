// import logo from './logo.svg';
import monitor from './Monitor.svg';
import telefon from './Telefon.svg';
import rasmbir from './rasmbir.jpg';
import rasmikki from './rasmikki.jpg';
import rasmuch from './rasmuch.jpg';
import rasmtort from './rasmtort.jpg';
import rasmbesh from './rasmbesh.jpg';
import rasmolti from './rasmolti.jpg';
import rasmyetti from './rasmyetti.jpg';
import rasmsakkiz from './rasmsakkiz.jpg';
import rasmtoqqiz from './rasmtoqqiz.jpg';

import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <span> WIX </span>
        <div className="box">
          <img src={monitor} alt="" />
          <img src={telefon} alt="" />
        </div>
        <span>Нажмите «Редактировать», чтобы создать свой сайт</span>
        <p>Подробнее</p>
        <button>Редактировать </button>
      </header>
      <main>
        <div>
          <h1> Jur'atbek Abduraimov </h1>
          <ul>
            <li> Asosiy </li>
            <li> Men haqimda </li>
            <li> Aloqa uchun </li>
          </ul>
        </div>

<div className="rasmlar">
          <img src={rasmbir} alt="" />
          <img src={rasmikki} alt="" />
          <img src={rasmuch} alt="" />
          <img src={rasmtort} alt="" />
          <img src={rasmbesh} alt="" />
          <img src={rasmolti} alt="" />
          <img src={rasmyetti} alt="" />
          <img src={rasmsakkiz} alt="" />
          <img src={rasmtoqqiz} alt="" />
</div>

      </main>
    </div>
  );
}

export default App;
