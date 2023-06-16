const router = require('express').Router();
const employeeDATA = require('../model/employee')

//POST OPERATION(CREATE)
router.post('/employeelist', async (req, res) => {

    try {
      const item = req.body;
      const newdata = new employeeDATA(item);
      const saveData = await newdata.save();
      res.status(200).json("POST Successful");
      console.log(req.body)

    } catch (error) {
        console.log(error)
        res.send('error')
    }


})

//GET OPERATION(READ)

router.get('/employeelist', async (req, res) => {
    try {

        let data = await employeeDATA.find()
        // res.send(data)
        res.status(200).json(data)

    } catch (error) {
        console.log(error)
        // res.send('error')
        res.status(400).json(error)
    }
});
router.get('/employeelist/:id', async (req, res) => {
    try {
      const id = req.params.id;
  
      // Find the employee by ID
      const employee = await employeeDATA.findById(id);
  
      if (!employee) {
        return res.status(404).send('Employee not found');
      }
  
      res.json(employee);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error retrieving employee');
    }
  });
  
//PUT OPERATION(UPDATE)
router.put('/employeelist', async (req, res) => {
    try {
      const filter = { name: req.body.name }; 
      const updateData = {
        $set: {
          location: req.body.location,
          position: req.body.position,
          salary: req.body.salary
        }
      };
  
      const updatedEmployee = await employeeDATA.findOneAndUpdate(filter, updateData, { new: true });
  
      if (!updatedEmployee) {
        return res.status(404).send('Employee not found');
      }
  
      res.json(updatedEmployee);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error updating employee');
    }
  });
  
// router.put('/employeelist/:id', async (req, res) => {
//     try {
//       const id = req.params.id; // Retrieve the id from the request parameters
//       console.log('id check', id);
//       const updateData = {
//         $set: {
//           name: req.body.name,
//           location: req.body.location,
//           position: req.body.position,
//           salary: req.body.salary
//         }
//       };
  
//       const updated = await employeeDATA.findByIdAndUpdate(id, updateData);
  
//       if (!updated) {
//         return res.status(404).send('Employee not found');
//       }
  
//       res.json(updated);
//     } catch (error) {
//       console.log(error);
//       res.send('error');
//     }
//   });
  
  
//*DELETE OPERATION

router.delete("/employeelist/:id",async (req,res)=>{
  const _id = req.params.id;
  console.log(_id)
  try{
      const deleteOne = await employeeDATA.findByIdAndDelete({_id});
      res.status(200).json("Deleted Successfully");
      console.log('Successfully deleted');
  }catch(error){
      res.status(400).json("Cannot Delete the data")
      console.log('Cannot delete data');
  }
})



module.exports = router






// router.delete('/employeelist/:id', async (req, res) => {
//   try {
//     const index = req.params.id;
//     console.log('id check', index);

//     // Assuming Employee is your Mongoose model
//     const deletedEmployee = await employeeDATA.findByIdAndDelete(index);

//     if (!deletedEmployee) {
//       return res.status(404).send('Employee not found');
//     }

//     res.send('Deleted successfully');
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error occurred while deleting employee');
//   }
// });