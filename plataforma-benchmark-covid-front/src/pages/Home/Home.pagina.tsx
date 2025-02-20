import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { rotasUrls } from '../../rotas/rotasUrls'


export const Home = () => {
  const navigate = useNavigate()

  return (
    <Box w={'100vw'} h="100vh" display="flex" alignItems={'center'}>
      <Flex
        h="100%"
        w={{ base: '100%', lg: '50%' }}
        justifyContent={'center'}
        alignItems={'center'}
        p="20px"
        bg={{ base: '#d9d9d9', lg: 'white' }}>
        <Box
          height={{ base: '100%', lg: '500px' }}
          w="100%"
          gap={'20px'}
          display={'flex'}
          flexDir={'column'}
          justifyContent={{ base: 'center', lg: 'normal' }}>
          <Heading fontSize={{ base: '3xl', sm: '4xl' }} color="#76a7cf">
            Painel Covid Global
          </Heading>
          <Text fontSize={{ base: '11px', sm: '13px' }}>
            Acompanhe e compare os números da Covid-19 entre diferentes países
            de forma rápida e confiável. Crie benchmarks personalizados e
            analise dados atualizados para uma visão clara do impacto da
            pandemia.
          </Text>
          <Button
            bg="#354e63"
            borderRadius={'14px'}
            onClick={() => navigate(rotasUrls.benchmarkListagem)}>
            Entrar
          </Button>
        </Box>
      </Flex>
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        bg={'#d9d9d9'}
        h="100%"
        w="50%"
        justifyContent={'center'}
        alignItems={'center'}
        padding={'5px'}>
        <Image
          h={{ base: '360px', lg: '480px' }}
          w="auto"
          src="public/imgHome.svg"
        />
      </Flex>
    </Box>
  )
}
