$(function() {
  $.ajax('http://localhost:1323/books')
    .done(function(books) {
      books.forEach(function(book) {
        appendBook(book)
      })
    })
})

function appendBook(book) {
  $('#js-book-list').append(
    $('<li></li>', { addClass: 'book-list__item' }).append(
      $('<div></div>', { addClass: 'book-list__item__inner' }).append(
        $('<img />', {
          addClass: 'book-list__item__inner__image',
          alt: book.title,
          src: book.image
        })
      ).append(
        $('<div></div>', { addClass: 'book-list__item__inner__info' }).append(
          $('<h3></h3>', { addClass: 'book-list__item__inner__info__title' }).append([
            book.title,
            $('<span></span>', { addClass: 'book-list__item__inner__info__title__author' }).text('(' + book.author + ')')
          ])
        ).append(
          $('<p></p>', { addClass: 'book-list__item__inner__info__overview' }).text(book.overview)
        ).append(
          $('<p></p>', { addClass: 'book-list__item__inner__info__comment' }).append(
            $('<a></a>', {
              addClass: 'book-list__item__inner__info__comment__link js-toggle-review',
              href: '#',
              on: {
                click: function() {
                  var bookId = $(this).data('bookId')
                  $('.js-review-' + bookId).toggle('fast')

                  return false
                }
              }
            }).data('bookId', book.id).text(book.reviews.length + '件の感想・評価')
          )
        )
      )
    ).append(
      $('<div></div>', { addClass: 'review js-review-' + book.id }).append(
        $('<ul></ul>', { addClass: 'review__list' }).append(
          book.reviews.map(function(review) {
            return $('<li></li>', { addClass: 'review__list__item' }).append(
              $('<p></p>', { addClass: 'review__list__item__name' }).text(review.username + 'さんの感想・評価')
            ).append(
              $('<p></p>', { addClass: 'review__list__item__comment' }).text(review.comment)
            ).append(
              $('<p></p>', { addClass: 'review__list__item__like' }).append([
                $('<a></a>', {
                  addClass: 'review__list__item__like__button',
                  href: '#',
                  on: {
                    click: function(event) {
                      $(event.currentTarget).html('&#x1f44d; ' + review.like + 1)
                      return false
                    }
                  }
                }).html('&#x1f44d; ' + review.like + '件')
              ])
            )
          })
        )
      ).append(
        $('<form></form>', {
          addClass: 'review__form',
          on: {
            submit: function(event) {
              var textarea = $(event.currentTarget).find('textarea')
              appendBookReview(textarea.val()).done(function(review) {
                $('.js-review-' + book.id + ' > .review__list').append(
                  $('<li></li>', { addClass: 'review__list__item' }).append(
                    $('<p></p>', { addClass: 'review__list__item__name' }).text(review.username + 'さんの感想・評価')
                  ).append(
                    $('<p></p>', { addClass: 'review__list__item__comment' }).text(review.comment)
                  ).append(
                    $('<p></p>', { addClass: 'review__list__item__like' }).append([
                      $('<a></a>', {
                        addClass: 'review__list__item__like__button',
                        href: '#',
                        on: {
                          click: function (event) {
                            $(event.currentTarget).html('&#x1f44d; ' + review.like + 1)
                            return false
                          }
                        }
                      }).html('&#x1f44d; ' + review.like + '件')
                    ])
                  )
                )
              })
              return false
            }
          }
        }).append(
          $('<textarea></textarea>', {
            addClass: 'review__form__input',
            rows: 5,
            placeholder: '「' + book.title + '」を読んだ感想・評価を教えてください'
          })
        ).append(
          $('<button></button>', { addClass: 'review__form__submit' }).text('投稿')
        )
      )
    )
  )
}

function appendBookReview(comment) {
  return $.ajax({
    url: 'http://localhost:1323/reviews',
    type: 'post',
    dataType: 'json',
    data: { comment }
  })
}
