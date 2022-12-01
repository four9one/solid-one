export default function AddQuote({ addQuote }) {
  function onSubmit(e) {
    e.preventDefault()
    if (document.getElementById("item-name").value.length < 3) return
    const formData = {
      content: document.getElementById("item-name").value,
      tags: document.getElementById("green-radio").value,
    }
    addQuote(formData)
    document.getElementById("create-object-form").reset()
    document.getElementById("item-name").focus()
  }
  return (
    <>
      <div
        className="container-fluid shadow mt-5 p-3 bg-light"
        style={{ maxWidth: "500px" }}
      >
        <form id="create-object-form" className="row me-2" onSubmit={onSubmit}>
          <h4 className="ms-2">Create object</h4>
          <div className="ms-2">
            <label htmlFor="item-name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              pattern=".{3,30}"
              required
              title="At least three letters in name"
            />
          </div>

          <div className="mb-4 mt-2">
            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id="green-radio"
              autoComplete="off"
              defaultChecked
            />
            <label
              className="btn btn-outline-success m-2"
              htmlFor="green-radio"
            >
              Success object
            </label>
            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id="red-radio"
              autoComplete="off"
            />
            <label className="btn btn-outline-danger m-2" htmlFor="red-radio">
              Danger object
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
