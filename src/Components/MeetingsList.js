import { Component } from 'react';
import MeetingsRow from './MeetingRow'

class MeetingsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allTasks: [],
            selectedTask: {
                id: 0,
                important: false,
                title: "",
                day: "",
                textInfor: ""
            } 
        }
    }

    componentDidMount() {
        this.props.fetchTasks();
    }

    render() {
        var rows = [];
        this.props.allTasks.forEach(task => {
            rows.push(
                <MeetingsRow item={task}/>
            )
        })
        if (rows.length === 0) {
            return <h3>No meetings available.</h3>
        }

        return (
            <div className="meetings-section">
                <h2>Meetings List</h2>
                <table className="meetings-list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Zoom link</th>
                            <th>Is important?</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
             </div>
        );
    }
}
export default MeetingsList;