module.exports = mongoose => {
  const Height = mongoose.model(
    "height",
    mongoose.Schema(
      {
        name: String,
        height: String,
        email: Email
      },
      { timestamps: true }
    )
  );

  schema.method("toJSON", function() {
   const { __v, _id, ...object } = this.toObject();
   object.id = _id;
   return object;
 });

 const Tutorial = mongoose.model("tutorial", schema);

  return Tutorial;
};
