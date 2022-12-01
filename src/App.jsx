import AddQuote from "./AddQuote"
import useQuotes from "./hooks/useQuotes"
import ListQuotes from "./ListQuotes"

function App() {
  const [quotes, addQuote] = useQuotes()

  return (
    <>
      <AddQuote addQuote={addQuote} />
      <ListQuotes quotes={quotes} />
    </>
  )
}

export default App
