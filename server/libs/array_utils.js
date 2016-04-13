import _ from 'lodash';

export default function _a(arr) {
  let wrapped = {
    _val: arr,
  };

  return _.assign(wrapped, utils);
}

function bumpElmNumbers(arr, options) {
  function compare(left, right, operator) {
    switch (operator) {
      case '>' : return left > right;
      case '<' : return left < right;
      case '>=' : return left >= right;
      case '<=' : return left <= right;
      case '==' : return left === right;
      case '!=' : return left !== right;
      case '===' : return left === right;
      case '!==' : return left !== right;
    }
  }

  function getCondition(elm) {
    return compare(elm.number, options.from, options.fromInclusive ? '>=' : '>') &&
    compare(elm.number, options.to, options.toInclusive ? '<=' : '<');
  }

  arr.forEach(function (elm) {
    if (getCondition(elm)) {
      elm.number += options.delta;
    }
  });

  return arr;
}

let utils = {
  getVal() {
    return this._val;
  },

  sort() {
    this._val = _.sortBy(this._val, 'number');

    return this;
  },

  setElmNumber(uid, number) {
    for (var i = 0; i < this._val.length; i++) {
      if (this._val[i].uid === uid) {
        this._val[i].number = number;
        break;
      }
    }

    return this;
  },

  bumpNumbers(from, to, delta) {
    let options = {from, to, delta, toInclusive: true};

    if (delta < 0) {
      options.fromInclusive = false;
    } else if (delta > 0) {
      options.fromInclusive = true;
    }

    bumpElmNumbers(this._val, options);
    return this;
  },

  add(elm) {
    this._val.push(elm);
    return this;
  },

  update(query, modifier) {
    function checkMatch(elm) {
      let keys = Object.getOwnPropertyNames(query);
      for (var i = 0; i < keys.length; i++) {
        let currentKey = keys[i];
        if (query[currentKey] !== elm[currentKey]) {
          return false;
        }
      }

      return true;
    }

    for (var i = 0; i < this._val.length; i++) {
      let currentSlide = this._val[i];
      if (checkMatch(currentSlide)) {
        _.assign(currentSlide, modifier);
      }
    }

    return this;
  },

  /**
   * @param condition - an object used to match elm object. e.g. {number: 1}
   */
  remove(condition) {
    this._val = _.reject(this._val, condition);

    return this;
  }
};
