import { Box, Flex, Text } from '@chakra-ui/react'

import { Menu } from '../../global/components/Menu'
import { Sidebar } from '../../global/components/Sidebar'
import { GraficoBarra } from './components/GraficoBarra'

export const BenchmarkDetalhes = () => {
  return (
    <Flex h="100vh" w="100vw">
      <Menu />
      <Sidebar />
      <Box h="100vh" px={'20px'} mt={{ base: '70px', lg: '0' }} w={'100vw'}>
        <Flex flexDir={'column'} gap="30px">
          <Text fontSize={'25px'} color={'#576A7A'} fontWeight={600} py={'5px'}>
            Título do nome do benchmark
          </Text>

          <Box
            w="100%"
            height={'auto'}
            display={'flex'}
            flexDirection={'column'}
            gap={'30px'}>
            <Flex
              gap={'14px'}
              height={'580px'}
              width={'100%'}
              flexDir={'column'}>
              <Flex flexDir="column">
                <Flex gap="5px" fontSize={'28px'} color="#576A7A">
                  <strong>Painel</strong> Covid
                </Flex>
              </Flex>
              <Flex
                gap="24px"
                alignItems={'center'}
                flexWrap={'wrap'}
                justifyContent={'center'}>
                <Flex
                  w="340px"
                  h="140px"
                  borderRadius={'10px'}
                  flexDir={'column'}
                  p="16px"
                  alignItems={'left'}
                  gap="15px"
                  boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.29)'}>
                  <Text fontSize="20px" fontWeight={'700'} color="#576A7A">
                    Casos Confirmados (Total){' '}
                  </Text>

                  <Text fontSize="27px" fontWeight={'500'} color="#576A7A">
                    39.168.245 <br></br>{' '}
                    <Text
                      color="#8d9ea4"
                      ml="4px"
                      fontWeight={'700'}
                      fontSize="14px">
                      Acumulado
                    </Text>
                  </Text>
                </Flex>
                <Flex
                  w="340px"
                  h="140px"
                  borderRadius={'10px'}
                  flexDir={'column'}
                  p="16px"
                  alignItems={'left'}
                  gap="15px"
                  boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.29)'}>
                  <Text fontSize="20px" fontWeight={'700'} color="#576A7A">
                    Mortes Confirmadas (Total){' '}
                  </Text>

                  <Text fontSize="27px" fontWeight={'500'} color="#576A7A">
                    39.168.245 <br></br>{' '}
                    <Text
                      color="#8d9ea4"
                      ml="4px"
                      fontWeight={'700'}
                      fontSize="14px">
                      Acumulado
                    </Text>
                  </Text>
                </Flex>
                <Flex
                  w="340px"
                  h="140px"
                  borderRadius={'10px'}
                  flexDir={'column'}
                  p="16px"
                  alignItems={'left'}
                  gap="15px"
                  boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.29)'}>
                  <Text fontSize="20px" fontWeight={'700'} color="#576A7A">
                    Taxa de letalidade (Total){' '}
                  </Text>

                  <Text fontSize="27px" fontWeight={'500'} color="#576A7A">
                    3% <br></br>{' '}
                  </Text>
                </Flex>
              </Flex>
              <Flex
                w="500px"
                h="500px"
                alignItems={'center'}
                gap={'20px'}
                flexWrap={{ base: 'none', lg: 'none' }}>
                <GraficoBarra />
                <GraficoBarra />
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
