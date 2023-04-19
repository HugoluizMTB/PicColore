import Active_client from '../schema/active_client.model'
import Client from '../schema/client.model'

export const checkIfClientIsActive = async (client_id: string) =>  {
    return await Active_client.findOne({ where: { client_id: client_id } })
}

export const checkIfClientExistsByCPF = async (client_cpf: string) => {
    return await Client.findOne({ where: { client_cpf: client_cpf }})
}

export const checkIfClientExistsByID = async (client_id: string) => {
    return await Client.findOne({ where: { client_id: client_id }})
}