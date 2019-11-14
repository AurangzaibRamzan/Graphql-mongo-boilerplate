
import UserModal from '../models/user';


function loadUsers() {
  const users = UserModal.find();
  return { data: users, error: null };
}

async function createUser(args) {
  const { name } = args;
  const user = await UserModal.findOne({
    name,
  });
  if (!user) {
    const newUser = new UserModal({
      name,
    });
    newUser.save();
    return { data: newUser, error: null };
  } else {
    return { data: user, error: 'User_already_exists' };
  }
}

export default {
  loadUsers,
  createUser,
};
