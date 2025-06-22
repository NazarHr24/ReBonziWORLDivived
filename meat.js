// cosmic fucking broke bonzitv
// how??????? explain???? *visible confusion*

// go behh yourself


var bonziTvCommercialMode = false;
var bonziTvCool = false;

// youtube url variables 
let youtube_url = "https://www.youtube.com/watch?v=";
let youtube_tiny_url = "https://www.youtube.com/watch?v=";
let youtube_shorts_url = "";
let youtube_embed_url = "";
let youtube_music_url = "";


/*
  "https://www.youtube.com/watch?v=97dyt7MXWpo",
  "https://www.youtube.com/watch?v=t0JyCdk5ymo",
  "https://www.youtube.com/watch?v=bzXzGMbdQfY",
  "https://www.youtube.com/watch?v=DuD_boVOl54",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=APAcU3YBhYc",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=MmB9b5njVbA",
  "https://www.youtube.com/watch?v=tYoO9XkCCHg",
  "https://www.youtube.com/watch?v=K0damuN_9bQ",
  "https://www.youtube.com/watch?v=hb59QZW2SCA",
  "https://www.youtube.com/watch?v=5ls7g9eH7ss",
  "https://www.youtube.com/watch?v=VJs_VALzi_8",
  "https://www.youtube.com/watch?v=GCA5CB5uUyA",
  "https://www.youtube.com/watch?v=Jz6FCFoL3k4",
  "https://www.youtube.com/watch?v=CDLyImqvqVY",
  "https://www.youtube.com/watch?v=Wt2rGmUmm2A",
  "https://www.youtube.com/watch?v=YnuYnzXUuGY",
  "https://www.youtube.com/watch?v=exjhztp_IQY"
*/

// the clusterfuck of video ids
var videoIdsCommercials = [
  "https://www.youtube.com/watch?v=b2OUKjLzcEc",
  "https://www.youtube.com/watch?v=Uyw-bne3G2A",
  "https://www.youtube.com/watch?v=gcGI1f24eyM",
  "https://www.youtube.com/watch?v=K0damuN_9bQ",
  "https://www.youtube.com/watch?v=5ls7g9eH7ss",
  "https://www.youtube.com/watch?v=hb59QZW2SCA",
  "https://www.youtube.com/watch?v=VJs_VALzi_8",
  "https://www.youtube.com/watch?v=GCA5CB5uUyA",
  "https://www.youtube.com/watch?v=h6cp-6Zthm4",
  "https://www.youtube.com/watch?v=DuD_boVOl54",
  "https://www.youtube.com/watch?v=Jz6FCFoL3k4",
  "https://www.youtube.com/watch?v=9943uVZ-eL4",
  "https://www.youtube.com/watch?v=3rvFiHa6rJk",
  "https://www.youtube.com/watch?v=DSYiXCEWsVc",
  "https://www.youtube.com/watch?v=AykkOSaLphY",
  "https://www.youtube.com/watch?v=liqetY2e7a8",
  "https://www.youtube.com/watch?v=NqFfHPleTHY",
  "https://www.youtube.com/watch?v=M9VJDQZq7ZE",
  "https://www.youtube.com/watch?v=6zL2ZN10LYc",
  "https://www.youtube.com/watch?v=eq0817IPBbY"
]
var videoIds4PM2430PM = [
];
var videoIds5PM = [
];
var videoIds7PM = [
];
var videoIds25MinutesofMSAgent = [
    "https://www.youtube.com/watch?v=e2qY8JtjJag",
    "https://www.youtube.com/watch?v=d-vB8qdNSYc",
    "https://www.youtube.com/watch?v=SNK74ecgFKg"
];

const log = require("./log.js").log;
const Ban = require("./ban.js");
const Utils = require("./utils.js");
const io = require('./index.js').io;
const settings = require("./settings.json");
const sanitize = require('sanitize-html');




