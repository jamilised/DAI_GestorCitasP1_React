import "./CampoTextarea.css";

const CampoTextarea = ({ label, name }) => {
  return (
    <>
      <label>{label}</label>
      <textarea name={name} className="u-full-width"></textarea>
    </>
  );
};

export default CampoTextarea;