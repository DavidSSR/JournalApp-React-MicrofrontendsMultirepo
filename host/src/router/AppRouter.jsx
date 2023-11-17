import { Route, Routes } from 'react-router-dom'
import JournalRoutes from 'remoteJournal/JournalRoutes'
import AuthRoutes from 'remoteAuth/AuthRoutes'


export const AppRouter = () => {
    return (
        <Routes>

            <Route path='/auth/*' element={<AuthRoutes />} />

            <Route path='/*' element={<JournalRoutes />} />

        </Routes>
    )
}
