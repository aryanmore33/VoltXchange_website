const mongoose = require("mongoose");

const energyListingSchema = new mongoose.Schema({
  presumerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   
    required: true,
  },
  microgridId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Microgrid",
    required: true,
  },
  energyType: { 
    type: String, 
    enum: ["solar", "wind", "hydro", "battery"], 
    required: true 
  },
  quantityKWh: {
     type: Number, 
     required: true
  },  // how much energy is offered

  pricePerKWh: { 
    type: Number, 
    required: true 
},  
  status: { 
    type: String, 
    enum: ["available", "sold", "expired"], 
    default: "available" 
  },
  createdAt: {  //so that the consumer knows how latest its listed
    type: Date,
    default: Date.now 
},
});

module.exports = mongoose.model("EnergyListing", energyListingSchema);

