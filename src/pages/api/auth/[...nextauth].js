import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connecMongo from "../../../../database/conn";


export default NextAuth({
  providers: [
    CredentialsProvider({
      name:  "Credentials",
      async authorize(credentials, req) {
        connecMongo().catch((error) => {
          error: "connection faiiles";
        });
        const result = await fetch("http://127.0.0.1:2021/api/registro",{email: credentials.email, password:credentials.password})
        
        /*const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No user Found with email");
        }
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        if(!checkPassword || result.email !== credentials.email){
            throw new Error("username or password dosen't match")
        }*/
        return result;
      },
    }),
  ],
});
