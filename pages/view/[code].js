import Head from 'next/head';
import { useRouter } from 'next/router'

const Single = () => {
    const router = useRouter()
    const { code } = router.query

    return (
        <div>
            <Head>
                <title>{code}</title>
            </Head>
            <p>Post: {code}</p>
        </div>
    )
}

export default Single