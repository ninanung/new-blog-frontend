import React from 'react';
import Editor from 'tui-editor';
import PropTypes from 'prop-types';

// for Toast editer
import 'tui-editor/dist/tui-editor-Viewer.js';
import 'tui-editor/dist/tui-editor-contents.css'; // editor content

let editor = null;

class TuiEditor extends React.Component {
    componentDidUpdate(prevProps, nextProps) {
        const { text, height } = this.props;
        document.getElementById('viewerSection').innerHTML = '';
        editor = new Editor.factory({
            el: document.querySelector('#viewerSection'),
            viewer: true,
            height,
            initialValue: text,
        })
    }

    componentDidMount() {
        const { text, height } = this.props;
        editor = new Editor.factory({
            el: document.querySelector('#viewerSection'),
            viewer: true,
            height,
            initialValue: text,
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