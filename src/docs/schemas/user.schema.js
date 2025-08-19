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

  const logoutSchema = {
    type: 'object',
    required: ['_id'],
    properties: {
      _id: {
        type: 'string',
        description: 'User ID',
        example: '64e2b9f8c7a1f1c23a4d9e01'
      }
    }
  };

  const changePasswordSchema = {
    type: 'object',
    required: ['oldPassword', 'newPassword'],
    properties: {
      oldPassword: {
        type: 'string',
        example: 'oldPassword123'
      },
      newPassword: {
        type: 'string',
        example: 'newSecurePassword!@#'
      }
    }
  };
export  { userSchema, loginSchema, logoutSchema, changePasswordSchema };