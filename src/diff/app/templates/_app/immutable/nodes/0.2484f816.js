import { s as _, c, u as p, g as m, d } from '../chunks/scheduler.e108d1fd.js';
import {
	S as h,
	i as v,
	g as $,
	s as g,
	h as y,
	x as b,
	c as S,
	k as j,
	a as f,
	d as w,
	t as L,
	f as u
} from '../chunks/index.1c70bbaf.js';
const M = !0,
	H = Object.freeze(
		Object.defineProperty({ __proto__: null, prerender: M }, Symbol.toStringTag, {
			value: 'Module'
		})
	);
function T(l) {
	let s,
		r = '<li><a href="/">New</a></li> <li><a href="/diff">Diff</a></li>',
		n,
		a;
	const i = l[1].default,
		t = c(i, l, l[0], null);
	return {
		c() {
			(s = $('nav')), (s.innerHTML = r), (n = g()), t && t.c(), this.h();
		},
		l(e) {
			(s = y(e, 'NAV', { class: !0, 'data-svelte-h': !0 })),
				b(s) !== 'svelte-16sz363' && (s.innerHTML = r),
				(n = S(e)),
				t && t.l(e),
				this.h();
		},
		h() {
			j(s, 'class', 'flex flex-row list-none justify-evenly bg-slate-500 text-white');
		},
		m(e, o) {
			f(e, s, o), f(e, n, o), t && t.m(e, o), (a = !0);
		},
		p(e, [o]) {
			t && t.p && (!a || o & 1) && p(t, i, e, e[0], a ? d(i, e[0], o, null) : m(e[0]), null);
		},
		i(e) {
			a || (w(t, e), (a = !0));
		},
		o(e) {
			L(t, e), (a = !1);
		},
		d(e) {
			e && (u(s), u(n)), t && t.d(e);
		}
	};
}
function x(l, s, r) {
	let { $$slots: n = {}, $$scope: a } = s;
	return (
		(l.$$set = (i) => {
			'$$scope' in i && r(0, (a = i.$$scope));
		}),
		[a, n]
	);
}
class N extends h {
	constructor(s) {
		super(), v(this, s, x, T, _, {});
	}
}
export { N as component, H as universal };
