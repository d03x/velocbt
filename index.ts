import server from "@/server";
import { color } from "console-log-colors";

//listen segitu
server.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log(color.greenBright("http://localhost:3000"));
    console.log("=================LOG======================");
})