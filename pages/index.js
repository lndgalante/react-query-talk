import Head from 'next/head'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack, Text } from '@chakra-ui/react'

// hooks
import useReadEmployees from '../hooks/useReadEmployees'
import useReadCompanies from '../hooks/useReadCompanies'

export default function Home() {
  const { employees, isLoadingEmployees, isEmployeesError } = useReadEmployees()
  const { companies, isLoadingCompanies, isCompaniesError } = useReadCompanies()

  if (isLoadingEmployees || isLoadingCompanies) return <Text>Loading data...</Text>
  if (isEmployeesError || isCompaniesError) return <Text>Sorry there was an error</Text>

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Tabs>
        <TabList>
          <Tab>Companies</Tab>
          <Tab>Employees</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Stack>
              {companies.map((company) => (
                <Text key={company.id}>{company.title}</Text>
              ))}
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack>
              {employees.map((employee) => (
                <Link key={employee.id} href={`/employees/${employee.id}`}>
                  <Text>{employee.name}</Text>
                </Link>
              ))}
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  )
}
