var mongoose    = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

//estas sentencias quitan los deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

var UserSchema = new mongoose.Schema({
    username:String,
    password:String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);