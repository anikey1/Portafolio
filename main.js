let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Próxima diseñadora y  desarrolladora Full Stack.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
