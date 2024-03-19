let storedData = "My son Ahmed, 16 years old, is addicted to video games. What is the best precious gifts I can give him for his birthday?";


import express from 'express';

const app = express();
app.use(express.json());




// app.post('/send_data',express.json(),(req,res)=>{
//     const{userReq} = req.body;
//     console.log(userReq)
//     res.end("done")
// })

app.post('/send_data', express.json(), (req, res) => {
    // استقبال البيانات من الجسم (body) للطلب
    const { userReq } = req.body;

    // تحديث متغير storedData بالبيانات الجديدة
    storedData = userReq; // يتم هنا استبدال البيانات السابقة بالجديدة

    console.log("Data received and updated:", storedData);
    res.send("Data received and stored");
});


app.post('/send_data/', express.json(), (req, res) => {
    // استقبال البيانات من الجسم (body) للطلب
    const { userReq } = req.body;

    // تحديث متغير storedData بالبيانات الجديدة
    storedData = userReq; // يتم هنا استبدال البيانات السابقة بالجديدة

    console.log("Data received and updated:", storedData);
    res.send("Data received and stored");
});


app.get('/receive_data', express.json(), (req, res) => {
    // إرجاع البيانات المخزنة
    res.json({ y: storedData });
});




let x = null;

app.post('/AiResponse',express.json(),(req,res)=>{
    const AiResponse  = req.body;
    x = AiResponse;
    console.log(x);
    
    res.end("done")
})


app.get('/DisplayAiResponse',(req,res)=>{
        return res.json({ data: x });
    })




// app.get('/receive_data', express.json(), (req, res) => {
//     return res.json({y :'My son Ahmed, 40 years old, is addicted to video games. What is the best precious gifts I can give him for his birthday?'})
// });

app.listen(4000, () => {
    console.log('Node.js server is running on port 7070');
});