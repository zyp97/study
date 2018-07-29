(function (doc, win) {
    var docEl = doc.documentElement,
            isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
            dpr = isIOS? Math.min(win.devicePixelRatio, 2) : 1,
            scale = 2 / dpr,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEl.dataset.dpr = dpr;
    // var metaEl = doc.createElement('meta');
    // metaEl.name = 'viewport';
    // metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale;
    // docEl.firstElementChild.appendChild(metaEl);
    var recalc = function () {
        var width = docEl.clientWidth;
        if (width / dpr > 720) {
            width = 640 * dpr;//手机端要用的宽度
        }
        docEl.style.fontSize = 100 * (width / 640) + 'px';//手机端要用的宽度

    };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);