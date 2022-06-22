import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../shared/Context/Context";
import "./Ul.scss"

const Ul = () => {

    const {imagenPerfil} = useContext(Context);

  return (
    <ul className="itemContainer">
        <li className="item">
            <img className="perfil" src={imagenPerfil} alt="imagen de perfil"/>
        </li>
      <li className="item">
        <Link className="item" to="/">Inicio</Link>
      </li>
      <li className="item">
        <Link className="item" to="/choosepicture">Elegir Foto de Perfil</Link>
      </li>
      <li className="item">
        <Link className="item" to="/about">About</Link>
      </li>
    </ul>
  );
};

export default Ul;
