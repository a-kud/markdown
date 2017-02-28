import React from "react";

class InputMarkdown extends React.Component {
    render() {
        return (
            <label id="markdown">Enter markdown here:
                <textarea value={this.props.value}
                          onChange={(e) => this.props.onChange(e)}></textarea>
            </label>
        );
    }
}

export default InputMarkdown;
