"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireDefault(require("express"));
var _mongodb = require("mongodb");
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Database URL and client setup
var url = '';
var client = new _mongodb.MongoClient(url);

// Create the Express app
var app = (0, _express["default"])();
app.use(_express["default"]["static"]("frontend/public"));
app.use(_express["default"].json());

// Connect to MongoDB once when the server starts
function connectDB() {
  return _connectDB.apply(this, arguments);
} // LOGIN, SIGNUP, LOGOUT
function _connectDB() {
  _connectDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    return _regeneratorRuntime().wrap(function _callee15$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return client.connect();
        case 3:
          _context16.next = 9;
          break;
        case 5:
          _context16.prev = 5;
          _context16.t0 = _context16["catch"](0);
          console.error("MongoDB connection error:", _context16.t0);
          process.exit(1); // Exit process if unable to connect to MongoDB
        case 9:
        case "end":
          return _context16.stop();
      }
    }, _callee15, null, [[0, 5]]);
  }));
  return _connectDB.apply(this, arguments);
}
app.post('/login', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var database, col, userFound;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("users"); // Find user by either username or email
          _context.next = 5;
          return col.findOne({
            $or: [{
              'username': req.body.username
            }, {
              'email': req.body.username
            }],
            'password': req.body.password
          });
        case 5:
          userFound = _context.sent;
          if (userFound) {
            res.json({
              success: true,
              userId: userFound._id,
              user: userFound
            });
          } else {
            res.json({
              success: false,
              message: "Invalid username/email or password"
            });
          }
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error("Error during login:", _context.t0);
          res.status(500).json({
            success: false,
            message: "Internal Server Error"
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.post('/refresh', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var database, col, userFound;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("users"); // Find user by either username or email
          _context2.next = 5;
          return col.findOne({
            _id: new _mongodb.ObjectId(req.body.userId)
          });
        case 5:
          userFound = _context2.sent;
          if (userFound) {
            res.json({
              success: true,
              userId: userFound._id,
              user: userFound
            });
          } else {
            res.json({
              success: false,
              message: "No such user"
            });
          }
          _context2.next = 13;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error("Error during refresh:", _context2.t0);
          res.status(500).json({
            success: false,
            message: "Internal Server Error"
          });
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

//update user profile
app.put('/updateProfile', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, userId, userName, displayName, pronouns, email, profilePicture, database, col, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, userId = _req$body.userId, userName = _req$body.userName, displayName = _req$body.displayName, pronouns = _req$body.pronouns, email = _req$body.email, profilePicture = _req$body.profilePicture;
          if (userId) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            success: false,
            message: "User ID is required."
          }));
        case 3:
          _context3.prev = 3;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("users"); // Update user profile
          _context3.next = 8;
          return col.updateOne({
            '_id': new _mongodb.ObjectId(userId)
          }, {
            $set: {
              username: userName,
              displayname: displayName,
              pronouns: pronouns,
              email: email,
              profilePicture: profilePicture
            }
          });
        case 8:
          result = _context3.sent;
          if (result.modifiedCount > 0) {
            res.json({
              success: true,
              message: "Profile updated."
            });
          } else {
            res.status(200).json({
              success: false,
              message: "No changes made."
            });
          }
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](3);
          console.error("Error updating profile:", _context3.t0);
          res.status(500).json({
            success: false,
            message: "Failed to update profile."
          });
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 12]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

