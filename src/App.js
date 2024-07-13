import './App.css';
import BasketballPlayerCard from './BasketballPlayerCard';

function App() {
  const player = {
    name: 'LeBron James',
    position: 'Forward',
    image: "https://cdn.britannica.com/82/212182-050-50D9F3CE/basketball-LeBron-James-Cleveland-Cavaliers-2018.jpg",
    stats: {
        pointsPerGame: 27.2,
        assistsPerGame: 7.4,
        reboundsPerGame: 7.4
    }
};
  return (
    <div>
     <BasketballPlayerCard
     name={player.name} 
     position={player.position} 
     image={player.image} 
     stats={player.stats} 
     />
    </div>
  );
}

export default App;
