import { DataTypes } from "sequelize";
import sequelize from "../config/database/connection";
import Transactions from "./transaction.schema";
import Active_client from "./active_client.schema";
import Log from "./log.schema";

const User = sequelize.define(
  "user",
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    user_password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    user_fullname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    user_phone_number: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
    user_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_supervisor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

User.hasMany(Transactions, {
  foreignKey: "user_id",
});

User.hasMany(Active_client, {
  foreignKey: "user_id",
});

User.hasMany(Log, {
  foreignKey: "user_id_entry",
});

User.hasMany(Log, {
  foreignKey: "user_id_closing",
});

export default User;
