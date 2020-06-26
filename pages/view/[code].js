import Head from 'next/head'
import { useRouter } from 'next/router'
import Single from '../../components/Single'

const Code = () => {
    const router = useRouter()
    const { code } = router.query

    return (
        <div>
            <Head>
                <title>{code}</title>
            </Head>
            <Single code={code}/>
        </div>
    )
}

export default Code