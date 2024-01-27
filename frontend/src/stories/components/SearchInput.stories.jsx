import SearchInput from "@Components/SearchInput/SearchInput";

export default {
    component: SearchInput,
    title: 'Components/SearchInput',
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{height: "60px", padding: "1rem"}}>
                <Story></Story>
            </div>
        )
    ]
};

export const Default = {};
