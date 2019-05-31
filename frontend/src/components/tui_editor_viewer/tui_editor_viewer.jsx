import React from 'react';
import Editor from 'tui-editor';
import PropTypes from 'prop-types';

// for Toast editer
import 'tui-editor/dist/tui-editor-Viewer.js';
import 'tui-editor/dist/tui-editor-contents.css'; // editor content

class TuiEditor extends React.Component {
    componentDidMount() {
        const { text, height } = this.props;
        const editor = new Editor.factory({
            el: document.querySelector('#viewerSection'),
            viewer: true,
            height,
            initialValue: text,
        })
        this.setState({
            editor,
        })
    }

    render() {
        return (
            <div id='viewerSection'></div>
        )
    }
}

TuiEditor.propTypes = {
    text: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}

export default TuiEditor;