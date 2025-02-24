import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { Link, Pen, Trash } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { rotasUrls } from '../../../rotas/rotasUrls'
import { useDeletarBenchmark } from '../../../hooks/useDeletarBenchmark'
import { useState } from 'react'
import { FormularioBenchmarkEdicao } from './FormularioBenchmarkEdicao'

type CardProps ={
  nome: string
  id: string
}

export const CardBenchmark = ({ nome, id }: CardProps) => {
  const navigate = useNavigate()
  const { mutate, isLoading } = useDeletarBenchmark()

  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => {
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
  }

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
          {nome}
        </Text>

        <Button
          borderRadius={'12px'}
          w={'100%'}
          bg={'#576A7A'}
          onClick={() => navigate(rotasUrls.benchmarkPorId(id))}>
          Ver detalhes
        </Button>
      </Flex>

      <Flex flexDirection={'column'} gap={'5px'} alignItems={'center'}>
        <Trash 
          size={24} 
          weight="bold" 
          color="red" 
          cursor={isLoading ? 'not-allowed' : 'pointer'}  
          onClick={() => {
            mutate(id)
          }} 
        />
        <Link size={24} weight="bold" color="gray" cursor={'pointer'} />
        <Pen 
          size={24} 
          weight="bold" 
          color="gray" 
          cursor={'pointer'} 
          onClick={openForm} 
        />
      </Flex>

      {isFormOpen && (
        <FormularioBenchmarkEdicao 
          isOpen={isFormOpen} 
          onClose={closeForm} 
          id={id} 
        />
      )}
    </Box>
  )
}
