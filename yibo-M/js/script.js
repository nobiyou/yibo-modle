/*  Theme Name: InMotion
    Description: Responsive coming soon template
    Author: Margo_89
    Author URI: https://themeforest.net/user/margo_89/?ref=Margo_89
    Version: 1.0
 */


function mailchimpResponse(_0x7b75x2) {
    var _0x7b75x3 = $('#subscribe_form_result'),
        _0x7b75x4 = _0x7b75x2['msg']['split'](' - ', 2)[1],
        _0x7b75x5 = '<i class="fa fa-exclamation-triangle error-sign"></i>',
        _0x7b75x6 = '<i class="fa fa-check-circle success-sign"></i>';
    'success' === _0x7b75x2['result'] ? _0x7b75x3['fadeOut'](200, function() {
        _0x7b75x3['html'](_0x7b75x6 + _0x7b75x2['msg'])['fadeIn'](500)
    }) : 'error' === _0x7b75x2['result'] && _0x7b75x3['fadeOut'](200, function() {
        _0x7b75x3['html'](_0x7b75x5 + _0x7b75x4)['fadeIn'](500)
    })
}


function animateContent() {
    $('.current .slide-content')['css']({
        right: '0%',
        opacity: '1'
    })
}

function navigate(_0x7b75x2, _0x7b75x3, _0x7b75x4) {
    if (_0x7b75x3['isAnimating'] || _0x7b75x3['current'] === _0x7b75x4['hash']) {
        return !1
    };
    _0x7b75x3['isAnimating'] = !0;
    var _0x7b75x5 = 0,
        _0x7b75x6 = _0x7b75x3['items']['filter'](_0x7b75x3['current'])[0];
    classie['removeClass']($('#main-menu a.current')[0], 'current'), classie['addClass'](_0x7b75x4, 'current'), _0x7b75x3['current'] = _0x7b75x4['hash'];
    var _0x7b75x8 = _0x7b75x3['items']['filter'](_0x7b75x3['current'])[0],
        _0x7b75x9 = $('.branding-details');
    $(window)['width']() <= 991 && '#home' !== _0x7b75x4['hash'] ? _0x7b75x9['fadeOut']() : _0x7b75x9['fadeIn']();
    var _0x7b75xa = function() {
            _0x7b75x6['removeEventListener'](_0x7b75x3['animEndEventName'], _0x7b75xa), classie['removeClass'](_0x7b75x6, 'current'), classie['removeClass'](_0x7b75x6, 'navOutNext'), ++_0x7b75x5, 2 === _0x7b75x5 && (_0x7b75x3['isAnimating'] = !1)
        },
        _0x7b75xb = function() {
            _0x7b75x8['removeEventListener'](_0x7b75x3['animEndEventName'], _0x7b75xb), classie['addClass'](_0x7b75x8, 'current'), animateContent(), classie['removeClass'](_0x7b75x8, 'navInNext'), ++_0x7b75x5, 2 === _0x7b75x5 && (_0x7b75x3['isAnimating'] = !1)
        };
    _0x7b75x3['animations'] ? (_0x7b75x6['addEventListener'](_0x7b75x3['animEndEventName'], _0x7b75xa), _0x7b75x8['addEventListener'](_0x7b75x3['animEndEventName'], _0x7b75xb)) : (_0x7b75xa(), _0x7b75xb()), classie['addClass'](_0x7b75x6, 'navOutNext'), classie['addClass'](_0x7b75x8, 'navInNext')
}

