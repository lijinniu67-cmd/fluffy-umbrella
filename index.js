const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello CloudRun! 🎉 你的小程序后端已经跑起来啦');
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Listening on port ${port}`));
