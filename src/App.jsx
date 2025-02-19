import { useState } from 'react'
import './App.css'

const App = () => {
  
  const [team, setTeam] = useState([])

  const [money, setMoney] = useState([])

  const [fighters, setFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  )

  const handleAddFighter = () => {
    console.log(handleAddFighter)
  }

  return (
    <>
    <h1>Zombie Fighters</h1>
    {fighters.map((fighter) => (
                <>
                <form>
                  <ul>
                   
                   <li><h3>Name: {fighter.name}</h3></li>
                  <button onClick={handleAddFighter}>Add</button>
                  <li><h3>Name: {fighter.price}</h3></li>
                  <button>Add</button>
                  <li><h3>Name: {fighter.strength}</h3></li>
                  <button>Add</button>
                   <li><h3>Name: {fighter.agility}</h3></li>
                  <button>Add</button>
                  <li><h3>Name: {fighter.img}</h3></li>
                  <button>Add</button>
                  </ul>
                  </form>
                </>
              ))        
            }
    </>

  )
}

export default App