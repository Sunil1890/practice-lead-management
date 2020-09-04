import { baseURL } from "./api-config";
import { history } from "./history";

export const fetchWrapper = (url, payload, tokenDrivenAPI = true) => {
  let fetchReference = null;
  if (tokenDrivenAPI) {
    fetchReference = fetch(url, payload);
    return fetchReference.then(
      (response) => {
        if(response.status === 403){
          history.push('/access-denied');
        }
        return response.json ? response.json() : response;
      },
      (error) => {
        /**
         * user url, payload and error here for sending to the logger.
         */
        if (error instanceof TypeError) {
          window.location.href = baseURL.API_URL_BASE + "redirect";
        }
        console.error("fetch error : ", error);
      }
    );
  }
};
