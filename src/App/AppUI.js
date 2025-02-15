import { ThemeToggle } from '../ThemeToggle';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';

function AppUI({
    loading,
    error,
    completedToDos, 
    totalToDos, 
    searchValue, 
    setSearchValue, 
    searchedToDos, 
    completeToDo, 
    deleteToDo
}) {
    return (
        <>
            <ThemeToggle />
            <TodoCounter 
                completed={completedToDos} 
                total={totalToDos} 
            />
            <TodoSearch 
                searchValue={searchValue} 
                setSearchValue={setSearchValue} 
            />

            <TodoList>
                {loading && 
                    <>
                        <TodoLoading />
                        <TodoLoading />
                        <TodoLoading />
                    </>
                }
                {error && <TodoError />}
                {searchedToDos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeToDo(todo.text)}
                        onDelete={() => deleteToDo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    )
}

export { AppUI };