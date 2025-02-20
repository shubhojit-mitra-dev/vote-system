import { useState } from 'react';

function App() {
  const parties = [
    {
      name: 'Bahujan Samaj Party',
      id: 'bsp',
      symbol: 'https://assets.allpngfree.com/storage/png/bahujan-samaj-party-logo-png-images--thumbnail-1673701310.png',
    },
    {
      name: 'Aam Aadmi Party',
      id: 'aap',
      symbol: 'https://www.clipartmax.com/png/middle/176-1762155_aam-aadmi-party-logo-png.png',
    },
    {
      name: 'Bharatiya Janata Party',
      id: 'bjp',
      symbol: 'https://www.kindpng.com/picc/m/247-2478665_bjp-logo-png-photo-bharatiya-janata-party-transparent.png',
    },
    {
      name: 'Indian National Congress',
      id: 'inc',
      symbol: 'https://1.bp.blogspot.com/-RAxJ-oc6JGg/TjJ5PWXk6DI/AAAAAAAAAJw/nYi3Nsvui8Q/s1600/congress_india_logo.jpg',
    },
    {
      name: 'All India Trinamool Congress',
      id: 'tmc',
      symbol: 'https://th.bing.com/th/id/OIP.IvIIGW1Kq8ixjKae5cDUCQHaIV?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Communist Party of India (Marxist)',
      id: 'cpi',
      symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cpm_election_symbol.svg/300px-Cpm_election_symbol.svg.png',
    },
  ];

  const [votes, setVotes] = useState({
    bsp: 0,
    aap: 0,
    bjp: 0,
    inc: 0,
    tmc: 0,
    cpi: 0,
  });

  const [voted, setVoted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleVote = (partyId) => {
    if (!voted) {
      setVotes((initialVotes) => ({
        ...initialVotes,
        [partyId]: initialVotes[partyId] + 1,
      }));
      setVoted(true);
    }
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl text-white w-full max-w-lg">
      <img src="https://png.pngtree.com/png-clipart/20240115/ourmid/pngtree-ribbon-cute-illustration-png-image_11438625.png" alt="ribbon" className='absolute -rotate-42 h-24' />
      <div className='p-10'>
        <h1 className="text-2xl font-bold text-center mb-6">
          POOKIE Voting Machine
        </h1>
        <div className="bg-gray-700 p-4 rounded-lg">
          <ol className="space-y-4">
            {parties.map((party) => (
              <li
              key={party.id}
              className="grid grid-cols-4 items-center gap-4 bg-gray-600 p-3 rounded-md"
              >
                <img
                  src={party.symbol}
                  alt={`${party.name} Symbol`}
                  className="h-10 w-10 object-contain"
                  />
                <span className="font-semibold col-span-2 text-sm text-white">{party.name}</span>
                <button
                  onClick={() => handleVote(party.id)}
                  disabled={voted}
                  className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 ${
                    voted ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  >
                  {showResults ? votes[party.id] : 'VOTE'}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex justify-around mt-6">
          <button
            onClick={handleShowResults}
            className="bg-yellow-500 hover:bg-yellow-700 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
            RESULTS
          </button>
          <button
            onClick={() => {
              setVoted(false);
              setShowResults(false);
            }}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            >
            RESET
          </button>
        </div>
      </div>
              
                    </div>
    </div>
</>
  );
}

export default App;
