


## CRUD

    The basic methods of interacting with a MongoDB server are called CRUD operations. CRUD stands for Create, Read, Update, and Delete. These CRUD methods are the primary ways you will manage the data in your databases.

## aggregation & pipeline

    Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.


## Transaction 

    MongoDB transactions provide the means to execute multiple operations as a single logical unit of work. This ensures that either all operations within the transaction are completed successfully, or none of them take effect, maintaining data consistency and integrity.

    https://medium.com/@vikramgyawali57/transactions-in-mongodb-basics-and-example-4c2d8aab55eb


## capped collection

    Capped collections are fixed-size collections that insert and retrieve documents based on insertion order. Capped collections work similarly to circular buffers: once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents in the collection.
    
    ➡️ db.creatCollection("collectionName",{
                                            capped:true,
                                            size:100000,  // * size is require when we create the capped collection
                                            max:5000     // * max is denoted maximum number of document
                                            })

    
## lookup

    Performs a left outer join to a collection in the same database to filter in documents from the "joined" collection for processing. The $lookup stage adds a new array field to each input document. The new array field contains the matching documents from the "joined" collection.

    {
        $lookup:
            {
            from: <collection to join>,
            localField: <field from the input documents>,
            foreignField: <field from the documents of the "from" collection>,
            as: <output array field>
            }
    }

## rename operator

db.collection.update({},{$rename:{oldName:"rename"}})