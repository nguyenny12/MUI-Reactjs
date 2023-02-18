import {
  Box,
  Container,
  Drawer,
  Grid,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import React, { useContext } from "react";
import CustomerCard from "../components/CustomerCard";
import CustomerContext from "../context/CustomerContext";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/system";
function Home() {
  const { customers } = useContext(CustomerContext);

  const MyComponent = styled("div")({
    color: "darkslategray",
    backgroundColor: "aliceblue",
    padding: 8,
    borderRadius: 4,
  });
  return (
    <Container sx={{ pt: "25px" }}>
      <CssBaseline />
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
        Welcome to the Customer
      </Typography>
      <Box sx={{ display: " flex", width: "1400px" }}>
        <Box>
          <Drawer variant="permanent" anchor="left">
            <List>
              <ListItem component="a" href="/create">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Create a new Customer" />
              </ListItem>
            </List>
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container p={10} spacing={5} gap={12}>
            {customers &&
              customers.map((customer) => (
                <Grid xs={3} key={customer.id}>
                  <MyComponent>
                    <CustomerCard customer={customer} />
                  </MyComponent>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
