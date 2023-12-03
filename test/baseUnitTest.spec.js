"use strict";
import chai from "chai";
const expect = chai.expect;
import BaseEntity from "../src/models/BaseEntity";
import BaseRepository from "../src/repository/BaseRepository";
const baseRepository = new BaseRepository();
describe("Unit Tests", () => {
  it("should get an entity", async () => {
    const result = await baseRepository.get("testing");
    expect(result).to.be.an.instanceof(BaseEntity);
  });
});
