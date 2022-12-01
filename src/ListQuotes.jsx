export default function ListQuotes({ quotes }) {
  return (
    <>
      <div
        className="container mt-5 py-4 bg-light shadow"
        style={{ maxWidth: "500px" }}
      >
        <h4 className="ps-3 bs-yellow-200 mb-3">List Quotes</h4>
        {quotes?.map((quote, index) => (
          <div
            key={index}
            className="fs-6 px-2 mx-3 my-1 rounded"
            style={{
              color: "white",
              background: quote.tags.includes("history")
                ? "#198754"
                : "#dc3545",
            }}
          >
            {quote.content}
          </div>
        ))}
      </div>
    </>
  )
}
