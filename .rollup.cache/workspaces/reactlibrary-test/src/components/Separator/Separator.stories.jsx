import Separator from './Separator';
var meta = {
    title: 'Example/Separator',
    component: Separator,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            },
            description: 'The size of the separator (affects the margin)',
        },
    },
    decorators: [
        function (Story, context) { return (<div className='text-center w-48'>
        <p className='block bg-slate-800 p-2 rounded'>Above the separator</p>
        <Story {...context}/>
        <p className='block bg-slate-800 p-2 rounded'>Below the separator</p>
      </div>); },
    ],
};
export default meta;
export var ExtraExtraSmall = {
    args: {
        size: 'xxs'
    },
};
export var ExtraSmall = {
    args: {
        size: 'xs'
    },
};
export var Small = {
    args: {
        size: 'sm',
    },
};
export var Medium = {
    args: {
        size: 'md',
    },
};
export var Large = {
    args: {
        size: 'lg',
    },
};
export var ExtraLarge = {
    args: {
        size: 'xl',
    },
};
export var ExtraExtraLarge = {
    args: {
        size: 'xxl',
    },
};
//# sourceMappingURL=Separator.stories.jsx.map