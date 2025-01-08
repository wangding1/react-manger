import { Order } from '@/types/api'
import { IModalDetailProp } from '@/types/modal'
import { Modal } from 'antd'
import { useImperativeHandle, useState } from 'react'

function OrderRoute(props: IModalDetailProp<Order.OrderItem>) {
  const [visible, setVisible] = useState(false)
  const [detail, setDetail] = useState<Order.OrderItem>()
  const [trackAni, setTrackAni] = useState<{
    cancel: () => void
  }>()

  useImperativeHandle(props.mRef, () => {
    return {
      open(record) {
        setDetail(record)
        setVisible(true)
        setTimeout(() => {
          renderMap(record)
        })
      },
    }
  })

  function renderMap(detail: Order.OrderItem) {
    let map = new window.BMapGL.Map('orderRouteMap')
    map.enableScrollWheelZoom(true)
    map.centerAndZoom(detail.cityName, 17)
    const path = detail.route || []
    var point = []
    for (var i = 0; i < path.length; i++) {
      point.push(new window.BMapGL.Point(path[i].lng, path[i].lat))
    }
    // 优化 Polyline 的样式
    var pl = new window.BMapGL.Polyline(point, {
      strokeColor: 'blue', // 线条颜色
      strokeWeight: 6, // 线条宽度
      strokeOpacity: 0.8, // 线条透明度
      strokeStyle: 'solid', // 线条样式
    })
    setTimeout(start, 1000)
    function start() {
      const trackAni = new window.BMapGLLib.TrackAnimation(map, pl, {
        overallView: true,
        tilt: 30,
        duration: 20000,
        delay: 300,
      })
      trackAni.start()
      setTrackAni(trackAni)
    }
  }
  function handleCancel() {
    setVisible(false)
    trackAni?.cancel()
  }
  return (
    <Modal title='地图打点' width={1100} open={visible} footer={false} onCancel={handleCancel}>
      <div id='orderRouteMap' style={{ height: 500 }}></div>
    </Modal>
  )
}

export default OrderRoute
