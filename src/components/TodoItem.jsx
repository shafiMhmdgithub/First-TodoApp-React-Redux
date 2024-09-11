import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const handleCheckboxClick=()=>{
		dispatch(toggleComplete({id,completed:!completed}));
	}
	const handleDeleteBtnClick=()=>{
		dispatch(deleteTodo({id}))
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3 input' key={id} onClick={handleCheckboxClick}  checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger' key={id} onClick={handleDeleteBtnClick}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
