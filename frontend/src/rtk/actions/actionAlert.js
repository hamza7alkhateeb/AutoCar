import { removeAlert, setAlert } from "../slice/alert-slice";
import { v4 as uuid } from "uuid";

export const actionAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
        const id = uuid();
        dispatch(setAlert({ msg: msg, alertType: alertType, id: id }));
        setTimeout(() => dispatch(removeAlert({ id: id })), 3000);
    };
