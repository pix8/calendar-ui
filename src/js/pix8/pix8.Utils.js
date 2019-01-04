//HELPER/UTIL FUNCTIONS

// function getParents(el, parentSelector /* optional */) {
// 	// If no parentSelector defined will bubble up all the way to *document*
// 	if(parentSelector === undefined) {
// 		parentSelector = document;
// 	}

// 	var parents = [],
// 		p = el.parentNode;

// 	while(p !== parentSelector) {
// 		var o = p;
// 		parents.push(o);
// 		p = o.parentNode;
// 	}

// 	parents.push(parentSelector); // Push that parentSelector you wanted to stop at

// 	return parents;
// }

//https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
// var getClosest = function( elem, selector ) {

// 	// Element.matches() polyfill
// 	if(!Element.prototype.matches) {
// 		Element.prototype.matches =
// 		Element.prototype.matchesSelector ||
// 		Element.prototype.mozMatchesSelector ||
// 		Element.prototype.msMatchesSelector ||
// 		Element.prototype.oMatchesSelector ||
// 		Element.prototype.webkitMatchesSelector ||
// 		function(s) {
// 			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
// 			i = matches.length;
// 			while (--i >= 0 && matches.item(i) !== this) {}
// 			return i > -1;
// 		};
// 	}

// 	// Get closest match
// 	for( ; elem && elem !== document; elem = elem.parentNode ) {
// 		if ( elem.matches( selector ) ) return elem;
// 	}

// 	return null;
// };

//zero padding
export function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

//https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript?noredirect=1&lq=1
function isDate(query) {

	//method 1
	return ( query instanceof Date && !isNaN(query.valueOf()) );

	//method 2
	if(Object.prototype.toString.call(query) === "[object Date]" ) {
		// it is a date
		if( !isNaN(query.valueOf()) ) {  // d.valueOf() could also work
			// date is valid
		}else {
			// date is not valid
		}
	}else {
		// not a date
	}

	//method 3
	return isNaN( Date.parse(query) );
}

if (!Date.prototype.toISOString) {
  (function() {

    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  }());
}

export default {

	zeroPad(int) {
		return int < 10 ? '0' + int.toString() : int;
	},

	//console.log(new Intl.DateTimeFormat().format(date));
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat

	//convert local format to UTC ISO format
	//Takes date object OR ISO STRING and returns date object or iso string
	LocalToUTC_ISO(dateObj) {
		//console.log("INPUT DATE IS >> ", dateObj);
		if(!_.isDate(dateObj)) {
			dateObj = new Date(dateObj);

			return {
				date: null,
				iso: null
			}

		}else {
			var test1 = new Date(
				dateObj.getFullYear(),
				dateObj.getMonth(),
				dateObj.getDate(),
				dateObj.getHours(),
				dateObj.getMinutes(),
				dateObj.getSeconds(),
				0
				//dateObj.getUTCMilliseconds()
				//(dateObj.getUTCMilliseconds()/1000).toFixed(3).slice(2, 5)
			);
			
			var test2 = new Date(
				Date.UTC(
					dateObj.getUTCFullYear(),
					dateObj.getUTCMonth(),
					dateObj.getUTCDate(),
					dateObj.getUTCHours(),
					dateObj.getUTCMinutes(),
					dateObj.getUTCSeconds(),
					0
					//dateObj.getUTCMilliseconds()
					//(dateObj.getUTCMilliseconds()/1000).toFixed(3).slice(2, 5)
				)
			);

			var test3 = new Date(
				Date.UTC(
					dateObj.getUTCFullYear(),
					dateObj.getUTCMonth(),
					dateObj.getUTCDate(),
					dateObj.getUTCHours(),
					dateObj.getUTCMinutes() + new Date().getTimezoneOffset(),
					dateObj.getUTCSeconds(),
					0
					//dateObj.getUTCMilliseconds()
					//(dateObj.getUTCMilliseconds()/1000).toFixed(3).slice(2, 5)
				)
			);
			
			return {
				date: test3, //new Date(test),
				//string: new Date(dateObj.toUTCString()).toISOString()
				//string: new Date(test1.toUTCString()).toISOString()
				iso: test2.toISOString()
			}
		}
		//DEVNOTE: using new Date() will ALLWAY map to local and apply local system offsets to the created date instance
	},

	//Convert UTC ISO format to Local ISO format
	//Takes date object OR ISO STRING and returns date object or iso string
		//console.log(date.toLocaleString('en-GB')); //not reliably implemented + not ISO
	UTC_ISOToLocal(dateObj) {
		//console.log("INPUT DATE IS >> ", dateObj);
		if(!_.isDate(dateObj)) {
			dateObj = new Date(dateObj);
			//console.log("oh no we have a utc string DATE IS implicitly converted >> ", dateObj);

			var test1 = new Date(
				dateObj.getFullYear(),
				dateObj.getMonth(),
				dateObj.getDate(),
				dateObj.getHours(),
				dateObj.getMinutes(),
				dateObj.getSeconds(),
				0
				//dateObj.getUTCMilliseconds()
				//(dateObj.getUTCMilliseconds()/1000).toFixed(3).slice(2, 5)
			);

			var test2 = new Date(
				dateObj.getFullYear(),
				dateObj.getMonth(),
				dateObj.getDate(),
				dateObj.getHours(),
				dateObj.getMinutes() - new Date().getTimezoneOffset(),
				dateObj.getSeconds(),
				0
				//dateObj.getUTCMilliseconds()
				//(dateObj.getUTCMilliseconds()/1000).toFixed(3).slice(2, 5)
			);

			return {
				date: test1,
				iso: test2.toISOString() //ignores localised date object and gets converted back to utc
			}

		}else {

			var test1 = new Date(
				Date.UTC(
					dateObj.getUTCFullYear(),
					dateObj.getUTCMonth(),
					dateObj.getUTCDate(),
					dateObj.getUTCHours(),
					dateObj.getUTCMinutes() - new Date().getTimezoneOffset(),
					dateObj.getUTCSeconds(),
					0
					//dateObj.getUTCMilliseconds()
					//(dateObj.getUTCMilliseconds()/1000).toFixed(3).slice(2, 5)
				)
			);

			//if we use .toISOString it will return in UTC removing timezoneoffset(effectively undoing our localization so we counteract with *2)
			var test2 = new Date(
				Date.UTC(
					dateObj.getUTCFullYear(),
					dateObj.getUTCMonth(),
					dateObj.getUTCDate(),
					dateObj.getUTCHours(),
					dateObj.getUTCMinutes() - (new Date().getTimezoneOffset() * 2),
					dateObj.getUTCSeconds(),
					0
					//dateObj.getUTCMilliseconds()
					//(dateObj.getUTCMilliseconds()/1000).toFixed(3).slice(2, 5)
				)
			);

			
			return {
				date: test1, //new Date(dateObj),
				iso: test2.toISOString()
			}
		}
		
		
		//DEVNOTE: using new Date() will map to local and apply local system offsets to the created date instance
	}
}