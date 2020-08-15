const request = require("supertest");
const server = require("../api/server.js");

const token = "sInR5cCI6IkpXVCJ9.yJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6InRlc3RlciIsImNyZWF0ZWRfYXQiOjE1OTc0MTI5MTZXhwIjoxNjI4OTQ4OTE0fQ.m5vyOQee2AaybGjtidAX9MOA9rJa6bBNmGic";

describe("Jokes Router", () => {
    describe("GET /api/jokes", () => {
        let res = {};
        beforeAll(async () => {
            res = (await request(server).get("/api/jokes").auth(token, {type: "bearer"}));
        });

        test("should return status 200 OK", () => {

            expect(res.status).toBe(200);
        });

        test("should return an array", () => {
            expect(res.body).toBeInstanceOf(Array);
        });
    })
});