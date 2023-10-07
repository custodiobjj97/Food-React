import React,{useRef} from "react";
export const CreateContext = React.createContext()

const Scroll=({children})=>{
  const elementRef= useRef(null)
  const handleScroll=()=>{
    const element= elementRef.current
    if(element){
      const top = element.getBoundingClientRect().top
      const heightHalf= window.innerHeight * 0.6
      const isVesible = (top - heightHalf) < 0
      if(isVesible){
        element.classList.add('visible')
      }
    }
  }
  return (
    <CreateContext.Provider value={{elementRef, handleScroll}}>
       {children}
    </CreateContext.Provider>
  )
}
export default Scroll


