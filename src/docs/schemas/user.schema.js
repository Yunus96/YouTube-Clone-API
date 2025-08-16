const userSchema = {
    type: 'object',
    required: ['fullname', 'email', 'username', 'password','avatar'],
    properties: {
      fullname: {
        type: 'string',
        example: 'John Doe'
      },
      email: {
        type: 'string',
        example: 'john@example.com'
      },
      username: {
        type: 'string',
        example: 'johndoe'
      },
      password: {
        type: 'string',
        example: 'password'
      },
      avatar: {
        type: 'string',
        format: 'binary',
        description: 'upload image'
      }
    }
  };

const loginSchema = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username: {
        type: 'string',
        example: 'john@example.com'
      },
      password: {
        type: 'string',
        example: 'password'
      }
    }
  };
export  { userSchema, loginSchema };