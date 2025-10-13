import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { updateStatus } from "../../actions/taskActions";
import GLOBAL_CONSTANTS from '../../constants/globalConstants';

export const ViewTask = (props) => {
    const { id, title, status, description, label } = props.task;
    const tagClassName = 'task__tag--big task__tag--'.concat(label);
    const handleStatusChange = (event) => {
        updateStatus({ id, value: event.target.value });
        props.openModal({ displayModal: false });
    }
    return (
        <>
            <div className='task__header'>
                <div className='task__header-icon'>
                    <FontAwesomeIcon className='btn__icon--left' icon={faPlus} />
                </div>
                <div className='task__view-title'>
                    <div>
                        <h2 data-hj-suppress>{title}</h2>
                        <p data-hj-suppress>In list {status}</p>
                    </div>
                    <div className='task__status-wrapper' data-hj-suppress>
                        <div className='task__label'>
                            <p>LABEL</p>
                            <span className={tagClassName}>
                                <span className='text'>{label}</span>
                            </span>
                        </div>
                        <div className='task__actions'>
                            <p>ACTIONS</p>
                            <form>
                                <select name='selectedStatus' value={status}
                                    onChange={handleStatusChange}>
                                    <option value={GLOBAL_CONSTANTS.STATUS.TODO}>To Do</option>
                                    <option value={GLOBAL_CONSTANTS.STATUS.DEVELOPMENT}>Development</option>
                                    <option value={GLOBAL_CONSTANTS.STATUS.TESTING}>Testing</option>
                                    <option value={GLOBAL_CONSTANTS.STATUS.DONE}>Done</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='task__header'>
                <div className='task__header-icon'>
                    <FontAwesomeIcon className='btn__icon--left' icon={faPlus} />
                </div>
                <div className='task___view-title'>
                    <div>
                        <h3>Description</h3>
                    </div>
                    <p>
                        {description}
                    </p>
                </div>
            </div>

            <div className='task__header task__header--activities'>
                <div className='task__header-icon'>
                    <FontAwesomeIcon className='btn__icon--left' icon={faPlus} />
                </div>
                <div className='task___view-title'>
                    <div>
                        <h3>Activities</h3>
                    </div>
                    <p>
                        <small>Actiities are disabled</small>
                    </p>
                </div>
            </div>
            
        </>
    );
}