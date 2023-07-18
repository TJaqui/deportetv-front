import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connecMongo from "../../../../database/conn";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name:  "Credentials",
      async authorize(credentials, req) {
        connecMongo().catch((error) => {
          error: "connection faiiles";
        });
        
      const auth =  await axios.post('http://127.0.0.1:2021/api/autenticar',
      {email: credentials.email, 
      password: credentials.password})
        .then(function (response) {
          console.log(response.data.user)
          return response.data.user
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(auth)
      return auth
    
        
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
        
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if(user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      return session
    }
  }
});
