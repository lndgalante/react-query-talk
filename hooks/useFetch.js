import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    setLoading(true)

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return { data, error, loading }
}

export default useFetch
