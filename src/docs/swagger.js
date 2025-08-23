import swaggerJSDoc from 'swagger-jsdoc';
import { userSchema, 
  loginSchema, 
  logoutSchema, 
  changePasswordSchema, 
  healthCheckSchema } from './schemas/user.schema.js';

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
        Logout: logoutSchema,
        ChangePassword: changePasswordSchema,
        HealthCheck: healthCheckSchema
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  apis: ['./src/routes/*.js'], // <-- Auto-generates docs from comments in route files
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
