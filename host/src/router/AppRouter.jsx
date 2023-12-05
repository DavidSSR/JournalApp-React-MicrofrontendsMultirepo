import { Route, Routes, Navigate } from "react-router-dom";
import JournalRoutes from "remoteJournal/JournalRoutes";
import AuthRoutes from "remoteAuth/AuthRoutes";

import { CheckingAuth } from "remoteAuth/CheckingAuth";
import { useCheckAuth } from "remoteAuth/UseCheckAuth";
import { useDispatch, useSelector } from "react-redux";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/* Login y Registro */}
      {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

      {/* JournalApp */}
      {/* <Route path="/*" element={ <JournalRoutes /> } /> */}
    </Routes>
  );
};
