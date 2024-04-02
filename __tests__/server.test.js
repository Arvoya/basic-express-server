const supertest = require("supertest");
const app = require("../src/server.js");

const request = supertest(app);

describe("Testing server", () => {
  test("Should return status of 200 when valid name is given", async () => {
    let response = await request.get("/person/Isai");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('{"name":"Isai"}');
  });
  test("should return status of 404 when invalid route is given", async () => {
    let response = await request.get("/people");
    expect(response.status).toEqual(404);
    expect(response.text).toEqual("Invalid route");
  });

  test("should return status of 404 when invalid method is given", async () => {
    let response = await request.post("/people");
    expect(response.status).toEqual(404);
  });

  test("Should return a 500 when an invalid name is given", async () => {
    let response = await request.get("/person/Mary");
    expect(response.status).toEqual(500);
    expect(response.text).toEqual("Person not found!");
  });
});
