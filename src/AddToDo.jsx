function AddToDo({todos, setTodos}) {
    function handleSubmit(event) {
        event.preventDefault()
        let todo = event.target.elements.todo.value
        setTodos([...todos, todo])
    }

    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <input type="text" id="todo" placeholder="Agrega tu todo..."/>
                <button type="submit">Agregar</button>
            </form>
        </>
    )
}

export default AddToDo