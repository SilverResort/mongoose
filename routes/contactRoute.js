// défini les routes

//require express
const express=require('express')
const {test, addContact, getContacts, getContactsById, deleteContactById, editContactById, getContactsByFood, editContactByName, deleteContactByName, getContactsByFoodAndSort}=require('../controllers/contacts')


const router=express.Router()

// route test
router.get('/test', test)
// route add Contact
router.post('/add_Contact', addContact)
// route get Contacts
router.get('/get_Contacts', getContacts)
// route get one Contacts By Id
router.get('/get_Contacts_By_Id/:_id', getContactsById)
// route delete one Contact By Id
router.delete('/delete_Contacts_By_Id/:_id', deleteContactById)
// route edit one Contact by ID
router.put('/edit_Contacts_By_Id/:_id', editContactById)


// route get Contacts By food
router.get('/get_Contacts_By_Food/', getContactsByFood)

// La suite ne fonctionne pas
// route edit one Contact by Name
// router.put('/edit_Contacts_By_Name/:_name', editContactByName)
// // route delete Contact By Name
// router.delete('/delete_Contacts_By_Name/:_id', deleteContactByName)
// // route get Contacts By food and sort by name
// router.get('/get_Contacts_By_Food_And_Sort/', getContactsByFoodAndSort)


//export router
module.exports=router