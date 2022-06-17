import Head from 'next/head'
import Header from '../src/component/Header'
import Navbar from '../src/component/Navbar'
import Work from '../src/component/work/Work'
import Projects from '../src/component/project/Projects'
import Other from '../src/component/Other'

export default function Home( { work, projects, other }) {
  return (
    <div >
      <Head>
        <title>Xavier Nishikawa</title>
        <link rel="icon" href="/favicon.ico" />
        
        
      </Head>

      <main>
        <Header/>
        <Navbar/>
        <Work props={work}/>
        <Projects props={projects}/>
        <Other/>

      </main>

      
    </div>
  )
}

export const getStaticProps = async () => {
  const work = await fetch("https://berowra.xavier.deta.app/api/collection/qey11kq2wxox?content").then(r => r.json());
  const projects = await fetch("https://berowra.xavier.deta.app/api/collection/t7tp38g89mkw?content").then(r => r.json());
  const other = await fetch("https://berowra.xavier.deta.app/api/collection/k943xm98l8ea?content").then(r => r.json());
  return {
    props: {
      work,
      projects,
      other
    },
    revalidate: 10
  }
}
