import { useState } from "react"

const tabs = ["Text", "Image", "Video", "Table"];

export const TabList = () => {
    const [activeTab, setActiveTab] = useState(tabs[0])
    return <>
        <div class="tabs">
            {tabs.map((tab) => (
                <button activeTab={activeTab === tab} onClick={() => setActiveTab(tab)}>
                    {tab}
                </button>
            ))}
        </div>
    </>;
}