import axios from "axios";

interface IUser {
  user: {
    name: string;
    id: number;
    userId: number;
    email: string;
    token: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export const getServerSideProps = async () => {
  let user: IUser | undefined;
  await axios
    .post("http://localhost:3333/api/users/signIn", {
      email: "aydogdy12@gmail.com",
      password: "Aydogdy@2022",
    })
    .then((res) => {
      user = res.data.user;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: { user },
  };
};

const Home = ({ user }: IUser) => {
  // Show the user. No loading state is required
  return (
    <>
      <h1>Your Profile</h1>
      <pre>name: {user.name}</pre>
      <pre>email: {user.email}</pre>
    </>
  );
};

export default Home;
