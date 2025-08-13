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
        example: 'https://example.com/avatar.jpg'
      }
    }
  };

export default userSchema;