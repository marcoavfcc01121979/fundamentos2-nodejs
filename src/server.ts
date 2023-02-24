// app.get("/hello", async () => {
//   // const transaction = await knex("transactions")
//   //   .insert({
//   //     id: crypto.randomUUID(),
//   //     title: "Transição de testes",
//   //     amount: 1000,
//   //   })
//   //   .returning("*");

import { app } from "./app";
import { env } from "./env";
//   // return transaction;

//   // const transactions = await knex("transactions").select("*");

//   // return transactions;

//   const transactions = await knex("transactions")
//     .where("amount", 1000)
//     .select("*");
// });

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("Http Server Running!");
  });
