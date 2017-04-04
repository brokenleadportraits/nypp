$(document).on('turbolinks:load', function(){
    $('.rating').raty( { path: '/public/assets', scoreName: 'comment[rating]' });
    $('.rated').raty({ path: '/public/assets',
      readOnly: true,
      score: function() {
        return $(this).attr('data-score');
      }
    });
});