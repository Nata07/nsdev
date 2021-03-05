import { GetStaticProps } from 'next';
import { Cards } from '../components/Cards';
import { Profile } from '../components/Profile';
import SEO from '../components/SEO';
import styles from '../styles/home.module.css';

export default function Home() {

  return (
    <>
      <SEO title="Inicio" description="Site pessoal Natanael"/>
      <div className={styles.container}>
          <Profile />
        <div className={styles.content}>
          <Cards />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 10
  }
}