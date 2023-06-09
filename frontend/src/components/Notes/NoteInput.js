import React, { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const NoteInput = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState({ value: `` });
    const [date, setDate] = useState();
    const [folder, setFolder] = useState(folderSelection);

    const saveContent = () => {
        if (state.value !== null) {
            setBody(body.value = `<>${state.value}</>`);
        }

        let newDate = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay();
        
        setDate(newDate)

        let data = {
            id: 2,
            title: title,
            body: {
                value: body.value
            },
            date: date,
            folder: 'school'
        }

        console.log(body.value);
        console.log(title);
        setBody({ value: `` });
        console.log(date);
        console.log(data);
    };

    const discardContent = () => {
        console.log(state.value)
        console.log(noteInputData);
    };
    
    // #Quill Editor
    const textValue = noteInputData.body.value.props
    console.log(textValue)
    const [state, setState] = useState({ value: textValue });
    const handleChange = value => {
        setState({ value });
    };

    const modules = {
        toolbar: [
            [{ font: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ script: "sub" }, { script: "super" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["link"],
        ],
    }

    

    return (
        <>
            <div className="input-header">
                <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <div className="folder" onClick={
                    () => togglesShowCreateFolder()
                }>
                    <FolderIcon sx={{ fontSize: '1rem' }} />
                    <h4>{ noteInputData.folder}</h4>
                </div>
                <div className="date">
                    <h5>Last modified: 2 Apr 2023, 17:06</h5>
                    <h5>Created: { noteInputData.date}</h5>
                </div>
            </div>
            <div className="input-text">
                <ReactQuill
                    theme="snow"
                    value={state.value}
                    onChange={handleChange}
                    placeholder={"Write something awesome..."}
                    modules={modules}
                    style={{ background: '#979797', color: 'black' }}
                />
            </div>
            <div className="input-btns">
                <div className="btn-icons">
                    <div className="save" onClick={
                        () => saveContent()
                    }>
                        <h4>save</h4>
                    </div>
                    <div className="discard" onClick={
                        () => discardContent()
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


