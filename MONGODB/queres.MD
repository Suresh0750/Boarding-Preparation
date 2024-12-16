

## * CRUD OPERATION


# DATABASE

  * use database
  * show database
  * db.dropDatabase()

# COLLECTIONS

  * db.creatCollections('collections name')
  * show collections
  * db.collectionsname.drop()
  * db.collectionname.renameCollection('new collectionname')
    
# DOCUMENTS

  # CREATE
  * db.collectionname.insertOne({})
  * db.collectionname.insertMany({})
    
  # READ
  * db.collectionname.findOne({})
  * db.collectionname.find({})
  
  # UPDATE
  * db.brother.updateOne({_id:'675a913a799c077e0c684b8d'},{$set:{name:'jithin'}})
  * db.brother.update({},{$set:{name:'jithin'}})
  * db.brother.findOneAndUpdate({_id:'675a913a799c077e0c684b8d'},{$set:{name:'jithin'}})
  * db.collectionname.replaceOnd({condition},{replace document})   // * don't use set operater
  
  # DELETE
  * db.collectionname.deleteOne({condition})
  * db.collectionname.deleteMany({condition})
  * db.collectionname.findOneAndDelete({condition})
  

# FIELDS

  # CREATE
  * db.collectionname.updateOne({condition},{$set:{update value}})
  * db.collectionname.updateMany({condition},{$set:{update value}})
  
  # READ
  * db.collectionname.findOne({condition})
  * db.collectionname.find({condition})

  # UPDATE
  * db.collectionname.updateOne({condition},{$set:{update value}})
  * db.collectionname.updateMany({condition},{$set:{update value}})
  * db.collectionname.findOneAndUpdate({condition},{$set:{update value}})
  
  # DELETE
  * db.collectionname.updateOne({condition},{$unset:{deletekey:value}})
  * db.collectionname.updateMany({condition},{$unset:{deletekey:value}})
  * db.collectionname.updateMany({condition},{$unset:{deletekey:"$deletekey"}})     // * if the value is n't same for all field we can use $keyname as a value
  
  # RENAME FIELDS
  * db.collectionname.updateOne({condition},{$rename:"new name of filed"})4
  


 ## * Advanced Queries

 * db.collectionname.find().toArray()   // * for read the document

 * db.collectionname.find().forEach((value)=>{ print(value)})

  # distinct
  * db.collectionname.distinct('filed',condition,optional)  ex: db.practice.distinct('status',{totalAmount:{$gte:500}})
  
  # sort
  * db.collectionname.find().sort('filedname').forEach((val)=>print(val))   // * assending order
  * db.collectionname.find().sort({filedname:-1})   // * descending order

  # skip
  * db.collectionname.find().skip(4)
  
  # count
  * db.collectionname.count()
  * db.collectionname.countDocuments({we can apply condition})
  * db.collectionname.estimatedDocumentCount()  // * we can't apply the conditions
  

  # capped collection
  * db.createCollection('collection name',{capped:true,size:15000})
  
  # accumlator
  * db.collectionname.find({$gte:{filed:400}})
  * db.collectionname.find9{$lte:{filed:500}}
  * db.collectionname.find({$gt:{field:value}})
  * db.collectionname.find({$lt:{field:value}})


## from Orders collection
  
  # match


    db.practice.aggregate([
              {$match:{status:"Delivered"}}
            ])

    db.practice.aggregate([
        {$match:{status:"Delivered"}}
      ])

    db.practice.aggregate([
      {$match:{$or:[{item:{$size:2}},{totalAmount:{$lte:200}}]}}
    ])
    db.orders.aggregate([
      {$match:{status:{$eq:'Shipped'}}}
    ])
    db.orders.aggregate([
      {$match:{status:{$ne:"Pending"}}}
    ])
    db.orders.aggregate([
      {$match:{totalAmount:{$gt:1000}}}
    ])
    db.orders.aggregate([
      {$match:{totalAmount:{$gte:500}}}
    ])
    db.orders.aggregate([
      {$match:{totalAmount:{$lt:500}}}
    ])
    db.orders.aggregate([
      {$match:{$and:[{status:'Pending'},{totalAmount:{$lte:750}}]}}
    ])
    db.orders.aggregate([
      {$match:{"customer.email:{$ne:null}}}
    ])
    db.orders.aggregate([
      {$match:{items:{$in:['Book','Phone']}}}  // * use for check the array
    ])
    db.orders.aggregate([
      {$match:{items:{$nin:['Book','Pnone']}}} // * except this array
    ])
    db.orders.aggregate([
      {$match:{$and:[{status:{$ne:'Cancelled'}},{totalAmount:{$not:{$gt:1000}}}]}}
    ])
    db.orders.aggregate([
      {$match:{"customer.address.zip":{$type:"string"}}}
    ])
    db.orders.aggregate([
      {$match:{$expr:{$gte:['$totalAmount',1000]}}}
    ])
    db.orders.aggregate([
      {$match:{totalAmount:{$gte:1000}}}
    ])
    db.orders.aggregate([
      {$match:{totalAmount:{$regex:'/^j/,$options:'i'}}}    // *   here ^ symbol is denoted start with 
    ])
    db.orders.aggregate([
      {$match:{totalAmount:{$regex:/h$/,$options:'i'}}}  // * here $ symbol is denoted end value search, i denoted case sensitive (camal case,pascal case)
    ])
    db.orders.aggregate([
      {$match:{'customer.name':{$regex:/substring/,$options:'i'}}} // * search substring
    ])
    db.orders.aggregate([
      {$match:{_id:{$mod:[2,0]}}}   // * fetch even number, if we use 1 it will fetch odd number.
    ])
    db.orders.aggregate([
      {$match:{items:{$all:['Phone,"Charge"]}}}
    ])
    db.orders.aggregate([
      {$match:{items:{$size:2}}}
    ])
    db.orders.aggregate([
      {$match:{$or:[{items:{$all:['Laptop','Tablet']}},{items:{$in:['Phone']}}]}}
    ])
    db.orders.aggregate([
      {$match:{items:{$nin:['Book']}}}
    ])
    db.orders.aggregate([
      {$match:{$and:[{$expr:{$gte:[{$size:'$items'},1]}},{totalAmount:{$gt:900}}]}}
    ])

# $ Project 

    db.orders.aggregate([
      {$project:{orderId:1,status:1,totalAmount:1}}
    ])
    db.orders.aggregate([
      {$project:{_id:0,createdAt:0}}
    ])
    db.orders.aggregate([
      {$project:{totalWithTax:{$multiply:["$totalAmount,0.1]}}}
    ])
    db.orders.aggregate([
      {$project:{totalCount:{$size:'$items'}}}
    ])
    db.orders.aggregate([
      {$project:{customerName:'$customer.name'}}
    ])
    db.orders.aggregate([
      {$project:{orderId:1,'customer.name':1,'customer.address.city':1}}
    ])
    db.orders.aggregate([
      {$project:{orderId:1,orderSummary:{$concat:["$orderId",'-','$status']}}}   // * concat two field
    ])
    db.orders.aggregate([{
      $project: {
        orderId: 1,             // Include orderId for reference
        createdAt: 1,           // Include createdAt for reference
        formattedDate: {
          $dateToString: {
            format: "%Y-%m-%d", // Format as 'YYYY-MM-DD'
            date: { $toDate: "$createdAt" } // Convert to Date type first
          }
        }
      }
    }
  ])
  