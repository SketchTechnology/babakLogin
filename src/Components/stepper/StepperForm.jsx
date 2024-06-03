import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StepOne from "../Steps/StepOne";
import StepTwo from "../Steps/StepTwo";
import StepThree from "../Steps/StepThree";
import { CompanyDaTaContext } from "../../Context/CompanyData";

// Define the steps
const steps = [
  { label: "Step 1: Personal Information", icon: <PersonIcon /> },
  { label: "Step 2: Company Information", icon: <BusinessIcon /> },
  { label: "Step 3: Order Data", icon: <AssignmentIcon /> },
];

// Custom StepIcon component
const StepIconComponent = (props) => {
  const { icon } = props;
  return icon;
};

export default function StepperForm() {
  const { activeStep, setActiveStep, validations, setValidation } =
    React.useContext(CompanyDaTaContext);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const step = (num) => {
    switch (num) {
      case 0:
        return <StepOne  handleNext={handleNext} />;
      case 1:
        return <StepTwo handleNext={handleNext} />;
      case 2:
        return <StepThree />;

      default:
        break;
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={step.label} {...stepProps} >
              <StepLabel
                {...labelProps}
                StepIconComponent={() => <StepIconComponent icon={step.icon} />}
              >
                {step.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>{step(activeStep)}</div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* <Button onClick={handleNext} >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button> */}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
