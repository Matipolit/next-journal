import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstEntry() {
    return (
        <Layout>
            <Head>
                <title>First entry</title>
            </Head>
          <h1>First Entry</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </Layout>
      );
  }