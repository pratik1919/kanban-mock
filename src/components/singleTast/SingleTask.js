import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import GLOBAL_CONSTANTS from '../../constants/globalConstants';



export const SingleTask = (props) => {
    const { id, title, label, comment, likeCount } = props.task;
    const tagClassName = 'task__tag--'.concat(label);

    return (
        <div className='task' key={id} onClick={() => props.openModal({ displayModal: true, purpose: GLOBAL_CONSTANTS.MODAL_ACTIONS.VIEW, task: props.task})}>
            <span className={tagClassName}>
                <span className='text'>{label}</span>
            </span>
            <p>{title}</p>
            <div className='task__engagements-icons'>
                {comment?.length > 0 && <span>
                    <FontAwesomeIcon icon={faComment} /> {comment?.length}
                </span>}
                {likeCount > 0 && <span>
                    <FontAwesomeIcon icon={faThumbsUp} /> {likeCount}
                </span>}
            </div>
        </div>
    );
}