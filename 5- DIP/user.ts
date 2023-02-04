interface User {
  id: string;
  username: string;
}

interface IUserRepository {
  getUser(id: string): Promise<User>;
}

class UserRepository implements IUserRepository {
  getUser(id: string) {
    // go to the DDBB
  }
}

interface IUserService {
  getUser(id: string): Promise<User>;
}

class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  getUser(id: string) {
    return this.userRepository.getUser(id);
  }
}

class UserController {
  constructor(private userService: IUserService) {}

  getUser(id: string) {
    return this.userService.getUser(id);
  }
}
