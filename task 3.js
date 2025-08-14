document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  fetch("data/events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach(e => {
        const marker = document.createElement("div");
        marker.className = "event-marker";
        marker.textContent = e.year;
        marker.onclick = () => {
          content.innerHTML = `
            <span class="close">&times;</span>
            <h2>${e.title} (${e.year})</h2>
            <img src="${e.imageURL}" alt="${e.title}">
            <p><strong>Category:</strong> ${e.category}</p>
            <p>${e.description}</p>`;
          modal.style.display = "block";
          content.querySelector(".close").onclick = () => modal.style.display = "none";
        };
        timeline.appendChild(marker);
      });
    });

  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
});
✅ What Changed:document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-content");

  fetch("data/events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach(e => {
        const marker = document.createElement("div");
        marker.className = "event-marker";
        marker.textContent = e.year;
        marker.onclick = () => {
          content.innerHTML = `
            <span class="close">&times;</span>
            <h2>${e.title} (${e.year})</h2>
            <img src="${e.imageURL}" alt="${e.title}">
            <p><strong>Category:</strong> ${e.category}</p>
            <p>${e.description}</p>`;
          modal.style.display = "block";
          content.querySelector(".close").onclick = () => modal.style.display = "none";
        };
        timeline.appendChild(marker);
      });
    });

  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
});
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Timeline</title>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 20px; }
    #timeline { display: flex; flex-wrap: wrap; gap: 10px; }
    .event-marker {
      padding: 10px; background: #4CAF50; color: #fff;
      border-radius: 4px; cursor: pointer;
      transition: background 0.3s;
    }
    .event-marker:hover { background: #388E3C; }
    #modal {
      display: none; position: fixed; top: 0; left: 0;
      width: 100%; height: 100%; z-index: 999;
      background: rgba(0,0,0,0.5);
    }
    #modal-content {
      background: #fff; margin: 10% auto; padding: 20px;
      width: 90%; max-width: 500px; border-radius: 8px;
      position: relative;
    }
    #modal-content img { width: 100%; margin: 10px 0; }
    .close {
      position: absolute; top: 10px; right: 15px;
      font-size: 20px; cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Interactive Timeline</h1>
  <div id="timeline"></div>
  <div id="modal"><div id="modal-content"></div></div>
  <script src="script.js"></script>
</body>
</html>
