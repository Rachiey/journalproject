const app = require("./app");

//start running server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
