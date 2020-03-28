$('.js-toggle-review').on('click', function(e) {
  var bookId = $(this).data('bookId')
  $('.js-review-section[data-book-id="' + bookId + '"]').toggle('fast')
})
