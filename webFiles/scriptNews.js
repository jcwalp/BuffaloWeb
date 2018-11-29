
var getin = prompt("What is the password?","")
if (getin=="marauders"){
alert('You got it! In you go...')
location.href='http://www.wgrz.com'
}
else{
  if (getin=="null"){
    location.href='index.html'
    alert("Wrong Back To Home")
  }
else
  if (getin!="Marauders"){
    location.href='index.html'
    alert("Wrong Back To Home")
  }
}
