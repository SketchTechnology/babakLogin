import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextareaAutosize,
  Button,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { CompanyDaTaContext } from "../../Context/CompanyData";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  companyName: Yup.string().required("Company Suggested Name is required"),
  numberOfPartners: Yup.number()
    .required("Number of partners is required")
    .positive()
    .integer(),
  isRegistered: Yup.string().required("This field is required"),
  capital: Yup.number().required("Capital is required").positive(),
  activity: Yup.string().required("Company activity is required"),
  note: Yup.string(),
});

const StepTwo = ({handleNext}) => {
  const {setCompnyInfo,CompnyInfo} =useContext(CompanyDaTaContext)
  const initialValues = {
    country: CompnyInfo?.country || "Ae",
    companyName: CompnyInfo?.companyName || "",
    numberOfPartners: CompnyInfo?.numberOfPartners || "",
    isRegistered: CompnyInfo?.isRegistered || "",
    capital: CompnyInfo?.capital || "",
    activity: CompnyInfo?.activity || "",
    note: CompnyInfo?.note || "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setCompnyInfo({...values,...CompnyInfo})
    setSubmitting(false);
handleNext()
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount={true}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              gap: 2,
              margin: "50px auto",
            }}
          >
            {/* Country Dropdown */}
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Field name="country" as={Select} variant="outlined" defaultValue="Ae">
        
                <MenuItem  value="EG">Egypt</MenuItem>
                <MenuItem value="Sa">Saudi Arabia</MenuItem>
                <MenuItem value="Ae">United Arab Emartes</MenuItem>
              </Field>
              <ErrorMessage
                name="country"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>

            {/* Company Suggested Name */}
            <Field name="companyName">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Company Suggested Name"
                  variant="outlined"
                  fullWidth
                  error={Boolean(ErrorMessage.companyName)}
                  helperText={
                    <ErrorMessage name="companyName" component="div" />
                  }
                />
              )}
            </Field>

            {/* Number of Partners */}
            <Field name="numberOfPartners">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Number of Partners"
                  type="number"
                  variant="outlined"
                  fullWidth
                  error={Boolean(ErrorMessage.numberOfPartners)}
                  helperText={
                    <ErrorMessage name="numberOfPartners" component="div" />
                  }
                />
              )}
            </Field>

            {/* Is the company already registered in another country? */}
            <FormControl>
              <FormLabel>
                Is the company already registered in another country?
              </FormLabel>
              <Field name="isRegistered" as={RadioGroup}>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </Field>
              <ErrorMessage
                name="isRegistered"
                component="div"
                style={{ color: "red" }}
              />
            </FormControl>

            {/* Capital */}
            <Field name="capital">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Capital"
                  type="number"
                  variant="outlined"
                  fullWidth
                  error={Boolean(ErrorMessage.capital)}
                  helperText={<ErrorMessage name="capital" component="div" />}
                />
              )}
            </Field>

            {/* Company Activity */}
            <Field name="activity">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Company Activity"
                  variant="outlined"
                  fullWidth
                  error={Boolean(ErrorMessage.activity)}
                  helperText={<ErrorMessage name="activity" component="div" />}
                />
              )}
            </Field>

            {/* Note */}
            <Field name="note">
              {({ field }) => (
                <TextareaAutosize
                  {...field}
                  minRows={4}
                  placeholder="Add a note"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderColor: "#ccc",
                    borderRadius: "4px",
                  }}
                />
              )}
            </Field>

            <ErrorMessage
              name="note"
              component="div"
              style={{ color: "red" }}
            />
            {/* valid /////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Button type="submit" variant="contained" className={`${!isValid?'disabledBtn':'MainBtn'}`} disabled={isSubmitting || !isValid}>
              Next
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
