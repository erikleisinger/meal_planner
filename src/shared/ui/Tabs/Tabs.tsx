import type {Tab} from './types'
import TabItem from './TabItem'
export default function Tabs({
    selectedTab,
    setSelectedTab,
    tabs
}: {
    selectedTab: string,
    setSelectedTab: (tab: string) => void,
    tabs: Tab[]
}) {
    return (
        <div className="flex ">
{
     tabs.map((tab, i) => (
        <div onClick={() => setSelectedTab(tab.value)} key={i}>
        <TabItem  tab={tab}  selected={selectedTab === tab.value} />
        </div>
    ))
}
        </div>
       
    )
}