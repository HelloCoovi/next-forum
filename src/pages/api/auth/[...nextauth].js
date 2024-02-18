import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
      clientSecret: process.env.REACT_APP_GITHUB_CLIENT_SECRET
    }),
    // 추가로 사용할 소셜로그인 추가
    //GoogleProvider... 등등
  ],
  secret: process.env.REACT_APP_JWT_SECRET
};
export default NextAuth(authOptions)