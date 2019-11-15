window.onload = () => {
  const roblox = document.getElementById("roblox");

  let flexify = () => {
    let glasses = document.getElementById('glasses');
    let audio = new Howl({
      src: ['https://manzdev.github.io/cursos-assets/js/thug-life.mp3'],
    });  
    if (!audio.playing()) {
      glasses.style.animationPlayState = 'running';
      audio.play();
      let portrait = document.getElementById("portrait");
      portrait.style.WebkitFilter = "grayscale(100%)";
      portrait.style.filter = "grayscale(100%)";
      roblox.innerHTML += " (Net Worth: 24K+ Robux)";
      roblox.removeEventListener('mouseenter', enter);
      roblox.removeEventListener('click', flexify);
    }
  };

  let enter = function() {
    roblox.style.cursor = 'pointer';
    roblox.style.color = 'rgb(252,231,134)';
  };

  let leave = function() {
    roblox.style.cursor = 'auto';
    roblox.style.color = 'rgb(41, 218, 82)';
  };

  roblox.addEventListener('mouseenter', enter);
  roblox.addEventListener('mouseleave', leave);
  roblox.addEventListener('click', flexify);
};
