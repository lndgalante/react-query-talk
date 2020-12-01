import { useQuery } from 'react-query'

async function getEmployees() {
  const response = await fetch(`http://localhost:3001/employees`)
  const data = await response.json()

  return data
}

function useReadEmployees() {
  const { data: employees, isLoading: isLoadingEmployees, isError: isEmployeesError } = useQuery(
    'employees',
    getEmployees,
  )

  return { employees, isLoadingEmployees, isEmployeesError }
}

export default useReadEmployees
