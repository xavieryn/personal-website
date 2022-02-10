import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../src/component/Header'
import Navbar from '../src/component/Navbar'
import Work from '../src/component/Work'
import Projects from '../src/component/Projects'
import Other from '../src/component/Other'

export default function Home( { posts, c }) {
  return (
    <div >
      <Head>
        <title>Xavier Nishikawa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
        
      </Head>

      <main>
        <Header/>
        <Navbar/>
        <Work props={c}/>
        <Projects props={posts}/>
        <Other/>

      </main>

      
    </div>
  )
}

export const getStaticProps = async () => {
  const c = await fetch("https://berowra.xavier.deta.app/api/collection/qey11kq2wxox?content").then(r => r.json());
  const posts = await fetch("https://berowra.xavier.deta.app/api/collection/t7tp38g89mkw?content").then(r => r.json());

  return {
    props: {
      c,
      posts,
    },
    revalidate: 10
  }
}
