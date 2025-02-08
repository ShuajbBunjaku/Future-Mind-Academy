import useIsDarkMode from "./useIsDarkMode";

function App() {
  const { theme, setToggle } = useIsDarkMode(false);

  return (
    <div
      style={
        theme
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <button onClick={setToggle}>Theme</button>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
