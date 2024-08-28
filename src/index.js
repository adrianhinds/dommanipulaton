// import "./styles.css";

// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainElement = document.querySelector("main");
mainElement.style.backgroundColor = "var(--main-bg)";
// const h1El = document.createElement("h1");
mainElement.innerHTML = "<h1>DOM Manipulation</h1>";
mainElement.classList.add("flex-ctr");
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
menuLinks.forEach((link) => {
  const anchorEl = document.createElement("a");
  anchorEl.setAttribute("href", link.href);
  anchorEl.textContent = link.text;
  topMenuEl.appendChild(anchorEl);
});

// Select and cache the <nav id="sub-menu">
// element in a variable named subMenuEl.
const subMenuEl = document.querySelector("#sub-menu");
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";
// Set the background color of subMenuEl to the value stored in the
//--sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");
//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
//Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";
//Select and cache the all of the <a> elements
//inside of topMenuEl in a variable named topMenuLinks.
// const topMenuEl = document.querySelectorAll
const TopMenuLinks = topMenuEl.querySelectorAll("a");
console.log(TopMenuLinks);
//Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should
//call the event object's preventDefault() method.
topMenuEl.addEventListener("click", (event) => {
  //The first line of code of the event listener function
  //should call the event object's preventDefault() method.
  event.preventDefault();
  //The second line of code of the function should immediately return
  //if the element clicked was not an <a> element.
  //console.log(event);
  if (event.target.tagName.toLowerCase() !== "a") {
    return;
  }
  //Log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent);
  //The event listener should add the active class to the <a> element
  //that was clicked, unless it was already active,
  //in which case it should remove it.
  // event.target.classList.add("active");
  //The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  if (event.target.classList.contains("active")) {
    // console.log("ACTIVE")
    event.target.classList.remove("active");
  } else {
    event.target.classList.add("active");
  }
  //The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
  TopMenuLinks.forEach((item) => {
    // console.log(item);
    // item.classList.remove("active");
    if (item != event.target) {
      item.classList.remove("active");
    }
  });
  // If the clicked <a> element's "link" object within menuLinks has a subLinks property
  //(all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
  // console.log(event.target.textContent);
  // console.log(menuLinks.filter(item => item.text == event.target.textContent && item.subLinks));
  if (
    menuLinks.filter(
      (item) => item.text == event.target.textContent && item.subLinks
    ).length !== 0
  ) {
    subMenuEl.style.top = "100%";
  } else {
    // Otherwise, set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = "0";
  }
  const buildSubmenu = (subLinks) => {
    //Clear the current contents of subMenuEl.
    subMenuEl.innerHTML = "";
    //iterate over the subLinks array, passed as an argument, and for each "link" object:
    // menuLinks.forEach((item) => {
    // if (item.text == event.target.textContent) {
    // console.log(item.subLinks);
    if(!subLinks)
      return
    subLinks.forEach((item) => {
      // console.log(item);
    
      //Create an <a> element.
      const aEl = document.createElement("a");
      //Add an href attribute to the <a>, with the value set by the href property of the "link" object.
      aEl.setAttribute("href", item.href);
      //Set the element's content to the value of the text property of the "link" object.
      aEl.textContent = item.text;
      // console.log(item.text);
      //Append the new element to the subMenuEl.
      subMenuEl.appendChild(aEl);
      // console.log(aEl);

    });
    // }
    // });
  };

  menuLinks.forEach((item) => {
    if (item.text == event.target.textContent) {
      buildSubmenu(item.subLinks)
    }
  });
});
//Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener("click", event =>{
//The first line of code of the event listener function should call the event 
event.preventDefault()
  if (event.target.tagName.toLowerCase() !== "a") {
    return;
  // } else {
  //   console.log(event.target.textContent);
  } else {
   // Next, the event listener should set the CSS top property of subMenuEl to 0.
  //  subMenuEl.style.top = "0"
   //Remove the active class from each <a> element in topMenuLinks.
  //  subMenuEl.classList.remove("active");
  }
  subMenuEl.style.top = "0"
  // console.log(event.target);
  //Update the contents of mainEl, within an <h1>, 
  // to the contents of the <a> element clicked within subMenuEl.
 mainElement.querySelector("h1").textContent = event.target.textContent;
 mainElement.querySelector("h1").style.textTransform = "capitalize";

 //event.target.textContent[0].toUpperCase() + event.target.textContent.slice(1)
//changes the first letter ^

  //Remove the active class from each <a> element in topMenuLinks.
  //  subMenuEl.classList.remove("active");
  TopMenuLinks.forEach((item) => {
    // console.log(item);
    if (item != event.target) {
      item.classList.remove("active");
    }
  });
});

menuLinks.forEach((item) =>{
  if(item.subLinks){
    document.querySelector("h1") = event.target.textContent
  }
});
// console.log(subMenuEl);





// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is true
// for(let rep = 1; rep <=10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
//   }

//looping through arrays

// const friends = ["Michael","Steven","Peter"];
// console.log(friends);

// const y = new Array(1991, 1992, 1993, 1994);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2]= "Jay"
// console.log(friends);
// //friends = ['Bob','Alice'];

// const firstName = 'Jonas';
// const jonas = [firstName,"Schmeat", 2024 - 1991, "teacher", friends];
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//  return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length -1]);
// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages)

// const jonas = [
//   "Jonas",
//   "Schmeat",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
//   true
// ];
// //-----------------------------

// const types =[]
// //Instead of doing this, create a loop
// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);

// for(let i = 0; i < jonas.length; i++){
//   console.log(jonas[i], typeof jonas[i]);

//   types[i] = typeof jonas[i];
// }

// types[0] = 'string';

// const friends = ["Michael","Steven","Peter"];

// friends.push('Jay');console.log(friends)
// push is a function thats attached to the friends array itself, called here

// const jonasArray = [
//   "Jonas",
//   "Schmeat",
//   2037 - 1991,
//   "teacher"
//   ["Michael", "Peter", "Steven"]
// ];