//fetch all users that do not match the users array
app.post('/users', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var database, col, usersArray, users;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("users");
          usersArray = req.body.users.map(function (user) {
            return new _mongodb.ObjectId(user);
          }); // Find user by either username or email
          _context4.next = 6;
          return col.find({
            _id: {
              $nin: usersArray
            }
          }).toArray();
        case 6:
          users = _context4.sent;
          if (users) {
            res.json({
              success: true,
              users: users
            });
          } else {
            res.json({
              success: false,
              message: "No users found"
            });
          }
          _context4.next = 14;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error("Error during refresh:", _context4.t0);
          res.status(500).json({
            success: false,
            message: "Internal Server Error"
          });
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

//add friend to friend array on user
app.put('/addFriend', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body2, userId, friendId, database, col, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body2 = req.body, userId = _req$body2.userId, friendId = _req$body2.friendId;
          if (!(!userId || !friendId)) {
            _context5.next = 3;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            success: false,
            message: "User ID and Friend ID are required."
          }));
        case 3:
          _context5.prev = 3;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("users"); // Update user profile
          _context5.next = 8;
          return col.updateOne({
            '_id': new _mongodb.ObjectId(userId)
          }, {
            $push: {
              friends: new _mongodb.ObjectId(friendId)
            }
          });
        case 8:
          result = _context5.sent;
          if (result.modifiedCount > 0) {
            res.json({
              success: true,
              message: "Friend added."
            });
          } else {
            res.status(200).json({
              success: false,
              message: "No changes made."
            });
          }
          _context5.next = 16;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](3);
          console.error("Error adding friend:", _context5.t0);
          res.status(500).json({
            success: false,
            message: "Failed to add friend."
          });
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[3, 12]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

//get users friends
app.post('/friends', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var database, col, friendsArray, users;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("users");
          friendsArray = req.body.friends.map(function (friend) {
            return new _mongodb.ObjectId(friend);
          }); // Find user by either username or email
          _context6.next = 6;
          return col.find({
            _id: {
              $in: friendsArray
            }
          }).toArray();
        case 6:
          users = _context6.sent;
          if (users) {
            res.json({
              success: true,
              users: users
            });
          } else {
            res.json({
              success: false,
              message: "No users found"
            });
          }
          _context6.next = 14;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.error("Error during refresh:", _context6.t0);
          res.status(500).json({
            success: false,
            message: "Internal Server Error"
          });
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

//get user by ID
app.post('/user', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var database, col, user;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("users"); // Find user by either username or email
          _context7.next = 5;
          return col.findOne({
            _id: new _mongodb.ObjectId(req.body.userId)
          });
        case 5:
          user = _context7.sent;
          if (user) {
            res.json({
              success: true,
              user: user
            });
          } else {
            res.json({
              success: false,
              message: "No such user"
            });
          }
          _context7.next = 13;
          break;
        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          console.error("Error during refresh:", _context7.t0);
          res.status(500).json({
            success: false,
            message: "Internal Server Error"
          });
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 9]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

// PLAYLISTS CRUD

// Fetch playlists associated with the logged-in user
app.post('/playlists', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var userId, database, col, playlists, _database, _col, user;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          userId = req.body.userId;
          if (userId) {
            _context8.next = 16;
            break;
          }
          _context8.prev = 2;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("playlists"); //Show all playlists
          _context8.next = 7;
          return col.find().toArray();
        case 7:
          playlists = _context8.sent;
          res.json(playlists);
          _context8.next = 15;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](2);
          console.error("Error fetching playlists:", _context8.t0);
          res.status(500).json({
            success: false,
            message: "Failed to fetch playlists."
          });
        case 15:
          return _context8.abrupt("return");
        case 16:
          _context8.prev = 16;
          _database = client.db('PlaylistrDB'); // Use the already connected client
          _col = _database.collection("users_full"); // Find playlists by userId
          _context8.next = 21;
          return _col.findOne({
            _id: new _mongodb.ObjectId(userId)
          });
        case 21:
          user = _context8.sent;
          res.json(user.playlists);
          _context8.next = 29;
          break;
        case 25:
          _context8.prev = 25;
          _context8.t1 = _context8["catch"](16);
          console.error("Error fetching playlists:", _context8.t1);
          res.status(500).json({
            success: false,
            message: "Failed to fetch playlists."
          });
        case 29:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 11], [16, 25]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

