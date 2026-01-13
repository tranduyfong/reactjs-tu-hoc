import { Button, Drawer } from "antd";
import { useState, useEffect } from "react";

const InformationUser = (props) => {

    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [avatar, setAvatar] = useState("");

    const { isModalInforOpen, setIsModalInforOpen, dataUpdate } = props;

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName);
            setEmail(dataUpdate.email);
            setPhone(dataUpdate.phone);
            setAvatar(dataUpdate.avatar);
        }
    }, [dataUpdate]);

    const closeModal = () => {
        setIsModalInforOpen(false);
    }

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            return;
        }

        const file = event.target.files[0];
        console.log("Check file:", file);

    }
    return (
        <>
            <Drawer
                title="Information User"
                placement={"left"}
                closable={false}
                onClose={closeModal}
                open={isModalInforOpen}
                width={"30vw"}
            >
                <p>Id: {id}</p>
                <p>Fullname: {fullName}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Avatar: </p>
                <div style={{ marginTop: "10px", height: "100px", width: "150px", border: "1px solid #ccc" }}>
                    <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${avatar}`} alt="Avatar user" />
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

            </Drawer>
        </>
    )
}

export default InformationUser;