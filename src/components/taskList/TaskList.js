import { SingleTask } from "../singleTast/SingleTask"

export const TaskList = (props) => {
    const { list, status } = props;
    return (
        <div className='taskList'>
            <p className='taskList__status-title'>{status}</p>
            <div className='taskList__task-wrapper'>
                {list?.length < 1 && <p className='taskList__empty-list'>{ status } is Empty!</p>}
                {
                    list?.map((task) => <SingleTask task={task} openModal={props.openModal} key={task?.id}/>)
                }
            </div>
            
        </div>
    );
}