export function Button({
    children,
    disabled,
    onClick
}: {
    children: React.ReactNode
    disabled?: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}) {

    function className(): string {
        let classes = 'px-4 py-1 min-w-[150px] rounded-md '
        if (disabled) {
            classes += 'bg-slate-200 text-slate-500'
        } else {
            classes += 'bg-blue-500 text-white'
        }
        return classes
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        if (disabled) return;
        onClick(e)
    }

    return (
        <button className={className()} onClick={handleClick}>
            {children}
        </button>
    )
}