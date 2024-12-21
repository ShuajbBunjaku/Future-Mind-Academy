import Card from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  const CardsArray = [
    {
      title: "Basic",
      description: "Viktor",
      price: 20,
      currency: "$",
      features: ["bllabllablla", "tralalala"],
    },
    {
      title: " Pro",
      description: "Edin",
      price: 50,
      currency: "#",
      features: ["bllabllablla pro", "tralalala"],
    },
    {
      title: " Exlucive",
      description: "Shuajb",
      price: 99,
      currency: "*",
      features: ["bllabllablla pro exlucive", "tralalala"],
    },
  ];

  return (
    <>
      <NavBar title="Hello" />
      <Header title="Shuajb" desc="Bunjaku" />
      <div className="card-container">
        {CardsArray.map((card, currentIndex) => {
          let currentTitle;
          if (currentIndex > 0) {
            currentTitle = CardsArray[currentIndex - 1].title;
            card.title = currentTitle + card.title;
          }
          currentIndex++;

          return (
            <>
              {console.log(card.title)}
              <Card
                cardTitle={card.title}
                cardDesc={card.description}
                cardList={card.features}
                cardPrice={card.price}
                cardCurrency={card.currency}
              />
            </>
          );
        })}
      </div>
      <Footer footerText="All rights reserved" />
    </>
  );
}

export default App;
