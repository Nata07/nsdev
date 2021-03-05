import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <>
    <div className={styles.profile}>
      <div>
        <div className={styles.header}>
          <div>
            <img src="/newavatar.png" width="150" alt=""/>
          </div>
          <div className="description">
            <h1>Olá, sou o Natanael.</h1>
            <p> A tecnologia é a maneira
              que eu uso para ajudar e transformar a vida das pessoas!  
              Entusiasta em inovações, apaixonado por programação e desenvolvimento web
              e um aventureiro no mundo UI/UX Design. <br/>
              <strong>O segredo para o sucesso é 
                acreditar, acreditar, acreditar, estudar, estudar, estudar, 
                praticar, praticar e praticar.
              </strong>
            </p>
          </div>
          <div className={styles.techs}>
            <img datatype="Node.JS" src="/node.svg" alt="Node.JS"/>
            <img datatype="ReactJS" src="/reactjs.svg" alt="ReactJS"/>
            <img datatype="NextJS" src="/nextjs.svg" alt="NextJS"/>
            <img datatype="Typescript" src="/typescript.svg" alt="Typescript"/>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <ul>
          <li><a target="_blank" href="https://linkedin.com/in/silvanatanael">Linkedin</a></li>
          <li><a target="_blank" href="https://app.rocketseat.com.br/me/natanaelsilva">Rocketseat</a></li>
          <li><a target="_blank" href="https://github.com/Nata07">Github</a></li>
          <li><a target="_blank" href="https://www.instagram.com/silvaanata/">Instagram</a></li>
          {/* <li><a target="_blank" href="">Twitter</a></li> */}
        </ul>
      </div>
    </div>
    </>
  )
}