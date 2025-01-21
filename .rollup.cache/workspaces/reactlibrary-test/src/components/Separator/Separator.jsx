export default function Separator(_a) {
    var _b = _a.size, size = _b === void 0 ? 'xxs' : _b;
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
    return <div className={marginSize}/>;
}
//# sourceMappingURL=Separator.jsx.map