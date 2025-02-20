import { Box, Flex, Text } from '@chakra-ui/react'
import { Plus } from '@phosphor-icons/react'
import { useState } from 'react'

import { Menu } from '../../global/components/Menu'
import { Sidebar } from '../../global/components/Sidebar'
import { CardBenchmark } from './components/CardBenchmark'
import { FormularioBenchmark } from './components/FormularioBenchmark'

export const BenchmarkListagem = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpen = () => {
    setModalOpen(true)
  }

  const handleClose = () => {
    setModalOpen(false)
  }

  return (
    <>
      <Flex h="100vh" overflow={{ base: 'scroll', lg: 'hidden' }}>
        <Menu />
        <Sidebar width="270px"/>
        <Box h="100vh" px={'20px'} mt={{ base: '70px', lg: '0' }}>
          <Flex flexDir={'column'} gap="30px">
            <Text
              fontSize={'25px'}
              color={'#576A7A'}
              fontWeight={600}
              py={'5px'}>
              Meus benchmarks
            </Text>

            <Box
              w="100%"
              height={'auto'}
              display={'flex'}
              flexDirection={'column'}
              gap={'30px'}>
              <Flex
                w="150px"
                height={'40px'}
                borderRadius={'10px'}
                bg="#576A7A"
                justify={'center'}
                alignItems={'center'}
                gap={'2px'}
                cursor={'pointer'}
                onClick={handleOpen}>
                {' '}
                <Plus size={24} weight="bold" color="white" />
                <Text
                  fontWeight={700}
                  color="white"
                  fontSize={'19px'}
                  marginTop={'4px'}>
                  Criar novo
                </Text>
              </Flex>

              <Flex
                gap={'50px'}
                height={'580px'}
                width={'100%'}
                justifyContent={'center'}
                flexWrap={'wrap'}
                overflowY={{ base: 'auto', lg: 'hidden' }}>
                <CardBenchmark />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <FormularioBenchmark isOpen={modalOpen} onClose={handleClose} />
    </>
  )
}
