// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Categoris from "../MealsCategoris/Categoris";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Categoris></Categoris>
      <Outlet></Outlet>
    </div>
  );
};

// Home.propTypes = {

// };

export default Home;
