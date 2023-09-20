import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import './categori.css'

const Categori = ({ categori }) => {
  return (
    <div className="">
      <NavLink to={`/categori/${categori.strCategory}`}>
      <button className="btn bg-slate-700">
          <span className="-mr-1">
            <img src={categori.strCategoryThumb} alt="" className="w-10" />
          </span>
          <h2 className="text-xl">{categori.strCategory}</h2>
        </button>
      </NavLink>
    </div>
  );
};

Categori.propTypes = {
  categori: PropTypes.object,
};

export default Categori;
