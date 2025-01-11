import type {Tab} from './types'
export default function TabItem({tab, selected}: {tab: Tab, selected: boolean}) {
    const className = `p-2 px-4 cursor-pointer hover:bg-gray-100 border-b-4  ${selected ? 'border-blue-500  text-blue-500 ' : 'text-gray-800'}`
    return (
        <div className={className}>{tab.label}</div>
    )
}