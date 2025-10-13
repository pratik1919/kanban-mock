import { useState } from "react";
import GLOBAL_CONSTANTS from "../../constants/globalConstants";
import { createTask } from "../../actions/taskActions";

export const AddTask = (props) => {
    const [formValue, setFormValue] = useState({ title: '', status: GLOBAL_CONSTANTS.STATUS.TODO, label: GLOBAL_CONSTANTS.LABEL.CP, description: '' });
    const submitAddForm = event => {
        createTask(formValue);
        props.openModal({ displayModal: false });
        event.preventDefault();
    }

    const handleValueChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value});
    }
    return (
        <>
            <div className='add-task__header'>
                <h2>Add New Task</h2>
                <p>Create a new Story</p>
            </div>
            <hr />
            <form className='add-task__form' onSubmit={submitAddForm}>
                <div className='add-task__form-group'>
                    <label htmlFor="title">Title</label>
                    <input name='title' type="text" required onChange={handleValueChange} value={formValue.title}  data-hj-mask/>
                </div>
                <div className='add-task__form-group'>
                    <label htmlFor="status">Label</label>
                    <select name='status' onChange={handleValueChange} value={formValue.status} required  data-hj-suppress>
                        <option value="todo">To Do</option>
                        <option value="development">Development</option>
                        <option value="testing">Testing</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div className='add-task__form-group'>
                    <label htmlFor="label">Tag</label>
                    <select name='label' onChange={handleValueChange} value={formValue.label} required  data-hj-hide>
                        <option value={GLOBAL_CONSTANTS.LABEL.CP}>CP</option>
                        <option value={GLOBAL_CONSTANTS.LABEL.FAULT}>Fault</option>
                    </select>
                </div>
                <div className='add-task__form-group'>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name='description' onChange={handleValueChange} value={formValue.description} required  data-hj-mask />
                </div>
                <div className='add-task__form-btn-wrapper'>
                    <button className='btn__secondary' onClick={() => props.openModal({ displayModal: false })}>Cancel</button>
                    <button className='btn__primary' type='submit'>Add</button>
                </div>
            </form>
        </>
    );
}
