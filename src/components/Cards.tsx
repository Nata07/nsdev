import styles from '../styles/components/Cards.module.css';
import { Badge } from './Badge';

export function Cards() {
  function onMouseEnter() {
    // new Audio('/bite.mp3').play();
  }
  return (
    <>
      <div className={styles.projects}>
        <h2>Projects</h2>

        <div className={styles.main}>
          <div className={styles.cards}>
            <a href="https://nsmoveit.vercel.app/" target="_blank" 
              onMouseEnter={onMouseEnter}
            >
              <div className={styles.card}>
                <div>
                  <p>Projeto de estudo</p>
                  <div className={styles.badge}>
                    <Badge tech="nextjs">nextjs</Badge>
                    <Badge tech="reactjs">reactjs</Badge>
                  </div>
                </div>
                <h3>NS Move.It</h3>
                <span>
                  Projeto desenvolvido na quarta edição da Next Level Week da Rocketseat com Next.js.
                  O projeto é uma aplicação com base na técnica Pomodoro, destinada a desenvolvedores 
                  para auxiliar no cuidado da sua saúde e postura.
                </span>
              </div>
            </a>
          </div>
          <div className={styles.cards}>
            <a href="https://github.com/Nata07/gostack-gobarber-server" target="_blank" 
              onMouseEnter={onMouseEnter}
            >
              <div className={styles.card}>
                <div>
                  <p>Projeto de estudo</p>
                    <div className={styles.badge}>
                      <Badge tech="nodejs">nodejs</Badge>
                      <Badge tech="reactjs">reactjs</Badge>
                    </div>
                </div>
                <h3>GoBarber</h3>
                <span>
                  Projeto desenvolvido no curso GoStack 9.0 da Rocketseat.
                  A aplicação desenvolvida é um sistema para agendamentos 
                  de horários online para barbearias.      
                </span>
              </div>
            </a>
          </div>
          <div className={styles.cards}>
            <a href="https://github.com/Nata07/gostack-gorestaurant-web" target="_blank" 
              onMouseEnter={onMouseEnter}
            >
              <div className={styles.card}>
                <div>
                  <p>Projeto de estudo</p>
                  <div className={styles.badge}>
                    <Badge tech="reactjs">reactjs</Badge>
                  </div>
                </div>
                <h3>GoRestaurant</h3>
                <span>
                  Projeto solicitado como desafio no curso GoStack 9.0 da Rocketseat.
                  A aplicação web desenvolvida é um sistema para controle de 
                  entradas e saidas financeiras, com a possibilidade de importação
                  de arquivos no formato .CSV.
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
        
      <div className={styles.works}>
        <div className={styles.line}></div>
          <h2>Works</h2>
          <div className={styles.cards}>
            <a href="https://web.smartcon.app/" target="_blank" 
              onMouseEnter={onMouseEnter}>
              <div className={styles.card}>
                <div>
                  <p>Experiência de trabalho</p>
                  <div className={styles.badge}>
                  <div className={styles.badge}>
                    <Badge tech="nodejs">nodejs</Badge>
                    <Badge tech="reactjs">reactjs</Badge>
                  </div>
                  </div>
                </div>
                <h3>SmartCon</h3>
                <span>
                  Projeto nasceu nessa pandemia, como o objetivo de ajudar 
                  pessoas, que precisam realizar agendamentos de consultas na região.
                  O projeto é um sistema, onde usuários se cadastrem e possam agendar 
                  consultas online. <br/>
                  <small>Projeto em desenvolvimento.</small>                    
                </span>
              </div>
            </a>
        </div>
      </div>
    </>
  )
}