'use client'
import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';

type EditorProps = {
    
};

const EditorWord:React.FC<EditorProps> = () => {
    const [editorState, setEditorState] = React.useState(EditorState.createEmpty())
    const onEditorStateChange = (editorState:EditorState)=>{
     setEditorState(editorState)
    }
    return <div>
        <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        editorClassName=' !whitespace-normal !break-words !max-w-screen-md'
        /></div>
}
export default EditorWord;