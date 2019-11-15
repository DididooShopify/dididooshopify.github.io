window.onload = () => {
    
  const display_box = document.querySelector("h1");

  let string = "Hi, I'm Edward Tang.";
  let chars = string.split("");

  let i = 0
  let animation = setInterval(function() {
      display_box.innerHTML += chars[i];
      i++;
      if (i == string.length) { 
        clearInterval(animation);
      }
  }, 100);

}