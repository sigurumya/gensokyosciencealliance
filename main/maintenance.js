window.addEventListener("load", () => {
  fetch("main/maintenance.json")
    .then((resp) => resp.json())
    .then((json) => {
      const info = document.getElementById("time");
      info.innerHTML = "";
      json.forEach((item) => {
        info.innerHTML += `${item.time}`;
      });
    })
    .catch((error) => {
      console.error("Error fetching maintenance data:", error);
    });
});
window.location.assign("https://sigurumya.github.io/gensokyosciencealliance/index.html");