import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import HomeHeader from "./components/homeHeader";
import Welcome from "./components/welcome";
import BestFurniture from "./components/bestFurnituer";
import UniqueFurniture from "./components/uniqueFurnitue";
import Cards from "./components/Cards";
import Benefits from "./components/benefits";
import ShoppingCard from "./components/shopCard";
import NewsLetter from "./components/newsLetters";
import Footer from "./components/footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeHeader />
    <div className="container">
      <main>
        <Welcome />
        <p className="nicorTxt">
          <b>NICOR</b>
        </p>
        <BestFurniture />
        <Cards />
        <UniqueFurniture />
        <Benefits />
        <ShoppingCard />
        <NewsLetter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
