import LayoutBand from './LayoutBand';
var meta = {
    title: 'Example/LayoutBand',
    component: LayoutBand,
    tags: ['autodocs'],
};
export default meta;
export var Default = {
    args: {
        children: (React.createElement("div", null,
            React.createElement("h1", { className: 'block bg-slate-800 p-2 rounded' }, "This is inside a default LayoutBand!"),
            React.createElement("p", { className: 'block bg-slate-800 p-2 rounded' }, "The `LayoutBand` component centers its children and applies a max width with padding. Resize the screen to see how it behaves responsively.")))
    }
};
export var WithMultipleChildren = {
    args: {
        children: (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'bg-emerald-700 p-3' }, "Child 1"),
            React.createElement("div", { className: 'bg-indigo-700 p-3' }, "Child 2"),
            React.createElement("div", { className: 'bg-rose-700 p-3' }, "Child 3"))),
    },
};
//# sourceMappingURL=LayoutBand.stories.js.map