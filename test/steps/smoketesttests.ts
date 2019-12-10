import { BeforeAll, Given, Then, When } from "cucumber";

import fetch from 'node-fetch';

Given('I have called the service', function () {
  fetch('http://localhost:3000/fixtures')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch((err: any) => console.log(err))
  });