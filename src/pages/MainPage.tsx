import { FC } from "react";
import Controls from "../components/Controls";
import CountryList from "../components/CountryList";

const MainPage: FC = () => {
  return (
    <>
      <Controls />
      <CountryList />
    </>
  );
};

export default MainPage;
