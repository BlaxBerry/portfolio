import { useEffect, useMemo, useState } from 'react'

type WindowSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

const useWindowSize = () => {
  const getSize = (): WindowSize => {
    const { innerWidth: width } = window
    if (width < 576) return 'xs'
    else if (width >= 576 && width < 768) return 'sm'
    else if (width >= 768 && width < 992) return 'md'
    else if (width >= 992 && width < 1200) return 'lg'
    else if (width >= 1200 && width < 1400) return 'xl'
    else if (width >= 1400) return 'xxl'
    return 'lg'
  }

  const [windowSize, setWindowSize] = useState<WindowSize>(getSize())

  const onWindowResize = (): void => {
    setWindowSize(getSize())
  }

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    return () => window.removeEventListener('resize', onWindowResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isMobile = useMemo((): boolean => windowSize === 'xs', [windowSize])

  const isTextWrap = useMemo(
    (): boolean => window.innerWidth >= 1000,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [window.innerWidth]
  )

  return {
    windowSize,
    isMobile,
    isPC: !isMobile,
    isTextWrap,
  }
}

export default useWindowSize
