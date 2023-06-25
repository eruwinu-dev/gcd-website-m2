import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"

import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
    type DehydratedState,
} from "@tanstack/react-query"
import { useState } from "react"
import { usePageLoading } from "../hooks/generic/usePageLoading"

function MyApp({
    Component,
    pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
    const [queryClient] = useState(() => new QueryClient())
    const { loading } = usePageLoading();

    return (
        <QueryClientProvider client={ queryClient }>
            <Hydrate state={ pageProps.dehydratedState }>
                <Layout loading={ loading }>
                    <Component { ...pageProps } />
                </Layout>
            </Hydrate>
        </QueryClientProvider>
    )
}

export default MyApp
