import theme from "../../theme";
import { FormEvent } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import Title from "../props/Title";
import useInput from "../../hooks/useFormInput";

const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) => value.includes("@");
function Form() {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameIsError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameIsError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailIsError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    //Do something
  };
  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;
  console.log("render");

  return (
    <div className="App">
      <Grid>
        <Card
          sx={{ boxShadow: 3 }}
          style={{
            maxWidth: 450,
            padding: "20px 5px",
            margin: "100px auto",
            borderRadius: "30px",
            backgroundColor: theme.palette.primary.light,
          }}
          color="primary"
        >
          <CardContent>
            <Title>MUI FORM</Title>
            <form onSubmit={submitHandler}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    error={firstNameIsError}
                    value={firstNameValue}
                    onChange={firstNameChangeHandler}
                    onBlur={firstNameBlurHandler}
                    helperText={
                      firstNameIsError ? "Firstname is required" : " "
                    }
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    error={lastNameIsError}
                    value={lastNameValue}
                    onChange={lastNameChangeHandler}
                    onBlur={lastNameBlurHandler}
                    helperText={lastNameIsError ? "Lastname is requiredl" : " "}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    error={emailIsError}
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    helperText={emailIsError ? "Incorrect Email" : " "}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={!formIsValid}
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Form;
