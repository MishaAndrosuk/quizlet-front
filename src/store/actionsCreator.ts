import * as authActions from "./reducers/auth/actions";
import * as testActions from "./reducers/tests/actions";

export const actions = {
    ...authActions,
    ...testActions
};