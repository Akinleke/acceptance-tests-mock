import { BeforeAll, Given, Then, When } from "cucumber";
import fetch from 'node-fetch';
import config from "../utilities/config";

const url = `${config.baseurl}/fixtures`;

Given('I have called the service', function () {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch((err: any) => console.log(err))
    });