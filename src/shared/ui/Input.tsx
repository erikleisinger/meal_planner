export function Input({
    placeholder,
    id,
    type,
    value,
    setValue
}: {
    placeholder: string,
    id: string,
    type: string,
    value: string,
    setValue: (value: string) => void
}) {
    return (
        <input className="w-full p-2 border border-slate-300 rounded-md" type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
    )
}