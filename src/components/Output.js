import React from "react";
import marked from "marked"

class RenderMarkdown extends React.Component {
    render() {
        return (
            <div id="output" dangerouslySetInnerHTML={{__html: marked(this.props.value)}}></div>
        );
    }
}

export default RenderMarkdown;
