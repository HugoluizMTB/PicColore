import Client from "../schema/client.schema";

export const createClientService = async (client: any) => {
  const validateCpf = await Client.findOne({ where: client });
  if (validateCpf) {
    return { msg: "Cpf já cadastrado" }
  };
  
  const createClient = await Client.create(client);
  return createClient;
};

export const getClientByCPFService = async (client: any) => {
  const getClient = await Client.findOne({ where: client });
  return getClient;
};

export const destroyClientByCpfService = async (client: any) => {
  const destroyClient = await Client.destroy({ where: client });
  return { msg: "Cliente excluído" };
};
