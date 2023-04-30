/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("$(function() {\n  $.ajax('http://localhost:1323/books')\n    .done(function(books) {\n      books.forEach(appendBook)\n\n      $('.js-toggle-review').on('click', function(event) {\n        var bookId = $(this).data('bookId')\n        $('.js-review[data-book-id=\"' + bookId + '\"]').toggle('fast')\n\n        return false\n      })\n\n      $(document).on('click', '.js-like', function(event) {\n        var likeCountElement = $(this).find('.js-like-count')\n        likeCountElement.text(likeCountElement.text() + 1)\n\n        return false\n      })\n\n      $(document).on('submit', '.js-form', function(event) {\n        var bookId = $(this).data('bookId')\n        $.ajax({\n          url: 'http://localhost:1323/reviews',\n          type: 'post',\n          dataType: 'json',\n          data: {\n            comment: $(event.currentTarget).find('textarea').val()\n          }\n        }).done(function(review) {\n          $('.js-review[data-book-id=\"' + bookId + '\"] > ul').append($(createBookReview(review)))\n        })\n\n        return false\n      })\n    })\n})\n\nfunction appendBook(book) {\n  $('#js-book-list').append($(\n    '<li class=\"book-list__item\">' +\n      '<div class=\"book-list__item__inner\">' +\n        '<img class=\"book-list__item__inner__image\" src=\"' + book.image + '\" alt=\"' + book.title + '\">' +\n        '<div class=\"book-list__item__inner__info\">' +\n          '<h3 class=\"book-list__item__inner__info__title\">' +\n            book.title +\n            '<span class=\"book-list__item__inner__info__title__author\">(' + book.author + ')</span>' +\n          '</h3>' +\n          '<p class=\"book-list__item__inner__info__overview\">' + book.overview + '</p>' +\n          '<p class=\"book-list__item__inner__info__comment\">' +\n            '<a href=\"#\" class=\"book-list__item__inner__info__comment__link js-toggle-review\" data-book-id=\"' + book.id + '\">' +\n              book.reviews.length + '件の感想・評価' +\n            '</a>' +\n          '</p>' +\n        '</div>' +\n      '</div>' +\n      '<div class=\"review js-review\" data-book-id=\"' + book.id + '\">' +\n        '<ul class=\"review__list\">' + book.reviews.map(createBookReview).join('') + '</ul>' +\n        '<form class=\"review__form js-form\" data-book-id=\"' + book.id + '\">' +\n          '<textarea class=\"review__form__input\" rows=\"5\" placeholder=\"「' + book.title + '」を読んだ感想・評価を教えてください\"></textarea>' +\n          '<button class=\"review__form__submit\" type=\"submit\">投稿</button>' +\n        '</form>' +\n      '</div>' +\n    '</li>'\n  ))\n}\n\nfunction createBookReview(review) {\n  return (\n    '<li class=\"review__list__item\">' +\n      '<p class=\"review__list__item__name\">' + review.username + 'さんの感想・評価</p>' +\n      '<p class=\"review__list__item__comment\">' + review.comment + '</p>' +\n      '<p class=\"review__list__item__like\">' +\n        '<a href=\"#\" class=\"review__list__item__like__button js-like\">' +\n          '&#x2764;️ <span class=\"js-like-count\">' + review.like + '</span>件' +\n        '</a>' +\n      '</p>' +\n    '</li>'\n  )\n}\n\n\n//# sourceURL=webpack://shuwa-frontend-book-app/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;