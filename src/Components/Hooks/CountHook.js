import React, { useEffect, useRef, useState } from "react";

const CountHook = () => {
    const [count, setCount] = useState(0)
    const interREf = useRef(null)

    useEffect(() => {
        interREf.current = setInterval(() =>{
            setCount(count + 1)
        },1000)
        return () => {
            clearInterval(interREf.current)
        }
    },[count])

    return (
        <div>
            count == {count}
        </div>
    )
}

export default CountHook;