const model = require("../models/model");

//post:Catagories
async function create_Categories(req, res) {
  try {
    const Create = await model.Categories.create({
      type: "Savings",
      color: "#1F3B5C",
    });
    Create.save();
    return res.json(Create);
  } catch (err) {
    return res.status(400).json({ message: `ERROR: ${err}` });
  }
}

//get:Categories
async function get_Categories(req, res) {
  try {
    const data = await model.Categories.find({});

    const filter = await data.map((v) =>
      Object.assign({}, { type: v.type, color: v.color })
    );
    return res.json(filter);
  } catch (err) {
    return res.status(400).json({ message: `ERROR: ${err}` });
  }
}

//post:transaction
async function create_Transaction(req, res) {
  try {
    let { name, type, amount } = req.body;
    const Create = await model.Transaction({
      name,
      type,
      amount,
      date: new Date(),
    });
    Create.save();
    return res.json(Create);
  } catch (err) {
    return res.status(400).json({ message: `ERROR: ${err}` });
  }
}

//get:transaction
async function get_Transaction(req, res) {
  try {
    const data = await model.Transaction.find({});
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ message: `ERROR: ${err}` });
  }
}

//delete:transaction
async function delete_Transaction(req, res) {
  try {
    await model.Transaction.deleteOne(req.body);
    return res.json("Record Deleted...");
  } catch (err) {
    return res.status(400).json({ message: `ERROR: ${err}` });
  }
}

//get:labels
async function get_Labels(req, res) {
  try {
    await model.Transaction.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "type",
          foreignField: "type",
          as: "categories_info",
        },
      },
      {
        $unwind: "$categories_info",
      },
    ]).then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info['color'],
          }
        )
      );
      res.json(data);
    });
  } catch (err) {
    return res.status(400).json({ message: `LOOPUP ERROR: ${err}` });
  }
}

module.exports = {
  create_Categories,
  get_Categories,
  create_Transaction,
  get_Transaction,
  delete_Transaction,
  get_Labels,
};
