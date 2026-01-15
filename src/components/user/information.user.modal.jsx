import { Button, Drawer } from "antd";
import { useState } from "react";

const InformationUser = (props) => {
    const { isModalInforOpen, setIsModalInforOpen, dataUpdate, setDataUpdate } = props;

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }
    console.log("Check file:", preview);
    return (
        <>
            <Drawer
                title="Information User"
                placement={"left"}
                closable={false}
                onClose={() => {
                    setIsModalInforOpen(false);
                    setDataUpdate(null);
                }}
                open={isModalInforOpen}
                width={"30vw"}
            >
                <p>Id: {dataUpdate?._id}</p>
                <p>Fullname: {dataUpdate?.fullName}</p>
                <p>Email: {dataUpdate?.email}</p>
                <p>Phone: {dataUpdate?.phone}</p>
                <p>Avatar: </p>
                <div style={{ marginTop: "10px", height: "100px", width: "150px", border: "1px solid #ccc" }}>
                    <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUpdate?.avatar}`} alt="Avatar user" />
                </div>
                <div style={{ marginTop: "15px" }}>
                    <Button type="primary">
                        <label htmlFor="btnUpload">Upload Avatar</label>
                    </Button>
                    <input
                        // onChange={handleOnChangeFile} 
                        onChange={(event) => handleOnChangeFile(event)}
                        type="file" id="btnUpload" hidden />
                </div>
                {preview &&
                    <div style={{ marginTop: "10px", height: "100px", width: "150px", border: "1px solid #ccc" }}>
                        <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={preview} />
                    </div>
                }
            </Drawer>
        </>
    )
}

export default InformationUser;