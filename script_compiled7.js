function n(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}
function p(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
        next: n(a)
    }
}
function q(a) {
    if (!(a instanceof Array)) {
        a = p(a);
        for (var b, d = []; !(b = a.next()).done; )
            d.push(b.value);
        a = d
    }
    return a
}
var aa = "function" == typeof Object.create ? Object.create : function(a) {
    function b() {}
    b.prototype = a;
    return new b
}
  , r = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, d) {
    if (a == Array.prototype || a == Object.prototype)
        return a;
    a[b] = d.value;
    return a
}
;
function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var d = a[b];
        if (d && d.Math == Math)
            return d
    }
    throw Error("Cannot find global object");
}
var t = ba(this);
function u(a, b) {
    if (b)
        a: {
            var d = t;
            a = a.split(".");
            for (var e = 0; e < a.length - 1; e++) {
                var c = a[e];
                if (!(c in d))
                    break a;
                d = d[c]
            }
            a = a[a.length - 1];
            e = d[a];
            b = b(e);
            b != e && null != b && r(d, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
}
var v;
if ("function" == typeof Object.setPrototypeOf)
    v = Object.setPrototypeOf;
else {
    var w;
    a: {
        var ca = {
            a: !0
        }
          , y = {};
        try {
            y.__proto__ = ca;
            w = y.a;
            break a
        } catch (a) {}
        w = !1
    }
    v = w ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b)
            throw new TypeError(a + " is not extensible");
        return a
    }
    : null
}
var z = v;
function A() {
    this.o = !1;
    this.h = null;
    this.ia = void 0;
    this.g = 1;
    this.K = 0;
    this.j = null
}
function B(a) {
    if (a.o)
        throw new TypeError("Generator is already running");
    a.o = !0
}
A.prototype.v = function(a) {
    this.ia = a
}
;
function C(a, b) {
    a.j = {
        Ga: b,
        Ha: !0
    };
    a.g = a.K
}
A.prototype.return = function(a) {
    this.j = {
        return: a
    };
    this.g = this.K
}
;
function da(a) {
    this.g = new A;
    this.h = a
}
function ea(a, b) {
    B(a.g);
    var d = a.g.h;
    if (d)
        return D(a, "return"in d ? d["return"] : function(e) {
            return {
                value: e,
                done: !0
            }
        }
        , b, a.g.return);
    a.g.return(b);
    return E(a)
}
function D(a, b, d, e) {
    try {
        var c = b.call(a.g.h, d);
        if (!(c instanceof Object))
            throw new TypeError("Iterator result " + c + " is not an object");
        if (!c.done)
            return a.g.o = !1,
            c;
        var g = c.value
    } catch (k) {
        return a.g.h = null,
        C(a.g, k),
        E(a)
    }
    a.g.h = null;
    e.call(a.g, g);
    return E(a)
}
function E(a) {
    for (; a.g.g; )
        try {
            var b = a.h(a.g);
            if (b)
                return a.g.o = !1,
                {
                    value: b.value,
                    done: !1
                }
        } catch (d) {
            a.g.ia = void 0,
            C(a.g, d)
        }
    a.g.o = !1;
    if (a.g.j) {
        b = a.g.j;
        a.g.j = null;
        if (b.Ha)
            throw b.Ga;
        return {
            value: b.return,
            done: !0
        }
    }
    return {
        value: void 0,
        done: !0
    }
}
function fa(a) {
    this.next = function(b) {
        B(a.g);
        a.g.h ? b = D(a, a.g.h.next, b, a.g.v) : (a.g.v(b),
        b = E(a));
        return b
    }
    ;
    this.throw = function(b) {
        B(a.g);
        a.g.h ? b = D(a, a.g.h["throw"], b, a.g.v) : (C(a.g, b),
        b = E(a));
        return b
    }
    ;
    this.return = function(b) {
        return ea(a, b)
    }
    ;
    this[Symbol.iterator] = function() {
        return this
    }
}
function ha(a) {
    var b = F;
    a = new fa(new da(a));
    z && b.prototype && z(a, b.prototype);
    return a
}
u("Symbol", function(a) {
    function b(g) {
        if (this instanceof b)
            throw new TypeError("Symbol is not a constructor");
        return new d(e + (g || "") + "_" + c++,g)
    }
    function d(g, k) {
        this.g = g;
        r(this, "description", {
            configurable: !0,
            writable: !0,
            value: k
        })
    }
    if (a)
        return a;
    d.prototype.toString = function() {
        return this.g
    }
    ;
    var e = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
      , c = 0;
    return b
});
u("Symbol.iterator", function(a) {
    if (a)
        return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), d = 0; d < b.length; d++) {
        var e = t[b[d]];
        "function" === typeof e && "function" != typeof e.prototype[a] && r(e.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return G(n(this))
            }
        })
    }
    return a
});
function G(a) {
    a = {
        next: a
    };
    a[Symbol.iterator] = function() {
        return this
    }
    ;
    return a
}
function ia(a, b) {
    a instanceof String && (a += "");
    var d = 0
      , e = !1
      , c = {
        next: function() {
            if (!e && d < a.length) {
                var g = d++;
                return {
                    value: b(g, a[g]),
                    done: !1
                }
            }
            e = !0;
            return {
                done: !0,
                value: void 0
            }
        }
    };
    c[Symbol.iterator] = function() {
        return c
    }
    ;
    return c
}
u("Array.prototype.entries", function(a) {
    return a ? a : function() {
        return ia(this, function(b, d) {
            return [b, d]
        })
    }
});
function H(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}
u("Object.entries", function(a) {
    return a ? a : function(b) {
        var d = [], e;
        for (e in b)
            H(b, e) && d.push([e, b[e]]);
        return d
    }
});
u("Object.is", function(a) {
    return a ? a : function(b, d) {
        return b === d ? 0 !== b || 1 / b === 1 / d : b !== b && d !== d
    }
});
u("Array.prototype.includes", function(a) {
    return a ? a : function(b, d) {
        var e = this;
        e instanceof String && (e = String(e));
        var c = e.length;
        d = d || 0;
        for (0 > d && (d = Math.max(d + c, 0)); d < c; d++) {
            var g = e[d];
            if (g === b || Object.is(g, b))
                return !0
        }
        return !1
    }
});
u("String.prototype.includes", function(a) {
    return a ? a : function(b, d) {
        if (null == this)
            throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        return -1 !== this.indexOf(b, d || 0)
    }
});
u("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return ia(this, function(b) {
            return b
        })
    }
});
u("WeakMap", function(a) {
    function b(h) {
        this.g = (f += Math.random() + 1).toString();
        if (h) {
            h = p(h);
            for (var l; !(l = h.next()).done; )
                l = l.value,
                this.set(l[0], l[1])
        }
    }
    function d() {}
    function e(h) {
        var l = typeof h;
        return "object" === l && null !== h || "function" === l
    }
    function c(h) {
        if (!H(h, k)) {
            var l = new d;
            r(h, k, {
                value: l
            })
        }
    }
    function g(h) {
        var l = Object[h];
        l && (Object[h] = function(m) {
            if (m instanceof d)
                return m;
            Object.isExtensible(m) && c(m);
            return l(m)
        }
        )
    }
    if (function() {
        if (!a || !Object.seal)
            return !1;
        try {
            var h = Object.seal({})
              , l = Object.seal({})
              , m = new a([[h, 2], [l, 3]]);
            if (2 != m.get(h) || 3 != m.get(l))
                return !1;
            m.delete(h);
            m.set(l, 4);
            return !m.has(h) && 4 == m.get(l)
        } catch (x) {
            return !1
        }
    }())
        return a;
    var k = "$jscomp_hidden_" + Math.random();
    g("freeze");
    g("preventExtensions");
    g("seal");
    var f = 0;
    b.prototype.set = function(h, l) {
        if (!e(h))
            throw Error("Invalid WeakMap key");
        c(h);
        if (!H(h, k))
            throw Error("WeakMap key fail: " + h);
        h[k][this.g] = l;
        return this
    }
    ;
    b.prototype.get = function(h) {
        return e(h) && H(h, k) ? h[k][this.g] : void 0
    }
    ;
    b.prototype.has = function(h) {
        return e(h) && H(h, k) && H(h[k], this.g)
    }
    ;
    b.prototype.delete = function(h) {
        return e(h) && H(h, k) && H(h[k], this.g) ? delete h[k][this.g] : !1
    }
    ;
    return b
});
u("Map", function(a) {
    function b() {
        var f = {};
        return f.B = f.next = f.head = f
    }
    function d(f, h) {
        var l = f.g;
        return G(function() {
            if (l) {
                for (; l.head != f.g; )
                    l = l.B;
                for (; l.next != l.head; )
                    return l = l.next,
                    {
                        done: !1,
                        value: h(l)
                    };
                l = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }
    function e(f, h) {
        var l = h && typeof h;
        "object" == l || "function" == l ? g.has(h) ? l = g.get(h) : (l = "" + ++k,
        g.set(h, l)) : l = "p_" + h;
        var m = f.h[l];
        if (m && H(f.h, l))
            for (f = 0; f < m.length; f++) {
                var x = m[f];
                if (h !== h && x.key !== x.key || h === x.key)
                    return {
                        id: l,
                        list: m,
                        index: f,
                        l: x
                    }
            }
        return {
            id: l,
            list: m,
            index: -1,
            l: void 0
        }
    }
    function c(f) {
        this.h = {};
        this.g = b();
        this.size = 0;
        if (f) {
            f = p(f);
            for (var h; !(h = f.next()).done; )
                h = h.value,
                this.set(h[0], h[1])
        }
    }
    if (function() {
        if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
            return !1;
        try {
            var f = Object.seal({
                x: 4
            })
              , h = new a(p([[f, "s"]]));
            if ("s" != h.get(f) || 1 != h.size || h.get({
                x: 4
            }) || h.set({
                x: 4
            }, "t") != h || 2 != h.size)
                return !1;
            var l = h.entries()
              , m = l.next();
            if (m.done || m.value[0] != f || "s" != m.value[1])
                return !1;
            m = l.next();
            return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
        } catch (x) {
            return !1
        }
    }())
        return a;
    var g = new WeakMap;
    c.prototype.set = function(f, h) {
        f = 0 === f ? 0 : f;
        var l = e(this, f);
        l.list || (l.list = this.h[l.id] = []);
        l.l ? l.l.value = h : (l.l = {
            next: this.g,
            B: this.g.B,
            head: this.g,
            key: f,
            value: h
        },
        l.list.push(l.l),
        this.g.B.next = l.l,
        this.g.B = l.l,
        this.size++);
        return this
    }
    ;
    c.prototype.delete = function(f) {
        f = e(this, f);
        return f.l && f.list ? (f.list.splice(f.index, 1),
        f.list.length || delete this.h[f.id],
        f.l.B.next = f.l.next,
        f.l.next.B = f.l.B,
        f.l.head = null,
        this.size--,
        !0) : !1
    }
    ;
    c.prototype.clear = function() {
        this.h = {};
        this.g = this.g.B = b();
        this.size = 0
    }
    ;
    c.prototype.has = function(f) {
        return !!e(this, f).l
    }
    ;
    c.prototype.get = function(f) {
        return (f = e(this, f).l) && f.value
    }
    ;
    c.prototype.entries = function() {
        return d(this, function(f) {
            return [f.key, f.value]
        })
    }
    ;
    c.prototype.keys = function() {
        return d(this, function(f) {
            return f.key
        })
    }
    ;
    c.prototype.values = function() {
        return d(this, function(f) {
            return f.value
        })
    }
    ;
    c.prototype.forEach = function(f, h) {
        for (var l = this.entries(), m; !(m = l.next()).done; )
            m = m.value,
            f.call(h, m[1], m[0], this)
    }
    ;
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var k = 0;
    return c
});
u("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global)
            throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var d = new RegExp(b,b instanceof RegExp ? void 0 : "g")
          , e = this
          , c = !1
          , g = {
            next: function() {
                if (c)
                    return {
                        value: void 0,
                        done: !0
                    };
                var k = d.exec(e);
                if (!k)
                    return c = !0,
                    {
                        value: void 0,
                        done: !0
                    };
                "" === k[0] && (d.lastIndex += 1);
                return {
                    value: k,
                    done: !1
                }
            }
        };
        g[Symbol.iterator] = function() {
            return g
        }
        ;
        return g
    }
});
var I = {
    mode: "splash"
};
function ja() {
    document.getElementById("warning").classList.add("hidden");
    document.getElementById("override").classList.add("hidden");
    document.getElementById("wait-ui").classList.add("hidden");
    document.getElementById("file-ui").classList.remove("invisible");
    document.getElementById("file-text").classList.remove("invisible");
    document.getElementById("file-load").classList.remove("active", "over");
    document.getElementById("splash-ui").classList.remove("hidden");
    document.getElementById("plot-ui").classList.add("hidden");
    document.getElementById("error-ui").classList.add("hidden");
    document.body.style.backgroundColor = "#f5f7fb"
}
function ka(a) {
    document.getElementById("wait-ui").classList.add("hidden");
    document.getElementById("file-ui").classList.add("invisible");
    document.getElementById("file-text").classList.add("invisible");
    document.getElementById("error-ui").classList.remove("hidden");
    a && 0 !== a.length && (document.getElementById("error-text").innerText = '"' + a + '"');
    document.getElementById("file-load").classList.remove("active", "over")
}
function J(a, b) {
    var d = I;
    a = void 0 === a ? "" : a;
    b = void 0 === b ? !0 : b;
    ja();
    switch (d.mode) {
    case "splash":
        ja();
        break;
    case "waiting":
        document.getElementById("file-ui").classList.add("invisible");
        document.getElementById("file-text").classList.add("invisible");
        document.getElementById("wait-ui").classList.remove("hidden");
        break;
    case "warning":
        var e = K
          , c = document.getElementById("warning-body");
        c.innerHTML = "";
        e = p(e.entries());
        for (var g = e.next(); !g.done; g = e.next()) {
            var k = p(g.value);
            g = k.next().value;
            k = k.next().value;
            var f = c.insertRow(-1);
            f.insertCell(-1).innerHTML = k;
            f.insertCell(-1).innerHTML = g
        }
        ka(a);
        document.getElementById("warning").classList.remove("hidden");
        document.getElementById("override").classList.remove("hidden");
        break;
    case "error":
        ka(a);
        break;
    case "plot":
        if (0 !== Object.entries(L).length || L.constructor !== Object)
            document.getElementById("splash-ui").classList.add("hidden"),
            document.getElementById("plot-ui").classList.remove("hidden"),
            document.body.style.backgroundColor = "#20262e",
            M(N)
    }
    b && history.pushState(d, "", "")
}
function O(a) {
    if (a.dataTransfer.types.includes("text/plain"))
        return !0
}
function la(a) {
    O(a) && a.target.classList.remove("over")
}
function ma(a) {
    a.dataTransfer.setData("text/plain", a.target.innerText);
    P.forEach(function(b) {
        return b.classList.add("active")
    });
    L[a.target.innerText].F || document.getElementById("color").classList.remove("active")
}
function na() {
    P.forEach(function(a) {
        return a.classList.remove("active")
    })
}
function oa(a) {
    O(a) && a.target.classList.add("over")
}
function pa(a) {
    O(a) && a.preventDefault && a.preventDefault();
    return !1
}
function qa(a) {
    a.preventDefault();
    if (O(a)) {
        P.forEach(function(d) {
            return d.classList.remove("active", "over")
        });
        var b = a.dataTransfer.getData("text/plain");
        "yaxis" === a.target.id ? Q(L[b].rows(), b) : "xaxis" === a.target.id ? R(L[b].rows(), b) : "color" === a.target.id && S(L[b].A(), L[b].u(), b);
        return !1
    }
}
var ra = document.querySelectorAll(".key")
  , P = document.querySelectorAll(".drop-region")
  , T = document.querySelector("body");
P.forEach(function(a) {
    a.addEventListener("dragenter", oa, !1);
    a.addEventListener("dragleave", la, !1);
    a.addEventListener("dragover", pa, !1);
    a.addEventListener("drop", qa, !1)
});
ra.forEach(function(a) {
    a.addEventListener("dragstart", ma, !1);
    a.addEventListener("dragend", na, !1)
});
function sa() {
    I.mode = "waiting";
    J("", !1)
}
//Take the data from the CSV file and store ist in array as "L"
function ta(a) {
    var b = {};
    a = p(a);
    for (var d = a.next(); !d.done; b = {
        L: b.L
    },
    d = a.next())
        b.L = d.value,
        sa(),
        d = new FileReader,
        d.onload = function(e) {
            return function(c) {
                try {
                    var g = ua(c.target.result);
                    L = g.data;
                    K = g.columnCount;
                    var k = e.L.name;
                    4 <= k.length && ".csv" === k.substring(k.length - 4).toLowerCase() && (k = k.substring(0, k.length - 4));
                    va(k)
                } catch (f) {
                    if (f instanceof U)
                        c = f,
                        I.mode = "error",
                        J(c.message);
                    else
                        throw f;
                }
            }
        }(b),
        d.readAsText(b.L)
}

var L = {}
  , K = {};
function wa() {
    function a(f, h) {
        return b[f].s - b[h].s
    }
    var b = L
      , d = Object.keys(b);
    if (1 == d.length)
        return {
            ja: d[0],
            ka: d[0],
            fa: null
        };
    var e = []
      , c = [];
    d.filter(function(f) {
        b[f].V ? e.push(f) : c.push(f)
    });
    e.sort(a);
    c.sort(a);
    d = 0 < e.length ? e.pop() : c.pop();
    for (var g = 0 < e.length ? e.pop() : c.pop(), k = null; 0 < c.length; )
        if (1 == b[c[0]].s)
            c.shift();
        else {
            if (b[c[0]].s === b[c[0]].ha)
                break;
            else if (40 < b[c[0]].s)
                break;
            k = c.shift()
        }
    if (null === k)
        for (; 0 < e.length; )
            if (1 == b[e[0]].s)
                e.shift();
            else {
                if (b[e[0]].s === b[e[0]].ha)
                    break;
                else if (40 < b[e[0]].s)
                    break;
                k = e.shift()
            }
    return {
        ja: g,
        ka: d,
        fa: k
    }
}
function xa(a, b) {
    document.getElementById("key-list").innerHTML = "";
    var d = Object.keys(L).sort();
    d.forEach(function(k) {
        var f = document.createElement("div");
        f.innerText = k;
        f.classList.add("key");
        L[k].F && f.classList.add("categorical");
        f.setAttribute("draggable", !0);
        f.addEventListener("dragstart", ma, !1);
        f.addEventListener("dragend", na, !1);
        document.getElementById("key-list").appendChild(f)
    });
    var e = !1;
    if (0 < d.length) {
        var c = wa();
        d = c.ja;
        var g = c.ka;
        c = c.fa;
        R(L[d].rows(), d);
        Q(L[g].rows(), g);
        null !== c && (S(L[c].A(), L[c].u(), c),
        e = !0)
    }
    I.mode = "plot";
    J();
    b && ya(a, e)
}
function va(a, b) {
    b = void 0 === b ? !0 : b;
    1 < K.size ? (document.getElementById("override").addEventListener("click", function() {
        return xa(a, b)
    }),
    I.mode = "warning",
    J("Expected all rows to have the same number columns")) : xa(a, b)
}
function za(a) {
    a.preventDefault();
    document.getElementById("file-load").classList.remove("active")
}
function Aa(a) {
    a.preventDefault();
    document.getElementById("file-load").classList.remove("over")
}
var Ba = document.getElementById("file-load");
Ba.addEventListener("dragover", function(a) {
    a.preventDefault();
    document.getElementById("file-load").classList.add("over")
}, !1);
Ba.addEventListener("dragleave", Aa, !1);
T.addEventListener("drop", function(a) {
    a.preventDefault();
    Aa(a);
    za(a);
    ta(a.dataTransfer.files)
}, !1);
T.addEventListener("dragover", function(a) {
    a.preventDefault();
    document.getElementById("file-load").classList.add("active")
}, !1);
T.addEventListener("dragleave", za, !1);
function Ca() {
    this.h = [];
    this.o = [];
    this.j = [];
    this.v = [];
    this.g = !1;
    this.K = [""];
    this.A = this.u = null
}
function Da(a) {
    var b = 0;
    a.forEach(function(d) {
        d.O = b;
        d.ga = d.O + d.count;
        b += d.count
    })
}
function V(a, b, d, e) {
    var c = [];
    e.forEach(function(g) {
        return c.push(g.O)
    });
    for (e = 0; e < d.length; ++e)
        a[c[d[e]]] = b[e],
        c[d[e]]++
}
function Ea(a, b) {
    var d = [];
    if (a.g)
        for (var e = !Array.isArray(b), c = p(a.u.keys()), g = c.next(); !g.done; g = c.next())
            g = a.u.get(g.value),
            e ? d.push(b.subarray(g.O, g.ga)) : d.push(b.slice(g.O, g.ga));
    else
        d.push(b);
    return d
}
function Fa(a) {
    return a.g ? Ea(a, a.o) : [a.h]
}
function Ga(a) {
    return a.g ? Ea(a, a.v) : [a.j]
}
function ya(a, b) {
    var d = N;
    d.active = !0;
    d.title = a;
    void 0 !== b && b || (d.h = null,
    d.g.g = !1);
    Plotly.newPlot("plot", Ha(d), Ia(d), Ja(d)) //(Div, data variable, layout, other...)
}
function Ha(a) {
    var b = {
        type: "scattergl"
    };
    a.j && (b = Object.assign({}, b, {
        mode: "markers",
        opacity: .5,
        unselected: {
            marker: {
                color: "gray"
            }
        }
    }));
    var d = []
      , e = Fa(a.g)
      , c = Ga(a.g);
    a = a.g.K;
    for (var g = 0; g < e.length; ++g) {
        var k = Object.assign({}, b);
        k.name = a[g];
        k.x = e[g];
        k.y = c[g];
        d.push(k)
    }
    d.sort(function(f, h) {
        return f.name > h.name ? 1 : -1
    });
    return d
}
function Ia(a) {
    var b = {
        title: {
            text: a.title,
            font: {
                size: 24
            }
        },
        autosize: !0,
        margin: {
            t: 80,
            b: 20
        },
        xaxis: {
            automargin: !0,
            title: {
                text: a.o,
                font: {
                    size: 22
                },
                standoff: 2
            }
        },
        yaxis: {
            automargin: !0,
            title: {
                text: a.v,
                font: {
                    size: 22
                },
                standoff: 2
            }
        },
        newshape: {
            layer: a.j ? "above" : "below"
        },
        hovermode: "closest"
    };
    a.h && (b.showlegend = !0,
    b.legend = {
        title: {
            text: a.h,
            font: {
                size: 22
            }
        }
    });
    return b
}
function Ja(a) {
    var b = {
        responsive: !0,
        displayModeBar: !0,
        displaylogo: !0,
        modeBarButtons: [[{
            name: "Scatter Chart",
            attr: "newshape.layer",
            val: "above",
            icon: {
                width: "21",
                height: "22",
                path: "M 5 3 v 17 h 17 v 2 H 3 V 3 h 2 z z M 14 16 A 1 1 0 0 0 19 16 A 1 1 0 0 0 14 16 M 7 11 A 1 1 0 0 0 12 11 A 1 1 0 0 0 7 11 M 15 7 A 1 1 0 0 0 20 7 A 1 1 0 0 0 15 7"
            },
            click: function() {
                a.j = !0;
                M(a)
            }
        }, {
            name: "Line Chart",
            attr: "newshape.layer",
            val: "below",
            icon: {
                width: "21",
                height: "22",
                path: "M5 3v17h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z"
            },
            click: function() {
                a.j = !1;
                M(a)
            }
        }], ["zoom2d", "pan2d", "zoomIn2d", "zoomOut2d", "resetScale2d"]]
    };
    a.h && b.modeBarButtons[0].unshift({
        name: "Ungroup",
        icon: Plotly.Icons.undo,
        click: function() {
            a.h = null;
            a.g.g = !1;
            M(a)
        }
    });
    return b
}
function M(a) {
    a.active && Plotly.react("plot", Ha(a), Ia(a), Ja(a))
}
function R(a, b) {
    var d = N;
    d.o = b;
    b = d.g;
    b.h = a;
    b.g && (b.o = b.h.slice(),
    V(b.o, b.h, b.A, b.u));
    M(d)
}
function Q(a, b) {
    var d = N;
    d.v = b;
    b = d.g;
    b.j = a;
    b.g && (b.v = b.j.slice(),
    V(b.v, b.j, b.A, b.u));
    M(d)
}
function S(a, b, d) {
    var e = N;
    e.h = d;
    d = e.g;
    d.g = !0;
    d.o = d.h.slice();
    d.v = d.j.slice();
    d.u = b;
    d.A = a;
    d.K = [].concat(q(b.keys()));
    Da(d.u);
    V(d.o, d.h, d.A, d.u);
    V(d.v, d.j, d.A, d.u);
    M(e)
}
var N = new function() {
    this.active = !1;
    this.title = "title";
    this.v = "ylabel";
    this.o = "xlabel";
    this.j = !0;
    this.g = new Ca;
    this.h = null
}
;
//Looks like this is for Sample data set.
function Ka() {
    sa();
    fetch("https://media.githubusercontent.com/media/JamesDevJim/james-energy-charts/ffa9044f52f253803534ee079bb8a10109316f88/FullSample.csv").then(function(a) {
        return a.text()
    }).then(function(a) {
        a = ua(a);
        L = a.data;
        K = a.columnCount;
        va("", !1);
        R(L.Weight.rows(), "Weight");
        Q(L.Height.rows(), "Height");
        S(L.Sex.A(), L.Sex.u(), "Sex");
        ya("Athletes - Winter Olympics", !0)
    }).catch(function(a) {
        I.mode = "error";
        J(a.message)
    })
}
//Here is the load file
document.getElementById("load-file").addEventListener("change", function(a) {
    return ta(a.target.files)
});
document.getElementById("do-demo").addEventListener("click", function() {
    return Ka()
});
history.replaceState(I, "", "");
window.onpopstate = function(a) {
    a.state && (I = a.state);
    J("", !1)
}
;
function W(a, b) {
    if ("nan" === a.toLowerCase())
        a = typeof NaN;
    else if ("" === a)
        a = typeof a;
    else {
        var d = +a;
        a = isNaN(d) ? typeof a : typeof d
    }
    this.F = !0;
    this.V = "number" === a ? !0 : !1;
    this.ha = b;
    this.data = new Uint32Array(b);
    this.g = new Map;
    this.s = 0
}
function La(a, b, d) {
    d = [].concat(q(d.keys()));
    a = a.V ? new Float32Array(b.length) : [];
    for (var e = 0; e < b.length; ++e)
        a[e] = d[b[e]];
    return a
}
W.prototype.rows = function() {
    return this.F ? La(this, this.data, this.g) : this.data
}
;
W.prototype.assign = function(a, b) {
    b = this.V ? +b : b;
    this.F && 3E3 < this.s && (this.F = !1,
    this.s = Infinity,
    this.data = La(this, this.data, this.g),
    this.g = null);
    this.F ? (this.g.has(b) || (this.g.set(b, {
        id: this.s,
        count: 0
    }),
    this.s += 1),
    b = this.g.get(b),
    this.data[a] = b.id,
    b.count++) : this.data[a] = b
}
;
W.prototype.A = function() {
    if (!this.F)
        throw "no valid method";
    return this.data
}
;
W.prototype.u = function() {
    if (!this.F)
        throw "no valid method";
    return this.g
}
;
function F(a) {
    var b, d, e, c, g, k, f, h;
    return ha(function(l) {
        switch (l.g) {
        case 1:
            b = /\\"|"(?:\\"|[^"])*"|(\,)/g,
            g = c = e = d = 0,
            k = p(a.matchAll(b)),
            f = k.next();
        case 2:
            if (f.done) {
                c = '"' === a[d] ? 1 : 0;
                g = '"' === a[a.length - 1] ? 1 : 0;
                var m = a.substring(d + c, a.length - g).trim();
                l.g = 0;
                return {
                    value: m
                }
            }
            h = f.value;
            if (!h[1]) {
                l.g = 3;
                break
            }
            e = h.index;
            c = '"' === a[d] ? 1 : 0;
            g = '"' === a[e - 1] ? 1 : 0;
            m = a.substring(d + c, e - g).trim();
            l.g = 6;
            return {
                value: m
            };
        case 6:
            d = e + 1;
        case 3:
            f = k.next(),
            l.g = 2
        }
    })
}
function Ma(a, b, d) {
    var e = 0;
    a = p(F(a));
    for (var c = a.next(); !c.done; c = a.next())
        c = c.value,
        e < b.length && b[e].assign(d, c),
        e++;
    return e
}
function Na(a) {
    var b = new Map;
    return a.map(function(d) {
        if (b.has(d)) {
            var e = b.get(d);
            e.count++;
            return d + "_" + e.count
        }
        b.set(d, {
            count: 0
        });
        return d
    })
}
function U(a, b) {
    for (var d = [], e = 1; e < arguments.length; ++e)
        d[e - 1] = arguments[e];
    d = Error.apply(this, [void 0 === a ? "" : a].concat(q(d)));
    this.message = d.message;
    "stack"in d && (this.stack = d.stack)
}
var X = U
  , Y = Error;
