const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = Schema;
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },

    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },

    price: {
      type: Number,
      require: true,
      maxlength: 32,
      trim: true,
    },

    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },

    stock: {
      type: Number,
    },

    sold: {
      type: Number,
      default: 0,
    },

    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
