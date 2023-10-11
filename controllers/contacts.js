// on met dans controller les fonctions a executé lorsque les routes match avec celles du server
const Contact = require('../models/contact')

//function test
exports.test=async(req,res)=>{
    try {
        res.send('Hello this is just a test')
    } catch (error) {
        console.log(error)
    }
}

//add new contact
exports.addContact=async(req,res)=>{
    try {
        const {name,email,phone,favoritefood} = req.body
        const newContact = new Contact({name,email,phone,favoritefood})
        await newContact.save()
        res.status(200).send({success :[{msg:'Contact added successfully'}], newContact})
    } catch (error) {
        res.status(400).send({errors: 'Failed to add a Contact', error})
    }
}

//function get contacts
exports.getContacts=async(req,res)=>{
    try {
        const contacts=await Contact.find()
        res.status(200).send({success :[{msg:'Contact found successfully'}], contacts})
    } catch (error) {
        res.status(404).send({errors: 'Failed to find a Contact', error})
    }
}

//function getcontactbyid
exports.getContactsById=async(req,res)=>{
    try {
        const {_id}=req.params
        const contactById=await Contact.findById({_id}) //Contact en majuscule car model
        if (!contactById) {
            res.status(404).send('Contact not found')    
        } else{
            res.status(200).send({success :[{msg:'Contact found by id successfully'}], contactById})
        }
    } catch (error) {
        res.status(404).send({errors: 'Failed to find a Contact by Id', error})
    }
}

//function delete contact
exports.deleteContactById=async(req,res)=>{
    try {
        const {_id}=req.params
        const contactToDelete=await Contact.findByIdAndDelete({_id}) //Contact en majuscule car model
        if (!contactToDelete) {
            res.status(404).send('Contact not found')    
        } else{
            res.status(200).send({success :[{msg:'Contact deleted by id successfully'}], contactToDelete})
        }
    } catch (error) {
        res.status(404).send({errors: 'Failed to delete a Contact by Id', error})
    }
}

//function edit contact
exports.editContactById=async(req,res)=>{
    try {
        const {_id}=req.params
        const newContact=req.body
        const contactToEdit=await Contact.updateOne({_id},{$set: newContact}) //Contact en majuscule car model
        if (!contactToEdit) {
            res.status(404).send('Contact to Edit not found')    
        } else{
            res.status(200).send({success :[{msg:'Contact edited by id successfully'}], contactToEdit})
        }
    } catch (error) {
        res.status(404).send({errors: 'Failed to edit a Contact by Id', error})
    }
}


//Ne fonctionne pas
//function getContactsByFood
exports.getContactsByFood=async(req,res)=>{
    try {
        // const {_id}=req.params
        // console.log(_id)
        const {favoritefoods} = req.body
        const contactByFood=await Contact.find({favoritefood:favoritefoods}) //Contact en majuscule car model
        if (!contactByFood) {
            res.status(404).send('Contact by food not found')    
        } else{
            res.status(200).send({success :[{msg:'Contact found by food successfully'}], contactByFood})
        }
    } catch (error) {
        res.status(404).send({errors: 'Failed to find a Contact by food', error})
    }
}

// //function edit contact by Name
// //edit avec id
// exports.editContactByName=async(req,res)=>{
//     try {
//         const {_name}=req.params
//         console.log(_name)
//         const {newContactName}=req.body
//         console.log(newContactName)
//         const contactToEdit=await Contact.updateOne({_name},{$set:newContactName}) //Contact en majuscule car model
//         if (!contactToEdit) {
//             res.status(404).send('Contact to Edit By Name not found')    
//         } else{
//             res.status(200).send({success :[{msg:'Contact edited by Name successfully'}], contactToEdit})
//         }
//     } catch (error) {
//         res.status(404).send({errors: 'Failed to edit a Contact by Name', error})
//     }
// }

// //function delete contact by Name
// exports.deleteContactByName=async(req,res)=>{
//     try {
//         const {_id}=req.params
//         const contactToDelete=await Contact.findOneAndDelete({_id}) //Contact en majuscule car model
//         if (!contactToDelete) {
//             res.status(404).send('Contact not found')    
//         } else{
//             res.status(200).send({success :[{msg:'Contact deleted by Name successfully'}], contactToDelete})
//         }
//     } catch (error) {
//         res.status(404).send({errors: 'Failed to delete a Contact by Name', error})
//     }
// }

// //function getContactsByFoodAndSortByName
// exports.getContactsByFoodAndSort=async(req,res)=>{
//     try {
//         // const {_id}=req.params
//         const {favoritefood} = req.body
//         const contactByFood=await Contact.find({favoritefood})//Contact en majuscule car model
//         .sort({name:1}) // tri de manière ascendeante
//         .limit(2) //Nombre de résultat maximum
//         .select("-email") //Masquer l'email
//         // .select("name, email") //Afficher uniquement le nom et l'email
//         .exec().then(docs=>{
//         if (!contactByFood) {
//             res.status(404).send('Contact by food and sort not found')    
//         } else{
//             res.status(200).send({success :[{msg:'Contact found by food and sort successfully'}], contactByFood})
//         }
//         }
//     )
//     } catch (error) {
//         res.status(404).send({errors: 'Failed to find a Contact by food and sort', error})
//     }
// }