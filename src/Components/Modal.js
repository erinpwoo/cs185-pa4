import { Component } from 'react'

class Modal extends Component {

    render() {
        let media;
        if (this.props.mediaType == "IMAGES") {
            media = <img Name="modal-content" id="modal-img" src={this.props.source}/>
        } else if (this.props.mediaType == "VIDEOS") {
            media = <video className="modal-content" id="modal-img" controls="controls" src={this.props.source}></video>
        }
        return (
            <div id="modal-window" className="modal">
                {media}
            </div>
        )
    }
}

export default Modal;