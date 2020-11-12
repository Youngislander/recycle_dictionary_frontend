import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
<<<<<<< HEAD
    uri: "http://localhost:4000",
=======
    uri: process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://ecodictionarydb-39a06133be.herokuapp.com/",
>>>>>>> aafc62ac7a49b4b42520198c1f703c8ea9d8f972
    clientState: {
        defaults,
        resolvers
    },
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});