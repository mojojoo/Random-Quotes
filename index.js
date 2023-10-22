/** @format */

//get API key @ https://api-ninjas.com/api/quotes
import { APIkey } from "./APIKEY.js";

const APIurl = `https://api.api-ninjas.com/v1/quotes?category=`;
const categories = document.querySelector(".categories");
const quotesElements = document.querySelector(".quotes");
const authorElement = document.querySelector(".author");
const buttonElement = document.querySelector("button");

async function apiQut() {
  const res = await fetch(APIurl, {
    method: "GET",
    url: APIurl,
    headers: { "X-Api-Key": APIkey },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
  const json = await res.json();

  showQoute(json);
}
apiQut();
function showQoute(json) {
  const quote = json[0].quote;
  const author = json[0].author;
  const category = json[0].category;

  categories.innerHTML = category;
  quotesElements.innerHTML = quote;
  authorElement.innerHTML = `- ${author}`;
}

buttonElement.addEventListener("click", apiQut);
