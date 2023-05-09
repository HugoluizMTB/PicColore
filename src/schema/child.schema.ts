import { DataTypes } from "sequelize";
import sequelize from "../config/database/connection";

const Children = sequelize.define(
  "children",
  {
    child_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    child_fullname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    underscored: true,
    freezeTableName: true,
  }
);

export default Children;
