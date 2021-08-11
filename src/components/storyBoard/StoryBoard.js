import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { TaskList } from "../taskList/TaskList";
import TaskStore from "../../store/TaskStore";
import { Modal } from '../modal/modal';
import GLOBAL_CONSTANTS from "../../constants/globalConstants";
import { SearchTask } from "../searchTask/SearchTask";

export const StoryBoard = () => {
    const [taskList, setTaskList] = useState(TaskStore.getAllTask());

    useEffect(() => {
        TaskStore.addChangeListener(onChange);
        TaskStore.getAllTask();
        return () => TaskStore.removeChangeListener(onChange);
    }, [taskList]);

    function onChange() {
        const updateList = TaskStore.getAllTask();
        setTaskList([...updateList]);
    }

    const getStatusTaskList = (status) => {
        return taskList.filter((task) => task.status === status);
    }

    const [modalPurpose, setModalPurpose] = useState({ displayModal: false, purpose: 'null', task: {} });

    const openModal = (actionObj) => {
        setModalPurpose(actionObj);
    }
    
    return (
        <>
            <div className='story-board'>
                <div className='story-board__header'>
                    <ul className='story-board__header-details'>
                        <li>
                            <h1 className="story-board__page-title">Kanban Board</h1>
                        </li>
                        <li onClick={() => openModal({ displayModal: true, purpose: GLOBAL_CONSTANTS.MODAL_ACTIONS.ADD })}>
                            <button className='btn__primary'>
                                <FontAwesomeIcon className='btn__icon--left' icon={faPlus} />
                                Add Task
                            </button>
                        </li>
                        <li>
                            <button className='btn__tag'>AH</button>
                        </li>
                    </ul>
                    <div>
                       <SearchTask />
                    </div>
                </div>
                <div className='story-board__status-group'>
                    <TaskList list={getStatusTaskList(GLOBAL_CONSTANTS.STATUS.TODO)} status={GLOBAL_CONSTANTS.STATUS.TODO} openModal={openModal} key={GLOBAL_CONSTANTS.STATUS.TODO} />
                    <TaskList list={getStatusTaskList(GLOBAL_CONSTANTS.STATUS.DEVELOPMENT)} status={GLOBAL_CONSTANTS.STATUS.DEVELOPMENT} openModal={openModal} key={GLOBAL_CONSTANTS.STATUS.DEVELOPMENT} />
                    <TaskList list={getStatusTaskList(GLOBAL_CONSTANTS.STATUS.TESTING)} status={GLOBAL_CONSTANTS.STATUS.TESTING} openModal={openModal} key={GLOBAL_CONSTANTS.STATUS.TESTING} />
                    <TaskList list={getStatusTaskList(GLOBAL_CONSTANTS.STATUS.DONE)} status={GLOBAL_CONSTANTS.STATUS.DONE} openModal={openModal} key={GLOBAL_CONSTANTS.STATUS.DONE} />
                </div>
            </div>
            <Modal actionObj={modalPurpose} openModal={openModal} />
        </>
    );
}