const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const cors = require("cors")
const helmet = require('helmet')
const port = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(helmet())

const articles = [];

const newspapers = [
  {
    name: "thetimes",
    address: "https://www.thetimes.co.uk/environment/climate-change",
    base: "",
  },
  {
    name: "guardian",
    address: "https://www.theguardian.com/environment/climate-crisis",
    base: "",
  },
  {
    name: "telegraph",
    address: "https://www.telegraph.co.uk/climate-change",
    base: "https://www.telegraph.co.uk",
  },
];

app.get("/api/news/:id", async (req, res) => {
  const { id } = req.params;
  const newsPaper = newspapers.filter((article) => article.name == id)[0];
  console.log(newsPaper);
  const article = [];

  const { data: html } = await axios.get(`${newsPaper.address}`);
  const $ = cheerio.load(html);

  $('a:contains("climate")', html).each(function () {
    const title = $(this).text();
    const url = $(this).attr("href");
    article.push({
      title,
      url: newsPaper.base + url,
      source: id,
    });
  });
  res.send(article);
});

app.get("/api/news", async (req, res) => {
  console.log("hi");
  newspapers.forEach(async (newspaper) => {
    try {
      const { data: html } = await axios.get(newspaper.address);
      const $ = cheerio.load(html);
      $('a:contains("climate")').each(function () {
        const title = $(this).text().trim();
        const url = $(this).attr("href");
        articles.push({
          title,
          url: newspaper.base + url,
          source: newspaper.name,
        });
      });
      res.send(articles);
    } catch (error) {
      console.log(error);
    }
  });
});

app.use("/", (req, res) => {
  res.send("<h1> 404 page not found </h1>");
});

app.listen(port, () => {
  console.log("connected");
});
