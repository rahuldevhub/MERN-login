import bcrypt from 'bcrypt';
import userdetail from "../model/user.js";


export const getuserdetails = (req, res) => {
    console.log("user detail get request")

    userdetail.find()
        .then(data => res.send(data))
        .then(err => { console.log(err) })
}

export const register = (req, res) => {
    console.log("post requested")

    bcrypt.genSalt(9, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hashedpassword) => {
            const password = hashedpassword;

            const data = new userdetail({
                username: req.body.username, password
            })

            const result = data.save()
            res.status(201).json(result)

            console.log("new user added")
        })
    })

}

export const login = async(req,res)=>{
  
//         var user = await userdetail.findOne({username : req.body.username})
//         if(!user){return res.status(400).send("user not registered pls register")}

//         var validpassword = await bcrypt.compare(req.body.password, user.password)
//         if(!validpassword){return res.send("password incorrect")}
//         if(response){
//             res.send("login sucefful")
//         }
// else{
//     res.json("no record found")
// }
        

   userdetail.findOne({username: req.body.username})
   .then(user => {
    if(user){
        bcrypt.compare(req.body.password, user.password, (err, response)=>{
            if(response){
                res.status(201).send("login sucessfull")
            }else{
                res.status(400).send("password incorrect")
            }

        })
    }else{
        res.status(400).send("user not registered pls register")
    }
   })
}