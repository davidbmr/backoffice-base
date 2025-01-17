import React, { ChangeEvent, useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";

import user0Icon from "../assets/User0.svg";
import user1Icon from "../assets/User1.svg";
import hideIcon from "../assets/Hide.svg";
import loginIcon from "../assets/Login.svg";
import insertIcon from "../assets/Intersect.svg";

import style from "./ContenedorLogin.module.css";
import { useAppDispatch } from "../../../store/hooks";
import { getUser } from "../../../store/slices/auth";

export let ContenedorLogin = () => {
	const [started, setStarted] = useState(false);
	const [startEyes, setEyes] = useState(true);
	const [contrasena, setContrasena] = useState("");
	/**----- Activacion de icono usuario */
	const pressFocus = () => {
		setStarted(true);
	};
	const pressBlur = () => {
		setStarted(false);
	};

	const dispatch = useAppDispatch();
	const [user, setUser] = useState<any>({
		documentType: "dni",
		documentNumber: "",
		password: "",
	});

	const handleLogin = () => {
		dispatch(getUser(user));
	};

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<form className={style.ContenedorFormulario}>
			<p className={style.p_isesion}>Iniciar sesión</p>

			<label className={style.label} htmlFor="loginUser">
				<input
					id="loginUser"
					className={style.inputUsuario}
					type="text"
					name="documentNumber"
					onFocus={pressFocus}
					onBlur={pressBlur}
					placeholder=""
					onChange={handleChangeInput}
					value={user.email}
					autoComplete="off"
				/>
				<span className={style.spanName}>Usuario</span>
				<img
					className={style.iconUser}
					src={started ? user1Icon : user0Icon}
					alt="Icono de usuario"
				/>
			</label>

			<label className={style.label} htmlFor="loginPassword">
				<input
					id="loginPassword"
					className={style.inputContraseña}
					type={startEyes ? "password" : "text"}
					name="password"
					placeholder="Contraseña"
					value={user.password}
					onChange={handleChangeInput}
				/>
				<img
					className={style.iconHide}
					src={startEyes ? hideIcon : insertIcon}
					alt="Icono de ocultar"
					onClick={() => {
						setEyes(!startEyes);
					}}
				/>
			</label>

			<div className={style.button} onClick={handleLogin}>
				Entrar <img className={style.iconLogin} src={loginIcon} alt="Icono de login" />
			</div>
		</form>
	);
};
