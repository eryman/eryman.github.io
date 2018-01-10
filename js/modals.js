$('.item').click(function(){
  $('.modal-title').text($(this).children('.item-title').text());
  $('.modal-description').text($(this).children('.item-description').text());
  $('.modal-image').attr('src', $(this).children('.item-image').attr('src'));
})