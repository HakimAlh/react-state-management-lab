import { useState } from 'react'
import './App.css'

const App = () => {
  
  const [teams, setTeams] = useState([])

  const [money, setMoney] = useState(100)

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

  // const [formData, setFormData] = () => {

  // }
  const handleAddFighter = (newFighter) => {
    const newFighterArr = [...teams, newFighter]
    setTeams(newFighterArr)
    setMoney(money - `${fighters.price}`)
    console.log(newFighterArr.price)
    {newFighterArr.length === 0 ? 'No teams to display (Add a fighter)' : 
      teams.map((team) => (
        <>
          <h3>{team.name}</h3>  
          
         
        </>
      ))        
}

  }


  

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h3>Money: {money} </h3>
    <h3>Team Strength:</h3>
    <h3>Team Agility</h3>
    <h3>Team</h3>
      {teams.map((team) => (
                <>
                  <h3>{team.name}</h3>
                  <h3>{team.price}</h3>
              
                </>
              ))   }
    <hr />
    
    {fighters.map((fighter) => (
                <>
                  <ul>
                   <li>
                   <hr />
                    <h3>Name: {fighter.name}</h3>
                    <button onClick={() => handleAddFighter({name: `${fighter.name}`})}>Add</button>
                    <hr />
                <h3>Price: {fighter.price}</h3>
                  <button>Add</button>
                  <h3>Strength: {fighter.strength}</h3>
                  <button>Add</button>
                   <h3>Agility: {fighter.agility}</h3>
                  <button>Add</button>
                </li>
                  </ul>

                </>
              ))        
            }
    </>

  )
}

export default App