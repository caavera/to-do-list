import './TodoLoading.css';

function TodoLoading() {
    return (
        <li className='LoadingTodoItem-container'>
            <span className='LoadingTodoItem-completeIcon' />
            <p className='LoadingTodoItem-text' />
            <span className='LoadingTodoItem-deleteIcon' />
        </li>
    );
}

export { TodoLoading };
