const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("public"));


app.post("/api", async (req, res) => {
  try {
    const requestData=req.body
    console.log(requestData)
    res.status(200).json({msg:requestData});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
