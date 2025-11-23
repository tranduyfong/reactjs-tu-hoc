import { Drawer } from "antd";
import { useState, useEffect } from "react";

const InformationUser = (props) => {

    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const { isModalInforOpen, setIsModalInforOpen, dataUpdate } = props;

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName);
            setEmail(dataUpdate.email);
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate]);

    const closeModal = () => {
        setIsModalInforOpen(false);
    }

    return (
        <Drawer
            title="Information User"
            placement={"left"}
            closable={false}
            onClose={closeModal}
            open={isModalInforOpen}
        >
            <p>Id: {id}</p>
            <p>Fullname: {fullName}</p>
            <p>Email: {email}</p>
            <p>PhoneL {phone}</p>
        </Drawer>
    )
}

export default InformationUser;