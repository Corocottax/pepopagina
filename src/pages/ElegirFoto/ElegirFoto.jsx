import React, { useContext, useState } from 'react'
import { Context } from '../../shared/Context/Context'
import "./ElegirFoto.scss"

const ElegirFoto = () => {

    const {setImagenPerfil} = useContext(Context);

    const [perfilTemp, setPerfilTemp] = useState("https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilu.jpg?ver=6");

    const guardarImagen = () => {

        setImagenPerfil(perfilTemp)

    }

    const mostrarImagen = (evento) => {

        setPerfilTemp(evento.target.getAttribute("src"));

    }

  return (
    <div className='elegirFoto'>
        <div className='seleccion'>
            <img className='iconoPerfil' onClick={evento => mostrarImagen(evento)} src='https://i.pinimg.com/474x/54/36/70/5436709e2252f17772c515d600ed1ae2--yahoo.jpg' alt='imagen1' />
            <img className='iconoPerfil' onClick={evento => mostrarImagen(evento)} src='https://i.pinimg.com/originals/55/69/4a/55694acec46534fd4908c58dccdea8a4.jpg' alt='imagen1' />
            <img className='iconoPerfil' onClick={evento => mostrarImagen(evento)} src='https://i.pinimg.com/550x/23/54/cc/2354cc10fb32943ce05dce9e6e68971e.jpg' alt='imagen1' />
            <img className='iconoPerfil' onClick={evento => mostrarImagen(evento)} src='https://www.metro951.com/wp-content/uploads/2014/11/Gato1.jpg' alt='imagen1' />
            <img className='iconoPerfil' onClick={evento => mostrarImagen(evento)} src='https://img.fotocommunity.com/jirafa-perfil-af00f652-156b-40d6-ae49-dd93f15ec634.jpg?width=1000' alt='imagen1' />
            <img className='iconoPerfil' onClick={evento => mostrarImagen(evento)} src='https://i.pinimg.com/564x/0f/1f/e9/0f1fe95033efd2af951bfaaa49bd761d.jpg' alt='imagen1' />
        </div>
        <img className='preview' src={perfilTemp} alt="preview"/>
        <button onClick={guardarImagen} className='guardarPerfil' >Guardar</button>
    </div>
  )
}

export default ElegirFoto;