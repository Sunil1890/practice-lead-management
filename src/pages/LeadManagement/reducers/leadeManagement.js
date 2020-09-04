import { leadManagementActions } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case leadManagementActions.FETCH_LEAD_MANAGEMENT_DATA_LOADING:
      return {
        ...state
      };
    case leadManagementActions.FETCH_LEAD_MANAGEMENT_DATA_SUCCESS:
      return {
        ...state,
        leadManagementData: action.payload
      };
    case leadManagementActions.FETCH_LEAD_MANAGEMENT_DATA_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
