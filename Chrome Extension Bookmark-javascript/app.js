// console.log("test");


// localStorage.setItem("text1", "this is a link1")

// localStorage.setItem("text2", "this is a link2")

// localStorage.setItem("text3", "this is a link3")

// localStorage.setItem("text45", "this is a link4")

// localStorage.setItem("text", "this is a link5")


// locationbar.clear();

let allLinks = [];
const input = document.getElementById("input");
const tabBtn = document.getElementById("tab-btn");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const list = document.getElementById("list");

let getLinksFromLocalStorage = JSON.parse(localStorage.getItem("links"));

if (getLinksFromLocalStorage) {
  allLinks = getLinksFromLocalStorage;
  renderArr(allLinks);
}

function renderArr(arr) {
  list.innerHTML = "";
  arr.forEach((item) => {
    list.innerHTML += `
      <li><a href="${item}" target="_blank">${item}</a></li>
    `;
  });
}

inputBtn.addEventListener("click", () => {
  let links = input.value;
  if (links) {
    allLinks.push(links);
    input.value = "";
    localStorage.setItem("links", JSON.stringify(allLinks));
    renderArr(allLinks);
  }
});

deleteBtn.addEventListener("click", () => {
  localStorage.clear();
  allLinks = [];
  renderArr(allLinks);
});

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0].url;
    allLinks.push(activeTab);
    localStorage.setItem("links", JSON.stringify(allLinks));
    renderArr(allLinks);
  });
});