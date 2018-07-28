import app from 'flarum/app';

app.initializers.add('extum/flarum-ext-material', () => {
  extend(Page.prototype, 'init', function () {
        $('head').prepend('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">' +
            '<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>');
    });
});
