import { s as u, n as m, o as x } from '../chunks/scheduler.e108d1fd.js';
import {
	S as g,
	i as y,
	g as h,
	s as C,
	m as $,
	h as p,
	x as D,
	c as E,
	j as _,
	n as j,
	f as i,
	k as q,
	a as d,
	y as v,
	o as w
} from '../chunks/index.1c70bbaf.js';
function I(l) {
	let e,
		c = 'This is Diff page',
		a,
		s,
		o,
		r;
	return {
		c() {
			(e = h('div')),
				(e.textContent = c),
				(a = C()),
				(s = h('div')),
				(o = h('p')),
				(r = $(l[0])),
				this.h();
		},
		l(t) {
			(e = p(t, 'DIV', { 'data-svelte-h': !0 })),
				D(e) !== 'svelte-icads0' && (e.textContent = c),
				(a = E(t)),
				(s = p(t, 'DIV', {}));
			var n = _(s);
			o = p(n, 'P', { class: !0 });
			var f = _(o);
			(r = j(f, l[0])), f.forEach(i), n.forEach(i), this.h();
		},
		h() {
			q(o, 'class', 'h1');
		},
		m(t, n) {
			d(t, e, n), d(t, a, n), d(t, s, n), v(s, o), v(o, r);
		},
		p(t, [n]) {
			n & 1 && w(r, t[0]);
		},
		i: m,
		o: m,
		d(t) {
			t && (i(e), i(a), i(s));
		}
	};
}
function P(l, e, c) {
	let a = '';
	return (
		x(async () => {
			let s = await fetch('http://localhost:8082/diff/hello', { method: 'GET' });
			c(0, (a = await s.json())), console.log(a);
		}),
		[a]
	);
}
class V extends g {
	constructor(e) {
		super(), y(this, e, P, I, u, {});
	}
}
export { V as component };
