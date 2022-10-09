import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import NoteFoundPage from "../pages/NoteFoundPage";
import CountryPage from "../pages/CountryPage";
import Layout from "./Layout";
import MainPage from "../pages/MainPage";

const COUNTRY_INFO_PAGE = "country/:countryName/";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={COUNTRY_INFO_PAGE} element={<CountryPage />} />
        <Route path="*" element={<NoteFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
