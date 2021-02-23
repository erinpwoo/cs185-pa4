import { Component } from 'react';

class Text extends Component {
    render() {
        return (
            <div className="text">
                <div className="content-body">
                    <p className="main-text">
                        Hi! Welcome to my music blog for CS 185 - Human Computer Interaction. </p>
                    <p className="main-text">Here are some playlists I made for my favorite music genres: </p>
                    <div className="spotify">
                        <h3>ELECTRONIC</h3>
                        <iframe src="https://open.spotify.com/embed/playlist/1WhZHuwHnz6gCpM4Yw2D67" width="40%" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                        <h3>R&B/RAP</h3>
                        <iframe src="https://open.spotify.com/embed/playlist/2Lh395qRwOhjuUcd1k1q0j" width="40%" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                        <h3>INDIE/ROCK</h3>
                        <iframe src="https://open.spotify.com/embed/playlist/0yZfalRwOf69jIkwySPGc5" width="40%" height="380" frameBorder="0" allow="encrypted-media"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
export default Text;