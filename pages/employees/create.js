import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Stack, Text, Input, Button } from '@chakra-ui/react'
import { useMutation, queryCache } from 'react-query'

async function createEmployee(employeeData) {
  console.log('\n ~ createEmployee ~ employeeData', employeeData)
  const response = await fetch(`http://localhost:3001/employees`, {
    method: 'POST',
    body: JSON.stringify(employeeData),
  })
  const data = await response.json()

  return data
}

function EmployeeCreate() {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  const [mutate, { status, data, error }] = useMutation(createEmployee, {
    onSuccess: async (successData) => {
      await queryCache.invalidateQueries('employees')
      await queryCache.invalidateQueries(['employees', successData.id])

      router.push('/')
    },
  })

  return (
    <Stack spacing={2}>
      <Text>Create employee</Text>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          mutate({ name, job })
        }}
      >
        <Stack spacing={2}>
          <Input value={name} onChange={({ target }) => setName(target.value)} placeholder='Employee name'></Input>
          <Input value={job} onChange={({ target }) => setJob(target.value)} placeholder='Employee job'></Input>
          <Button type='submit'>Create</Button>
        </Stack>
      </form>

      <Link href='/'>
        <Button>Back to Home</Button>
      </Link>
    </Stack>
  )
}

export default EmployeeCreate
