import { leadManagementActions } from "./actions";
import { baseURL } from "../../helpers";
import { store } from "../../redux/store";

export const searchSupply = () => {
  store.dispatch({
    type: leadManagementActions.FETCH_LEAD_MANAGEMENT_DATA_LOADING,
    payload: true,
  });
  window
    .fetchWrapper(`${baseURL}/`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.success) {
        store.dispatch({
          type: leadManagementActions.FETCH_LEAD_MANAGEMENT_DATA_SUCCESS,
          payload: response,
        });
      } else {
        store.dispatch({
          type: leadManagementActions.FETCH_LEAD_MANAGEMENT_DATA_FAILURE,
          payload: response,
        });
      }
    })
    .catch((error) => {
      store.dispatch({
        type: leadManagementActions.BROWSE_SUPPLY_SEARCH_FAILURE,
        payload: error.toString(),
      });
    });
};