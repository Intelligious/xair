import React, { useState } from "react";
import WebHeader from "../Web-Layouts/Web-Header/WebHeader";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
} from "@mui/material";
import WebFooter from "../Web-Layouts/Web-Footer/WebFooter";

export default function Register() {
  const [selectedValue, setSelectedValue] = useState("a");
  const [selectedOption, setSelectedOption] = useState("false");
  const [selectedOption1, setSelectedOption1] = useState("no");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangeSelect = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleChangeSelect1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  return (
    <>
      <WebHeader />
      <div className="mt-5 mb-5">
        <div className="container bg-color pb-5 pt-5">
          <div className="row justify-content-center align-items-center ">
            <div className="col-12 ">
              <h4 className="text-center ">Register</h4>
            </div>
            <div className="col-12 col-md-5   mt-3">
              <label className="mb-1">
                First Name <span>*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="First Name"
                required
              />
            </div>
            <div className="col-12 col-md-5   mt-3">
              <label className="mb-1">
                Last Name <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="col-12 col-md-5   mt-3">
              <label className="mb-1">
                Phone Number <span>*</span>
              </label>
              <input
                type="number"
                name="email"
                placeholder=" Phone Number"
                required
              />
            </div>
            <div className="col-12 col-md-5   mt-3">
              <label className="mb-1">
                Date of birth <span>*</span>
              </label>
              <input
                type="date"
                name="email"
                placeholder=" Phone Number"
                required
              />
            </div>
            <div
              className={
                selectedValue === "a"
                  ? "col-12 col-md-5   mt-3"
                  : "col-12 col-md-10   mt-3"
              }
            >
              <label className="mb-1">
                Address <span>*</span>
              </label>
              <input type="text" name="email" placeholder="Address" required />
            </div>
            {selectedValue === "a" && (
              <div className="col-12 col-md-5  mt-3">
                <label className="mb-1">
                  AirPorts List <span>*</span>
                </label>
                <select
                  value={selectedOption}
                  onChange={handleChangeSelect}
                  required
                >
                  <option value="true">text</option>
                  <option value="false" selected>
                    text
                  </option>
                </select>
              </div>
            )}
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
            {selectedValue === "b" && (
              <>
                <div className="col-12 col-md-5  mt-3">
                  <label className="mb-1">
                    text <span>*</span>
                  </label>
                  <select
                    value={selectedOption}
                    onChange={handleChangeSelect}
                    required
                  >
                    <option value="true">yes</option>
                    <option value="false">no</option>
                  </select>
                </div>
                <div className="col-12 col-md-5  mt-3">
                  <label className="mb-1">
                    text <span>*</span>
                  </label>
                  <select
                    value={selectedOption1}
                    onChange={handleChangeSelect1}
                    required
                  >
                    <option value="yes">yes</option>
                    <option value="no" selected>
                      no
                    </option>
                  </select>
                </div>
              </>
            )}
            {selectedOption === "true" && selectedValue === "b" && (
              <div
                className={
                  selectedOption1 === "no"
                    ? "col-12 col-md-10  mt-3"
                    : "col-12 col-md-5  mt-3"
                }
              >
                <label htmlFor="imageUpload">Upload Image:</label>
                <input type="file" id="imageUpload" name="imageUpload" />
              </div>
            )}
            {selectedOption1 === "yes" && selectedValue === "b" && (
              <div
                className={
                  selectedOption === "false"
                    ? "col-12 col-md-10  mt-3"
                    : "col-12 col-md-5  mt-3"
                }
              >
                <label htmlFor="imageUpload">Upload Image:</label>
                <input type="file" id="imageUpload" name="imageUpload" />
              </div>
            )}

            <div className="col-12 col-md-10  mt-3">
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  I am a
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="passenger"
                    control={
                      <Radio
                        checked={selectedValue === "a"}
                        onChange={handleChange}
                        value="a"
                        inputProps={{ "aria-label": "A" }}
                      />
                    }
                    label="Passenger"
                    onSelect={true}
                  />
                  <FormControlLabel
                    value="Pilot"
                    control={
                      <Radio
                        checked={selectedValue === "b"}
                        onChange={handleChange}
                        value="b"
                        inputProps={{ "aria-label": "B" }}
                      />
                    }
                    label="Pilot"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="col-12 col-md-10  mt-3">
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="
                I agree with terms and conditions"
              />
            </div>

            <div className="col-12 col-md-10  mt-3">
              <a>
                <button className="button w-100"> Register</button>
              </a>
            </div>
            <div className="col-12 col-md-10  mt-3">
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Log in
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
