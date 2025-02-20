import { Box, Container, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { HouseLine, List, PresentationChart } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { rotasUrls } from '../../rotas/rotasUrls'
import { paginaAtiva } from '../utilitarios/paginaAtiva'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  const navigate = useNavigate()

  const itensNavegacao = [
    {
      nome: 'Tela inicial',
      icone: HouseLine,
      linkTo: rotasUrls.home,
      ativo: paginaAtiva('/'),
    },
    {
      nome: 'Meus benchmarks',
      icone: PresentationChart,
      linkTo: rotasUrls.benchmarkListagem,
      ativo: paginaAtiva('/benchmarks'),
    },
  ]

  return (
    <Container
      display={{ base: 'flex', lg: 'none' }}
      w={'100vw'}
      bg={'#576A7A'}
      height={isOpen ? '26%' : '60px'}
      overflow="hidden"
      transition="height 0.3s ease-in-out"
      zIndex={99}
      pos={'absolute'}
      left={0}
      top={0}
      flexDirection={'column'}>
      <Flex justifyContent={'space-around'}>
        <Flex
          alignItems={'center'}
          fontSize={'25px'}
          width={'100%'}
          justifyContent={'space-between'}
          px="30px"
          py={'5px'}
          w="100%">
          <Flex width="80px" h="40px" justifyContent={'center'}>
            <Image
              src="public/logo.png"
              w={'160px'}
              h="auto"
              backgroundSize={'contain'}
            />
          </Flex>
          <Flex>
            <List
              size={32}
              color="white"
              cursor={'pointer'}
              onClick={toggleMenu}
            />
          </Flex>
        </Flex>
      </Flex>

      <Box color={'white'} w="100">
        <Flex flexDir={'column'} gap={'1rem'}>
          <Flex display="flex" flexDirection={'column'} gap="8px">
            <Flex
              alignItems={'center'}
              gap={'10px'}
              bg={'#576A7A'}
              cursor={'pointer'}
              flexDir={'column'}
              h="40px">
              {itensNavegacao.map((i, idx) => (
                <Flex
                  key={idx}
                  alignItems={'center'}
                  gap="6px"
                  bg={i.ativo ? '#ffffff3c' : 'transparent'}
                  borderRadius={'10px'}
                  cursor="pointer"
                  onClick={() => navigate(i.linkTo)}
                  h="60px"
                  w={'100%'}
                  px="5px"
                  mt="20px">
                  <Icon as={i.icone} fontSize={28} color={'white'} />
                  <Text color="white" fontWeight={'600'}>
                    {i.nome}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}
