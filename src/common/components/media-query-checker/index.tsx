import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import configuration from './../../../setup/mq/configuration'

export default function MediaQueryChecker(props: { children: JSX.Element }) {

  const [size, setSize] = useState<string>()
  // const [height, setHeight] = useState<string>()
  const [orientation, setOrientation] = useState<string>()

  const isExtraSmallScreen = useMediaQuery({
    maxWidth: configuration.breakpoints.small - 1
  }, undefined, match => {
    if (match) setSize('xs')
  })

  const isSmallScreen = useMediaQuery({
    minWidth: configuration.breakpoints.small,
    maxWidth: configuration.breakpoints.medium - 1
  }, undefined, match => {
    if (match) setSize('s')
  })

  const isMediumScreen = useMediaQuery({
    minWidth: configuration.breakpoints.medium,
    maxWidth: configuration.breakpoints.large - 1
  }, undefined, match => {
    if (match) setSize('m')
  })

  const isLargeScreen = useMediaQuery({
    minWidth: configuration.breakpoints.large
  }, undefined, match => {
    if (match) setSize('l')
  })

/*
  const isLow = useMediaQuery({
    maxHeight: configuration.heightBreakpoints.high - 1
  }, undefined, match => {
    if (match) setHeight('low')
  })

  const isHigh = useMediaQuery({
    minHeight: configuration.heightBreakpoints.high
  }, undefined, match => {
    if (match) setHeight('high')
  })
*/

  const isPortrait = useMediaQuery({
    orientation: 'portrait'
  }, undefined, match => {
    if (match) setOrientation('portrait')
  })

  const isLandscape = useMediaQuery({
    orientation: 'landscape'
  }, undefined, match => {
    if (match) setOrientation('landscape')
  })

  const calcSize = () => {
    const sizeList = [
      {
        name: 'xs',
        condition: isExtraSmallScreen
      },
      {
        name: 's',
        condition: isSmallScreen
      },
      {
        name: 'm',
        condition: isMediumScreen
      },
      {
        name: 'l',
        condition: isLargeScreen
      }
    ]
    const result = sizeList.find(size => size.condition)?.name
    setSize(result ?? 'l')
  }

/*
  const calcHeight = () => {
    const heightList = [
      {
        name: 'low',
        condition: isLow
      },
      {
        name: 'high',
        condition: isHigh
      }
    ]
    const result = heightList.find(height => height.condition)?.name
    setHeight(result ?? 'high')
  }
*/

  const calcOrientation = () => {
    const orientationList = [
      {
        name: 'portrait',
        condition: isPortrait
      },
      {
        name: 'landscape',
        condition: isLandscape
      }
    ]
    const result = orientationList.find(size => size.condition)?.name
    setOrientation(result ?? 'portrait')
  }

  useEffect(() => {
    calcSize()
    // calcHeight()
    calcOrientation()
  }, [])

  useEffect(() => {
    if (!size) return
    document.documentElement.classList.remove('mq-xs')
    document.documentElement.classList.remove('mq-s')
    document.documentElement.classList.remove('mq-m')
    document.documentElement.classList.remove('mq-l')
    document.documentElement.classList.add(`mq-${size}`)
  }, [size])

/*
  useEffect(() => {
    if (!height) return
    document.documentElement.classList.remove('mq-low')
    document.documentElement.classList.remove('mq-high')
    document.documentElement.classList.add(`mq-${height}`)
  }, [height])
*/

  useEffect(() => {
    if (!orientation) return
    document.documentElement.classList.remove('mq-portrait')
    document.documentElement.classList.remove('mq-landscape')
    document.documentElement.classList.add(`mq-${orientation}`)
  }, [orientation])

  return props.children
}
