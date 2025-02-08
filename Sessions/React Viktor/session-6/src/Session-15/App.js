import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const [data, setData] = useState("");
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          setData(data);
          console.log(data.mosha);
        })}
      >
        <label htmlFor="emri">Name</label>
        <br />
        <input id="emri" {...register("emri")} type="text" />
        <br />
        <label htmlFor="mbiemri">Surname</label>
        <br />
        <input id="mbiemri" {...register("mbiemri")} type="text" />
        <br />
        <label htmlFor="mosha">Age</label>
        <br />
        <input id="mosha" {...register("mosha")} type="number" />
        <br />
        <input type="submit"></input>
      </form>
    </>
  );
}

export default App;
