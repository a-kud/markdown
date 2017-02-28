import React from "react";
import InputMarkdown from "./Input";
import RenderMarkdown from "./Output";

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
                <InputMarkdown value={this.state.value}
                               onChange={this.handleTextareaChange}/>
                <RenderMarkdown value={this.state.value} />
            </div>
        );
    }
}

export default App;
