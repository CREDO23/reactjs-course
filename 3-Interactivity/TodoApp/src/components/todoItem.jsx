function TodoItem({ deleteItem, setItemDone, item: { id, isDone, text } }) {
    return (
      <li>
        {text}
        <button onClick={() => deleteItem(id)}>Delete</button>
        <button onClick={() => setItemDone(id)}>
          {isDone ? "Undone" : "Done"}
        </button>
      </li>
    );
}


export default TodoItem