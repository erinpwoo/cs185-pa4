import Tab from './Tab'
import { Component } from 'react';

class TabList extends Component {
    /* https://react.school/ui/button */
    render() {
        return (
            this.props.tabs.map((tab) => 
                <Tab out={tab} activeTab={this.props.activeTab} changeTab={this.props.changeTab}/>
            )
        );
    }
}
export default TabList;