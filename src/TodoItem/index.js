import './TodoItem.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

function TodoItem(props) {
    return (
        <li className='TodoItem'>
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            > 
                <FaCheck />
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>

            <span 
                className='Icon Icon--delete'
                onClick={props.onDelete}
            >
                <FaTimes />
            </span>
        </li>
    );
}

export { TodoItem };