function initNavigation(_0x7b75x2) {
    $('#main-menu')['find']('a')['on']('click', function(_0x7b75x3) {
        _0x7b75x3['preventDefault'](), navigate(_0x7b75x3, _0x7b75x2, this)
    })
}
var initPhotoSwipeFromDOM = function(_0x7b75x2) {
    for (var _0x7b75x3 = function(_0x7b75x2) {
            for (var _0x7b75x3, _0x7b75x4, _0x7b75x5, _0x7b75x6, _0x7b75x8 = _0x7b75x2['childNodes'], _0x7b75x9 = _0x7b75x8['length'], _0x7b75xa = [], _0x7b75xb = 0; _0x7b75x9 > _0x7b75xb; _0x7b75xb++) {
                _0x7b75x3 = _0x7b75x8[_0x7b75xb], 1 !== _0x7b75x3['nodeType'] || _0x7b75x3['hasAttribute']('data-exclude') || (_0x7b75x3['hasAttribute']('data-next-child') && (_0x7b75x3 = _0x7b75x3['children'][0]), _0x7b75x4 = _0x7b75x3['children'][0], _0x7b75x5 = _0x7b75x4['getAttribute']('data-size')['split']('x'), _0x7b75x6 = {
                    src: _0x7b75x4['getAttribute']('href'),
                    w: parseInt(_0x7b75x5[0], 10),
                    h: parseInt(_0x7b75x5[1], 10)
                }, _0x7b75x3['children']['length'] > 1 && (_0x7b75x6['title'] = _0x7b75x3['children'][1]['innerHTML']), _0x7b75x4['children']['length'] > 0 && (_0x7b75x6['msrc'] = _0x7b75x4['children'][0]['getAttribute']('src')), _0x7b75x6['el'] = _0x7b75x3, _0x7b75xa['push'](_0x7b75x6))
            };
            return _0x7b75xa
        }, _0x7b75x4 = function _0x7b75xd(_0x7b75x2, _0x7b75x3) {
            return _0x7b75x2 && (_0x7b75x3(_0x7b75x2) ? _0x7b75x2 : _0x7b75xd(_0x7b75x2['parentNode'], _0x7b75x3))
        }, _0x7b75x5 = function(_0x7b75x2) {
            _0x7b75x2 = _0x7b75x2 || window['event'], _0x7b75x2['preventDefault'] ? _0x7b75x2['preventDefault']() : _0x7b75x2['returnValue'] = !1;
            var _0x7b75x3 = _0x7b75x2['target'] || _0x7b75x2['srcElement'],
                _0x7b75x5 = _0x7b75x4(_0x7b75x3, function(_0x7b75x2) {
                    return _0x7b75x2['tagName'] && 'FIGURE' === _0x7b75x2['tagName']['toUpperCase']()
                });
            if (_0x7b75x5) {
                for (var _0x7b75x6, _0x7b75x9 = _0x7b75x5['parentNode']['parentNode'], _0x7b75xa = _0x7b75x5['parentNode']['parentNode']['childNodes'], _0x7b75xb = _0x7b75xa['length'], _0x7b75xc = 0, _0x7b75xd = !1, _0x7b75xe = 0; _0x7b75xb > _0x7b75xe; _0x7b75xe++) {
                    if (1 === _0x7b75xa[_0x7b75xe]['nodeType']) {
                        if (_0x7b75xa[_0x7b75xe]['hasAttribute']('data-next-child')) {
                            for (var _0x7b75xf = _0x7b75xa[_0x7b75xe]['childNodes']['length'], _0x7b75x10 = 0; _0x7b75xf > _0x7b75x10; _0x7b75x10++) {
                                if (_0x7b75xa[_0x7b75xe]['childNodes'][_0x7b75x10] === _0x7b75x5) {
                                    _0x7b75x6 = _0x7b75xc, _0x7b75xd = !0;
                                    break
                                }
                            }
                        } else {
                            if (_0x7b75xa[_0x7b75xe] === _0x7b75x5) {
                                _0x7b75x6 = _0x7b75xc;
                                break
                            }
                        };
                        if (1 == _0x7b75xd) {
                            break
                        };
                        _0x7b75xc++
                    }
                };
                return _0x7b75x6 >= 0 && _0x7b75x8(_0x7b75x6, _0x7b75x9), !1
            }
        }, _0x7b75x6 = function() {
            var _0x7b75x2 = window['location']['hash']['substring'](1),
                _0x7b75x3 = {};
            if (_0x7b75x2['length'] < 5) {
                return _0x7b75x3
            };
            for (var _0x7b75x4 = _0x7b75x2['split']('&'), _0x7b75x5 = 0; _0x7b75x5 < _0x7b75x4['length']; _0x7b75x5++) {
                if (_0x7b75x4[_0x7b75x5]) {
                    var _0x7b75x6 = _0x7b75x4[_0x7b75x5]['split']('=');
                    _0x7b75x6['length'] < 2 || (_0x7b75x3[_0x7b75x6[0]] = _0x7b75x6[1])
                }
            };
            return _0x7b75x3['gid'] && (_0x7b75x3['gid'] = parseInt(_0x7b75x3['gid'], 10)), _0x7b75x3
        }, _0x7b75x8 = function(_0x7b75x2, _0x7b75x4, _0x7b75x5, _0x7b75x6) {
            var _0x7b75x8, _0x7b75x9, _0x7b75xa, _0x7b75xb = document['querySelectorAll']('.pswp')[0];
            if (_0x7b75xa = _0x7b75x3(_0x7b75x4), _0x7b75x9 = {
                    galleryUID: _0x7b75x4['getAttribute']('data-pswp-uid'),
                    getThumbBoundsFn: function(_0x7b75x2) {
                        var _0x7b75x3 = _0x7b75xa[_0x7b75x2]['el']['getElementsByTagName']('img')[0],
                            _0x7b75x4 = window['pageYOffset'] || document['documentElement']['scrollTop'],
                            _0x7b75x5 = _0x7b75x3['getBoundingClientRect']();
                        return {
                            x: _0x7b75x5['left'],
                            y: _0x7b75x5['top'] + _0x7b75x4,
                            w: _0x7b75x5['width']
                        }
                    }
                }, _0x7b75x6) {
                if (_0x7b75x9['galleryPIDs']) {
                    for (var _0x7b75xc = 0; _0x7b75xc < _0x7b75xa['length']; _0x7b75xc++) {
                        if (_0x7b75xa[_0x7b75xc]['pid'] == _0x7b75x2) {
                            _0x7b75x9['index'] = _0x7b75xc;
                            break
                        }
                    }
                } else {
                    _0x7b75x9['index'] = parseInt(_0x7b75x2, 10) - 1
                }
            } else {
                _0x7b75x9['index'] = parseInt(_0x7b75x2, 10)
            };
            isNaN(_0x7b75x9['index']) || (_0x7b75x5 && (_0x7b75x9['showAnimationDuration'] = 0), _0x7b75x8 = new PhotoSwipe(_0x7b75xb, PhotoSwipeUI_Default, _0x7b75xa, _0x7b75x9), _0x7b75x8['init']())
        }, _0x7b75x9 = document['querySelectorAll'](_0x7b75x2), _0x7b75xa = 0, _0x7b75xb = _0x7b75x9['length']; _0x7b75xb > _0x7b75xa; _0x7b75xa++) {
        _0x7b75x9[_0x7b75xa]['setAttribute']('data-pswp-uid', _0x7b75xa + 1), _0x7b75x9[_0x7b75xa]['onclick'] = _0x7b75x5
    };
    var _0x7b75xc = _0x7b75x6();
    _0x7b75xc['pid'] && _0x7b75xc['gid'] && _0x7b75x8(_0x7b75xc['pid'], _0x7b75x9[_0x7b75xc['gid'] - 1], !0, !0)
};
 $(function() {
    var _0x7b75x2 = new Object;
    _0x7b75x2['animations'] = Modernizr['cssanimations'], _0x7b75x2['animEndEventNames'] = {
        WebkitAnimation: 'webkitAnimationEnd',
        OAnimation: 'oAnimationEnd',
        msAnimation: 'MSAnimationEnd',
        animation: 'animationend'
    }, _0x7b75x2['animEndEventName'] = _0x7b75x2['animEndEventNames'][Modernizr['prefixed']('animation')], _0x7b75x2['items'] = $('#an-main')['find']('.an-page-wrap'), _0x7b75x2['current'] = '#home', _0x7b75x2['itemsCount'] = _0x7b75x2['items']['length'], _0x7b75x2['isAnimating'] = !1, initNavigation(_0x7b75x2), setInterval(function() {
        function _0x7b75x2(_0x7b75x2, _0x7b75x3) {
            _0x7b75x2['setAttribute']('transform', 'rotate(' + _0x7b75x3 + ' 253 253)')
        }
        var _0x7b75x3 = new Date;
        _0x7b75x2(sec, 6 * _0x7b75x3['getSeconds']()), _0x7b75x2(min, 6 * _0x7b75x3['getMinutes']()), _0x7b75x2(hour, 30 * (_0x7b75x3['getHours']() % 12) + _0x7b75x3['getMinutes']() / 2)
    }, 1e3);
    var _0x7b75x3 = $('.slide-content');
    _0x7b75x3['mCustomScrollbar']({
        theme: 'dark-2'
    });
    var _0x7b75x4 = $('#an-main'),
        _0x7b75x5 = $(window)['height']();
    _0x7b75x4['css']('height', _0x7b75x5), _0x7b75x3['css']('height', _0x7b75x5), $(window)['resize'](function() {
        _0x7b75x5 = $(window)['height'](), _0x7b75x4['css']('height', _0x7b75x5), _0x7b75x3['css']('height', _0x7b75x5)
    }), spinner['initial'](), spinner['dotnav'](), interval = window['setInterval'](spinner['auto'], 4e3), window['sr'] = ScrollReveal({
        easing: 'ease-in-out',
        scale: 1,
        reset: !1
    }), sr['reveal']('.top-first', {
        origin: 'bottom',
        delay: 500,
        duration: 1200
    }), sr['reveal']('.top-second', {
        origin: 'top',
        delay: 500,
        duration: 1200
    });
     initPhotoSwipeFromDOM('#portfolio')
}), $(window)['on']('load', function() {
    var _0x7b75x2 = $('#page-preloader'),
        _0x7b75x3 = $('#spinner');
    _0x7b75x3['fadeOut'](), _0x7b75x2['delay'](350)['fadeOut']('slow', animateContent())
})
