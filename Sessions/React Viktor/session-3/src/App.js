import Card from "./components/useCard/card";

function App() {
  let users = [
    {
      fullname: "Shuajb Bunjaku",
      occypation: "student",
    },
    {
      fullname: "Edin Shuajb",
      occypation: "student",
    },
    {
      fullname: "Viktor Shuajb",
      occypation: "student",
    },
  ];

  return (
    <>
      <h1>There are users</h1>
      <div className="user-List">
      {users.map((user) => {
        return <Card fullname={user.fullname} occupy={user.occypation} />;
      })}
      </div>
    </>
  );
}

export default App;
