const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.storeCheckout = functions.https.onRequest((request, response) => {
  const totalCost = request.body.data.reduce((total, item) => {
    return total += item.price;
  }, 0);
  // functions.logger.info("Hello logs!", {structuredData: true});
  response.send({
    data: {
      totalCost,
    },
  });
});
