//imgs
import explodindo from './assets/Imagens/leaozao.jpg'
import leao from './assets/Imagens/explodindo.mp4'

import './App.css'

function App() {

  return (
    <>
      <div>

      <a href="https://react.dev" target="_blank">
          <img src={explodindo} alt="explodindo" className='imagem' />
        </a>
        <a href="https://react.dev" target="_blank">
          <video loop autoPlay muted src={leao} alt="leao" className='imagem' />
        </a>
      </div>
      <h1 class="text">Testando o meu primeiro App em ReactJs</h1>
    </>
  )
}

export default App