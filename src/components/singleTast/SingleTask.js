import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import GLOBAL_CONSTANTS from '../../constants/globalConstants';



export const SingleTask = (props) => {
    const { id, title, label, comment, likeCount } = props.task;
    const tagClassName = 'task__tag--'.concat(label);

    return (
        <div className='task' key={id} onClick={() => props.openModal({ displayModal: true, purpose: GLOBAL_CONSTANTS.MODAL_ACTIONS.VIEW, task: props.task})}>
            <span className={tagClassName}>
                <span className='text' data-hj-supress>{label}</span>
            </span>
            <p data-hj-suppress>{title}</p>
            <div className='task__engagements-icons' data-hj-suppress>
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