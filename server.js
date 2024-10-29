// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/rss-feed", async (req, res) => {
  try {
    const rssFeedUrl =
      "https://www.google.com/alerts/feeds/10045989064387185908/2789314997576740794";
    const rss2jsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}&api_key=aeskojfmwqq5kxssgndu0gp1pbbeaclvsuk9jliw`;

    const response = await fetch(rss2jsonUrl);
    if (!response.ok) throw new Error(`Fehler: ${response.status}`);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Fehler beim Abrufen des RSS-Feeds:", error);
    res.status(500).send("Fehler beim Abrufen des RSS-Feeds");
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
