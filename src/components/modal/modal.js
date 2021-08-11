import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AddTask } from "../addTask/AddTask";
import { ViewTask } from '../viewTask/viewTask';
import GLOBAL_CONSTANTS from '../../constants/globalConstants';

export const Modal = (props) => {
    const { displayModal, purpose, task } = props.actionObj;

    if (!displayModal) {
        return (<></>);
    }

    return (
        <div className='modal'>
            <div className='modal__card'>
                <FontAwesomeIcon className='modal__close-icon' onClick={() => props.openModal({ displayModal: false })} icon={faTimes} />
                {purpose === GLOBAL_CONSTANTS.MODAL_ACTIONS.ADD && <AddTask openModal={props.openModal} />}
                {purpose === GLOBAL_CONSTANTS.MODAL_ACTIONS.VIEW && <ViewTask openModal={props.openModal} task={task} />}
            </div>
        </div>
    );
}