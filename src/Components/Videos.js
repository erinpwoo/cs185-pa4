import { Component } from 'react';
import { openModal } from '../script'

class Videos extends Component {
    render() {
        return (
            <div class="videos">
                <div id="modal-window" class="modal">
                    <img class="modal-content" id="modal-img"></img>
                    <div id="caption"></div>
                </div>
                <div class="content-body">
                    <div class="row">
                        <video src="videos/IMG_1713.MOV" onClick={openModal}></video>
                        <video src="videos/IMG_2311.MOV" onClick={openModal}></video>
                        <video src="videos/IMG_0272.MOV" onClick={openModal}></video>
                        <video src="videos/IMG_1039.MOV" onClick={openModal}></video>
                        <video src="videos/IMG_0833.MOV" onClick={openModal}></video>
                        <video src="videos/IMG_0490.MOV" onClick={openModal}></video>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Videos;