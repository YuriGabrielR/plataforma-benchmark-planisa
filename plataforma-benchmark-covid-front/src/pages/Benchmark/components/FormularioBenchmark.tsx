import { Box, Button, CloseButton, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select, { SingleValue } from 'react-select'
import { paisesOpcoes } from '../../../global/utilitarios/paises'

interface IFormInput {
  nome: string
  pais1: string
  pais2: string
  dataInicio: string
  dataFim: string
}

interface FormularioBenchmarkProps {
  isOpen: boolean
  onClose: () => void
}

export const FormularioBenchmark: React.FC<FormularioBenchmarkProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const validarData = (value: string, fieldName: keyof IFormInput) => {
    const date = new Date(value)
    const minDate = new Date('2020-01-01')
    const maxDate = new Date('2023-10-01')

    if (date < minDate || date > maxDate) {
      setError(fieldName, {
        type: 'manual',
        message: `A data deve estar entre 01/01/2020 e 01/10/2023.`,
      })
      return false
    }
    return true
  }

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="#09090b66"
      display={isOpen ? 'flex' : 'none'}
      alignItems="center"
      justifyContent="center"
      pos="absolute"
      top={0}
      left={0}
      zIndex={77}>
      <Flex
        pos={'relative'}
        w="450px"
        h="auto"
        bg="white"
        borderRadius="20px"
        flexDir="column"
        p="20px"
        gap="20px"
        alignItems="center">
        <CloseButton
          position={'absolute'}
          right={0}
          top={0}
          color="red"
          background={'transparent'}
          onClick={onClose}
        />
        <Text
          w="100%"
          textAlign="center"
          fontSize="26px"
          color="#576A7A"
          fontWeight="700">
          Criar novo benchmark
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" gap="20px" w="400px">
            <Flex direction="column" gap="2px">
              <label htmlFor="nome">
                <Text color="#576A7A" fontWeight="500" fontSize="14px">
                  Nomeie seu benchmark:
                </Text>
              </label>
              <Input
                height={'35px'}
                id="nome"
                focusRingColor={'rgba(66, 153, 225, 0.6)'}
                padding="2px 8px"
                {...register('nome', { required: true, maxLength: 30 })}
              />
            </Flex>

            <Flex gap="10px" alignItems="center">
              <Flex direction="column" flex={1}>
                <label htmlFor="pais1">
                  <Text color="#576A7A" fontWeight="500" fontSize="14px">
                    Primeiro país:
                  </Text>
                </label>
                <Controller
                  name="pais1"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      inputId="pais1"
                      options={paisesOpcoes}
                      placeholder="Selecione um país"
                      onChange={(
                        selected: SingleValue<{
                          value: string
                          label: string
                        }>,
                      ) => field.onChange(selected?.value || '')}
                      value={
                        paisesOpcoes.find(
                          (option) => option.value === field.value,
                        ) || null
                      }
                      getOptionLabel={(e) => e.label}
                      getOptionValue={(e) => e.value}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: '100%',
                          minHeight: '35px',
                        }),
                        input: (provided) => ({
                          ...provided,
                          height: '35px',
                        }),
                        menu: (provided) => ({
                          ...provided,
                          zIndex: 99,
                        }),
                      }}
                    />
                  )}
                />
              </Flex>
              <Flex direction="column" flex={1} dir="column">
                <label htmlFor="pais2">
                  <Text color="#576A7A" fontWeight="500" fontSize="14px">
                    Segundo país:
                  </Text>
                </label>
                <Controller
                  name="pais2"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      inputId="pais2"
                      options={paisesOpcoes}
                      placeholder="Selecione um país"
                      onChange={(
                        selected: SingleValue<{
                          value: string
                          label: string
                        }>,
                      ) => field.onChange(selected?.value || '')}
                      value={
                        paisesOpcoes.find(
                          (option) => option.value === field.value,
                        ) || null
                      }
                      getOptionLabel={(e) => e.label}
                      getOptionValue={(e) => e.value}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: '100%',
                          minHeight: '35px',
                        }),
                        input: (provided) => ({
                          ...provided,
                          height: '35px',
                        }),
                        menu: (provided) => ({
                          ...provided,
                          zIndex: 99,
                        }),
                      }}
                    />
                  )}
                />
              </Flex>
            </Flex>

            <Flex gap="10px" alignItems="center">
              <Flex flexDir={'column'} flex={1}>
                <label htmlFor="dataInicio">
                  <Text color="#576A7A" fontWeight="500" fontSize="14px">
                    Período começa:
                  </Text>
                </label>
                <Input
                  id="dataInicio"
                  type="date"
                  min="2020-01-01"
                  max="2023-10-01"
                  height={'35px'}
                  focusRingColor={'rgba(66, 153, 225, 0.6)'}
                  padding="2px 8px"
                  {...register('dataInicio', {
                    required: 'Data de Início é obrigatória',
                    validate: (value) => validarData(value, 'dataInicio'),
                  })}
                />
                {errors.dataInicio && (
                  <Text color="red.500" fontSize={'12px'}>
                    {errors.dataInicio.message}
                  </Text>
                )}
              </Flex>

              <Flex flexDir={'column'} flex={1}>
                <label htmlFor="dataFim">
                  <Text color="#576A7A" fontWeight="500" fontSize="14px">
                    Termina em:
                  </Text>
                </label>
                <Input
                  id="dataFim"
                  type="date"
                  min="2020-01-01"
                  max="2023-10-01"
                  height={'35px'}
                  focusRingColor={'rgba(66, 153, 225, 0.6)'}
                  padding="2px 8px"
                  {...register('dataFim', {
                    required: 'Data de Fim é obrigatória',
                    validate: (value) => validarData(value, 'dataFim'),
                  })}
                />
                {errors.dataFim && (
                  <Text color="red.500" fontSize={'12px'}>
                    {errors.dataFim.message}
                  </Text>
                )}
              </Flex>
            </Flex>

            <Button bg="#576A7A" type="submit">
              Criar
            </Button>
          </Box>
        </form>
      </Flex>
    </Box>
  )
}
