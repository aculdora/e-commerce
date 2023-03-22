// Product
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
name : {
	type: String,
	required: [true, "name is required"]
},
description : {
	type: String,
	required: [true, "description is required"]
},
price : {
	type: Number,
	required: [true, "price is required"]
},
stocks : {
	type: Number,
	required: [true, "stocks is required"]
},
isActive : {
	type: Boolean,
	default: true
},
createdOn: {
	type: Date,
	default: new Date() 
},
orders: [
	
	{	
		userId : {
			type: String,
			required: [true, "userId is required"]
		},
		userEmail : {
			type: String,
			required: [false, "userEmail is optional"]
		},
		quantity : {
			type: String,
			required: [true, "quantity is required"]
		},
		purchasedOn : {
			type: Date,
			default: new Date()		
		}
	}

		]
})

module.exports = mongoose.model("Product", productSchema);
