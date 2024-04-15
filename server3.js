import express from "express";
var app = express();
app.listen(8081, function () {
    console.log("server started on port 8081");

});
app.get("/users", function (req, res) {
    const users = {name: "John"};
    res.json(users);

});
app.get("/posts", function (req, res) {
    const posts = {postId: 1};
    res.json(posts);
});