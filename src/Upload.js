import React, {useRef} from 'react';
import S3 from "react-aws-s3";


function Upload() {
    const fileInput = useRef();

    const handleClick = e => {
        e.preventDefault();
        console.log(fileInput.current.files[0]);
        let file = fileInput.current.files[0];
        let newFile = fileInput.current.files[0];

        const config = {
            bucketName: "elasticbeanstalk-us-east-2-151994240113",
            dirName: "",
            region: "us-east-2",
            accessKeyId: "AKIASGY4QBRYUUREEJOV",
            secretAccesskey: "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"
        };

        const ReactS3Client = new S3(config);
        ReactS3Client.uploadFile(file, newFile).then(data => {
            console.log(data);
            if(data.status === 204){
                console.log("success");
            }else{
                console.log("fail");
            }
        });
        
    
    };


    return(
        <form className="upload-form" onSubmit={handleClick} >
            <label>
                Upload File:
                <input type='file' ref={fileInput} />
            </label>
            <br />
            <br /> 
            <button type="submit">Upload</button>
        </form>
    )
};

export default Upload;