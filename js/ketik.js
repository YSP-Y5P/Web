var i = 0;
var txt = `Hai, Selamat datang di websiteku! 

Apapun Yang Terjadi, Tetaplah Bernafas!`; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
typeWriter()

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("Ketikan").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}