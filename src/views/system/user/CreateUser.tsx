import { useEffect, useImperativeHandle, useState } from 'react'
import { Modal, Form, Input, TreeSelect, Select, Upload } from 'antd'
import { IModalProp } from '@/types/modal'
import { Dept } from '@/types/api'
import { createUser, getDeptList, editUser } from '@/api'
import { message } from '@/utils/AntdGlobal'

function CreateUser(props: IModalProp) {
  const [form] = Form.useForm()
  const [action, setAction] = useState('create')
  const [visible, setVisbile] = useState(false)
  const [deptList, setDeptList] = useState<Dept.DeptItem[]>([])

  useEffect(() => {
    getDeptList().then(res => {
      setDeptList(res)
    })
  }, [])

  useImperativeHandle(props.mRef, () => {
    return {
      open: (type, data) => {
        setAction(type)
        setVisbile(true)
        if (type === 'edit' && data) {
          form.setFieldsValue(data)
        }
      },
    }
  })
  async function handleOk() {
    const valid = await form.validateFields()
    if (action === 'create') {
      await createUser(valid)
      message.success('创建成功')
    } else {
      await editUser(valid)
      message.success('修改成功')
    }
    handleCancel()
    props.update()
  }
  function handleCancel() {
    setVisbile(false)
    form.resetFields()
  }
  return (
    <Modal
      title={action === 'create' ? '新增用户' : '编辑用户'}
      okText='确定'
      cancelText='取消'
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} labelCol={{ span: 4 }} labelAlign='right'>
        <Form.Item name='userId' hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label='用户名称'
          name='userName'
          rules={[
            { required: true, message: '请输入用户名称' },
            { min: 5, max: 12, message: '用户名称最小5个字符，最大12个字符' },
          ]}
        >
          <Input placeholder='请输入用户名称'></Input>
        </Form.Item>
        <Form.Item
          label='用户邮箱'
          name='userEmail'
          rules={[
            { required: true, message: '请输入用户邮箱' },
            { type: 'email', message: '请输入正确的邮箱' },
            {
              pattern: /^\w+@mars.com$/,
              message: '邮箱必须以@mars.com结尾',
            },
          ]}
        >
          <Input placeholder='请输入用户邮箱' disabled={action === 'edit'}></Input>
        </Form.Item>
        <Form.Item
          label='手机号'
          name='mobile'
          rules={[
            { len: 11, message: '请输入11位手机号' },
            { pattern: /1[1-9]\d{9}/, message: '请输入1开头的11位手机号' },
          ]}
        >
          <Input type='number' placeholder='请输入手机号'></Input>
        </Form.Item>
        <Form.Item
          label='部门'
          name='deptId'
          rules={[
            {
              required: true,
              message: '请选择部门',
            },
          ]}
        >
          <TreeSelect
            placeholder='请选择部门'
            allowClear
            treeDefaultExpandAll
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            fieldNames={{ label: 'deptName', value: '_id' }}
            treeData={deptList}
          />
        </Form.Item>
        <Form.Item label='岗位' name='job'>
          <Input placeholder='请输入岗位'></Input>
        </Form.Item>
        <Form.Item label='状态' name='state'>
          <Select>
            <Select.Option value={1}>在职</Select.Option>
            <Select.Option value={2}>离职</Select.Option>
            <Select.Option value={3}>试用期</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateUser
