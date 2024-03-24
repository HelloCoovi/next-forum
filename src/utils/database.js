import { MongoClient } from 'mongodb'

const url = process.env.REACT_APP_MONGODB_URI;
// 지정된 database에 데이터를 넣고 싶다면 ? 앞에 database 이름 추가
// mongodb+srv://admin:adminPW@admin-cluster.srpvh8e.mongodb.net/저장할Database이름?retryWrites=true&w=majority
const options = {
  // useNewUrlParser: true
}
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }

// import { connectDB } from "@/utils/database.js";
// const db = (await connectDB).db('forum');
// let result = await db.collection('post').find().toArray();