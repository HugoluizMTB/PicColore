import { DataTypes } from "sequelize";
import sequelize from "../config/database/connection";

const Log = sequelize.define(
  "log",
  {
    log_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    is_event_open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

export default Log;
