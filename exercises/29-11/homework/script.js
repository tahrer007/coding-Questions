/*
https://codepen.io/couellet/pen/pONQOX/
*/
const productsList = document.getElementById("productsList");
const wishlist = document.getElementById("wishlist");
const items = ["apple", "banana", "orange"];
const btnText = ["add", "remove"];
const wishListItems = [];

const handleOnCLick = (e) => {
  const action = e.target.getAttribute("class");
  const value = e.target.value;
  const item = document.getElementById(value);

  if (action === "remove") {
    productsList.removeChild(item);
    createElement(value, "add");
  } else {
    wishlist.removeChild(item);
    createElement(value, "remove");
  }
};

const createElement = (value, action) => {
  const item = document.createElement("li");
  item.setAttribute("id", value);
  item.innerHTML = value;
  const btn = document.createElement("button");
  btn.setAttribute("class", `${action === "add" ? "add" : "remove"}`);
  btn.innerHTML =
    action === "remove" ? " add to wishList" : "remove from wishlist";
  btn.value = value;
  btn.addEventListener("click", handleOnCLick);
  item.appendChild(btn);

  action === "add"
    ? wishlist.appendChild(item)
    : productsList.appendChild(item);
};

const addToWishList = (e) => {
  const { value } = e.target;
  const item = document.createElement("li");
  const text = document.createTextNode(e.target.value);
  item.setAttribute("id", value);
  item.appendChild(text);
};

items.forEach((element) => createElement(element, "remove"));
