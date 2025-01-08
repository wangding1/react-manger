import { Select } from 'antd'
import { useEffect, useState } from 'react'
export default function OrderCluster() {
  const [cityId, setCityId] = useState(10001)
  useEffect(() => {
    getCityData()
  }, [cityId])

  const getCityData = async () => {
    const data = [
      { lng: 116.44226108204762, lat: 39.91408989745266, id: 0.30902411884165626 },
      { lng: 116.44800789265264, lat: 39.91425726093665, id: 0.8961388971839601 },
      { lng: 116.45245694095733, lat: 39.914207606926524, id: 0.21255869982818965 },
      { lng: 116.45683271489061, lat: 39.914071723261344, id: 0.8561098613591402 },
      { lng: 116.46070767805712, lat: 39.91404977106062, id: 0.8702076913425845 },
      { lng: 116.4648035573655, lat: 39.91390053756607, id: 0.03674805747819687 },
      { lng: 116.46846013024555, lat: 39.9140307768609, id: 0.8050183177555936 },
      { lng: 116.46842533941215, lat: 39.917931189538045, id: 0.5414543514514152 },
      { lng: 116.46849798843297, lat: 39.92262958827729, id: 0.6819878714733043 },
      { lng: 116.4683450075436, lat: 39.926821396660536, id: 0.6910439230893124 },
      { lng: 116.46834297126468, lat: 39.93112857565655, id: 0.5093748104280622 },
      { lng: 116.46836836851737, lat: 39.934995449784495, id: 0.23069882835477085 },
    ]
    renderMap(data)
  }

  const renderMap = (data: Array<{ lng: string; lat: string }>) => {
    const map = new window.BMapGL.Map('clusterMap')
    map.enableScrollWheelZoom()
    const zoomCtrl = new window.BMapGL.ZoomControl()
    map.addControl(zoomCtrl)
    map.centerAndZoom('北京', 12)

    const markers = []
    for (let i = 0; i < data.length; i++) {
      const { lng, lat } = data[i]
      const point = new window.BMapGL.Point(lng, lat)
      markers.push(new window.BMapGL.Marker(point))
    }
    if (markers.length > 0) {
      new window.BMapLib.MarkerClusterer(map, { markers: markers })
    }
  }
  return (
    <div style={{ backgroundColor: '#fff', padding: 10 }}>
      <div id='clusterMap' style={{ height: 'calc(100vh - 192px)' }}></div>
    </div>
  )
}
