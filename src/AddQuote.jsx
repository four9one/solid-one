import { useId, useRef, useState } from "react"

const initFormData = { content: "", tags: ["history"] }

export default function AddQuote({ addQuote }) {
  const inputContentRef = useRef()
  const reactId = useId()
  const [formData, setFormData] = useState(initFormData)
  function onSubmit(e) {
    e.preventDefault()
    if (inputContentRef.current.value.length < 3) return
    addQuote(formData)
    setFormData((data) => initFormData)
    inputContentRef.current.focus()
  }

  function handleChange(e) {
    console.log("e.target", e.target)
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value }
    })
  }
  return (
    <>
      <div
        className="container-fluid shadow mt-5 p-3 bg-light"
        style={{ maxWidth: "500px" }}
      >
        <form id="create-object-form" className="row me-2" onSubmit={onSubmit}>
          <h4 className="ms-2">Create Quote</h4>
          <div className="ms-2">
            <label htmlFor={reactId + "-content"} className="form-label">
              Content
            </label>
            <input
              type="text"
              name="content"
              className="form-control"
              id={reactId + "-content"}
              ref={inputContentRef}
              pattern=".{3,30}"
              required
              title="At least three letters in name"
              onChange={handleChange}
              value={formData.content}
            />
          </div>

          <div className="mb-4 mt-2">
            <input
              type="radio"
              className="btn-check"
              name="tags"
              id={reactId + "-radio-green"}
              onChange={handleChange}
              value="history"
              checked={formData.tags.includes("history")}
            />
            <label
              className="btn btn-outline-success m-2"
              htmlFor={reactId + "-radio-green"}
            >
              History Quote
            </label>
            <input
              type="radio"
              className="btn-check"
              name="tags"
              value="love"
              id={reactId + "-radio-red"}
              onChange={handleChange}
              checked={formData.tags.includes("love")}
              // autoComplete="off"
            />
            <label
              className="btn btn-outline-danger m-2"
              htmlFor={reactId + "-radio-red"}
            >
              Love Quote
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary ms-2">
              Done
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
