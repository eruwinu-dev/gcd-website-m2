import Router from "next/router"
import {useEffect, useState} from "react"

export const usePageLoading = () => {
    const {events} = Router
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const routeEventStart = () => {
            setLoading(true)
        }
        const routeEventEnd = () => {
            setLoading(false)
        }
        events.on("routeChangeStart", routeEventStart)
        events.on("routeChangeComplete", routeEventEnd)
        events.on("routeChangeError", routeEventEnd)
        return () => {
            events.off("routeChangeStart", routeEventStart)
            events.off("routeChangeComplete", routeEventEnd)
            events.off("routeChangeError", routeEventEnd)
        }
    }, [])

    return {loading}
}
