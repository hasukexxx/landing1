$(document).ready(function () {

    changeTabContent('.c_tabs__item', '.c_tab-content');

    function changeTabContent(tabClass, tabContentClass) {
        const tab = $(tabClass);
        const tabContent = $(tabContentClass);

        tab.each(function () {
            $(this).on('click', function () {
                const dataTab = $(this).data('id');
                if (dataTab) {
                    tab.removeClass('active');
                    tabContent.removeClass('active');
                    for (let item of tabContent) {
                        if ($(item).data('id') == dataTab) {
                            $(item).addClass('active');
                            $(this).addClass('active');
                        }
                    }
                    return;
                }
                $(this).toggleClass('active');
                $(this).next(tabContent).slideToggle();
            })
        })
    };

    const owlFunction = () => {
        if (window.innerWidth > 1023) {

            $(".conditions .owl-carousel").owlCarousel({

                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        loop: true,
                        autoWidth: true,
                        margin: 8
                    },
                    1024: {
                        items: 4,
                        nav: false,
                        autoWidth: true,
                        margin: 32,
                    },
                    1360: {
                        items: 4,
                        nav: false,
                        autoWidth: true,
                        margin: 48,
                    }
                }
            });
        }

    }
    owlFunction();
    $(window).on('resize', owlFunction);

    const owlReviews = () => {
        if (window.innerWidth > 1023) {

            $(".reviews .owl-carousel").owlCarousel({

                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        loop: false,
                        autoWidth: true,
                        margin: 8
                    },
                    1024: {
                        items: 3,
                        nav: true,
                        loop: false,
                        autoWidth: true,
                        margin: 32,
                    },
                    1360: {
                        items: 3,
                        nav: true,
                        loop: false,
                        autoWidth: true,
                        margin: 48,
                    }
                }
            });
        }

    }
    owlReviews();
    $(window).on('resize', owlReviews);

    // function detectOS() {
    //     const platform = navigator.platform.toLowerCase(),
    //         iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

    //     // if (platform.includes('win')) { console.log('Windows') };
    //     if (/android/.test(navigator.userAgent.toLowerCase())) {
    //         $("#btn-img").attr('src', './img/conditions/googleplay.svg')
    //         $("#btn").attr('href', 'http://www.live.com/')
    //     };
    //     return 'unknown';
    // }
    // detectOS();

    // scroll
    window.addEventListener('click', (e) => {
        const dom = e.target;
        if (dom.hasAttribute('href')) {
            const node = document.querySelector(dom.getAttribute('href'))
            if (!node) {
                return false
            } else {
                setTimeout(() => {
                    node.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }, 500)
            }
        };
    });

    function openFlags() {
        $(".banner-block__flags").on('click', function () {
            $(this).toggleClass('active');
            $(".banner-block__flags-list").toggleClass('active');
        });
    };
    openFlags();

});