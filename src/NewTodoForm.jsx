import { useState } from "react"

// eslint-disable-next-line react/prop-types
export function NewTodoForm({ onSubmit }) {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") return
       
        onSubmit(newItem)

        setNewItem("")
    }
    

    return (<form className="new-item-form" onSubmit={handleSubmit}>
    <div className="from-row">
      <label htmlFor="item">New Item</label><br />
      <input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)} name="item " id="item" className="input"/>
    </div>
    <button className="btn">Add</button>
  </form>)
}