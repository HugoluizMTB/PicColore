import React, { useState, useEffect, Fragment } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./readOnlyRow.component";
import axios from 'axios'

axios.defaults.withCredentials=true
const FullTable = () => {

  const [costumers, setCostumers] = useState([]);
  const [addFormData, setAddFormData] = useState({
    responsibleFullName: "",
    childName: "",
    responsibleCPF: "",
    responsiblePhoneNumber: "",
  });
  
  const handleAddFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData: any = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event: any) => {
    event.preventDefault();

    const newCostumer = {
      id: nanoid(),
      responsibleFullName: addFormData.responsibleFullName,
      childName: addFormData.childName,
      responsibleCPF: addFormData.responsibleCPF,
      responsiblePhoneNumber: addFormData.responsiblePhoneNumber,
    };

    const newCostumers: any = [...costumers, newCostumer];
    setCostumers(newCostumers);
  };

  const handleDeleteClick = (costumerId: any) => {
    axios.post('http://localhost:3000/client', {
      responsible_full_Name: addFormData.responsibleFullName,
      child_name: addFormData.childName,
      responsible_cpf: addFormData.responsibleCPF,
      responsible_cellphone_number: addFormData.responsiblePhoneNumber
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
    
    const newCostumers = [...costumers];

    const index = costumers.findIndex((costumer: any) => costumer.id === costumerId);

    newCostumers.splice(index, 1);

    setCostumers(newCostumers);
  };


  //firebase auth (deactivated)
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser: any = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

    return (
      <div>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="responsibleFullName"
            required
            placeholder="Nome do responsável"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="childName"
            required
            placeholder="Nome da Criança"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="responsibleCPF"
            required
            placeholder="CPF do responsável"
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="responsiblePhoneNumber"
            required
            placeholder="Telefone do responsável"
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
        
        <form>
          <table>
            <thead>
              <tr>
                <th>Nome do responsável</th>
                <th>Nome da Criança</th>
                <th>Tempo de duração</th>
                <th>CPF do responsável</th>
                <th>Telefone do responsável</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {costumers.map((costumer) => (
                <Fragment>
                  {
                    <ReadOnlyRow
                      costumer={costumer}
                      handleDeleteClick={handleDeleteClick}
                    />
                  }
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </div>
      
    );
  };

export default FullTable;