// Get a specific playlist
app.post('/playlist', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var id, database, col, songsCol, playlist, songIds, songs, _loop, i;
    return _regeneratorRuntime().wrap(function _callee9$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          id = req.body.id;
          if (id) {
            _context10.next = 3;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            success: false,
            message: "Playlist ID is required."
          }));
        case 3:
          _context10.prev = 3;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("playlists");
          songsCol = database.collection("songs"); // Fetch playlist by its ID
          _context10.next = 9;
          return col.findOne({
            '_id': new _mongodb.ObjectId(id)
          });
        case 9:
          playlist = _context10.sent;
          songIds = playlist.songs.map(function (song) {
            return new _mongodb.ObjectId(song._id);
          });
          _context10.next = 13;
          return songsCol.find({
            '_id': {
              $in: songIds
            }
          }).toArray();
        case 13:
          songs = _context10.sent;
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
            return _regeneratorRuntime().wrap(function _loop$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  songs[i].timestamp_added = playlist.songs.find(function (song) {
                    return song._id.toString() === songs[i]._id.toString();
                  }).timestamp_added;
                case 1:
                case "end":
                  return _context9.stop();
              }
            }, _loop);
          });
          i = 0;
        case 16:
          if (!(i < songs.length)) {
            _context10.next = 21;
            break;
          }
          return _context10.delegateYield(_loop(i), "t0", 18);
        case 18:
          i++;
          _context10.next = 16;
          break;
        case 21:
          playlist.songs = songs;
          if (playlist) {
            res.json(playlist);
          } else {
            res.status(404).json({
              success: false,
              message: "Playlist not found."
            });
          }
          _context10.next = 29;
          break;
        case 25:
          _context10.prev = 25;
          _context10.t1 = _context10["catch"](3);
          console.error("Error fetching playlist:", _context10.t1);
          res.status(500).json({
            success: false,
            message: "Failed to fetch playlist."
          });
        case 29:
        case "end":
          return _context10.stop();
      }
    }, _callee9, null, [[3, 25]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());
app.post('/createPlaylist', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body3, playlistName, userId, database, col, result;
    return _regeneratorRuntime().wrap(function _callee10$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _req$body3 = req.body, playlistName = _req$body3.playlistName, userId = _req$body3.userId;
          if (playlistName) {
            _context11.next = 3;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            success: false,
            message: "Playlist Name is required."
          }));
        case 3:
          _context11.prev = 3;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("playlists"); // Create a new playlist
          _context11.next = 8;
          return col.insertOne({
            _id: new _mongodb.ObjectId(),
            playlist_name: playlistName,
            songs: [],
            comments: [],
            duration: 0,
            picture: ""
          });
        case 8:
          result = _context11.sent;
          if (result.insertedCount > 0) {
            res.json({
              success: true,
              message: "Playlist created."
            });
          } else {
            res.status(500).json({
              success: false,
              message: "Failed to create playlist."
            });
          }
          _context11.next = 16;
          break;
        case 12:
          _context11.prev = 12;
          _context11.t0 = _context11["catch"](3);
          console.error("Error creating playlist:", _context11.t0);
          res.status(500).json({
            success: false,
            message: "Failed to create playlist."
          });
        case 16:
        case "end":
          return _context11.stop();
      }
    }, _callee10, null, [[3, 12]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

//SONGS CRUD
app.post('/song', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var id, database, col, song;
    return _regeneratorRuntime().wrap(function _callee11$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          id = req.body.id;
          if (id) {
            _context12.next = 3;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            success: false,
            message: "Playlist ID is required."
          }));
        case 3:
          _context12.prev = 3;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("songs"); // Fetch playlist by its ID
          _context12.next = 8;
          return col.findOne({
            '_id': new _mongodb.ObjectId(id)
          });
        case 8:
          song = _context12.sent;
          if (song) {
            res.json(song);
          } else {
            res.status(404).json({
              success: false,
              message: "Songs not found."
            });
          }
          _context12.next = 16;
          break;
        case 12:
          _context12.prev = 12;
          _context12.t0 = _context12["catch"](3);
          console.error("Error fetching playlist:", _context12.t0);
          res.status(500).json({
            success: false,
            message: "Failed to fetch songs."
          });
        case 16:
        case "end":
          return _context12.stop();
      }
    }, _callee11, null, [[3, 12]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());
app.post('/songs', /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var id, database, col, songs;
    return _regeneratorRuntime().wrap(function _callee12$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          id = req.body.id; // if (!id) {
          //     return res.status(400).json({ success: false, message: "Playlist ID is required." });
          // }
          _context13.prev = 1;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("songs"); // Fetch songs by its ID
          _context13.next = 6;
          return col.find().toArray();
        case 6:
          songs = _context13.sent;
          if (songs) {
            res.json(songs);
          } else {
            res.status(404).json({
              success: false,
              message: "Songs not found."
            });
          }
          _context13.next = 14;
          break;
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](1);
          console.error("Error fetching playlist:", _context13.t0);
          res.status(500).json({
            success: false,
            message: "Failed to fetch songs."
          });
        case 14:
        case "end":
          return _context13.stop();
      }
    }, _callee12, null, [[1, 10]]);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());

