import React, { useState } from "react";
import PageLayout from '../components/PageLayout';

import {
  Typography,
  Grid,
  Link,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
// import axios from "axios";


export default function SignUp() {

  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = event => {
    event.preventDefault();

  
    // axios
    //   .post("/api/user/register", credentials)
    //   .then(() => {
    //     setDashboard()
    //       .then(() => {
    //         history.push("/dashboard");
    //       })
    //       .catch(error => {
    //         console.error(error.response);
    //       });
    //   })
    //   .catch(error => {
    //     console.error(error.response);
    //   });
  };

  return (
    <PageLayout>
      <Container>
        <Typography component="h1" variant="h4">
          Register
          </Typography>
        <form
          onSubmit={e => handleSubmit(e)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                variant="outlined"
                id="firstName"
                label="First Name"
                value={user.firstName}
                autoFocus
                onChange={setUser}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                variant="outlined"
                id="lastName"
                label="Last Name"
                value={user.lastName}
                onChange={setUser}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                value={user.email}
                autoComplete="email"
                onChange={setUser}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                id="password"
                value={user.password}
                onChange={setUser}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign Up
            </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
                </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </PageLayout>
  );
}
