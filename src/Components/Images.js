import { Component } from 'react';
import { openModal } from '../script'
class Images extends Component {
    render() {
        return (
            <div class="images">
                <div id="modal-window" class="modal">
                    <img class="modal-content" id="modal-img"></img>
                    <div id="caption"></div>
                </div>
                <div class="content-body">
                    <div class="row">
                        <img src={'../images/IMG_0252.jpg'} onClick={openModal}/>
                        <img src={'../images/IMG_0970.jpg'} onClick={openModal}/>
                        <img src={'../images/IMG_1005.jpg'} onClick={openModal}/>
                        <img src={'../images/IMG_1020.jpg'} onClick={openModal}/>
                        <img src={'../images/IMG_1639.jpg'} onClick={openModal}/>
                        <img src={'../images/IMG_1706.JPG'} onClick={openModal}/>
                        <img src={'../images/IMG_1753.JPG'} onClick={openModal}/>
                        <img src={'../images/IMG_2086.JPG'} onClick={openModal}/>
                        <img src={'../images/IMG_2323.JPG'} onClick={openModal}/>
                        <img src={'../images/IMG_2808.jpg'} onClick={openModal}/>
                        <img src={'../images/IMG_6730.jpg'} onClick={openModal}/>
                        <img src={'../images/IMG_1735.JPG'} onClick={openModal}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Images;