import SendIcon from "@mui/icons-material/Send";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import React, { useContext, useState } from "react";
import CustomerContext from "../context/CustomerContext";

// import Button from "@mui/material";

export default function Create() {
  const { addCustomer } = useContext(CustomerContext);

  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [nameError, setNameError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [gender, setGender] = useState("female");
  const [rating, setRating] = useState(1);

  //snackbar
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && details && gender && rating) {
      addCustomer({ name, details, gender, rating });
      setOpenSnackBar(true);
    }
    if (name === "") {
      setNameError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    e.target.reset();
  };
  const handleClose = () => {
    setOpenSnackBar(false);
  };
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Create new a Customer
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box pb={5}>
          <TextField
            sx={{ paddingBottom: "20px" }}
            label="Name"
            variant="standard"
            required
            fullWidth
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          <TextField
            label="Detail"
            variant="standard"
            required
            fullWidth
            onChange={(e) => setDetails(e.target.value)}
            error={detailsError}
          />
          <RadioGroup
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel control={<Radio />} label="Male" value="Male" />
            <FormControlLabel
              control={<Radio />}
              label="Female"
              value="Female"
            />
            <FormControlLabel
              control={<Radio />}
              label="Others"
              value="Others"
            />
          </RadioGroup>
          <Rating
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </Box>
        <Button type="submit" variant="contained" startIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Create new customer successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}
