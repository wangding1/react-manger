import { IModalProp } from '@/types/modal'
import { Dept, User } from '@/types/api'
import { Modal, Form, Input, TreeSelect, Select } from 'antd'
import { useEffect, useImperativeHandle, useState } from 'react'
import { getDeptList, getAllUserList, createDept, editDept } from '@/api'
import { message } from '@/utils/AntdGlobal'

function CreateDept(props: IModalProp<Dept.EditParams>) {
  const [action, setAction] = useState('create')
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false)
  const [deptList, setDeptList] = useState<Dept.DeptItem[]>([])
  const [userList, setUserList] = useState<User.UserItem[]>([])

  useEffect(() => {
    getUserList()
  }, [])

  useImperativeHandle(props.mRef, () => ({
    open: (type, data) => {
      setVisible(true)
      setAction(type)
      getTreeData()
      if (data) {
        console.log(data)
        form.setFieldsValue(data)
      }
    },
  }))
  function getTreeData() {
    getDeptList({}).then(res => {
      setDeptList(res)
    })
  }
  function getUserList() {
    getAllUserList({}).then(res => {
      setUserList(res)
    })
  }
  async function handleSubmit() {
    try {
      let params = await form.validateFields()
      if (action === 'create') {
        await createDept(params)
      } else {
        await editDept(params)
      }
      message.success('操作成功')
      handleCancel()
      props.update()
    } catch (error) {}
  }
  function handleCancel() {
    setVisible(false)
    form.resetFields()
  }
  return (
    <Modal
      title={action === 'create' ? '创建部门' : '编辑部门'}
      width={800}
      open={visible}
      okText='确定'
      cancelText='取消'
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <Form form={form} labelAlign='right' labelCol={{ span: 4 }}>
        <Form.Item hidden name='_id'>
          <Input />
        </Form.Item>
        <Form.Item label='上级部门' name='parentId'>
          <TreeSelect
            placeholder='请选择上级部门'
            allowClear
            treeDefaultExpandAll
            fieldNames={{ label: 'deptName', value: '_id' }}
            treeData={deptList}
          />
        </Form.Item>
        <Form.Item label='部门名称' name='deptName' rules={[{ required: true, message: '请输入部门名称' }]}>
          <Input placeholder='请输入部门名称' />
        </Form.Item>
        <Form.Item label='负责人' name='userName' rules={[{ required: true, message: '请选择负责人' }]}>
          <Select>
            {userList.map(item => {
              return (
                <Select.Option value={item.userName} key={item._id}>
                  {item.userName}
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateDept
