import { createContext, useState } from "react";
export const CompanyDaTaContext = createContext("");
const CompanyDaTaContextProvider = ({ children }) => {
  const [CompnyInfo, setCompnyInfo] = useState({
    
  });
  const [activeStep, setActiveStep] = useState(0);
  const [validations,setValidation] =useState({
   stepOne:false,
   stepTwo:false,
   stepThree:false
  })
  return (
    <CompanyDaTaContext.Provider
      value={{ CompnyInfo, setCompnyInfo, setActiveStep, activeStep, setValidation,validations}}
    >
      {children}
    </CompanyDaTaContext.Provider>
  );
};

export default CompanyDaTaContextProvider;
