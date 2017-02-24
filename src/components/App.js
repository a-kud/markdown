import React from "react";
import marked from "marked"
import InputMarkdown from "./Input";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };

        this.handleTextareaChange = this.handleTextareaChange.bind(this);
    }

    handleTextareaChange(e) {
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        return (
            <div className="app">
                <InputMarkdown value={this.state.value} onChange={this.handleTextareaChange}/>
                <div id="output" dangerouslySetInnerHTML={{__html: marked(this.state.value)}}></div>
            </div>
        );
    }
}

export default App;
