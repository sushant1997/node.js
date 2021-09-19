
const pool = require('./db.js')
const queries = require('./queries')

// controllers for company_category

const getCategory = (req,res)=>{
  pool.query(queries.getCategory,(error,results)=>{
      if(error) throw error;
      res.status(200).json(results.rows);
  })  
};

const getCategoryById=(req,res)=>{
  const cid= parseInt(req.params.id);
  pool.query(queries.getCategoryById,[cid],(error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
})  
}
const addCategory=(req,res)=>{
  const {ctitle, ccreated_at, cupdated_at}= req.body;
  pool.query(queries.checkCategoryExists,[ctitle],(error,results)=>{
    if(results.rows.length){
      res.send('Category already exists');
    }else{
      // adding category
      pool.query(queries.addCategory,[ctitle,ccreated_at,cupdated_at],(error,results)=>{
        if(error) throw error;
        res.status(201).send("category created successfully");
      })
    }
    
  });

}

const deleteCategory=(req,res)=>{
  const cid = parseInt(req.params.id);

  pool.query(queries.getCategoryById,[cid],(error,results)=>{
    
    if(!results.rows.length){
      res.send('catagory does not exist');
    }else{

    pool.query(queries.deleteCategory,[cid],(error,results)=>{
      if(error) throw error;
      res.status(200).send("category deleted successfully")
    });
  }

    });
};

const updateCategory=(req,res)=>{
  const cid = parseInt(req.params.id);
  const {ctitle,ccreated_at,cupdated_at}= req.body;

  pool.query(queries.getCategoryById,[cid],(error,results)=>{
    
    if(!results.rows.length){
      res.send('catagory does not exist');
    }else{
     
      pool.query(queries.updateCategory,[ctitle,ccreated_at,cupdated_at, id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("category updated successfully")
      });
  }
})
 
};

//routes for company

const getCompany = (req,res)=>{
  pool.query(queries.getCompany,(error,results)=>{
      if(error) throw error;
      res.status(200).json(results.rows);
  })  
};

const getCompanyById=(req,res)=>{
  const id= parseInt(req.params.id);
  pool.query(queries.getCompanyById,[id],(error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
})  
}

const addCompany=(req,res)=>{
  const {category_id,title,image,description,status,created_at,updated_at}= req.body;
  pool.query(queries.checkCompanyExists,[title],(error,results)=>{
    if(results.rows.length){
      res.send('Company already exists');
    }else{
      // adding category
      pool.query(queries.addCompany,[category_id,title,image,description,status,created_at,updated_at],(error,results)=>{
        if(error) throw error;
        res.status(201).send("company created successfully");
      })
    }
    
  });

}
const deleteCompany=(req,res)=>{
  const id = parseInt(req.params.id);

  pool.query(queries.checkCompanyExistsById,[id],(error,results)=>{
    
    if(!results.rows.length){
      res.send('company does not exist');
    }else{

    pool.query(queries.deleteCompany,[id],(error,results)=>{
      if(error) throw error;
      res.status(200).send("category deleted successfully")
    });
  }

    });
};

const updateCompany=(req,res)=>{
  const id = parseInt(req.params.id);
  const {category_id,title,image,description,status,created_at,updated_at}= req.body;

  pool.query(queries.checkCompanyExistsById,[id],(error,results)=>{
    
    if(!results.rows.length){
      res.send('company does not exist');
    }else{
     
      pool.query(queries.updateCompany,[category_id,title,image,description,status,created_at,updated_at,id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("category updated successfully")
      });
  }
})
 
};



module.exports={getCategory, getCategoryById,addCategory,deleteCategory,updateCategory,getCompany,getCompanyById,addCompany,deleteCompany,updateCompany};