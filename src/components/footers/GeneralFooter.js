import "./css/GeneralFooter.css";

const GeneralFooter = () => {
  return (
    <footer className=" general-footer">
      <h6>Workoutly - simple gym tracker</h6>
      <h6>Copyright © All Right Reserved 2023-{new Date().getFullYear()} </h6>
    </footer>
  );
};

export default GeneralFooter;
