import * as echarts from 'echarts'
import { RefObject, useEffect, useRef, useState } from 'react'

export const useCharts = (): [RefObject<HTMLDivElement>, echarts.EChartsType | undefined] => {
  const lineRef = useRef<HTMLDivElement>(null)
  const [chart, setCharts] = useState<echarts.EChartsType>()
  useEffect(() => {
    const myChart = echarts.init(lineRef.current as HTMLElement)
    setCharts(myChart)
  }, [])

  return [lineRef, chart]
}
