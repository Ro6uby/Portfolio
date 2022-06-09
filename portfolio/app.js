

window.onload = function () {
  Particles.init({
    selector: '.background',
    color: '#75A5B7',
    maxParticles: 130,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 80
        }
      }, {
        breakpoint: 375,
        options: {
          maxParticles: 50
        }
      }
    ]
  });
};


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "#0c0018";
  } else {
    document.getElementById("navbar").style.background = "transparent";
  }
}





