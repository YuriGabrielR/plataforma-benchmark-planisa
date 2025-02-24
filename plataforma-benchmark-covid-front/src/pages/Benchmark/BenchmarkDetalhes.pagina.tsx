import { Box, Flex, Text } from '@chakra-ui/react'

import { Menu } from '../../global/components/Menu'
import { Sidebar } from '../../global/components/Sidebar'
import { GraficoBarra } from './components/GraficoBarra'
import { useParams } from 'react-router-dom'
import { useBenchmarkListarPorId } from '../../hooks/useListarBenchmarkPorId'
import { formatarData } from '../../utilitarios/formatarDataBR'

export const BenchmarkDetalhes = () => {

  const { idBenchmark } = useParams()
  const { data } = useBenchmarkListarPorId(idBenchmark!)

  console.log(data)

  return (
    <Flex h="100vh" w="100vw">
      <Menu />
      <Sidebar width="270px"/>
      <Box h="100vh" px={'20px'} mt={{ base: '70px', lg: '0' }} w={'100vw'}>
        <Flex flexDir={'column'} gap="30px">
          <Text fontSize={'25px'} color={'#576A7A'} fontWeight={600} py={'5px'}>
          {data?.nome}
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
                <Flex>
                 <Text fontSize={'14px'} color="#576A7A"> Estamos comparando os países: <strong>{data?.pais1}</strong> e <strong>{data?.pais2}</strong> 
                 </Text> 
                 </Flex>
                 <Flex>
                 <Text fontSize={'14px'} color="#576A7A">
                Entre os períodos de:{' '} 
                <strong>{data?.dataInicio ? formatarData(data.dataInicio) : '-'}</strong> 
                {' '} a{' '}
                <strong>{data?.dataFim ? formatarData(data.dataFim) : '-'}</strong>
              </Text>

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
                  {data?.resultado
                      ? data.resultado.paisUmCasos + data.resultado.paisDoisCasos
                      : '-'} 
                    <br></br>{' '}
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
                    {data?.resultado
                      ? data.resultado.paisUmMortes + data.resultado.paisDoisMortes
                      : '-'} 
                    <br></br>{' '}
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
                {data?.resultado
                  ? (
                      ((data.resultado.paisUmMortes + data.resultado.paisDoisMortes) /
                        (data.resultado.paisUmCasos + data.resultado.paisDoisCasos)) * 100
                    ).toFixed(2) + '%'
                  : '-'}
              </Text>
                </Flex>
              </Flex>
              <Flex
                w="500px"
                h="500px"
                alignItems={'center'}
                gap={'20px'}
                flexWrap={{ base: 'none', lg: 'none' }}>
                <GraficoBarra 
                labels={[data?.pais1 ?? '-', data?.pais2 ?? '-']} 
                data={[
                  data?.resultado?.paisUmCasos ?? 0, 
                  data?.resultado?.paisDoisCasos ?? 0
                ]}
                label="Casos confirmados"
              />
               <GraficoBarra 
                labels={[data?.pais1 ?? '-', data?.pais2 ?? '-']} 
                data={[
                  data?.resultado?.paisUmMortes ?? 0, 
                  data?.resultado?.paisDoisMortes ?? 0
                ]}
                label="Mortes confirmadas"
              />
              <GraficoBarra 
                labels={[data?.pais1 ?? '-', data?.pais2 ?? '-']} 
                data={[
                  data?.resultado?.paisUmTaxaLetalidade ?? 0, 
                  data?.resultado?.paisDoisTaxaLetalidade ?? 0
                ]}
                label="Taxa de letalidade"
              />
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
