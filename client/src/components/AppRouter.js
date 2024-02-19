// AppRouter.js
import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from "../routes";
// import { PRODUCT_ROUTE } from "../utils/consts";
import { SELLER_ROUTE } from "../utils/consts";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, component: Component }) => 
                <Route key={path} path={path} element={<Component />} exact />
            )}

            <Route path="*" element={<Navigate to={SELLER_ROUTE} />} />

        </Routes>
    );
};

export default AppRouter;
