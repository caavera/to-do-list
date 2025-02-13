import './TodoItem.css';
function TodoItem({key, text,completed}) {
    return (
        <li>
            <span>V</span>
            <p>{text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };