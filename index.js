window.onload = () => {
    
  const text = document.querySelector("h1");

  let string = "Hi, I'm Edward Tang.";
  let chars = string.split("");

  let i = 0
  let animation = setInterval(function() {
      text.innerHTML += chars[i];
      i++;
      if (i == string.length) { 
        clearInterval(animation);
      }
  }, 100);

}