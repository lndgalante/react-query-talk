import { useQuery } from 'react-query'

async function getCompanies() {
  const response = await fetch(`http://localhost:3001/companies`)
  const data = await response.json()

  return data
}

function useReadCompanies() {
  const { data: companies, isLoading: isLoadingCompanies, isError: isCompaniesError } = useQuery(
    'companies',
    getCompanies,
  )

  return { companies, isLoadingCompanies, isCompaniesError }
}

export default useReadCompanies
