import { Component } from 'react';
import './App.css';
import Body from './Components/Body'
import TabList from './Components/TabList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active :1
    }
    this.changeTab = (id) => {
      this.setState({
        active :id
      })
    }
  }

  render() {
    const tabs = [{
      id: 1,
      title: 'Text'
    },
    {
      id: 2,
      title: 'Image'
    },
    {
      id: 3,
      title: 'Video'
    },
    {
      id: 4,
      title: 'Table'
    },
    {
      id: 5,
      title: 'Email'
    }]

    return (
      <div className="App">
        <div class="tab-bar">
          <TabList tabs={tabs} activeTab={this.state.active} changeTab={this.changeTab}/>
        </div>
        <Body activeTab={this.state.active}/>
      </div>
    );
  }
}

export default App;