import request from "supertest";
import { app } from "../app.js";
import { expect, test } from "@jest/globals";

describe("GET api/router", function () {
  it(" responds with bar data within a 20km radius", async function () {
    const response = await request(app).get("/api/router/-2.244644,53.483959");
    console.log(response)
    expect(response.status).toEqual(200);
    expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
    });
    for (let i = 0; i < response.body.payload.length; i++) {
      const barObject = response.body.payload[i];
      expect(barObject).toStrictEqual({
        _id: expect.any(String),
        City: expect.any(String),
        Name: expect.any(String),
        Cost: expect.any(Number),
        Description: expect.any(String),
        Image: expect.any(String),
        Rating: expect.any(Number),
        Address: expect.any(String),
        Postcode: expect.any(String),
        Hygiene: expect.any(Number),
        Happy_hr: expect.any(String),
        Website: expect.any(String),
        Music: expect.any(Array),
        Venue_type: expect.any(Array),
        Other: expect.any(Array),
        Vibe: expect.any(Array),
        Features: expect.any(Array),
        Who_with: expect.any(Array),
        location: expect.any(Object),
        dist: expect.any(Object),
      });
    }
  });
});
