// imimp
import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NEStudents = () => {
	const endpoint = "http://127.0.0.1:8000/api";
	let navigate = useNavigate();

	function navigateTo(string) {
		navigate(string);
	}

	const guardarDatos = async (e) => {
		e.preventDefault();
		await axios
			.post(`${endpoint}/alumno`, student)
			.then((response) => {
				console.log("Guardado..");
				console.log(response.data);
			})
			.catch((error) => {});
		navigateTo("/");
	};

	const cancelOp = () => {
		let route = "/";
		navigateTo(route);
	};

	const footer = (
		<span>
			<Button label="Save" onClick={guardarDatos} icon="pi pi-check" />
			<Button
				onClick={cancelOp}
				label="Cancel"
				icon="pi pi-times"
				className="p-button-secondary ml-2"
			/>
		</span>
	);

	const [student, setStudent] = useState({
		id: 0,
		nombre: "",
		matricula: "",
		edad: "",
	});

	const inputChange = (event) => {
		console.log("handleInputChange");
		console.log(event.target.name);
		console.log(event.target.value);

		setStudent({
			...student,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div>
			<Card title="Student" style={{ with: "25em" }} footer={footer}>
				<span className="p-float-label">
					<InputText
						name="nombre"
						value={student.nombre}
						onChange={inputChange}
					/>
					<label htmlFor="nombre">Nombre</label>
				</span>
				<span className="p-float-label">
					<InputText
						name="matricula"
						value={student.matricula}
						onChange={inputChange}
					/>
					<label htmlFor="matricula">Matricula</label>
				</span>
				<span className="p-float-label">
					<InputText name="edad" value={student.edad} onChange={inputChange} />
					<label htmlFor="edad">Edad</label>
				</span>
			</Card>
		</div>
	);
};

export default NEStudents;
