import { Descriptions, Card, Button } from 'antd'
import styles from './index.module.less'
import useStore from '@/store'
import { formatState, formatNum, formatMoney } from '@/utils'
import { useEffect, useState } from 'react'
import { useCharts } from '@/hook/useCharts'
import { getLineData, getPieCityData, getPieAgeData, getRadarData, getReportData } from '@/api'
import { Dashboard } from '@/types/api'

function DashBoard() {
  const userInfo = useStore(state => state.userInfo)
  const [lineRef, lineChart] = useCharts()
  const [pieRef1, pieChart1] = useCharts()
  const [pieRef2, pieChart2] = useCharts()
  const [radarRef, radarChart] = useCharts()
  const [report, setReport] = useState<Dashboard.ReportData>()
  useEffect(() => {
    renderLineChart()
  }, [lineChart])
  useEffect(() => {
    renderPieChart1()
  }, [pieChart1])
  useEffect(() => {
    renderPieChart2()
  }, [pieChart2])
  useEffect(() => {
    renderRadarChart()
  }, [radarChart])
  useEffect(() => {
    getReportData().then(data => {
      setReport(data)
    })
  }, [])
  const renderLineChart = () => {
    if (!lineChart) return
    getLineData().then(data => {
      lineChart?.setOption({
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['订单', '流水'],
        },
        grid: {
          left: 50,
          right: 50,
          bottom: 20,
        },
        xAxis: {
          data: data.label,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '订单',
            type: 'line',
            data: data.order,
          },
          {
            name: '流水',
            type: 'line',
            data: data.money,
          },
        ],
      })
    })
  }
  const renderPieChart1 = () => {
    if (!pieRef1) return
    getPieCityData().then(data => {
      pieChart1?.setOption({
        title: {
          text: '司机城市分布',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: '城市分布',
            type: 'pie',
            radius: '50%',
            data,
          },
        ],
      })
    })
  }
  const renderPieChart2 = () => {
    if (!pieRef2) return
    getPieAgeData().then(data => {
      pieChart2?.setOption({
        title: {
          text: '司机年龄分布',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: '年龄分布',
            type: 'pie',
            radius: [50, 180],
            roseType: 'area',
            data,
          },
        ],
      })
    })
  }
  const renderRadarChart = () => {
    if (!radarChart) return
    getRadarData().then(data => {
      radarChart?.setOption({
        legend: {
          data: ['司机模型诊断'],
        },
        radar: {
          indicator: data.indicator,
        },
        series: [
          {
            name: '模型诊断',
            type: 'radar',
            data: data.data,
          },
        ],
      })
    })
  }
  const handleRefresh = () => {
    renderPieChart1()
    renderPieChart2()
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img
          className={styles.userImg}
          src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          alt=''
        />
        <Descriptions title='欢迎新同学，每天都要开心！'>
          <Descriptions.Item label='用户ID'>{userInfo.userId}</Descriptions.Item>
          <Descriptions.Item label='邮箱'>{userInfo.userEmail}</Descriptions.Item>
          <Descriptions.Item label='状态'>{formatState(userInfo.state)}</Descriptions.Item>
          <Descriptions.Item label='手机号'>{userInfo.mobile}</Descriptions.Item>
          <Descriptions.Item label='岗位'>{userInfo.job}</Descriptions.Item>
          <Descriptions.Item label='部门'>{userInfo.deptName}</Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className='title'>司机数量</div>
          <div className={styles.data}>{formatNum(report?.driverCount)}个</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总流水</div>
          <div className={styles.data}>{formatMoney(report?.totalMoney)}元</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总订单</div>
          <div className={styles.data}>{formatNum(report?.orderCount)}单</div>
        </div>
        <div className={styles.card}>
          <div className='title'>开通城市</div>
          <div className={styles.data}>{formatNum(report?.cityNum)}座</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card
          title='订单和流水走势图'
          extra={
            <Button type='primary' onClick={renderLineChart}>
              刷新
            </Button>
          }
        >
          <div ref={lineRef} className={styles.itemChart}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card
          title='司机分布'
          extra={
            <Button type='primary' onClick={handleRefresh}>
              刷新
            </Button>
          }
        >
          <div className={styles.pieChart}>
            <div ref={pieRef1} className={styles.itemPie}></div>
            <div ref={pieRef2} className={styles.itemPie}></div>
          </div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card
          title='模型诊断'
          extra={
            <Button type='primary' onClick={renderRadarChart}>
              刷新
            </Button>
          }
        >
          <div ref={radarRef} className={styles.itemChart}></div>
        </Card>
      </div>
    </div>
  )
}

export default DashBoard
