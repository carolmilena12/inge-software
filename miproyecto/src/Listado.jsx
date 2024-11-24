import PropTypes from "prop-types"; // Importa prop-types

export const Listado = (props) => {
  return (
    <div>
        <li className="lenguajes fondo-a" id="php">{props.lenguaje}</li>

    </div>
  )
}
Listado.propTypes = {
    lenguaje: PropTypes.string.isRequired, // La prop "lenguaje" debe ser un string y es requerida
  };
