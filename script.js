var professional = prompt("Who are you? a) Skin Care Professional b) Busy Professional").trim()
if (professional === "Skin Care Professional") {
  var launch = prompt("Where do you struggle? a) Branding b) Retail").trim()
  if (launch === "Branding") {
    window.location = 'http://www.spalot.com/'
  }
  else if (launch === "Retail") {
    alert("Wow, Stop Spending Money!")
  }
  else {
    alert("Please get your glasses and try again.")
  }
}
else if (professional === "Busy Professional") {
  var hear = prompt("Are you looking for? a) Free Consultation b) Products").trim()
  if (hear === "Products") {
    window.location = 'http://www.spalot.com/'
  }
  else if (hear === "Free Consultation") {
    alert("Wow, Nothing is free in America!")
  }
  else {
    alert("Told Ya! Put your damn glasses on and then try again.")
  }
}
else {
  alert("Leave it! You are blind.")
}
