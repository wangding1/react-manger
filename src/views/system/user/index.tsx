import SearchForm from '@/components/SearchForm'
import { Form, Button, Input, Select, Table, Space, Modal } from 'antd'
import { useRef, useState } from 'react'
import CreateUser from './CreateUser'
import { User } from '@/types/api'
import type { TableProps } from 'antd'
import { formatDate } from '@/utils/index'
import { getUserList, delUser } from '@/api'
import { IAction } from '@/types/modal'
import { message } from '@/utils/AntdGlobal'
import { useAntdTable } from 'ahooks'
function UserList() {
  const [form] = Form.useForm()
  const userRef = useRef<{
    open: (type: IAction, data?: User.UserItem) => void
  }>()
  const [userIds, setUserIds] = useState<number[]>([])
  const columns: TableProps<User.UserItem>['columns'] = [
    {
      title: '用户ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '用户邮箱',
      dataIndex: 'userEmail',
      key: 'userEmail',
    },
    {
      title: '用户角色',
      dataIndex: 'role',
      key: 'role',
      render(role: number) {
        return {
          0: '超级管理员',
          1: '管理员',
          2: '体验管理员',
          3: '普通用户',
        }[role]
      },
    },
    {
      title: '用户状态',
      dataIndex: 'state',
      key: 'state',
      render(state: number) {
        return {
          1: '在职',
          2: '离职',
          3: '试用期',
        }[state]
      },
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render(createTime: string) {
        return formatDate(createTime)
      },
    },
    {
      title: '操作',
      key: 'address',
      render(record: User.UserItem) {
        return (
          <Space>
            <Button type='text' onClick={() => handleEdit(record)}>
              编辑
            </Button>
            <Button type='text' danger onClick={() => handleDel(record.userId)}>
              删除
            </Button>
          </Space>
        )
      },
    },
  ]

  function getTableData({ current, pageSize }: { current: number; pageSize: number }, formData: User.SearchParams) {
    return getUserList({
      ...formData,
      pageNum: current,
      pageSize: pageSize,
    }).then(data => {
      return {
        total: data.page.total,
        list: data.list,
      }
    })
  }
  const { tableProps, search } = useAntdTable(getTableData, {
    form,
    defaultPageSize: 10,
  })

  function handleCreate() {
    userRef.current?.open('create')
  }
  function handlePatchConfirm() {
    if (userIds.length === 0) {
      message.warning('请选择需要删除的用户')
      return
    }
    Modal.confirm({
      title: '确认删除',
      content: '确认删除所选用户吗？',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        delUserSubmit(userIds)
      },
    })
  }
  function handleEdit(record: User.UserItem) {
    userRef.current?.open('edit', record)
  }
  function handleDel(userId: number) {
    Modal.confirm({
      title: '确认删除',
      content: '确认删除该用户吗？',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        delUserSubmit([userId])
      },
    })
  }
  function delUserSubmit(userId: number[]) {
    delUser(userId).then(() => {
      message.success('删除成功')
      setUserIds([])
      search.reset()
    })
  }
  return (
    <div className='user-list'>
      <SearchForm form={form} initialValues={{ state: 1 }} submit={search.submit} reset={search.reset}>
        <Form.Item name='userId' label='用户ID'>
          <Input placeholder='请输入用户ID' />
        </Form.Item>
        <Form.Item name='userName' label='用户名称'>
          <Input placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item name='state' label='状态'>
          <Select style={{ width: 120 }}>
            <Select.Option value={0}>所有</Select.Option>
            <Select.Option value={1}>在职</Select.Option>
            <Select.Option value={2}>离职</Select.Option>
            <Select.Option value={3}>试用期</Select.Option>
          </Select>
        </Form.Item>
      </SearchForm>
      <div className='base-table'>
        <div className='header-wrapper'>
          <div className='title'>用户列表</div>
          <div className='action'>
            <Button type='primary' onClick={handleCreate}>
              新增
            </Button>
            <Button type='primary' danger onClick={handlePatchConfirm}>
              批量删除
            </Button>
          </div>
        </div>
        <Table
          bordered
          rowKey='userId'
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: userIds,
            onChange: selectedRowKeys => {
              setUserIds(selectedRowKeys as number[])
            },
          }}
          columns={columns}
          {...tableProps}
        />
      </div>
      <CreateUser
        mRef={userRef}
        update={() => {
          search.reset()
        }}
      />
      1
    </div>
  )
}

export default UserList
