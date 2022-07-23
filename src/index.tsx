import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model, Request } from "miragejs";

import { App } from "./App";



createServer({

    models: {
        transaction: Model,
    },

//     seeds(sever){
//         sever.db.loadData({
//             transactions: [
//        {
//             id:1,
//             title:"Dando pay",
//             type:"deposit",
//             category:"Dev",
//             amount:3000,
//             createAt: new Date("2020-02-04 06:00:00")

//         },
//         {
//             id:2,
//             title:"Dandos lay",
//             type: "withdraw",
//             category:"Devj",
//             amount: - 3000,
//             createAt: new Date("2020-02-04 09:00:00")

//         },
//         {
//             id:3,
//             title:"Dandos lay",
//             type: "withdraw",
//             category:"Devj",
//             amount:3000,
//             createAt: new Date("2020-02-04 09:00:00")

//         }

//     ]

//     })https://prod.liveshare.vsengsaas.visualstudio.com/join?8E192C475C4204CBFD6E30C8DB93CD2C74A5
// },

    routes() {
        this.namespace = "api";

        this.get("/transactions", () => {
            const response = this.schema.all("transaction")

            return response
        });

        this.post("/transactions", (schema:any , request:Request ) => {
            const data = JSON.parse(request.requestBody);

            return schema.transaction.create(data)
        });
    },
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
