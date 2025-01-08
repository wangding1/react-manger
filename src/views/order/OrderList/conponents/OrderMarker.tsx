import { Order } from '@/types/api'
import { IModalDetailProp } from '@/types/modal'
import { message } from '@/utils/AntdGlobal'
import { Modal } from 'antd'
import { useImperativeHandle, useState } from 'react'

function OrderMarker(props: IModalDetailProp<Order.OrderItem>) {
  const [visible, setVisible] = useState(false)
  const [detail, setDetail] = useState<Order.OrderItem>()
  const [markers, setMarkers] = useState<{ lng: string; lat: string; id: number }[]>([])

  useImperativeHandle(props.mRef, () => {
    return {
      open(record) {
        setVisible(true)
        setDetail(record)
        setTimeout(() => {
          renderMap(record)
        })
      },
    }
  })
  function renderMap(detail: Order.OrderItem) {
    console.log(detail)
    const map = new window.BMapGL.Map('markerMap')
    map.centerAndZoom(detail.cityName, 12)
    var scaleCtrl = new window.BMapGL.ScaleControl() // 添加比例尺控件
    map.addControl(scaleCtrl)
    var zoomCtrl = new window.BMapGL.ZoomControl() // 添加缩放控件
    map.enableScrollWheelZoom()
    map.addControl(zoomCtrl)
    detail.route?.map(item => {
      createMarker(map, item.lng, item.lat)
    })
    // // 绑定事件
    map.addEventListener('click', function (e: any) {
      createMarker(map, e.latlng.lng, e.latlng.lat)
    })
  }
  const createMarker = (map: any, lng: string, lat: string) => {
    const id = Math.random()
    const marker = new window.BMapGL.Marker(new window.BMapGL.Point(lng, lat))
    markers.push({ lng, lat, id })
    marker.id = id
    const markerMenu = new window.BMapGL.ContextMenu()
    markerMenu.addItem(
      new window.BMapGL.MenuItem('删除', function () {
        map.removeOverlay(marker)
        const index = markers.findIndex(item => item.id === marker.id)
        markers.splice(index, 1)
        setMarkers([...markers])
      }),
    )
    setMarkers([...markers])
    marker.addContextMenu(markerMenu)
    map.addOverlay(marker)
  }

  function handleSubmit() {
    message.success('打点成功')
    setVisible(false)
  }
  function handleCancel() {
    setVisible(false)
    setMarkers([])
  }
  return (
    <Modal
      title='地图打点'
      okText='确定'
      cancelText='取消'
      width={1100}
      open={visible}
      onCancel={handleCancel}
      onOk={handleSubmit}
    >
      <div id='markerMap' style={{ height: 500 }}></div>
    </Modal>
  )
}

export default OrderMarker
