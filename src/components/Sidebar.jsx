import { Box, VStack, Text } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box
      w='250px'
      h='100vh'
      bg='gray.200'
      p='4'
      position='fixed'
      left='0'
      top='0'
      boxShadow='lg'
    >
      <VStack spacing='4' align='stretch'>
        <Text fontSize='xl' fontWeight='bold'>
          Menu
        </Text>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        {/* Tambahkan item sesuai kebutuhan */}
      </VStack>
    </Box>
  );
};

export default Sidebar;
