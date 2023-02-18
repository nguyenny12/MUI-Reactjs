import React, { useContext } from "react";
import Card from "@mui/material/Card";
import { CardHeader, CardContent, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomerContext from "../context/CustomerContext";
import Avatar from "@mui/material/Avatar";
import CustomerModel from "./CustomerModel";

function CustomerCard({ customer }) {
  const { deleCustomer } = useContext(CustomerContext);
  const stringAvatar = (name) => {
    const words = name.split(" ");
    return words.map((word) => word[0]).join("");
  };
 
  return (
    <Card sx={{ width: "320px" }}>
      <Avatar sx={{ margin: "10px", bgcolor: "pink" }}>
        {stringAvatar(customer.name)}
      </Avatar>
      <CardHeader
        action={
          <IconButton onClick={() => deleCustomer(customer.id)}>
            <DeleteIcon />
          </IconButton>
        }
        title={customer.name}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
        }}
      />
      <CardContent>
        <Typography paragraph align="justify">
          {customer.details}
        </Typography>
        <CustomerModel customer={customer} />
      </CardContent>
    </Card>
  );
}

export default CustomerCard;
