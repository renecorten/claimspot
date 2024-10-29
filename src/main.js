"use strict";

const alertsContainer = document.getElementById("alerts_container");
const alertTemplate = document.getElementById("alert_template");

// Funktion zum Hinzufügen eines Alerts zum Container
function addAlertToContainer(alert) {
  const alertElement = alertTemplate.content.cloneNode(true);

  alertElement.getElementById("alert_type").textContent = "BRAND";
  alertElement.getElementById("alert_date").textContent = alert.pubDate;
  alertElement.getElementById("alert_title").innerHTML = alert.title;
  alertElement.getElementById("alert_info").innerHTML = alert.description;
  alertElement.getElementById("alert_link").href = alert.link;

  alertsContainer.appendChild(alertElement);
}

// Abrufen und Hinzufügen des RSS-Feeds
fetch("http://localhost:3000/rss-feed")
  .then((response) => response.json())
  .then((data) => {
    if (data.items && data.items.length) {
      data.items.forEach(addAlertToContainer);
    } else {
      console.error("Keine Daten im RSS-Feed gefunden.");
    }
  })
  .catch((error) => console.error("Fehler beim Abrufen des RSS-Feeds:", error));

import "./main.css";
