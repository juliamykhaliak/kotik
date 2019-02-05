(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context) {
      $('#block-burgermenu').once().on('click', function () {
        $('#block-mainmenu').toggleClass('burger-menu');
        $('#block-burgermenu').toggleClass('cross');
      });
    }
  };
})(jQuery, Drupal);