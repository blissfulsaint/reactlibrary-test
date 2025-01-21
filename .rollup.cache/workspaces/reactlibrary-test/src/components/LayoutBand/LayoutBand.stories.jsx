import LayoutBand from './LayoutBand';
var meta = {
    title: 'Example/LayoutBand',
    component: LayoutBand,
    tags: ['autodocs'],
};
export default meta;
export var Default = {
    args: {
        children: (<div>
        <h1 className='block bg-slate-800 p-2 rounded'>This is inside a default LayoutBand!</h1>
        <p className='block bg-slate-800 p-2 rounded'>
          The `LayoutBand` component centers its children and applies a max width
          with padding. Resize the screen to see how it behaves responsively.
        </p>
      </div>)
    }
};
export var WithMultipleChildren = {
    args: {
        children: (<>
        <div className='bg-emerald-700 p-3'>Child 1</div>
        <div className='bg-indigo-700 p-3'>Child 2</div>
        <div className='bg-rose-700 p-3'>Child 3</div>
      </>),
    },
};
//# sourceMappingURL=LayoutBand.stories.jsx.map