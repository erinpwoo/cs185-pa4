import { Component } from 'react';
import Text from './Text'
import Images from './Images'
import Table from './Table'
import Videos from './Videos';
import Email from './Email';
import ScrollToTopBtn from './ScrollToTopBtn';

class Body extends Component {
    render() {
        var displayContent = () => {
            var activeTab = this.props.activeTab;
            if (activeTab === 1) {
                return (
                    <div class="body">
                        <h1>ERIN'S MUSIC BLOG</h1>
                        <Text/>
                    </div>
                );
            } else if (activeTab === 2) {
                return (
                    <div class="body">
                        <h1>ERIN'S MUSIC BLOG</h1>
                        <Images/>
                    </div>
                );
            } else if (activeTab === 3) {
                return (
                    <div class="body">
                        <h1>ERIN'S MUSIC BLOG</h1>
                        <Videos/>
                    </div>
                );
            } else if (activeTab === 4) {
                return (
                    <div class="body">
                        <h1>ERIN'S MUSIC BLOG</h1>
                        <Table/>
                    </div>
                );
            } else if (activeTab === 5) {
                return (
                    <div class="body">
                        <h1>ERIN'S MUSIC BLOG</h1>
                        <Email/>
                    </div>
                );
            }
        }
        return displayContent();
    }
}
export default Body;