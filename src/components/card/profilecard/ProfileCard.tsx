// ProfileCard.tsx

import { Avatar, Box, Text, Flex } from '@chakra-ui/react';
//import { FiMoreVertical } from 'react-icons/fi';

type ProfileCardProps = {
  utilisateur: {
    photo: string;
    nom: string;
    prenom: string;
    email: string;
  };
};

function ProfileCard({ utilisateur }: ProfileCardProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      maxW="300px"
      bg="white"
      boxShadow="lg"
    >
      <Flex alignItems="center">
        <Avatar
          size="lg"
          name={`${utilisateur.nom} ${utilisateur.prenom}`}
          src={utilisateur.photo}
          mr={4}
        />
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            {utilisateur.prenom} {utilisateur.nom}
          </Text>
          <Text color="gray.500">{utilisateur.email}</Text>
        </Box>
      
      </Flex>
    </Box>
  );
}

export default ProfileCard;
