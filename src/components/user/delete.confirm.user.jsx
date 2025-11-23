import { useEffect, useState } from 'react';
import { Modal, notification } from 'antd';
import { deleteUserAPI } from '../../services/api.service';

const DeleteUserConfirm = (props) => {

    const { isModalDeleteOpen, setModalDeleteOpen, dataUpdate, loadUser } = props;
    const [idUser, setId] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setName(dataUpdate.fullName)
        }
    }, [dataUpdate])

    const rejectConfirm = () => {
        setModalDeleteOpen(false);
    }

    const deleteConfirm = async () => {
        const res = await deleteUserAPI(idUser);

        if (res.data) {
            notification.success({
                message: 'Delete user',
                description: 'Xóa người dùng thành công'
            });
            rejectConfirm();
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
            open={isModalDeleteOpen}
            title="DELETE USER ?"
            onOk={() => deleteConfirm()}
            onCancel={() => rejectConfirm()}
            footer={(_, { OkBtn, CancelBtn }) => (
                <>
                    <CancelBtn />
                    <OkBtn />
                </>
            )}
        >
            <p>Do you want to delete user "{name}" ?</p>
        </Modal>
    );
}

export default DeleteUserConfirm;