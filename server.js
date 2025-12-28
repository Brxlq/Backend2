const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

//  Weather API 
app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  try {
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );

    const data = weatherResponse.data;

    const weatherData = {
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
      coordinates: data.coord,
      wind_speed: data.wind.speed,
      country: data.sys.country,
      rain_volume: data.rain ? data.rain["3h"] : 0,
      icon: data.weather[0].icon
    };

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "City not found or API error." });
  }
});

// News API 
app.get("/news/:city", async (req, res) => {
  const city = req.params.city;
  try {
    const newsResponse = await axios.get(
      `https://newsapi.org/v2/everything?q=${city}&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`
    );

    const articles = newsResponse.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url
    }));

    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: "News API error." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
