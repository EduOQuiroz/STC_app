import { StationSchema, STATION_TABLE } from "../models/station.model";
import { LineSchema, LINE_TABLE } from "../models/line.model";
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(LINE_TABLE, LineSchema);
    await queryInterface.createTable(STATION_TABLE, StationSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(STATION_TABLE);
    await queryInterface.dropTable(LINE_TABLE);
  }
};
