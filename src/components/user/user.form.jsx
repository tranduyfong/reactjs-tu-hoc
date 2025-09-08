import { Button, Input, notification } from "antd";
import { useState } from "react";
import createUserAPI from "../../services/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickButton = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: 'Create user',
                description: 'Tạo mới người dùng thành công'
            })
        } else {
            notification.error({
                message: 'Error create user',
                description: JSON.stringify(res.message)
            })
        }
        console.log('check res: ', res);
    }
    return (
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
                <div>
                    <Button type="primary" onClick={handleClickButton}>Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;