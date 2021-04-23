var mongoose=require('mongoose')
const db=process.env.DB_CONNECTION
mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false })
.then(()=>console.log('data base conneccted succesfully'))
.catch(()=>console.log('some error is there'))