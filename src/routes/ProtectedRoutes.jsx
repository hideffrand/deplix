import { Outlet, Navigate } from "react-router-dom"
import { onAuthStateChange } from "../auth/onAuthStateChange"

export default function PrivateRoutes() {
    const user = onAuthStateChange()
    return (
        user ? <Outlet /> : <Navigate to="/signup" />
    )
}