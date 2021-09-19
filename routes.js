const {Router}= require('express');
const controller= require('./controller');


const router= Router();

// routes for company_category 

router.get('/category',controller.getCategory);
router.get('/category/:id', controller.getCategoryById);
router.post('/category', controller.addCategory);
router.put('/category/:id', controller.updateCategory);
router.delete('/category/:id', controller.deleteCategory);

//routes for company

router.get('/company',controller.getCompany);
router.get('/company/:id', controller.getCompanyById);
router.post('/company', controller.addCompany);
router.put('/company/:id', controller.updateCompany);
 router.delete('/company/:id', controller.deleteCompany);






module.exports= router;