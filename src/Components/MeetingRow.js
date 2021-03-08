import { Component } from 'react'

class MeetingsRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (     
            <tr key={this.props.item.id}>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.title}</td>
                <td>{this.props.item.day}</td>
                <td><a href={this.props.item.textInfor}>{this.props.item.textInfor}</a></td>
                <td>{this.props.item.important? "Yes" : "No"}</td>
            </tr>
        )
    }
}

export default MeetingsRow;

