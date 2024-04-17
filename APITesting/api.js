const { expect } = require('chai');
const request = require('supertest');
const app = 'http://localhost:3000'

let authToken;

describe('api testing', () =>  {
    it('testing create new user', async () =>{
        const response = await request(app)
        .post('/api/v1/users')
        .send(({"name": "user", "email": "user@gmail.com", "password": "user123"}))
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('User registered with success');
        expect(response.body).to.have.property('token');
        }),
    it('testing authentication on the created user', async () =>{
        const response = await request(app)
        .post('/api/v1/auth')
        .send(({"email": "user@gmail.com", "password": "user123"}))
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('token');
        authToken=response.body.token
        console.log('Authorization token:', authToken);
        }),
    it('testing authentication on user with invalid input', async () => {
        const response = await request(app)
        .post('/api/v1/auth')
        .send(({"invalid_input": "xyx"}))
        expect(response.status).not.equal(200);
        })  
    it('testing get user by token', async () =>{
        const response = await request(app)
        .get('/api/v1/users')
        .set('Authorization', authToken)
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name');
        expect(response.body.name).to.equal('user');
        expect(response.body).to.have.property('email');
        expect(response.body.email).to.equal('user@gmail.com');
        expect(response.body).to.have.property('password');
        expect(response.body.password).to.equal('user123');
        expect(response.body).to.have.property('imageUrl');
        expect(response.body.imageUrl).to.equal('https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg');
        }),
    it('testing get user by invalid token', async () =>{
      const response = await request(app)
      .get('/api/v1/users')
      .set('Authorization', "invalidToken")
      expect(response.status).not.equal(200);
      }),    
    it('testing patch user by token', async () =>{
        const response = await request(app)
        .patch('/api/v1/users')
        .set('Authorization', authToken)
        .send(({"name": "newName","email": "new_email@gmail.com","password": "newpassword123"}))
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('User updated with success');
        }),
      it('testing patch user by invalid token', async () =>{
        const response = await request(app)
        .patch('/api/v1/users')
        .set('Authorization', "invalidToken")
        .send(({"name": "newName","email": "new_email@gmail.com","password": "newpassword123"}))
        expect(response.status).not.equal(200);
        }),
    it('testing delete user by token', async () =>{
        const response = await request(app)
        .delete('/api/v1/users')
        .set('Authorization', authToken)
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('User deleted with success');
        }),
    it('testing delete all users', async () =>{
        const createNewUserResponse = await request(app)
        .post('/api/v1/users')
        .send(({"name": "user2", "email": "user2@gmail.com", "password": "user123"}))
        expect(createNewUserResponse.status).to.equal(200);

        const response = await request(app)
        .delete('/api/v1/all-users')
        .send(({key_admin: "keyadmin123"}))
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('message');
        expect(response.body.message).to.equal('Users deleted with success');
        }),
    it('testing delete all users with invalid key', async () =>{
      const response = await request(app)
        .delete('/api/v1/all-users')
        .send(({key_admin: "keyadmin12345"}))
        expect(response.status).not.equal(200);
        })
  }
);