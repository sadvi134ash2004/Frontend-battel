import React from "react";
import AceEditor from "react-ace";
import axios from "axios";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

export default function Editor(props) {

    const {
        language,
        onChange,
        displayName,
        width,
        height,
        codes
    } = props

    // Function to send user activity to server..
    const UserActivity=(editedCode)=>{   
        const api_Url="http://localhost:3001/writtingJob";

        // loadData contains editedcode
        const loadData={
            userId:"user123",
        };

        // post request to the server to save changes..
        axios.post(api_Url,loadData)
            .then(res=>{
                console.log("User activity tracked successfully:",res.data);
            })
            .catch(error=>{
                console.log("Error no user activity:",error);
            })
    }

    return (
        <>
            <h4 className="mode-name">{displayName}</h4>
            <AceEditor

                className="ace-editor"
                height={height}
                width={width}
                setShowInvisibles={true}
                setOptions={{
                    showInvisibles: false,
                    useWorker: false,
                    fontFamily: "monospace",
                    useSoftTabs: false,
                    tabSize: 4,
                }}
                mode={language}
                enableLiveAutocompletion={true}
                enableBasicAutocompletion={true}
                focus={true}
                theme="dracula"
                onChange={(editedCode)=>{
                    onChange(editedCode);
                    UserActivity(editedCode)
                }}
                name="UNIQUE_ID_OF_DIV"
                defaultValue={codes ? "<div></div>\n<style>\n\tdiv {\n\t\twidth: 100px;\n\t\theight: 100px;\n\t\tbackground: #17181a;\n\t}\n</style>" : ""}
                editorProps={{ $blockScrolling: true }}
            />
        </>
    );
};