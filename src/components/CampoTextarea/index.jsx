import "./CampoTextarea.css";

const CampoTextarea = ({ label, name, onChange }) => {
    return (
    <>
      <label>{label}</label>
      <textarea
        name={name}
        className="u-full-width"
        onChange={onChange}
      ></textarea>
    </>
  );
};

export default CampoTextarea;
