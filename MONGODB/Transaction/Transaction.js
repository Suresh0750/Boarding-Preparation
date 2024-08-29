const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://localhost:27017'; // Connection string to your MongoDB instance
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Start a session
    const session = client.startSession();

    // Define the options for the transaction
    const transactionOptions = {
      readPreference: 'primary',
      readConcern: { level: 'local' },
      writeConcern: { w: 'majority' },
    };

    // Start a transaction
    session.startTransaction(transactionOptions);

    // Perform operations inside the transaction
    const accountsCollection = client.db('bank').collection('accounts');

    const fromAccount = 'acc123'; // Account to debit
    const toAccount = 'acc456'; // Account to credit
    const transferAmount = 100;

    try {
      // Debit from one account
      await accountsCollection.updateOne(
        { accountNumber: fromAccount },
        { $inc: { balance: -transferAmount } },
        { session }
      );

      // Credit to another account
      await accountsCollection.updateOne(
        { accountNumber: toAccount },
        { $inc: { balance: transferAmount } },
        { session }
      );

      // Commit the transaction
      await session.commitTransaction();
      console.log('Transaction committed successfully.');
    } catch (error) {
      console.error('Transaction aborted due to an error: ', error);
      await session.abortTransaction();
    } finally {
      session.endSession();
    }
  } catch (error) {
    console.error('Connection error: ', error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
