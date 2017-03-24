(function ($, Drupal, undefined) {
    Drupal.behaviors.ggproject = {
        attach: function (context, settings) {


            $( document ).ready(function() {
                $('#edit-path-alias').val(Drupal.settings.mkdb.translatedPath);
                console.log(Drupal.settings.mkdb.translatedPath);
            });
        }
    };
})(jQuery, Drupal);