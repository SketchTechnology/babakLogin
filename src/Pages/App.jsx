import { useContext } from "react";
import StepperForm from "../Components/stepper/StepperForm";
import "../assets/Css/App.css";
import logoImg from "../assets/Imgs/logo/logo25.png";
import charc1 from "../assets/Imgs/stepOne/01.png";
import charc2 from "../assets/Imgs/stepTwo/02.png";
import charc3 from "../assets/Imgs/stepThree/03.png";
import { CompanyDaTaContext } from "../Context/CompanyData";
import AnimatedCircles from "../Components/animated/AnimatedCircles";
function App() {
  const { activeStep } = useContext(CompanyDaTaContext);
  const checkImg = () => {
    switch (activeStep) {
      case 0:
        return charc1;
      case 1:
        return charc2;
      case 2:
        return charc3;
    }
  };
  return (
    <div className="RegisterParent d-flex flex-column justify-content-center align-items-center">
      <img src={logoImg} alt="logo" />
      <div className="row justify-content-cente StepperContainer ">
        <div className="col-12 col-lg-4  ">
          <div className="charcStep h-100">
            <img src={checkImg()} alt="charc" />
          </div>
        </div>
        <div className=" row gap-5 col-12  col-lg-8 ">
          <div className="col-12">
            <StepperForm />
          </div>
        </div>
      </div>
      <AnimatedCircles />
    </div>
  );
}

export default App;
