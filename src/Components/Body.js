import { Component } from 'react';

class Body extends Component {
    render() {
        var displayContent = () => {
            var activeTab = this.props.activeTab;
            if (activeTab === 1) {
                return (
                    <h1>Text</h1>
                );
            } else if (activeTab === 2) {
                return (
                    <h1>Image</h1>
                );
            } else if (activeTab === 3) {
                return (
                    <h1>Video</h1>
                );
            } else if (activeTab === 4) {
                return (
                    <h1>Table</h1>
                );
            } else if (activeTab === 5) {
                return (
                    <h1>Email</h1>
                );
            }
        }
        return displayContent();
    }
}
export default Body;