// const { request } = require('express')
// const expres = require('express')

// const app = expres()

// const PORT = 5000
 
// const news = [
//     {
//       title:'blablabla' ,
//       content:'kjhijdihoij' ,
//       date:new Date()
//     }]
// app.get('/news', async(request,res)=> {
//   try{
//   res.status(200).json({
//       message:'blabla',
//       news:news
//   })
//   }catch(e){
//       console.log(e)

//   }
// })
// const heroes = [
//     {
//         title:'MARVEL' ,
//         other:'blablabla'

//     }
// ]
// app.get('/heroes', async(request,res)=> {
//     try{
//     res.status(200).json({
//        name:  'Captain America',
//         about:'CAPTAIN AMERICA SUCKS!!!!!'
//     })
//     }catch(e){
//         console.log(e)
  
//     }
//   })
//   const number = [{
//      title:'fuck',
//      other:'fuckfuck'
//   }]
//   app.get('/numbers',async(request,res)=>{
//       try{
//        res.status(200).json({
//           numbers: 12345
//        })
//       }catch(e){
//           console.log(e)
//       }
//   })
  

// app.listen(PORT,() => {
//     console.log('backend запущен' + PORT)
// })

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const {router} = require('./routes/api')
app.use(bodyParser.json())
app.use(router)

const PORT = 8282; //3000 - 8666


app.listen(PORT,()=>{
 console.log(`приложение запущено на ${PORT} порту`)
})



