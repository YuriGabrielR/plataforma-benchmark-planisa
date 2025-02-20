import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { HouseLine, PresentationChart } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { paginaAtiva } from '../utilitarios/paginaAtiva'
import { rotasUrls } from '../../rotas/rotasUrls'

type SidebarProps ={
  width: string
}

export const Sidebar = ({ width }: SidebarProps) => {
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
    <Box
      w={width}
      h={'100vh'}
      bg="#576a7a"
      display={{ base: 'none', lg: 'flex' }}
      flexDir="column"
      gap={'13px'}>
      <Flex width="100%" h="90px" justifyContent={'center'}>
        <Image
          src="/logo.png"
          w={'160px'}
          h="auto"
          backgroundSize={'contain'}
        />
      </Flex>

      <Flex h="100%" flexDirection={'column'} gap="6px" p="10px 8px">
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
            px="5px">
            <Icon as={i.icone} fontSize={28} color={'white'} />
            <Text color="white" fontWeight={'600'}>
              {i.nome}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  )
}
