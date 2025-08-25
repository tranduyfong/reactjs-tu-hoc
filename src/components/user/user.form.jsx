import { Button, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleClickButton = () => {
        console.log('Check value: ', { fullName, email, password, phoneNumber });

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
                    <Input value={phoneNumber} onChange={(event) => { setPhoneNumber(event.target.value) }} />
                </div>
                <div>
                    <Button type="primary" onClick={handleClickButton}>Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;