import React, { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const NoteInput = ({togglesShowCreateFolder}) => {


    // #Quill Editor
    const [state, setState] = useState({ value: null });
    const handleChange = value => {
        setState({ value });
    };
    const getContent = () => {
        console.log(state)
    }
    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    }

    return (
        <>
            <div className="input-header">
                <input type="text" placeholder='Title' />
                <div className="folder" onClick={
                    () => togglesShowCreateFolder()
                }>
                    <FolderIcon sx={{fontSize:'1rem'}}/>
                    <h4>Folders</h4>
                </div>
                <div className="date">
                    <h5>Last modified: 2 Apr 2023, 17:06</h5>
                    <h5>Created: 28 Mar 2022</h5>
                </div>
            </div>
            <div className="input-text">
                <ReactQuill
                    className='quill'
                    theme="snow"
                    value={state.value}
                    onChange={handleChange}
                    placeholder={"Write something awesome..."}
                    modules={modules}
                    styles={false}
                />
            </div>
            <div className="input-btns">
                <div className="">

                </div>
                <div className="">
                    <div className="click" onClick={
                        () => getContent()
                    }>
                        <h4>save</h4>
                    </div>
                    <div className="click" onClick={
                        () => getContent()
                    }>
                        <h4>discard</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoteInput;