// fuck off bozoworlders!
function sanitizeHTML(string){
return string
    .replaceAll("&",  "&amp;")
    .replaceAll("#",  "&num;")
    //.replaceAll("'",  "&apos;")
    .replaceAll("\"", "&quot;");
}
function sanitizeHTML2(string){
return string
    .replaceAll("&",  "&amp;")
    .replaceAll("#",  "&num;")
    .replaceAll("'",  "&apos;")
    .replaceAll("\"", "&quot;");
}

let roomsPublic = [];
let rooms = {};
let usersAll = [];

exports.beat = function() {
    io.on('connection', function(socket) {
        new User(socket);
    });
};

var settingsSantize = {
    allowedTags: ["h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "p", "a", "ul", "ol", "nl", "li", "b", "i", "strong", "em", "strike", "code", "hr", "br", "div", "table", "thead", "caption", "tbody", "tr", "th", "td", "pre", "iframe", "marquee", "button", "input", "details", "summary", "progress", "meter", "font", "span", "select", "option", "abbr", "acronym", "adress", "article", "aside", "bdi", "bdo", "big", "center", "site", "data", "datalist", "dl", "del", "dfn", "dialog", "dir", "dl", "dt", "fieldset", "figure", "figcaption", "header", "ins", "kbd", "legend", "mark", "nav", "optgroup", "form", "q", "rp", "rt", "ruby", "s", "sample", "section", "small", "sub", "sup", "template", "textarea", "tt", "u"],
    allowedAttributes: {
        a: ["href", "name", "target"],
        p: ["align"],
        table: ["align", "border", "bgcolor", "cellpadding", "cellspadding", "frame", "rules", "width"],
        tbody: ["align", "valign"],
        tfoot: ["align", "valign"],
        td: ["align", "colspan", "headers", "nowrap"],
        th: ["align", "colspan", "headers", "nowrap"],
        textarea: ["cols", "dirname", "disabled", "placeholder", "maxlength", "readonly", "required", "rows", "wrap"],
        pre: ["width"],
        ol: ["compact", "reversed", "start", "type"],
        option: ["disabled"],
        optgroup: ["disabled", "label", "selected"],
        legend: ["align"],
        li: ["type", "value"],
        hr: ["align", "noshade", "size", "width"],
        fieldset: ["disabled"],
        dialog: ["open"],
        dir: ["compact"],
        bdo: ["dir"],
        marquee: ["behavior", "bgcolor", "direction", "width", "height", "loop", "scrollamount", "scrolldelay"],
        button: ["disabled"],
        input: ["value", "type", "disabled", "maxlength", "max", "min", "placeholder", "readonly", "required", "checked"],
        details: ["open"],
        div: ["align"],
        progress: ["value", "max"],
        meter: ["value", "max", "min", "optimum", "low", "high"],
        font: ["size", "family", "color"],
        select: ["disabled", "multiple", "require"],
        ul: ["type", "compact"],
        "*": ["hidden", "spellcheck", "title", "contenteditable", "data-style"],
    },
    selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta", "wbr"],
    allowedSchemes: ["http", "https", "ftp", "mailto", "data"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: true,
};

function checkRoomEmpty(room) {
    if (room.users.length != 0) return;

    log.info.log('debug', 'removeRoom', {
        room: room
    });

    let publicIndex = roomsPublic.indexOf(room.rid);
    if (publicIndex != -1)
        roomsPublic.splice(publicIndex, 1);
    
    room.deconstruct();
    delete rooms[room.rid];
    delete room;
}

class Room {
    constructor(rid, prefs) {
        this.rid = rid;
        this.prefs = prefs;
        this.users = [];
    }

    deconstruct() {
        try {
            this.users.forEach((user) => {
                user.disconnect();
            });
        } catch (e) {
            log.info.log('warn', 'roomDeconstruct', {
                e: e,
                thisCtx: this
            });
        }
        //delete this.rid;
        //delete this.prefs;
        //delete this.users;
    }

    isFull() {
        return this.users.length >= this.prefs.room_max;
    }

    join(user) {
        user.socket.join(this.rid);
        this.users.push(user);

        this.updateUser(user);
    }

    leave(user) {
        // HACK
        try {
            this.emit('leave', {
                 guid: user.guid
            });
     
            let userIndex = this.users.indexOf(user);
     
            if (userIndex == -1) return;
            this.users.splice(userIndex, 1);
     
            checkRoomEmpty(this);
        } catch(e) {
            log.info.log('warn', 'roomLeave', {
                e: e,
                thisCtx: this
            });
        }
    }

    updateUser(user) {
		this.emit('update', {
			guid: user.guid,
			userPublic: user.public
        });
    }

    getUsersPublic() {
        let usersPublic = {};
        this.users.forEach((user) => {
            usersPublic[user.guid] = user.public;
        });
        return usersPublic;
    }

    emit(cmd, data) {
		io.to(this.rid).emit(cmd, data);
    }
}

function newRoom(rid, prefs) {
    rooms[rid] = new Room(rid, prefs);
    log.info.log('debug', 'newRoom', {
        rid: rid
    });
}

let userCommands = {
    "godmode": function(word) {
        let success = word == this.room.prefs.godword;
         if (success) {
              this.private.runlevel = 3;
              this.socket.emit("admin");
              this.public.flags.admin = true;
            } else {
              this.socket.emit("alert", { title: "wrong and your crap", msg: 'Wrong password. Sincerely, passwords everywhere!', button: "OK" });
            }
    },
    "sanitize": function() {
        let sanitizeTerms = ["false", "off", "disable", "disabled", "f", "no", "n"];
        let argsString = Utils.argsString(arguments);
        this.private.sanitize = !sanitizeTerms.includes(argsString.toLowerCase());
    },
    "joke": function() {
        this.room.emit("joke", {
            guid: this.guid,
            rng: Math.random()
        });
    },
    "fact": function() {
        this.room.emit("fact", {
            guid: this.guid,
            rng: Math.random()
        });
    },
    startyping: function () {
        this.room.emit("typing", { guid: this.guid })
    },
    stoptyping: function () {
        this.room.emit("stoptyping", { guid: this.guid })
    },
   "youtube": function(vidRaw) {
        if (vidRaw.includes("\"")) { 
            this.socket.emit("talk", {
            text: "GUYS! LOOK AT ME! I AM TRYING TO FUCK THE SERVER! BUT I AM ACTUALLY A SCRIPT KIDDIE! LOLOLOLOLOL",
            guid: this.guid
            })
            return
        };
        if (vidRaw.includes("'")) { 
            this.socket.emit("talk", {
            text: "GUYS! LOOK AT ME! I AM TRYING TO FUCK THE SERVER! BUT I AM ACTUALLY A SCRIPT KIDDIE! LOLOLOLOLOL",
            guid: this.guid
            })
            return
        };
        var vid = this.private.sanitize ? sanitize(sanitizeHTML(vidRaw)) : sanitizeHTML(vidRaw);
        this.room.emit("youtube", {
            guid: this.guid,
            vid: vid,
        });
    },
       "video": function (vidRaw) {
        if (vidRaw.includes("\"")) {return};
        if (vidRaw.includes("'")) {return};
        var vid = this.private.sanitize ? sanitize(sanitizeHTML(vidRaw)) : sanitizeHTML(vidRaw);
        this.room.emit("video", {
            guid: this.guid,
            vid: vid,
        });
    },
    "audio": function (audRaw) {
        if (audRaw.includes("\"")) {return};
        if (audRaw.includes("'")) {return};
        var aud = this.private.sanitize ? sanitize(sanitizeHTML(audRaw)) : sanitizeHTML(audRaw);
        this.room.emit("audio", {
            guid: this.guid,
            aud: aud,
        });
    },
     "image": function (imgRaw) {
        if (imgRaw.includes("\"")) {return};
        if (imgRaw.includes("'")) {return};
        var img = this.private.sanitize ? sanitize(sanitizeHTML(imgRaw)) : sanitizeHTML(imgRaw);
        this.room.emit("image", {
            guid: this.guid,
            img: img,
        });
    }, 
    "status": function() {
        let argsString = Utils.argsString(arguments);
        if (argsString.length > this.room.prefs.status_limit)
            return;
        if (argsString.includes("{COLOR}")) {
            argsString = this.public.color;
        }
        if (argsString.includes("{NAME}")) {
            argsString = sanitizeHTML2(this.public.name);
        }
        if (argsString.includes("{ROOM}")) {
            argsString = sanitizeHTML2(this.room.rid.slice(0,16));
        }
        if (argsString.includes("\"")) {
            return;
        }
        if (argsString.includes("'")) {
            return;
        }

        let status = argsString;
        this.public.status = this.private.sanitize ? sanitize(status) : status;
        this.room.updateUser(this);
    },
    "backflip": function(swag) {
        this.room.emit("backflip", {
            guid: this.guid,
            swag: swag == "swag"
        });
    },
    "linux": "passthrough",
    "pawn": "passthrough",
    "bees": "passthrough",
    "color": function(color) {
        if (typeof color != "undefined") {
            if (settings.bonziColors.indexOf(color) == -1)
                return;
            
            this.public.color = color;
        } else {
            let bc = settings.bonziColors;
            this.public.color = bc[
                Math.floor(Math.random() * bc.length)
            ];
        }

        this.room.updateUser(this);
    },
    "pope": function() {
        this.public.color = "pope";
        this.room.updateUser(this);
    },
    "asshole": function() {
        this.room.emit("asshole", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "voice": function(voice) {
        if (typeof voice != "undefined" && typeof voice == "string") {
            this.public.voice = voice;
        } else {
            this.public.voice = settings.bonziVoices[
                Math.floor(Math.random() * settings.bonziVoices.length)
            ];
        }
        this.room.updateUser(this);
    },
    "tts": function (voice) {
      voice = parseInt(voice);

      this.public.voice = voice;

      this.room.updateUser(this);
    },
     ban: function(data) {
        if (this.private.runlevel < 3) {
          this.socket.emit("alert", "admin=true");
          return;
        }
        let pu = this.room.getUsersPublic()[data];
        if (pu && pu.color) {
          let target;
          this.room.users.map((n) => {
            if (n.guid == data) {
              target = n;
            }
          });
            target.socket.emit("ban", {
              reason: "You got banned.",
            });
              Ban.addBan(target.getIp(), 24 * 3600, "You got banned.");
            Ban.handleBan(target.socket);
              target.disconnect();
        } else {
          this.socket.emit("alert", { title: "oh fuck", msg: "The user you are trying to kick left. Get dunked on nerd", button: "Ok I'll" });
        }
      },
      "unban": function(ip) {
  Ban.removeBan(ip)
  },
    crosscolor: function(color) {
        var clrurl = this.private.sanitize ? sanitize(color) : color;
        if (clrurl.match(/105197343/gi) || clrurl.match(/1038507/gi) || clrurl.match(/pope/gi) || clrurl.match(/plop/gi) || clrurl.match(/780654/gi)) {
          this.disconnect();
          return;
        }
        if (clrurl.match(/fjnviwjnf/gi)) {
            this.socket.emit("talk", {
                guid: this.guid,
                text: doofScript,
                say: "\pit=400\\spd=250\behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh ",
            });	
            return;
        }
        if ((clrurl.match(/.png/gi) || clrurl.match(/.jpeg/gi) || clrurl.match(/.gif/gi) || clrurl.match(/.webp/gi))) {
          this.public.color = "empty";
          this.public.color_cross = clrurl;
          this.room.updateUser(this);
        } else {

          this.socket.emit("alert", "The crosscolor must be a valid image URL from Discord.\nValid file image types are: .png, .jpeg, .gif, .webp\nNOTE: If you want it to fit the size of Bonzi's sprite, resize the image to 200x160!\nWARNING: Using Bonzi.lol colors will result in a ban!");

        }

        //this.socket.emit("alert", "Access to this command has been disabled.");
      },
      "hat": function(hat) {
         if (typeof hat != "undefined") {
            if (settings.bonziHats.indexOf(hat) == -1)
                return;
            
            this.public.hat = hat;
        } else {
            let bc = settings.bonziHats;
            this.public.hat = bc[
                Math.floor(Math.random() * bc.length)
            ];
        }

        this.room.updateUser(this);
      },
    "welcome": function() {
        this.room.emit("welcome", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    "owo": function() {
        this.room.emit("owo", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments))
        });
    },
    kick: function(data) {
        if (this.room.prefs.owner == this.guid) {
          let pu = this.room.getUsersPublic()[data];
          if (pu && pu.color) {
            let target;
            this.room.users.map((n) => {
              if (n.guid == data) {
                target = n;
              }
            });
            if (this.private.runlevel != 3) {
              target.socket.emit("kick", {
                reason: "You got kicked.",
              });
              target.disconnect();
              target.socket.disconnect('');
            }
          } else {
            this.socket.emit("alert", "Imagine kicking a user when left.");
          }
         }
        },
    "triggered": "passthrough",
    "vaporwave": function() {
        this.socket.emit("vaporwave");
        this.room.emit("youtube", {
            guid: this.guid,
            vid: "_4gl-FX2RvI"
        });
    },
    "unvaporwave": function() {
        this.socket.emit("unvaporwave");
    },
    "name": function() {
        let argsString = Utils.argsString(arguments);
        if (argsString.length > this.room.prefs.name_limit)
            return;

        let name = argsString || this.room.prefs.defaultName;
        this.public.name = this.private.sanitize ? sanitize(name) : name;
        this.room.updateUser(this);
    },
    "pitch": function(pitch) {
        pitch = parseInt(pitch);

        if (isNaN(pitch)) return;

        this.public.pitch = Math.max(
            Math.min(
                parseInt(pitch),
                this.room.prefs.pitch.max
            ),
            this.room.prefs.pitch.min
        );

        this.room.updateUser(this);
    },
    "speed": function(speed) {
        speed = parseInt(speed);

        if (isNaN(speed)) return;

        this.public.speed = Math.max(
            Math.min(
                parseInt(speed),
                this.room.prefs.speed.max
            ),
            this.room.prefs.speed.min
        );
        
        this.room.updateUser(this);
    }
};


class User {
    constructor(socket) {
        this.guid = Utils.guidGen();
        this.socket = socket;

        // Handle ban
	    if (Ban.isBanned(this.getIp())) {
            Ban.handleBan(this.socket);
        }

        this.private = {
            login: false,
            sanitize: true,
            runlevel: 0
        };

        this.public = {
            color: settings.bonziColors[Math.floor(
                Math.random() * settings.bonziColors.length
            )],
            voice: 'default',
                color_cross: 'none',
                hue: 0,
                saturation: 100,
                hat: "none",
                flags: {
                  admin: false,
                  nocolor: false,
                },
        };

        log.access.log('info', 'connect', {
            guid: this.guid,
            ip: this.getIp()
        });

       this.socket.on('login', this.login.bind(this));
    }

    getIp() {
        return this.socket.request.connection.remoteAddress;
    }

    getPort() {
        return this.socket.handshake.address.port;
    }

    login(data) {
        if (typeof data != 'object') return; // Crash fix (issue #9)
        
        if (this.private.login) return;

		log.info.log('info', 'login', {
			guid: this.guid,
        });
        
        let rid = data.room;
        
		// Check if room was explicitly specified
		var roomSpecified = true;

		// If not, set room to public
		if ((typeof rid == "undefined") || (rid === "")) {
			rid = roomsPublic[Math.max(roomsPublic.length - 1, 0)];
			roomSpecified = false;
		}
		log.info.log('debug', 'roomSpecified', {
			guid: this.guid,
			roomSpecified: roomSpecified
        });
        
		// If private room
		if (roomSpecified) {
            if (sanitize(rid) != rid) {
                this.socket.emit("loginFail", {
                    reason: "nameMal"
                });
                return;
            }

			// If room does not yet exist
			if (typeof rooms[rid] == "undefined") {
				// Clone default settings
				var tmpPrefs = JSON.parse(JSON.stringify(settings.prefs.private));
				// Set owner
				tmpPrefs.owner = this.guid;
                newRoom(rid, tmpPrefs);
			}
			// If room is full, fail login
			else if (rooms[rid].isFull()) {
				log.info.log('debug', 'loginFail', {
					guid: this.guid,
					reason: "full"
				});
				return this.socket.emit("loginFail", {
					reason: "full"
				});
			}
		// If public room
		} else {
			// If room does not exist or is full, create new room
			if ((typeof rooms[rid] == "undefined") || rooms[rid].isFull()) {
				rid = Utils.guidGen();
				roomsPublic.push(rid);
				// Create room
				newRoom(rid, settings.prefs.public);
			}
        }
        
        this.room = rooms[rid];

        // Check name
		this.public.name = sanitize(data.name) || this.room.prefs.defaultName;

		if (this.public.name.length > this.room.prefs.name_limit)
			return this.socket.emit("loginFail", {
				reason: "nameLength"
			});
		if (this.room.prefs.speed.default == "random")
			this.public.speed = Utils.randomRangeInt(
				this.room.prefs.speed.min,
				this.room.prefs.speed.max
			);
		else this.public.speed = this.room.prefs.speed.default;

		if (this.room.prefs.pitch.default == "random")
			this.public.pitch = Utils.randomRangeInt(
				this.room.prefs.pitch.min,
				this.room.prefs.pitch.max
			);
		else this.public.pitch = this.room.prefs.pitch.default;
        // Join room
        this.room.join(this);

        this.private.login = true;
        this.socket.removeAllListeners("login");

		// Send all user info
		this.socket.emit('updateAll', {
			usersPublic: this.room.getUsersPublic()
		});

		// Send room info
		this.socket.emit('room', {
			room: rid,
			isOwner: this.room.prefs.owner == this.guid,
			isPublic: roomsPublic.indexOf(rid) != -1
		});

        this.socket.on('talk', this.talk.bind(this));
        this.socket.on('command', this.command.bind(this));
        this.socket.on('disconnect', this.disconnect.bind(this));
    }

    talk(data) {
        if (typeof data != 'object') { // Crash fix (issue #9)
            data = {
                text: "HEY EVERYONE LOOK AT ME I'M TRYING TO SCREW WITH THE SERVER LMAO"
            };
        }

        log.info.log('debug', 'talk', {
            guid: this.guid,
            text: data.text
        });

        if (typeof data.text == "undefined")
            return;

          let text = this.private.sanitize ? sanitize(sanitizeHTML(data.text)) : sanitizeHTML(data.text);
        if ((text.length <= this.room.prefs.char_limit) && (text.length > 0)) {
            this.room.emit('talk', {
                guid: this.guid,
                text: sanitizeHTML(text)
            });
        }
    }

    command(data) {
        if (typeof data != 'object') return; // Crash fix (issue #9)

        var command;
        var args;
        
        try {
            var list = data.list;
            command = list[0].toLowerCase();
            args = list.slice(1);
    
            log.info.log('debug', command, {
                guid: this.guid,
                args: args
            });

            if (this.private.runlevel >= (this.room.prefs.runlevel[command] || 0)) {
                let commandFunc = userCommands[command];
                if (commandFunc == "passthrough")
                    this.room.emit(command, {
                        "guid": this.guid
                    });
                else commandFunc.apply(this, args);
            } else
                this.socket.emit('commandFail', {
                    reason: "runlevel"
                });
        } catch(e) {
            log.info.log('debug', 'commandFail', {
                guid: this.guid,
                command: command,
                args: args,
                reason: "unknown",
                exception: e
            });
            this.socket.emit('commandFail', {
                reason: "unknown"
            });
        }
    }

    disconnect() {
		let ip = "N/A";
		let port = "N/A";

		try {
			ip = this.getIp();
			port = this.getPort();
		} catch(e) { 
			log.info.log('warn', "exception", {
				guid: this.guid,
				exception: e
			});
		}

		log.access.log('info', 'disconnect', {
			guid: this.guid,
			ip: ip,
			port: port
		});
         
        this.socket.broadcast.emit('leave', {
            guid: this.guid
        });
        
        this.socket.removeAllListeners('talk');
        this.socket.removeAllListeners('command');
        this.socket.removeAllListeners('disconnect');

        this.room.leave(this);
    }
}
