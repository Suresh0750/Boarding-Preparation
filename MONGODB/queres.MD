

// * CRUD OPERATION


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
  