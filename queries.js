
//queries for company_category

const getCategory= 'SELECT * FROM company_category';
const getCategoryById= 'SELECT * FROM company_category WHERE cid= $1'
const checkCategoryExists='SELECT s FROM company_category s WHERE s.ctitle= $1'
const addCategory = 'INSERT INTO company_category (ctitle,ccreated_at,cupdated_at) VALUES ($1,$2,$3)';
const deleteCategory="DELETE FROM company_category WHERE cid= $1";
const updateCategory='UPDATE company_category SET ctitle= $1, ccreated_at=$2, cupdated_at=$3 WHERE cid=$4'

//queries for company
const getCompany= 'SELECT * FROM company LEFT JOIN company_category ON company.category_id= company_category.cid';
const getCompanyById=  'SELECT * FROM company LEFT JOIN company_category ON company.category_id= company_category.cid WHERE compnay.id=$1';
const checkCompanyExists='SELECT s FROM company s WHERE s.title= $1'
const addCompany = 'INSERT INTO company (category_id,title,image,description,status,created_at,updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7)';
const checkCompanyExistsById='SELECT * FROM company WHERE id= $1'
const deleteCompany="DELETE FROM company WHERE id= $1";
const updateCompany='UPDATE company SET category_id=$1,title= $2,image=$3,description=$4,status=$5, created_at=$6, updated_at=$7 WHERE id=$8'





module.exports= {getCategory, getCategoryById,checkCategoryExists,addCategory,deleteCategory,updateCategory,getCompany,getCompanyById,  checkCompanyExists,addCompany,deleteCompany,checkCompanyExistsById,updateCompany};