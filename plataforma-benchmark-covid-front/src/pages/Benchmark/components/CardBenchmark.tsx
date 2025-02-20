import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { Link, Pen, Trash } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { rotasUrls } from '../../../rotas/rotasUrls'

export const CardBenchmark = () => {
  const navigate = useNavigate()

  return (
    <Box
      w={'300px'}
      height={'300px'}
      padding={'5px'}
      display={'flex'}
      gap={'8px'}>
      <Flex
        justifyContent={'space-around'}
        align={'center'}
        w="90%"
        flexDir={'column'}
        height={'95%'}
        borderRadius={'12px'}
        p={'5px'}
        justify={'center'}
        gap={'10px'}
        boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.29)'}>
        <Flex w={'248px'} height={'170px'} borderRadius={'12px'}>
          <Image
            borderRadius={'12px'}
            src="/cardBenchmarkImage.png"
            backgroundSize={'cover'}
            w="100%"
          />
        </Flex>
        <Text
          fontWeight={600}
          fontSize={'15px'}
          color={'#576A7A'}
          textAlign={'center'}>
          Comparação Argentina x Brasil
        </Text>

        <Button
          borderRadius={'12px'}
          w={'100%'}
          bg={'#576A7A'}
          onClick={() => navigate(rotasUrls.benchmarkPorId('123'))}>
          Ver detalhes
        </Button>
      </Flex>
      <Flex flexDirection={'column'} gap={'5px'} alignItems={'center'}>
        <Trash size={24} weight="bold" color="red" cursor={'pointer'} />
        <Link size={24} weight="bold" color="gray" cursor={'pointer'} />
        <Pen size={24} weight="bold" color="gray" cursor={'pointer'} />
      </Flex>
    </Box>
  )
}
