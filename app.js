let confirm = document.getElementById("newconfirmed");
let total_confirm = document.querySelector("#totalconfirmed");
let total_recovered = document.querySelector("#totalrecovered");
let total_death = document.querySelector("#totaldeath");
let lastupdate = document.getElementsByClassName("lastupdate");

function m(n, d) {
  (x = ("" + n).length), (p = Math.pow), (d = p(10, d));
  x -= x % 3;
  return Math.round((n * d) / p(10, x)) / d + " kMGTPE"[x / 3];
}

async function getcovidapi() {
  let jsondata = await fetch("https://api.covid19api.com/summary");
  let jsdata = await jsondata.json();
  let india = jsdata.Countries[76];
  console.log(india);
  console.log(india.NewConfirmed);  
  confirm.innerText = india.NewConfirmed;
  total_confirm.innerText = m(india.TotalConfirmed,2);
  total_recovered.innerText = india.NewRecovered;
  total_death.innerText = india.NewDeaths;
}

getcovidapi();




