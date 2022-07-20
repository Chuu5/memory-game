import { useEffect, useState } from "react"
import Card from "./components/card"


function App() {

  const [characters, setCharacters] = useState([
    {
      name: "Surtr",
      image: "https://gamepress.gg/arknights/sites/arknights/files/2020-09/char_350_surtr_1.png"
    },
    {
      name: "Exusiai",
      image: "https://gamepress.gg/arknights/sites/arknights/files/2019-10/char_103_angel_1.png"
    },
    {
      name: "Red",
      image: "https://gamepress.gg/arknights/sites/arknights/files/2019-10/char_144_red_1.png"
    },
    {
      name: "La Pluma",
      image: "https://gamepress.gg/arknights/sites/arknights/files/2021-08/char_421_crow_1.png"
    },
    {
      name: "Schwarz",
      image: "https://gamepress.gg/arknights/sites/arknights/files/2019-10/char_340_shwaz_1_0.png"
    },
    {
      name: "Skadi",
      image: "https://gamepress.gg/arknights/sites/arknights/files/2021-05/char_1012_skadi2_1.png"
    }, 
    {
      name: "Sora",
      image: "https://gamepress.gg/arknights/sites/arknights/files/2019-10/char_101_sora_1.png"
    },
    {
      name: "Zima",
      image: "https://gamepress.gg/arknights/sites/arknights/files/2019-10/char_115_headbr_1.png"
    },
    {
      name: "Irene",
      image: "https://gamepress.gg/arknights/sites/arknights/files/2022-05/char_4009_irene_1.png"
    },
    {
      name: "Goldenglow",
      image: "https://gamepress.gg/arknights/sites/arknights/files/2022-02/char_377_gdglow_1.png"
    }
  ])

  const [charactersClicked, setCharactersCliked] = useState([])

  const [score, setScore] = useState(0)

  const [highScore, setHighScore] = useState(0)

  function shuffleArray(name) {
    let array = characters.concat()

    setCharactersCliked([...charactersClicked, name])
    
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // O que acontece aqui é até que simplês, temos a constante J que randomiza um número de 0 a i, e damos o valor do array[i] o valor do array[j] e vice-versa 
    setCharacters(array)
    return 0
  }
  // Função feita para randomizar os personagens a cada clique

  useEffect( () => {

    function verifyArray() {
      for(let i = 0; i < charactersClicked.length - 1; i++) {

        for(let j = 0; j < charactersClicked.length; j++) {
          if (charactersClicked[i] === charactersClicked[j]
            && i !== j) {
            return false
          }
        }
      }
      return true
    }
    // Verifica se possui algum personagem clickado 2 vezes
    if(verifyArray() && charactersClicked.length > 0) {
      setScore(score + 1)
    } else if(!verifyArray()) {
      setCharactersCliked([])
      if(score >= highScore) {
        setHighScore(score)
      }
      setScore(0)
    }
  }, [charactersClicked])


  return (
    <div className="container">
      <div className="title">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Arknights_English_Release_Logo.svg/1200px-Arknights_English_Release_Logo.svg.png" alt="" />
          </div>
          
          <div>
            <h4>Score: {score}</h4>
            <h4>Max Score: {highScore}</h4>
          </div>
          <h4>Rules: Get Point by clicking in any card, but don't click the same card twice</h4>
      </div>
      <div className="cards">
        {characters.map( (character) => {
          return <Card key={character.name} 
          onClick={() => shuffleArray(character.name)}
          image={character.image} />
        })}
      </div>
    </div>
  )
}

export default App
