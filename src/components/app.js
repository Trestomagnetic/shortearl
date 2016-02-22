"use strict";

import React from 'react';

class App extends React.Component {
    render() {
        var rowsPad = {
            marginTop: 10
        };

        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>{this.props.phrase}</h1>
                        <p>shorten your urls!</p>
                    </div>
                </div>
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="text" className="form-control" placeholder="Enter an url..." />
                                </div>
                            </div>
                            <div className="row" style={rowsPad}>
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-success">Shorten!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
