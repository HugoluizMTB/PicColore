import { DataTypes } from "sequelize";
import sequelize from "../config/database/connection";

const Transaction = sequelize.define(
  "transaction",
  {
    transaction_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    transaction_value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    event_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    client_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

export default Transaction;
