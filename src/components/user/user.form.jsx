import { Button, Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmitButton = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: 'Create user',
                description: 'Tạo mới người dùng thành công'
            });
            setIsModalOpen(false);
        } else {
            notification.error({
                message: 'Error create user',
                description: JSON.stringify(res.message)
            })
        }
        console.log('check res: ', res);
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table User</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>Create User</Button>
            </div>
            <Modal
                title="Create User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => handleSubmitButton()}
                onCancel={() => setIsModalOpen(false)}
                maskClosable={false}
                okText={"CREATE"}
            >
                <div className="user-form" style={{ margin: "20px 0" }}>
                    <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                        <div>
                            <span>Fullname</span>
                            <Input value={fullName} onChange={(event) => setFullName(event.target.value)} />
                        </div>
                        <div>
                            <span>Email</span>
                            <Input value={email} onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input.Password value={password} onChange={(event) => { setPassWord(event.target.value) }} />
                        </div>
                        <div>
                            <span>Phone number</span>
                            <Input value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default UserForm;