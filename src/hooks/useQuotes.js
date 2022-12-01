import { useEffect, useState } from "react"
import { quoteUrl } from "../data/urls.js"
import useFetch from "./useFetch"

function useQuotes() {
  //   console.log("useQuotes RUN")
  const { data } = useFetch(quoteUrl, {})
  const [quotes, setQuotes] = useState([])

  const addQuote = (newQuote) => {
    setQuotes((prevQuotes) => [...prevQuotes, newQuote])
  }

  useEffect(() => {
    console.log("useQuotes useEffect RUN")
    if (data && data.results.length > 0) {
      setQuotes((quoteState) => {
        return data.results.map((quoteItem) => {
          return { content: quoteItem.content, tags: quoteItem.tags }
        })
      })
    }
  }, [data])

  return [quotes, addQuote]
}

export default useQuotes
