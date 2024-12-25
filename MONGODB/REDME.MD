


## CRUD

    The basic methods of interacting with a MongoDB server are called CRUD operations. CRUD stands for Create, Read, Update, and Delete. These CRUD methods are the primary ways you will manage the data in your databases.

## aggregation & pipeline

    Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.


## Transaction 

    MongoDB transactions provide the means to execute multiple operations as a single logical unit of work. This ensures that either all operations within the transaction are completed successfully, or none of them take effect, maintaining data consistency and integrity.

    https://medium.com/@vikramgyawali57/transactions-in-mongodb-basics-and-example-4c2d8aab55eb

# single purpose aggregations

    A "single-purpose aggregation" would refer to an aggregation operation where the aggregation pipeline or a particular stage focuses on a single task or goal. In this case, if the aggregation only performs one specific operation—like just grouping documents with the $group stage without any additional operations like filtering, sorting, or projecting—it can be considered a "single-purpose aggregation."

## capped collectionx

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


## aggregation

# match

    match is the stage in aggregation pipeline used to filter the documents

# $project

    $project is a stage in MongoDB's aggregation pipeline used to include, exclude, or compute fields in the output documents.

    You can select specific fields to show.
    Add new fields with computed values (like calculations).
    Exclude fields that you don’t need.

# journaling

    Journaling in MongoDB is a mechanism that ensures data integrity and durability in the event of an unexpected failure, such as a server crash, power outage, or system failure. It works by keeping a log of write operations in a journal file before committing those changes to the main data files on disk. This log can then be used to recover the database to a consistent state.

    In simpler terms, journaling acts like a safety net, ensuring that no data is lost during write operations even if the server crashes.

# sharding

    Sharding is a method MongoDB uses to split large amounts of data across multiple servers (called shards). This helps manage very large datasets and ensures better performance as the database grows.

# Horizontal Scaling 

    Horizontal scaling means adding more machines (servers) to handle increasing loads of data and requests. It distributes the workload across multiple servers instead of relying on one single powerful server.

# Vertical scalin

    Vertical scaling, also known as "scaling up," refers to increasing the capacity of a single server or system to handle more load. Instead of adding more machines, you enhance the existing server by adding more CPU, RAM, storage, or other resources to improve performance.

# Replication

    Replication is the process of copying data from one database (primary/master) to another database (secondary/slave) to ensure consistency and redundancy.

# relational vs non relational 

        Relational Databases (RDBMS)
            Tables with rows and columns
            Fixed schema, requires definition
            Fully ACID-compliant
            Vertical scalability (scaling up)
            Strong data integrity and constraints	
            Full support for transactions	
        Non-Relational Databases (NoSQL)
            Key-value, document, graph, column-family
            Schema-less or flexible schema
            Horizontal scalability (scaling out)
            Limited data integrity
            Limited or no support for transactions



# sql vs nosql

    sql is relational database nosql is non relational database.
    sql vertical scalability and nosql horizontal scalability
    sql store the data row and collumn and nosql key value pair
    sql is using ACID property and nosql is CAP theoram.

 # upsert true 

    using upsert true if the value is not also the document will create.

    db.collentionName.updateOne({name:'suresh'},{$set:{age:21},{upsert:true}})

