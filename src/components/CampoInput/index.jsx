import "./CampoInput.css";

const CampoInput = ({ label, type, name, placeholder, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className="u-full-width"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default CampoInput;
