import { EventEmitter } from "events";
import defaultTask from "../data/data";
import dispatcher from "../dispatcher/dispatcher";
import actionTypes from "../actions/actionType";
const CHANGE_EVENT = "change";
let _task = defaultTask;

class TaskStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getAllTask() {
        return _task;
    };
}

const taskStore = new TaskStore();
dispatcher.register((action) => {
    switch (action.type) {
        case actionTypes.CREATE_TASK:
            const { newTaskObj } = action;
            _task.push({
                id: Date.now(),
                title: newTaskObj?.title,
                status: newTaskObj?.status,
                description: newTaskObj?.description,
                label: newTaskObj?.label,
                comment: [],
                likeCount: 0
            });
            taskStore.emitChange();
            break;
        case actionTypes.GET_TASK:
            _task = action?.tasks;
            taskStore.emitChange();
            break;
        case actionTypes.UPDATE_STATUS:
            const { id, value } = action.updateObj;
            _task = _task.map((task) => {
                if (task?.id === id) {
                    return {
                        ...task,
                        status: value
                    }
                }
                return task;
            })
            taskStore.emitChange();
            break;
        case actionTypes.SEARCH_TASK:
            const { query } = action;
            _task = _task.filter((task) => task?.title.includes(query));
            taskStore.emitChange();
            break;
        default:
            break;
    }
});

export default taskStore;