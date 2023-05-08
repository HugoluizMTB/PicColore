import { DataTypes } from "sequelize";
import sequelize from "../config/database/connection";
import Active_client from "./active_client.schema";
import Transactions from "./transaction.schema";
import Log from "./log.schema";
import User from "./user.schema";

const Event = sequelize.define(
  "event",
  {
    event_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    event_is_freetime_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    event_freetime_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    event_courtesy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    event_price_1: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    event_time_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    event_price_2: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    event_time_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    event_price_3: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    event_time_3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    event_price_4: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    event_time_4: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    event_additional_minute: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
