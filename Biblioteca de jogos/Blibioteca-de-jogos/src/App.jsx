import { useState } from 'react'
import './App.css'

function App() {
  const [gameImage, setGameImage] = useState('')
  const [gameName, setGameName] = useState('')

  return (
    <>
      <section id='container'>
        <div className="form">
        <h1>Biblioteca de Jogos</h1>
      <form >

        <div className="gameImage">
          <label htmlFor="gameImage">Capa do jogo:</label>
          <input type="text" id="gameImage" name="gameImage" />
        </div>

        <div className="gameName">
          <label htmlFor="gameName">Nome do jogo:</label>
          <input type="text" id="gameName" name="gameName" />
        </div>

        <div className="gameDescription">
          <label htmlFor="gameDescription">Descrição do jogo:</label>
          <input type="text" id="gameDescription" name="gameDescription" />
        </div>

        <button type='submit' onClick={(event) => registerGame(event)}>Cadastrar</button>
        
      </form>
        </div>

        <div className="gameList">
          
        </div>
      
      </section>
      
    </>
  )
}

export default App
