function ToDoList({todos}) {
    
    return (
        <>
            <ul>
                {todos.map((todo, i) => {
                    return <li key={i}>{todo}</li>
                })}
            </ul>
        </>
    )
}

export default ToDoList