export function Select({
    value,
    onChange,
    options,
    placeholder = ''
}: {
    value: string;
    onChange: (value: string) => void;
    options: {
        value: string;
        label: string;
        disabled?: boolean
    }[];
    placeholder?: string;
}) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const name = event.target.value;
        const value = options.find(({label}) => label === name)?.value || '';
        onChange(value);
    };
    return (
        <select  className="p-2 border border-slate-300 rounded-md" value={value} onChange={handleChange}>
            <option value="" key="default"> {placeholder} </option>
            {options.map((option, i) => (
                <option key={i} value={option.value} disabled={option.disabled}>{option.label}</option>
            ))}
        </select>
    );
}