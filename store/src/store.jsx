import { Provider } from "react-redux";
import { store } from "./store/store";
export {
  login,
  logout,
  startGoogleSignIn,
  startLoginWithEmailPassword,
  startCreatingUserWithEmailPassword,
  startLogout,
} from "./store/auth";
export { FirebaseAuth } from "./firebase/config";
export {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
  startNewNote,
  startLoadingNotes,
} from "./store/journal";

export const StoreProvider = ({ children }) => {
  return <Provider store={store}> {children} </Provider>;
};
