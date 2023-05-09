import { DataTypes } from "sequelize";
import sequelize from "../config/database/connection";

const Active_client = sequelize.define(
  "active_client",
  {
    active_client_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    user_id: {
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

export default Active_client;
