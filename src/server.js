import app from "./app";

const port=process.env.APP_PORT;

app.listen(port, ()=>{
  console.log(`escutando a porta ${port}`);
  console.log(`CRTL + CLIQUE EM  http://localhost:${port}`);
});