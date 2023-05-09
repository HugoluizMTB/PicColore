import { DataTypes } from "sequelize";
import sequelize from "../config/database/connection";
import Children from "./child.schema";
import Active_client from "./active_client.schema";
import Transactions from "./transaction.schema";

const Client = sequelize.define(
  "client",
  {
    client_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    client_fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client_cpf: {
      type: DataTypes.CHAR(11),
      allowNull: false,
      unique: true,
    },
    client_phone_number: {
      type: DataTypes.STRING(13),
      allowNull: false,
    },
    client_visits: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

Client.hasMany(Children, {
  foreignKey: "client_id",
});

Client.hasOne(Active_client, {
  foreignKey: "client_id",
});

Client.hasMany(Transactions, {
  foreignKey: "client_id",
});

export default Client;
