import Sequelize from "sequelize";
import database from "../config/database/connection";
import Active_client from "./active_client.schema";
import Transactions from "./transaction.schema";

const Client = database.define(
  "clients",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone_number: {
      type: Sequelize.STRING(13),
      validate: {
        is: /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/i,
      },
      allowNull: false,
    },
    person_registration_number: {
      type: Sequelize.STRING(11),
      allowNull: true,
    },
    visits: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    freezeTableName: true,
  }
);

Client.hasOne(Active_client, {
  foreignKey: "client_id",
});

Client.hasMany(Transactions, {
  foreignKey: "client_id",
});

export default Client;
