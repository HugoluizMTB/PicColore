import { DataTypes } from "sequelize";
import sequelize from "../config/database/connection";
import Transactions from "./transaction.schema";
import Active_client from "./active_client.schema";
import Log from "./log.schema";

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "E-mail inválido.",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Senha do usuário para logar no sistema.",
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Salt de de senha do usuário.",
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "Nome completo do usuário.",
    },
    social_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Nome social do usuário.",
    },
    phone_number: {
      type: DataTypes.STRING(13),
      allowNull: false,
      comment: "Número de telefone do usuário.",
    },
    role: {
      type: DataTypes.ENUM,
      values: ["Admin", "Supervisor", "Operator", "System"],
      defaultValue: "Supervisor",
      allowNull: false,
      comment: "Permissões do sistema.",
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
      comment: "Status do usuário no sistema.",
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
