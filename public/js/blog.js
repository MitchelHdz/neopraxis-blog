var galleryModal = document.getElementById('myModal');
var galleryModalBox = document.getElementById('myModalBox');
$('.modal-close-btn-container-offices').on('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  $('#myModal').hide();
  $('body').removeClass('modal-open');
});
$(window).on('click', function(event) {
  /* Act on the event */
  if (event.target == galleryModal || event.target == galleryModalBox) {
    trialModal.classList.remove('modal-open');
    body.classList.remove('modal-open');
    $('#myModal').hide();
    $('body').removeClass('modal-open');
  }
});
$(document).ready(function() {
  moment.locale('es');
  $('.post-list-date').each(function(index, el) {
    $(this).moment().format('LL');
  });
});