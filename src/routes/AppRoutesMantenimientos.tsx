import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import Sidebar from "../components/Sidebar/Sidebar";
import { MainHeader } from "../components/MainHeader/MainHeader";
import { AppStructure } from "../components/AppStructure/AppStructure";
import { appRoutesMantenimientos } from "@/data/Rutas";

// submenu
import { Mantenimientos } from "../features/mantenimientos/pages/Mantenimientos";
import { Rubro } from "@/features/mantenimientos/subpages/Rubro/Rubro";
import { ConfiguracionGeneral } from "@/features/mantenimientos/subpages/ConfiguracionGeneral/ConfiguracionGeneral";

export const AppRoutesMantenimientos = () => {
	return (
		<AppStructure>
			<MainHeader />
			<div className={style.mainContent__container}>
				<Sidebar appRoutes={appRoutesMantenimientos} />

				<Routes>
					<Route path="/" element={<Mantenimientos />} />
					<Route path="/rubro" element={<Rubro />} />
					<Route path="/configuracion-general" element={<ConfiguracionGeneral />} />
					<Route path="/*" element={<Navigate to="/" />} />
				</Routes>
			</div>
		</AppStructure>
	);
};
