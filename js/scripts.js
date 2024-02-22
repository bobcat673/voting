window.onload = function() {
  let age = prompt("what is your age");
  let pText = document.querySelector("p");
  console.log(pText)
  let link = document.querySelector("a");
  if (age >= 18) {
    pText.innerText = "You can vote! Do so " ;
    link.setAttribute("href" , "https://sos.oregon.gov/voting-elections/Pages/default.aspx");
  }
  else {
    pText.innerText = "You can't vote :( but you can learn about it! Do so ";
    link.setAttribute("href" , "https://www.connectionsacademy.com/support/resources/article/how-elections-work-why-voting-matters-for-kids/");
  }
};