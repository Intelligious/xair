import React from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import { Checkbox, FormControlLabel, Grid, Link } from "@mui/material";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";

export default function Login() {
  return (
    <>
      <WebHeader />
      <div className="mt-5 mb-5">
        <div className="container bg-color pb-5 pt-5">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 ">
              <h4 className="text-center">Login</h4>
            </div>
            <div className="col-12 col-md-10   mt-3">
              <label className="mb-1">
                Email <span>*</span>
              </label>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="col-12 col-md-10  mt-3">
              <label className="mb-1">
                Password <span>*</span>
              </label>
              <input
                type="Password"
                name="Password"
                placeholder="Password"
                required
              />
            </div>
            <div className="col-12 col-md-10  mt-3">
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Remember me"
              />
            </div>
            <div className="col-12 col-md-10  mt-3">
              <a>
                <button className="button w-100"> Log In</button>
              </a>
            </div>
            <div className="col-12 col-md-10  mt-3">
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <WebFooter />
    </>
  );
}
