import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import CountryPage from "./CountryPage/CountryPage";
import Other_Part_Home from "./Other_Part_Home/Other_Part_Home";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="">
      <Banner></Banner>
      <CountryPage></CountryPage>
      <Other_Part_Home></Other_Part_Home>
    </div>
  );
};

export default Home;
