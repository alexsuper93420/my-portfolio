// pages/index.js (or app/page.tsx)
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box p={5}>
      <Heading mb={4}>Welcome to Chakra UI in Next.js!</Heading>
      <Text fontSize='lg'>This is a simple example using Chakra UI components.</Text>
    </Box>
  );
}