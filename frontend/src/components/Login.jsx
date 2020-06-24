import React, { useState } from "react";
import PageLayout from '../components/PageLayout';

import {
  Container,
  Typography,
  TextField,
  Link,
  Button,
  Grid,
} from "@material-ui/core";


/**
 * @function onSignIn googleUser.getBasicProfile()
 * @params googleUser {}
 * @interface googleUser.getBasicProfile() {     
        getId()); 
        getName());
        getGivenName());
        getFamilyName());
        getImageUrl());
        getEmail()); 
      }
 */


export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // [event.target.id]: event.target.value,

  const handleSubmit = event => {
    event.preventDefault();

    // axios
    //   .post("/api/login", user )
    //   .then(() => {})
    //   .catch(error => console.log(error));
  };

  return (
    <PageLayout>
      <Container>
        <Typography component="h1" variant="h4">
          Log In With Your Google Account
        </Typography>
        <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
        <Typography component="h1" variant="h4">
          Log In With Your Accounts Credentials
        </Typography>
        <form
          onSubmit={e => handleSubmit(e)}
        ></form>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              variant="outlined"
              id="email"
              type="email"
              label="Email Address"
              value={user.email}
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
          Log In
            </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/register" variant="body2">
              Don't have an account? Sign up
          </Link>
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  )

}