import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { connectDB } from '@/utils/database.js'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.REACT_APP_GITHUB_CLIENT_ID, // Github에서 발급받은ID
      clientSecret: process.env.REACT_APP_GITHUB_CLIENT_SECRET, // Github에서 발급받은Secret
    }),
    // 추가로 사용할 소셜로그인 추가
    //GoogleProvider... 등등

    // ID/PW 방식 로그인 추가
    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드 
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
        // password: { label: "password", type: "password" }, // 추가하고 싶은 input 필드 추가하기
      },

      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고 
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {
        let db = (await connectDB).db('forum')
        let user = await db.collection('user_cred').findOne({ email: credentials.email })
        if (!user) {
          console.log('해당 이메일은 없음')
          return null
        }
        const pwCheck = await bcrypt.compare(credentials.password, user.password)
        if (!pwCheck) {
          console.log('비번틀림')
          return null
        }
        return user
      }
    }),
  ],

  //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
  session: {
    strategy: 'jwt', // session 방식을 쓸지 JWT를 쓸지
    maxAge: 30 * 24 * 60 * 60 //30일(24 * 60 * 60 === 1일)
  },


  callbacks: {
    //4. jwt 만들 때 실행되는 코드 
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        // JWT에 기입될 정보
        token.user = {}
        token.user.name = user.name
        token.user.email = user.email
      }
      return token
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      // 프론트에서 사용할 유저 정보 정하기
      session.user = token.user
      return session
    },
  },

  secret: process.env.REACT_APP_JWT_SECRET, // jwt생성시쓰는암호
  adapter: MongoDBAdapter(connectDB),
}
export default NextAuth(authOptions)