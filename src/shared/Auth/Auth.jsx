import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../Context/Context";

export default function RequireAuth ({children}) {

    const {imagenPerfil} = useContext(Context)

    if (!imagenPerfil) {

        return <Navigate to="/choosepicture"/>

    }

    return children

}