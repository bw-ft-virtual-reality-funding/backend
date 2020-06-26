const request = require('supertest');
const server = require('./server');
const projects = require("./routers/projectRouter");
const users = require('./routers/userRouter');

describe('server.js', () => {
    it('should return an OK status code from the index route', async () => {
        const expectedStatusCode = 200;

        let response;
        return request(server).get('/').then(res => {
           response = res;
  
           expect(response.status).toEqual(expectedStatusCode);
         })
      });

      it('should return a message from the index route',  () => {
        

        return request(server)
        .get('/')
        .then(res => {
            expect(res.body).toEqual({msg: "api running"})
        })
        
    })

    it('should return a JSON object from the index route', async () => {
        const response = await request(server).get('/');
  
        expect(response.type).toEqual('application/json');
      });

      it("can run tests", () => {
        expect(true).toBeTruthy();
    })
})


describe('projectRouter.js', () => {

    describe("GET /api/projects", () => {
        it("should return a status of 200", async () => {
          const expectedStatus = 200;
          let token;
          const response = await request(server)
            .get("/")
    
          expect(response.status).toEqual(expectedStatus);
        })

        
    })

})