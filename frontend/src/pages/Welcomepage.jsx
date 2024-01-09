import { Box, Button, Text, Container, Flex } from '@chakra-ui/react';

const WelcomePage = () => {
    return (
        <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
            <Box>
                {/* Hero Section */}
                <Container maxW="container.xl" centerContent>
                    <Box padding="4"  textAlign="center">
                    <Text fontSize="6xl" fontWeight="bold">AcadEase.</Text>
                    <Text fontSize="2xl" color="gray.600" padding="4">A better way to understand things well</Text>
                        <Button size="lg" colorScheme="teal">
                            Get Started
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Flex>
    );
};

export default WelcomePage;
