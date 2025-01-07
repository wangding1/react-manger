import SearchForm from '@/components/SearchForm'
import { Form, Button, Input, Select, Table, Space, Modal } from 'antd'
import { Order, User } from '@/types/api'
import type { TableProps } from 'antd'
import { formatDate } from '@/utils/index'
import { getOrderList, delOrder } from '@/api'
import { message } from '@/utils/AntdGlobal'
import { useAntdTable } from 'ahooks'
import { formatMoney } from '@/utils'
import { useRef } from 'react'
import { IAction } from '@/types/modal'
function OrderList() {
  const [form] = Form.useForm()
  const userRef = useRef<{
    open: (type: IAction, data?: Order.OrderItem) => void
  }>()
  const columns: TableProps<Order.OrderItem>['columns'] = [
    {
      title: '订单编号',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: '城市',
      dataIndex: 'cityName',
      key: 'cityName',
      width: 80,
    },
    {
      title: '下单地址',
      dataIndex: 'startAddress',
      key: 'startAddress',
      width: 160,
      render(_, record) {
        return (
          <div>
            <p>开始地址：{record.startAddress}</p>
            <p>结束地址：{record.endAddress}</p>
          </div>
        )
      },
    },
    {
      title: '下单时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 120,
      render(createTime) {
        return formatDate(createTime)
      },
    },
    {
      title: '订单价格',
      dataIndex: 'orderAmount',
      key: 'orderAmount',
      render(orderAmount) {
        return formatMoney(orderAmount)
      },
    },
    {
      title: '订单状态',
      dataIndex: 'state',
      key: 'state',
      render(state) {
        if (state === 1) return '进行中'
        if (state === 2) return '已完成'
        if (state === 3) return '超时'
        if (state === 4) return '取消'
      },
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '司机名称',
      dataIndex: 'driverName',
      key: 'driverName',
    },
    {
      title: '操作',
      key: 'action',
      render(_, record) {
        return (
          <Space>
            <Button type='text' onClick={() => handleDetail(record.orderId)}>
              详情
            </Button>
            <Button type='text' onClick={() => handleMarker(record.orderId)}>
              打点
            </Button>
            <Button type='text' onClick={() => handleRoute(record.orderId)}>
              轨迹
            </Button>
            <Button type='text' danger onClick={() => handleDel(record._id)}>
              删除
            </Button>
          </Space>
        )
      },
    },
  ]

  function getTableData({ current, pageSize }: { current: number; pageSize: number }, formData: User.SearchParams) {
    return getOrderList({
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
  function handleDel(orderId: string) {
    Modal.confirm({
      title: '确认删除',
      content: '确认删除该用户吗？',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        delOrder(orderId).then(() => {
          message.success('删除成功')
          search.reset()
        })
      },
    })
  }
  return (
    <div className='user-list'>
      <SearchForm form={form} initialValues={{ state: 1 }} submit={search.submit} reset={search.reset}>
        <Form.Item name='orderId' label='订单ID'>
          <Input placeholder='请输入用户ID' />
        </Form.Item>
        <Form.Item name='userName' label='用户名称'>
          <Input placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item name='state' label='订单状态'>
          <Select style={{ width: 120 }}>
            <Select.Option value={1}>进行中</Select.Option>
            <Select.Option value={2}>已完成</Select.Option>
            <Select.Option value={3}>超时</Select.Option>
            <Select.Option value={4}>取消</Select.Option>
          </Select>
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
          </div>
        </div>
        <Table bordered rowKey='userId' columns={columns} {...tableProps} />
      </div>
    </div>
  )
}

export default OrderList
