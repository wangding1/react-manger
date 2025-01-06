import { Button, Form, Input, Table, Space, Modal } from 'antd'
import { Dept } from '@/types/api'
import type { TableProps } from 'antd'
import { formatDate } from '@/utils/index'
import { useCallback, useEffect, useRef, useState } from 'react'
import { getDeptList, deleteDept } from '@/api'
import { message } from '@/utils/AntdGlobal'
import { IAction } from '@/types/modal'
import CreateDept from './CreateDept'

function DeptList() {
  const [form] = Form.useForm()
  const [data, setData] = useState<Dept.DeptItem[]>([])
  const deptRef = useRef<{
    open: (type: IAction, data?: Dept.EditParams | { parentId: string }) => void
  }>()
  const handleSearch = useCallback(() => {
    const values = form.getFieldsValue()
    getDeptList(values).then(res => {
      setData(res)
    })
  }, [])
  useEffect(() => {
    handleSearch()
  }, [])

  const columns: TableProps<Dept.DeptItem>['columns'] = [
    {
      title: '部门名称',
      dataIndex: 'deptName',
      key: 'deptName',
      width: 200,
    },
    {
      title: '负责人',
      dataIndex: 'userName',
      key: 'userName',
      width: 150,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      render(updateTime) {
        return formatDate(updateTime)
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render(createTime) {
        return formatDate(createTime)
      },
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render(_, record) {
        return (
          <Space>
            <Button type='text' onClick={() => handleSubCreate(record._id)}>
              新增
            </Button>
            <Button type='text' onClick={() => handleEdit(record)}>
              编辑
            </Button>
            <Button type='text' danger onClick={() => handleDelete(record._id)}>
              删除
            </Button>
          </Space>
        )
      },
    },
  ]

  function handleReset() {
    form.resetFields()
    handleSearch()
  }
  function handleCreate() {
    deptRef.current?.open('create')
  }
  function handleSubCreate(id: string) {
    deptRef.current?.open('create', { parentId: id })
  }
  function handleEdit(record: Dept.DeptItem) {
    deptRef.current?.open('edit', record)
  }
  function handleDelete(id: string) {
    Modal.confirm({
      title: '确认删除',
      content: '确认删除该部门吗？',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        deleteDept({ _id: id }).then(() => {
          message.success('删除成功')
          handleSearch()
        })
      },
    })
  }
  return (
    <div>
      <Form className='search-form' layout='inline' form={form}>
        <Form.Item label='部门名称' name='deptName'>
          <Input placeholder='部门名称' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' className='mr10' onClick={handleSearch}>
            搜索
          </Button>
          <Button type='default' onClick={handleReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
      <div className='base-table'>
        <div className='header-wrapper'>
          <div className='title'>部门列表</div>
          <div className='action'>
            <Button type='primary' onClick={handleCreate}>
              新增
            </Button>
          </div>
        </div>
        <Table bordered rowKey='_id' columns={columns} dataSource={data} pagination={false} />
      </div>
      <CreateDept mRef={deptRef} update={handleSearch} />
    </div>
  )
}

export default DeptList
