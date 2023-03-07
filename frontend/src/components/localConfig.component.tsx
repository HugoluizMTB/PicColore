import React from "react";

const LocalConfig = () => {
  return (
    <div>
      <h1>Configuração de evento</h1>

      <h2>Local</h2>
      <input
      type="text"
      name="localName"
      required
      />

      <h2>Nome do supervisor</h2>
      <input 
      type="text" 
      name="supervisorName"
      required
      /><br /><br />

      <button>Confirmar</button>
    </div>
  );
};

export default LocalConfig;
