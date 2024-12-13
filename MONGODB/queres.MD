

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
  
  # 