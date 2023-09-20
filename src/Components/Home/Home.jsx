// import PropTypes from 'prop-types';

import { Outlet, useNavigation } from "react-router-dom";
import Categoris from "../MealsCategoris/Categoris";
import Navbar from "../Navbar/Navbar";
import Loading from "../Loading/Loading";

const Home = () => {

  const navigation = useNavigation();

  return (
    <div>
      <Navbar></Navbar>
      <Categoris></Categoris>
      {
        navigation.state === "loading"? <Loading></Loading>: " "
      }
      <Outlet></Outlet>
    </div>
  );
};

// Home.propTypes = {

// };

export default Home;
