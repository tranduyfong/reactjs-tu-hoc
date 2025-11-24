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
            setId(dataUpdate.id)
            setFullName(dataUpdate.fullName);
            setEmail(dataUpdate.email);
            setPhone(dataUpdate.phone);
            setAvatar(dataUpdate.avatar);
        }
    }, [dataUpdate]);

    const closeModal = () => {
        setIsModalInforOpen(false);
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
                <div>
                    <img width={150} height={100} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${avatar}`} alt="Avatar user" />
                </div>
                <div>
                    <Button type="primary">
                        <label htmlFor="btnUpload">Upload Avatar</label>
                    </Button>
                    <input type="file" id="btnUpload" hidden />
                </div>

            </Drawer>
        </>
    )
}

export default InformationUser;