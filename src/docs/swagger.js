import swaggerJSDoc from 'swagger-jsdoc';
import { userSchema, loginSchema } from './schemas/user.schema.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Server',
      version: '1.0.0',
      description: 'API Documentation for Server',
    },
    servers: [
      {
        url: 'https://youtube-clone-api-zqkd.onrender.com',
      },
    ],
    components: {
      schemas: {
        User: userSchema,
        Login: loginSchema,
      },
    },
  },
  apis: ['./src/routes/*.js'], // <-- Auto-generates docs from comments in route files
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
