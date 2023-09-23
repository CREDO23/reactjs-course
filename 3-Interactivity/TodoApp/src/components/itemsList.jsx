import TodoItem from "./todoItem";


function ItemsList({ items, deleteTask, setTaskDone }) {
  return (
    <ul
      style={{
        width: "16rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
      }}
    >
      {items.map(({ id, text, isDone }) => (
        <TodoItem
          key={id}
          item={{ text, isDone, id }}
          deleteItem={deleteTask}
          setItemDone={setTaskDone}
        />
      ))}
    </ul>
  );
}

export default ItemsList
