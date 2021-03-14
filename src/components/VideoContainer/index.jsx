import styles from '../../styles/modules/VideoContainer.module.css';

export default function VideoContainer(){
  return(
    <div className="container pt-9">
      
      <div className="flex flex-col">
        <div className={styles.videoWrapper}>
          <iframe src="https://player.vimeo.com/video/490748319?color=9e3ccf&title=0&byline=0&portrait=0" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
          >
          </iframe>
        </div>

      <div className={`${styles.videoWrapper} mt-6`}>
          
          <div className={styles.videoInfo}>
              <h1>
                Nome da Lição
              </h1>

            <div className={styles.proximaLicao}>
              <span>Próxima lição:</span>
              <button className={styles.buttonAvancar}>
                Avançar
              </button>
            </div>
          </div>

          
      </div>
        
      </div>

    </div>
  )
}