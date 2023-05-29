import { DataTypes } from "sequelize";
import sequelize from "../config/database/connection";
import Active_client from "./active_client.schema";
import Transactions from "./transaction.schema";
import Log from "./log.schema";
import User from "./user.schema";

const Event = sequelize.define(
  "event",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
      comment: "Id do Evento"
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Nome do evento"
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Endereço do evento"
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Se o evento encontra-se aberto ou fechado no momento"
    },
    is_freetime_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "Se a precificação do tipo tempo livre está ativa no evento"
    },
    freetime_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "Preço do tempo livre"
    },
    courtesy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Se a precificação do tipo tempo livre está ativa no evento"
    },
    price_1: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "Preço 1 do evento"
    },
    time_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Tempo em minutos do preço 1 do evento"
    },
    price_2: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "Preço 2 do evento"
    },
    time_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Tempo em minutos do preço 2 do evento"
    },
    price_3: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "Preço 3 do evento"
    },
    time_3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Tempo em minutos do preço 3 do evento"
    },
    price_4: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "Preço 4 do evento"
    },
    time_4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Tempo em minutos do preço 4 do evento"
    },
    additional_minute: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Preço do minuto adicional caso o tempo seja excedido"
    },
  },
  {
    underscored: true,
  }
);

Event.hasMany(Active_client, {
  foreignKey: "event_id",
});

Event.hasMany(Transactions, {
  foreignKey: "event_id",
});

Event.hasMany(Log, {
  foreignKey: "event_id",
});

Event.hasMany(User, {
  foreignKey: "event_id",
});
export default Event;
