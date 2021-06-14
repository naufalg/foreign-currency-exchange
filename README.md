
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Foreign Currency Exchanger</h3>
  <p align="center">
    React-based Foreign Currency Exchanger Web Application 
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
        <a href="#installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#updates">Updates</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Add, remove, and compare popular currencies as you wish!

### Built With

Mainly use React with other supporting libraries

- [React](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Material-UI](https://material-ui.com/)
- [Redux](https://redux.js.org/)

### Installation

1. Get the APIs, currencies name API: 	 [https://openexchangerates.org/api/currencies.json](https://openexchangerates.org/api/currencies.json)
 currencies rate API:
   [http://bernardusbilly.com/currency-rates/IDR.json](http://bernardusbilly.com/currency-rates/IDR.json)
   and save it in root folder as environment file (.env)
   ```sh
   REACT_APP_CURRENCY_URL= https://openexchangerates.org/api/currencies.json
   REACT_APP_RATE_URL= http://bernardusbilly.com/currency-rates/IDR.json
   ```

2. Clone the repo
   ```sh
   git clone https://github.com/naufalg/foreign-currency-exchange.git
   ```
3. Install packages
   ```sh
   yarn install
   or
   npm install
   ```
4. Start locally
	```sh
   yarn start
   or
   npm run start
   ```

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/naufalg/
