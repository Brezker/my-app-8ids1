import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { Menubar } from "primereact/menubar";
import "primeicons/primeicons.css";

const ShowAlumnos = () => {
  const [students, setStudents] = useState([]);
  const endpoint = "http://127.0.0.1:8000/api";

  const items = [
    {
      label: "File",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Students",
              icon: "pi pi-user",
            },
          ],
        },
      ],
    },

    {
      label: "Quit",
      icon: "pi pi-trash",
    },
  ];

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    await axios
      .get(`${endpoint}/alumnos`)
      .then((response) => {
        console.log(response.data);
        setStudents(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <Menubar model={items} />
      </div>
      <div className="card">
        <DataTable value={students} responsiveLayout="scroll">
          <Column field="id" header="ID"></Column>
          <Column field="nombre" header="Nombre"></Column>
          <Column field="matricula" header="Matricula"></Column>
          <Column field="edad" header="Edad"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default ShowAlumnos;