X.prototype = aa(Y.prototype);
X.prototype.constructor = X;
if (z)
    z(X, Y);
else
    for (var Z in Y)
        if ("prototype" != Z)
            if (Object.defineProperties) {
                var Oa = Object.getOwnPropertyDescriptor(Y, Z);
                Oa && Object.defineProperty(X, Z, Oa)
            } else
                X[Z] = Y[Z];
X.Ja = Y.prototype;
function ua(a) {
    if (!a || 0 === a.length)
        throw new U("Empty CSV file provided");
    var b = a.split(/\r?\n|\r/);
    b = b.filter(function(k) {
        return !(!k || 0 === k.length)
    });
    if (2 > b.length)
        throw new U("Input must have at least two non-empty rows");
    a = [].concat(q(F(b[0])));
    if (2 > a.length)
        throw new U("There must be at least one comma in the first (header) row");
    a = a.map(function(k) {
        return k && 0 !== k.length ? k : "N/A"
    });
    a = Na(a);
    for (var d = b.length - 1, e = [], c = p(F(b[1])), g = c.next(); !g.done; g = c.next())
        e.push(new W(g.value,d));
    K = new Map;
    for (d = 1; d < b.length; ++d)
        c = Ma(b[d], e, d - 1),
        K.has(c) ? K.set(c, K.get(c) + 1) : K.set(c, 1);
    b = {};
    for (d = 0; d < a.length; ++d)
        b[a[d]] = e[d];
    return {
        data: b,
        columnCount: K
    }
}
;var Pa;
(function(a) {
    var b = function() {
        function e() {
            this.Y = "move";
            this.Z = "all";
            this.H = {}
        }
        Object.defineProperty(e.prototype, "dropEffect", {
            get: function() {
                return this.Y
            },
            set: function(c) {
                this.Y = c
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(e.prototype, "effectAllowed", {
            get: function() {
                return this.Z
            },
            set: function(c) {
                this.Z = c
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(e.prototype, "types", {
            get: function() {
                return Object.keys(this.H)
            },
            enumerable: !0,
            configurable: !0
        });
        e.prototype.clearData = function(c) {
            null != c ? delete this.H[c] : this.H = null
        }
        ;
        e.prototype.getData = function(c) {
            return this.H[c] || ""
        }
        ;
        e.prototype.setData = function(c, g) {
            this.H[c] = g
        }
        ;
        e.prototype.setDragImage = function(c, g, k) {
            var f = d.aa;
            f.R = c;
            f.S = {
                x: g,
                y: k
            }
        }
        ;
        return e
    }();
    a.DataTransfer = b;
    var d = function() {
        function e() {
            this.ca = 0;
            if (e.aa)
                throw "DragDropTouch instance already created.";
            var c = !1;
            document.addEventListener("test", function() {}, {
                get passive() {
                    return c = !0
                }
            });
            if ("ontouchstart"in document) {
                var g = document
                  , k = this.ea.bind(this)
                  , f = this.Ea.bind(this)
                  , h = c ? {
                    passive: !1,
                    capture: !1
                } : !1;
                g.addEventListener("touchstart", this.Fa.bind(this), h);
                g.addEventListener("touchmove", k, h);
                g.addEventListener("touchend", f);
                g.addEventListener("touchcancel", f)
            }
        }
        e.prototype.Fa = function(c) {
            var g = this;
            if (this.U(c))
                if (Date.now() - this.ca < e.ma && this.m(c, "dblclick", c.target))
                    c.preventDefault(),
                    this.J();
                else {
                    this.J();
                    var k = this.sa(c.target);
                    !k || this.m(c, "mousemove", c.target) || this.m(c, "mousedown", c.target) || (this.C = k,
                    this.N = this.I(c),
                    this.D = c,
                    c.preventDefault(),
                    setTimeout(function() {
                        g.C == k && null == g.i && g.m(c, "contextmenu", k) && g.J()
                    }, e.la),
                    e.G && (this.xa = setTimeout(function() {
                        g.T = !0;
                        g.ea(c)
                    }, e.oa)))
                }
        }
        ;
        e.prototype.ea = function(c) {
            if (this.Aa(c))
                this.J();
            else if (this.Ba(c) || this.Ca(c)) {
                var g = this.va(c);
                this.m(c, "mousemove", g) ? (this.D = c,
                c.preventDefault()) : (this.C && !this.i && this.Da(c) && (this.m(c, "dragstart", this.C),
                this.ta(c),
                this.m(c, "dragenter", g)),
                this.i && (this.D = c,
                c.preventDefault(),
                g != this.M && (this.m(this.D, "dragleave", this.M),
                this.m(c, "dragenter", g),
                this.M = g),
                this.da(c),
                this.ba = this.m(c, "dragover", g)))
            }
        }
        ;
        e.prototype.Ea = function(c) {
            this.U(c) && (this.m(this.D, "mouseup", c.target) ? c.preventDefault() : (this.i || (this.C = null,
            this.m(this.D, "click", c.target),
            this.ca = Date.now()),
            this.P(),
            this.C && (0 > c.type.indexOf("cancel") && this.ba && this.m(this.D, "drop", this.M),
            this.m(this.D, "dragend", this.C),
            this.J())))
        }
        ;
        e.prototype.U = function(c) {
            return c && !c.defaultPrevented && c.touches && 2 > c.touches.length
        }
        ;
        e.prototype.Ba = function(c) {
            return !e.G && this.U(c)
        }
        ;
        e.prototype.Ca = function(c) {
            return e.G && this.T && c && c.touches && c.touches.length
        }
        ;
        e.prototype.Aa = function(c) {
            return e.G && !this.T && this.$(c) > e.pa
        }
        ;
        e.prototype.Da = function(c) {
            c = this.$(c);
            return c > e.ra || e.G && c >= e.qa
        }
        ;
        e.prototype.J = function() {
            this.P();
            this.N = this.M = this.D = this.C = null;
            this.ba = this.T = !1;
            this.ua = new b;
            clearInterval(this.xa)
        }
        ;
        e.prototype.I = function(c, g) {
            c && c.touches && (c = c.touches[0]);
            return {
                x: g ? c.pageX : c.clientX,
                y: g ? c.pageY : c.clientY
            }
        }
        ;
        e.prototype.$ = function(c) {
            if (e.G && !this.N)
                return 0;
            c = this.I(c);
            return Math.abs(c.x - this.N.x) + Math.abs(c.y - this.N.y)
        }
        ;
        e.prototype.va = function(c) {
            c = this.I(c);
            for (c = document.elementFromPoint(c.x, c.y); c && "none" == getComputedStyle(c).pointerEvents; )
                c = c.parentElement;
            return c
        }
        ;
        e.prototype.ta = function(c) {
            this.i && this.P();
            var g = this.R || this.C;
            this.i = g.cloneNode(!0);
            this.X(g, this.i);
            this.i.style.top = this.i.style.left = "-9999px";
            if (!this.R) {
                g = g.getBoundingClientRect();
                var k = this.I(c);
                this.S = {
                    x: k.x - g.left,
                    y: k.y - g.top
                };
                this.i.style.opacity = e.na.toString()
            }
            this.da(c);
            document.body.appendChild(this.i)
        }
        ;
        e.prototype.P = function() {
            this.i && this.i.parentElement && this.i.parentElement.removeChild(this.i);
            this.R = this.i = null
        }
        ;
        e.prototype.da = function(c) {
            var g = this;
            requestAnimationFrame(function() {
                if (g.i) {
                    var k = g.I(c, !0)
                      , f = g.i.style;
                    f.position = "absolute";
                    f.pointerEvents = "none";
                    f.zIndex = "999999";
                    f.left = Math.round(k.x - g.S.x) + "px";
                    f.top = Math.round(k.y - g.S.y) + "px"
                }
            })
        }
        ;
        e.prototype.W = function(c, g, k) {
            for (var f = 0; f < k.length; f++) {
                var h = k[f];
                c[h] = g[h]
            }
        }
        ;
        e.prototype.X = function(c, g) {
            e.za.forEach(function(l) {
                g.removeAttribute(l)
            });
            c instanceof HTMLCanvasElement && (g.width = c.width,
            g.height = c.height,
            g.getContext("2d").drawImage(c, 0, 0));
            for (var k = getComputedStyle(c), f = 0; f < k.length; f++) {
                var h = k[f];
                0 > h.indexOf("transition") && (g.style[h] = k[h])
            }
            g.style.pointerEvents = "none";
            for (f = 0; f < c.children.length; f++)
                this.X(c.children[f], g.children[f])
        }
        ;
        e.prototype.m = function(c, g, k) {
            if (c && k) {
                var f = document.createEvent("Event")
                  , h = c.touches ? c.touches[0] : c;
                f.initEvent(g, !0, !0);
                f.button = 0;
                f.which = f.buttons = 1;
                this.W(f, c, e.wa);
                this.W(f, h, e.ya);
                f.dataTransfer = this.ua;
                k.dispatchEvent(f);
                return f.defaultPrevented
            }
            return !1
        }
        ;
        e.prototype.sa = function(c) {
            for (; c; c = c.parentElement)
                if (c.hasAttribute("draggable") && c.draggable)
                    return c;
            return null
        }
        ;
        return e
    }();
    d.aa = new d;
    d.ra = 5;
    d.na = .5;
    d.ma = 500;
    d.la = 900;
    d.G = !1;
    d.oa = 400;
    d.pa = 25;
    d.qa = 0;
    d.za = ["id", "class", "style", "draggable"];
    d.wa = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
    d.ya = "pageX pageY clientX clientY screenX screenY".split(" ");
    a.Ia = d
}
)(Pa || (Pa = {}));

