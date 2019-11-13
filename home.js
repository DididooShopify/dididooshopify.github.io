display_box = document.querySelector("h1")

string = "Hi, I'm Edward Tang."
chars = string.split("")

var i = 0
animation = setInterval(function() {
    display_box.innerHTML += chars[i]
    i++
    if (i == string.length){ clearInterval(animation) }
},100)