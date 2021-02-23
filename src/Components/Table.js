import { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div class="table">
                <p class="main-text">Some of my favorite albums:</p>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>ARTIST</th>
                            <th>ALBUM</th>
                            <th>YEAR RELEASED</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Alabama Shakes</td>
                            <td>Sound & Color</td>
                            <td>2015</td>
                        </tr>
                        <tr>
                            <td>FKA Twigs</td>
                            <td>MAGDALENE</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>Tame Impala</td>
                            <td>The Slow Rush</td>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <td>Flying Lotus</td>
                            <td>You're Dead!</td>
                            <td>2014</td>
                        </tr>
                        <tr>
                            <td>Djo</td>
                            <td>Twenty Twenty</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>Mac Miller</td>
                            <td>Circles</td>
                            <td>2020</td>
                        </tr>
                        <tr>
                            <td>Madeon</td>
                            <td>Good Faith</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>John Coltrane</td>
                            <td>Giant Steps</td>
                            <td>1960</td>
                        </tr>
                        <tr>
                            <td>Hiatus Kaiyote</td>
                            <td>Choose Your Weapon</td>
                            <td>2015</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Table;