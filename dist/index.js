'use strict';

var jsxRuntime = require('react/jsx-runtime');

function Separator(_a) {
    var _b = _a.size, size = _b === undefined ? 'xxs' : _b;
    var marginSize;
    switch (size) {
        case 'xxs':
            marginSize = 'my-4';
            break;
        case 'xs':
            marginSize = 'my-12';
            break;
        case 'sm':
            marginSize = 'my-24';
            break;
        case 'md':
            marginSize = 'my-48';
            break;
        case 'lg':
            marginSize = 'my-64';
            break;
        case 'xl':
            marginSize = 'my-80';
            break;
        case 'xxl':
            marginSize = 'my-96';
            break;
    }
    return (jsxRuntime.jsx("div", { className: marginSize }));
}

function LayoutBand(_a) {
    var children = _a.children;
    return (jsxRuntime.jsx("div", { className: "max-w-screen-lg mx-auto px-3", children: children }));
}

exports.LayoutBand = LayoutBand;
exports.Separator = Separator;
//# sourceMappingURL=index.js.map
