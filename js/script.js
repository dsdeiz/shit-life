$(function() {

  var shitLife     = new Date(2013, 0, 19);
  var current      = new Date();
  var shitLifeText = 'I now have a shitty life. :(';

  if (+shitLife >= +current) {
    $('#shitlife-counter').countdown({
      until:        shitLife,
      description:  '...til I get a shitty life.',
      expiryText:   shitLifeText
    });
  }
  else {
    $('#shitlife-counter').text(shitLifeText);
  }
})
