import React, { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const NoteInput = ({ togglesShowCreateFolder }) => {
    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState(<></>);
    const [date, setDate] = useState();
    const [folder, setFolder] = useState('');
    const [tags, setTags] = useState([]);

    
    // #Quill Editor
    const [state, setState] = useState({ value: null });
    const handleChange = value => {
        setState({ value });
    };
    const getContent = () => {
        console.log(state.value)
    }
    const modules = {
        toolbar: [
            [{ font: [] }],
            ["bold", "italic", "underline", "strike", { color: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["link"],
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
                <div className="btn-icons">
                    <div className="save" onClick={
                        () => getContent()
                    }>
                        <h4>save</h4>
                    </div>
                    <div className="discard" onClick={
                        () => getContent()
                    }>
                        <h4>discard</h4>
                    </div>
                </div>
                  <div className="">

                </div>
            </div>
        </>
    );
};

export default NoteInput;


