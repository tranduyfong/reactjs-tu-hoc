import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import InformationUser from './information.user.modal';
import DeleteUserConfirm from './delete.confirm.user';

const UserTable = (props) => {
    const { dataUsers, loadUser } = props;

    const [dataUpdate, setDataUpdate] = useState(null);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isModalInforOpen, setIsModalInforOpen] = useState(false);
    const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);

    const columns = [
        {
            title: 'Id',
            key: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a href='#' onClick={() => {
                            setDataUpdate(record);
                            setIsModalInforOpen(true);
                        }}>{record._id}</a >
                    </>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <>
                        <a style={{ marginRight: '10px', cursor: 'pointer' }}><EditOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModalUpdateOpen(true);
                            }}
                        /></a>
                        <a style={{ color: 'red', cursor: 'pointer' }}><DeleteOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setModalDeleteOpen(true);
                            }}
                        /></a>
                    </>
                )
            }
        }
    ];


    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <InformationUser
                isModalInforOpen={isModalInforOpen}
                setIsModalInforOpen={setIsModalInforOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
            <DeleteUserConfirm
                isModalDeleteOpen={isModalDeleteOpen}
                setModalDeleteOpen={setModalDeleteOpen}
                dataUpdate={dataUpdate}
                loadUser={loadUser}
            />
        </>
    )
}
export default UserTable;