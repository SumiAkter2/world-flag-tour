import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

function App() {
  const countriesPromise = fetch(
    "https://openapi.programming-hero.com/api/all",
  ).then((res) => res.json());
  return (
    <>
      <Suspense fallback={<p> Please wait a momonet..........</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
