import { Input, notification, Modal } from "antd";
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
    const [id, setId] = useState("")
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const { loadUser } = props;

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props;

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate]);

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setId("");
        setFullName("");
        setPhone("");
        setDataUpdate(null);
    }
    const handleSubmitButton = async () => {
        const res = await updateUserAPI(id, fullName, phone);
        if (res.data) {
            notification.success({
                message: 'Update user',
                description: 'Sửa người dùng thành công'
            });
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: 'Error update user',
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <Modal
            title="Update User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={() => handleSubmitButton()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"SAVE"}
        >
            <div className="user-form" style={{ margin: "20px 0" }}>
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>Id</span>
                        <Input value={id} disabled />
                    </div>
                    <div>
                        <span>Fullname</span>
                        <Input value={fullName} onChange={(event) => setFullName(event.target.value)} />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default UpdateUserModal;