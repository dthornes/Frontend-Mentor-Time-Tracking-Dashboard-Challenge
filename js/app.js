$('.js-filter').on('click', function() {
    $('.js-filter').removeClass('card__list-item--active')
    $(this).addClass('card__list-item--active')

    $('.js-filter__item').addClass('hidden')
    $('.js-filter__item--' + $(this).data('filter')).removeClass('hidden')
})