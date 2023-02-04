class UserController {
  userService = new UserService();

  getUser(id: string) {
    return this.userService.getUser(id);
  }
}

class UserService {
  userRepository = new UserRepository();

  getUser(id: string) {
    return this.userRepository.getUser(id);
  }
}

class UserRepository {
  getUser(id: string) {
    // go to // go to the DDBB
  }
}
