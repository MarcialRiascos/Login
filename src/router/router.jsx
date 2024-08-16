import { Routes, Route, } from "react-router-dom";
import { Login } from "../page/Login";
export function MyRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
        </Routes>
    );
}