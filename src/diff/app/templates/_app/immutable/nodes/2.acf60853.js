import { s as z, n as Y } from '../chunks/scheduler.e108d1fd.js';
import {
	S as K,
	i as X,
	g as i,
	m as C,
	s as A,
	h as E,
	j as f,
	n as W,
	f as S,
	c as Q,
	x as J,
	k as d,
	a as U,
	y as a,
	z as Z,
	A as y,
	B as ee
} from '../chunks/index.1c70bbaf.js';
function H(s) {
	return (s == null ? void 0 : s.length) !== void 0 ? s : Array.from(s);
}
function j(s, t, l) {
	const _ = s.slice();
	return (_[4] = t[l]), (_[6] = l), _;
}
function q(s, t, l) {
	const _ = s.slice();
	return (_[7] = t[l]), (_[6] = l), _;
}
function k(s) {
	let t,
		l = s[7] + '',
		_;
	return {
		c() {
			(t = i('option')), (_ = C(l)), this.h();
		},
		l(c) {
			t = E(c, 'OPTION', {});
			var R = f(t);
			(_ = W(R, l)), R.forEach(S), this.h();
		},
		h() {
			(t.__value = s[7]), ee(t, t.__value), (t.selected = s[6] == 2);
		},
		m(c, R) {
			U(c, t, R), a(t, _);
		},
		p: Y,
		d(c) {
			c && S(t);
		}
	};
}
function $(s) {
	let t,
		l,
		_,
		c,
		R,
		o = s[4].srv_name + '',
		F,
		N,
		I,
		V = s[4].api_content + '',
		P,
		m;
	return {
		c() {
			(t = i('tr')),
				(l = i('td')),
				(_ = C(s[6])),
				(c = A()),
				(R = i('td')),
				(F = C(o)),
				(N = A()),
				(I = i('td')),
				(P = C(V)),
				(m = A()),
				this.h();
		},
		l(h) {
			t = E(h, 'TR', {});
			var O = f(t);
			l = E(O, 'TD', { class: !0 });
			var u = f(l);
			(_ = W(u, s[6])), u.forEach(S), (c = Q(O)), (R = E(O, 'TD', { class: !0 }));
			var M = f(R);
			(F = W(M, o)), M.forEach(S), (N = Q(O)), (I = E(O, 'TD', { class: !0 }));
			var D = f(I);
			(P = W(D, V)), D.forEach(S), (m = Q(O)), O.forEach(S), this.h();
		},
		h() {
			d(l, 'class', 'border text-center'), d(R, 'class', 'border'), d(I, 'class', 'border');
		},
		m(h, O) {
			U(h, t, O), a(t, l), a(l, _), a(t, c), a(t, R), a(R, F), a(t, N), a(t, I), a(I, P), a(t, m);
		},
		p: Y,
		d(h) {
			h && S(t);
		}
	};
}
function te(s) {
	let t,
		l,
		_,
		c,
		R,
		o,
		F,
		N,
		I,
		V,
		P =
			'<div>API CONTENT:</div> <div><textarea class="border w-[65vw]" id="api_content" name="api_content"></textarea></div>',
		m,
		h,
		O,
		u,
		M =
			'<th class="w-[2vw] text-center">#</th> <th class="w-[10vw]">SRV_NAME</th> <th>API CONTENT</th>',
		D,
		x,
		w,
		B = H(s[0]),
		T = [];
	for (let n = 0; n < B.length; n += 1) T[n] = k(q(s, B, n));
	let g = H(s[1]),
		r = [];
	for (let n = 0; n < g.length; n += 1) r[n] = $(j(s, g, n));
	return {
		c() {
			(t = i('div')),
				(l = i('div')),
				(_ = C(`SRV NAME:

		`)),
				(c = i('select'));
			for (let n = 0; n < T.length; n += 1) T[n].c();
			(R = A()),
				(o = i('input')),
				(F = A()),
				(N = i('hr')),
				(I = A()),
				(V = i('div')),
				(V.innerHTML = P),
				(m = A()),
				(h = i('div')),
				(O = i('table')),
				(u = i('tr')),
				(u.innerHTML = M),
				(D = A());
			for (let n = 0; n < r.length; n += 1) r[n].c();
			this.h();
		},
		l(n) {
			t = E(n, 'DIV', { class: !0 });
			var v = f(t);
			l = E(v, 'DIV', {});
			var e = f(l);
			(_ = W(
				e,
				`SRV NAME:

		`
			)),
				(c = E(e, 'SELECT', { name: !0, id: !0, class: !0 }));
			var p = f(c);
			for (let L = 0; L < T.length; L += 1) T[L].l(p);
			p.forEach(S),
				(R = Q(e)),
				(o = E(e, 'INPUT', { type: !0, class: !0 })),
				(F = Q(e)),
				(N = E(e, 'HR', {})),
				(I = Q(e)),
				(V = E(e, 'DIV', { 'data-svelte-h': !0 })),
				J(V) !== 'svelte-1lxd7kq' && (V.innerHTML = P),
				e.forEach(S),
				v.forEach(S),
				(m = Q(n)),
				(h = E(n, 'DIV', { class: !0 }));
			var G = f(h);
			O = E(G, 'TABLE', { class: !0 });
			var b = f(O);
			(u = E(b, 'TR', { class: !0, 'data-svelte-h': !0 })),
				J(u) !== 'svelte-6r4fj9' && (u.innerHTML = M),
				(D = Q(b));
			for (let L = 0; L < r.length; L += 1) r[L].l(b);
			b.forEach(S), G.forEach(S), this.h();
		},
		h() {
			d(c, 'name', 'SRV_LIST'),
				d(c, 'id', 'SRVLIST'),
				d(c, 'class', 'ml-5 mr-5'),
				d(o, 'type', 'submit'),
				(o.value = 'SAVE'),
				d(o, 'class', 'border pr-4 pl-4 bg-red-600 text-white'),
				d(t, 'class', 'flex flex-row justify-center mt-[100px] text-lg'),
				d(u, 'class', 'text-left'),
				d(O, 'class', 'w-[85vw] border border-separate'),
				d(h, 'class', 'flex flex-row justify-center mt-[100px] text-md');
		},
		m(n, v) {
			U(n, t, v), a(t, l), a(l, _), a(l, c);
			for (let e = 0; e < T.length; e += 1) T[e] && T[e].m(c, null);
			a(l, R),
				a(l, o),
				a(l, F),
				a(l, N),
				a(l, I),
				a(l, V),
				U(n, m, v),
				U(n, h, v),
				a(h, O),
				a(O, u),
				a(O, D);
			for (let e = 0; e < r.length; e += 1) r[e] && r[e].m(O, null);
			x || ((w = Z(o, 'click', s[2])), (x = !0));
		},
		p(n, [v]) {
			if (v & 1) {
				B = H(n[0]);
				let e;
				for (e = 0; e < B.length; e += 1) {
					const p = q(n, B, e);
					T[e] ? T[e].p(p, v) : ((T[e] = k(p)), T[e].c(), T[e].m(c, null));
				}
				for (; e < T.length; e += 1) T[e].d(1);
				T.length = B.length;
			}
			if (v & 2) {
				g = H(n[1]);
				let e;
				for (e = 0; e < g.length; e += 1) {
					const p = j(n, g, e);
					r[e] ? r[e].p(p, v) : ((r[e] = $(p)), r[e].c(), r[e].m(O, null));
				}
				for (; e < r.length; e += 1) r[e].d(1);
				r.length = g.length;
			}
		},
		i: Y,
		o: Y,
		d(n) {
			n && (S(t), S(m), S(h)), y(T, n), y(r, n), (x = !1), w();
		}
	};
}
function ne(s) {
	let t = [
			'LOT_SRV',
			'EQP_SRV',
			'CUSTOM_SRV',
			'QUERY_SRV',
			'CST_SRV',
			'INQUIRY_SRV',
			'ESF_SRV',
			'DCOL_SRV',
			'SQC_SRV',
			'ALM_SRV',
			'CLOT_SRV',
			'CQUERY_SRV',
			'CINQUIRY_SRV',
			'PFBS_SRV',
			'PFBS2_SRV',
			'CFBS_SRV',
			'RMS_SRV',
			'SPDN_SRV',
			'EFBS_SRV',
			'APCR2R_SRV',
			'DISPATCH_SRV',
			'EOCAP_SRV',
			'SHOPFLOOR_SRV',
			'ROBOT_SRV',
			'LOG_SRV'
		],
		l = [
			{
				srv_name: 'LOT_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			},
			{
				srv_name: 'CLOT_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			},
			{
				srv_name: 'EQP_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			},
			{
				srv_name: 'CUSTOM_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			},
			{
				srv_name: 'QUERY_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			},
			{
				srv_name: 'CST_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			},
			{
				srv_name: 'INQUIRY_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			},
			{
				srv_name: 'ESF_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			},
			{
				srv_name: 'DCOL_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			},
			{
				srv_name: 'SQC_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			},
			{
				srv_name: 'ALM_SRV',
				api_content:
					'GETLOTINFO HDR=QUERY_SRV,FANET,WIN10-OSF2,JOBIN,3.0.0.204,5 DATETIME=20230727114155 LOT=WQB05596.1 OPERATOR=OSFPQ02068'
			}
		];
	const _ = () => {
			const R = document.getElementById('SRVLIST'),
				o = document.getElementById('api_content');
			console.log(R.value, o.value), c(R.value, o.value);
		},
		c = async (R, o) => {
			const N = await (
				await fetch('http://localhost:8082/api/save', {
					method: 'POST',
					body: JSON.stringify({ srv_name: R, api_content: o })
				})
			).json();
			alert(N);
		};
	return [t, l, _];
}
class ae extends K {
	constructor(t) {
		super(), X(this, t, ne, te, z, {});
	}
}
export { ae as component };
