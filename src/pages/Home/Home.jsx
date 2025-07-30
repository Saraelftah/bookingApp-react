// import { useEffect, useState } from "react";
import Offers from "../../components/Offers/Offers";
import RecommHotels from "../../components/RecommHotels/RecommHotels";
import "./Home.module.css";


function Home() {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {}, []);

  return (
    <>
      <RecommHotels />
      <Offers />
    </>
  );
}

export default Home;
