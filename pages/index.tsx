import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: React.FunctionComponent = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
