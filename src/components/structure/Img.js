import "./css/Img.css";

const Img = (props) => {
  const imgUrl = props.url;
  const alt = props.alt;
  return (
    <div className="img-component">
      <img src={imgUrl} alt={alt} />
    </div>
  );
};

export default Img;
