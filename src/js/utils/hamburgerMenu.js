export const hamburgerMenu = () => {
    $(function () {
        (function mobileMenu() {
            let $btn = $('.hamburger');
            let $menu = $('.header__nav');
            let $overlay = $('.overlay');

            function action() {
                $btn.toggleClass('is-active');
                $menu.toggleClass('active');
                $overlay.fadeToggle();

                $('body, html').toggleClass('no-scroll');
            }

            $btn.on('click', function () {
                action ();
            });

            $overlay.on('click', function () {
                action ();
            });
        })();
    });
}