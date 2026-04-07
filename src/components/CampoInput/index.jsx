import "./CampoInput.css";

const CampoInput = ({ label, type, name, placeholder }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className="u-full-width"
        placeholder={placeholder}
      />
    </>
  );
};

export default CampoInput;