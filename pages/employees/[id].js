import { useRouter } from 'next/router'
import { useQuery, queryCache } from 'react-query'
import { Stack, Text } from '@chakra-ui/react'

async function getEmployee(_key, id) {
  const response = await fetch(`http://localhost:3001/employees/${id}`)
  const data = await response.json()

  return data
}

function Employees() {
  const { query } = useRouter()
  const { id } = query

  const { data, status } = useQuery(['employees', id], getEmployee, {
    initialData: async () => {
      const cacheData = await queryCache.getQueryData('employees')
      if (!cacheData) return null

      const initialEmployeeData = cacheData.find((employee) => employee.id === Number(id))
      return initialEmployeeData ? initialEmployeeData : undefined
    },
  })

  if (status !== 'success') return <Text>Loading</Text>

  return (
    <Stack>
      <Text>Employee id: {id}</Text>
      <Text>Employee name: {data.name}</Text>
      <Text>Employee job: {data.job}</Text>
    </Stack>
  )
}

export default Employees
