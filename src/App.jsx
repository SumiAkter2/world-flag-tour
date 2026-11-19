import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";
import NavBar from "./components/CustomNavigation/NavBar";
import Axios from "./components/Axios/Axios";
import axios from "axios";

function App() {
  const countriesPromise = fetch(
    "https://openapi.programming-hero.com/api/all",
  ).then((res) => res.json());

  const studentsPromise = axios.get("student_mark.json");
  return (
    <>
      <NavBar />
      <Suspense fallback={<p>Student mark will be show very soon..........</p>}>
        <Axios studentsPromise={studentsPromise} />
      </Suspense>

      <Suspense fallback={<p> Please wait a momonet..........</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
