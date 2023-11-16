// import { useState,  useRef, useCallback } from 'react'; //useEffect,

// const useOutsideClick = (initialValue: boolean) => {

//   const [isActive, setIsActive] = useState(initialValue);
//   const ref = useRef(null);

  
//   const handleClick = (e: MouseEvent) => {
//     if (ref.current && !ref.current.contains(e.target)) { // e.currentTarget
//       // console.log('IS ACTIVE :' ,isActive)
//       setIsActive(!isActive);
//     }
//   };

//   useCallback(() => {
//     if (isActive) {
//       console.log('fbjrbfrhjbfgr')
//       // document.addEventListener("click", handleClick);
//       setTimeout(() => {
//         document.addEventListener("click", handleClick)
//       }, )

//     }
//     return () => {
//       // console.log('12112121212')
//       document.removeEventListener("click", handleClick);
//     };

//   }, [handleClick, isActive]);

//   return { ref, isActive, setIsActive };
// };

// export default useOutsideClick;