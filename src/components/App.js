import React from "react";
import marked from "marked"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };

        this.onTextareaChange = this.onTextareaChange.bind(this);
    }

    onTextareaChange(e) {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        return (
            <div className="app">
                <label id="markdown">Enter markdown here:
                    <textarea value={this.state.value} onChange={this.onTextareaChange}></textarea>
                </label>
                <div id="output" dangerouslySetInnerHTML={{__html: marked(this.state.value)}}></div>
            </div>
        );
    }
}

export default App;
