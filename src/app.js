import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import swaggerDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credientials: true
}))
app.use( 
    express.json({limit: "16kb"}) 
)
app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb"
    })
)
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from "./routes/user.routes.js"
/*
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"
*/

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "YouTube Clone API",
            version: "1.0.0",
            description: "YouTube Clone API",
        },
        servers: [
            {
                url: "https://youtube-clone-api-zqkd.onrender.com",
            },
        ],
    },
    apis: ["./src/routes/*.routes.js"],
};

//routes declaration
app.use("/api/v1/users", userRouter)


app.use("/api/v1/healthcheck", healthcheckRouter)
/*
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)
*/

const specs = swaggerDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// http://localhost:8000/api/v1/users/register

export { app }