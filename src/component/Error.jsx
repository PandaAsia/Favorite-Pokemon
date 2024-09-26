// eslint-disable-next-line react/prop-types
const Error = ({ mensaje, mensaje2 }) => {
  return (
    <div className="container-error">
      <h3 className="title-error">
        Error {mensaje}: {mensaje2}
      </h3>
    </div>
  );
};
export default Error;
