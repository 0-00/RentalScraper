const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const PORT = 5432;

const app = express();
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
