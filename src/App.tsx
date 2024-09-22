// App.tsx

// Importation du hook useState depuis React, utilisé pour gérer l'état du composant.
import { useState } from 'react';

// Importation des composants Chakra UI
import { Button, Avatar, Box, Text, Flex, ChakraProvider } from '@chakra-ui/react';

// Importation du logo React et Vite
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

// Importation de la feuille de style CSS pour appliquer des styles au composant.
import './App.css';

// Déclaration du composant fonctionnel principal 'App'.
function App() {
  // State pour gérer l'affichage du profil
  const [showProfile, setShowProfile] = useState(false);

  // Les données de l'utilisateur à afficher dans la fiche profil
  const utilisateur = {
    photo: '/images/eau4.jpg',
    nom: 'Eau',
    prenom: 'Spa',
    email: 'eau@spa.com',
  };

  // Ce qui est retourné est le JSX (JavaScript XML), qui est la structure d'affichage du composant.
  return (
    <ChakraProvider>
      <div>
      <h1>Exercice 1 React: Profil Card</h1>

        {/* Bouton pour afficher ou cacher la carte profil (boutton de départ) */}
        <Button onClick={() => setShowProfile(!showProfile)}>
          {showProfile ? 'Cacher le profil' : 'Voir le profil'}
        </Button>

        {/* <h2>Ajout titre (git checkout -b step1-ajout-titre)</h2>

        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}

        {/* <h1>Vite + React</h1> */}

        

        {/* Compteur */}
        {/* <div className="card">
          <button onClick={() => setShowProfile((count) => !count)}>
            count is {showProfile ? '1' : '0'}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}

        {/* Si showProfile est true, on affiche la carte profil */}
        {showProfile && (
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            maxW="300px"
            bg="white"
            boxShadow="lg"
            mt={5}
          >
            <Flex alignItems="center">
              <Avatar size="lg" name={`${utilisateur.nom} ${utilisateur.prenom}`} src={utilisateur.photo} mr={4} />
              <Box>
                <Text fontWeight="bold" fontSize="lg">
                  {utilisateur.nom} {utilisateur.prenom}
                </Text>
                <Text color="gray.500">{utilisateur.email}</Text>
              </Box>
            </Flex>
          </Box>
        )}
      </div>
    </ChakraProvider>
  );
}

// Exportation du composant 'App' pour pouvoir l'utiliser dans d'autres fichiers.
export default App;
