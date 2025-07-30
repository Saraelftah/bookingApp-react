// import { useEffect, useState } from "react";
import "./Home.module.css";
import RecommHotels from "../../components/RecommHotels/RecommHotels";
import Offers from "../../components/Offers/Offers";


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
