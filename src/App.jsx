import Card from "./components/card"
function App() {
  const data = [
    {
      id:1,
      name:"Joe",
      color:"salmon"
    },
    {
      id:2,
      name:"Logan",
      color:"cornflowerblue"
    },
    {
      id:3,
      name:"Maria",
      color:"deepskyblue"
    },
    {
      id:4,
      name:"Spencer",
      color:"teal"
    },
    {
      id:5,
      name:"Ryan",
      color:"deeppink"
    },{
      id:6,
      name:"Shiva",
      color:"orange"
    }
  ]

  function outputCards(){
    const cards = [];
    data.forEach(person=>{
      const newCard =<Card studentName={person.name} bg={person.color}/>
      cards.push(newCard);
    })
    return cards
  }

  return (
    <div>
      <h1 className="text-center">hello</h1>
      <h2>welcome!</h2>
      {/* {data.map(person=><Card studentName={person.name} bg={person.color}/>)} */}
      {outputCards()}
    </div>
  )
}

export default App
