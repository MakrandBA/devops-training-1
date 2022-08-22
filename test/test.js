const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responded with Hello DevOps!", (done) => {
        request(app).get("/").expect("Hello DevOps!", done);
    })
});