// Add a song to a playlist
app.post('/addSongToPlaylist', /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body4, playlist_id, song_id, database, col, checkIfPresent, result;
    return _regeneratorRuntime().wrap(function _callee13$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _req$body4 = req.body, playlist_id = _req$body4.playlist_id, song_id = _req$body4.song_id;
          if (!(!playlist_id || !song_id)) {
            _context14.next = 3;
            break;
          }
          return _context14.abrupt("return", res.status(400).json({
            success: false,
            message: "Playlist ID and Song ID are required."
          }));
        case 3:
          _context14.prev = 3;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("playlists");
          _context14.next = 8;
          return col.findOne({
            '_id': new _mongodb.ObjectId(playlist_id),
            'songs._id': new _mongodb.ObjectId(song_id)
          });
        case 8:
          checkIfPresent = _context14.sent;
          if (!checkIfPresent) {
            _context14.next = 11;
            break;
          }
          return _context14.abrupt("return", res.status(400).json({
            success: false,
            message: "Song already present in playlist."
          }));
        case 11:
          _context14.next = 13;
          return col.updateOne({
            '_id': new _mongodb.ObjectId(playlist_id)
          }, {
            $push: {
              songs: {
                $each: [{
                  _id: new _mongodb.ObjectId(song_id),
                  timestamp_added: new Date()
                }],
                $sort: {
                  timestamp_added: -1
                }
              }
            }
          });
        case 13:
          result = _context14.sent;
          if (result.modifiedCount > 0) {
            res.json({
              success: true,
              message: "Song added to playlist."
            });
          } else {
            res.status(404).json({
              success: false,
              message: "Playlist not found."
            });
          }
          _context14.next = 21;
          break;
        case 17:
          _context14.prev = 17;
          _context14.t0 = _context14["catch"](3);
          console.error("Error adding song to playlist:", _context14.t0);
          res.status(500).json({
            success: false,
            message: "Failed to add song to playlist."
          });
        case 21:
        case "end":
          return _context14.stop();
      }
    }, _callee13, null, [[3, 17]]);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());
app.put('/updatePlaylist', /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$body5, _id, songs, playlist_name, database, col, result;
    return _regeneratorRuntime().wrap(function _callee14$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _req$body5 = req.body, _id = _req$body5._id, songs = _req$body5.songs, playlist_name = _req$body5.playlist_name;
          if (!(!_id || !songs)) {
            _context15.next = 3;
            break;
          }
          return _context15.abrupt("return", res.status(400).json({
            success: false,
            message: "Playlist ID and Songs are required."
          }));
        case 3:
          _context15.prev = 3;
          database = client.db('PlaylistrDB'); // Use the already connected client
          col = database.collection("playlists"); // Update playlist with new songs
          _context15.next = 8;
          return col.updateOne({
            '_id': new _mongodb.ObjectId(_id)
          }, {
            $set: {
              songs: songs,
              playlist_name: playlist_name
            }
          });
        case 8:
          result = _context15.sent;
          if (result.modifiedCount > 0) {
            res.json({
              success: true,
              message: "Playlist updated."
            });
          } else {
            res.status(200).json({
              success: false,
              message: "No changes made."
            });
          }
          _context15.next = 16;
          break;
        case 12:
          _context15.prev = 12;
          _context15.t0 = _context15["catch"](3);
          console.error("Error updating playlist:", _context15.t0);
          res.status(500).json({
            success: false,
            message: "Failed to update playlist."
          });
        case 16:
        case "end":
          return _context15.stop();
      }
    }, _callee14, null, [[3, 12]]);
  }));
  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}());

// Fallback route for serving the frontend app
app.get('/*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../../frontend', 'public', 'index.html'));
});

// Connect to MongoDB and start the server
connectDB().then(function () {
  var PORT = 3005;
  app.listen(PORT, function () {
    console.log("Listening on http://localhost:".concat(PORT));
  });
})["catch"](function (err) {
  console.error("Failed to connect to MongoDB, server will not start", err);
});