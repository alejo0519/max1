import React, { useState, useEffect, use } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'

import './styles/module.css'
const joma=<img src="https://i.imgur.com/LAUQGgJ_d.jpeg?maxwidth=520&shape=thumb&fidelity=high" alt="joma" />
const balon=<img src="https://i.imgur.com/kozGFCq_d.jpeg?maxwidth=520&shape=thumb&fidelity=high" alt="balon" />
const canilleras=<img src="https://i.imgur.com/YnnkHz7_d.jpeg?maxwidth=520&shape=thumb&fidelity=high" alt="canilleras" />

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>{joma}</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>{balon}</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>{canilleras}</animated.div>,
]

export default function Carrusel() {
  const [index, setIndex] = useState(0)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from:  { opacity: 0, transform: 'translate3d(100%,0,0) '},
    enter: { opacity: 1,   transform: 'translate3d(0%,0,0) '},
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0) '},
    config: { duration: 800 },

})
  useEffect(() => {
    transRef.start()
  }, [index,transRef])

  useEffect(() => {
    const intervalo = setInterval(()=>{
      setIndex((prev) => (prev + 1) % pages.length)
    }, 2000)
    return () => clearInterval(intervalo)
  },[])
  return (
    <div className='imagenes' >
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}
