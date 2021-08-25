
import PropTypes from 'prop-types';
// import {Fragment} from "react";


// Functional Components
const FirstApp = ({saludo, subtitle='Soy un subtitulo'}) => {
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitle}</p>
        </>
        /*
        <div>
            <h1>Hola, Lorenzo</h1>
            <p>Esta es mi primera aplicacion</p>
        </div>

        <Fragment>
            <h1>Hola, Lorenzo</h1>
            <p>Esta es mi primera aplicacion</p>
        </Fragment>
         */
    );
}

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'Esta es mi primera aplicacion con REACT'
}

export default FirstApp;
