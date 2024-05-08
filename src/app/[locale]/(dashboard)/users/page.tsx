import DeleteUser from "../../../../components/DeleteUser";
// import { createUserAction } from "../../../actions";
import { getUsers } from "../../../api";
import CreateUserButton from "../../../../components/CreateUserButton";

const AdminPage = async () => {
  const users = await getUsers();
  return (
    <div className="h-full flex flex-col gap-10 px-5">
      <CreateUserButton />

      <div className="flex flex-col gap-4">
        {users.map((user: User) => (
          <div key={user.id} className="flex justify-between border-b gap-4">
            <div className="flex gap-4">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
            <DeleteUser id={user.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
