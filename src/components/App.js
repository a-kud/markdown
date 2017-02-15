import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="app">
                <label>Enter markdown here:
                    <input type="text"></input>
                </label>
            </div>
        );
    }
}

export default App;