# cap theoram

    Consistency (C) - Every read returns the most recent write (perfect data consistency).
    Availability (A) - The system always responds to a request (even if it's not the most up-to-date data).
    Partition Tolerance (P) - The system continues to function even if parts of it are disconnected (network partition).

# replica set
    A Replica Set in MongoDB is a group of servers (or nodes) that work together to maintain the same data set. 

    original data is present in primary node. there are many secondary node is there if the primary node is damage means at that side election will happens which is conducted by Heartbeat node.

# index

     indexing refers to the process of creating data structures (indexes) that improve the speed of data retrieval operations on a collection. Indexes are similar to the index in a book—they allow the database to quickly locate the documents that match specific query criteria, without having to scan the entire collection. 

# drawbacks of indexing

    Increased Storage Requirements
    Slower Write Operations
    Overhead for Index Maintenance
    Impact on Query Optimization
    Complexity in Index Management

# how to improve performance in mongodb

    using createIndex 

# TTL index
    TTL is time to live
    A TTL (Time-To-Live) index in MongoDB is a special type of index that automatically removes documents from a collection after a specified period of time.

# Pipeline

    Aggregation pipelines can have one or more "stages".
    A pipeline is a sequence of stages used in the aggregation framework to process and transform data. It allows you to perform complex queries and data manipulations, such as filtering, grouping, sorting, and reshaping documents, all in a sequence of steps.

#   query operators

    query operators are used to specify conditions for querying documents in a collection. These operators help you filter documents based on specific criteria such as matching values, ranges, logical conditions, and more 

    $eq, $gt, $gte, $lt, $lte.

#  Sharding Key

    MongoDB uses a sharding key to determine how documents are distributed across the shards.

 # shard components

    shard key: userId
    shards:
    Config Servers
    Mongos;

# storage engine in mongodb

    WiredTiger is the default storage engine

# type coercion

    In MongoDB, type coercion refers to the implicit or explicit conversion of values from one data type to another within queries or operations. 

# ACID Properties in MongoDB:

# Atomicity
    Atomicity in database transactions ensures that all operations within a transaction are treated as a single, indivisible unit. This means that either all operations in the transaction are completed successfully, or none are applied at all. If any part of the transaction fails, the entire transaction is rolled back, and the database remains unchanged. This all-or-nothing approach prevents partial updates that could lead to data inconsistencies.

In MongoDB, write operations are atomic at the document level. This means that even if multiple fields within a single document are being modified, the operation will either succeed entirely or have no effect, ensuring data integrity.

# Consistency    

    If a transaction begins, the database ensures that the data follows all integrity rules throughout the operation.
    After the transaction completes, the database must maintain a consistent state.
    In-between operations, the database may temporarily enter an inconsistent state, but when the transaction finishes, the consistency is restored.

# Isolation

    MongoDB operations are isolated at the document level.
    In multi-document transactions (MongoDB 4.0+), operations are isolated, meaning other operations cannot see intermediate states of data being updated until the transaction is committed.

# Durability

    In the context of ACID properties of databases, Durability refers to the guarantee that once a transaction has been committed, it will persist, even in the event of a system failure (such as a power outage or crash).

    Simple Explanation:
    Imagine you're using an online banking app, and you transfer money from one account to another. After completing the transaction, the system confirms that your money has been transferred successfully (commit). Durability ensures that, even if the app crashes immediately after, the transaction's effect — the money being transferred — will never be lost. When the system comes back online, the transaction data is safely written and stored in the database.

# namespace

    if the collection name is contains with database name is called name space. 
    example : 
        database name : profinders
        collection name : profinders.users // * here users is a collection name but we create with database name.

# Cluster index

    A clustered index in MongoDB is a type of index that determines the physical order in which documents are stored on disk, and it can significantly improve performance for range queries and time-series data. It is ideal for applications where data is inserted in a sequential manner, and you frequently query it in a sorted or ranged fashion. Clustered indexes help optimize disk usage, query performance, and the overall efficiency of read-heavy workloads.

# Cluster collections

    A clustered collection is a MongoDB collection that stores documents in a sorted order based on the value of the clustered index key. Collections created with a clustered index are called clustered collections. 

# cluster
    A cluster in MongoDB refers to a set of servers or nodes that work together to provide scalability, high availability, and data redundancy. This includes sharded clusters and replica sets, where multiple nodes (servers) are used to store and process data.

    Types of MongoDB Clusters
        Sharded Cluster (Horizontal Scaling)
        Replica Set Cluster (High Availability) 

 # schema less database
    As a NoSQL database, MongoDB is considered schemaless because it does not require a rigid, pre-defined schema like a relational database
    A schema database (like relational databases) follows a predefined structure or format for data storage, where the schema defines the organization of data and how the relationships between data elements are handled.

# Schema-less Database (NoSQL Database)
    A schema-less database (like most NoSQL databases) does not enforce a rigid schema or predefined structure for data. The data can vary from one record to another, and each record (or document) can have its own structure, allowing flexibility in how data is stored and retrieved.

#  insert vs save

    INSERT is used to insert the document to the database. save is working like shallow copy if we use find method and asign the object then if we insert the property and we use save is update the database is automatically.

# types of indexing

    Single Field index
    Compound Index
    Multikey Index
    Geospatial Index
    Clustered Index

# Compound Index
    
    A compound index is an index created on multiple fields. It allows MongoDB to optimize queries that filter on several fields at once.

# Multikey Index

    A multikey index is used when a field in a document contains an array. MongoDB automatically creates a multikey index when you index a field that holds an array of values.


# view
    A MongoDB view is a read-only queryable object whose contents are defined by an aggregation pipeline on other collections or views.

# benefits of mongodb

    Flexible Schema
    Scalability
    Performance
    Rich Query Language

# lookup

     $lookup stage is used in an aggregation pipeline to perform a left outer join between two collections. It allows you to combine documents from one collection with documents from another based on a specified condition.

# bulkWrite

    bulkWrite is a method used to perform multiple write operations (insert, update, delete, or replace) in a single request efficiently. It reduces the overhead of sending multiple requests to the server, improving performance.

    only we can do write operation we can't do read operations.

# explain()

    The explain() method in MongoDB is used to analyze and understand how a query is executed. It provides details about how MongoDB plans to run the query, which can help identify performance issues, missing indexes, or query inefficiencies.

# gridfs

    GridFS is a feature in MongoDB that allows you to store and retrieve large files (e.g., images, videos, PDFs, etc.) that exceed the BSON document size limit of 16 MB. It splits large files into smaller chunks and stores them across multiple documents in the database.

# Ad-Hoc Queries

    Ad-Hoc Queries in MongoDB refer to dynamic queries that are not predefined. These queries can be created on the fly, allowing developers to search for and retrieve data based on specific, changing conditions.

# covered queries
    covered query is one where all the fields required by the query (in the find() query, projection, and sort()) are available in the index itself. This means that MongoDB can satisfy the query using only the index without needing to access the actual documents in the collection.

# minKey: 
    Represents the smallest possible value in MongoDB.
# MaxKey: 
    Represents the largest possible value in MongoDB.       

# why BSON is faster

    Compact storage
    Faster parsing
    Efficient data types
    Faster indexing
    Predefined field lengths
    Reduced network transfer time
    Memory Efficiency   

# Alias

     aliasing refers to the ability to create alternate names or references for fields, collections, or databases. 