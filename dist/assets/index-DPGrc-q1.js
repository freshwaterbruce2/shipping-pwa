var gc = Object.defineProperty
var vc = (e, r, t) =>
  r in e
    ? gc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[r] = t)
var tn = (e, r, t) => vc(e, typeof r != 'symbol' ? r + '' : r, t)
import {
  r as u,
  c as tt,
  u as je,
  j as s,
  B as bc,
  P as Ce,
  b as xt,
  e as wt,
  g as ie,
  i as bt,
  V as sa,
  k as Rr,
  l as xc,
  m as ia,
  f as wc,
  n as la,
  C as ca,
  o as yc,
  p as Sc,
  T as Cc,
  $ as da,
  S as _c,
  R as J,
  q as ua,
  O as fa,
  s as kc,
  t as ha,
  v as Nc,
  w as pa,
  D as ma,
  x as Ec,
  y as jc,
  z as Tc,
  A as Rc,
  E as Pc,
  F as Ic,
  G as Dc,
  H as Ac,
  I as $c,
  J as Mc,
  K as Oc,
  L as Lc,
  _ as Fc,
  M as zc,
  N as Rt,
  Q as Bc,
  U as Uc,
  W as Vc,
  X as Hc,
  Y as Wc,
  Z as Kc,
  a0 as ga,
  a1 as Pr,
  a2 as va,
  a3 as ba,
  a4 as xa,
  a5 as wa,
  a6 as ya,
  d as gn,
  h as On,
  a7 as Sa,
  a8 as Gc,
  a9 as Zc,
  a as Yc,
  aa as Xc,
} from './ui-BXJ4HCNU.js'
import { a as qc, g as Ca, c as pr } from './vendor-CWc6w16D.js'
import {
  c as Ir,
  R as _a,
  C as Jc,
  a as ka,
  b as Qc,
  u as Dr,
  d as Ln,
  T as ed,
  e as td,
  f as Na,
  I as Ea,
  F as ja,
} from './radix-De8XBeK3.js'
import { Q as rd, a as nd } from './voice-CSlxugnP.js'
import { m as od } from './motion-XHJu-hv9.js'
;(function () {
  const r = document.createElement('link').relList
  if (r && r.supports && r.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o)
  new MutationObserver(o => {
    for (const a of o)
      if (a.type === 'childList')
        for (const l of a.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(o) {
    const a = {}
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (a.credentials = 'omit')
          : (a.credentials = 'same-origin'),
      a
    )
  }
  function n(o) {
    if (o.ep) return
    o.ep = !0
    const a = t(o)
    fetch(o.href, a)
  }
})()
var mr = {},
  wo
function ad() {
  if (wo) return mr
  wo = 1
  var e = qc()
  return ((mr.createRoot = e.createRoot), (mr.hydrateRoot = e.hydrateRoot), mr)
}
var sd = ad()
const id = Ca(sd),
  ld = 1,
  cd = 1e6
let rn = 0
function dd() {
  return ((rn = (rn + 1) % Number.MAX_SAFE_INTEGER), rn.toString())
}
const nn = new Map(),
  yo = e => {
    if (nn.has(e)) return
    const r = setTimeout(() => {
      ;(nn.delete(e), Xt({ type: 'REMOVE_TOAST', toastId: e }))
    }, cd)
    nn.set(e, r)
  },
  ud = (e, r) => {
    switch (r.type) {
      case 'ADD_TOAST':
        return { ...e, toasts: [r.toast, ...e.toasts].slice(0, ld) }
      case 'UPDATE_TOAST':
        return {
          ...e,
          toasts: e.toasts.map(t =>
            t.id === r.toast.id ? { ...t, ...r.toast } : t
          ),
        }
      case 'DISMISS_TOAST': {
        const { toastId: t } = r
        return (
          t
            ? yo(t)
            : e.toasts.forEach(n => {
                yo(n.id)
              }),
          {
            ...e,
            toasts: e.toasts.map(n =>
              n.id === t || t === void 0 ? { ...n, open: !1 } : n
            ),
          }
        )
      }
      case 'REMOVE_TOAST':
        return r.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter(t => t.id !== r.toastId) }
    }
  },
  Cr = []
let _r = { toasts: [] }
function Xt(e) {
  ;((_r = ud(_r, e)),
    Cr.forEach(r => {
      r(_r)
    }))
}
function fd({ ...e }) {
  const r = dd(),
    t = o => Xt({ type: 'UPDATE_TOAST', toast: { ...o, id: r } }),
    n = () => Xt({ type: 'DISMISS_TOAST', toastId: r })
  return (
    Xt({
      type: 'ADD_TOAST',
      toast: {
        ...e,
        id: r,
        open: !0,
        onOpenChange: o => {
          o || n()
        },
      },
    }),
    { id: r, dismiss: n, update: t }
  )
}
function Ta() {
  const [e, r] = u.useState(_r)
  return (
    u.useEffect(
      () => (
        Cr.push(r),
        () => {
          const t = Cr.indexOf(r)
          t > -1 && Cr.splice(t, 1)
        }
      ),
      [e]
    ),
    { ...e, toast: fd, dismiss: t => Xt({ type: 'DISMISS_TOAST', toastId: t }) }
  )
}
var Fn = 'ToastProvider',
  [zn, hd, pd] = Ir('Toast'),
  [Ra, zv] = tt('Toast', [pd]),
  [md, Ar] = Ra(Fn),
  Pa = e => {
    const {
        __scopeToast: r,
        label: t = 'Notification',
        duration: n = 5e3,
        swipeDirection: o = 'right',
        swipeThreshold: a = 50,
        children: l,
      } = e,
      [i, c] = u.useState(null),
      [f, m] = u.useState(0),
      p = u.useRef(!1),
      v = u.useRef(!1)
    return (
      t.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Fn}\`. Expected non-empty \`string\`.`
        ),
      s.jsx(zn.Provider, {
        scope: r,
        children: s.jsx(md, {
          scope: r,
          label: t,
          duration: n,
          swipeDirection: o,
          swipeThreshold: a,
          toastCount: f,
          viewport: i,
          onViewportChange: c,
          onToastAdd: u.useCallback(() => m(d => d + 1), []),
          onToastRemove: u.useCallback(() => m(d => d - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: v,
          children: l,
        }),
      })
    )
  }
Pa.displayName = Fn
var Ia = 'ToastViewport',
  gd = ['F8'],
  vn = 'toast.viewportPause',
  bn = 'toast.viewportResume',
  Da = u.forwardRef((e, r) => {
    const {
        __scopeToast: t,
        hotkey: n = gd,
        label: o = 'Notifications ({hotkey})',
        ...a
      } = e,
      l = Ar(Ia, t),
      i = hd(t),
      c = u.useRef(null),
      f = u.useRef(null),
      m = u.useRef(null),
      p = u.useRef(null),
      v = je(r, p, l.onViewportChange),
      d = n.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
      x = l.toastCount > 0
    ;(u.useEffect(() => {
      const g = w => {
        var C
        n.length !== 0 &&
          n.every(_ => w[_] || w.code === _) &&
          ((C = p.current) == null || C.focus())
      }
      return (
        document.addEventListener('keydown', g),
        () => document.removeEventListener('keydown', g)
      )
    }, [n]),
      u.useEffect(() => {
        const g = c.current,
          w = p.current
        if (x && g && w) {
          const S = () => {
              if (!l.isClosePausedRef.current) {
                const D = new CustomEvent(vn)
                ;(w.dispatchEvent(D), (l.isClosePausedRef.current = !0))
              }
            },
            C = () => {
              if (l.isClosePausedRef.current) {
                const D = new CustomEvent(bn)
                ;(w.dispatchEvent(D), (l.isClosePausedRef.current = !1))
              }
            },
            _ = D => {
              !g.contains(D.relatedTarget) && C()
            },
            E = () => {
              g.contains(document.activeElement) || C()
            }
          return (
            g.addEventListener('focusin', S),
            g.addEventListener('focusout', _),
            g.addEventListener('pointermove', S),
            g.addEventListener('pointerleave', E),
            window.addEventListener('blur', S),
            window.addEventListener('focus', C),
            () => {
              ;(g.removeEventListener('focusin', S),
                g.removeEventListener('focusout', _),
                g.removeEventListener('pointermove', S),
                g.removeEventListener('pointerleave', E),
                window.removeEventListener('blur', S),
                window.removeEventListener('focus', C))
            }
          )
        }
      }, [x, l.isClosePausedRef]))
    const h = u.useCallback(
      ({ tabbingDirection: g }) => {
        const S = i().map(C => {
          const _ = C.ref.current,
            E = [_, ...Td(_)]
          return g === 'forwards' ? E : E.reverse()
        })
        return (g === 'forwards' ? S.reverse() : S).flat()
      },
      [i]
    )
    return (
      u.useEffect(() => {
        const g = p.current
        if (g) {
          const w = S => {
            var E, D, T
            const C = S.altKey || S.ctrlKey || S.metaKey
            if (S.key === 'Tab' && !C) {
              const I = document.activeElement,
                R = S.shiftKey
              if (S.target === g && R) {
                ;(E = f.current) == null || E.focus()
                return
              }
              const k = h({ tabbingDirection: R ? 'backwards' : 'forwards' }),
                P = k.findIndex(b => b === I)
              on(k.slice(P + 1))
                ? S.preventDefault()
                : R
                  ? (D = f.current) == null || D.focus()
                  : (T = m.current) == null || T.focus()
            }
          }
          return (
            g.addEventListener('keydown', w),
            () => g.removeEventListener('keydown', w)
          )
        }
      }, [i, h]),
      s.jsxs(bc, {
        ref: c,
        role: 'region',
        'aria-label': o.replace('{hotkey}', d),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : 'none' },
        children: [
          x &&
            s.jsx(xn, {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const g = h({ tabbingDirection: 'forwards' })
                on(g)
              },
            }),
          s.jsx(zn.Slot, {
            scope: t,
            children: s.jsx(Ce.ol, { tabIndex: -1, ...a, ref: v }),
          }),
          x &&
            s.jsx(xn, {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const g = h({ tabbingDirection: 'backwards' })
                on(g)
              },
            }),
        ],
      })
    )
  })
Da.displayName = Ia
var Aa = 'ToastFocusProxy',
  xn = u.forwardRef((e, r) => {
    const { __scopeToast: t, onFocusFromOutsideViewport: n, ...o } = e,
      a = Ar(Aa, t)
    return s.jsx(sa, {
      'aria-hidden': !0,
      tabIndex: 0,
      ...o,
      ref: r,
      style: { position: 'fixed' },
      onFocus: l => {
        var f
        const i = l.relatedTarget
        !((f = a.viewport) != null && f.contains(i)) && n()
      },
    })
  })
xn.displayName = Aa
var nr = 'Toast',
  vd = 'toast.swipeStart',
  bd = 'toast.swipeMove',
  xd = 'toast.swipeCancel',
  wd = 'toast.swipeEnd',
  $a = u.forwardRef((e, r) => {
    const { forceMount: t, open: n, defaultOpen: o, onOpenChange: a, ...l } = e,
      [i, c] = xt({ prop: n, defaultProp: o ?? !0, onChange: a, caller: nr })
    return s.jsx(wt, {
      present: t || i,
      children: s.jsx(Cd, {
        open: i,
        ...l,
        ref: r,
        onClose: () => c(!1),
        onPause: bt(e.onPause),
        onResume: bt(e.onResume),
        onSwipeStart: ie(e.onSwipeStart, f => {
          f.currentTarget.setAttribute('data-swipe', 'start')
        }),
        onSwipeMove: ie(e.onSwipeMove, f => {
          const { x: m, y: p } = f.detail.delta
          ;(f.currentTarget.setAttribute('data-swipe', 'move'),
            f.currentTarget.style.setProperty(
              '--radix-toast-swipe-move-x',
              `${m}px`
            ),
            f.currentTarget.style.setProperty(
              '--radix-toast-swipe-move-y',
              `${p}px`
            ))
        }),
        onSwipeCancel: ie(e.onSwipeCancel, f => {
          ;(f.currentTarget.setAttribute('data-swipe', 'cancel'),
            f.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
            f.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
            f.currentTarget.style.removeProperty('--radix-toast-swipe-end-x'),
            f.currentTarget.style.removeProperty('--radix-toast-swipe-end-y'))
        }),
        onSwipeEnd: ie(e.onSwipeEnd, f => {
          const { x: m, y: p } = f.detail.delta
          ;(f.currentTarget.setAttribute('data-swipe', 'end'),
            f.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
            f.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
            f.currentTarget.style.setProperty(
              '--radix-toast-swipe-end-x',
              `${m}px`
            ),
            f.currentTarget.style.setProperty(
              '--radix-toast-swipe-end-y',
              `${p}px`
            ),
            c(!1))
        }),
      }),
    })
  })
$a.displayName = nr
var [yd, Sd] = Ra(nr, { onClose() {} }),
  Cd = u.forwardRef((e, r) => {
    const {
        __scopeToast: t,
        type: n = 'foreground',
        duration: o,
        open: a,
        onClose: l,
        onEscapeKeyDown: i,
        onPause: c,
        onResume: f,
        onSwipeStart: m,
        onSwipeMove: p,
        onSwipeCancel: v,
        onSwipeEnd: d,
        ...x
      } = e,
      h = Ar(nr, t),
      [g, w] = u.useState(null),
      S = je(r, b => w(b)),
      C = u.useRef(null),
      _ = u.useRef(null),
      E = o || h.duration,
      D = u.useRef(0),
      T = u.useRef(E),
      I = u.useRef(0),
      { onToastAdd: R, onToastRemove: L } = h,
      V = bt(() => {
        var M
        ;((g == null ? void 0 : g.contains(document.activeElement)) &&
          ((M = h.viewport) == null || M.focus()),
          l())
      }),
      k = u.useCallback(
        b => {
          !b ||
            b === 1 / 0 ||
            (window.clearTimeout(I.current),
            (D.current = new Date().getTime()),
            (I.current = window.setTimeout(V, b)))
        },
        [V]
      )
    ;(u.useEffect(() => {
      const b = h.viewport
      if (b) {
        const M = () => {
            ;(k(T.current), f == null || f())
          },
          K = () => {
            const U = new Date().getTime() - D.current
            ;((T.current = T.current - U),
              window.clearTimeout(I.current),
              c == null || c())
          }
        return (
          b.addEventListener(vn, K),
          b.addEventListener(bn, M),
          () => {
            ;(b.removeEventListener(vn, K), b.removeEventListener(bn, M))
          }
        )
      }
    }, [h.viewport, E, c, f, k]),
      u.useEffect(() => {
        a && !h.isClosePausedRef.current && k(E)
      }, [a, E, h.isClosePausedRef, k]),
      u.useEffect(() => (R(), () => L()), [R, L]))
    const P = u.useMemo(() => (g ? Ua(g) : null), [g])
    return h.viewport
      ? s.jsxs(s.Fragment, {
          children: [
            P &&
              s.jsx(_d, {
                __scopeToast: t,
                role: 'status',
                'aria-live': n === 'foreground' ? 'assertive' : 'polite',
                'aria-atomic': !0,
                children: P,
              }),
            s.jsx(yd, {
              scope: t,
              onClose: V,
              children: Rr.createPortal(
                s.jsx(zn.ItemSlot, {
                  scope: t,
                  children: s.jsx(xc, {
                    asChild: !0,
                    onEscapeKeyDown: ie(i, () => {
                      ;(h.isFocusedToastEscapeKeyDownRef.current || V(),
                        (h.isFocusedToastEscapeKeyDownRef.current = !1))
                    }),
                    children: s.jsx(Ce.li, {
                      role: 'status',
                      'aria-live': 'off',
                      'aria-atomic': !0,
                      tabIndex: 0,
                      'data-state': a ? 'open' : 'closed',
                      'data-swipe-direction': h.swipeDirection,
                      ...x,
                      ref: S,
                      style: {
                        userSelect: 'none',
                        touchAction: 'none',
                        ...e.style,
                      },
                      onKeyDown: ie(e.onKeyDown, b => {
                        b.key === 'Escape' &&
                          (i == null || i(b.nativeEvent),
                          b.nativeEvent.defaultPrevented ||
                            ((h.isFocusedToastEscapeKeyDownRef.current = !0),
                            V()))
                      }),
                      onPointerDown: ie(e.onPointerDown, b => {
                        b.button === 0 &&
                          (C.current = { x: b.clientX, y: b.clientY })
                      }),
                      onPointerMove: ie(e.onPointerMove, b => {
                        if (!C.current) return
                        const M = b.clientX - C.current.x,
                          K = b.clientY - C.current.y,
                          U = !!_.current,
                          re = ['left', 'right'].includes(h.swipeDirection),
                          $ = ['left', 'up'].includes(h.swipeDirection)
                            ? Math.min
                            : Math.max,
                          ee = re ? $(0, M) : 0,
                          F = re ? 0 : $(0, K),
                          A = b.pointerType === 'touch' ? 10 : 2,
                          q = { x: ee, y: F },
                          G = { originalEvent: b, delta: q }
                        U
                          ? ((_.current = q), gr(bd, p, G, { discrete: !1 }))
                          : So(q, h.swipeDirection, A)
                            ? ((_.current = q),
                              gr(vd, m, G, { discrete: !1 }),
                              b.target.setPointerCapture(b.pointerId))
                            : (Math.abs(M) > A || Math.abs(K) > A) &&
                              (C.current = null)
                      }),
                      onPointerUp: ie(e.onPointerUp, b => {
                        const M = _.current,
                          K = b.target
                        if (
                          (K.hasPointerCapture(b.pointerId) &&
                            K.releasePointerCapture(b.pointerId),
                          (_.current = null),
                          (C.current = null),
                          M)
                        ) {
                          const U = b.currentTarget,
                            re = { originalEvent: b, delta: M }
                          ;(So(M, h.swipeDirection, h.swipeThreshold)
                            ? gr(wd, d, re, { discrete: !0 })
                            : gr(xd, v, re, { discrete: !0 }),
                            U.addEventListener(
                              'click',
                              $ => $.preventDefault(),
                              { once: !0 }
                            ))
                        }
                      }),
                    }),
                  }),
                }),
                h.viewport
              ),
            }),
          ],
        })
      : null
  }),
  _d = e => {
    const { __scopeToast: r, children: t, ...n } = e,
      o = Ar(nr, r),
      [a, l] = u.useState(!1),
      [i, c] = u.useState(!1)
    return (
      Ed(() => l(!0)),
      u.useEffect(() => {
        const f = window.setTimeout(() => c(!0), 1e3)
        return () => window.clearTimeout(f)
      }, []),
      i
        ? null
        : s.jsx(ia, {
            asChild: !0,
            children: s.jsx(sa, {
              ...n,
              children:
                a && s.jsxs(s.Fragment, { children: [o.label, ' ', t] }),
            }),
          })
    )
  },
  kd = 'ToastTitle',
  Ma = u.forwardRef((e, r) => {
    const { __scopeToast: t, ...n } = e
    return s.jsx(Ce.div, { ...n, ref: r })
  })
Ma.displayName = kd
var Nd = 'ToastDescription',
  Oa = u.forwardRef((e, r) => {
    const { __scopeToast: t, ...n } = e
    return s.jsx(Ce.div, { ...n, ref: r })
  })
Oa.displayName = Nd
var La = 'ToastAction',
  Fa = u.forwardRef((e, r) => {
    const { altText: t, ...n } = e
    return t.trim()
      ? s.jsx(Ba, {
          altText: t,
          asChild: !0,
          children: s.jsx(Bn, { ...n, ref: r }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${La}\`. Expected non-empty \`string\`.`
        ),
        null)
  })
Fa.displayName = La
var za = 'ToastClose',
  Bn = u.forwardRef((e, r) => {
    const { __scopeToast: t, ...n } = e,
      o = Sd(za, t)
    return s.jsx(Ba, {
      asChild: !0,
      children: s.jsx(Ce.button, {
        type: 'button',
        ...n,
        ref: r,
        onClick: ie(e.onClick, o.onClose),
      }),
    })
  })
Bn.displayName = za
var Ba = u.forwardRef((e, r) => {
  const { __scopeToast: t, altText: n, ...o } = e
  return s.jsx(Ce.div, {
    'data-radix-toast-announce-exclude': '',
    'data-radix-toast-announce-alt': n || void 0,
    ...o,
    ref: r,
  })
})
function Ua(e) {
  const r = []
  return (
    Array.from(e.childNodes).forEach(n => {
      if (
        (n.nodeType === n.TEXT_NODE && n.textContent && r.push(n.textContent),
        jd(n))
      ) {
        const o = n.ariaHidden || n.hidden || n.style.display === 'none',
          a = n.dataset.radixToastAnnounceExclude === ''
        if (!o)
          if (a) {
            const l = n.dataset.radixToastAnnounceAlt
            l && r.push(l)
          } else r.push(...Ua(n))
      }
    }),
    r
  )
}
function gr(e, r, t, { discrete: n }) {
  const o = t.originalEvent.currentTarget,
    a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: t })
  ;(r && o.addEventListener(e, r, { once: !0 }),
    n ? la(o, a) : o.dispatchEvent(a))
}
var So = (e, r, t = 0) => {
  const n = Math.abs(e.x),
    o = Math.abs(e.y),
    a = n > o
  return r === 'left' || r === 'right' ? a && n > t : !a && o > t
}
function Ed(e = () => {}) {
  const r = bt(e)
  wc(() => {
    let t = 0,
      n = 0
    return (
      (t = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(r))
      )),
      () => {
        ;(window.cancelAnimationFrame(t), window.cancelAnimationFrame(n))
      }
    )
  }, [r])
}
function jd(e) {
  return e.nodeType === e.ELEMENT_NODE
}
function Td(e) {
  const r = [],
    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: n => {
        const o = n.tagName === 'INPUT' && n.type === 'hidden'
        return n.disabled || n.hidden || o
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
      },
    })
  for (; t.nextNode(); ) r.push(t.currentNode)
  return r
}
function on(e) {
  const r = document.activeElement
  return e.some(t => (t === r ? !0 : (t.focus(), document.activeElement !== r)))
}
var Rd = Pa,
  Va = Da,
  Ha = $a,
  Wa = Ma,
  Ka = Oa,
  Ga = Fa,
  Za = Bn
function Ya(e) {
  var r,
    t,
    n = ''
  if (typeof e == 'string' || typeof e == 'number') n += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length
      for (r = 0; r < o; r++)
        e[r] && (t = Ya(e[r])) && (n && (n += ' '), (n += t))
    } else for (t in e) e[t] && (n && (n += ' '), (n += t))
  return n
}
function Un() {
  for (var e, r, t = 0, n = '', o = arguments.length; t < o; t++)
    (e = arguments[t]) && (r = Ya(e)) && (n && (n += ' '), (n += r))
  return n
}
const Co = e => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
  _o = Un,
  $r = (e, r) => t => {
    var n
    if ((r == null ? void 0 : r.variants) == null)
      return _o(
        e,
        t == null ? void 0 : t.class,
        t == null ? void 0 : t.className
      )
    const { variants: o, defaultVariants: a } = r,
      l = Object.keys(o).map(f => {
        const m = t == null ? void 0 : t[f],
          p = a == null ? void 0 : a[f]
        if (m === null) return null
        const v = Co(m) || Co(p)
        return o[f][v]
      }),
      i =
        t &&
        Object.entries(t).reduce((f, m) => {
          let [p, v] = m
          return (v === void 0 || (f[p] = v), f)
        }, {}),
      c =
        r == null || (n = r.compoundVariants) === null || n === void 0
          ? void 0
          : n.reduce((f, m) => {
              let { class: p, className: v, ...d } = m
              return Object.entries(d).every(x => {
                let [h, g] = x
                return Array.isArray(g)
                  ? g.includes({ ...a, ...i }[h])
                  : { ...a, ...i }[h] === g
              })
                ? [...f, p, v]
                : f
            }, [])
    return _o(
      e,
      l,
      c,
      t == null ? void 0 : t.class,
      t == null ? void 0 : t.className
    )
  }
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Pd = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Id = e => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const be = (e, r) => {
  const t = u.forwardRef(
    (
      {
        color: n = 'currentColor',
        size: o = 24,
        strokeWidth: a = 2,
        absoluteStrokeWidth: l,
        className: i = '',
        children: c,
        ...f
      },
      m
    ) =>
      u.createElement(
        'svg',
        {
          ref: m,
          ...Pd,
          width: o,
          height: o,
          stroke: n,
          strokeWidth: l ? (Number(a) * 24) / Number(o) : a,
          className: ['lucide', `lucide-${Id(e)}`, i].join(' '),
          ...f,
        },
        [
          ...r.map(([p, v]) => u.createElement(p, v)),
          ...(Array.isArray(c) ? c : [c]),
        ]
      )
  )
  return ((t.displayName = `${e}`), t)
}
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const or = be('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vn = be('ChevronDown', [
  ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dd = be('ChevronRight', [
  ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ad = be('ChevronUp', [
  ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $d = be('CircleAlert', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
  ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Md = be('CircleCheckBig', [
  ['path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', key: 'g774vq' }],
  ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Od = be('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ld = be('CircleMinus', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M8 12h8', key: '1wcyev' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fd = be('CirclePlus', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M8 12h8', key: '1wcyev' }],
  ['path', { d: 'M12 8v8', key: 'napkw2' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xa = be('Circle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zd = be('Delete', [
  [
    'path',
    { d: 'M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z', key: '1oy587' },
  ],
  ['line', { x1: '18', x2: '12', y1: '9', y2: '15', key: '1olkx5' }],
  ['line', { x1: '12', x2: '18', y1: '9', y2: '15', key: '1n50pc' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bd = be('FileArchive', [
  [
    'path',
    { d: 'M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18', key: '1oywqq' },
  ],
  ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
  ['circle', { cx: '10', cy: '20', r: '2', key: '1xzdoj' }],
  ['path', { d: 'M10 7V6', key: 'dljcrl' }],
  ['path', { d: 'M10 12v-1', key: 'v7bkov' }],
  ['path', { d: 'M10 18v-2', key: '1cjy8d' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qa = be('FileText', [
  [
    'path',
    {
      d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
      key: '1rqfz7',
    },
  ],
  ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
  ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
  ['path', { d: 'M16 13H8', key: 't4e002' }],
  ['path', { d: 'M16 17H8', key: 'z1uh3a' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ud = be('Gauge', [
  ['path', { d: 'm12 14 4-4', key: '9kzdfg' }],
  ['path', { d: 'M3.34 19a10 10 0 1 1 17.32 0', key: '19p75a' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vd = be('Home', [
  [
    'path',
    { d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', key: 'y5dka4' },
  ],
  ['polyline', { points: '9 22 9 12 15 12 15 22', key: 'e2us08' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hd = be('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wd = be('Keyboard', [
  ['path', { d: 'M10 8h.01', key: '1r9ogq' }],
  ['path', { d: 'M12 12h.01', key: '1mp3jc' }],
  ['path', { d: 'M14 8h.01', key: '1primd' }],
  ['path', { d: 'M16 12h.01', key: '1l6xoz' }],
  ['path', { d: 'M18 8h.01', key: 'emo2bl' }],
  ['path', { d: 'M6 8h.01', key: 'x9i8wu' }],
  ['path', { d: 'M7 16h10', key: 'wp8him' }],
  ['path', { d: 'M8 12h.01', key: 'czm47f' }],
  [
    'rect',
    { width: '20', height: '16', x: '2', y: '4', rx: '2', key: '18n3k1' },
  ],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kd = be('Menu', [
  ['line', { x1: '4', x2: '20', y1: '12', y2: '12', key: '1e0a9i' }],
  ['line', { x1: '4', x2: '20', y1: '6', y2: '6', key: '1owob3' }],
  ['line', { x1: '4', x2: '20', y1: '18', y2: '18', key: 'yk5zj1' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gd = be('MessageCircle', [
  ['path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z', key: 'vv11sd' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hn = be('MicOff', [
  ['line', { x1: '2', x2: '22', y1: '2', y2: '22', key: 'a6p6uj' }],
  ['path', { d: 'M18.89 13.23A7.12 7.12 0 0 0 19 12v-2', key: '80xlxr' }],
  ['path', { d: 'M5 10v2a7 7 0 0 0 12 5', key: 'p2k8kg' }],
  ['path', { d: 'M15 9.34V5a3 3 0 0 0-5.68-1.33', key: '1gzdoj' }],
  ['path', { d: 'M9 9v3a3 3 0 0 0 5.12 2.12', key: 'r2i35w' }],
  ['line', { x1: '12', x2: '12', y1: '19', y2: '22', key: 'x3vr5v' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lt = be('Mic', [
  [
    'path',
    {
      d: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z',
      key: '131961',
    },
  ],
  ['path', { d: 'M19 10v2a7 7 0 0 1-14 0v-2', key: '1vc78b' }],
  ['line', { x1: '12', x2: '12', y1: '19', y2: '22', key: 'x3vr5v' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zd = be('Minus', [['path', { d: 'M5 12h14', key: '1ays0h' }]])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yd = be('Package', [
  ['path', { d: 'm7.5 4.27 9 5.15', key: '1c824w' }],
  [
    'path',
    {
      d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z',
      key: 'hh9hay',
    },
  ],
  ['path', { d: 'm3.3 7 8.7 5 8.7-5', key: 'g66t2b' }],
  ['path', { d: 'M12 22V12', key: 'd0xqtd' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xd = be('Play', [
  ['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qt = be('Plus', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'M12 5v14', key: 's699le' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qd = be('RefreshCw', [
  [
    'path',
    { d: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8', key: 'v9h5vc' },
  ],
  ['path', { d: 'M21 3v5h-5', key: '1q7to0' }],
  [
    'path',
    { d: 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16', key: '3uifl3' },
  ],
  ['path', { d: 'M8 16H3v5', key: '1cv678' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jd = be('Settings', [
  [
    'path',
    {
      d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
      key: '1qme2f',
    },
  ],
  ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qd = be('Square', [
  [
    'rect',
    { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' },
  ],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ja = be('Trash2', [
  ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
  ['path', { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' }],
  ['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }],
  ['line', { x1: '10', x2: '10', y1: '11', y2: '17', key: '1uufr5' }],
  ['line', { x1: '14', x2: '14', y1: '11', y2: '17', key: 'xtxkd' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eu = be('TriangleAlert', [
  [
    'path',
    {
      d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
      key: 'wmoenq',
    },
  ],
  ['path', { d: 'M12 9v4', key: 'juzpu7' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tu = be('Truck', [
  [
    'path',
    {
      d: 'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2',
      key: 'wrbu53',
    },
  ],
  ['path', { d: 'M15 18H9', key: '1lyqi6' }],
  [
    'path',
    {
      d: 'M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14',
      key: 'lysw3i',
    },
  ],
  ['circle', { cx: '17', cy: '18', r: '2', key: '332jqn' }],
  ['circle', { cx: '7', cy: '18', r: '2', key: '19iecd' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ru = be('User', [
  ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
  ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nu = be('Volume2', [
  ['polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5', key: '16drj5' }],
  ['path', { d: 'M15.54 8.46a5 5 0 0 1 0 7.07', key: 'ltjumu' }],
  ['path', { d: 'M19.07 4.93a10 10 0 0 1 0 14.14', key: '1kegas' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ou = be('Volume', [
  ['polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5', key: '16drj5' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mr = be('X', [
  ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
  ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wn = be('Zap', [
    [
      'path',
      {
        d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
        key: '1xq2db',
      },
    ],
  ]),
  Kn = '-',
  au = e => {
    const r = iu(e),
      { conflictingClassGroups: t, conflictingClassGroupModifiers: n } = e
    return {
      getClassGroupId: l => {
        const i = l.split(Kn)
        return (i[0] === '' && i.length !== 1 && i.shift(), Qa(i, r) || su(l))
      },
      getConflictingClassGroupIds: (l, i) => {
        const c = t[l] || []
        return i && n[l] ? [...c, ...n[l]] : c
      },
    }
  },
  Qa = (e, r) => {
    var l
    if (e.length === 0) return r.classGroupId
    const t = e[0],
      n = r.nextPart.get(t),
      o = n ? Qa(e.slice(1), n) : void 0
    if (o) return o
    if (r.validators.length === 0) return
    const a = e.join(Kn)
    return (l = r.validators.find(({ validator: i }) => i(a))) == null
      ? void 0
      : l.classGroupId
  },
  ko = /^\[(.+)\]$/,
  su = e => {
    if (ko.test(e)) {
      const r = ko.exec(e)[1],
        t = r == null ? void 0 : r.substring(0, r.indexOf(':'))
      if (t) return 'arbitrary..' + t
    }
  },
  iu = e => {
    const { theme: r, prefix: t } = e,
      n = { nextPart: new Map(), validators: [] }
    return (
      cu(Object.entries(e.classGroups), t).forEach(([a, l]) => {
        wn(l, n, a, r)
      }),
      n
    )
  },
  wn = (e, r, t, n) => {
    e.forEach(o => {
      if (typeof o == 'string') {
        const a = o === '' ? r : No(r, o)
        a.classGroupId = t
        return
      }
      if (typeof o == 'function') {
        if (lu(o)) {
          wn(o(n), r, t, n)
          return
        }
        r.validators.push({ validator: o, classGroupId: t })
        return
      }
      Object.entries(o).forEach(([a, l]) => {
        wn(l, No(r, a), t, n)
      })
    })
  },
  No = (e, r) => {
    let t = e
    return (
      r.split(Kn).forEach(n => {
        ;(t.nextPart.has(n) ||
          t.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (t = t.nextPart.get(n)))
      }),
      t
    )
  },
  lu = e => e.isThemeGetter,
  cu = (e, r) =>
    r
      ? e.map(([t, n]) => {
          const o = n.map(a =>
            typeof a == 'string'
              ? r + a
              : typeof a == 'object'
                ? Object.fromEntries(
                    Object.entries(a).map(([l, i]) => [r + l, i])
                  )
                : a
          )
          return [t, o]
        })
      : e,
  du = e => {
    if (e < 1) return { get: () => {}, set: () => {} }
    let r = 0,
      t = new Map(),
      n = new Map()
    const o = (a, l) => {
      ;(t.set(a, l), r++, r > e && ((r = 0), (n = t), (t = new Map())))
    }
    return {
      get(a) {
        let l = t.get(a)
        if (l !== void 0) return l
        if ((l = n.get(a)) !== void 0) return (o(a, l), l)
      },
      set(a, l) {
        t.has(a) ? t.set(a, l) : o(a, l)
      },
    }
  },
  es = '!',
  uu = e => {
    const { separator: r, experimentalParseClassName: t } = e,
      n = r.length === 1,
      o = r[0],
      a = r.length,
      l = i => {
        const c = []
        let f = 0,
          m = 0,
          p
        for (let g = 0; g < i.length; g++) {
          let w = i[g]
          if (f === 0) {
            if (w === o && (n || i.slice(g, g + a) === r)) {
              ;(c.push(i.slice(m, g)), (m = g + a))
              continue
            }
            if (w === '/') {
              p = g
              continue
            }
          }
          w === '[' ? f++ : w === ']' && f--
        }
        const v = c.length === 0 ? i : i.substring(m),
          d = v.startsWith(es),
          x = d ? v.substring(1) : v,
          h = p && p > m ? p - m : void 0
        return {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: x,
          maybePostfixModifierPosition: h,
        }
      }
    return t ? i => t({ className: i, parseClassName: l }) : l
  },
  fu = e => {
    if (e.length <= 1) return e
    const r = []
    let t = []
    return (
      e.forEach(n => {
        n[0] === '[' ? (r.push(...t.sort(), n), (t = [])) : t.push(n)
      }),
      r.push(...t.sort()),
      r
    )
  },
  hu = e => ({ cache: du(e.cacheSize), parseClassName: uu(e), ...au(e) }),
  pu = /\s+/,
  mu = (e, r) => {
    const {
        parseClassName: t,
        getClassGroupId: n,
        getConflictingClassGroupIds: o,
      } = r,
      a = [],
      l = e.trim().split(pu)
    let i = ''
    for (let c = l.length - 1; c >= 0; c -= 1) {
      const f = l[c],
        {
          modifiers: m,
          hasImportantModifier: p,
          baseClassName: v,
          maybePostfixModifierPosition: d,
        } = t(f)
      let x = !!d,
        h = n(x ? v.substring(0, d) : v)
      if (!h) {
        if (!x) {
          i = f + (i.length > 0 ? ' ' + i : i)
          continue
        }
        if (((h = n(v)), !h)) {
          i = f + (i.length > 0 ? ' ' + i : i)
          continue
        }
        x = !1
      }
      const g = fu(m).join(':'),
        w = p ? g + es : g,
        S = w + h
      if (a.includes(S)) continue
      a.push(S)
      const C = o(h, x)
      for (let _ = 0; _ < C.length; ++_) {
        const E = C[_]
        a.push(w + E)
      }
      i = f + (i.length > 0 ? ' ' + i : i)
    }
    return i
  }
function gu() {
  let e = 0,
    r,
    t,
    n = ''
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = ts(r)) && (n && (n += ' '), (n += t))
  return n
}
const ts = e => {
  if (typeof e == 'string') return e
  let r,
    t = ''
  for (let n = 0; n < e.length; n++)
    e[n] && (r = ts(e[n])) && (t && (t += ' '), (t += r))
  return t
}
function vu(e, ...r) {
  let t,
    n,
    o,
    a = l
  function l(c) {
    const f = r.reduce((m, p) => p(m), e())
    return ((t = hu(f)), (n = t.cache.get), (o = t.cache.set), (a = i), i(c))
  }
  function i(c) {
    const f = n(c)
    if (f) return f
    const m = mu(c, t)
    return (o(c, m), m)
  }
  return function () {
    return a(gu.apply(null, arguments))
  }
}
const ke = e => {
    const r = t => t[e] || []
    return ((r.isThemeGetter = !0), r)
  },
  rs = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  bu = /^\d+\/\d+$/,
  xu = new Set(['px', 'full', 'screen']),
  wu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  yu =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Su = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Cu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  _u =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Xe = e => Dt(e) || xu.has(e) || bu.test(e),
  at = e => Ft(e, 'length', Iu),
  Dt = e => !!e && !Number.isNaN(Number(e)),
  an = e => Ft(e, 'number', Dt),
  Ht = e => !!e && Number.isInteger(Number(e)),
  ku = e => e.endsWith('%') && Dt(e.slice(0, -1)),
  me = e => rs.test(e),
  st = e => wu.test(e),
  Nu = new Set(['length', 'size', 'percentage']),
  Eu = e => Ft(e, Nu, ns),
  ju = e => Ft(e, 'position', ns),
  Tu = new Set(['image', 'url']),
  Ru = e => Ft(e, Tu, Au),
  Pu = e => Ft(e, '', Du),
  Wt = () => !0,
  Ft = (e, r, t) => {
    const n = rs.exec(e)
    return n
      ? n[1]
        ? typeof r == 'string'
          ? n[1] === r
          : r.has(n[1])
        : t(n[2])
      : !1
  },
  Iu = e => yu.test(e) && !Su.test(e),
  ns = () => !1,
  Du = e => Cu.test(e),
  Au = e => _u.test(e),
  $u = () => {
    const e = ke('colors'),
      r = ke('spacing'),
      t = ke('blur'),
      n = ke('brightness'),
      o = ke('borderColor'),
      a = ke('borderRadius'),
      l = ke('borderSpacing'),
      i = ke('borderWidth'),
      c = ke('contrast'),
      f = ke('grayscale'),
      m = ke('hueRotate'),
      p = ke('invert'),
      v = ke('gap'),
      d = ke('gradientColorStops'),
      x = ke('gradientColorStopPositions'),
      h = ke('inset'),
      g = ke('margin'),
      w = ke('opacity'),
      S = ke('padding'),
      C = ke('saturate'),
      _ = ke('scale'),
      E = ke('sepia'),
      D = ke('skew'),
      T = ke('space'),
      I = ke('translate'),
      R = () => ['auto', 'contain', 'none'],
      L = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      V = () => ['auto', me, r],
      k = () => [me, r],
      P = () => ['', Xe, at],
      b = () => ['auto', Dt, me],
      M = () => [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top',
      ],
      K = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
      U = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      re = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
      ],
      $ = () => ['', '0', me],
      ee = () => [
        'auto',
        'avoid',
        'all',
        'avoid-page',
        'page',
        'left',
        'right',
        'column',
      ],
      F = () => [Dt, me]
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [Wt],
        spacing: [Xe, at],
        blur: ['none', '', st, me],
        brightness: F(),
        borderColor: [e],
        borderRadius: ['none', '', 'full', st, me],
        borderSpacing: k(),
        borderWidth: P(),
        contrast: F(),
        grayscale: $(),
        hueRotate: F(),
        invert: $(),
        gap: k(),
        gradientColorStops: [e],
        gradientColorStopPositions: [ku, at],
        inset: V(),
        margin: V(),
        opacity: F(),
        padding: k(),
        saturate: F(),
        scale: F(),
        sepia: $(),
        skew: F(),
        space: k(),
        translate: k(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', me] }],
        container: ['container'],
        columns: [{ columns: [st] }],
        'break-after': [{ 'break-after': ee() }],
        'break-before': [{ 'break-before': ee() }],
        'break-inside': [
          { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
        ],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [
          { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
        ],
        'object-position': [{ object: [...M(), me] }],
        overflow: [{ overflow: L() }],
        'overflow-x': [{ 'overflow-x': L() }],
        'overflow-y': [{ 'overflow-y': L() }],
        overscroll: [{ overscroll: R() }],
        'overscroll-x': [{ 'overscroll-x': R() }],
        'overscroll-y': [{ 'overscroll-y': R() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [h] }],
        'inset-x': [{ 'inset-x': [h] }],
        'inset-y': [{ 'inset-y': [h] }],
        start: [{ start: [h] }],
        end: [{ end: [h] }],
        top: [{ top: [h] }],
        right: [{ right: [h] }],
        bottom: [{ bottom: [h] }],
        left: [{ left: [h] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', Ht, me] }],
        basis: [{ basis: V() }],
        'flex-direction': [
          { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
        ],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', me] }],
        grow: [{ grow: $() }],
        shrink: [{ shrink: $() }],
        order: [{ order: ['first', 'last', 'none', Ht, me] }],
        'grid-cols': [{ 'grid-cols': [Wt] }],
        'col-start-end': [{ col: ['auto', { span: ['full', Ht, me] }, me] }],
        'col-start': [{ 'col-start': b() }],
        'col-end': [{ 'col-end': b() }],
        'grid-rows': [{ 'grid-rows': [Wt] }],
        'row-start-end': [{ row: ['auto', { span: [Ht, me] }, me] }],
        'row-start': [{ 'row-start': b() }],
        'row-end': [{ 'row-end': b() }],
        'grid-flow': [
          { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
        ],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', me] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', me] }],
        gap: [{ gap: [v] }],
        'gap-x': [{ 'gap-x': [v] }],
        'gap-y': [{ 'gap-y': [v] }],
        'justify-content': [{ justify: ['normal', ...re()] }],
        'justify-items': [
          { 'justify-items': ['start', 'end', 'center', 'stretch'] },
        ],
        'justify-self': [
          { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
        ],
        'align-content': [{ content: ['normal', ...re(), 'baseline'] }],
        'align-items': [
          { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
        ],
        'align-self': [
          { self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] },
        ],
        'place-content': [{ 'place-content': [...re(), 'baseline'] }],
        'place-items': [
          { 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] },
        ],
        'place-self': [
          { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
        ],
        p: [{ p: [S] }],
        px: [{ px: [S] }],
        py: [{ py: [S] }],
        ps: [{ ps: [S] }],
        pe: [{ pe: [S] }],
        pt: [{ pt: [S] }],
        pr: [{ pr: [S] }],
        pb: [{ pb: [S] }],
        pl: [{ pl: [S] }],
        m: [{ m: [g] }],
        mx: [{ mx: [g] }],
        my: [{ my: [g] }],
        ms: [{ ms: [g] }],
        me: [{ me: [g] }],
        mt: [{ mt: [g] }],
        mr: [{ mr: [g] }],
        mb: [{ mb: [g] }],
        ml: [{ ml: [g] }],
        'space-x': [{ 'space-x': [T] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [T] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', me, r] }],
        'min-w': [{ 'min-w': [me, r, 'min', 'max', 'fit'] }],
        'max-w': [
          {
            'max-w': [
              me,
              r,
              'none',
              'full',
              'min',
              'max',
              'fit',
              'prose',
              { screen: [st] },
              st,
            ],
          },
        ],
        h: [{ h: [me, r, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [
          { 'min-h': [me, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
        ],
        'max-h': [
          { 'max-h': [me, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
        ],
        size: [{ size: [me, r, 'auto', 'min', 'max', 'fit'] }],
        'font-size': [{ text: ['base', st, at] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [
          {
            font: [
              'thin',
              'extralight',
              'light',
              'normal',
              'medium',
              'semibold',
              'bold',
              'extrabold',
              'black',
              an,
            ],
          },
        ],
        'font-family': [{ font: [Wt] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [
          {
            tracking: [
              'tighter',
              'tight',
              'normal',
              'wide',
              'wider',
              'widest',
              me,
            ],
          },
        ],
        'line-clamp': [{ 'line-clamp': ['none', Dt, an] }],
        leading: [
          {
            leading: [
              'none',
              'tight',
              'snug',
              'normal',
              'relaxed',
              'loose',
              Xe,
              me,
            ],
          },
        ],
        'list-image': [{ 'list-image': ['none', me] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', me] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'placeholder-color': [{ placeholder: [e] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [w] }],
        'text-alignment': [
          { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
        ],
        'text-color': [{ text: [e] }],
        'text-opacity': [{ 'text-opacity': [w] }],
        'text-decoration': [
          'underline',
          'overline',
          'line-through',
          'no-underline',
        ],
        'text-decoration-style': [{ decoration: [...K(), 'wavy'] }],
        'text-decoration-thickness': [
          { decoration: ['auto', 'from-font', Xe, at] },
        ],
        'underline-offset': [{ 'underline-offset': ['auto', Xe, me] }],
        'text-decoration-color': [{ decoration: [e] }],
        'text-transform': [
          'uppercase',
          'lowercase',
          'capitalize',
          'normal-case',
        ],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: k() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              me,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              'normal',
              'nowrap',
              'pre',
              'pre-line',
              'pre-wrap',
              'break-spaces',
            ],
          },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', me] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [w] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...M(), ju] }],
        'bg-repeat': [
          { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] },
        ],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', Eu] }],
        'bg-image': [
          {
            bg: [
              'none',
              { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
              Ru,
            ],
          },
        ],
        'bg-color': [{ bg: [e] }],
        'gradient-from-pos': [{ from: [x] }],
        'gradient-via-pos': [{ via: [x] }],
        'gradient-to-pos': [{ to: [x] }],
        'gradient-from': [{ from: [d] }],
        'gradient-via': [{ via: [d] }],
        'gradient-to': [{ to: [d] }],
        rounded: [{ rounded: [a] }],
        'rounded-s': [{ 'rounded-s': [a] }],
        'rounded-e': [{ 'rounded-e': [a] }],
        'rounded-t': [{ 'rounded-t': [a] }],
        'rounded-r': [{ 'rounded-r': [a] }],
        'rounded-b': [{ 'rounded-b': [a] }],
        'rounded-l': [{ 'rounded-l': [a] }],
        'rounded-ss': [{ 'rounded-ss': [a] }],
        'rounded-se': [{ 'rounded-se': [a] }],
        'rounded-ee': [{ 'rounded-ee': [a] }],
        'rounded-es': [{ 'rounded-es': [a] }],
        'rounded-tl': [{ 'rounded-tl': [a] }],
        'rounded-tr': [{ 'rounded-tr': [a] }],
        'rounded-br': [{ 'rounded-br': [a] }],
        'rounded-bl': [{ 'rounded-bl': [a] }],
        'border-w': [{ border: [i] }],
        'border-w-x': [{ 'border-x': [i] }],
        'border-w-y': [{ 'border-y': [i] }],
        'border-w-s': [{ 'border-s': [i] }],
        'border-w-e': [{ 'border-e': [i] }],
        'border-w-t': [{ 'border-t': [i] }],
        'border-w-r': [{ 'border-r': [i] }],
        'border-w-b': [{ 'border-b': [i] }],
        'border-w-l': [{ 'border-l': [i] }],
        'border-opacity': [{ 'border-opacity': [w] }],
        'border-style': [{ border: [...K(), 'hidden'] }],
        'divide-x': [{ 'divide-x': [i] }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': [i] }],
        'divide-y-reverse': ['divide-y-reverse'],
        'divide-opacity': [{ 'divide-opacity': [w] }],
        'divide-style': [{ divide: K() }],
        'border-color': [{ border: [o] }],
        'border-color-x': [{ 'border-x': [o] }],
        'border-color-y': [{ 'border-y': [o] }],
        'border-color-s': [{ 'border-s': [o] }],
        'border-color-e': [{ 'border-e': [o] }],
        'border-color-t': [{ 'border-t': [o] }],
        'border-color-r': [{ 'border-r': [o] }],
        'border-color-b': [{ 'border-b': [o] }],
        'border-color-l': [{ 'border-l': [o] }],
        'divide-color': [{ divide: [o] }],
        'outline-style': [{ outline: ['', ...K()] }],
        'outline-offset': [{ 'outline-offset': [Xe, me] }],
        'outline-w': [{ outline: [Xe, at] }],
        'outline-color': [{ outline: [e] }],
        'ring-w': [{ ring: P() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [e] }],
        'ring-opacity': [{ 'ring-opacity': [w] }],
        'ring-offset-w': [{ 'ring-offset': [Xe, at] }],
        'ring-offset-color': [{ 'ring-offset': [e] }],
        shadow: [{ shadow: ['', 'inner', 'none', st, Pu] }],
        'shadow-color': [{ shadow: [Wt] }],
        opacity: [{ opacity: [w] }],
        'mix-blend': [{ 'mix-blend': [...U(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': U() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [t] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [c] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', st, me] }],
        grayscale: [{ grayscale: [f] }],
        'hue-rotate': [{ 'hue-rotate': [m] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [C] }],
        sepia: [{ sepia: [E] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [t] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [n] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [c] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [f] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [m] }],
        'backdrop-invert': [{ 'backdrop-invert': [p] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [w] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [C] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [E] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': [l] }],
        'border-spacing-x': [{ 'border-spacing-x': [l] }],
        'border-spacing-y': [{ 'border-spacing-y': [l] }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          {
            transition: [
              'none',
              'all',
              '',
              'colors',
              'opacity',
              'shadow',
              'transform',
              me,
            ],
          },
        ],
        duration: [{ duration: F() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', me] }],
        delay: [{ delay: F() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', me] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [_] }],
        'scale-x': [{ 'scale-x': [_] }],
        'scale-y': [{ 'scale-y': [_] }],
        rotate: [{ rotate: [Ht, me] }],
        'translate-x': [{ 'translate-x': [I] }],
        'translate-y': [{ 'translate-y': [I] }],
        'skew-x': [{ 'skew-x': [D] }],
        'skew-y': [{ 'skew-y': [D] }],
        'transform-origin': [
          {
            origin: [
              'center',
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
              'top-left',
              me,
            ],
          },
        ],
        accent: [{ accent: ['auto', e] }],
        appearance: [{ appearance: ['none', 'auto'] }],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              me,
            ],
          },
        ],
        'caret-color': [{ caret: [e] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': k() }],
        'scroll-mx': [{ 'scroll-mx': k() }],
        'scroll-my': [{ 'scroll-my': k() }],
        'scroll-ms': [{ 'scroll-ms': k() }],
        'scroll-me': [{ 'scroll-me': k() }],
        'scroll-mt': [{ 'scroll-mt': k() }],
        'scroll-mr': [{ 'scroll-mr': k() }],
        'scroll-mb': [{ 'scroll-mb': k() }],
        'scroll-ml': [{ 'scroll-ml': k() }],
        'scroll-p': [{ 'scroll-p': k() }],
        'scroll-px': [{ 'scroll-px': k() }],
        'scroll-py': [{ 'scroll-py': k() }],
        'scroll-ps': [{ 'scroll-ps': k() }],
        'scroll-pe': [{ 'scroll-pe': k() }],
        'scroll-pt': [{ 'scroll-pt': k() }],
        'scroll-pr': [{ 'scroll-pr': k() }],
        'scroll-pb': [{ 'scroll-pb': k() }],
        'scroll-pl': [{ 'scroll-pl': k() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [
          { 'will-change': ['auto', 'scroll', 'contents', 'transform', me] },
        ],
        fill: [{ fill: [e, 'none'] }],
        'stroke-w': [{ stroke: [Xe, at, an] }],
        stroke: [{ stroke: [e, 'none'] }],
        sr: ['sr-only', 'not-sr-only'],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: [
          'inset-x',
          'inset-y',
          'start',
          'end',
          'top',
          'right',
          'bottom',
          'left',
        ],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
    }
  },
  os = vu($u)
function le(...e) {
  return os(Un(e))
}
const Mu = Rd,
  as = u.forwardRef(({ className: e, ...r }, t) =>
    s.jsx(Va, {
      ref: t,
      className: le(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        e
      ),
      ...r,
    })
  )
as.displayName = Va.displayName
const Ou = $r(
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    {
      variants: {
        variant: {
          default: 'border bg-background text-foreground',
          destructive:
            'destructive group border-destructive bg-destructive text-destructive-foreground',
        },
      },
      defaultVariants: { variant: 'default' },
    }
  ),
  ss = u.forwardRef(({ className: e, variant: r, ...t }, n) =>
    s.jsx(Ha, { ref: n, className: le(Ou({ variant: r }), e), ...t })
  )
ss.displayName = Ha.displayName
const Lu = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(Ga, {
    ref: t,
    className: le(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      e
    ),
    ...r,
  })
)
Lu.displayName = Ga.displayName
const is = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(Za, {
    ref: t,
    className: le(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      e
    ),
    'toast-close': '',
    ...r,
    children: s.jsx(Mr, { className: 'h-4 w-4' }),
  })
)
is.displayName = Za.displayName
const ls = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(Wa, { ref: t, className: le('text-sm font-semibold', e), ...r })
)
ls.displayName = Wa.displayName
const cs = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(Ka, { ref: t, className: le('text-sm opacity-90', e), ...r })
)
cs.displayName = Ka.displayName
function Fu() {
  const { toasts: e } = Ta()
  return s.jsxs(Mu, {
    children: [
      e.map(function ({ id: r, title: t, description: n, action: o, ...a }) {
        return s.jsxs(
          ss,
          {
            ...a,
            children: [
              s.jsxs('div', {
                className: 'grid gap-1',
                children: [
                  t && s.jsx(ls, { children: t }),
                  n && s.jsx(cs, { children: n }),
                ],
              }),
              o,
              s.jsx(is, {}),
            ],
          },
          r
        )
      }),
      s.jsx(as, {}),
    ],
  })
}
const Gn = yc,
  ds = Sc,
  us = Cc,
  Zn = u.forwardRef(({ className: e, sideOffset: r = 4, ...t }, n) =>
    s.jsx(ca, {
      ref: n,
      sideOffset: r,
      className: le(
        'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        e
      ),
      ...t,
    })
  )
Zn.displayName = ca.displayName
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Jt() {
  return (
    (Jt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r]
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
    Jt.apply(this, arguments)
  )
}
var ut
;(function (e) {
  ;((e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE'))
})(ut || (ut = {}))
const Eo = 'popstate'
function zu(e) {
  e === void 0 && (e = {})
  function r(n, o) {
    let { pathname: a, search: l, hash: i } = n.location
    return yn(
      '',
      { pathname: a, search: l, hash: i },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    )
  }
  function t(n, o) {
    return typeof o == 'string' ? o : kr(o)
  }
  return Uu(r, t, null, e)
}
function Ee(e, r) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(r)
}
function fs(e, r) {
  if (!e) {
    typeof console < 'u' && console.warn(r)
    try {
      throw new Error(r)
    } catch {}
  }
}
function Bu() {
  return Math.random().toString(36).substr(2, 8)
}
function jo(e, r) {
  return { usr: e.state, key: e.key, idx: r }
}
function yn(e, r, t, n) {
  return (
    t === void 0 && (t = null),
    Jt(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof r == 'string' ? zt(r) : r,
      { state: t, key: (r && r.key) || n || Bu() }
    )
  )
}
function kr(e) {
  let { pathname: r = '/', search: t = '', hash: n = '' } = e
  return (
    t && t !== '?' && (r += t.charAt(0) === '?' ? t : '?' + t),
    n && n !== '#' && (r += n.charAt(0) === '#' ? n : '#' + n),
    r
  )
}
function zt(e) {
  let r = {}
  if (e) {
    let t = e.indexOf('#')
    t >= 0 && ((r.hash = e.substr(t)), (e = e.substr(0, t)))
    let n = e.indexOf('?')
    ;(n >= 0 && ((r.search = e.substr(n)), (e = e.substr(0, n))),
      e && (r.pathname = e))
  }
  return r
}
function Uu(e, r, t, n) {
  n === void 0 && (n = {})
  let { window: o = document.defaultView, v5Compat: a = !1 } = n,
    l = o.history,
    i = ut.Pop,
    c = null,
    f = m()
  f == null && ((f = 0), l.replaceState(Jt({}, l.state, { idx: f }), ''))
  function m() {
    return (l.state || { idx: null }).idx
  }
  function p() {
    i = ut.Pop
    let g = m(),
      w = g == null ? null : g - f
    ;((f = g), c && c({ action: i, location: h.location, delta: w }))
  }
  function v(g, w) {
    i = ut.Push
    let S = yn(h.location, g, w)
    f = m() + 1
    let C = jo(S, f),
      _ = h.createHref(S)
    try {
      l.pushState(C, '', _)
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E
      o.location.assign(_)
    }
    a && c && c({ action: i, location: h.location, delta: 1 })
  }
  function d(g, w) {
    i = ut.Replace
    let S = yn(h.location, g, w)
    f = m()
    let C = jo(S, f),
      _ = h.createHref(S)
    ;(l.replaceState(C, '', _),
      a && c && c({ action: i, location: h.location, delta: 0 }))
  }
  function x(g) {
    let w = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      S = typeof g == 'string' ? g : kr(g)
    return (
      (S = S.replace(/ $/, '%20')),
      Ee(
        w,
        'No window.location.(origin|href) available to create URL for href: ' +
          S
      ),
      new URL(S, w)
    )
  }
  let h = {
    get action() {
      return i
    },
    get location() {
      return e(o, l)
    },
    listen(g) {
      if (c) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(Eo, p),
        (c = g),
        () => {
          ;(o.removeEventListener(Eo, p), (c = null))
        }
      )
    },
    createHref(g) {
      return r(o, g)
    },
    createURL: x,
    encodeLocation(g) {
      let w = x(g)
      return { pathname: w.pathname, search: w.search, hash: w.hash }
    },
    push: v,
    replace: d,
    go(g) {
      return l.go(g)
    },
  }
  return h
}
var To
;(function (e) {
  ;((e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error'))
})(To || (To = {}))
function Vu(e, r, t) {
  return (t === void 0 && (t = '/'), Hu(e, r, t))
}
function Hu(e, r, t, n) {
  let o = typeof r == 'string' ? zt(r) : r,
    a = Yn(o.pathname || '/', t)
  if (a == null) return null
  let l = hs(e)
  Wu(l)
  let i = null
  for (let c = 0; i == null && c < l.length; ++c) {
    let f = nf(a)
    i = ef(l[c], f)
  }
  return i
}
function hs(e, r, t, n) {
  ;(r === void 0 && (r = []),
    t === void 0 && (t = []),
    n === void 0 && (n = ''))
  let o = (a, l, i) => {
    let c = {
      relativePath: i === void 0 ? a.path || '' : i,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: l,
      route: a,
    }
    c.relativePath.startsWith('/') &&
      (Ee(
        c.relativePath.startsWith(n),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (c.relativePath = c.relativePath.slice(n.length)))
    let f = ft([n, c.relativePath]),
      m = t.concat(c)
    ;(a.children &&
      a.children.length > 0 &&
      (Ee(
        a.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + f + '".')
      ),
      hs(a.children, r, m, f)),
      !(a.path == null && !a.index) &&
        r.push({ path: f, score: Ju(f, a.index), routesMeta: m }))
  }
  return (
    e.forEach((a, l) => {
      var i
      if (a.path === '' || !((i = a.path) != null && i.includes('?'))) o(a, l)
      else for (let c of ps(a.path)) o(a, l, c)
    }),
    r
  )
}
function ps(e) {
  let r = e.split('/')
  if (r.length === 0) return []
  let [t, ...n] = r,
    o = t.endsWith('?'),
    a = t.replace(/\?$/, '')
  if (n.length === 0) return o ? [a, ''] : [a]
  let l = ps(n.join('/')),
    i = []
  return (
    i.push(...l.map(c => (c === '' ? a : [a, c].join('/')))),
    o && i.push(...l),
    i.map(c => (e.startsWith('/') && c === '' ? '/' : c))
  )
}
function Wu(e) {
  e.sort((r, t) =>
    r.score !== t.score
      ? t.score - r.score
      : Qu(
          r.routesMeta.map(n => n.childrenIndex),
          t.routesMeta.map(n => n.childrenIndex)
        )
  )
}
const Ku = /^:[\w-]+$/,
  Gu = 3,
  Zu = 2,
  Yu = 1,
  Xu = 10,
  qu = -2,
  Ro = e => e === '*'
function Ju(e, r) {
  let t = e.split('/'),
    n = t.length
  return (
    t.some(Ro) && (n += qu),
    r && (n += Zu),
    t
      .filter(o => !Ro(o))
      .reduce((o, a) => o + (Ku.test(a) ? Gu : a === '' ? Yu : Xu), n)
  )
}
function Qu(e, r) {
  return e.length === r.length && e.slice(0, -1).every((n, o) => n === r[o])
    ? e[e.length - 1] - r[r.length - 1]
    : 0
}
function ef(e, r, t) {
  let { routesMeta: n } = e,
    o = {},
    a = '/',
    l = []
  for (let i = 0; i < n.length; ++i) {
    let c = n[i],
      f = i === n.length - 1,
      m = a === '/' ? r : r.slice(a.length) || '/',
      p = tf(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: f },
        m
      ),
      v = c.route
    if (!p) return null
    ;(Object.assign(o, p.params),
      l.push({
        params: o,
        pathname: ft([a, p.pathname]),
        pathnameBase: lf(ft([a, p.pathnameBase])),
        route: v,
      }),
      p.pathnameBase !== '/' && (a = ft([a, p.pathnameBase])))
  }
  return l
}
function tf(e, r) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [t, n] = rf(e.path, e.caseSensitive, e.end),
    o = r.match(t)
  if (!o) return null
  let a = o[0],
    l = a.replace(/(.)\/+$/, '$1'),
    i = o.slice(1)
  return {
    params: n.reduce((f, m, p) => {
      let { paramName: v, isOptional: d } = m
      if (v === '*') {
        let h = i[p] || ''
        l = a.slice(0, a.length - h.length).replace(/(.)\/+$/, '$1')
      }
      const x = i[p]
      return (
        d && !x ? (f[v] = void 0) : (f[v] = (x || '').replace(/%2F/g, '/')),
        f
      )
    }, {}),
    pathname: a,
    pathnameBase: l,
    pattern: e,
  }
}
function rf(e, r, t) {
  ;(r === void 0 && (r = !1),
    t === void 0 && (t = !0),
    fs(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    ))
  let n = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, i, c) => (
            n.push({ paramName: i, isOptional: c != null }),
            c ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : t
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, r ? void 0 : 'i'), n]
  )
}
function nf(e) {
  try {
    return e
      .split('/')
      .map(r => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/')
  } catch (r) {
    return (
      fs(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + r + ').')
      ),
      e
    )
  }
}
function Yn(e, r) {
  if (r === '/') return e
  if (!e.toLowerCase().startsWith(r.toLowerCase())) return null
  let t = r.endsWith('/') ? r.length - 1 : r.length,
    n = e.charAt(t)
  return n && n !== '/' ? null : e.slice(t) || '/'
}
function of(e, r) {
  r === void 0 && (r = '/')
  let {
    pathname: t,
    search: n = '',
    hash: o = '',
  } = typeof e == 'string' ? zt(e) : e
  return {
    pathname: t ? (t.startsWith('/') ? t : af(t, r)) : r,
    search: cf(n),
    hash: df(o),
  }
}
function af(e, r) {
  let t = r.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach(o => {
      o === '..' ? t.length > 1 && t.pop() : o !== '.' && t.push(o)
    }),
    t.length > 1 ? t.join('/') : '/'
  )
}
function sn(e, r, t, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      r +
      '` field [' +
      JSON.stringify(n) +
      '].  Please separate it out to the ') +
    ('`to.' + t + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function sf(e) {
  return e.filter(
    (r, t) => t === 0 || (r.route.path && r.route.path.length > 0)
  )
}
function ms(e, r) {
  let t = sf(e)
  return r
    ? t.map((n, o) => (o === t.length - 1 ? n.pathname : n.pathnameBase))
    : t.map(n => n.pathnameBase)
}
function gs(e, r, t, n) {
  n === void 0 && (n = !1)
  let o
  typeof e == 'string'
    ? (o = zt(e))
    : ((o = Jt({}, e)),
      Ee(
        !o.pathname || !o.pathname.includes('?'),
        sn('?', 'pathname', 'search', o)
      ),
      Ee(
        !o.pathname || !o.pathname.includes('#'),
        sn('#', 'pathname', 'hash', o)
      ),
      Ee(!o.search || !o.search.includes('#'), sn('#', 'search', 'hash', o)))
  let a = e === '' || o.pathname === '',
    l = a ? '/' : o.pathname,
    i
  if (l == null) i = t
  else {
    let p = r.length - 1
    if (!n && l.startsWith('..')) {
      let v = l.split('/')
      for (; v[0] === '..'; ) (v.shift(), (p -= 1))
      o.pathname = v.join('/')
    }
    i = p >= 0 ? r[p] : '/'
  }
  let c = of(o, i),
    f = l && l !== '/' && l.endsWith('/'),
    m = (a || l === '.') && t.endsWith('/')
  return (!c.pathname.endsWith('/') && (f || m) && (c.pathname += '/'), c)
}
const ft = e => e.join('/').replace(/\/\/+/g, '/'),
  lf = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  cf = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  df = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function uf(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const vs = ['post', 'put', 'patch', 'delete']
new Set(vs)
const ff = ['get', ...vs]
new Set(ff)
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qt() {
  return (
    (Qt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r]
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
    Qt.apply(this, arguments)
  )
}
const Xn = u.createContext(null),
  hf = u.createContext(null),
  yt = u.createContext(null),
  Or = u.createContext(null),
  St = u.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  bs = u.createContext(null)
function pf(e, r) {
  let { relative: t } = r === void 0 ? {} : r
  ar() || Ee(!1)
  let { basename: n, navigator: o } = u.useContext(yt),
    { hash: a, pathname: l, search: i } = ws(e, { relative: t }),
    c = l
  return (
    n !== '/' && (c = l === '/' ? n : ft([n, l])),
    o.createHref({ pathname: c, search: i, hash: a })
  )
}
function ar() {
  return u.useContext(Or) != null
}
function Bt() {
  return (ar() || Ee(!1), u.useContext(Or).location)
}
function xs(e) {
  u.useContext(yt).static || u.useLayoutEffect(e)
}
function mf() {
  let { isDataRoute: e } = u.useContext(St)
  return e ? jf() : gf()
}
function gf() {
  ar() || Ee(!1)
  let e = u.useContext(Xn),
    { basename: r, future: t, navigator: n } = u.useContext(yt),
    { matches: o } = u.useContext(St),
    { pathname: a } = Bt(),
    l = JSON.stringify(ms(o, t.v7_relativeSplatPath)),
    i = u.useRef(!1)
  return (
    xs(() => {
      i.current = !0
    }),
    u.useCallback(
      function (f, m) {
        if ((m === void 0 && (m = {}), !i.current)) return
        if (typeof f == 'number') {
          n.go(f)
          return
        }
        let p = gs(f, JSON.parse(l), a, m.relative === 'path')
        ;(e == null &&
          r !== '/' &&
          (p.pathname = p.pathname === '/' ? r : ft([r, p.pathname])),
          (m.replace ? n.replace : n.push)(p, m.state, m))
      },
      [r, n, l, a, e]
    )
  )
}
function ws(e, r) {
  let { relative: t } = r === void 0 ? {} : r,
    { future: n } = u.useContext(yt),
    { matches: o } = u.useContext(St),
    { pathname: a } = Bt(),
    l = JSON.stringify(ms(o, n.v7_relativeSplatPath))
  return u.useMemo(() => gs(e, JSON.parse(l), a, t === 'path'), [e, l, a, t])
}
function vf(e, r) {
  return bf(e, r)
}
function bf(e, r, t, n) {
  ar() || Ee(!1)
  let { navigator: o } = u.useContext(yt),
    { matches: a } = u.useContext(St),
    l = a[a.length - 1],
    i = l ? l.params : {}
  l && l.pathname
  let c = l ? l.pathnameBase : '/'
  l && l.route
  let f = Bt(),
    m
  if (r) {
    var p
    let g = typeof r == 'string' ? zt(r) : r
    ;(c === '/' || ((p = g.pathname) != null && p.startsWith(c)) || Ee(!1),
      (m = g))
  } else m = f
  let v = m.pathname || '/',
    d = v
  if (c !== '/') {
    let g = c.replace(/^\//, '').split('/')
    d = '/' + v.replace(/^\//, '').split('/').slice(g.length).join('/')
  }
  let x = Vu(e, { pathname: d }),
    h = Cf(
      x &&
        x.map(g =>
          Object.assign({}, g, {
            params: Object.assign({}, i, g.params),
            pathname: ft([
              c,
              o.encodeLocation
                ? o.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === '/'
                ? c
                : ft([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      a,
      t,
      n
    )
  return r && h
    ? u.createElement(
        Or.Provider,
        {
          value: {
            location: Qt(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              m
            ),
            navigationType: ut.Pop,
          },
        },
        h
      )
    : h
}
function xf() {
  let e = Ef(),
    r = uf(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    t = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
  return u.createElement(
    u.Fragment,
    null,
    u.createElement('h2', null, 'Unexpected Application Error!'),
    u.createElement('h3', { style: { fontStyle: 'italic' } }, r),
    t ? u.createElement('pre', { style: o }, t) : null,
    null
  )
}
const wf = u.createElement(xf, null)
class yf extends u.Component {
  constructor(r) {
    ;(super(r),
      (this.state = {
        location: r.location,
        revalidation: r.revalidation,
        error: r.error,
      }))
  }
  static getDerivedStateFromError(r) {
    return { error: r }
  }
  static getDerivedStateFromProps(r, t) {
    return t.location !== r.location ||
      (t.revalidation !== 'idle' && r.revalidation === 'idle')
      ? { error: r.error, location: r.location, revalidation: r.revalidation }
      : {
          error: r.error !== void 0 ? r.error : t.error,
          location: t.location,
          revalidation: r.revalidation || t.revalidation,
        }
  }
  componentDidCatch(r, t) {
    console.error('React Router caught the following error during render', r, t)
  }
  render() {
    return this.state.error !== void 0
      ? u.createElement(
          St.Provider,
          { value: this.props.routeContext },
          u.createElement(bs.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children
  }
}
function Sf(e) {
  let { routeContext: r, match: t, children: n } = e,
    o = u.useContext(Xn)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = t.route.id),
    u.createElement(St.Provider, { value: r }, n)
  )
}
function Cf(e, r, t, n) {
  var o
  if (
    (r === void 0 && (r = []),
    t === void 0 && (t = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var a
    if (!t) return null
    if (t.errors) e = t.matches
    else if (
      (a = n) != null &&
      a.v7_partialHydration &&
      r.length === 0 &&
      !t.initialized &&
      t.matches.length > 0
    )
      e = t.matches
    else return null
  }
  let l = e,
    i = (o = t) == null ? void 0 : o.errors
  if (i != null) {
    let m = l.findIndex(
      p => p.route.id && (i == null ? void 0 : i[p.route.id]) !== void 0
    )
    ;(m >= 0 || Ee(!1), (l = l.slice(0, Math.min(l.length, m + 1))))
  }
  let c = !1,
    f = -1
  if (t && n && n.v7_partialHydration)
    for (let m = 0; m < l.length; m++) {
      let p = l[m]
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (f = m),
        p.route.id)
      ) {
        let { loaderData: v, errors: d } = t,
          x =
            p.route.loader &&
            v[p.route.id] === void 0 &&
            (!d || d[p.route.id] === void 0)
        if (p.route.lazy || x) {
          ;((c = !0), f >= 0 ? (l = l.slice(0, f + 1)) : (l = [l[0]]))
          break
        }
      }
    }
  return l.reduceRight((m, p, v) => {
    let d,
      x = !1,
      h = null,
      g = null
    t &&
      ((d = i && p.route.id ? i[p.route.id] : void 0),
      (h = p.route.errorElement || wf),
      c &&
        (f < 0 && v === 0
          ? (Tf('route-fallback'), (x = !0), (g = null))
          : f === v &&
            ((x = !0), (g = p.route.hydrateFallbackElement || null))))
    let w = r.concat(l.slice(0, v + 1)),
      S = () => {
        let C
        return (
          d
            ? (C = h)
            : x
              ? (C = g)
              : p.route.Component
                ? (C = u.createElement(p.route.Component, null))
                : p.route.element
                  ? (C = p.route.element)
                  : (C = m),
          u.createElement(Sf, {
            match: p,
            routeContext: { outlet: m, matches: w, isDataRoute: t != null },
            children: C,
          })
        )
      }
    return t && (p.route.ErrorBoundary || p.route.errorElement || v === 0)
      ? u.createElement(yf, {
          location: t.location,
          revalidation: t.revalidation,
          component: h,
          error: d,
          children: S(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : S()
  }, null)
}
var ys = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    )
  })(ys || {}),
  Ss = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(Ss || {})
function _f(e) {
  let r = u.useContext(Xn)
  return (r || Ee(!1), r)
}
function kf(e) {
  let r = u.useContext(hf)
  return (r || Ee(!1), r)
}
function Nf(e) {
  let r = u.useContext(St)
  return (r || Ee(!1), r)
}
function Cs(e) {
  let r = Nf(),
    t = r.matches[r.matches.length - 1]
  return (t.route.id || Ee(!1), t.route.id)
}
function Ef() {
  var e
  let r = u.useContext(bs),
    t = kf(),
    n = Cs()
  return r !== void 0 ? r : (e = t.errors) == null ? void 0 : e[n]
}
function jf() {
  let { router: e } = _f(ys.UseNavigateStable),
    r = Cs(Ss.UseNavigateStable),
    t = u.useRef(!1)
  return (
    xs(() => {
      t.current = !0
    }),
    u.useCallback(
      function (o, a) {
        ;(a === void 0 && (a = {}),
          t.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, Qt({ fromRouteId: r }, a))))
      },
      [e, r]
    )
  )
}
const Po = {}
function Tf(e, r, t) {
  Po[e] || (Po[e] = !0)
}
function Rf(e, r) {
  ;(e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath)
}
function Pt(e) {
  Ee(!1)
}
function Pf(e) {
  let {
    basename: r = '/',
    children: t = null,
    location: n,
    navigationType: o = ut.Pop,
    navigator: a,
    static: l = !1,
    future: i,
  } = e
  ar() && Ee(!1)
  let c = r.replace(/^\/*/, '/'),
    f = u.useMemo(
      () => ({
        basename: c,
        navigator: a,
        static: l,
        future: Qt({ v7_relativeSplatPath: !1 }, i),
      }),
      [c, i, a, l]
    )
  typeof n == 'string' && (n = zt(n))
  let {
      pathname: m = '/',
      search: p = '',
      hash: v = '',
      state: d = null,
      key: x = 'default',
    } = n,
    h = u.useMemo(() => {
      let g = Yn(m, c)
      return g == null
        ? null
        : {
            location: { pathname: g, search: p, hash: v, state: d, key: x },
            navigationType: o,
          }
    }, [c, m, p, v, d, x, o])
  return h == null
    ? null
    : u.createElement(
        yt.Provider,
        { value: f },
        u.createElement(Or.Provider, { children: t, value: h })
      )
}
function If(e) {
  let { children: r, location: t } = e
  return vf(Sn(r), t)
}
new Promise(() => {})
function Sn(e, r) {
  r === void 0 && (r = [])
  let t = []
  return (
    u.Children.forEach(e, (n, o) => {
      if (!u.isValidElement(n)) return
      let a = [...r, o]
      if (n.type === u.Fragment) {
        t.push.apply(t, Sn(n.props.children, a))
        return
      }
      ;(n.type !== Pt && Ee(!1), !n.props.index || !n.props.children || Ee(!1))
      let l = {
        id: n.props.id || a.join('-'),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      }
      ;(n.props.children && (l.children = Sn(n.props.children, a)), t.push(l))
    }),
    t
  )
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cn() {
  return (
    (Cn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r]
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
    Cn.apply(this, arguments)
  )
}
function Df(e, r) {
  if (e == null) return {}
  var t = {},
    n = Object.keys(e),
    o,
    a
  for (a = 0; a < n.length; a++)
    ((o = n[a]), !(r.indexOf(o) >= 0) && (t[o] = e[o]))
  return t
}
function Af(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function $f(e, r) {
  return e.button === 0 && (!r || r === '_self') && !Af(e)
}
const Mf = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  Of = '6'
try {
  window.__reactRouterVersion = Of
} catch {}
const Lf = 'startTransition',
  Io = da[Lf]
function Ff(e) {
  let { basename: r, children: t, future: n, window: o } = e,
    a = u.useRef()
  a.current == null && (a.current = zu({ window: o, v5Compat: !0 }))
  let l = a.current,
    [i, c] = u.useState({ action: l.action, location: l.location }),
    { v7_startTransition: f } = n || {},
    m = u.useCallback(
      p => {
        f && Io ? Io(() => c(p)) : c(p)
      },
      [c, f]
    )
  return (
    u.useLayoutEffect(() => l.listen(m), [l, m]),
    u.useEffect(() => Rf(n), [n]),
    u.createElement(Pf, {
      basename: r,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: l,
      future: n,
    })
  )
}
const zf =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Bf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _s = u.forwardRef(function (r, t) {
    let {
        onClick: n,
        relative: o,
        reloadDocument: a,
        replace: l,
        state: i,
        target: c,
        to: f,
        preventScrollReset: m,
        viewTransition: p,
      } = r,
      v = Df(r, Mf),
      { basename: d } = u.useContext(yt),
      x,
      h = !1
    if (typeof f == 'string' && Bf.test(f) && ((x = f), zf))
      try {
        let C = new URL(window.location.href),
          _ = f.startsWith('//') ? new URL(C.protocol + f) : new URL(f),
          E = Yn(_.pathname, d)
        _.origin === C.origin && E != null
          ? (f = E + _.search + _.hash)
          : (h = !0)
      } catch {}
    let g = pf(f, { relative: o }),
      w = Uf(f, {
        replace: l,
        state: i,
        target: c,
        preventScrollReset: m,
        relative: o,
        viewTransition: p,
      })
    function S(C) {
      ;(n && n(C), C.defaultPrevented || w(C))
    }
    return u.createElement(
      'a',
      Cn({}, v, { href: x || g, onClick: h || a ? n : S, ref: t, target: c })
    )
  })
var Do
;(function (e) {
  ;((e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState'))
})(Do || (Do = {}))
var Ao
;(function (e) {
  ;((e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration'))
})(Ao || (Ao = {}))
function Uf(e, r) {
  let {
      target: t,
      replace: n,
      state: o,
      preventScrollReset: a,
      relative: l,
      viewTransition: i,
    } = r === void 0 ? {} : r,
    c = mf(),
    f = Bt(),
    m = ws(e, { relative: l })
  return u.useCallback(
    p => {
      if ($f(p, t)) {
        p.preventDefault()
        let v = n !== void 0 ? n : kr(f) === kr(m)
        c(e, {
          replace: v,
          state: o,
          preventScrollReset: a,
          relative: l,
          viewTransition: i,
        })
      }
    },
    [f, c, m, n, o, t, e, a, l, i]
  )
}
const ks = {
    id: '1',
    username: 'user1',
    displayName: 'Warehouse Manager',
    role: 'manager',
  },
  Ns = u.createContext({ currentUser: ks, updateUser: () => {} }),
  Es = ({ children: e }) => {
    const [r, t] = u.useState(ks)
    u.useEffect(() => {
      const o = localStorage.getItem('currentUser')
      o && t(JSON.parse(o))
    }, [])
    const n = o => {
      ;(t(o), localStorage.setItem('currentUser', JSON.stringify(o)))
    }
    return s.jsx(Ns.Provider, {
      value: { currentUser: r, updateUser: n },
      children: e,
    })
  },
  sr = () => u.useContext(Ns),
  Je = u.forwardRef(({ className: e, ...r }, t) =>
    s.jsx('div', {
      ref: t,
      className: le(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        e
      ),
      ...r,
    })
  )
Je.displayName = 'Card'
const ht = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('div', {
    ref: t,
    className: le('flex flex-col space-y-1.5 p-6', e),
    ...r,
  })
)
ht.displayName = 'CardHeader'
const Qe = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('h3', {
    ref: t,
    className: le('text-2xl font-semibold leading-none tracking-tight', e),
    ...r,
  })
)
Qe.displayName = 'CardTitle'
const js = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('p', {
    ref: t,
    className: le('text-sm text-muted-foreground', e),
    ...r,
  })
)
js.displayName = 'CardDescription'
const pt = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('div', { ref: t, className: le('p-6 pt-0', e), ...r })
)
pt.displayName = 'CardContent'
const Vf = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('div', { ref: t, className: le('flex items-center p-6 pt-0', e), ...r })
)
Vf.displayName = 'CardFooter'
const Hf = $r(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline:
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-10 px-4 py-2',
          sm: 'h-9 rounded-md px-3',
          lg: 'h-11 rounded-md px-8',
          icon: 'h-10 w-10',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    }
  ),
  ge = u.forwardRef(
    ({ className: e, variant: r, size: t, asChild: n = !1, ...o }, a) => {
      const l = n ? _c : 'button'
      return s.jsx(l, {
        className: le(Hf({ variant: r, size: t, className: e })),
        ref: a,
        ...o,
      })
    }
  )
ge.displayName = 'Button'
var Wf = e => {
    switch (e) {
      case 'success':
        return Zf
      case 'info':
        return Xf
      case 'warning':
        return Yf
      case 'error':
        return qf
      default:
        return null
    }
  },
  Kf = Array(12).fill(0),
  Gf = ({ visible: e, className: r }) =>
    J.createElement(
      'div',
      {
        className: ['sonner-loading-wrapper', r].filter(Boolean).join(' '),
        'data-visible': e,
      },
      J.createElement(
        'div',
        { className: 'sonner-spinner' },
        Kf.map((t, n) =>
          J.createElement('div', {
            className: 'sonner-loading-bar',
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  Zf = J.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    J.createElement('path', {
      fillRule: 'evenodd',
      d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
      clipRule: 'evenodd',
    })
  ),
  Yf = J.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    J.createElement('path', {
      fillRule: 'evenodd',
      d: 'M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z',
      clipRule: 'evenodd',
    })
  ),
  Xf = J.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    J.createElement('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
      clipRule: 'evenodd',
    })
  ),
  qf = J.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    J.createElement('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
      clipRule: 'evenodd',
    })
  ),
  Jf = J.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '12',
      height: '12',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    J.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
    J.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
  ),
  Qf = () => {
    let [e, r] = J.useState(document.hidden)
    return (
      J.useEffect(() => {
        let t = () => {
          r(document.hidden)
        }
        return (
          document.addEventListener('visibilitychange', t),
          () => window.removeEventListener('visibilitychange', t)
        )
      }, []),
      e
    )
  },
  _n = 1,
  eh = class {
    constructor() {
      ;((this.subscribe = e => (
        this.subscribers.push(e),
        () => {
          let r = this.subscribers.indexOf(e)
          this.subscribers.splice(r, 1)
        }
      )),
        (this.publish = e => {
          this.subscribers.forEach(r => r(e))
        }),
        (this.addToast = e => {
          ;(this.publish(e), (this.toasts = [...this.toasts, e]))
        }),
        (this.create = e => {
          var r
          let { message: t, ...n } = e,
            o =
              typeof (e == null ? void 0 : e.id) == 'number' ||
              ((r = e.id) == null ? void 0 : r.length) > 0
                ? e.id
                : _n++,
            a = this.toasts.find(i => i.id === o),
            l = e.dismissible === void 0 ? !0 : e.dismissible
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            a
              ? (this.toasts = this.toasts.map(i =>
                  i.id === o
                    ? (this.publish({ ...i, ...e, id: o, title: t }),
                      { ...i, ...e, id: o, dismissible: l, title: t })
                    : i
                ))
              : this.addToast({ title: t, ...n, dismissible: l, id: o }),
            o
          )
        }),
        (this.dismiss = e => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach(r => {
              this.subscribers.forEach(t => t({ id: r.id, dismiss: !0 }))
            }),
          this.subscribers.forEach(r => r({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, r) => this.create({ ...r, message: e })),
        (this.error = (e, r) =>
          this.create({ ...r, message: e, type: 'error' })),
        (this.success = (e, r) =>
          this.create({ ...r, type: 'success', message: e })),
        (this.info = (e, r) => this.create({ ...r, type: 'info', message: e })),
        (this.warning = (e, r) =>
          this.create({ ...r, type: 'warning', message: e })),
        (this.loading = (e, r) =>
          this.create({ ...r, type: 'loading', message: e })),
        (this.promise = (e, r) => {
          if (!r) return
          let t
          r.loading !== void 0 &&
            (t = this.create({
              ...r,
              promise: e,
              type: 'loading',
              message: r.loading,
              description:
                typeof r.description != 'function' ? r.description : void 0,
            }))
          let n = e instanceof Promise ? e : e(),
            o = t !== void 0,
            a,
            l = n
              .then(async c => {
                if (((a = ['resolve', c]), J.isValidElement(c)))
                  ((o = !1),
                    this.create({ id: t, type: 'default', message: c }))
                else if (rh(c) && !c.ok) {
                  o = !1
                  let f =
                      typeof r.error == 'function'
                        ? await r.error(`HTTP error! status: ${c.status}`)
                        : r.error,
                    m =
                      typeof r.description == 'function'
                        ? await r.description(`HTTP error! status: ${c.status}`)
                        : r.description
                  this.create({
                    id: t,
                    type: 'error',
                    message: f,
                    description: m,
                  })
                } else if (r.success !== void 0) {
                  o = !1
                  let f =
                      typeof r.success == 'function'
                        ? await r.success(c)
                        : r.success,
                    m =
                      typeof r.description == 'function'
                        ? await r.description(c)
                        : r.description
                  this.create({
                    id: t,
                    type: 'success',
                    message: f,
                    description: m,
                  })
                }
              })
              .catch(async c => {
                if (((a = ['reject', c]), r.error !== void 0)) {
                  o = !1
                  let f =
                      typeof r.error == 'function' ? await r.error(c) : r.error,
                    m =
                      typeof r.description == 'function'
                        ? await r.description(c)
                        : r.description
                  this.create({
                    id: t,
                    type: 'error',
                    message: f,
                    description: m,
                  })
                }
              })
              .finally(() => {
                var c
                ;(o && (this.dismiss(t), (t = void 0)),
                  (c = r.finally) == null || c.call(r))
              }),
            i = () =>
              new Promise((c, f) =>
                l.then(() => (a[0] === 'reject' ? f(a[1]) : c(a[1]))).catch(f)
              )
          return typeof t != 'string' && typeof t != 'number'
            ? { unwrap: i }
            : Object.assign(t, { unwrap: i })
        }),
        (this.custom = (e, r) => {
          let t = (r == null ? void 0 : r.id) || _n++
          return (this.create({ jsx: e(t), id: t, ...r }), t)
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter(e => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()))
    }
  },
  Me = new eh(),
  th = (e, r) => {
    let t = (r == null ? void 0 : r.id) || _n++
    return (Me.addToast({ title: e, ...r, id: t }), t)
  },
  rh = e =>
    e &&
    typeof e == 'object' &&
    'ok' in e &&
    typeof e.ok == 'boolean' &&
    'status' in e &&
    typeof e.status == 'number',
  nh = th,
  oh = () => Me.toasts,
  ah = () => Me.getActiveToasts(),
  de = Object.assign(
    nh,
    {
      success: Me.success,
      info: Me.info,
      warning: Me.warning,
      error: Me.error,
      custom: Me.custom,
      message: Me.message,
      promise: Me.promise,
      dismiss: Me.dismiss,
      loading: Me.loading,
    },
    { getHistory: oh, getToasts: ah }
  )
function sh(e, { insertAt: r } = {}) {
  if (typeof document > 'u') return
  let t = document.head || document.getElementsByTagName('head')[0],
    n = document.createElement('style')
  ;((n.type = 'text/css'),
    r === 'top' && t.firstChild
      ? t.insertBefore(n, t.firstChild)
      : t.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e)))
}
sh(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`)
function vr(e) {
  return e.label !== void 0
}
var ih = 3,
  lh = '32px',
  ch = '16px',
  $o = 4e3,
  dh = 356,
  uh = 14,
  fh = 20,
  hh = 200
function We(...e) {
  return e.filter(Boolean).join(' ')
}
function ph(e) {
  let [r, t] = e.split('-'),
    n = []
  return (r && n.push(r), t && n.push(t), n)
}
var mh = e => {
  var r, t, n, o, a, l, i, c, f, m, p
  let {
      invert: v,
      toast: d,
      unstyled: x,
      interacting: h,
      setHeights: g,
      visibleToasts: w,
      heights: S,
      index: C,
      toasts: _,
      expanded: E,
      removeToast: D,
      defaultRichColors: T,
      closeButton: I,
      style: R,
      cancelButtonStyle: L,
      actionButtonStyle: V,
      className: k = '',
      descriptionClassName: P = '',
      duration: b,
      position: M,
      gap: K,
      loadingIcon: U,
      expandByDefault: re,
      classNames: $,
      icons: ee,
      closeButtonAriaLabel: F = 'Close toast',
      pauseWhenPageIsHidden: A,
    } = e,
    [q, G] = J.useState(null),
    [Z, fe] = J.useState(null),
    [Q, ne] = J.useState(!1),
    [se, ue] = J.useState(!1),
    [ce, he] = J.useState(!1),
    [ye, y] = J.useState(!1),
    [H, B] = J.useState(!1),
    [j, N] = J.useState(0),
    [O, W] = J.useState(0),
    Y = J.useRef(d.duration || b || $o),
    z = J.useRef(null),
    X = J.useRef(null),
    oe = C === 0,
    te = C + 1 <= w,
    ae = d.type,
    xe = d.dismissible !== !1,
    ve = d.className || '',
    $e = d.descriptionClassName || '',
    Ze = J.useMemo(
      () => S.findIndex(pe => pe.toastId === d.id) || 0,
      [S, d.id]
    ),
    Le = J.useMemo(() => {
      var pe
      return (pe = d.closeButton) != null ? pe : I
    }, [d.closeButton, I]),
    rt = J.useMemo(() => d.duration || b || $o, [d.duration, b]),
    _e = J.useRef(0),
    Be = J.useRef(0),
    Et = J.useRef(0),
    Ie = J.useRef(null),
    [dr, en] = M.split('-'),
    ur = J.useMemo(
      () => S.reduce((pe, Se, Ne) => (Ne >= Ze ? pe : pe + Se.height), 0),
      [S, Ze]
    ),
    fr = Qf(),
    hr = d.invert || v,
    Ye = ae === 'loading'
  ;((Be.current = J.useMemo(() => Ze * K + ur, [Ze, ur])),
    J.useEffect(() => {
      Y.current = rt
    }, [rt]),
    J.useEffect(() => {
      ne(!0)
    }, []),
    J.useEffect(() => {
      let pe = X.current
      if (pe) {
        let Se = pe.getBoundingClientRect().height
        return (
          W(Se),
          g(Ne => [{ toastId: d.id, height: Se, position: d.position }, ...Ne]),
          () => g(Ne => Ne.filter(Ue => Ue.toastId !== d.id))
        )
      }
    }, [g, d.id]),
    J.useLayoutEffect(() => {
      if (!Q) return
      let pe = X.current,
        Se = pe.style.height
      pe.style.height = 'auto'
      let Ne = pe.getBoundingClientRect().height
      ;((pe.style.height = Se),
        W(Ne),
        g(Ue =>
          Ue.find(Ve => Ve.toastId === d.id)
            ? Ue.map(Ve => (Ve.toastId === d.id ? { ...Ve, height: Ne } : Ve))
            : [{ toastId: d.id, height: Ne, position: d.position }, ...Ue]
        ))
    }, [Q, d.title, d.description, g, d.id]))
  let Oe = J.useCallback(() => {
    ;(ue(!0),
      N(Be.current),
      g(pe => pe.filter(Se => Se.toastId !== d.id)),
      setTimeout(() => {
        D(d)
      }, hh))
  }, [d, D, g, Be])
  ;(J.useEffect(() => {
    if (
      (d.promise && ae === 'loading') ||
      d.duration === 1 / 0 ||
      d.type === 'loading'
    )
      return
    let pe
    return (
      E || h || (A && fr)
        ? (() => {
            if (Et.current < _e.current) {
              let Se = new Date().getTime() - _e.current
              Y.current = Y.current - Se
            }
            Et.current = new Date().getTime()
          })()
        : Y.current !== 1 / 0 &&
          ((_e.current = new Date().getTime()),
          (pe = setTimeout(() => {
            var Se
            ;((Se = d.onAutoClose) == null || Se.call(d, d), Oe())
          }, Y.current))),
      () => clearTimeout(pe)
    )
  }, [E, h, d, ae, A, fr, Oe]),
    J.useEffect(() => {
      d.delete && Oe()
    }, [Oe, d.delete]))
  function mc() {
    var pe, Se, Ne
    return ee != null && ee.loading
      ? J.createElement(
          'div',
          {
            className: We(
              $ == null ? void 0 : $.loader,
              (pe = d == null ? void 0 : d.classNames) == null
                ? void 0
                : pe.loader,
              'sonner-loader'
            ),
            'data-visible': ae === 'loading',
          },
          ee.loading
        )
      : U
        ? J.createElement(
            'div',
            {
              className: We(
                $ == null ? void 0 : $.loader,
                (Se = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : Se.loader,
                'sonner-loader'
              ),
              'data-visible': ae === 'loading',
            },
            U
          )
        : J.createElement(Gf, {
            className: We(
              $ == null ? void 0 : $.loader,
              (Ne = d == null ? void 0 : d.classNames) == null
                ? void 0
                : Ne.loader
            ),
            visible: ae === 'loading',
          })
  }
  return J.createElement(
    'li',
    {
      tabIndex: 0,
      ref: X,
      className: We(
        k,
        ve,
        $ == null ? void 0 : $.toast,
        (r = d == null ? void 0 : d.classNames) == null ? void 0 : r.toast,
        $ == null ? void 0 : $.default,
        $ == null ? void 0 : $[ae],
        (t = d == null ? void 0 : d.classNames) == null ? void 0 : t[ae]
      ),
      'data-sonner-toast': '',
      'data-rich-colors': (n = d.richColors) != null ? n : T,
      'data-styled': !(d.jsx || d.unstyled || x),
      'data-mounted': Q,
      'data-promise': !!d.promise,
      'data-swiped': H,
      'data-removed': se,
      'data-visible': te,
      'data-y-position': dr,
      'data-x-position': en,
      'data-index': C,
      'data-front': oe,
      'data-swiping': ce,
      'data-dismissible': xe,
      'data-type': ae,
      'data-invert': hr,
      'data-swipe-out': ye,
      'data-swipe-direction': Z,
      'data-expanded': !!(E || (re && Q)),
      style: {
        '--index': C,
        '--toasts-before': C,
        '--z-index': _.length - C,
        '--offset': `${se ? j : Be.current}px`,
        '--initial-height': re ? 'auto' : `${O}px`,
        ...R,
        ...d.style,
      },
      onDragEnd: () => {
        ;(he(!1), G(null), (Ie.current = null))
      },
      onPointerDown: pe => {
        Ye ||
          !xe ||
          ((z.current = new Date()),
          N(Be.current),
          pe.target.setPointerCapture(pe.pointerId),
          pe.target.tagName !== 'BUTTON' &&
            (he(!0), (Ie.current = { x: pe.clientX, y: pe.clientY })))
      },
      onPointerUp: () => {
        var pe, Se, Ne, Ue
        if (ye || !xe) return
        Ie.current = null
        let Ve = Number(
            ((pe = X.current) == null
              ? void 0
              : pe.style
                  .getPropertyValue('--swipe-amount-x')
                  .replace('px', '')) || 0
          ),
          nt = Number(
            ((Se = X.current) == null
              ? void 0
              : Se.style
                  .getPropertyValue('--swipe-amount-y')
                  .replace('px', '')) || 0
          ),
          mt =
            new Date().getTime() -
            ((Ne = z.current) == null ? void 0 : Ne.getTime()),
          He = q === 'x' ? Ve : nt,
          ot = Math.abs(He) / mt
        if (Math.abs(He) >= fh || ot > 0.11) {
          ;(N(Be.current),
            (Ue = d.onDismiss) == null || Ue.call(d, d),
            fe(
              q === 'x' ? (Ve > 0 ? 'right' : 'left') : nt > 0 ? 'down' : 'up'
            ),
            Oe(),
            y(!0),
            B(!1))
          return
        }
        ;(he(!1), G(null))
      },
      onPointerMove: pe => {
        var Se, Ne, Ue, Ve
        if (
          !Ie.current ||
          !xe ||
          ((Se = window.getSelection()) == null
            ? void 0
            : Se.toString().length) > 0
        )
          return
        let nt = pe.clientY - Ie.current.y,
          mt = pe.clientX - Ie.current.x,
          He = (Ne = e.swipeDirections) != null ? Ne : ph(M)
        !q &&
          (Math.abs(mt) > 1 || Math.abs(nt) > 1) &&
          G(Math.abs(mt) > Math.abs(nt) ? 'x' : 'y')
        let ot = { x: 0, y: 0 }
        ;(q === 'y'
          ? (He.includes('top') || He.includes('bottom')) &&
            ((He.includes('top') && nt < 0) ||
              (He.includes('bottom') && nt > 0)) &&
            (ot.y = nt)
          : q === 'x' &&
            (He.includes('left') || He.includes('right')) &&
            ((He.includes('left') && mt < 0) ||
              (He.includes('right') && mt > 0)) &&
            (ot.x = mt),
          (Math.abs(ot.x) > 0 || Math.abs(ot.y) > 0) && B(!0),
          (Ue = X.current) == null ||
            Ue.style.setProperty('--swipe-amount-x', `${ot.x}px`),
          (Ve = X.current) == null ||
            Ve.style.setProperty('--swipe-amount-y', `${ot.y}px`))
      },
    },
    Le && !d.jsx
      ? J.createElement(
          'button',
          {
            'aria-label': F,
            'data-disabled': Ye,
            'data-close-button': !0,
            onClick:
              Ye || !xe
                ? () => {}
                : () => {
                    var pe
                    ;(Oe(), (pe = d.onDismiss) == null || pe.call(d, d))
                  },
            className: We(
              $ == null ? void 0 : $.closeButton,
              (o = d == null ? void 0 : d.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (a = ee == null ? void 0 : ee.close) != null ? a : Jf
        )
      : null,
    d.jsx || u.isValidElement(d.title)
      ? d.jsx
        ? d.jsx
        : typeof d.title == 'function'
          ? d.title()
          : d.title
      : J.createElement(
          J.Fragment,
          null,
          ae || d.icon || d.promise
            ? J.createElement(
                'div',
                {
                  'data-icon': '',
                  className: We(
                    $ == null ? void 0 : $.icon,
                    (l = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : l.icon
                  ),
                },
                d.promise || (d.type === 'loading' && !d.icon)
                  ? d.icon || mc()
                  : null,
                d.type !== 'loading'
                  ? d.icon || (ee == null ? void 0 : ee[ae]) || Wf(ae)
                  : null
              )
            : null,
          J.createElement(
            'div',
            {
              'data-content': '',
              className: We(
                $ == null ? void 0 : $.content,
                (i = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : i.content
              ),
            },
            J.createElement(
              'div',
              {
                'data-title': '',
                className: We(
                  $ == null ? void 0 : $.title,
                  (c = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : c.title
                ),
              },
              typeof d.title == 'function' ? d.title() : d.title
            ),
            d.description
              ? J.createElement(
                  'div',
                  {
                    'data-description': '',
                    className: We(
                      P,
                      $e,
                      $ == null ? void 0 : $.description,
                      (f = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : f.description
                    ),
                  },
                  typeof d.description == 'function'
                    ? d.description()
                    : d.description
                )
              : null
          ),
          u.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && vr(d.cancel)
              ? J.createElement(
                  'button',
                  {
                    'data-button': !0,
                    'data-cancel': !0,
                    style: d.cancelButtonStyle || L,
                    onClick: pe => {
                      var Se, Ne
                      vr(d.cancel) &&
                        xe &&
                        ((Ne = (Se = d.cancel).onClick) == null ||
                          Ne.call(Se, pe),
                        Oe())
                    },
                    className: We(
                      $ == null ? void 0 : $.cancelButton,
                      (m = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : m.cancelButton
                    ),
                  },
                  d.cancel.label
                )
              : null,
          u.isValidElement(d.action)
            ? d.action
            : d.action && vr(d.action)
              ? J.createElement(
                  'button',
                  {
                    'data-button': !0,
                    'data-action': !0,
                    style: d.actionButtonStyle || V,
                    onClick: pe => {
                      var Se, Ne
                      vr(d.action) &&
                        ((Ne = (Se = d.action).onClick) == null ||
                          Ne.call(Se, pe),
                        !pe.defaultPrevented && Oe())
                    },
                    className: We(
                      $ == null ? void 0 : $.actionButton,
                      (p = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : p.actionButton
                    ),
                  },
                  d.action.label
                )
              : null
        )
  )
}
function Mo() {
  if (typeof window > 'u' || typeof document > 'u') return 'ltr'
  let e = document.documentElement.getAttribute('dir')
  return e === 'auto' || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e
}
function gh(e, r) {
  let t = {}
  return (
    [e, r].forEach((n, o) => {
      let a = o === 1,
        l = a ? '--mobile-offset' : '--offset',
        i = a ? ch : lh
      function c(f) {
        ;['top', 'right', 'bottom', 'left'].forEach(m => {
          t[`${l}-${m}`] = typeof f == 'number' ? `${f}px` : f
        })
      }
      typeof n == 'number' || typeof n == 'string'
        ? c(n)
        : typeof n == 'object'
          ? ['top', 'right', 'bottom', 'left'].forEach(f => {
              n[f] === void 0
                ? (t[`${l}-${f}`] = i)
                : (t[`${l}-${f}`] =
                    typeof n[f] == 'number' ? `${n[f]}px` : n[f])
            })
          : c(i)
    }),
    t
  )
}
u.forwardRef(function (e, r) {
  let {
      invert: t,
      position: n = 'bottom-right',
      hotkey: o = ['altKey', 'KeyT'],
      expand: a,
      closeButton: l,
      className: i,
      offset: c,
      mobileOffset: f,
      theme: m = 'light',
      richColors: p,
      duration: v,
      style: d,
      visibleToasts: x = ih,
      toastOptions: h,
      dir: g = Mo(),
      gap: w = uh,
      loadingIcon: S,
      icons: C,
      containerAriaLabel: _ = 'Notifications',
      pauseWhenPageIsHidden: E,
    } = e,
    [D, T] = J.useState([]),
    I = J.useMemo(
      () =>
        Array.from(
          new Set([n].concat(D.filter(A => A.position).map(A => A.position)))
        ),
      [D, n]
    ),
    [R, L] = J.useState([]),
    [V, k] = J.useState(!1),
    [P, b] = J.useState(!1),
    [M, K] = J.useState(
      m !== 'system'
        ? m
        : typeof window < 'u' &&
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    ),
    U = J.useRef(null),
    re = o.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
    $ = J.useRef(null),
    ee = J.useRef(!1),
    F = J.useCallback(A => {
      T(q => {
        var G
        return (
          ((G = q.find(Z => Z.id === A.id)) != null && G.delete) ||
            Me.dismiss(A.id),
          q.filter(({ id: Z }) => Z !== A.id)
        )
      })
    }, [])
  return (
    J.useEffect(
      () =>
        Me.subscribe(A => {
          if (A.dismiss) {
            T(q => q.map(G => (G.id === A.id ? { ...G, delete: !0 } : G)))
            return
          }
          setTimeout(() => {
            ua.flushSync(() => {
              T(q => {
                let G = q.findIndex(Z => Z.id === A.id)
                return G !== -1
                  ? [...q.slice(0, G), { ...q[G], ...A }, ...q.slice(G + 1)]
                  : [A, ...q]
              })
            })
          })
        }),
      []
    ),
    J.useEffect(() => {
      if (m !== 'system') {
        K(m)
        return
      }
      if (
        (m === 'system' &&
          (window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
            ? K('dark')
            : K('light')),
        typeof window > 'u')
      )
        return
      let A = window.matchMedia('(prefers-color-scheme: dark)')
      try {
        A.addEventListener('change', ({ matches: q }) => {
          K(q ? 'dark' : 'light')
        })
      } catch {
        A.addListener(({ matches: G }) => {
          try {
            K(G ? 'dark' : 'light')
          } catch (Z) {
            console.error(Z)
          }
        })
      }
    }, [m]),
    J.useEffect(() => {
      D.length <= 1 && k(!1)
    }, [D]),
    J.useEffect(() => {
      let A = q => {
        var G, Z
        ;(o.every(fe => q[fe] || q.code === fe) &&
          (k(!0), (G = U.current) == null || G.focus()),
          q.code === 'Escape' &&
            (document.activeElement === U.current ||
              ((Z = U.current) != null &&
                Z.contains(document.activeElement))) &&
            k(!1))
      }
      return (
        document.addEventListener('keydown', A),
        () => document.removeEventListener('keydown', A)
      )
    }, [o]),
    J.useEffect(() => {
      if (U.current)
        return () => {
          $.current &&
            ($.current.focus({ preventScroll: !0 }),
            ($.current = null),
            (ee.current = !1))
        }
    }, [U.current]),
    J.createElement(
      'section',
      {
        ref: r,
        'aria-label': `${_} ${re}`,
        tabIndex: -1,
        'aria-live': 'polite',
        'aria-relevant': 'additions text',
        'aria-atomic': 'false',
        suppressHydrationWarning: !0,
      },
      I.map((A, q) => {
        var G
        let [Z, fe] = A.split('-')
        return D.length
          ? J.createElement(
              'ol',
              {
                key: A,
                dir: g === 'auto' ? Mo() : g,
                tabIndex: -1,
                ref: U,
                className: i,
                'data-sonner-toaster': !0,
                'data-theme': M,
                'data-y-position': Z,
                'data-lifted': V && D.length > 1 && !a,
                'data-x-position': fe,
                style: {
                  '--front-toast-height': `${((G = R[0]) == null ? void 0 : G.height) || 0}px`,
                  '--width': `${dh}px`,
                  '--gap': `${w}px`,
                  ...d,
                  ...gh(c, f),
                },
                onBlur: Q => {
                  ee.current &&
                    !Q.currentTarget.contains(Q.relatedTarget) &&
                    ((ee.current = !1),
                    $.current &&
                      ($.current.focus({ preventScroll: !0 }),
                      ($.current = null)))
                },
                onFocus: Q => {
                  ;(Q.target instanceof HTMLElement &&
                    Q.target.dataset.dismissible === 'false') ||
                    ee.current ||
                    ((ee.current = !0), ($.current = Q.relatedTarget))
                },
                onMouseEnter: () => k(!0),
                onMouseMove: () => k(!0),
                onMouseLeave: () => {
                  P || k(!1)
                },
                onDragEnd: () => k(!1),
                onPointerDown: Q => {
                  ;(Q.target instanceof HTMLElement &&
                    Q.target.dataset.dismissible === 'false') ||
                    b(!0)
                },
                onPointerUp: () => b(!1),
              },
              D.filter(Q => (!Q.position && q === 0) || Q.position === A).map(
                (Q, ne) => {
                  var se, ue
                  return J.createElement(mh, {
                    key: Q.id,
                    icons: C,
                    index: ne,
                    toast: Q,
                    defaultRichColors: p,
                    duration:
                      (se = h == null ? void 0 : h.duration) != null ? se : v,
                    className: h == null ? void 0 : h.className,
                    descriptionClassName:
                      h == null ? void 0 : h.descriptionClassName,
                    invert: t,
                    visibleToasts: x,
                    closeButton:
                      (ue = h == null ? void 0 : h.closeButton) != null
                        ? ue
                        : l,
                    interacting: P,
                    position: A,
                    style: h == null ? void 0 : h.style,
                    unstyled: h == null ? void 0 : h.unstyled,
                    classNames: h == null ? void 0 : h.classNames,
                    cancelButtonStyle: h == null ? void 0 : h.cancelButtonStyle,
                    actionButtonStyle: h == null ? void 0 : h.actionButtonStyle,
                    removeToast: F,
                    toasts: D.filter(ce => ce.position == Q.position),
                    heights: R.filter(ce => ce.position == Q.position),
                    setHeights: L,
                    expandByDefault: a,
                    gap: w,
                    loadingIcon: S,
                    expanded: V,
                    pauseWhenPageIsHidden: E,
                    swipeDirections: e.swipeDirections,
                  })
                }
              )
            )
          : null
      })
    )
  )
})
const Ts = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('div', {
    className: 'relative w-full overflow-auto',
    children: s.jsx('table', {
      ref: t,
      className: le('w-full caption-bottom text-sm', e),
      ...r,
    }),
  })
)
Ts.displayName = 'Table'
const Rs = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('thead', { ref: t, className: le('[&_tr]:border-b', e), ...r })
)
Rs.displayName = 'TableHeader'
const Ps = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('tbody', {
    ref: t,
    className: le('[&_tr:last-child]:border-0', e),
    ...r,
  })
)
Ps.displayName = 'TableBody'
const vh = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('tfoot', {
    ref: t,
    className: le('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', e),
    ...r,
  })
)
vh.displayName = 'TableFooter'
const qn = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('tr', {
    ref: t,
    className: le(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      e
    ),
    ...r,
  })
)
qn.displayName = 'TableRow'
const it = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('th', {
    ref: t,
    className: le(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      e
    ),
    ...r,
  })
)
it.displayName = 'TableHead'
const lt = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('td', {
    ref: t,
    className: le('p-4 align-middle [&:has([role=checkbox])]:pr-0', e),
    ...r,
  })
)
lt.displayName = 'TableCell'
const bh = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx('caption', {
    ref: t,
    className: le('mt-4 text-sm text-muted-foreground', e),
    ...r,
  })
)
bh.displayName = 'TableCaption'
const Lr = (e = {}) => {
    const [r, t] = u.useState(''),
      [n, o] = u.useState(''),
      [a, l] = u.useState(!1),
      [i, c] = u.useState(!1),
      [f, m] = u.useState(0),
      [p, v] = u.useState(!1),
      d = u.useRef(null),
      x = (() => {
        const S = /iPad|iPhone|iPod/.test(navigator.userAgent),
          C =
            /Safari/.test(navigator.userAgent) &&
            !/Chrome/.test(navigator.userAgent),
          _ = window.matchMedia('(display-mode: standalone)').matches
        return S && C && _
          ? (console.warn(
              'Voice commands may have limited functionality on iPhone Safari PWA'
            ),
            !1)
          : !!(window.SpeechRecognition || window.webkitSpeechRecognition)
      })()
    u.useEffect(() => {
      if (!x) {
        console.warn('Speech recognition not supported on this device/browser')
        return
      }
      const S = window.SpeechRecognition || window.webkitSpeechRecognition
      if (S)
        try {
          const C = new S()
          ;((C.continuous = !1),
            (C.interimResults = !0),
            (C.lang = 'en-US'),
            (C.maxAlternatives = 1),
            (C.onresult = _ => {
              let E = '',
                D = ''
              for (let T = _.resultIndex; T < _.results.length; T++) {
                const I = _.results[T][0].transcript
                _.results[T].isFinal
                  ? ((E += I),
                    t(E),
                    m(_.results[T][0].confidence || 0.8),
                    v(!0))
                  : ((D += I), o(D))
              }
            }),
            (C.onend = () => {
              ;(l(!1), c(!1))
            }),
            (C.onerror = _ => {
              ;(console.error('Speech recognition error:', _),
                console.error('Error type:', _.error),
                l(!1),
                c(!1),
                _.error === 'not-allowed'
                  ? console.warn(
                      'Microphone access denied. Please enable microphone permissions.'
                    )
                  : _.error === 'no-speech'
                    ? console.warn('No speech detected. Please try again.')
                    : _.error === 'network' &&
                      console.warn(
                        'Network error occurred during speech recognition.'
                      ))
            }),
            (C.onaudiostart = () => {}),
            (C.onspeechstart = () => {}),
            (C.onspeechend = () => {}),
            (d.current = C))
        } catch (C) {
          console.error('Failed to initialize speech recognition:', C)
        }
    }, [x])
    const h = u.useCallback(() => {
        if (!x) {
          console.warn('Speech recognition not supported on this device')
          return
        }
        if (d.current) {
          ;(t(''), o(''), m(0), v(!1), c(!0), l(!0))
          try {
            d.current.start()
          } catch (S) {
            ;(console.error('Speech recognition start error:', S),
              l(!1),
              c(!1),
              S.name === 'InvalidStateError'
                ? console.warn('Speech recognition is already running')
                : S.name === 'NotAllowedError' &&
                  console.warn('Microphone access denied'))
          }
        } else console.warn('Speech recognition not initialized')
      }, [x]),
      g = u.useCallback(() => {
        d.current && a && d.current.stop()
      }, [a]),
      w = u.useCallback(() => {
        ;(t(''), o(''), m(0), v(!1))
      }, [])
    return {
      transcript: r,
      interimTranscript: n,
      isListening: a,
      startListening: h,
      stopListening: g,
      resetTranscript: w,
      confidence: f,
      isProcessing: i,
      isFinal: p,
      browserSupportsSpeechRecognition: x,
    }
  },
  br = {
    interactionMode: 'tap',
    enableActionButton: !1,
    lastUsedDC: '6024',
    lastUsedFreightType: '23/43',
    autoExportOnShiftEnd: !1,
    voiceRecognitionEnabled: !0,
    voiceEngine: 'browser',
    noiseSuppression: !0,
    confidenceThreshold: 0.75,
    commandTimeout: 3e3,
    useGrammar: !0,
    autoStop: !0,
    speakBackCommands: !0,
    voiceVolume: 0.8,
    voiceAcceptPartialResults: !1,
    voiceActivationMode: 'button',
  },
  Ge = () => {
    const [e, r] = u.useState(br)
    ;(u.useEffect(() => {
      const c = localStorage.getItem('userSettings')
      if (c)
        try {
          r({ ...br, ...JSON.parse(c) })
        } catch {
          r(br)
        }
    }, []),
      u.useEffect(() => {
        try {
          if (
            (localStorage.setItem('userSettings', JSON.stringify(e)),
            'indexedDB' in window)
          ) {
            const c = indexedDB.open('door-ship-flow-db', 1)
            ;((c.onupgradeneeded = f => {
              const m = f.target.result
              m.objectStoreNames.contains('settings') ||
                m.createObjectStore('settings', { keyPath: 'id' })
            }),
              (c.onsuccess = f => {
                f.target.result
                  .transaction(['settings'], 'readwrite')
                  .objectStore('settings')
                  .put({ id: 'userSettings', ...e })
              }))
          }
        } catch {}
      }, [e]))
    const t = (c, f) => {
      r(m => ({ ...m, [c]: f }))
    }
    return {
      settings: e,
      updateSetting: t,
      updateLastUsedDC: c => {
        t('lastUsedDC', c)
      },
      updateLastUsedFreightType: c => {
        t('lastUsedFreightType', c)
      },
      updateVoiceEngine: c => {
        t('voiceEngine', c)
      },
      updateVoiceActivationMode: c => {
        t('voiceActivationMode', c)
      },
      resetSettings: () => {
        r(br)
      },
    }
  }
function Is({ commandPatterns: e, onCommandRecognized: r, speakBackText: t }) {
  const { settings: n } = Ge(),
    [o, a] = u.useState(null),
    [l, i] = u.useState(0),
    [c, f] = u.useState(!1),
    [m, p] = u.useState(null),
    v = u.useRef(''),
    d = u.useRef(null),
    x = u.useRef(null),
    {
      transcript: h,
      interimTranscript: g,
      isListening: w,
      startListening: S,
      stopListening: C,
      confidence: _,
      isProcessing: E,
      isFinal: D,
      resetTranscript: T,
      browserSupportsSpeechRecognition: I,
    } = Lr({ engine: n.voiceEngine ?? 'browser' })
  ;(u.useEffect(() => {
    if (!I) {
      ;(p('Speech recognition is not supported in this browser'),
        de.error('Speech recognition is not supported', {
          description: 'Please try using a supported browser like Chrome',
          duration: 5e3,
        }))
      return
    }
    return () => {
      x.current && clearTimeout(x.current)
    }
  }, [I, n.voiceActivationMode]),
    u.useEffect(() => {
      if (
        !n.voiceRecognitionEnabled ||
        !h ||
        c ||
        (!D && !n.voiceAcceptPartialResults) ||
        h === v.current
      )
        return
      const L = h.toLowerCase().trim()
      let V = !1
      for (const k of e) {
        const P = L.match(k.regex)
        if (P) {
          ;(f(!0), (v.current = h))
          const b = P.slice(1)
          try {
            if (
              (r(k.commandName, b),
              a(k.commandName),
              i(_),
              n.speakBackCommands && (t || k.feedback))
            ) {
              const M = new SpeechSynthesisUtterance(k.feedback ?? t)
              ;((M.volume = n.voiceVolume ?? 0.8),
                window.speechSynthesis.speak(M))
            }
            ;(de.success(
              `${k.commandName} via voice command! (${Math.round(_ * 100)}% confidence)`,
              {
                position: 'top-center',
                id: 'voice-command-success',
                duration: 1500,
              }
            ),
              (V = !0))
          } catch (M) {
            ;(console.error('Error executing command:', M),
              de.error('Error executing voice command', {
                description: 'Please try again',
                duration: 3e3,
              }))
          }
          break
        }
      }
      ;(d.current && window.clearTimeout(d.current),
        (d.current = window.setTimeout(
          () => {
            ;(V && a(null), f(!1), T(), (d.current = null))
          },
          V ? 2e3 : 1e3
        )))
    }, [h, D, _, n, C, w, c, T, e, r, t]),
    u.useEffect(
      () => () => {
        d.current && window.clearTimeout(d.current)
      },
      []
    ),
    u.useEffect(() => {
      w ||
        ((v.current = ''),
        f(!1),
        T(),
        d.current && (window.clearTimeout(d.current), (d.current = null)))
    }, [w, T]))
  const R = u.useCallback(
    () =>
      l > 0.8 ? 'text-green-500' : l > 0.6 ? 'text-yellow-500' : 'text-red-500',
    [l]
  )
  return {
    isListening: w,
    startListening: S,
    stopListening: C,
    transcript: h,
    interimTranscript: g,
    recentCommand: o,
    commandConfidence: l,
    isProcessing: E,
    isFinal: D,
    isProcessingCommand: c,
    getConfidenceColor: R,
    errorMessage: m,
  }
}
const Ds = ({
    isListening: e,
    onToggle: r,
    label: t = 'Voice Command',
    stopLabel: n = 'Stop Voice',
    className: o = '',
  }) => {
    const a =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    return s.jsx(ge, {
      variant: 'outline',
      size: 'sm',
      className: `gap-2 transition-all duration-300 transform border-2 font-semibold shadow-lg hover:shadow-xl active:shadow-md ${a ? 'min-h-[48px] min-w-[120px] px-4' : 'min-h-[44px] px-3'} ${e ? 'border-red-500 bg-gradient-to-r from-red-100 to-red-200 text-red-700 hover:from-red-200 hover:to-red-300 animate-pulse shadow-red-200' : 'border-blue-500 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 hover:from-blue-200 hover:to-cyan-200 hover:border-blue-600 hover:scale-105 focus:scale-95 shadow-blue-200'} ${a ? 'active:scale-95 touch-manipulation' : ''} ${o}`,
      onClick: l => {
        ;(l.preventDefault(), l.stopPropagation(), r())
      },
      onTouchEnd: a
        ? l => {
            ;(l.preventDefault(), r())
          }
        : void 0,
      'aria-label': e ? 'Stop voice recognition' : 'Start voice recognition',
      role: 'button',
      tabIndex: 0,
      children: e
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsxs('div', {
                className: 'relative',
                children: [
                  s.jsx(Hn, { className: 'h-5 w-5' }),
                  s.jsx('span', {
                    className:
                      'absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-ping',
                  }),
                ],
              }),
              s.jsx('span', { className: 'text-value font-bold', children: n }),
            ],
          })
        : s.jsxs(s.Fragment, {
            children: [
              s.jsx(Lt, { className: 'h-5 w-5' }),
              s.jsxs('span', {
                className: 'text-value font-bold',
                children: ['🎤 ', t],
              }),
            ],
          }),
    })
  },
  As = ({
    isListening: e,
    isProcessing: r,
    interimTranscript: t,
    transcript: n,
    isFinal: o,
    recentCommand: a,
    getConfidenceColor: l,
    helpText: i,
    commandList: c,
  }) => {
    const f =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
      m = /iPad|iPhone|iPod/.test(navigator.userAgent)
    return e
      ? s.jsx('div', {
          className: `absolute left-0 -bottom-16 bg-white px-4 py-3 rounded-lg shadow-xl border-2 border-blue-200 transition-all duration-200 animate-fade-in z-20 ${f ? 'min-w-[200px] max-w-[280px] text-sm font-medium' : 'min-w-[180px] max-w-[250px] text-xs'}`,
          role: 'status',
          'aria-live': 'polite',
          children:
            r && !t
              ? s.jsxs('div', {
                  className: 'flex items-center',
                  children: [
                    s.jsx(ou, {
                      className: `${f ? 'h-4 w-4' : 'h-3 w-3'} text-blue-600 mr-2 animate-pulse`,
                    }),
                    s.jsx('span', {
                      className: 'text-blue-700 font-semibold',
                      children: '🎤 Listening...',
                    }),
                    s.jsx('span', {
                      className:
                        'ml-2 inline-block animate-pulse text-blue-500',
                      children: '●●●',
                    }),
                  ],
                })
              : t
                ? s.jsxs('div', {
                    children: [
                      s.jsxs('div', {
                        className: 'flex items-center gap-2 mb-2',
                        children: [
                          s.jsx('span', {
                            className: 'font-bold text-blue-700',
                            children: 'Heard:',
                          }),
                          s.jsx('span', {
                            className: `italic font-medium ${o ? 'text-green-700 bg-green-50 px-2 py-1 rounded' : 'text-orange-600 bg-orange-50 px-2 py-1 rounded'}`,
                            children: o ? n : t,
                          }),
                          o &&
                            s.jsx(or, {
                              className: `${f ? 'h-4 w-4' : 'h-3 w-3'} text-green-600`,
                            }),
                        ],
                      }),
                      a &&
                        s.jsxs('div', {
                          className:
                            'flex items-center gap-2 mt-2 p-2 bg-blue-50 rounded',
                          children: [
                            s.jsx('span', {
                              className: 'font-bold text-blue-700',
                              children: 'Command:',
                            }),
                            s.jsx('span', {
                              className: `font-semibold ${l()}`,
                              children: a,
                            }),
                          ],
                        }),
                    ],
                  })
                : s.jsxs('div', {
                    className: 'flex flex-col space-y-1',
                    children: [
                      s.jsx('span', {
                        className: 'text-blue-700 font-bold',
                        children: i,
                      }),
                      s.jsx('span', {
                        className: `text-blue-500 font-medium ${f ? 'text-xs' : 'text-[10px]'}`,
                        children: '🎙️ Voice recognition active - Speak clearly',
                      }),
                      m &&
                        s.jsx('span', {
                          className: 'text-orange-600 font-medium text-xs',
                          children: '📱 iPhone detected - Optimized for Safari',
                        }),
                    ],
                  }),
        })
      : null
  },
  $s = ({ isListening: e, commandList: r }) =>
    e
      ? null
      : s.jsxs('div', {
          className:
            'absolute left-0 -bottom-14 bg-white px-3 py-2 rounded-md shadow-md text-xs border border-gray-200 transition-opacity opacity-0 group-hover:opacity-100 min-w-[150px] z-10 hidden md:block',
          children: [
            s.jsx('div', {
              className: 'font-medium text-gray-700',
              children: 'Valid commands:',
            }),
            s.jsx('ul', {
              className: 'text-gray-600 mt-1',
              children: r.map((t, n) =>
                s.jsxs('li', { children: ['"', t, '"'] }, n)
              ),
            }),
          ],
        }),
  xh = $r(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
      variants: {
        variant: {
          default:
            'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
          secondary:
            'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
          destructive:
            'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
          outline: 'text-foreground',
        },
      },
      defaultVariants: { variant: 'default' },
    }
  )
function Gt({ className: e, variant: r, ...t }) {
  return s.jsx('div', { className: le(xh({ variant: r }), e), ...t })
}
const Jn = Ec,
  Qn = jc,
  wh = kc,
  Ms = u.forwardRef(({ className: e, ...r }, t) =>
    s.jsx(fa, {
      ref: t,
      className: le(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        e
      ),
      ...r,
    })
  )
Ms.displayName = fa.displayName
const Fr = u.forwardRef(({ className: e, children: r, ...t }, n) =>
  s.jsxs(wh, {
    children: [
      s.jsx(Ms, {}),
      s.jsxs(ha, {
        ref: n,
        className: le(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
          e
        ),
        ...t,
        children: [
          r,
          s.jsxs(Nc, {
            className:
              'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
            children: [
              s.jsx(Mr, { className: 'h-4 w-4' }),
              s.jsx('span', { className: 'sr-only', children: 'Close' }),
            ],
          }),
        ],
      }),
    ],
  })
)
Fr.displayName = ha.displayName
const eo = ({ className: e, ...r }) =>
  s.jsx('div', {
    className: le('flex flex-col space-y-1.5 text-center sm:text-left', e),
    ...r,
  })
eo.displayName = 'DialogHeader'
const to = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(pa, {
    ref: t,
    className: le('text-lg font-semibold leading-none tracking-tight', e),
    ...r,
  })
)
to.displayName = pa.displayName
const ro = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(ma, { ref: t, className: le('text-sm text-muted-foreground', e), ...r })
)
ro.displayName = ma.displayName
const Os = ({ commandType: e }) => {
    const [r, t] = u.useState(!1),
      a =
        e === 'pallet'
          ? [
              {
                command: 'Add counter',
                description: 'Adds a new pallet counter',
              },
              { command: 'Add pallet', description: 'Same as add counter' },
              { command: 'Counter', description: 'Quick way to add counter' },
              { command: 'Pallet', description: 'Quick way to add counter' },
            ]
          : [
              {
                command: 'Door 332 to 6024 XD empty',
                description: '⚡ FASTEST: Complete door setup in one command',
              },
              {
                command: 'Door 332 to 6024',
                description: '🚀 FAST: Door with DC assignment',
              },
              { command: 'Door 332', description: '⚡ Quick door number only' },
              {
                command: '332',
                description: '🔥 ULTRA-FAST: Just the number!',
              },
              {
                command: '6024',
                description: '🔥 ULTRA-FAST: Just DC number!',
              },
              {
                command: 'XD',
                description: '🔥 ULTRA-FAST: Just freight type!',
              },
              { command: 'Add door', description: 'Basic door with defaults' },
            ],
      l = [
        'Speak clearly and at normal speed',
        'Wait for the microphone icon to turn red before speaking',
        "You'll see a green toast message when command is recognized",
        "Try different variations if one doesn't work",
        'Make sure your microphone permissions are enabled',
      ]
    return s.jsxs(Jn, {
      open: r,
      onOpenChange: t,
      children: [
        s.jsx(Qn, {
          asChild: !0,
          children: s.jsx(ge, {
            variant: 'ghost',
            size: 'sm',
            className: 'h-8 w-8 p-0 text-gray-500 hover:text-gray-700',
            children: s.jsx(Od, { className: 'h-4 w-4' }),
          }),
        }),
        s.jsxs(Fr, {
          className: 'max-w-md',
          children: [
            s.jsxs(eo, {
              children: [
                s.jsxs(to, {
                  className: 'flex items-center gap-2',
                  children: [
                    s.jsx(Lt, { className: 'h-5 w-5' }),
                    'Voice Commands Help',
                  ],
                }),
                s.jsx(ro, {
                  children:
                    e === 'pallet'
                      ? 'Voice commands for pallet counter'
                      : 'Voice commands for door scheduling',
                }),
              ],
            }),
            s.jsxs('div', {
              className: 'space-y-4',
              children: [
                s.jsxs('div', {
                  children: [
                    s.jsx('h3', {
                      className: 'font-medium mb-2',
                      children: 'Available Commands:',
                    }),
                    s.jsx('div', {
                      className: 'space-y-2',
                      children: a.map((i, c) =>
                        s.jsxs(
                          'div',
                          {
                            className:
                              'flex items-start gap-2 p-2 bg-gray-50 rounded-lg',
                            children: [
                              s.jsxs(Gt, {
                                variant: 'secondary',
                                className: 'text-xs',
                                children: [
                                  s.jsx(nu, { className: 'h-3 w-3 mr-1' }),
                                  'Say',
                                ],
                              }),
                              s.jsxs('div', {
                                className: 'flex-1',
                                children: [
                                  s.jsxs('p', {
                                    className: 'font-medium text-sm',
                                    children: ['"', i.command, '"'],
                                  }),
                                  s.jsx('p', {
                                    className: 'text-xs text-gray-600',
                                    children: i.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          c
                        )
                      ),
                    }),
                  ],
                }),
                s.jsxs('div', {
                  children: [
                    s.jsx('h3', {
                      className: 'font-medium mb-2',
                      children: 'Tips for Success:',
                    }),
                    s.jsx('ul', {
                      className: 'space-y-1 text-sm text-gray-600',
                      children: l.map((i, c) =>
                        s.jsxs(
                          'li',
                          {
                            className: 'flex items-start gap-2',
                            children: [
                              s.jsx('span', {
                                className: 'text-green-500 mt-1',
                                children: '•',
                              }),
                              i,
                            ],
                          },
                          c
                        )
                      ),
                    }),
                  ],
                }),
                s.jsx('div', {
                  className: 'bg-blue-50 p-3 rounded-lg',
                  children: s.jsxs('p', {
                    className: 'text-sm text-blue-800',
                    children: [
                      s.jsx('strong', { children: 'How to use:' }),
                      ' Click the microphone button, wait for it to turn red, then speak one of the commands above clearly.',
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  },
  Oo = e => ['empty', '25%', '50%', '75%', 'partial', 'shipload'].includes(e),
  yh = ({ onAddDoor: e, onAddDoorWithParams: r }) => {
    const { settings: t, updateSetting: n } = Ge(),
      [o, a] = u.useState(!1),
      l = [
        {
          regex:
            /(?:door|dock|bay|trailer|spot)\s+(\d{3})\s+(?:to|for|going\s+to|destination)\s+(?:dc\s+)?(\d{4})\s+(?:with|type|freight\s+type)?\s*(xd|cross\s*dock|28|twenty\s*eight|23\s*\/?\s*43|aib|air)?\s*(?:status\s+)?(empty|partial|shipload|25\s*%?|50\s*%?|75\s*%?)?/i,
          commandName: 'add complete door',
          feedback: 'Adding complete door setup',
        },
        {
          regex:
            /(?:door|dock|bay|trailer|spot)\s+(\d{3})\s+(?:to|for|going\s+to|destination)\s+(?:dc\s+)?(\d{4})/i,
          commandName: 'add door with dc',
          feedback: 'Adding door with DC',
        },
        {
          regex:
            /(?:door|dock|bay|trailer|spot)\s+(\d{3})\s+(?:with|type|freight\s+type)\s+(xd|cross\s*dock|cross\s*docking|28|twenty\s*eight|23\s*\/?\s*43|twenty\s*three\s*forty\s*three|aib|air|express|priority|standard)/i,
          commandName: 'add door with freight',
          feedback: 'Adding door with freight type',
        },
        {
          regex:
            /(?:door|dock|bay|trailer|spot)\s+(?:number\s+)?(\d{3})|(?:add|new|create|setup)\s+(?:door|dock|bay|trailer|spot)\s+(\d{3})|(\d{3})\s+(?:door|dock|bay|trailer|spot)/i,
          commandName: 'add specific door',
          feedback: 'Adding door number',
        },
        {
          regex:
            /(?:add|new|create|start|open|begin|setup|make)\s+(?:door|dock|bay|trailer|load|spot)|(?:door|dock|bay|trailer|load|spot)(?:\s+please)?$/i,
          commandName: 'add door',
          feedback: 'Adding new door',
        },
        {
          regex: /^(\d{3})$/i,
          commandName: 'add specific door',
          feedback: 'Adding door',
        },
        {
          regex: /^(?:dc\s+)?(\d{4})$/i,
          commandName: 'add dc door',
          feedback: 'Adding door for DC',
        },
        {
          regex: /^(xd|cross\s*dock|28|23\s*\/?\s*43|aib|air)$/i,
          commandName: 'add freight door',
          feedback: 'Adding door with freight type',
        },
        {
          regex:
            /(empty|partial|shipload|full|loaded|twenty\s*five\s*percent|fifty\s*percent|seventy\s*five\s*percent|25\s*%?|50\s*%?|75\s*%?|quarter|half|three\s*quarters)\s+(?:door|dock|bay|trailer|load|spot)/i,
          commandName: 'add status door',
          feedback: 'Adding door with status',
        },
        {
          regex:
            /(?:door|dock|bay|trailer|spot)\s+(\d{3})\s+(?:to|for|going\s+to|destination)\s+(?:dc\s+)?(\d{4})\s+(?:with|type|freight\s+type)\s+(xd|cross\s*dock|28|twenty\s*eight|23\s*\/?\s*43|aib|air)\s+(?:status\s+)?(empty|partial|shipload|25\s*%?|50\s*%?|75\s*%?)/i,
          commandName: 'add complete door',
          feedback: 'Adding complete door setup',
        },
        {
          regex:
            /(?:quick|fast|rush|urgent|priority|asap|immediate|now)\s+(?:door|dock|bay|trailer|spot)|(?:door|dock|bay|trailer|spot)\s+(?:quick|fast|rush|urgent|priority|asap|now)/i,
          commandName: 'quick add door',
          feedback: 'Adding priority door',
        },
        {
          regex:
            /(?:tcr|trailer\s+condition\s+report|condition\s+report|paperwork)\s+(present|available|yes|here|good|missing|not\s+available|no|none|absent)/i,
          commandName: 'tcr status',
          feedback: 'Updating TCR status',
        },
        {
          regex:
            /(?:door|dock|bay|trailer|spot)\s+(\d{3})\s+(?:has|contains|loaded\s+with|count|carrying)\s+(\d+)\s+(?:pallets?|units?|pieces?|skids?)/i,
          commandName: 'set pallet count',
          feedback: 'Setting pallet count',
        },
        {
          regex:
            /(?:update|change|modify|set|switch|move)\s+(?:door|dock|bay|trailer|spot)\s+(\d{3})\s+(?:to|for|destination)\s+(?:dc\s+)?(\d{4})/i,
          commandName: 'update door destination',
          feedback: 'Updating door destination',
        },
        {
          regex:
            /(?:remove|delete|cancel|close|clear|finish|done\s+with)\s+(?:door|dock|bay|trailer|spot)\s+(\d{3})/i,
          commandName: 'remove door',
          feedback: 'Removing door',
        },
        {
          regex:
            /(?:i\s+need|please\s+add|can\s+you\s+add|set\s+up|create|make\s+me)\s+(?:a\s+)?(?:door|dock|bay|trailer|spot|new\s+entry)/i,
          commandName: 'add door',
          feedback: 'Adding new door',
        },
        {
          regex:
            /(?:emergency|special|hot|expedite|rush\s+order)\s+(?:door|dock|bay|trailer|spot)/i,
          commandName: 'emergency door',
          feedback: 'Adding emergency door',
        },
        {
          regex:
            /(?:next|another|one\s+more)\s+(?:door|dock|bay|trailer|spot)/i,
          commandName: 'add door',
          feedback: 'Adding next door',
        },
        {
          regex: /(?:correct|yes|confirm|that's\s+right|good)/i,
          commandName: 'confirm command',
          feedback: 'Command confirmed',
        },
        {
          regex: /(?:cancel|no|stop|never\s+mind|forget\s+it|wrong)/i,
          commandName: 'cancel command',
          feedback: 'Command cancelled',
        },
      ],
      {
        isListening: i,
        startListening: c,
        stopListening: f,
        transcript: m,
        interimTranscript: p,
        recentCommand: v,
        isProcessing: d,
        isFinal: x,
        getConfidenceColor: h,
        errorMessage: g,
      } = Is({
        commandPatterns: l,
        onCommandRecognized: (D, T) => {
          var R, L, V
          const I = {}
          if (D === 'confirm command') {
            de.success('Command confirmed', { duration: 1500 })
            return
          }
          if (D === 'cancel command') {
            de.info('Command cancelled', { duration: 1500 })
            return
          }
          if (
            D === 'add door' ||
            D === 'quick add door' ||
            D === 'emergency door'
          ) {
            e()
            return
          }
          if (T && T.length > 0)
            switch (D) {
              case 'add specific door':
                const k = T[0] || T[1] || T[2]
                k && /^\d{3}$/.test(k)
                  ? (I.doorNumber = k)
                  : console.warn(`Invalid door number format: ${k}`)
                break
              case 'add complete door':
                if (
                  (T[0] && /^\d{3}$/.test(T[0]) && (I.doorNumber = T[0]),
                  T[1] && /^\d{4}$/.test(T[1]) && (I.destinationDC = T[1]),
                  T[2])
                ) {
                  const b = T[2].toLowerCase()
                  b.includes('xd') || b.includes('cross')
                    ? (I.freightType = 'XD')
                    : b.includes('28') || b.includes('twenty')
                      ? (I.freightType = '28')
                      : b.includes('23') || b.includes('43')
                        ? (I.freightType = '23/43')
                        : (b.includes('aib') || b.includes('air')) &&
                          (I.freightType = 'AIB')
                }
                if (T[3]) {
                  const b = T[3].toLowerCase()
                  b.includes('empty')
                    ? (I.trailerStatus = 'empty')
                    : b.includes('partial')
                      ? (I.trailerStatus = 'partial')
                      : b.includes('shipload') || b.includes('full')
                        ? (I.trailerStatus = 'shipload')
                        : b.includes('25')
                          ? (I.trailerStatus = '25%')
                          : b.includes('50')
                            ? (I.trailerStatus = '50%')
                            : b.includes('75') && (I.trailerStatus = '75%')
                }
                break
              case 'add door with dc':
                ;(T[0] && /^\d{3}$/.test(T[0]) && (I.doorNumber = T[0]),
                  T[1] && /^\d{4}$/.test(T[1]) && (I.destinationDC = T[1]))
                break
              case 'add door with freight':
                if (
                  (T[0] && /^\d{3}$/.test(T[0]) && (I.doorNumber = T[0]), T[1])
                ) {
                  const b = T[1].toLowerCase()
                  b.includes('xd') || b.includes('cross')
                    ? (I.freightType = 'XD')
                    : b.includes('28')
                      ? (I.freightType = '28')
                      : b.includes('23') || b.includes('43')
                        ? (I.freightType = '23/43')
                        : (b.includes('aib') || b.includes('air')) &&
                          (I.freightType = 'AIB')
                }
                break
              case 'add dc door':
                const P = T[0] || T[1]
                P && E.includes(P)
                  ? (I.destinationDC = P)
                  : console.warn(`Invalid DC value: ${P}`)
                break
              case 'add status door': {
                const b =
                    (R = T[0]) == null
                      ? void 0
                      : R.toLowerCase().replace(/\s+/g, ' ').trim(),
                  K = {
                    empty: 'empty',
                    partial: 'partial',
                    shipload: 'shipload',
                    full: 'shipload',
                    loaded: 'shipload',
                    'twenty five percent': '25%',
                    twentyfivepercent: '25%',
                    '25%': '25%',
                    '25 %': '25%',
                    '25 percent': '25%',
                    quarter: '25%',
                    'fifty percent': '50%',
                    fiftypercent: '50%',
                    '50%': '50%',
                    '50 %': '50%',
                    '50 percent': '50%',
                    half: '50%',
                    'seventy five percent': '75%',
                    seventyfivepercent: '75%',
                    '75%': '75%',
                    '75 %': '75%',
                    '75 percent': '75%',
                    'three quarters': '75%',
                  }[b]
                K
                  ? (I.trailerStatus = K)
                  : console.warn(`Invalid status value: ${b}`)
                break
              }
              case 'add freight door': {
                const b =
                    (L = T[0]) == null
                      ? void 0
                      : L.toLowerCase().replace(/\s+/g, ' ').trim(),
                  K = {
                    'cross dock': 'XD',
                    crossdock: 'XD',
                    'cross docking': 'XD',
                    crossdocking: 'XD',
                    xd: 'XD',
                    'twenty eight': '28',
                    twentyeight: '28',
                    28: '28',
                    'twenty three forty three': '23/43',
                    'twenty three / forty three': '23/43',
                    twentythreefortythree: '23/43',
                    '23/43': '23/43',
                    '23 43': '23/43',
                    air: 'AIB',
                    aib: 'AIB',
                    express: 'AIB',
                    priority: 'AIB',
                    standard: '23/43',
                  }[b]
                K
                  ? (I.freightType = K)
                  : console.warn(`Invalid freight type: ${b}`)
                break
              }
              case 'tcr status': {
                const b = (V = T[0]) == null ? void 0 : V.toLowerCase()
                b && ['present', 'available', 'yes'].includes(b)
                  ? (I.tcrPresent = !0)
                  : b &&
                    ['not available', 'missing', 'no'].includes(b) &&
                    (I.tcrPresent = !1)
                break
              }
              case 'set pallet count': {
                const b = T[0],
                  M = parseInt(T[1])
                b && !isNaN(M) && ((I.doorNumber = b), (I.palletCount = M))
                break
              }
              case 'update door destination': {
                const b = T[0],
                  M = T[1]
                b &&
                  M &&
                  E.includes(M) &&
                  ((I.doorNumber = b), (I.destinationDC = M), (I.isUpdate = !0))
                break
              }
              case 'remove door': {
                const b = T[0]
                b && ((I.doorNumber = b), (I.isRemove = !0))
                break
              }
              case 'set trailer status':
                T[0] &&
                  Oo(T[0].toLowerCase()) &&
                  (I.trailerStatus = T[0].toLowerCase())
                break
              default:
                ;(console.warn(`Unhandled command with params: ${D}`), e())
                return
            }
          Object.keys(I).length > 0
            ? r(I)
            : (console.warn(
                `Command ${D} recognized but no parameters parsed. Falling back.`
              ),
              e())
        },
        speakBackText: t.voiceFeedback ? 'Okay' : void 0,
      }),
      w = () => {
        const D = !o
        ;(a(D),
          D
            ? (c(),
              de.success('Hands-free voice mode activated', {
                description:
                  "Voice recognition will stay active. Say 'Add Door' to begin.",
                duration: 3e3,
              }))
            : i && (f(), de.info('Hands-free mode disabled')),
          n('voiceActivationMode', D ? 'continuous' : 'button'))
      }
    u.useEffect(() => {
      t.voiceActivationMode === 'hotword' && !i && c()
    }, [t.voiceActivationMode])
    const S = () =>
        g
          ? 'text-red-500'
          : d
            ? 'text-yellow-500'
            : i
              ? 'text-green-500'
              : 'text-neutral-600',
      C = () =>
        g ||
        (t.voiceActivationMode === 'hotword'
          ? 'Say "Add Door" to begin'
          : o
            ? 'Hands-free mode active'
            : 'Say "Add Door" or "New Door"')
    if (!t.voiceRecognitionEnabled) return null
    const _ = [
        'Add door / New door / Create door / Setup door',
        'Door / Dock / Bay / Trailer / Spot',
        'Quick door / Rush door / Priority door / Emergency door',
        'Next door / Another door / One more door',
        'Door number 332 / Door 332 / 332 door',
        'Add trailer 335 / Setup spot 340',
        'Three thirty two / 3 32',
        'Door to DC 6024 / Door for DC 6070',
        'Trailer going to 6039 / Ship to DC 6040',
        'Distribution center 7045',
        'Door for XD / Cross dock / Cross docking',
        'Door with 28 / Twenty eight freight',
        'Door type 23/43 / Twenty three forty three',
        'AIB door / Air freight / Express / Priority',
        'Standard freight',
        'Empty door / Empty trailer / Empty load',
        'Partial door / Partial trailer / Partial load',
        'Shipload door / Full trailer / Loaded trailer',
        '25% door / Quarter load / Twenty five percent',
        '50% door / Half load / Fifty percent',
        '75% door / Three quarters / Seventy five percent',
        'Door 332 to DC 6024 with XD empty',
        'Trailer 335 for 6070 cross dock partial',
        'Update door 332 to DC 6070',
        'Change trailer 335 destination 6039',
        'Remove door 332 / Cancel door 335',
        'Close trailer 340 / Finish door 345',
        'Door 332 has 25 pallets / Trailer loaded with 30 units',
        'TCR present / TCR available / Paperwork here',
        'TCR missing / TCR not available / No paperwork',
        'I need a door / Please add a trailer',
        'Can you add a spot / Set up a new door',
        'Make me a door / Create new entry',
        "Correct / Yes / Confirm / That's right",
        'Cancel / No / Stop / Never mind / Wrong',
      ],
      E = ['6024', '6070', '6039', '6040', '7045']
    return (
      [
        { value: 'empty', label: 'Empty' },
        { value: '25%', label: '25%' },
        { value: '50%', label: '50%' },
        { value: '75%', label: '75%' },
        { value: 'partial', label: 'Partial' },
        { value: 'shipload', label: 'Shipload' },
      ].filter(D => Oo(D.value)),
      s.jsxs('div', {
        className: 'relative',
        children: [
          s.jsxs('div', {
            className: 'flex items-center gap-2',
            children: [
              s.jsx(Ds, {
                isListening: i,
                onToggle: () => {
                  i ? f() : c()
                },
                label:
                  t.voiceActivationMode === 'hotword'
                    ? 'Say "Add Door"'
                    : 'Voice Command',
                stopLabel: 'Stop Voice',
                className: `ml-2 ${S()}`,
              }),
              s.jsxs('div', {
                className: 'flex items-center gap-1 ml-1',
                children: [
                  s.jsx(Os, { commandType: 'door' }),
                  s.jsx(ge, {
                    variant: 'ghost',
                    size: 'icon',
                    className: `h-9 w-9 rounded-full ${o ? 'bg-red-50 text-red-500' : 'text-neutral-600'}`,
                    onClick: () => {
                      w()
                    },
                    title: o
                      ? 'Disable hands-free mode'
                      : 'Enable hands-free mode',
                    children: s.jsx(Lt, { className: 'h-4 w-4' }),
                  }),
                ],
              }),
            ],
          }),
          s.jsx(As, {
            isListening: i,
            isProcessing: d,
            interimTranscript: p,
            transcript: m,
            isFinal: x,
            recentCommand: v,
            getConfidenceColor: h,
            helpText: C(),
          }),
          s.jsx($s, { isListening: i, commandList: _ }),
        ],
      })
    )
  },
  Ls = u.forwardRef(({ className: e, ...r }, t) =>
    s.jsx('textarea', {
      className: le(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        e
      ),
      ref: t,
      ...r,
    })
  )
Ls.displayName = 'Textarea'
const Sh = _a,
  Ch = Jc
function we() {
  return (
    (we = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r]
            for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
          }
          return e
        }),
    we.apply(null, arguments)
  )
}
function Lo(e, [r, t]) {
  return Math.min(t, Math.max(r, e))
}
function Re(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), t === !1 || !o.defaultPrevented))
      return r == null ? void 0 : r(o)
  }
}
function no(e, r = []) {
  let t = []
  function n(a, l) {
    const i = u.createContext(l),
      c = t.length
    t = [...t, l]
    function f(p) {
      const { scope: v, children: d, ...x } = p,
        h = (v == null ? void 0 : v[e][c]) || i,
        g = u.useMemo(() => x, Object.values(x))
      return u.createElement(h.Provider, { value: g }, d)
    }
    function m(p, v) {
      const d = (v == null ? void 0 : v[e][c]) || i,
        x = u.useContext(d)
      if (x) return x
      if (l !== void 0) return l
      throw new Error(`\`${p}\` must be used within \`${a}\``)
    }
    return ((f.displayName = a + 'Provider'), [f, m])
  }
  const o = () => {
    const a = t.map(l => u.createContext(l))
    return function (i) {
      const c = (i == null ? void 0 : i[e]) || a
      return u.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: c } }), [i, c])
    }
  }
  return ((o.scopeName = e), [n, _h(o, ...r)])
}
function _h(...e) {
  const r = e[0]
  if (e.length === 1) return r
  const t = () => {
    const n = e.map(o => ({ useScope: o(), scopeName: o.scopeName }))
    return function (a) {
      const l = n.reduce((i, { useScope: c, scopeName: f }) => {
        const p = c(a)[`__scope${f}`]
        return { ...i, ...p }
      }, {})
      return u.useMemo(() => ({ [`__scope${r.scopeName}`]: l }), [l])
    }
  }
  return ((t.scopeName = r.scopeName), t)
}
function kh(e, r) {
  typeof e == 'function' ? e(r) : e != null && (e.current = r)
}
function Fs(...e) {
  return r => e.forEach(t => kh(t, r))
}
function De(...e) {
  return u.useCallback(Fs(...e), e)
}
const er = u.forwardRef((e, r) => {
  const { children: t, ...n } = e,
    o = u.Children.toArray(t),
    a = o.find(Eh)
  if (a) {
    const l = a.props.children,
      i = o.map(c =>
        c === a
          ? u.Children.count(l) > 1
            ? u.Children.only(null)
            : u.isValidElement(l)
              ? l.props.children
              : null
          : c
      )
    return u.createElement(
      kn,
      we({}, n, { ref: r }),
      u.isValidElement(l) ? u.cloneElement(l, void 0, i) : null
    )
  }
  return u.createElement(kn, we({}, n, { ref: r }), t)
})
er.displayName = 'Slot'
const kn = u.forwardRef((e, r) => {
  const { children: t, ...n } = e
  return u.isValidElement(t)
    ? u.cloneElement(t, { ...jh(n, t.props), ref: r ? Fs(r, t.ref) : t.ref })
    : u.Children.count(t) > 1
      ? u.Children.only(null)
      : null
})
kn.displayName = 'SlotClone'
const Nh = ({ children: e }) => u.createElement(u.Fragment, null, e)
function Eh(e) {
  return u.isValidElement(e) && e.type === Nh
}
function jh(e, r) {
  const t = { ...r }
  for (const n in r) {
    const o = e[n],
      a = r[n]
    ;/^on[A-Z]/.test(n)
      ? o && a
        ? (t[n] = (...i) => {
            ;(a(...i), o(...i))
          })
        : o && (t[n] = o)
      : n === 'style'
        ? (t[n] = { ...o, ...a })
        : n === 'className' && (t[n] = [o, a].filter(Boolean).join(' '))
  }
  return { ...e, ...t }
}
function Th(e) {
  const r = e + 'CollectionProvider',
    [t, n] = no(r),
    [o, a] = t(r, { collectionRef: { current: null }, itemMap: new Map() }),
    l = d => {
      const { scope: x, children: h } = d,
        g = J.useRef(null),
        w = J.useRef(new Map()).current
      return J.createElement(o, { scope: x, itemMap: w, collectionRef: g }, h)
    },
    i = e + 'CollectionSlot',
    c = J.forwardRef((d, x) => {
      const { scope: h, children: g } = d,
        w = a(i, h),
        S = De(x, w.collectionRef)
      return J.createElement(er, { ref: S }, g)
    }),
    f = e + 'CollectionItemSlot',
    m = 'data-radix-collection-item',
    p = J.forwardRef((d, x) => {
      const { scope: h, children: g, ...w } = d,
        S = J.useRef(null),
        C = De(x, S),
        _ = a(f, h)
      return (
        J.useEffect(
          () => (
            _.itemMap.set(S, { ref: S, ...w }),
            () => void _.itemMap.delete(S)
          )
        ),
        J.createElement(er, { [m]: '', ref: C }, g)
      )
    })
  function v(d) {
    const x = a(e + 'CollectionConsumer', d)
    return J.useCallback(() => {
      const g = x.collectionRef.current
      if (!g) return []
      const w = Array.from(g.querySelectorAll(`[${m}]`))
      return Array.from(x.itemMap.values()).sort(
        (_, E) => w.indexOf(_.ref.current) - w.indexOf(E.ref.current)
      )
    }, [x.collectionRef, x.itemMap])
  }
  return [{ Provider: l, Slot: c, ItemSlot: p }, v, n]
}
const Rh = u.createContext(void 0)
function Ph(e) {
  const r = u.useContext(Rh)
  return e || r || 'ltr'
}
const Ih = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  Pe = Ih.reduce((e, r) => {
    const t = u.forwardRef((n, o) => {
      const { asChild: a, ...l } = n,
        i = a ? er : r
      return (
        u.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0
        }, []),
        u.createElement(i, we({}, l, { ref: o }))
      )
    })
    return ((t.displayName = `Primitive.${r}`), { ...e, [r]: t })
  }, {})
function Dh(e, r) {
  e && Rr.flushSync(() => e.dispatchEvent(r))
}
function et(e) {
  const r = u.useRef(e)
  return (
    u.useEffect(() => {
      r.current = e
    }),
    u.useMemo(
      () =>
        (...t) => {
          var n
          return (n = r.current) === null || n === void 0
            ? void 0
            : n.call(r, ...t)
        },
      []
    )
  )
}
function Ah(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = et(e)
  u.useEffect(() => {
    const n = o => {
      o.key === 'Escape' && t(o)
    }
    return (
      r.addEventListener('keydown', n),
      () => r.removeEventListener('keydown', n)
    )
  }, [t, r])
}
const Nn = 'dismissableLayer.update',
  $h = 'dismissableLayer.pointerDownOutside',
  Mh = 'dismissableLayer.focusOutside'
let Fo
const Oh = u.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Lh = u.forwardRef((e, r) => {
    var t
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: a,
        onFocusOutside: l,
        onInteractOutside: i,
        onDismiss: c,
        ...f
      } = e,
      m = u.useContext(Oh),
      [p, v] = u.useState(null),
      d =
        (t = p == null ? void 0 : p.ownerDocument) !== null && t !== void 0
          ? t
          : globalThis == null
            ? void 0
            : globalThis.document,
      [, x] = u.useState({}),
      h = De(r, I => v(I)),
      g = Array.from(m.layers),
      [w] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      S = g.indexOf(w),
      C = p ? g.indexOf(p) : -1,
      _ = m.layersWithOutsidePointerEventsDisabled.size > 0,
      E = C >= S,
      D = Fh(I => {
        const R = I.target,
          L = [...m.branches].some(V => V.contains(R))
        !E ||
          L ||
          (a == null || a(I),
          i == null || i(I),
          I.defaultPrevented || c == null || c())
      }, d),
      T = zh(I => {
        const R = I.target
        ;[...m.branches].some(V => V.contains(R)) ||
          (l == null || l(I),
          i == null || i(I),
          I.defaultPrevented || c == null || c())
      }, d)
    return (
      Ah(I => {
        C === m.layers.size - 1 &&
          (o == null || o(I),
          !I.defaultPrevented && c && (I.preventDefault(), c()))
      }, d),
      u.useEffect(() => {
        if (p)
          return (
            n &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Fo = d.body.style.pointerEvents),
                (d.body.style.pointerEvents = 'none')),
              m.layersWithOutsidePointerEventsDisabled.add(p)),
            m.layers.add(p),
            zo(),
            () => {
              n &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (d.body.style.pointerEvents = Fo)
            }
          )
      }, [p, d, n, m]),
      u.useEffect(
        () => () => {
          p &&
            (m.layers.delete(p),
            m.layersWithOutsidePointerEventsDisabled.delete(p),
            zo())
        },
        [p, m]
      ),
      u.useEffect(() => {
        const I = () => x({})
        return (
          document.addEventListener(Nn, I),
          () => document.removeEventListener(Nn, I)
        )
      }, []),
      u.createElement(
        Pe.div,
        we({}, f, {
          ref: h,
          style: {
            pointerEvents: _ ? (E ? 'auto' : 'none') : void 0,
            ...e.style,
          },
          onFocusCapture: Re(e.onFocusCapture, T.onFocusCapture),
          onBlurCapture: Re(e.onBlurCapture, T.onBlurCapture),
          onPointerDownCapture: Re(
            e.onPointerDownCapture,
            D.onPointerDownCapture
          ),
        })
      )
    )
  })
function Fh(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = et(e),
    n = u.useRef(!1),
    o = u.useRef(() => {})
  return (
    u.useEffect(() => {
      const a = i => {
          if (i.target && !n.current) {
            let f = function () {
              zs($h, t, c, { discrete: !0 })
            }
            const c = { originalEvent: i }
            i.pointerType === 'touch'
              ? (r.removeEventListener('click', o.current),
                (o.current = f),
                r.addEventListener('click', o.current, { once: !0 }))
              : f()
          }
          n.current = !1
        },
        l = window.setTimeout(() => {
          r.addEventListener('pointerdown', a)
        }, 0)
      return () => {
        ;(window.clearTimeout(l),
          r.removeEventListener('pointerdown', a),
          r.removeEventListener('click', o.current))
      }
    }, [r, t]),
    { onPointerDownCapture: () => (n.current = !0) }
  )
}
function zh(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = et(e),
    n = u.useRef(!1)
  return (
    u.useEffect(() => {
      const o = a => {
        a.target &&
          !n.current &&
          zs(Mh, t, { originalEvent: a }, { discrete: !1 })
      }
      return (
        r.addEventListener('focusin', o),
        () => r.removeEventListener('focusin', o)
      )
    }, [r, t]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  )
}
function zo() {
  const e = new CustomEvent(Nn)
  document.dispatchEvent(e)
}
function zs(e, r, t, { discrete: n }) {
  const o = t.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t })
  ;(r && o.addEventListener(e, r, { once: !0 }),
    n ? Dh(o, a) : o.dispatchEvent(a))
}
let ln = 0
function Bh() {
  u.useEffect(() => {
    var e, r
    const t = document.querySelectorAll('[data-radix-focus-guard]')
    return (
      document.body.insertAdjacentElement(
        'afterbegin',
        (e = t[0]) !== null && e !== void 0 ? e : Bo()
      ),
      document.body.insertAdjacentElement(
        'beforeend',
        (r = t[1]) !== null && r !== void 0 ? r : Bo()
      ),
      ln++,
      () => {
        ;(ln === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach(n => n.remove()),
          ln--)
      }
    )
  }, [])
}
function Bo() {
  const e = document.createElement('span')
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.cssText =
      'outline: none; opacity: 0; position: fixed; pointer-events: none'),
    e
  )
}
const cn = 'focusScope.autoFocusOnMount',
  dn = 'focusScope.autoFocusOnUnmount',
  Uo = { bubbles: !1, cancelable: !0 },
  Uh = u.forwardRef((e, r) => {
    const {
        loop: t = !1,
        trapped: n = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        ...l
      } = e,
      [i, c] = u.useState(null),
      f = et(o),
      m = et(a),
      p = u.useRef(null),
      v = De(r, h => c(h)),
      d = u.useRef({
        paused: !1,
        pause() {
          this.paused = !0
        },
        resume() {
          this.paused = !1
        },
      }).current
    ;(u.useEffect(() => {
      if (n) {
        let h = function (C) {
            if (d.paused || !i) return
            const _ = C.target
            i.contains(_) ? (p.current = _) : ct(p.current, { select: !0 })
          },
          g = function (C) {
            if (d.paused || !i) return
            const _ = C.relatedTarget
            _ !== null && (i.contains(_) || ct(p.current, { select: !0 }))
          },
          w = function (C) {
            const _ = document.activeElement
            for (const E of C)
              E.removedNodes.length > 0 &&
                ((i != null && i.contains(_)) || ct(i))
          }
        ;(document.addEventListener('focusin', h),
          document.addEventListener('focusout', g))
        const S = new MutationObserver(w)
        return (
          i && S.observe(i, { childList: !0, subtree: !0 }),
          () => {
            ;(document.removeEventListener('focusin', h),
              document.removeEventListener('focusout', g),
              S.disconnect())
          }
        )
      }
    }, [n, i, d.paused]),
      u.useEffect(() => {
        if (i) {
          Ho.add(d)
          const h = document.activeElement
          if (!i.contains(h)) {
            const w = new CustomEvent(cn, Uo)
            ;(i.addEventListener(cn, f),
              i.dispatchEvent(w),
              w.defaultPrevented ||
                (Vh(Zh(Bs(i)), { select: !0 }),
                document.activeElement === h && ct(i)))
          }
          return () => {
            ;(i.removeEventListener(cn, f),
              setTimeout(() => {
                const w = new CustomEvent(dn, Uo)
                ;(i.addEventListener(dn, m),
                  i.dispatchEvent(w),
                  w.defaultPrevented || ct(h ?? document.body, { select: !0 }),
                  i.removeEventListener(dn, m),
                  Ho.remove(d))
              }, 0))
          }
        }
      }, [i, f, m, d]))
    const x = u.useCallback(
      h => {
        if ((!t && !n) || d.paused) return
        const g = h.key === 'Tab' && !h.altKey && !h.ctrlKey && !h.metaKey,
          w = document.activeElement
        if (g && w) {
          const S = h.currentTarget,
            [C, _] = Hh(S)
          C && _
            ? !h.shiftKey && w === _
              ? (h.preventDefault(), t && ct(C, { select: !0 }))
              : h.shiftKey &&
                w === C &&
                (h.preventDefault(), t && ct(_, { select: !0 }))
            : w === S && h.preventDefault()
        }
      },
      [t, n, d.paused]
    )
    return u.createElement(
      Pe.div,
      we({ tabIndex: -1 }, l, { ref: v, onKeyDown: x })
    )
  })
function Vh(e, { select: r = !1 } = {}) {
  const t = document.activeElement
  for (const n of e)
    if ((ct(n, { select: r }), document.activeElement !== t)) return
}
function Hh(e) {
  const r = Bs(e),
    t = Vo(r, e),
    n = Vo(r.reverse(), e)
  return [t, n]
}
function Bs(e) {
  const r = [],
    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: n => {
        const o = n.tagName === 'INPUT' && n.type === 'hidden'
        return n.disabled || n.hidden || o
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
      },
    })
  for (; t.nextNode(); ) r.push(t.currentNode)
  return r
}
function Vo(e, r) {
  for (const t of e) if (!Wh(t, { upTo: r })) return t
}
function Wh(e, { upTo: r }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0
  for (; e; ) {
    if (r !== void 0 && e === r) return !1
    if (getComputedStyle(e).display === 'none') return !0
    e = e.parentElement
  }
  return !1
}
function Kh(e) {
  return e instanceof HTMLInputElement && 'select' in e
}
function ct(e, { select: r = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement
    ;(e.focus({ preventScroll: !0 }), e !== t && Kh(e) && r && e.select())
  }
}
const Ho = Gh()
function Gh() {
  let e = []
  return {
    add(r) {
      const t = e[0]
      ;(r !== t && (t == null || t.pause()), (e = Wo(e, r)), e.unshift(r))
    },
    remove(r) {
      var t
      ;((e = Wo(e, r)), (t = e[0]) === null || t === void 0 || t.resume())
    },
  }
}
function Wo(e, r) {
  const t = [...e],
    n = t.indexOf(r)
  return (n !== -1 && t.splice(n, 1), t)
}
function Zh(e) {
  return e.filter(r => r.tagName !== 'A')
}
const ze =
    globalThis != null && globalThis.document ? u.useLayoutEffect : () => {},
  Yh = da.useId || (() => {})
let Xh = 0
function Us(e) {
  const [r, t] = u.useState(Yh())
  return (
    ze(() => {
      t(n => n ?? String(Xh++))
    }, [e]),
    r ? `radix-${r}` : ''
  )
}
function qh(e) {
  const [r, t] = u.useState(void 0)
  return (
    ze(() => {
      if (e) {
        t({ width: e.offsetWidth, height: e.offsetHeight })
        const n = new ResizeObserver(o => {
          if (!Array.isArray(o) || !o.length) return
          const a = o[0]
          let l, i
          if ('borderBoxSize' in a) {
            const c = a.borderBoxSize,
              f = Array.isArray(c) ? c[0] : c
            ;((l = f.inlineSize), (i = f.blockSize))
          } else ((l = e.offsetWidth), (i = e.offsetHeight))
          t({ width: l, height: i })
        })
        return (n.observe(e, { box: 'border-box' }), () => n.unobserve(e))
      } else t(void 0)
    }, [e]),
    r
  )
}
const Vs = 'Popper',
  [Hs, Ws] = no(Vs),
  [Jh, Ks] = Hs(Vs),
  Qh = e => {
    const { __scopePopper: r, children: t } = e,
      [n, o] = u.useState(null)
    return u.createElement(Jh, { scope: r, anchor: n, onAnchorChange: o }, t)
  },
  ep = 'PopperAnchor',
  tp = u.forwardRef((e, r) => {
    const { __scopePopper: t, virtualRef: n, ...o } = e,
      a = Ks(ep, t),
      l = u.useRef(null),
      i = De(r, l)
    return (
      u.useEffect(() => {
        a.onAnchorChange((n == null ? void 0 : n.current) || l.current)
      }),
      n ? null : u.createElement(Pe.div, we({}, o, { ref: i }))
    )
  }),
  Gs = 'PopperContent',
  [rp, Bv] = Hs(Gs),
  np = u.forwardRef((e, r) => {
    var t, n, o, a, l, i, c, f
    const {
        __scopePopper: m,
        side: p = 'bottom',
        sideOffset: v = 0,
        align: d = 'center',
        alignOffset: x = 0,
        arrowPadding: h = 0,
        collisionBoundary: g = [],
        collisionPadding: w = 0,
        sticky: S = 'partial',
        hideWhenDetached: C = !1,
        avoidCollisions: _ = !0,
        onPlaced: E,
        ...D
      } = e,
      T = Ks(Gs, m),
      [I, R] = u.useState(null),
      L = De(r, y => R(y)),
      [V, k] = u.useState(null),
      P = qh(V),
      b = (t = P == null ? void 0 : P.width) !== null && t !== void 0 ? t : 0,
      M = (n = P == null ? void 0 : P.height) !== null && n !== void 0 ? n : 0,
      K = p + (d !== 'center' ? '-' + d : ''),
      U =
        typeof w == 'number'
          ? w
          : { top: 0, right: 0, bottom: 0, left: 0, ...w },
      re = Array.isArray(g) ? g : [g],
      $ = re.length > 0,
      ee = { padding: U, boundary: re.filter(op), altBoundary: $ },
      {
        refs: F,
        floatingStyles: A,
        placement: q,
        isPositioned: G,
        middlewareData: Z,
      } = Tc({
        strategy: 'fixed',
        placement: K,
        whileElementsMounted: Mc,
        elements: { reference: T.anchor },
        middleware: [
          Rc({ mainAxis: v + M, alignmentAxis: x }),
          _ &&
            Pc({
              mainAxis: !0,
              crossAxis: !1,
              limiter: S === 'partial' ? Oc() : void 0,
              ...ee,
            }),
          _ && Ic({ ...ee }),
          Dc({
            ...ee,
            apply: ({
              elements: y,
              rects: H,
              availableWidth: B,
              availableHeight: j,
            }) => {
              const { width: N, height: O } = H.reference,
                W = y.floating.style
              ;(W.setProperty('--radix-popper-available-width', `${B}px`),
                W.setProperty('--radix-popper-available-height', `${j}px`),
                W.setProperty('--radix-popper-anchor-width', `${N}px`),
                W.setProperty('--radix-popper-anchor-height', `${O}px`))
            },
          }),
          V && Ac({ element: V, padding: h }),
          ap({ arrowWidth: b, arrowHeight: M }),
          C && $c({ strategy: 'referenceHidden' }),
        ],
      }),
      [fe, Q] = Zs(q),
      ne = et(E)
    ze(() => {
      G && (ne == null || ne())
    }, [G, ne])
    const se = (o = Z.arrow) === null || o === void 0 ? void 0 : o.x,
      ue = (a = Z.arrow) === null || a === void 0 ? void 0 : a.y,
      ce =
        ((l = Z.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !==
        0,
      [he, ye] = u.useState()
    return (
      ze(() => {
        I && ye(window.getComputedStyle(I).zIndex)
      }, [I]),
      u.createElement(
        'div',
        {
          ref: F.setFloating,
          'data-radix-popper-content-wrapper': '',
          style: {
            ...A,
            transform: G ? A.transform : 'translate(0, -200%)',
            minWidth: 'max-content',
            zIndex: he,
            '--radix-popper-transform-origin': [
              (i = Z.transformOrigin) === null || i === void 0 ? void 0 : i.x,
              (c = Z.transformOrigin) === null || c === void 0 ? void 0 : c.y,
            ].join(' '),
          },
          dir: e.dir,
        },
        u.createElement(
          rp,
          {
            scope: m,
            placedSide: fe,
            onArrowChange: k,
            arrowX: se,
            arrowY: ue,
            shouldHideArrow: ce,
          },
          u.createElement(
            Pe.div,
            we({ 'data-side': fe, 'data-align': Q }, D, {
              ref: L,
              style: {
                ...D.style,
                animation: G ? void 0 : 'none',
                opacity:
                  (f = Z.hide) !== null && f !== void 0 && f.referenceHidden
                    ? 0
                    : void 0,
              },
            })
          )
        )
      )
    )
  })
function op(e) {
  return e !== null
}
const ap = e => ({
  name: 'transformOrigin',
  options: e,
  fn(r) {
    var t, n, o, a, l
    const { placement: i, rects: c, middlewareData: f } = r,
      p =
        ((t = f.arrow) === null || t === void 0 ? void 0 : t.centerOffset) !==
        0,
      v = p ? 0 : e.arrowWidth,
      d = p ? 0 : e.arrowHeight,
      [x, h] = Zs(i),
      g = { start: '0%', center: '50%', end: '100%' }[h],
      w =
        ((n = (o = f.arrow) === null || o === void 0 ? void 0 : o.x) !== null &&
        n !== void 0
          ? n
          : 0) +
        v / 2,
      S =
        ((a = (l = f.arrow) === null || l === void 0 ? void 0 : l.y) !== null &&
        a !== void 0
          ? a
          : 0) +
        d / 2
    let C = '',
      _ = ''
    return (
      x === 'bottom'
        ? ((C = p ? g : `${w}px`), (_ = `${-d}px`))
        : x === 'top'
          ? ((C = p ? g : `${w}px`), (_ = `${c.floating.height + d}px`))
          : x === 'right'
            ? ((C = `${-d}px`), (_ = p ? g : `${S}px`))
            : x === 'left' &&
              ((C = `${c.floating.width + d}px`), (_ = p ? g : `${S}px`)),
      { data: { x: C, y: _ } }
    )
  },
})
function Zs(e) {
  const [r, t = 'center'] = e.split('-')
  return [r, t]
}
const sp = Qh,
  ip = tp,
  lp = np,
  cp = u.forwardRef((e, r) => {
    var t
    const {
      container: n = globalThis == null ||
      (t = globalThis.document) === null ||
      t === void 0
        ? void 0
        : t.body,
      ...o
    } = e
    return n
      ? ua.createPortal(u.createElement(Pe.div, we({}, o, { ref: r })), n)
      : null
  })
function Ko({ prop: e, defaultProp: r, onChange: t = () => {} }) {
  const [n, o] = dp({ defaultProp: r, onChange: t }),
    a = e !== void 0,
    l = a ? e : n,
    i = et(t),
    c = u.useCallback(
      f => {
        if (a) {
          const p = typeof f == 'function' ? f(e) : f
          p !== e && i(p)
        } else o(f)
      },
      [a, e, o, i]
    )
  return [l, c]
}
function dp({ defaultProp: e, onChange: r }) {
  const t = u.useState(e),
    [n] = t,
    o = u.useRef(n),
    a = et(r)
  return (
    u.useEffect(() => {
      o.current !== n && (a(n), (o.current = n))
    }, [n, o, a]),
    t
  )
}
function up(e) {
  const r = u.useRef({ value: e, previous: e })
  return u.useMemo(
    () => (
      r.current.value !== e &&
        ((r.current.previous = r.current.value), (r.current.value = e)),
      r.current.previous
    ),
    [e]
  )
}
const fp = u.forwardRef((e, r) =>
  u.createElement(
    Pe.span,
    we({}, e, {
      ref: r,
      style: {
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        ...e.style,
      },
    })
  )
)
var Ys = Lc(),
  un = function () {},
  zr = u.forwardRef(function (e, r) {
    var t = u.useRef(null),
      n = u.useState({
        onScrollCapture: un,
        onWheelCapture: un,
        onTouchMoveCapture: un,
      }),
      o = n[0],
      a = n[1],
      l = e.forwardProps,
      i = e.children,
      c = e.className,
      f = e.removeScrollBar,
      m = e.enabled,
      p = e.shards,
      v = e.sideCar,
      d = e.noIsolation,
      x = e.inert,
      h = e.allowPinchZoom,
      g = e.as,
      w = g === void 0 ? 'div' : g,
      S = Fc(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
      ]),
      C = v,
      _ = zc([t, r]),
      E = Rt(Rt({}, S), o)
    return u.createElement(
      u.Fragment,
      null,
      m &&
        u.createElement(C, {
          sideCar: Ys,
          removeScrollBar: f,
          shards: p,
          noIsolation: d,
          inert: x,
          setCallbacks: a,
          allowPinchZoom: !!h,
          lockRef: t,
        }),
      l
        ? u.cloneElement(u.Children.only(i), Rt(Rt({}, E), { ref: _ }))
        : u.createElement(w, Rt({}, E, { className: c, ref: _ }), i)
    )
  })
zr.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }
zr.classNames = { fullWidth: Uc, zeroRight: Bc }
var En = !1
if (typeof window < 'u')
  try {
    var xr = Object.defineProperty({}, 'passive', {
      get: function () {
        return ((En = !0), !0)
      },
    })
    ;(window.addEventListener('test', xr, xr),
      window.removeEventListener('test', xr, xr))
  } catch {
    En = !1
  }
var jt = En ? { passive: !1 } : !1,
  hp = function (e) {
    return e.tagName === 'TEXTAREA'
  },
  Xs = function (e, r) {
    var t = window.getComputedStyle(e)
    return (
      t[r] !== 'hidden' &&
      !(t.overflowY === t.overflowX && !hp(e) && t[r] === 'visible')
    )
  },
  pp = function (e) {
    return Xs(e, 'overflowY')
  },
  mp = function (e) {
    return Xs(e, 'overflowX')
  },
  Go = function (e, r) {
    var t = r
    do {
      typeof ShadowRoot < 'u' && t instanceof ShadowRoot && (t = t.host)
      var n = qs(e, t)
      if (n) {
        var o = Js(e, t),
          a = o[1],
          l = o[2]
        if (a > l) return !0
      }
      t = t.parentNode
    } while (t && t !== document.body)
    return !1
  },
  gp = function (e) {
    var r = e.scrollTop,
      t = e.scrollHeight,
      n = e.clientHeight
    return [r, t, n]
  },
  vp = function (e) {
    var r = e.scrollLeft,
      t = e.scrollWidth,
      n = e.clientWidth
    return [r, t, n]
  },
  qs = function (e, r) {
    return e === 'v' ? pp(r) : mp(r)
  },
  Js = function (e, r) {
    return e === 'v' ? gp(r) : vp(r)
  },
  bp = function (e, r) {
    return e === 'h' && r === 'rtl' ? -1 : 1
  },
  xp = function (e, r, t, n, o) {
    var a = bp(e, window.getComputedStyle(r).direction),
      l = a * n,
      i = t.target,
      c = r.contains(i),
      f = !1,
      m = l > 0,
      p = 0,
      v = 0
    do {
      var d = Js(e, i),
        x = d[0],
        h = d[1],
        g = d[2],
        w = h - g - a * x
      ;((x || w) && qs(e, i) && ((p += w), (v += x)), (i = i.parentNode))
    } while ((!c && i !== document.body) || (c && (r.contains(i) || r === i)))
    return (((m && p === 0) || (!m && v === 0)) && (f = !0), f)
  },
  wr = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0]
  },
  Zo = function (e) {
    return [e.deltaX, e.deltaY]
  },
  Yo = function (e) {
    return e && 'current' in e ? e.current : e
  },
  wp = function (e, r) {
    return e[0] === r[0] && e[1] === r[1]
  },
  yp = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      )
  },
  Sp = 0,
  Tt = []
function Cp(e) {
  var r = u.useRef([]),
    t = u.useRef([0, 0]),
    n = u.useRef(),
    o = u.useState(Sp++)[0],
    a = u.useState(function () {
      return Vc()
    })[0],
    l = u.useRef(e)
  ;(u.useEffect(
    function () {
      l.current = e
    },
    [e]
  ),
    u.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o))
          var h = Hc([e.lockRef.current], (e.shards || []).map(Yo), !0).filter(
            Boolean
          )
          return (
            h.forEach(function (g) {
              return g.classList.add('allow-interactivity-'.concat(o))
            }),
            function () {
              ;(document.body.classList.remove(
                'block-interactivity-'.concat(o)
              ),
                h.forEach(function (g) {
                  return g.classList.remove('allow-interactivity-'.concat(o))
                }))
            }
          )
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    ))
  var i = u.useCallback(function (h, g) {
      if ('touches' in h && h.touches.length === 2)
        return !l.current.allowPinchZoom
      var w = wr(h),
        S = t.current,
        C = 'deltaX' in h ? h.deltaX : S[0] - w[0],
        _ = 'deltaY' in h ? h.deltaY : S[1] - w[1],
        E,
        D = h.target,
        T = Math.abs(C) > Math.abs(_) ? 'h' : 'v'
      if ('touches' in h && T === 'h' && D.type === 'range') return !1
      var I = Go(T, D)
      if (!I) return !0
      if ((I ? (E = T) : ((E = T === 'v' ? 'h' : 'v'), (I = Go(T, D))), !I))
        return !1
      if (
        (!n.current && 'changedTouches' in h && (C || _) && (n.current = E), !E)
      )
        return !0
      var R = n.current || E
      return xp(R, g, h, R === 'h' ? C : _)
    }, []),
    c = u.useCallback(function (h) {
      var g = h
      if (!(!Tt.length || Tt[Tt.length - 1] !== a)) {
        var w = 'deltaY' in g ? Zo(g) : wr(g),
          S = r.current.filter(function (E) {
            return E.name === g.type && E.target === g.target && wp(E.delta, w)
          })[0]
        if (S && S.should) {
          g.cancelable && g.preventDefault()
          return
        }
        if (!S) {
          var C = (l.current.shards || [])
              .map(Yo)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(g.target)
              }),
            _ = C.length > 0 ? i(g, C[0]) : !l.current.noIsolation
          _ && g.cancelable && g.preventDefault()
        }
      }
    }, []),
    f = u.useCallback(function (h, g, w, S) {
      var C = { name: h, delta: g, target: w, should: S }
      ;(r.current.push(C),
        setTimeout(function () {
          r.current = r.current.filter(function (_) {
            return _ !== C
          })
        }, 1))
    }, []),
    m = u.useCallback(function (h) {
      ;((t.current = wr(h)), (n.current = void 0))
    }, []),
    p = u.useCallback(function (h) {
      f(h.type, Zo(h), h.target, i(h, e.lockRef.current))
    }, []),
    v = u.useCallback(function (h) {
      f(h.type, wr(h), h.target, i(h, e.lockRef.current))
    }, [])
  u.useEffect(function () {
    return (
      Tt.push(a),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: v,
      }),
      document.addEventListener('wheel', c, jt),
      document.addEventListener('touchmove', c, jt),
      document.addEventListener('touchstart', m, jt),
      function () {
        ;((Tt = Tt.filter(function (h) {
          return h !== a
        })),
          document.removeEventListener('wheel', c, jt),
          document.removeEventListener('touchmove', c, jt),
          document.removeEventListener('touchstart', m, jt))
      }
    )
  }, [])
  var d = e.removeScrollBar,
    x = e.inert
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: yp(o) }) : null,
    d ? u.createElement(Wc, { gapMode: 'margin' }) : null
  )
}
const _p = Kc(Ys, Cp)
var Qs = u.forwardRef(function (e, r) {
  return u.createElement(zr, Rt({}, e, { ref: r, sideCar: _p }))
})
Qs.classNames = zr.classNames
const kp = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
  Np = [' ', 'Enter'],
  Br = 'Select',
  [Ur, Vr, Ep] = Th(Br),
  [Ut, Uv] = no(Br, [Ep, Ws]),
  oo = Ws(),
  [jp, Ct] = Ut(Br),
  [Tp, Rp] = Ut(Br),
  Pp = e => {
    const {
        __scopeSelect: r,
        children: t,
        open: n,
        defaultOpen: o,
        onOpenChange: a,
        value: l,
        defaultValue: i,
        onValueChange: c,
        dir: f,
        name: m,
        autoComplete: p,
        disabled: v,
        required: d,
      } = e,
      x = oo(r),
      [h, g] = u.useState(null),
      [w, S] = u.useState(null),
      [C, _] = u.useState(!1),
      E = Ph(f),
      [D = !1, T] = Ko({ prop: n, defaultProp: o, onChange: a }),
      [I, R] = Ko({ prop: l, defaultProp: i, onChange: c }),
      L = u.useRef(null),
      V = h ? !!h.closest('form') : !0,
      [k, P] = u.useState(new Set()),
      b = Array.from(k)
        .map(M => M.props.value)
        .join(';')
    return u.createElement(
      sp,
      x,
      u.createElement(
        jp,
        {
          required: d,
          scope: r,
          trigger: h,
          onTriggerChange: g,
          valueNode: w,
          onValueNodeChange: S,
          valueNodeHasChildren: C,
          onValueNodeHasChildrenChange: _,
          contentId: Us(),
          value: I,
          onValueChange: R,
          open: D,
          onOpenChange: T,
          dir: E,
          triggerPointerDownPosRef: L,
          disabled: v,
        },
        u.createElement(
          Ur.Provider,
          { scope: r },
          u.createElement(
            Tp,
            {
              scope: e.__scopeSelect,
              onNativeOptionAdd: u.useCallback(M => {
                P(K => new Set(K).add(M))
              }, []),
              onNativeOptionRemove: u.useCallback(M => {
                P(K => {
                  const U = new Set(K)
                  return (U.delete(M), U)
                })
              }, []),
            },
            t
          )
        ),
        V
          ? u.createElement(
              ni,
              {
                key: b,
                'aria-hidden': !0,
                required: d,
                tabIndex: -1,
                name: m,
                autoComplete: p,
                value: I,
                onChange: M => R(M.target.value),
                disabled: v,
              },
              I === void 0 ? u.createElement('option', { value: '' }) : null,
              Array.from(k)
            )
          : null
      )
    )
  },
  Ip = 'SelectTrigger',
  Dp = u.forwardRef((e, r) => {
    const { __scopeSelect: t, disabled: n = !1, ...o } = e,
      a = oo(t),
      l = Ct(Ip, t),
      i = l.disabled || n,
      c = De(r, l.onTriggerChange),
      f = Vr(t),
      [m, p, v] = oi(x => {
        const h = f().filter(S => !S.disabled),
          g = h.find(S => S.value === l.value),
          w = ai(h, x, g)
        w !== void 0 && l.onValueChange(w.value)
      }),
      d = () => {
        i || (l.onOpenChange(!0), v())
      }
    return u.createElement(
      ip,
      we({ asChild: !0 }, a),
      u.createElement(
        Pe.button,
        we(
          {
            type: 'button',
            role: 'combobox',
            'aria-controls': l.contentId,
            'aria-expanded': l.open,
            'aria-required': l.required,
            'aria-autocomplete': 'none',
            dir: l.dir,
            'data-state': l.open ? 'open' : 'closed',
            disabled: i,
            'data-disabled': i ? '' : void 0,
            'data-placeholder': l.value === void 0 ? '' : void 0,
          },
          o,
          {
            ref: c,
            onClick: Re(o.onClick, x => {
              x.currentTarget.focus()
            }),
            onPointerDown: Re(o.onPointerDown, x => {
              const h = x.target
              ;(h.hasPointerCapture(x.pointerId) &&
                h.releasePointerCapture(x.pointerId),
                x.button === 0 &&
                  x.ctrlKey === !1 &&
                  (d(),
                  (l.triggerPointerDownPosRef.current = {
                    x: Math.round(x.pageX),
                    y: Math.round(x.pageY),
                  }),
                  x.preventDefault()))
            }),
            onKeyDown: Re(o.onKeyDown, x => {
              const h = m.current !== ''
              ;(!(x.ctrlKey || x.altKey || x.metaKey) &&
                x.key.length === 1 &&
                p(x.key),
                !(h && x.key === ' ') &&
                  kp.includes(x.key) &&
                  (d(), x.preventDefault()))
            }),
          }
        )
      )
    )
  }),
  Ap = 'SelectValue',
  $p = u.forwardRef((e, r) => {
    const {
        __scopeSelect: t,
        className: n,
        style: o,
        children: a,
        placeholder: l,
        ...i
      } = e,
      c = Ct(Ap, t),
      { onValueNodeHasChildrenChange: f } = c,
      m = a !== void 0,
      p = De(r, c.onValueNodeChange)
    return (
      ze(() => {
        f(m)
      }, [f, m]),
      u.createElement(
        Pe.span,
        we({}, i, { ref: p, style: { pointerEvents: 'none' } }),
        c.value === void 0 && l !== void 0 ? l : a
      )
    )
  }),
  Mp = u.forwardRef((e, r) => {
    const { __scopeSelect: t, children: n, ...o } = e
    return u.createElement(
      Pe.span,
      we({ 'aria-hidden': !0 }, o, { ref: r }),
      n || '▼'
    )
  }),
  Op = e => u.createElement(cp, we({ asChild: !0 }, e)),
  Mt = 'SelectContent',
  Lp = u.forwardRef((e, r) => {
    const t = Ct(Mt, e.__scopeSelect),
      [n, o] = u.useState()
    if (
      (ze(() => {
        o(new DocumentFragment())
      }, []),
      !t.open)
    ) {
      const a = n
      return a
        ? Rr.createPortal(
            u.createElement(
              ei,
              { scope: e.__scopeSelect },
              u.createElement(
                Ur.Slot,
                { scope: e.__scopeSelect },
                u.createElement('div', null, e.children)
              )
            ),
            a
          )
        : null
    }
    return u.createElement(Fp, we({}, e, { ref: r }))
  }),
  qe = 10,
  [ei, _t] = Ut(Mt),
  Fp = u.forwardRef((e, r) => {
    const {
        __scopeSelect: t,
        position: n = 'item-aligned',
        onCloseAutoFocus: o,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        side: i,
        sideOffset: c,
        align: f,
        alignOffset: m,
        arrowPadding: p,
        collisionBoundary: v,
        collisionPadding: d,
        sticky: x,
        hideWhenDetached: h,
        avoidCollisions: g,
        ...w
      } = e,
      S = Ct(Mt, t),
      [C, _] = u.useState(null),
      [E, D] = u.useState(null),
      T = De(r, Q => _(Q)),
      [I, R] = u.useState(null),
      [L, V] = u.useState(null),
      k = Vr(t),
      [P, b] = u.useState(!1),
      M = u.useRef(!1)
    ;(u.useEffect(() => {
      if (C) return ga(C)
    }, [C]),
      Bh())
    const K = u.useCallback(
        Q => {
          const [ne, ...se] = k().map(he => he.ref.current),
            [ue] = se.slice(-1),
            ce = document.activeElement
          for (const he of Q)
            if (
              he === ce ||
              (he == null || he.scrollIntoView({ block: 'nearest' }),
              he === ne && E && (E.scrollTop = 0),
              he === ue && E && (E.scrollTop = E.scrollHeight),
              he == null || he.focus(),
              document.activeElement !== ce)
            )
              return
        },
        [k, E]
      ),
      U = u.useCallback(() => K([I, C]), [K, I, C])
    u.useEffect(() => {
      P && U()
    }, [P, U])
    const { onOpenChange: re, triggerPointerDownPosRef: $ } = S
    ;(u.useEffect(() => {
      if (C) {
        let Q = { x: 0, y: 0 }
        const ne = ue => {
            var ce, he, ye, y
            Q = {
              x: Math.abs(
                Math.round(ue.pageX) -
                  ((ce =
                    (he = $.current) === null || he === void 0
                      ? void 0
                      : he.x) !== null && ce !== void 0
                    ? ce
                    : 0)
              ),
              y: Math.abs(
                Math.round(ue.pageY) -
                  ((ye =
                    (y = $.current) === null || y === void 0 ? void 0 : y.y) !==
                    null && ye !== void 0
                    ? ye
                    : 0)
              ),
            }
          },
          se = ue => {
            ;(Q.x <= 10 && Q.y <= 10
              ? ue.preventDefault()
              : C.contains(ue.target) || re(!1),
              document.removeEventListener('pointermove', ne),
              ($.current = null))
          }
        return (
          $.current !== null &&
            (document.addEventListener('pointermove', ne),
            document.addEventListener('pointerup', se, {
              capture: !0,
              once: !0,
            })),
          () => {
            ;(document.removeEventListener('pointermove', ne),
              document.removeEventListener('pointerup', se, { capture: !0 }))
          }
        )
      }
    }, [C, re, $]),
      u.useEffect(() => {
        const Q = () => re(!1)
        return (
          window.addEventListener('blur', Q),
          window.addEventListener('resize', Q),
          () => {
            ;(window.removeEventListener('blur', Q),
              window.removeEventListener('resize', Q))
          }
        )
      }, [re]))
    const [ee, F] = oi(Q => {
        const ne = k().filter(ce => !ce.disabled),
          se = ne.find(ce => ce.ref.current === document.activeElement),
          ue = ai(ne, Q, se)
        ue && setTimeout(() => ue.ref.current.focus())
      }),
      A = u.useCallback(
        (Q, ne, se) => {
          const ue = !M.current && !se
          ;((S.value !== void 0 && S.value === ne) || ue) &&
            (R(Q), ue && (M.current = !0))
        },
        [S.value]
      ),
      q = u.useCallback(() => (C == null ? void 0 : C.focus()), [C]),
      G = u.useCallback(
        (Q, ne, se) => {
          const ue = !M.current && !se
          ;((S.value !== void 0 && S.value === ne) || ue) && V(Q)
        },
        [S.value]
      ),
      Z = n === 'popper' ? Xo : zp,
      fe =
        Z === Xo
          ? {
              side: i,
              sideOffset: c,
              align: f,
              alignOffset: m,
              arrowPadding: p,
              collisionBoundary: v,
              collisionPadding: d,
              sticky: x,
              hideWhenDetached: h,
              avoidCollisions: g,
            }
          : {}
    return u.createElement(
      ei,
      {
        scope: t,
        content: C,
        viewport: E,
        onViewportChange: D,
        itemRefCallback: A,
        selectedItem: I,
        onItemLeave: q,
        itemTextRefCallback: G,
        focusSelectedItem: U,
        selectedItemText: L,
        position: n,
        isPositioned: P,
        searchRef: ee,
      },
      u.createElement(
        Qs,
        { as: er, allowPinchZoom: !0 },
        u.createElement(
          Uh,
          {
            asChild: !0,
            trapped: S.open,
            onMountAutoFocus: Q => {
              Q.preventDefault()
            },
            onUnmountAutoFocus: Re(o, Q => {
              var ne
              ;((ne = S.trigger) === null ||
                ne === void 0 ||
                ne.focus({ preventScroll: !0 }),
                Q.preventDefault())
            }),
          },
          u.createElement(
            Lh,
            {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: a,
              onPointerDownOutside: l,
              onFocusOutside: Q => Q.preventDefault(),
              onDismiss: () => S.onOpenChange(!1),
            },
            u.createElement(
              Z,
              we(
                {
                  role: 'listbox',
                  id: S.contentId,
                  'data-state': S.open ? 'open' : 'closed',
                  dir: S.dir,
                  onContextMenu: Q => Q.preventDefault(),
                },
                w,
                fe,
                {
                  onPlaced: () => b(!0),
                  ref: T,
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    outline: 'none',
                    ...w.style,
                  },
                  onKeyDown: Re(w.onKeyDown, Q => {
                    const ne = Q.ctrlKey || Q.altKey || Q.metaKey
                    if (
                      (Q.key === 'Tab' && Q.preventDefault(),
                      !ne && Q.key.length === 1 && F(Q.key),
                      ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(Q.key))
                    ) {
                      let ue = k()
                        .filter(ce => !ce.disabled)
                        .map(ce => ce.ref.current)
                      if (
                        (['ArrowUp', 'End'].includes(Q.key) &&
                          (ue = ue.slice().reverse()),
                        ['ArrowUp', 'ArrowDown'].includes(Q.key))
                      ) {
                        const ce = Q.target,
                          he = ue.indexOf(ce)
                        ue = ue.slice(he + 1)
                      }
                      ;(setTimeout(() => K(ue)), Q.preventDefault())
                    }
                  }),
                }
              )
            )
          )
        )
      )
    )
  }),
  zp = u.forwardRef((e, r) => {
    const { __scopeSelect: t, onPlaced: n, ...o } = e,
      a = Ct(Mt, t),
      l = _t(Mt, t),
      [i, c] = u.useState(null),
      [f, m] = u.useState(null),
      p = De(r, T => m(T)),
      v = Vr(t),
      d = u.useRef(!1),
      x = u.useRef(!0),
      {
        viewport: h,
        selectedItem: g,
        selectedItemText: w,
        focusSelectedItem: S,
      } = l,
      C = u.useCallback(() => {
        if (a.trigger && a.valueNode && i && f && h && g && w) {
          const T = a.trigger.getBoundingClientRect(),
            I = f.getBoundingClientRect(),
            R = a.valueNode.getBoundingClientRect(),
            L = w.getBoundingClientRect()
          if (a.dir !== 'rtl') {
            const ce = L.left - I.left,
              he = R.left - ce,
              ye = T.left - he,
              y = T.width + ye,
              H = Math.max(y, I.width),
              B = window.innerWidth - qe,
              j = Lo(he, [qe, B - H])
            ;((i.style.minWidth = y + 'px'), (i.style.left = j + 'px'))
          } else {
            const ce = I.right - L.right,
              he = window.innerWidth - R.right - ce,
              ye = window.innerWidth - T.right - he,
              y = T.width + ye,
              H = Math.max(y, I.width),
              B = window.innerWidth - qe,
              j = Lo(he, [qe, B - H])
            ;((i.style.minWidth = y + 'px'), (i.style.right = j + 'px'))
          }
          const V = v(),
            k = window.innerHeight - qe * 2,
            P = h.scrollHeight,
            b = window.getComputedStyle(f),
            M = parseInt(b.borderTopWidth, 10),
            K = parseInt(b.paddingTop, 10),
            U = parseInt(b.borderBottomWidth, 10),
            re = parseInt(b.paddingBottom, 10),
            $ = M + K + P + re + U,
            ee = Math.min(g.offsetHeight * 5, $),
            F = window.getComputedStyle(h),
            A = parseInt(F.paddingTop, 10),
            q = parseInt(F.paddingBottom, 10),
            G = T.top + T.height / 2 - qe,
            Z = k - G,
            fe = g.offsetHeight / 2,
            Q = g.offsetTop + fe,
            ne = M + K + Q,
            se = $ - ne
          if (ne <= G) {
            const ce = g === V[V.length - 1].ref.current
            i.style.bottom = '0px'
            const he = f.clientHeight - h.offsetTop - h.offsetHeight,
              ye = Math.max(Z, fe + (ce ? q : 0) + he + U),
              y = ne + ye
            i.style.height = y + 'px'
          } else {
            const ce = g === V[0].ref.current
            i.style.top = '0px'
            const ye = Math.max(G, M + h.offsetTop + (ce ? A : 0) + fe) + se
            ;((i.style.height = ye + 'px'),
              (h.scrollTop = ne - G + h.offsetTop))
          }
          ;((i.style.margin = `${qe}px 0`),
            (i.style.minHeight = ee + 'px'),
            (i.style.maxHeight = k + 'px'),
            n == null || n(),
            requestAnimationFrame(() => (d.current = !0)))
        }
      }, [v, a.trigger, a.valueNode, i, f, h, g, w, a.dir, n])
    ze(() => C(), [C])
    const [_, E] = u.useState()
    ze(() => {
      f && E(window.getComputedStyle(f).zIndex)
    }, [f])
    const D = u.useCallback(
      T => {
        T && x.current === !0 && (C(), S == null || S(), (x.current = !1))
      },
      [C, S]
    )
    return u.createElement(
      Bp,
      {
        scope: t,
        contentWrapper: i,
        shouldExpandOnScrollRef: d,
        onScrollButtonChange: D,
      },
      u.createElement(
        'div',
        {
          ref: c,
          style: {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            zIndex: _,
          },
        },
        u.createElement(
          Pe.div,
          we({}, o, {
            ref: p,
            style: { boxSizing: 'border-box', maxHeight: '100%', ...o.style },
          })
        )
      )
    )
  }),
  Xo = u.forwardRef((e, r) => {
    const {
        __scopeSelect: t,
        align: n = 'start',
        collisionPadding: o = qe,
        ...a
      } = e,
      l = oo(t)
    return u.createElement(
      lp,
      we({}, l, a, {
        ref: r,
        align: n,
        collisionPadding: o,
        style: {
          boxSizing: 'border-box',
          ...a.style,
          '--radix-select-content-transform-origin':
            'var(--radix-popper-transform-origin)',
          '--radix-select-content-available-width':
            'var(--radix-popper-available-width)',
          '--radix-select-content-available-height':
            'var(--radix-popper-available-height)',
          '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
          '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
        },
      })
    )
  }),
  [Bp, ao] = Ut(Mt, {}),
  qo = 'SelectViewport',
  Up = u.forwardRef((e, r) => {
    const { __scopeSelect: t, ...n } = e,
      o = _t(qo, t),
      a = ao(qo, t),
      l = De(r, o.onViewportChange),
      i = u.useRef(0)
    return u.createElement(
      u.Fragment,
      null,
      u.createElement('style', {
        dangerouslySetInnerHTML: {
          __html:
            '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
        },
      }),
      u.createElement(
        Ur.Slot,
        { scope: t },
        u.createElement(
          Pe.div,
          we({ 'data-radix-select-viewport': '', role: 'presentation' }, n, {
            ref: l,
            style: {
              position: 'relative',
              flex: 1,
              overflow: 'auto',
              ...n.style,
            },
            onScroll: Re(n.onScroll, c => {
              const f = c.currentTarget,
                { contentWrapper: m, shouldExpandOnScrollRef: p } = a
              if (p != null && p.current && m) {
                const v = Math.abs(i.current - f.scrollTop)
                if (v > 0) {
                  const d = window.innerHeight - qe * 2,
                    x = parseFloat(m.style.minHeight),
                    h = parseFloat(m.style.height),
                    g = Math.max(x, h)
                  if (g < d) {
                    const w = g + v,
                      S = Math.min(d, w),
                      C = w - S
                    ;((m.style.height = S + 'px'),
                      m.style.bottom === '0px' &&
                        ((f.scrollTop = C > 0 ? C : 0),
                        (m.style.justifyContent = 'flex-end')))
                  }
                }
              }
              i.current = f.scrollTop
            }),
          })
        )
      )
    )
  }),
  Vp = 'SelectGroup',
  [Vv, Hp] = Ut(Vp),
  Wp = 'SelectLabel',
  Kp = u.forwardRef((e, r) => {
    const { __scopeSelect: t, ...n } = e,
      o = Hp(Wp, t)
    return u.createElement(Pe.div, we({ id: o.id }, n, { ref: r }))
  }),
  jn = 'SelectItem',
  [Gp, ti] = Ut(jn),
  Zp = u.forwardRef((e, r) => {
    const {
        __scopeSelect: t,
        value: n,
        disabled: o = !1,
        textValue: a,
        ...l
      } = e,
      i = Ct(jn, t),
      c = _t(jn, t),
      f = i.value === n,
      [m, p] = u.useState(a ?? ''),
      [v, d] = u.useState(!1),
      x = De(r, w => {
        var S
        return (S = c.itemRefCallback) === null || S === void 0
          ? void 0
          : S.call(c, w, n, o)
      }),
      h = Us(),
      g = () => {
        o || (i.onValueChange(n), i.onOpenChange(!1))
      }
    return u.createElement(
      Gp,
      {
        scope: t,
        value: n,
        disabled: o,
        textId: h,
        isSelected: f,
        onItemTextChange: u.useCallback(w => {
          p(S => {
            var C
            return (
              S ||
              ((C = w == null ? void 0 : w.textContent) !== null && C !== void 0
                ? C
                : ''
              ).trim()
            )
          })
        }, []),
      },
      u.createElement(
        Ur.ItemSlot,
        { scope: t, value: n, disabled: o, textValue: m },
        u.createElement(
          Pe.div,
          we(
            {
              role: 'option',
              'aria-labelledby': h,
              'data-highlighted': v ? '' : void 0,
              'aria-selected': f && v,
              'data-state': f ? 'checked' : 'unchecked',
              'aria-disabled': o || void 0,
              'data-disabled': o ? '' : void 0,
              tabIndex: o ? void 0 : -1,
            },
            l,
            {
              ref: x,
              onFocus: Re(l.onFocus, () => d(!0)),
              onBlur: Re(l.onBlur, () => d(!1)),
              onPointerUp: Re(l.onPointerUp, g),
              onPointerMove: Re(l.onPointerMove, w => {
                if (o) {
                  var S
                  ;(S = c.onItemLeave) === null || S === void 0 || S.call(c)
                } else w.currentTarget.focus({ preventScroll: !0 })
              }),
              onPointerLeave: Re(l.onPointerLeave, w => {
                if (w.currentTarget === document.activeElement) {
                  var S
                  ;(S = c.onItemLeave) === null || S === void 0 || S.call(c)
                }
              }),
              onKeyDown: Re(l.onKeyDown, w => {
                var S
                ;(((S = c.searchRef) === null || S === void 0
                  ? void 0
                  : S.current) !== '' &&
                  w.key === ' ') ||
                  (Np.includes(w.key) && g(),
                  w.key === ' ' && w.preventDefault())
              }),
            }
          )
        )
      )
    )
  }),
  yr = 'SelectItemText',
  Yp = u.forwardRef((e, r) => {
    const { __scopeSelect: t, className: n, style: o, ...a } = e,
      l = Ct(yr, t),
      i = _t(yr, t),
      c = ti(yr, t),
      f = Rp(yr, t),
      [m, p] = u.useState(null),
      v = De(
        r,
        w => p(w),
        c.onItemTextChange,
        w => {
          var S
          return (S = i.itemTextRefCallback) === null || S === void 0
            ? void 0
            : S.call(i, w, c.value, c.disabled)
        }
      ),
      d = m == null ? void 0 : m.textContent,
      x = u.useMemo(
        () =>
          u.createElement(
            'option',
            { key: c.value, value: c.value, disabled: c.disabled },
            d
          ),
        [c.disabled, c.value, d]
      ),
      { onNativeOptionAdd: h, onNativeOptionRemove: g } = f
    return (
      ze(() => (h(x), () => g(x)), [h, g, x]),
      u.createElement(
        u.Fragment,
        null,
        u.createElement(Pe.span, we({ id: c.textId }, a, { ref: v })),
        c.isSelected && l.valueNode && !l.valueNodeHasChildren
          ? Rr.createPortal(a.children, l.valueNode)
          : null
      )
    )
  }),
  Xp = 'SelectItemIndicator',
  qp = u.forwardRef((e, r) => {
    const { __scopeSelect: t, ...n } = e
    return ti(Xp, t).isSelected
      ? u.createElement(Pe.span, we({ 'aria-hidden': !0 }, n, { ref: r }))
      : null
  }),
  Jo = 'SelectScrollUpButton',
  Jp = u.forwardRef((e, r) => {
    const t = _t(Jo, e.__scopeSelect),
      n = ao(Jo, e.__scopeSelect),
      [o, a] = u.useState(!1),
      l = De(r, n.onScrollButtonChange)
    return (
      ze(() => {
        if (t.viewport && t.isPositioned) {
          let c = function () {
            const f = i.scrollTop > 0
            a(f)
          }
          const i = t.viewport
          return (
            c(),
            i.addEventListener('scroll', c),
            () => i.removeEventListener('scroll', c)
          )
        }
      }, [t.viewport, t.isPositioned]),
      o
        ? u.createElement(
            ri,
            we({}, e, {
              ref: l,
              onAutoScroll: () => {
                const { viewport: i, selectedItem: c } = t
                i && c && (i.scrollTop = i.scrollTop - c.offsetHeight)
              },
            })
          )
        : null
    )
  }),
  Qo = 'SelectScrollDownButton',
  Qp = u.forwardRef((e, r) => {
    const t = _t(Qo, e.__scopeSelect),
      n = ao(Qo, e.__scopeSelect),
      [o, a] = u.useState(!1),
      l = De(r, n.onScrollButtonChange)
    return (
      ze(() => {
        if (t.viewport && t.isPositioned) {
          let c = function () {
            const f = i.scrollHeight - i.clientHeight,
              m = Math.ceil(i.scrollTop) < f
            a(m)
          }
          const i = t.viewport
          return (
            c(),
            i.addEventListener('scroll', c),
            () => i.removeEventListener('scroll', c)
          )
        }
      }, [t.viewport, t.isPositioned]),
      o
        ? u.createElement(
            ri,
            we({}, e, {
              ref: l,
              onAutoScroll: () => {
                const { viewport: i, selectedItem: c } = t
                i && c && (i.scrollTop = i.scrollTop + c.offsetHeight)
              },
            })
          )
        : null
    )
  }),
  ri = u.forwardRef((e, r) => {
    const { __scopeSelect: t, onAutoScroll: n, ...o } = e,
      a = _t('SelectScrollButton', t),
      l = u.useRef(null),
      i = Vr(t),
      c = u.useCallback(() => {
        l.current !== null &&
          (window.clearInterval(l.current), (l.current = null))
      }, [])
    return (
      u.useEffect(() => () => c(), [c]),
      ze(() => {
        var f
        const m = i().find(p => p.ref.current === document.activeElement)
        m == null ||
          (f = m.ref.current) === null ||
          f === void 0 ||
          f.scrollIntoView({ block: 'nearest' })
      }, [i]),
      u.createElement(
        Pe.div,
        we({ 'aria-hidden': !0 }, o, {
          ref: r,
          style: { flexShrink: 0, ...o.style },
          onPointerDown: Re(o.onPointerDown, () => {
            l.current === null && (l.current = window.setInterval(n, 50))
          }),
          onPointerMove: Re(o.onPointerMove, () => {
            var f
            ;((f = a.onItemLeave) === null || f === void 0 || f.call(a),
              l.current === null && (l.current = window.setInterval(n, 50)))
          }),
          onPointerLeave: Re(o.onPointerLeave, () => {
            c()
          }),
        })
      )
    )
  }),
  em = u.forwardRef((e, r) => {
    const { __scopeSelect: t, ...n } = e
    return u.createElement(Pe.div, we({ 'aria-hidden': !0 }, n, { ref: r }))
  }),
  ni = u.forwardRef((e, r) => {
    const { value: t, ...n } = e,
      o = u.useRef(null),
      a = De(r, o),
      l = up(t)
    return (
      u.useEffect(() => {
        const i = o.current,
          c = window.HTMLSelectElement.prototype,
          m = Object.getOwnPropertyDescriptor(c, 'value').set
        if (l !== t && m) {
          const p = new Event('change', { bubbles: !0 })
          ;(m.call(i, t), i.dispatchEvent(p))
        }
      }, [l, t]),
      u.createElement(
        fp,
        { asChild: !0 },
        u.createElement('select', we({}, n, { ref: a, defaultValue: t }))
      )
    )
  })
ni.displayName = 'BubbleSelect'
function oi(e) {
  const r = et(e),
    t = u.useRef(''),
    n = u.useRef(0),
    o = u.useCallback(
      l => {
        const i = t.current + l
        ;(r(i),
          (function c(f) {
            ;((t.current = f),
              window.clearTimeout(n.current),
              f !== '' && (n.current = window.setTimeout(() => c(''), 1e3)))
          })(i))
      },
      [r]
    ),
    a = u.useCallback(() => {
      ;((t.current = ''), window.clearTimeout(n.current))
    }, [])
  return (
    u.useEffect(() => () => window.clearTimeout(n.current), []),
    [t, o, a]
  )
}
function ai(e, r, t) {
  const o = r.length > 1 && Array.from(r).every(f => f === r[0]) ? r[0] : r,
    a = t ? e.indexOf(t) : -1
  let l = tm(e, Math.max(a, 0))
  o.length === 1 && (l = l.filter(f => f !== t))
  const c = l.find(f => f.textValue.toLowerCase().startsWith(o.toLowerCase()))
  return c !== t ? c : void 0
}
function tm(e, r) {
  return e.map((t, n) => e[(r + n) % e.length])
}
const rm = Pp,
  si = Dp,
  nm = $p,
  om = Mp,
  am = Op,
  ii = Lp,
  sm = Up,
  li = Kp,
  ci = Zp,
  im = Yp,
  lm = qp,
  di = Jp,
  ui = Qp,
  fi = em,
  At = rm,
  $t = nm,
  gt = u.forwardRef(({ className: e, children: r, ...t }, n) =>
    s.jsxs(si, {
      ref: n,
      className: le(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        e
      ),
      ...t,
      children: [
        r,
        s.jsx(om, {
          asChild: !0,
          children: s.jsx(Vn, { className: 'h-4 w-4 opacity-50' }),
        }),
      ],
    })
  )
gt.displayName = si.displayName
const hi = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(di, {
    ref: t,
    className: le('flex cursor-default items-center justify-center py-1', e),
    ...r,
    children: s.jsx(Ad, { className: 'h-4 w-4' }),
  })
)
hi.displayName = di.displayName
const pi = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(ui, {
    ref: t,
    className: le('flex cursor-default items-center justify-center py-1', e),
    ...r,
    children: s.jsx(Vn, { className: 'h-4 w-4' }),
  })
)
pi.displayName = ui.displayName
const vt = u.forwardRef(
  ({ className: e, children: r, position: t = 'popper', ...n }, o) =>
    s.jsx(am, {
      children: s.jsxs(ii, {
        ref: o,
        className: le(
          'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          t === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          e
        ),
        position: t,
        ...n,
        children: [
          s.jsx(hi, {}),
          s.jsx(sm, {
            className: le(
              'p-1',
              t === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
            ),
            children: r,
          }),
          s.jsx(pi, {}),
        ],
      }),
    })
)
vt.displayName = ii.displayName
const cm = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(li, {
    ref: t,
    className: le('py-1.5 pl-8 pr-2 text-sm font-semibold', e),
    ...r,
  })
)
cm.displayName = li.displayName
const Ke = u.forwardRef(({ className: e, children: r, ...t }, n) =>
  s.jsxs(ci, {
    ref: n,
    className: le(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      e
    ),
    ...t,
    children: [
      s.jsx('span', {
        className:
          'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        children: s.jsx(lm, { children: s.jsx(or, { className: 'h-4 w-4' }) }),
      }),
      s.jsx(im, { children: r }),
    ],
  })
)
Ke.displayName = ci.displayName
const dm = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(fi, { ref: t, className: le('-mx-1 my-1 h-px bg-muted', e), ...r })
)
dm.displayName = fi.displayName
const mi = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(ka, {
    ref: t,
    className: le(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      e
    ),
    ...r,
    children: s.jsx(Qc, {
      className: le('flex items-center justify-center text-current'),
      children: s.jsx(or, { className: 'h-4 w-4' }),
    }),
  })
)
mi.displayName = ka.displayName
var um = 'Label',
  gi = u.forwardRef((e, r) =>
    s.jsx(Ce.label, {
      ...e,
      ref: r,
      onMouseDown: t => {
        var o
        t.target.closest('button, input, select, textarea') ||
          ((o = e.onMouseDown) == null || o.call(e, t),
          !t.defaultPrevented && t.detail > 1 && t.preventDefault())
      },
    })
  )
gi.displayName = um
var vi = gi
const fm = $r(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
  ),
  Te = u.forwardRef(({ className: e, ...r }, t) =>
    s.jsx(vi, { ref: t, className: le(fm(), e), ...r })
  )
Te.displayName = vi.displayName
const hm = ({ currentCount: e, onUpdate: r, onClose: t }) => {
    const [n, o] = J.useState(''),
      a = v => {
        o(d => (d + v.toString()).slice(0, 4))
      },
      l = () => {
        const v = parseInt(n, 10)
        !isNaN(v) && v >= 0
          ? (r(v), t())
          : n === ''
            ? t()
            : (console.error('Invalid pallet count input'), o(''))
      },
      i = () => {
        ;(r(e + 1), o(''))
      },
      c = () => {
        ;(r(Math.max(0, e - 1)), o(''))
      },
      f = () => {
        o(v => v.slice(0, -1))
      },
      m = () => {
        o('')
      },
      p = v => {
        v.stopPropagation()
      }
    return s.jsxs('div', {
      className:
        'absolute z-20 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-48 bg-white border border-gray-300 rounded-lg shadow-xl p-2 grid grid-cols-3 gap-1',
      onClick: p,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'Quick pallet input',
      children: [
        s.jsx('div', {
          className:
            'col-span-3 text-right p-1 border-b mb-1 text-lg font-semibold h-8 truncate',
          children: n || e.toString(),
        }),
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(v =>
          s.jsx(
            ge,
            {
              variant: 'outline',
              size: 'sm',
              className: 'h-8 text-sm focus:ring-2 focus:ring-blue-400',
              onClick: () => a(v),
              children: v,
            },
            v
          )
        ),
        s.jsx(ge, {
          variant: 'outline',
          size: 'sm',
          className: 'h-8 text-xs focus:ring-2 focus:ring-blue-400',
          onClick: m,
          children: 'CLR',
        }),
        s.jsx(ge, {
          variant: 'outline',
          size: 'sm',
          className: 'h-8 text-sm focus:ring-2 focus:ring-blue-400',
          onClick: () => a(0),
          children: '0',
        }),
        s.jsx(ge, {
          variant: 'outline',
          size: 'sm',
          className: 'h-8 text-xs focus:ring-2 focus:ring-blue-400',
          onClick: f,
          children: 'DEL',
        }),
        s.jsxs('div', {
          className: 'col-span-3 grid grid-cols-3 gap-1 mt-1',
          children: [
            s.jsx(ge, {
              variant: 'secondary',
              size: 'icon',
              className: 'h-8 w-full focus:ring-2 focus:ring-blue-400',
              onClick: c,
              'aria-label': 'Decrement pallet count',
              children: s.jsx(Zd, { className: 'h-4 w-4' }),
            }),
            s.jsx(ge, {
              variant: 'secondary',
              size: 'icon',
              className: 'h-8 w-full focus:ring-2 focus:ring-blue-400',
              onClick: i,
              'aria-label': 'Increment pallet count',
              children: s.jsx(qt, { className: 'h-4 w-4' }),
            }),
            s.jsx(ge, {
              variant: 'default',
              size: 'sm',
              className:
                'h-8 text-xs focus:ring-2 focus:ring-offset-1 focus:ring-green-500',
              onClick: l,
              children: 'OK',
            }),
          ],
        }),
        s.jsx(ge, {
          variant: 'ghost',
          size: 'icon',
          className:
            'absolute top-0 right-0 h-6 w-6 text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded-full',
          onClick: t,
          'aria-label': 'Close quick input',
          children: s.jsx(Mr, { className: 'h-4 w-4' }),
        }),
      ],
    })
  },
  bi = ['6024', '6070', '6039', '6040', '7045'],
  xi = ['23/43', '28', 'XD', 'AIB'],
  pm = e => ['empty', '25%', '50%', '75%', 'partial', 'shipload'].includes(e),
  mm = [
    { value: 'empty', label: 'Empty', colorClass: 'text-gray-700' },
    { value: '25%', label: '25%', colorClass: 'text-emerald-700' },
    { value: '50%', label: '50%', colorClass: 'text-amber-700' },
    { value: '75%', label: '75%', colorClass: 'text-red-700' },
    { value: 'partial', label: 'Partial', colorClass: 'text-blue-700' },
    { value: 'shipload', label: 'Shipload', colorClass: 'text-violet-700' },
  ].filter(e => pm(e.value)),
  gm = e => {
    const r = {}
    return (
      (e.doorNumber < 332 || e.doorNumber > 454) &&
        (r.doorNumber = 'Invalid door (332–454)'),
      bi.includes(e.destinationDC) || (r.dc = 'Invalid destination DC'),
      xi.includes(e.freightType) || (r.freight = 'Invalid freight type'),
      r
    )
  },
  ea = u.memo(
    ({
      door: e,
      updateDoorSchedule: r,
      removeDoor: t,
      isAnimated: n,
      isMobileView: o,
      isCompact: a = !1,
    }) => {
      const [l, i] = u.useState(!1),
        [c, f] = u.useState(!1),
        [m, p] = u.useState({}),
        [v, d] = u.useState(!1),
        x = u.useRef(e.palletCount)
      ;(u.useEffect(() => {
        if (e.palletCount !== x.current) {
          d(!0)
          const P = setTimeout(() => d(!1), 300)
          return ((x.current = e.palletCount), () => clearTimeout(P))
        }
      }, [e.palletCount]),
        u.useEffect(() => {
          p(gm(e))
        }, [e, e.doorNumber, e.destinationDC, e.freightType]))
      const h = (P, b) => {
          r(e.id, P, b)
        },
        g = P => {
          h('palletCount', P)
        },
        w = P => {
          ;(P.stopPropagation(), f(!c))
        },
        S = () => {
          f(!1)
        },
        C = s.jsxs('button', {
          type: 'button',
          className: `relative flex flex-col items-center justify-center h-full cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-100 hover:to-indigo-200 p-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-wal-blue-400 focus-visible:ring-offset-1 shadow-md hover:shadow-lg transform hover:scale-105 ${o ? 'py-2' : ''}`,
          onClick: w,
          onKeyDown: P => (P.key === 'Enter' || P.key === ' ') && w(P),
          'aria-haspopup': 'dialog',
          'aria-label': `Current pallet count ${e.palletCount}, click or press enter to edit`,
          children: [
            s.jsx('span', {
              className: `font-bold leading-none transition-transform duration-300 ease-in-out ${o ? 'text-3xl' : 'text-4xl'} ${v ? 'scale-125 text-wal-yellow-600' : 'scale-100 text-wal-blue-700'}`,
              'aria-live': 'polite',
              role: 'status',
              children: e.palletCount,
            }),
            s.jsx('span', {
              className: 'text-xs text-wal-blue-600 mt-1 font-medium',
              children: 'Pallets',
            }),
            c &&
              s.jsx(hm, {
                currentCount: e.palletCount || 0,
                onUpdate: g,
                onClose: S,
              }),
          ],
        }),
        _ =
          'w-full h-9 text-sm border-wal-blue-200 focus:border-wal-blue-400 hover:border-wal-blue-300 transition-all duration-200 shadow-sm hover:shadow-md',
        D = s.jsxs('div', {
          children: [
            !a &&
              s.jsx('div', {
                className: `text-xs text-wal-blue-600 font-bold mb-1 ${o ? 'sr-only' : ''}`,
                children: '📍 Destination',
              }),
            s.jsxs(At, {
              value: e.destinationDC,
              onValueChange: P => h('destinationDC', P),
              children: [
                s.jsx(gt, {
                  className: a
                    ? 'h-7 text-xs border-wal-blue-200 focus:border-wal-blue-400 hover:border-wal-blue-300 transition-all duration-200'
                    : _,
                  'aria-label': `Select Destination DC, current value ${e.destinationDC}`,
                  children: s.jsx($t, { placeholder: a ? 'DC' : 'Select DC' }),
                }),
                s.jsx(vt, {
                  children: bi.map(P =>
                    s.jsxs(
                      Ke,
                      {
                        value: P,
                        className: `${a ? 'text-sm py-1' : 'text-base py-2'} hover:bg-wal-blue-100 focus:bg-wal-blue-100`,
                        children: ['🏢 ', P],
                      },
                      P
                    )
                  ),
                }),
              ],
            }),
            m.dc &&
              s.jsx('div', {
                role: 'alert',
                className: 'text-red-600 text-xs mt-1',
                children: m.dc,
              }),
          ],
        }),
        T = s.jsxs('div', {
          children: [
            s.jsx('div', {
              className: `text-xs text-wal-blue-600 font-bold mb-1 ${o ? 'sr-only' : ''}`,
              children: '📦 Freight Type',
            }),
            s.jsxs(At, {
              value: e.freightType,
              onValueChange: P => h('freightType', P),
              children: [
                s.jsx(gt, {
                  className: _,
                  'aria-label': `Select Freight Type, current value ${e.freightType}`,
                  children: s.jsx($t, { placeholder: 'Select Type' }),
                }),
                s.jsx(vt, {
                  children: xi.map(P =>
                    s.jsxs(
                      Ke,
                      {
                        value: P,
                        className:
                          'text-base hover:bg-wal-blue-100 focus:bg-wal-blue-100',
                        children: ['📦 ', P],
                      },
                      P
                    )
                  ),
                }),
              ],
            }),
            m.freight &&
              s.jsx('div', {
                role: 'alert',
                className: 'text-red-600 text-xs mt-1',
                children: m.freight,
              }),
          ],
        }),
        I = P => {
          switch (P) {
            case 'Empty':
              return 'bg-gray-100 text-gray-700 border-gray-300'
            case '25%':
              return 'bg-red-100 text-red-700 border-red-300'
            case '50%':
              return 'bg-yellow-100 text-yellow-700 border-yellow-300'
            case '75%':
              return 'bg-blue-100 text-blue-700 border-blue-300'
            case 'Partial':
              return 'bg-orange-100 text-orange-700 border-orange-300'
            case 'Shipload':
              return 'bg-green-100 text-green-700 border-green-300'
            default:
              return _
          }
        },
        R = s.jsxs('div', {
          children: [
            s.jsx('div', {
              className: `text-xs text-wal-blue-600 font-bold mb-1 ${o ? 'sr-only' : ''}`,
              children: '📊 Status',
            }),
            s.jsxs(At, {
              value: e.trailerStatus,
              onValueChange: P => h('trailerStatus', P),
              children: [
                s.jsx(gt, {
                  className: `${e.trailerStatus ? I(e.trailerStatus) : _} font-medium`,
                  'aria-label': `Select Trailer Status, current value ${e.trailerStatus}`,
                  children: s.jsx($t, { placeholder: 'Select Status' }),
                }),
                s.jsx(vt, {
                  children: mm.map(P =>
                    s.jsx(
                      Ke,
                      {
                        value: P.value,
                        className: `${P.colorClass} text-base font-medium`,
                        children: P.label,
                      },
                      P.value
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        L = s.jsxs(od.div, {
          className: 'flex items-center space-x-2',
          whileTap: { scale: 0.95 },
          children: [
            s.jsx(mi, {
              id: `tcr-${e.id}`,
              checked: !!e.tcrPresent,
              onCheckedChange: P => {
                h('tcrPresent', P)
              },
              'aria-labelledby': `tcr-label-${e.id}`,
              'aria-describedby': `tcr-help-${e.id}`,
              className:
                'data-[state=checked]:bg-wal-blue-600 data-[state=checked]:border-wal-blue-600 transition-colors duration-200 border-2',
            }),
            s.jsx(Te, {
              htmlFor: `tcr-${e.id}`,
              id: `tcr-label-${e.id}`,
              className:
                'text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-wal-blue-700',
              children: '📋 TCR Present',
            }),
            s.jsx('p', {
              id: `tcr-help-${e.id}`,
              className: 'sr-only',
              children:
                'Indicates whether a Trailer Condition Report is available for this door',
            }),
          ],
        }),
        V = s.jsxs('div', {
          className: o ? 'flex items-center gap-2' : 'text-center',
          children: [
            s.jsxs('div', {
              className: 'flex flex-col items-center',
              children: [
                s.jsx('span', {
                  className: `font-bold text-wal-blue-700 bg-gradient-to-br from-wal-yellow-400 to-wal-yellow-500 px-3 py-1 rounded-lg shadow-md ${o ? 'text-xl' : 'text-[22px]'}`,
                  children: e.doorNumber,
                }),
                !o &&
                  s.jsx('div', {
                    className: 'text-xs text-wal-blue-600 font-medium mt-1',
                    children: 'Door #',
                  }),
              ],
            }),
            m.doorNumber &&
              s.jsx('div', {
                role: 'alert',
                className: 'text-red-600 text-xs mt-1',
                children: m.doorNumber,
              }),
          ],
        }),
        k = s.jsxs('div', {
          className: `flex items-center gap-1 ${o ? 'justify-end' : 'h-9'}`,
          children: [
            s.jsx(ge, {
              variant: 'ghost',
              size: 'icon',
              className:
                'text-wal-blue-600 hover:text-wal-blue-800 hover:bg-blue-100 h-8 w-8 transition-all duration-200 hover:scale-110',
              onClick: () => i(!l),
              'aria-label': l ? 'Close notes' : 'Open notes',
              children: s.jsx(Gd, { className: 'h-4 w-4' }),
            }),
            s.jsx(ge, {
              variant: 'destructive',
              size: 'icon',
              className:
                'bg-red-500 hover:bg-red-600 text-white h-8 w-8 transition-all duration-200 hover:scale-110 shadow-md',
              onClick: () => t(e.id),
              'aria-label': `Remove door ${e.doorNumber}`,
              children: s.jsx(Ja, { className: 'h-4 w-4' }),
            }),
          ],
        })
      return o
        ? s.jsxs('div', {
            className: `bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-wal-blue-200 shadow-lg hover:shadow-xl p-4 space-y-3 transition-all duration-200 ${n ? 'animate-pulse-bg-blue' : ''}`,
            children: [
              s.jsxs('div', {
                className: 'flex items-center justify-between',
                children: [
                  V,
                  s.jsx('div', {
                    className: 'flex items-center gap-1',
                    children: k,
                  }),
                ],
              }),
              s.jsxs('div', {
                className: 'grid grid-cols-3 gap-3',
                children: [D, T, R],
              }),
              s.jsxs('div', {
                className: 'grid grid-cols-2 gap-3 pt-2',
                children: [C, L],
              }),
              s.jsx(Sh, {
                open: l,
                onOpenChange: i,
                children: s.jsx(Ch, {
                  className: 'mt-2',
                  children: s.jsx(Ls, {
                    value: e.notes ?? '',
                    onChange: P => h('notes', P.target.value),
                    placeholder: 'Add notes...',
                    className: 'w-full text-sm h-20 focus:ring-blue-300',
                    'aria-label': `Notes for door ${e.doorNumber}`,
                  }),
                }),
              }),
            ],
          })
        : s.jsxs(qn, {
            className: `bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-indigo-100 transition-all duration-200 ease-in-out border-b border-wal-blue-100 ${n ? 'animate-pulse-bg-blue' : ''} ${a ? 'py-1' : 'py-2'}`,
            children: [
              s.jsx(lt, {
                className: `font-medium text-center ${a ? 'min-w-[60px] px-2' : 'min-w-[70px] px-3'}`,
                children: V,
              }),
              s.jsx(lt, {
                className: a ? 'min-w-[100px]' : 'min-w-[120px]',
                children: D,
              }),
              s.jsx(lt, { className: 'min-w-[120px]', children: T }),
              s.jsx(lt, { className: 'min-w-[120px]', children: R }),
              s.jsx(lt, {
                className: 'text-center w-[100px] p-1',
                children: C,
              }),
              s.jsx(lt, { className: 'min-w-[100px]', children: L }),
              s.jsx(lt, { className: 'text-right w-[100px]', children: k }),
            ],
          })
    }
  )
function Sr(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  )
}
var fn = { exports: {} }
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ var ta
function vm() {
  return (
    ta ||
      ((ta = 1),
      (function (e, r) {
        ;(function (t) {
          e.exports = t()
        })(function () {
          return (function t(n, o, a) {
            function l(f, m) {
              if (!o[f]) {
                if (!n[f]) {
                  var p = typeof Sr == 'function' && Sr
                  if (!m && p) return p(f, !0)
                  if (i) return i(f, !0)
                  var v = new Error("Cannot find module '" + f + "'")
                  throw ((v.code = 'MODULE_NOT_FOUND'), v)
                }
                var d = (o[f] = { exports: {} })
                n[f][0].call(
                  d.exports,
                  function (x) {
                    var h = n[f][1][x]
                    return l(h || x)
                  },
                  d,
                  d.exports,
                  t,
                  n,
                  o,
                  a
                )
              }
              return o[f].exports
            }
            for (
              var i = typeof Sr == 'function' && Sr, c = 0;
              c < a.length;
              c++
            )
              l(a[c])
            return l
          })(
            {
              1: [
                function (t, n, o) {
                  var a = t('./utils'),
                    l = t('./support'),
                    i =
                      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
                  ;((o.encode = function (c) {
                    for (
                      var f,
                        m,
                        p,
                        v,
                        d,
                        x,
                        h,
                        g = [],
                        w = 0,
                        S = c.length,
                        C = S,
                        _ = a.getTypeOf(c) !== 'string';
                      w < c.length;

                    )
                      ((C = S - w),
                        (p = _
                          ? ((f = c[w++]),
                            (m = w < S ? c[w++] : 0),
                            w < S ? c[w++] : 0)
                          : ((f = c.charCodeAt(w++)),
                            (m = w < S ? c.charCodeAt(w++) : 0),
                            w < S ? c.charCodeAt(w++) : 0)),
                        (v = f >> 2),
                        (d = ((3 & f) << 4) | (m >> 4)),
                        (x = 1 < C ? ((15 & m) << 2) | (p >> 6) : 64),
                        (h = 2 < C ? 63 & p : 64),
                        g.push(
                          i.charAt(v) + i.charAt(d) + i.charAt(x) + i.charAt(h)
                        ))
                    return g.join('')
                  }),
                    (o.decode = function (c) {
                      var f,
                        m,
                        p,
                        v,
                        d,
                        x,
                        h = 0,
                        g = 0,
                        w = 'data:'
                      if (c.substr(0, w.length) === w)
                        throw new Error(
                          'Invalid base64 input, it looks like a data url.'
                        )
                      var S,
                        C =
                          (3 * (c = c.replace(/[^A-Za-z0-9+/=]/g, '')).length) /
                          4
                      if (
                        (c.charAt(c.length - 1) === i.charAt(64) && C--,
                        c.charAt(c.length - 2) === i.charAt(64) && C--,
                        C % 1 != 0)
                      )
                        throw new Error(
                          'Invalid base64 input, bad content length.'
                        )
                      for (
                        S = l.uint8array
                          ? new Uint8Array(0 | C)
                          : new Array(0 | C);
                        h < c.length;

                      )
                        ((f =
                          (i.indexOf(c.charAt(h++)) << 2) |
                          ((v = i.indexOf(c.charAt(h++))) >> 4)),
                          (m =
                            ((15 & v) << 4) |
                            ((d = i.indexOf(c.charAt(h++))) >> 2)),
                          (p = ((3 & d) << 6) | (x = i.indexOf(c.charAt(h++)))),
                          (S[g++] = f),
                          d !== 64 && (S[g++] = m),
                          x !== 64 && (S[g++] = p))
                      return S
                    }))
                },
                { './support': 30, './utils': 32 },
              ],
              2: [
                function (t, n, o) {
                  var a = t('./external'),
                    l = t('./stream/DataWorker'),
                    i = t('./stream/Crc32Probe'),
                    c = t('./stream/DataLengthProbe')
                  function f(m, p, v, d, x) {
                    ;((this.compressedSize = m),
                      (this.uncompressedSize = p),
                      (this.crc32 = v),
                      (this.compression = d),
                      (this.compressedContent = x))
                  }
                  ;((f.prototype = {
                    getContentWorker: function () {
                      var m = new l(a.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new c('data_length')),
                        p = this
                      return (
                        m.on('end', function () {
                          if (
                            this.streamInfo.data_length !== p.uncompressedSize
                          )
                            throw new Error(
                              'Bug : uncompressed data size mismatch'
                            )
                        }),
                        m
                      )
                    },
                    getCompressedWorker: function () {
                      return new l(a.Promise.resolve(this.compressedContent))
                        .withStreamInfo('compressedSize', this.compressedSize)
                        .withStreamInfo(
                          'uncompressedSize',
                          this.uncompressedSize
                        )
                        .withStreamInfo('crc32', this.crc32)
                        .withStreamInfo('compression', this.compression)
                    },
                  }),
                    (f.createWorkerFrom = function (m, p, v) {
                      return m
                        .pipe(new i())
                        .pipe(new c('uncompressedSize'))
                        .pipe(p.compressWorker(v))
                        .pipe(new c('compressedSize'))
                        .withStreamInfo('compression', p)
                    }),
                    (n.exports = f))
                },
                {
                  './external': 6,
                  './stream/Crc32Probe': 25,
                  './stream/DataLengthProbe': 26,
                  './stream/DataWorker': 27,
                },
              ],
              3: [
                function (t, n, o) {
                  var a = t('./stream/GenericWorker')
                  ;((o.STORE = {
                    magic: '\0\0',
                    compressWorker: function () {
                      return new a('STORE compression')
                    },
                    uncompressWorker: function () {
                      return new a('STORE decompression')
                    },
                  }),
                    (o.DEFLATE = t('./flate')))
                },
                { './flate': 7, './stream/GenericWorker': 28 },
              ],
              4: [
                function (t, n, o) {
                  var a = t('./utils'),
                    l = (function () {
                      for (var i, c = [], f = 0; f < 256; f++) {
                        i = f
                        for (var m = 0; m < 8; m++)
                          i = 1 & i ? 3988292384 ^ (i >>> 1) : i >>> 1
                        c[f] = i
                      }
                      return c
                    })()
                  n.exports = function (i, c) {
                    return i !== void 0 && i.length
                      ? a.getTypeOf(i) !== 'string'
                        ? (function (f, m, p, v) {
                            var d = l,
                              x = v + p
                            f ^= -1
                            for (var h = v; h < x; h++)
                              f = (f >>> 8) ^ d[255 & (f ^ m[h])]
                            return -1 ^ f
                          })(0 | c, i, i.length, 0)
                        : (function (f, m, p, v) {
                            var d = l,
                              x = v + p
                            f ^= -1
                            for (var h = v; h < x; h++)
                              f = (f >>> 8) ^ d[255 & (f ^ m.charCodeAt(h))]
                            return -1 ^ f
                          })(0 | c, i, i.length, 0)
                      : 0
                  }
                },
                { './utils': 32 },
              ],
              5: [
                function (t, n, o) {
                  ;((o.base64 = !1),
                    (o.binary = !1),
                    (o.dir = !1),
                    (o.createFolders = !0),
                    (o.date = null),
                    (o.compression = null),
                    (o.compressionOptions = null),
                    (o.comment = null),
                    (o.unixPermissions = null),
                    (o.dosPermissions = null))
                },
                {},
              ],
              6: [
                function (t, n, o) {
                  var a = null
                  ;((a = typeof Promise < 'u' ? Promise : t('lie')),
                    (n.exports = { Promise: a }))
                },
                { lie: 37 },
              ],
              7: [
                function (t, n, o) {
                  var a =
                      typeof Uint8Array < 'u' &&
                      typeof Uint16Array < 'u' &&
                      typeof Uint32Array < 'u',
                    l = t('pako'),
                    i = t('./utils'),
                    c = t('./stream/GenericWorker'),
                    f = a ? 'uint8array' : 'array'
                  function m(p, v) {
                    ;(c.call(this, 'FlateWorker/' + p),
                      (this._pako = null),
                      (this._pakoAction = p),
                      (this._pakoOptions = v),
                      (this.meta = {}))
                  }
                  ;((o.magic = '\b\0'),
                    i.inherits(m, c),
                    (m.prototype.processChunk = function (p) {
                      ;((this.meta = p.meta),
                        this._pako === null && this._createPako(),
                        this._pako.push(i.transformTo(f, p.data), !1))
                    }),
                    (m.prototype.flush = function () {
                      ;(c.prototype.flush.call(this),
                        this._pako === null && this._createPako(),
                        this._pako.push([], !0))
                    }),
                    (m.prototype.cleanUp = function () {
                      ;(c.prototype.cleanUp.call(this), (this._pako = null))
                    }),
                    (m.prototype._createPako = function () {
                      this._pako = new l[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1,
                      })
                      var p = this
                      this._pako.onData = function (v) {
                        p.push({ data: v, meta: p.meta })
                      }
                    }),
                    (o.compressWorker = function (p) {
                      return new m('Deflate', p)
                    }),
                    (o.uncompressWorker = function () {
                      return new m('Inflate', {})
                    }))
                },
                { './stream/GenericWorker': 28, './utils': 32, pako: 38 },
              ],
              8: [
                function (t, n, o) {
                  function a(d, x) {
                    var h,
                      g = ''
                    for (h = 0; h < x; h++)
                      ((g += String.fromCharCode(255 & d)), (d >>>= 8))
                    return g
                  }
                  function l(d, x, h, g, w, S) {
                    var C,
                      _,
                      E = d.file,
                      D = d.compression,
                      T = S !== f.utf8encode,
                      I = i.transformTo('string', S(E.name)),
                      R = i.transformTo('string', f.utf8encode(E.name)),
                      L = E.comment,
                      V = i.transformTo('string', S(L)),
                      k = i.transformTo('string', f.utf8encode(L)),
                      P = R.length !== E.name.length,
                      b = k.length !== L.length,
                      M = '',
                      K = '',
                      U = '',
                      re = E.dir,
                      $ = E.date,
                      ee = { crc32: 0, compressedSize: 0, uncompressedSize: 0 }
                    ;(x && !h) ||
                      ((ee.crc32 = d.crc32),
                      (ee.compressedSize = d.compressedSize),
                      (ee.uncompressedSize = d.uncompressedSize))
                    var F = 0
                    ;(x && (F |= 8), T || (!P && !b) || (F |= 2048))
                    var A = 0,
                      q = 0
                    ;(re && (A |= 16),
                      w === 'UNIX'
                        ? ((q = 798),
                          (A |= (function (Z, fe) {
                            var Q = Z
                            return (
                              Z || (Q = fe ? 16893 : 33204),
                              (65535 & Q) << 16
                            )
                          })(E.unixPermissions, re)))
                        : ((q = 20),
                          (A |= (function (Z) {
                            return 63 & (Z || 0)
                          })(E.dosPermissions))),
                      (C = $.getUTCHours()),
                      (C <<= 6),
                      (C |= $.getUTCMinutes()),
                      (C <<= 5),
                      (C |= $.getUTCSeconds() / 2),
                      (_ = $.getUTCFullYear() - 1980),
                      (_ <<= 4),
                      (_ |= $.getUTCMonth() + 1),
                      (_ <<= 5),
                      (_ |= $.getUTCDate()),
                      P &&
                        ((K = a(1, 1) + a(m(I), 4) + R),
                        (M += 'up' + a(K.length, 2) + K)),
                      b &&
                        ((U = a(1, 1) + a(m(V), 4) + k),
                        (M += 'uc' + a(U.length, 2) + U)))
                    var G = ''
                    return (
                      (G += `
\0`),
                      (G += a(F, 2)),
                      (G += D.magic),
                      (G += a(C, 2)),
                      (G += a(_, 2)),
                      (G += a(ee.crc32, 4)),
                      (G += a(ee.compressedSize, 4)),
                      (G += a(ee.uncompressedSize, 4)),
                      (G += a(I.length, 2)),
                      (G += a(M.length, 2)),
                      {
                        fileRecord: p.LOCAL_FILE_HEADER + G + I + M,
                        dirRecord:
                          p.CENTRAL_FILE_HEADER +
                          a(q, 2) +
                          G +
                          a(V.length, 2) +
                          '\0\0\0\0' +
                          a(A, 4) +
                          a(g, 4) +
                          I +
                          M +
                          V,
                      }
                    )
                  }
                  var i = t('../utils'),
                    c = t('../stream/GenericWorker'),
                    f = t('../utf8'),
                    m = t('../crc32'),
                    p = t('../signature')
                  function v(d, x, h, g) {
                    ;(c.call(this, 'ZipFileWorker'),
                      (this.bytesWritten = 0),
                      (this.zipComment = x),
                      (this.zipPlatform = h),
                      (this.encodeFileName = g),
                      (this.streamFiles = d),
                      (this.accumulate = !1),
                      (this.contentBuffer = []),
                      (this.dirRecords = []),
                      (this.currentSourceOffset = 0),
                      (this.entriesCount = 0),
                      (this.currentFile = null),
                      (this._sources = []))
                  }
                  ;(i.inherits(v, c),
                    (v.prototype.push = function (d) {
                      var x = d.meta.percent || 0,
                        h = this.entriesCount,
                        g = this._sources.length
                      this.accumulate
                        ? this.contentBuffer.push(d)
                        : ((this.bytesWritten += d.data.length),
                          c.prototype.push.call(this, {
                            data: d.data,
                            meta: {
                              currentFile: this.currentFile,
                              percent: h ? (x + 100 * (h - g - 1)) / h : 100,
                            },
                          }))
                    }),
                    (v.prototype.openedSource = function (d) {
                      ;((this.currentSourceOffset = this.bytesWritten),
                        (this.currentFile = d.file.name))
                      var x = this.streamFiles && !d.file.dir
                      if (x) {
                        var h = l(
                          d,
                          x,
                          !1,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName
                        )
                        this.push({ data: h.fileRecord, meta: { percent: 0 } })
                      } else this.accumulate = !0
                    }),
                    (v.prototype.closedSource = function (d) {
                      this.accumulate = !1
                      var x = this.streamFiles && !d.file.dir,
                        h = l(
                          d,
                          x,
                          !0,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName
                        )
                      if ((this.dirRecords.push(h.dirRecord), x))
                        this.push({
                          data: (function (g) {
                            return (
                              p.DATA_DESCRIPTOR +
                              a(g.crc32, 4) +
                              a(g.compressedSize, 4) +
                              a(g.uncompressedSize, 4)
                            )
                          })(d),
                          meta: { percent: 100 },
                        })
                      else
                        for (
                          this.push({
                            data: h.fileRecord,
                            meta: { percent: 0 },
                          });
                          this.contentBuffer.length;

                        )
                          this.push(this.contentBuffer.shift())
                      this.currentFile = null
                    }),
                    (v.prototype.flush = function () {
                      for (
                        var d = this.bytesWritten, x = 0;
                        x < this.dirRecords.length;
                        x++
                      )
                        this.push({
                          data: this.dirRecords[x],
                          meta: { percent: 100 },
                        })
                      var h = this.bytesWritten - d,
                        g = (function (w, S, C, _, E) {
                          var D = i.transformTo('string', E(_))
                          return (
                            p.CENTRAL_DIRECTORY_END +
                            '\0\0\0\0' +
                            a(w, 2) +
                            a(w, 2) +
                            a(S, 4) +
                            a(C, 4) +
                            a(D.length, 2) +
                            D
                          )
                        })(
                          this.dirRecords.length,
                          h,
                          d,
                          this.zipComment,
                          this.encodeFileName
                        )
                      this.push({ data: g, meta: { percent: 100 } })
                    }),
                    (v.prototype.prepareNextSource = function () {
                      ;((this.previous = this._sources.shift()),
                        this.openedSource(this.previous.streamInfo),
                        this.isPaused
                          ? this.previous.pause()
                          : this.previous.resume())
                    }),
                    (v.prototype.registerPrevious = function (d) {
                      this._sources.push(d)
                      var x = this
                      return (
                        d.on('data', function (h) {
                          x.processChunk(h)
                        }),
                        d.on('end', function () {
                          ;(x.closedSource(x.previous.streamInfo),
                            x._sources.length ? x.prepareNextSource() : x.end())
                        }),
                        d.on('error', function (h) {
                          x.error(h)
                        }),
                        this
                      )
                    }),
                    (v.prototype.resume = function () {
                      return (
                        !!c.prototype.resume.call(this) &&
                        (!this.previous && this._sources.length
                          ? (this.prepareNextSource(), !0)
                          : this.previous ||
                              this._sources.length ||
                              this.generatedError
                            ? void 0
                            : (this.end(), !0))
                      )
                    }),
                    (v.prototype.error = function (d) {
                      var x = this._sources
                      if (!c.prototype.error.call(this, d)) return !1
                      for (var h = 0; h < x.length; h++)
                        try {
                          x[h].error(d)
                        } catch {}
                      return !0
                    }),
                    (v.prototype.lock = function () {
                      c.prototype.lock.call(this)
                      for (var d = this._sources, x = 0; x < d.length; x++)
                        d[x].lock()
                    }),
                    (n.exports = v))
                },
                {
                  '../crc32': 4,
                  '../signature': 23,
                  '../stream/GenericWorker': 28,
                  '../utf8': 31,
                  '../utils': 32,
                },
              ],
              9: [
                function (t, n, o) {
                  var a = t('../compressions'),
                    l = t('./ZipFileWorker')
                  o.generateWorker = function (i, c, f) {
                    var m = new l(
                        c.streamFiles,
                        f,
                        c.platform,
                        c.encodeFileName
                      ),
                      p = 0
                    try {
                      ;(i.forEach(function (v, d) {
                        p++
                        var x = (function (S, C) {
                            var _ = S || C,
                              E = a[_]
                            if (!E)
                              throw new Error(
                                _ + ' is not a valid compression method !'
                              )
                            return E
                          })(d.options.compression, c.compression),
                          h =
                            d.options.compressionOptions ||
                            c.compressionOptions ||
                            {},
                          g = d.dir,
                          w = d.date
                        d._compressWorker(x, h)
                          .withStreamInfo('file', {
                            name: v,
                            dir: g,
                            date: w,
                            comment: d.comment || '',
                            unixPermissions: d.unixPermissions,
                            dosPermissions: d.dosPermissions,
                          })
                          .pipe(m)
                      }),
                        (m.entriesCount = p))
                    } catch (v) {
                      m.error(v)
                    }
                    return m
                  }
                },
                { '../compressions': 3, './ZipFileWorker': 8 },
              ],
              10: [
                function (t, n, o) {
                  function a() {
                    if (!(this instanceof a)) return new a()
                    if (arguments.length)
                      throw new Error(
                        'The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.'
                      )
                    ;((this.files = Object.create(null)),
                      (this.comment = null),
                      (this.root = ''),
                      (this.clone = function () {
                        var l = new a()
                        for (var i in this)
                          typeof this[i] != 'function' && (l[i] = this[i])
                        return l
                      }))
                  }
                  ;(((a.prototype = t('./object')).loadAsync = t('./load')),
                    (a.support = t('./support')),
                    (a.defaults = t('./defaults')),
                    (a.version = '3.10.1'),
                    (a.loadAsync = function (l, i) {
                      return new a().loadAsync(l, i)
                    }),
                    (a.external = t('./external')),
                    (n.exports = a))
                },
                {
                  './defaults': 5,
                  './external': 6,
                  './load': 11,
                  './object': 15,
                  './support': 30,
                },
              ],
              11: [
                function (t, n, o) {
                  var a = t('./utils'),
                    l = t('./external'),
                    i = t('./utf8'),
                    c = t('./zipEntries'),
                    f = t('./stream/Crc32Probe'),
                    m = t('./nodejsUtils')
                  function p(v) {
                    return new l.Promise(function (d, x) {
                      var h = v.decompressed.getContentWorker().pipe(new f())
                      h.on('error', function (g) {
                        x(g)
                      })
                        .on('end', function () {
                          h.streamInfo.crc32 !== v.decompressed.crc32
                            ? x(new Error('Corrupted zip : CRC32 mismatch'))
                            : d()
                        })
                        .resume()
                    })
                  }
                  n.exports = function (v, d) {
                    var x = this
                    return (
                      (d = a.extend(d || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: i.utf8decode,
                      })),
                      m.isNode && m.isStream(v)
                        ? l.Promise.reject(
                            new Error(
                              "JSZip can't accept a stream when loading a zip file."
                            )
                          )
                        : a
                            .prepareContent(
                              'the loaded zip file',
                              v,
                              !0,
                              d.optimizedBinaryString,
                              d.base64
                            )
                            .then(function (h) {
                              var g = new c(d)
                              return (g.load(h), g)
                            })
                            .then(function (h) {
                              var g = [l.Promise.resolve(h)],
                                w = h.files
                              if (d.checkCRC32)
                                for (var S = 0; S < w.length; S++)
                                  g.push(p(w[S]))
                              return l.Promise.all(g)
                            })
                            .then(function (h) {
                              for (
                                var g = h.shift(), w = g.files, S = 0;
                                S < w.length;
                                S++
                              ) {
                                var C = w[S],
                                  _ = C.fileNameStr,
                                  E = a.resolve(C.fileNameStr)
                                ;(x.file(E, C.decompressed, {
                                  binary: !0,
                                  optimizedBinaryString: !0,
                                  date: C.date,
                                  dir: C.dir,
                                  comment: C.fileCommentStr.length
                                    ? C.fileCommentStr
                                    : null,
                                  unixPermissions: C.unixPermissions,
                                  dosPermissions: C.dosPermissions,
                                  createFolders: d.createFolders,
                                }),
                                  C.dir || (x.file(E).unsafeOriginalName = _))
                              }
                              return (
                                g.zipComment.length &&
                                  (x.comment = g.zipComment),
                                x
                              )
                            })
                    )
                  }
                },
                {
                  './external': 6,
                  './nodejsUtils': 14,
                  './stream/Crc32Probe': 25,
                  './utf8': 31,
                  './utils': 32,
                  './zipEntries': 33,
                },
              ],
              12: [
                function (t, n, o) {
                  var a = t('../utils'),
                    l = t('../stream/GenericWorker')
                  function i(c, f) {
                    ;(l.call(this, 'Nodejs stream input adapter for ' + c),
                      (this._upstreamEnded = !1),
                      this._bindStream(f))
                  }
                  ;(a.inherits(i, l),
                    (i.prototype._bindStream = function (c) {
                      var f = this
                      ;((this._stream = c).pause(),
                        c
                          .on('data', function (m) {
                            f.push({ data: m, meta: { percent: 0 } })
                          })
                          .on('error', function (m) {
                            f.isPaused ? (this.generatedError = m) : f.error(m)
                          })
                          .on('end', function () {
                            f.isPaused ? (f._upstreamEnded = !0) : f.end()
                          }))
                    }),
                    (i.prototype.pause = function () {
                      return (
                        !!l.prototype.pause.call(this) &&
                        (this._stream.pause(), !0)
                      )
                    }),
                    (i.prototype.resume = function () {
                      return (
                        !!l.prototype.resume.call(this) &&
                        (this._upstreamEnded
                          ? this.end()
                          : this._stream.resume(),
                        !0)
                      )
                    }),
                    (n.exports = i))
                },
                { '../stream/GenericWorker': 28, '../utils': 32 },
              ],
              13: [
                function (t, n, o) {
                  var a = t('readable-stream').Readable
                  function l(i, c, f) {
                    ;(a.call(this, c), (this._helper = i))
                    var m = this
                    i.on('data', function (p, v) {
                      ;(m.push(p) || m._helper.pause(), f && f(v))
                    })
                      .on('error', function (p) {
                        m.emit('error', p)
                      })
                      .on('end', function () {
                        m.push(null)
                      })
                  }
                  ;(t('../utils').inherits(l, a),
                    (l.prototype._read = function () {
                      this._helper.resume()
                    }),
                    (n.exports = l))
                },
                { '../utils': 32, 'readable-stream': 16 },
              ],
              14: [
                function (t, n, o) {
                  n.exports = {
                    isNode: typeof Buffer < 'u',
                    newBufferFrom: function (a, l) {
                      if (Buffer.from && Buffer.from !== Uint8Array.from)
                        return Buffer.from(a, l)
                      if (typeof a == 'number')
                        throw new Error(
                          'The "data" argument must not be a number'
                        )
                      return new Buffer(a, l)
                    },
                    allocBuffer: function (a) {
                      if (Buffer.alloc) return Buffer.alloc(a)
                      var l = new Buffer(a)
                      return (l.fill(0), l)
                    },
                    isBuffer: function (a) {
                      return Buffer.isBuffer(a)
                    },
                    isStream: function (a) {
                      return (
                        a &&
                        typeof a.on == 'function' &&
                        typeof a.pause == 'function' &&
                        typeof a.resume == 'function'
                      )
                    },
                  }
                },
                {},
              ],
              15: [
                function (t, n, o) {
                  function a(E, D, T) {
                    var I,
                      R = i.getTypeOf(D),
                      L = i.extend(T || {}, m)
                    ;((L.date = L.date || new Date()),
                      L.compression !== null &&
                        (L.compression = L.compression.toUpperCase()),
                      typeof L.unixPermissions == 'string' &&
                        (L.unixPermissions = parseInt(L.unixPermissions, 8)),
                      L.unixPermissions &&
                        16384 & L.unixPermissions &&
                        (L.dir = !0),
                      L.dosPermissions && 16 & L.dosPermissions && (L.dir = !0),
                      L.dir && (E = w(E)),
                      L.createFolders && (I = g(E)) && S.call(this, I, !0))
                    var V = R === 'string' && L.binary === !1 && L.base64 === !1
                    ;((T && T.binary !== void 0) || (L.binary = !V),
                      ((D instanceof p && D.uncompressedSize === 0) ||
                        L.dir ||
                        !D ||
                        D.length === 0) &&
                        ((L.base64 = !1),
                        (L.binary = !0),
                        (D = ''),
                        (L.compression = 'STORE'),
                        (R = 'string')))
                    var k = null
                    k =
                      D instanceof p || D instanceof c
                        ? D
                        : x.isNode && x.isStream(D)
                          ? new h(E, D)
                          : i.prepareContent(
                              E,
                              D,
                              L.binary,
                              L.optimizedBinaryString,
                              L.base64
                            )
                    var P = new v(E, k, L)
                    this.files[E] = P
                  }
                  var l = t('./utf8'),
                    i = t('./utils'),
                    c = t('./stream/GenericWorker'),
                    f = t('./stream/StreamHelper'),
                    m = t('./defaults'),
                    p = t('./compressedObject'),
                    v = t('./zipObject'),
                    d = t('./generate'),
                    x = t('./nodejsUtils'),
                    h = t('./nodejs/NodejsStreamInputAdapter'),
                    g = function (E) {
                      E.slice(-1) === '/' && (E = E.substring(0, E.length - 1))
                      var D = E.lastIndexOf('/')
                      return 0 < D ? E.substring(0, D) : ''
                    },
                    w = function (E) {
                      return (E.slice(-1) !== '/' && (E += '/'), E)
                    },
                    S = function (E, D) {
                      return (
                        (D = D !== void 0 ? D : m.createFolders),
                        (E = w(E)),
                        this.files[E] ||
                          a.call(this, E, null, { dir: !0, createFolders: D }),
                        this.files[E]
                      )
                    }
                  function C(E) {
                    return (
                      Object.prototype.toString.call(E) === '[object RegExp]'
                    )
                  }
                  var _ = {
                    load: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.'
                      )
                    },
                    forEach: function (E) {
                      var D, T, I
                      for (D in this.files)
                        ((I = this.files[D]),
                          (T = D.slice(this.root.length, D.length)) &&
                            D.slice(0, this.root.length) === this.root &&
                            E(T, I))
                    },
                    filter: function (E) {
                      var D = []
                      return (
                        this.forEach(function (T, I) {
                          E(T, I) && D.push(I)
                        }),
                        D
                      )
                    },
                    file: function (E, D, T) {
                      if (arguments.length !== 1)
                        return (
                          (E = this.root + E),
                          a.call(this, E, D, T),
                          this
                        )
                      if (C(E)) {
                        var I = E
                        return this.filter(function (L, V) {
                          return !V.dir && I.test(L)
                        })
                      }
                      var R = this.files[this.root + E]
                      return R && !R.dir ? R : null
                    },
                    folder: function (E) {
                      if (!E) return this
                      if (C(E))
                        return this.filter(function (R, L) {
                          return L.dir && E.test(R)
                        })
                      var D = this.root + E,
                        T = S.call(this, D),
                        I = this.clone()
                      return ((I.root = T.name), I)
                    },
                    remove: function (E) {
                      E = this.root + E
                      var D = this.files[E]
                      if (
                        (D ||
                          (E.slice(-1) !== '/' && (E += '/'),
                          (D = this.files[E])),
                        D && !D.dir)
                      )
                        delete this.files[E]
                      else
                        for (
                          var T = this.filter(function (R, L) {
                              return L.name.slice(0, E.length) === E
                            }),
                            I = 0;
                          I < T.length;
                          I++
                        )
                          delete this.files[T[I].name]
                      return this
                    },
                    generate: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.'
                      )
                    },
                    generateInternalStream: function (E) {
                      var D,
                        T = {}
                      try {
                        if (
                          (((T = i.extend(E || {}, {
                            streamFiles: !1,
                            compression: 'STORE',
                            compressionOptions: null,
                            type: '',
                            platform: 'DOS',
                            comment: null,
                            mimeType: 'application/zip',
                            encodeFileName: l.utf8encode,
                          })).type = T.type.toLowerCase()),
                          (T.compression = T.compression.toUpperCase()),
                          T.type === 'binarystring' && (T.type = 'string'),
                          !T.type)
                        )
                          throw new Error('No output type specified.')
                        ;(i.checkSupport(T.type),
                          (T.platform !== 'darwin' &&
                            T.platform !== 'freebsd' &&
                            T.platform !== 'linux' &&
                            T.platform !== 'sunos') ||
                            (T.platform = 'UNIX'),
                          T.platform === 'win32' && (T.platform = 'DOS'))
                        var I = T.comment || this.comment || ''
                        D = d.generateWorker(this, T, I)
                      } catch (R) {
                        ;(D = new c('error')).error(R)
                      }
                      return new f(D, T.type || 'string', T.mimeType)
                    },
                    generateAsync: function (E, D) {
                      return this.generateInternalStream(E).accumulate(D)
                    },
                    generateNodeStream: function (E, D) {
                      return (
                        (E = E || {}).type || (E.type = 'nodebuffer'),
                        this.generateInternalStream(E).toNodejsStream(D)
                      )
                    },
                  }
                  n.exports = _
                },
                {
                  './compressedObject': 2,
                  './defaults': 5,
                  './generate': 9,
                  './nodejs/NodejsStreamInputAdapter': 12,
                  './nodejsUtils': 14,
                  './stream/GenericWorker': 28,
                  './stream/StreamHelper': 29,
                  './utf8': 31,
                  './utils': 32,
                  './zipObject': 35,
                },
              ],
              16: [
                function (t, n, o) {
                  n.exports = t('stream')
                },
                { stream: void 0 },
              ],
              17: [
                function (t, n, o) {
                  var a = t('./DataReader')
                  function l(i) {
                    a.call(this, i)
                    for (var c = 0; c < this.data.length; c++) i[c] = 255 & i[c]
                  }
                  ;(t('../utils').inherits(l, a),
                    (l.prototype.byteAt = function (i) {
                      return this.data[this.zero + i]
                    }),
                    (l.prototype.lastIndexOfSignature = function (i) {
                      for (
                        var c = i.charCodeAt(0),
                          f = i.charCodeAt(1),
                          m = i.charCodeAt(2),
                          p = i.charCodeAt(3),
                          v = this.length - 4;
                        0 <= v;
                        --v
                      )
                        if (
                          this.data[v] === c &&
                          this.data[v + 1] === f &&
                          this.data[v + 2] === m &&
                          this.data[v + 3] === p
                        )
                          return v - this.zero
                      return -1
                    }),
                    (l.prototype.readAndCheckSignature = function (i) {
                      var c = i.charCodeAt(0),
                        f = i.charCodeAt(1),
                        m = i.charCodeAt(2),
                        p = i.charCodeAt(3),
                        v = this.readData(4)
                      return (
                        c === v[0] && f === v[1] && m === v[2] && p === v[3]
                      )
                    }),
                    (l.prototype.readData = function (i) {
                      if ((this.checkOffset(i), i === 0)) return []
                      var c = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + i
                      )
                      return ((this.index += i), c)
                    }),
                    (n.exports = l))
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              18: [
                function (t, n, o) {
                  var a = t('../utils')
                  function l(i) {
                    ;((this.data = i),
                      (this.length = i.length),
                      (this.index = 0),
                      (this.zero = 0))
                  }
                  ;((l.prototype = {
                    checkOffset: function (i) {
                      this.checkIndex(this.index + i)
                    },
                    checkIndex: function (i) {
                      if (this.length < this.zero + i || i < 0)
                        throw new Error(
                          'End of data reached (data length = ' +
                            this.length +
                            ', asked index = ' +
                            i +
                            '). Corrupted zip ?'
                        )
                    },
                    setIndex: function (i) {
                      ;(this.checkIndex(i), (this.index = i))
                    },
                    skip: function (i) {
                      this.setIndex(this.index + i)
                    },
                    byteAt: function () {},
                    readInt: function (i) {
                      var c,
                        f = 0
                      for (
                        this.checkOffset(i), c = this.index + i - 1;
                        c >= this.index;
                        c--
                      )
                        f = (f << 8) + this.byteAt(c)
                      return ((this.index += i), f)
                    },
                    readString: function (i) {
                      return a.transformTo('string', this.readData(i))
                    },
                    readData: function () {},
                    lastIndexOfSignature: function () {},
                    readAndCheckSignature: function () {},
                    readDate: function () {
                      var i = this.readInt(4)
                      return new Date(
                        Date.UTC(
                          1980 + ((i >> 25) & 127),
                          ((i >> 21) & 15) - 1,
                          (i >> 16) & 31,
                          (i >> 11) & 31,
                          (i >> 5) & 63,
                          (31 & i) << 1
                        )
                      )
                    },
                  }),
                    (n.exports = l))
                },
                { '../utils': 32 },
              ],
              19: [
                function (t, n, o) {
                  var a = t('./Uint8ArrayReader')
                  function l(i) {
                    a.call(this, i)
                  }
                  ;(t('../utils').inherits(l, a),
                    (l.prototype.readData = function (i) {
                      this.checkOffset(i)
                      var c = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + i
                      )
                      return ((this.index += i), c)
                    }),
                    (n.exports = l))
                },
                { '../utils': 32, './Uint8ArrayReader': 21 },
              ],
              20: [
                function (t, n, o) {
                  var a = t('./DataReader')
                  function l(i) {
                    a.call(this, i)
                  }
                  ;(t('../utils').inherits(l, a),
                    (l.prototype.byteAt = function (i) {
                      return this.data.charCodeAt(this.zero + i)
                    }),
                    (l.prototype.lastIndexOfSignature = function (i) {
                      return this.data.lastIndexOf(i) - this.zero
                    }),
                    (l.prototype.readAndCheckSignature = function (i) {
                      return i === this.readData(4)
                    }),
                    (l.prototype.readData = function (i) {
                      this.checkOffset(i)
                      var c = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + i
                      )
                      return ((this.index += i), c)
                    }),
                    (n.exports = l))
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              21: [
                function (t, n, o) {
                  var a = t('./ArrayReader')
                  function l(i) {
                    a.call(this, i)
                  }
                  ;(t('../utils').inherits(l, a),
                    (l.prototype.readData = function (i) {
                      if ((this.checkOffset(i), i === 0))
                        return new Uint8Array(0)
                      var c = this.data.subarray(
                        this.zero + this.index,
                        this.zero + this.index + i
                      )
                      return ((this.index += i), c)
                    }),
                    (n.exports = l))
                },
                { '../utils': 32, './ArrayReader': 17 },
              ],
              22: [
                function (t, n, o) {
                  var a = t('../utils'),
                    l = t('../support'),
                    i = t('./ArrayReader'),
                    c = t('./StringReader'),
                    f = t('./NodeBufferReader'),
                    m = t('./Uint8ArrayReader')
                  n.exports = function (p) {
                    var v = a.getTypeOf(p)
                    return (
                      a.checkSupport(v),
                      v !== 'string' || l.uint8array
                        ? v === 'nodebuffer'
                          ? new f(p)
                          : l.uint8array
                            ? new m(a.transformTo('uint8array', p))
                            : new i(a.transformTo('array', p))
                        : new c(p)
                    )
                  }
                },
                {
                  '../support': 30,
                  '../utils': 32,
                  './ArrayReader': 17,
                  './NodeBufferReader': 19,
                  './StringReader': 20,
                  './Uint8ArrayReader': 21,
                },
              ],
              23: [
                function (t, n, o) {
                  ;((o.LOCAL_FILE_HEADER = 'PK'),
                    (o.CENTRAL_FILE_HEADER = 'PK'),
                    (o.CENTRAL_DIRECTORY_END = 'PK'),
                    (o.ZIP64_CENTRAL_DIRECTORY_LOCATOR = 'PK\x07'),
                    (o.ZIP64_CENTRAL_DIRECTORY_END = 'PK'),
                    (o.DATA_DESCRIPTOR = 'PK\x07\b'))
                },
                {},
              ],
              24: [
                function (t, n, o) {
                  var a = t('./GenericWorker'),
                    l = t('../utils')
                  function i(c) {
                    ;(a.call(this, 'ConvertWorker to ' + c),
                      (this.destType = c))
                  }
                  ;(l.inherits(i, a),
                    (i.prototype.processChunk = function (c) {
                      this.push({
                        data: l.transformTo(this.destType, c.data),
                        meta: c.meta,
                      })
                    }),
                    (n.exports = i))
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              25: [
                function (t, n, o) {
                  var a = t('./GenericWorker'),
                    l = t('../crc32')
                  function i() {
                    ;(a.call(this, 'Crc32Probe'),
                      this.withStreamInfo('crc32', 0))
                  }
                  ;(t('../utils').inherits(i, a),
                    (i.prototype.processChunk = function (c) {
                      ;((this.streamInfo.crc32 = l(
                        c.data,
                        this.streamInfo.crc32 || 0
                      )),
                        this.push(c))
                    }),
                    (n.exports = i))
                },
                { '../crc32': 4, '../utils': 32, './GenericWorker': 28 },
              ],
              26: [
                function (t, n, o) {
                  var a = t('../utils'),
                    l = t('./GenericWorker')
                  function i(c) {
                    ;(l.call(this, 'DataLengthProbe for ' + c),
                      (this.propName = c),
                      this.withStreamInfo(c, 0))
                  }
                  ;(a.inherits(i, l),
                    (i.prototype.processChunk = function (c) {
                      if (c) {
                        var f = this.streamInfo[this.propName] || 0
                        this.streamInfo[this.propName] = f + c.data.length
                      }
                      l.prototype.processChunk.call(this, c)
                    }),
                    (n.exports = i))
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              27: [
                function (t, n, o) {
                  var a = t('../utils'),
                    l = t('./GenericWorker')
                  function i(c) {
                    l.call(this, 'DataWorker')
                    var f = this
                    ;((this.dataIsReady = !1),
                      (this.index = 0),
                      (this.max = 0),
                      (this.data = null),
                      (this.type = ''),
                      (this._tickScheduled = !1),
                      c.then(
                        function (m) {
                          ;((f.dataIsReady = !0),
                            (f.data = m),
                            (f.max = (m && m.length) || 0),
                            (f.type = a.getTypeOf(m)),
                            f.isPaused || f._tickAndRepeat())
                        },
                        function (m) {
                          f.error(m)
                        }
                      ))
                  }
                  ;(a.inherits(i, l),
                    (i.prototype.cleanUp = function () {
                      ;(l.prototype.cleanUp.call(this), (this.data = null))
                    }),
                    (i.prototype.resume = function () {
                      return (
                        !!l.prototype.resume.call(this) &&
                        (!this._tickScheduled &&
                          this.dataIsReady &&
                          ((this._tickScheduled = !0),
                          a.delay(this._tickAndRepeat, [], this)),
                        !0)
                      )
                    }),
                    (i.prototype._tickAndRepeat = function () {
                      ;((this._tickScheduled = !1),
                        this.isPaused ||
                          this.isFinished ||
                          (this._tick(),
                          this.isFinished ||
                            (a.delay(this._tickAndRepeat, [], this),
                            (this._tickScheduled = !0))))
                    }),
                    (i.prototype._tick = function () {
                      if (this.isPaused || this.isFinished) return !1
                      var c = null,
                        f = Math.min(this.max, this.index + 16384)
                      if (this.index >= this.max) return this.end()
                      switch (this.type) {
                        case 'string':
                          c = this.data.substring(this.index, f)
                          break
                        case 'uint8array':
                          c = this.data.subarray(this.index, f)
                          break
                        case 'array':
                        case 'nodebuffer':
                          c = this.data.slice(this.index, f)
                      }
                      return (
                        (this.index = f),
                        this.push({
                          data: c,
                          meta: {
                            percent: this.max
                              ? (this.index / this.max) * 100
                              : 0,
                          },
                        })
                      )
                    }),
                    (n.exports = i))
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              28: [
                function (t, n, o) {
                  function a(l) {
                    ;((this.name = l || 'default'),
                      (this.streamInfo = {}),
                      (this.generatedError = null),
                      (this.extraStreamInfo = {}),
                      (this.isPaused = !0),
                      (this.isFinished = !1),
                      (this.isLocked = !1),
                      (this._listeners = { data: [], end: [], error: [] }),
                      (this.previous = null))
                  }
                  ;((a.prototype = {
                    push: function (l) {
                      this.emit('data', l)
                    },
                    end: function () {
                      if (this.isFinished) return !1
                      this.flush()
                      try {
                        ;(this.emit('end'),
                          this.cleanUp(),
                          (this.isFinished = !0))
                      } catch (l) {
                        this.emit('error', l)
                      }
                      return !0
                    },
                    error: function (l) {
                      return (
                        !this.isFinished &&
                        (this.isPaused
                          ? (this.generatedError = l)
                          : ((this.isFinished = !0),
                            this.emit('error', l),
                            this.previous && this.previous.error(l),
                            this.cleanUp()),
                        !0)
                      )
                    },
                    on: function (l, i) {
                      return (this._listeners[l].push(i), this)
                    },
                    cleanUp: function () {
                      ;((this.streamInfo =
                        this.generatedError =
                        this.extraStreamInfo =
                          null),
                        (this._listeners = []))
                    },
                    emit: function (l, i) {
                      if (this._listeners[l])
                        for (var c = 0; c < this._listeners[l].length; c++)
                          this._listeners[l][c].call(this, i)
                    },
                    pipe: function (l) {
                      return l.registerPrevious(this)
                    },
                    registerPrevious: function (l) {
                      if (this.isLocked)
                        throw new Error(
                          "The stream '" + this + "' has already been used."
                        )
                      ;((this.streamInfo = l.streamInfo),
                        this.mergeStreamInfo(),
                        (this.previous = l))
                      var i = this
                      return (
                        l.on('data', function (c) {
                          i.processChunk(c)
                        }),
                        l.on('end', function () {
                          i.end()
                        }),
                        l.on('error', function (c) {
                          i.error(c)
                        }),
                        this
                      )
                    },
                    pause: function () {
                      return (
                        !this.isPaused &&
                        !this.isFinished &&
                        ((this.isPaused = !0),
                        this.previous && this.previous.pause(),
                        !0)
                      )
                    },
                    resume: function () {
                      if (!this.isPaused || this.isFinished) return !1
                      var l = (this.isPaused = !1)
                      return (
                        this.generatedError &&
                          (this.error(this.generatedError), (l = !0)),
                        this.previous && this.previous.resume(),
                        !l
                      )
                    },
                    flush: function () {},
                    processChunk: function (l) {
                      this.push(l)
                    },
                    withStreamInfo: function (l, i) {
                      return (
                        (this.extraStreamInfo[l] = i),
                        this.mergeStreamInfo(),
                        this
                      )
                    },
                    mergeStreamInfo: function () {
                      for (var l in this.extraStreamInfo)
                        Object.prototype.hasOwnProperty.call(
                          this.extraStreamInfo,
                          l
                        ) && (this.streamInfo[l] = this.extraStreamInfo[l])
                    },
                    lock: function () {
                      if (this.isLocked)
                        throw new Error(
                          "The stream '" + this + "' has already been used."
                        )
                      ;((this.isLocked = !0),
                        this.previous && this.previous.lock())
                    },
                    toString: function () {
                      var l = 'Worker ' + this.name
                      return this.previous ? this.previous + ' -> ' + l : l
                    },
                  }),
                    (n.exports = a))
                },
                {},
              ],
              29: [
                function (t, n, o) {
                  var a = t('../utils'),
                    l = t('./ConvertWorker'),
                    i = t('./GenericWorker'),
                    c = t('../base64'),
                    f = t('../support'),
                    m = t('../external'),
                    p = null
                  if (f.nodestream)
                    try {
                      p = t('../nodejs/NodejsStreamOutputAdapter')
                    } catch {}
                  function v(x, h) {
                    return new m.Promise(function (g, w) {
                      var S = [],
                        C = x._internalType,
                        _ = x._outputType,
                        E = x._mimeType
                      x.on('data', function (D, T) {
                        ;(S.push(D), h && h(T))
                      })
                        .on('error', function (D) {
                          ;((S = []), w(D))
                        })
                        .on('end', function () {
                          try {
                            var D = (function (T, I, R) {
                              switch (T) {
                                case 'blob':
                                  return a.newBlob(
                                    a.transformTo('arraybuffer', I),
                                    R
                                  )
                                case 'base64':
                                  return c.encode(I)
                                default:
                                  return a.transformTo(T, I)
                              }
                            })(
                              _,
                              (function (T, I) {
                                var R,
                                  L = 0,
                                  V = null,
                                  k = 0
                                for (R = 0; R < I.length; R++) k += I[R].length
                                switch (T) {
                                  case 'string':
                                    return I.join('')
                                  case 'array':
                                    return Array.prototype.concat.apply([], I)
                                  case 'uint8array':
                                    for (
                                      V = new Uint8Array(k), R = 0;
                                      R < I.length;
                                      R++
                                    )
                                      (V.set(I[R], L), (L += I[R].length))
                                    return V
                                  case 'nodebuffer':
                                    return Buffer.concat(I)
                                  default:
                                    throw new Error(
                                      "concat : unsupported type '" + T + "'"
                                    )
                                }
                              })(C, S),
                              E
                            )
                            g(D)
                          } catch (T) {
                            w(T)
                          }
                          S = []
                        })
                        .resume()
                    })
                  }
                  function d(x, h, g) {
                    var w = h
                    switch (h) {
                      case 'blob':
                      case 'arraybuffer':
                        w = 'uint8array'
                        break
                      case 'base64':
                        w = 'string'
                    }
                    try {
                      ;((this._internalType = w),
                        (this._outputType = h),
                        (this._mimeType = g),
                        a.checkSupport(w),
                        (this._worker = x.pipe(new l(w))),
                        x.lock())
                    } catch (S) {
                      ;((this._worker = new i('error')), this._worker.error(S))
                    }
                  }
                  ;((d.prototype = {
                    accumulate: function (x) {
                      return v(this, x)
                    },
                    on: function (x, h) {
                      var g = this
                      return (
                        x === 'data'
                          ? this._worker.on(x, function (w) {
                              h.call(g, w.data, w.meta)
                            })
                          : this._worker.on(x, function () {
                              a.delay(h, arguments, g)
                            }),
                        this
                      )
                    },
                    resume: function () {
                      return (
                        a.delay(this._worker.resume, [], this._worker),
                        this
                      )
                    },
                    pause: function () {
                      return (this._worker.pause(), this)
                    },
                    toNodejsStream: function (x) {
                      if (
                        (a.checkSupport('nodestream'),
                        this._outputType !== 'nodebuffer')
                      )
                        throw new Error(
                          this._outputType + ' is not supported by this method'
                        )
                      return new p(
                        this,
                        { objectMode: this._outputType !== 'nodebuffer' },
                        x
                      )
                    },
                  }),
                    (n.exports = d))
                },
                {
                  '../base64': 1,
                  '../external': 6,
                  '../nodejs/NodejsStreamOutputAdapter': 13,
                  '../support': 30,
                  '../utils': 32,
                  './ConvertWorker': 24,
                  './GenericWorker': 28,
                },
              ],
              30: [
                function (t, n, o) {
                  if (
                    ((o.base64 = !0),
                    (o.array = !0),
                    (o.string = !0),
                    (o.arraybuffer =
                      typeof ArrayBuffer < 'u' && typeof Uint8Array < 'u'),
                    (o.nodebuffer = typeof Buffer < 'u'),
                    (o.uint8array = typeof Uint8Array < 'u'),
                    typeof ArrayBuffer > 'u')
                  )
                    o.blob = !1
                  else {
                    var a = new ArrayBuffer(0)
                    try {
                      o.blob =
                        new Blob([a], { type: 'application/zip' }).size === 0
                    } catch {
                      try {
                        var l = new (self.BlobBuilder ||
                          self.WebKitBlobBuilder ||
                          self.MozBlobBuilder ||
                          self.MSBlobBuilder)()
                        ;(l.append(a),
                          (o.blob = l.getBlob('application/zip').size === 0))
                      } catch {
                        o.blob = !1
                      }
                    }
                  }
                  try {
                    o.nodestream = !!t('readable-stream').Readable
                  } catch {
                    o.nodestream = !1
                  }
                },
                { 'readable-stream': 16 },
              ],
              31: [
                function (t, n, o) {
                  for (
                    var a = t('./utils'),
                      l = t('./support'),
                      i = t('./nodejsUtils'),
                      c = t('./stream/GenericWorker'),
                      f = new Array(256),
                      m = 0;
                    m < 256;
                    m++
                  )
                    f[m] =
                      252 <= m
                        ? 6
                        : 248 <= m
                          ? 5
                          : 240 <= m
                            ? 4
                            : 224 <= m
                              ? 3
                              : 192 <= m
                                ? 2
                                : 1
                  f[254] = f[254] = 1
                  function p() {
                    ;(c.call(this, 'utf-8 decode'), (this.leftOver = null))
                  }
                  function v() {
                    c.call(this, 'utf-8 encode')
                  }
                  ;((o.utf8encode = function (d) {
                    return l.nodebuffer
                      ? i.newBufferFrom(d, 'utf-8')
                      : (function (x) {
                          var h,
                            g,
                            w,
                            S,
                            C,
                            _ = x.length,
                            E = 0
                          for (S = 0; S < _; S++)
                            ((64512 & (g = x.charCodeAt(S))) == 55296 &&
                              S + 1 < _ &&
                              (64512 & (w = x.charCodeAt(S + 1))) == 56320 &&
                              ((g = 65536 + ((g - 55296) << 10) + (w - 56320)),
                              S++),
                              (E +=
                                g < 128 ? 1 : g < 2048 ? 2 : g < 65536 ? 3 : 4))
                          for (
                            h = l.uint8array ? new Uint8Array(E) : new Array(E),
                              S = C = 0;
                            C < E;
                            S++
                          )
                            ((64512 & (g = x.charCodeAt(S))) == 55296 &&
                              S + 1 < _ &&
                              (64512 & (w = x.charCodeAt(S + 1))) == 56320 &&
                              ((g = 65536 + ((g - 55296) << 10) + (w - 56320)),
                              S++),
                              g < 128
                                ? (h[C++] = g)
                                : (g < 2048
                                    ? (h[C++] = 192 | (g >>> 6))
                                    : (g < 65536
                                        ? (h[C++] = 224 | (g >>> 12))
                                        : ((h[C++] = 240 | (g >>> 18)),
                                          (h[C++] = 128 | ((g >>> 12) & 63))),
                                      (h[C++] = 128 | ((g >>> 6) & 63))),
                                  (h[C++] = 128 | (63 & g))))
                          return h
                        })(d)
                  }),
                    (o.utf8decode = function (d) {
                      return l.nodebuffer
                        ? a.transformTo('nodebuffer', d).toString('utf-8')
                        : (function (x) {
                            var h,
                              g,
                              w,
                              S,
                              C = x.length,
                              _ = new Array(2 * C)
                            for (h = g = 0; h < C; )
                              if ((w = x[h++]) < 128) _[g++] = w
                              else if (4 < (S = f[w]))
                                ((_[g++] = 65533), (h += S - 1))
                              else {
                                for (
                                  w &= S === 2 ? 31 : S === 3 ? 15 : 7;
                                  1 < S && h < C;

                                )
                                  ((w = (w << 6) | (63 & x[h++])), S--)
                                1 < S
                                  ? (_[g++] = 65533)
                                  : w < 65536
                                    ? (_[g++] = w)
                                    : ((w -= 65536),
                                      (_[g++] = 55296 | ((w >> 10) & 1023)),
                                      (_[g++] = 56320 | (1023 & w)))
                              }
                            return (
                              _.length !== g &&
                                (_.subarray
                                  ? (_ = _.subarray(0, g))
                                  : (_.length = g)),
                              a.applyFromCharCode(_)
                            )
                          })(
                            (d = a.transformTo(
                              l.uint8array ? 'uint8array' : 'array',
                              d
                            ))
                          )
                    }),
                    a.inherits(p, c),
                    (p.prototype.processChunk = function (d) {
                      var x = a.transformTo(
                        l.uint8array ? 'uint8array' : 'array',
                        d.data
                      )
                      if (this.leftOver && this.leftOver.length) {
                        if (l.uint8array) {
                          var h = x
                          ;((x = new Uint8Array(
                            h.length + this.leftOver.length
                          )).set(this.leftOver, 0),
                            x.set(h, this.leftOver.length))
                        } else x = this.leftOver.concat(x)
                        this.leftOver = null
                      }
                      var g = (function (S, C) {
                          var _
                          for (
                            (C = C || S.length) > S.length && (C = S.length),
                              _ = C - 1;
                            0 <= _ && (192 & S[_]) == 128;

                          )
                            _--
                          return _ < 0 || _ === 0 ? C : _ + f[S[_]] > C ? _ : C
                        })(x),
                        w = x
                      ;(g !== x.length &&
                        (l.uint8array
                          ? ((w = x.subarray(0, g)),
                            (this.leftOver = x.subarray(g, x.length)))
                          : ((w = x.slice(0, g)),
                            (this.leftOver = x.slice(g, x.length)))),
                        this.push({ data: o.utf8decode(w), meta: d.meta }))
                    }),
                    (p.prototype.flush = function () {
                      this.leftOver &&
                        this.leftOver.length &&
                        (this.push({
                          data: o.utf8decode(this.leftOver),
                          meta: {},
                        }),
                        (this.leftOver = null))
                    }),
                    (o.Utf8DecodeWorker = p),
                    a.inherits(v, c),
                    (v.prototype.processChunk = function (d) {
                      this.push({ data: o.utf8encode(d.data), meta: d.meta })
                    }),
                    (o.Utf8EncodeWorker = v))
                },
                {
                  './nodejsUtils': 14,
                  './stream/GenericWorker': 28,
                  './support': 30,
                  './utils': 32,
                },
              ],
              32: [
                function (t, n, o) {
                  var a = t('./support'),
                    l = t('./base64'),
                    i = t('./nodejsUtils'),
                    c = t('./external')
                  function f(h) {
                    return h
                  }
                  function m(h, g) {
                    for (var w = 0; w < h.length; ++w)
                      g[w] = 255 & h.charCodeAt(w)
                    return g
                  }
                  ;(t('setimmediate'),
                    (o.newBlob = function (h, g) {
                      o.checkSupport('blob')
                      try {
                        return new Blob([h], { type: g })
                      } catch {
                        try {
                          var w = new (self.BlobBuilder ||
                            self.WebKitBlobBuilder ||
                            self.MozBlobBuilder ||
                            self.MSBlobBuilder)()
                          return (w.append(h), w.getBlob(g))
                        } catch {
                          throw new Error("Bug : can't construct the Blob.")
                        }
                      }
                    }))
                  var p = {
                    stringifyByChunk: function (h, g, w) {
                      var S = [],
                        C = 0,
                        _ = h.length
                      if (_ <= w) return String.fromCharCode.apply(null, h)
                      for (; C < _; )
                        (g === 'array' || g === 'nodebuffer'
                          ? S.push(
                              String.fromCharCode.apply(
                                null,
                                h.slice(C, Math.min(C + w, _))
                              )
                            )
                          : S.push(
                              String.fromCharCode.apply(
                                null,
                                h.subarray(C, Math.min(C + w, _))
                              )
                            ),
                          (C += w))
                      return S.join('')
                    },
                    stringifyByChar: function (h) {
                      for (var g = '', w = 0; w < h.length; w++)
                        g += String.fromCharCode(h[w])
                      return g
                    },
                    applyCanBeUsed: {
                      uint8array: (function () {
                        try {
                          return (
                            a.uint8array &&
                            String.fromCharCode.apply(null, new Uint8Array(1))
                              .length === 1
                          )
                        } catch {
                          return !1
                        }
                      })(),
                      nodebuffer: (function () {
                        try {
                          return (
                            a.nodebuffer &&
                            String.fromCharCode.apply(null, i.allocBuffer(1))
                              .length === 1
                          )
                        } catch {
                          return !1
                        }
                      })(),
                    },
                  }
                  function v(h) {
                    var g = 65536,
                      w = o.getTypeOf(h),
                      S = !0
                    if (
                      (w === 'uint8array'
                        ? (S = p.applyCanBeUsed.uint8array)
                        : w === 'nodebuffer' &&
                          (S = p.applyCanBeUsed.nodebuffer),
                      S)
                    )
                      for (; 1 < g; )
                        try {
                          return p.stringifyByChunk(h, w, g)
                        } catch {
                          g = Math.floor(g / 2)
                        }
                    return p.stringifyByChar(h)
                  }
                  function d(h, g) {
                    for (var w = 0; w < h.length; w++) g[w] = h[w]
                    return g
                  }
                  o.applyFromCharCode = v
                  var x = {}
                  ;((x.string = {
                    string: f,
                    array: function (h) {
                      return m(h, new Array(h.length))
                    },
                    arraybuffer: function (h) {
                      return x.string.uint8array(h).buffer
                    },
                    uint8array: function (h) {
                      return m(h, new Uint8Array(h.length))
                    },
                    nodebuffer: function (h) {
                      return m(h, i.allocBuffer(h.length))
                    },
                  }),
                    (x.array = {
                      string: v,
                      array: f,
                      arraybuffer: function (h) {
                        return new Uint8Array(h).buffer
                      },
                      uint8array: function (h) {
                        return new Uint8Array(h)
                      },
                      nodebuffer: function (h) {
                        return i.newBufferFrom(h)
                      },
                    }),
                    (x.arraybuffer = {
                      string: function (h) {
                        return v(new Uint8Array(h))
                      },
                      array: function (h) {
                        return d(new Uint8Array(h), new Array(h.byteLength))
                      },
                      arraybuffer: f,
                      uint8array: function (h) {
                        return new Uint8Array(h)
                      },
                      nodebuffer: function (h) {
                        return i.newBufferFrom(new Uint8Array(h))
                      },
                    }),
                    (x.uint8array = {
                      string: v,
                      array: function (h) {
                        return d(h, new Array(h.length))
                      },
                      arraybuffer: function (h) {
                        return h.buffer
                      },
                      uint8array: f,
                      nodebuffer: function (h) {
                        return i.newBufferFrom(h)
                      },
                    }),
                    (x.nodebuffer = {
                      string: v,
                      array: function (h) {
                        return d(h, new Array(h.length))
                      },
                      arraybuffer: function (h) {
                        return x.nodebuffer.uint8array(h).buffer
                      },
                      uint8array: function (h) {
                        return d(h, new Uint8Array(h.length))
                      },
                      nodebuffer: f,
                    }),
                    (o.transformTo = function (h, g) {
                      if (((g = g || ''), !h)) return g
                      o.checkSupport(h)
                      var w = o.getTypeOf(g)
                      return x[w][h](g)
                    }),
                    (o.resolve = function (h) {
                      for (
                        var g = h.split('/'), w = [], S = 0;
                        S < g.length;
                        S++
                      ) {
                        var C = g[S]
                        C === '.' ||
                          (C === '' && S !== 0 && S !== g.length - 1) ||
                          (C === '..' ? w.pop() : w.push(C))
                      }
                      return w.join('/')
                    }),
                    (o.getTypeOf = function (h) {
                      return typeof h == 'string'
                        ? 'string'
                        : Object.prototype.toString.call(h) === '[object Array]'
                          ? 'array'
                          : a.nodebuffer && i.isBuffer(h)
                            ? 'nodebuffer'
                            : a.uint8array && h instanceof Uint8Array
                              ? 'uint8array'
                              : a.arraybuffer && h instanceof ArrayBuffer
                                ? 'arraybuffer'
                                : void 0
                    }),
                    (o.checkSupport = function (h) {
                      if (!a[h.toLowerCase()])
                        throw new Error(
                          h + ' is not supported by this platform'
                        )
                    }),
                    (o.MAX_VALUE_16BITS = 65535),
                    (o.MAX_VALUE_32BITS = -1),
                    (o.pretty = function (h) {
                      var g,
                        w,
                        S = ''
                      for (w = 0; w < (h || '').length; w++)
                        S +=
                          '\\x' +
                          ((g = h.charCodeAt(w)) < 16 ? '0' : '') +
                          g.toString(16).toUpperCase()
                      return S
                    }),
                    (o.delay = function (h, g, w) {
                      setImmediate(function () {
                        h.apply(w || null, g || [])
                      })
                    }),
                    (o.inherits = function (h, g) {
                      function w() {}
                      ;((w.prototype = g.prototype), (h.prototype = new w()))
                    }),
                    (o.extend = function () {
                      var h,
                        g,
                        w = {}
                      for (h = 0; h < arguments.length; h++)
                        for (g in arguments[h])
                          Object.prototype.hasOwnProperty.call(
                            arguments[h],
                            g
                          ) &&
                            w[g] === void 0 &&
                            (w[g] = arguments[h][g])
                      return w
                    }),
                    (o.prepareContent = function (h, g, w, S, C) {
                      return c.Promise.resolve(g)
                        .then(function (_) {
                          return a.blob &&
                            (_ instanceof Blob ||
                              ['[object File]', '[object Blob]'].indexOf(
                                Object.prototype.toString.call(_)
                              ) !== -1) &&
                            typeof FileReader < 'u'
                            ? new c.Promise(function (E, D) {
                                var T = new FileReader()
                                ;((T.onload = function (I) {
                                  E(I.target.result)
                                }),
                                  (T.onerror = function (I) {
                                    D(I.target.error)
                                  }),
                                  T.readAsArrayBuffer(_))
                              })
                            : _
                        })
                        .then(function (_) {
                          var E = o.getTypeOf(_)
                          return E
                            ? (E === 'arraybuffer'
                                ? (_ = o.transformTo('uint8array', _))
                                : E === 'string' &&
                                  (C
                                    ? (_ = l.decode(_))
                                    : w &&
                                      S !== !0 &&
                                      (_ = (function (D) {
                                        return m(
                                          D,
                                          a.uint8array
                                            ? new Uint8Array(D.length)
                                            : new Array(D.length)
                                        )
                                      })(_))),
                              _)
                            : c.Promise.reject(
                                new Error(
                                  "Can't read the data of '" +
                                    h +
                                    "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"
                                )
                              )
                        })
                    }))
                },
                {
                  './base64': 1,
                  './external': 6,
                  './nodejsUtils': 14,
                  './support': 30,
                  setimmediate: 54,
                },
              ],
              33: [
                function (t, n, o) {
                  var a = t('./reader/readerFor'),
                    l = t('./utils'),
                    i = t('./signature'),
                    c = t('./zipEntry'),
                    f = t('./support')
                  function m(p) {
                    ;((this.files = []), (this.loadOptions = p))
                  }
                  ;((m.prototype = {
                    checkSignature: function (p) {
                      if (!this.reader.readAndCheckSignature(p)) {
                        this.reader.index -= 4
                        var v = this.reader.readString(4)
                        throw new Error(
                          'Corrupted zip or bug: unexpected signature (' +
                            l.pretty(v) +
                            ', expected ' +
                            l.pretty(p) +
                            ')'
                        )
                      }
                    },
                    isSignature: function (p, v) {
                      var d = this.reader.index
                      this.reader.setIndex(p)
                      var x = this.reader.readString(4) === v
                      return (this.reader.setIndex(d), x)
                    },
                    readBlockEndOfCentral: function () {
                      ;((this.diskNumber = this.reader.readInt(2)),
                        (this.diskWithCentralDirStart = this.reader.readInt(2)),
                        (this.centralDirRecordsOnThisDisk =
                          this.reader.readInt(2)),
                        (this.centralDirRecords = this.reader.readInt(2)),
                        (this.centralDirSize = this.reader.readInt(4)),
                        (this.centralDirOffset = this.reader.readInt(4)),
                        (this.zipCommentLength = this.reader.readInt(2)))
                      var p = this.reader.readData(this.zipCommentLength),
                        v = f.uint8array ? 'uint8array' : 'array',
                        d = l.transformTo(v, p)
                      this.zipComment = this.loadOptions.decodeFileName(d)
                    },
                    readBlockZip64EndOfCentral: function () {
                      ;((this.zip64EndOfCentralSize = this.reader.readInt(8)),
                        this.reader.skip(4),
                        (this.diskNumber = this.reader.readInt(4)),
                        (this.diskWithCentralDirStart = this.reader.readInt(4)),
                        (this.centralDirRecordsOnThisDisk =
                          this.reader.readInt(8)),
                        (this.centralDirRecords = this.reader.readInt(8)),
                        (this.centralDirSize = this.reader.readInt(8)),
                        (this.centralDirOffset = this.reader.readInt(8)),
                        (this.zip64ExtensibleData = {}))
                      for (
                        var p, v, d, x = this.zip64EndOfCentralSize - 44;
                        0 < x;

                      )
                        ((p = this.reader.readInt(2)),
                          (v = this.reader.readInt(4)),
                          (d = this.reader.readData(v)),
                          (this.zip64ExtensibleData[p] = {
                            id: p,
                            length: v,
                            value: d,
                          }))
                    },
                    readBlockZip64EndOfCentralLocator: function () {
                      if (
                        ((this.diskWithZip64CentralDirStart =
                          this.reader.readInt(4)),
                        (this.relativeOffsetEndOfZip64CentralDir =
                          this.reader.readInt(8)),
                        (this.disksCount = this.reader.readInt(4)),
                        1 < this.disksCount)
                      )
                        throw new Error('Multi-volumes zip are not supported')
                    },
                    readLocalFiles: function () {
                      var p, v
                      for (p = 0; p < this.files.length; p++)
                        ((v = this.files[p]),
                          this.reader.setIndex(v.localHeaderOffset),
                          this.checkSignature(i.LOCAL_FILE_HEADER),
                          v.readLocalPart(this.reader),
                          v.handleUTF8(),
                          v.processAttributes())
                    },
                    readCentralDir: function () {
                      var p
                      for (
                        this.reader.setIndex(this.centralDirOffset);
                        this.reader.readAndCheckSignature(
                          i.CENTRAL_FILE_HEADER
                        );

                      )
                        ((p = new c(
                          { zip64: this.zip64 },
                          this.loadOptions
                        )).readCentralPart(this.reader),
                          this.files.push(p))
                      if (
                        this.centralDirRecords !== this.files.length &&
                        this.centralDirRecords !== 0 &&
                        this.files.length === 0
                      )
                        throw new Error(
                          'Corrupted zip or bug: expected ' +
                            this.centralDirRecords +
                            ' records in central dir, got ' +
                            this.files.length
                        )
                    },
                    readEndOfCentral: function () {
                      var p = this.reader.lastIndexOfSignature(
                        i.CENTRAL_DIRECTORY_END
                      )
                      if (p < 0)
                        throw this.isSignature(0, i.LOCAL_FILE_HEADER)
                          ? new Error(
                              "Corrupted zip: can't find end of central directory"
                            )
                          : new Error(
                              "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
                            )
                      this.reader.setIndex(p)
                      var v = p
                      if (
                        (this.checkSignature(i.CENTRAL_DIRECTORY_END),
                        this.readBlockEndOfCentral(),
                        this.diskNumber === l.MAX_VALUE_16BITS ||
                          this.diskWithCentralDirStart === l.MAX_VALUE_16BITS ||
                          this.centralDirRecordsOnThisDisk ===
                            l.MAX_VALUE_16BITS ||
                          this.centralDirRecords === l.MAX_VALUE_16BITS ||
                          this.centralDirSize === l.MAX_VALUE_32BITS ||
                          this.centralDirOffset === l.MAX_VALUE_32BITS)
                      ) {
                        if (
                          ((this.zip64 = !0),
                          (p = this.reader.lastIndexOfSignature(
                            i.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                          )) < 0)
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory locator"
                          )
                        if (
                          (this.reader.setIndex(p),
                          this.checkSignature(
                            i.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                          ),
                          this.readBlockZip64EndOfCentralLocator(),
                          !this.isSignature(
                            this.relativeOffsetEndOfZip64CentralDir,
                            i.ZIP64_CENTRAL_DIRECTORY_END
                          ) &&
                            ((this.relativeOffsetEndOfZip64CentralDir =
                              this.reader.lastIndexOfSignature(
                                i.ZIP64_CENTRAL_DIRECTORY_END
                              )),
                            this.relativeOffsetEndOfZip64CentralDir < 0))
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory"
                          )
                        ;(this.reader.setIndex(
                          this.relativeOffsetEndOfZip64CentralDir
                        ),
                          this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END),
                          this.readBlockZip64EndOfCentral())
                      }
                      var d = this.centralDirOffset + this.centralDirSize
                      this.zip64 &&
                        ((d += 20), (d += 12 + this.zip64EndOfCentralSize))
                      var x = v - d
                      if (0 < x)
                        this.isSignature(v, i.CENTRAL_FILE_HEADER) ||
                          (this.reader.zero = x)
                      else if (x < 0)
                        throw new Error(
                          'Corrupted zip: missing ' + Math.abs(x) + ' bytes.'
                        )
                    },
                    prepareReader: function (p) {
                      this.reader = a(p)
                    },
                    load: function (p) {
                      ;(this.prepareReader(p),
                        this.readEndOfCentral(),
                        this.readCentralDir(),
                        this.readLocalFiles())
                    },
                  }),
                    (n.exports = m))
                },
                {
                  './reader/readerFor': 22,
                  './signature': 23,
                  './support': 30,
                  './utils': 32,
                  './zipEntry': 34,
                },
              ],
              34: [
                function (t, n, o) {
                  var a = t('./reader/readerFor'),
                    l = t('./utils'),
                    i = t('./compressedObject'),
                    c = t('./crc32'),
                    f = t('./utf8'),
                    m = t('./compressions'),
                    p = t('./support')
                  function v(d, x) {
                    ;((this.options = d), (this.loadOptions = x))
                  }
                  ;((v.prototype = {
                    isEncrypted: function () {
                      return (1 & this.bitFlag) == 1
                    },
                    useUTF8: function () {
                      return (2048 & this.bitFlag) == 2048
                    },
                    readLocalPart: function (d) {
                      var x, h
                      if (
                        (d.skip(22),
                        (this.fileNameLength = d.readInt(2)),
                        (h = d.readInt(2)),
                        (this.fileName = d.readData(this.fileNameLength)),
                        d.skip(h),
                        this.compressedSize === -1 ||
                          this.uncompressedSize === -1)
                      )
                        throw new Error(
                          "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                        )
                      if (
                        (x = (function (g) {
                          for (var w in m)
                            if (
                              Object.prototype.hasOwnProperty.call(m, w) &&
                              m[w].magic === g
                            )
                              return m[w]
                          return null
                        })(this.compressionMethod)) === null
                      )
                        throw new Error(
                          'Corrupted zip : compression ' +
                            l.pretty(this.compressionMethod) +
                            ' unknown (inner file : ' +
                            l.transformTo('string', this.fileName) +
                            ')'
                        )
                      this.decompressed = new i(
                        this.compressedSize,
                        this.uncompressedSize,
                        this.crc32,
                        x,
                        d.readData(this.compressedSize)
                      )
                    },
                    readCentralPart: function (d) {
                      ;((this.versionMadeBy = d.readInt(2)),
                        d.skip(2),
                        (this.bitFlag = d.readInt(2)),
                        (this.compressionMethod = d.readString(2)),
                        (this.date = d.readDate()),
                        (this.crc32 = d.readInt(4)),
                        (this.compressedSize = d.readInt(4)),
                        (this.uncompressedSize = d.readInt(4)))
                      var x = d.readInt(2)
                      if (
                        ((this.extraFieldsLength = d.readInt(2)),
                        (this.fileCommentLength = d.readInt(2)),
                        (this.diskNumberStart = d.readInt(2)),
                        (this.internalFileAttributes = d.readInt(2)),
                        (this.externalFileAttributes = d.readInt(4)),
                        (this.localHeaderOffset = d.readInt(4)),
                        this.isEncrypted())
                      )
                        throw new Error('Encrypted zip are not supported')
                      ;(d.skip(x),
                        this.readExtraFields(d),
                        this.parseZIP64ExtraField(d),
                        (this.fileComment = d.readData(this.fileCommentLength)))
                    },
                    processAttributes: function () {
                      ;((this.unixPermissions = null),
                        (this.dosPermissions = null))
                      var d = this.versionMadeBy >> 8
                      ;((this.dir = !!(16 & this.externalFileAttributes)),
                        d == 0 &&
                          (this.dosPermissions =
                            63 & this.externalFileAttributes),
                        d == 3 &&
                          (this.unixPermissions =
                            (this.externalFileAttributes >> 16) & 65535),
                        this.dir ||
                          this.fileNameStr.slice(-1) !== '/' ||
                          (this.dir = !0))
                    },
                    parseZIP64ExtraField: function () {
                      if (this.extraFields[1]) {
                        var d = a(this.extraFields[1].value)
                        ;(this.uncompressedSize === l.MAX_VALUE_32BITS &&
                          (this.uncompressedSize = d.readInt(8)),
                          this.compressedSize === l.MAX_VALUE_32BITS &&
                            (this.compressedSize = d.readInt(8)),
                          this.localHeaderOffset === l.MAX_VALUE_32BITS &&
                            (this.localHeaderOffset = d.readInt(8)),
                          this.diskNumberStart === l.MAX_VALUE_32BITS &&
                            (this.diskNumberStart = d.readInt(4)))
                      }
                    },
                    readExtraFields: function (d) {
                      var x,
                        h,
                        g,
                        w = d.index + this.extraFieldsLength
                      for (
                        this.extraFields || (this.extraFields = {});
                        d.index + 4 < w;

                      )
                        ((x = d.readInt(2)),
                          (h = d.readInt(2)),
                          (g = d.readData(h)),
                          (this.extraFields[x] = {
                            id: x,
                            length: h,
                            value: g,
                          }))
                      d.setIndex(w)
                    },
                    handleUTF8: function () {
                      var d = p.uint8array ? 'uint8array' : 'array'
                      if (this.useUTF8())
                        ((this.fileNameStr = f.utf8decode(this.fileName)),
                          (this.fileCommentStr = f.utf8decode(
                            this.fileComment
                          )))
                      else {
                        var x = this.findExtraFieldUnicodePath()
                        if (x !== null) this.fileNameStr = x
                        else {
                          var h = l.transformTo(d, this.fileName)
                          this.fileNameStr = this.loadOptions.decodeFileName(h)
                        }
                        var g = this.findExtraFieldUnicodeComment()
                        if (g !== null) this.fileCommentStr = g
                        else {
                          var w = l.transformTo(d, this.fileComment)
                          this.fileCommentStr =
                            this.loadOptions.decodeFileName(w)
                        }
                      }
                    },
                    findExtraFieldUnicodePath: function () {
                      var d = this.extraFields[28789]
                      if (d) {
                        var x = a(d.value)
                        return x.readInt(1) !== 1 ||
                          c(this.fileName) !== x.readInt(4)
                          ? null
                          : f.utf8decode(x.readData(d.length - 5))
                      }
                      return null
                    },
                    findExtraFieldUnicodeComment: function () {
                      var d = this.extraFields[25461]
                      if (d) {
                        var x = a(d.value)
                        return x.readInt(1) !== 1 ||
                          c(this.fileComment) !== x.readInt(4)
                          ? null
                          : f.utf8decode(x.readData(d.length - 5))
                      }
                      return null
                    },
                  }),
                    (n.exports = v))
                },
                {
                  './compressedObject': 2,
                  './compressions': 3,
                  './crc32': 4,
                  './reader/readerFor': 22,
                  './support': 30,
                  './utf8': 31,
                  './utils': 32,
                },
              ],
              35: [
                function (t, n, o) {
                  function a(x, h, g) {
                    ;((this.name = x),
                      (this.dir = g.dir),
                      (this.date = g.date),
                      (this.comment = g.comment),
                      (this.unixPermissions = g.unixPermissions),
                      (this.dosPermissions = g.dosPermissions),
                      (this._data = h),
                      (this._dataBinary = g.binary),
                      (this.options = {
                        compression: g.compression,
                        compressionOptions: g.compressionOptions,
                      }))
                  }
                  var l = t('./stream/StreamHelper'),
                    i = t('./stream/DataWorker'),
                    c = t('./utf8'),
                    f = t('./compressedObject'),
                    m = t('./stream/GenericWorker')
                  a.prototype = {
                    internalStream: function (x) {
                      var h = null,
                        g = 'string'
                      try {
                        if (!x) throw new Error('No output type specified.')
                        var w =
                          (g = x.toLowerCase()) === 'string' || g === 'text'
                        ;((g !== 'binarystring' && g !== 'text') ||
                          (g = 'string'),
                          (h = this._decompressWorker()))
                        var S = !this._dataBinary
                        ;(S && !w && (h = h.pipe(new c.Utf8EncodeWorker())),
                          !S && w && (h = h.pipe(new c.Utf8DecodeWorker())))
                      } catch (C) {
                        ;(h = new m('error')).error(C)
                      }
                      return new l(h, g, '')
                    },
                    async: function (x, h) {
                      return this.internalStream(x).accumulate(h)
                    },
                    nodeStream: function (x, h) {
                      return this.internalStream(
                        x || 'nodebuffer'
                      ).toNodejsStream(h)
                    },
                    _compressWorker: function (x, h) {
                      if (
                        this._data instanceof f &&
                        this._data.compression.magic === x.magic
                      )
                        return this._data.getCompressedWorker()
                      var g = this._decompressWorker()
                      return (
                        this._dataBinary ||
                          (g = g.pipe(new c.Utf8EncodeWorker())),
                        f.createWorkerFrom(g, x, h)
                      )
                    },
                    _decompressWorker: function () {
                      return this._data instanceof f
                        ? this._data.getContentWorker()
                        : this._data instanceof m
                          ? this._data
                          : new i(this._data)
                    },
                  }
                  for (
                    var p = [
                        'asText',
                        'asBinary',
                        'asNodeBuffer',
                        'asUint8Array',
                        'asArrayBuffer',
                      ],
                      v = function () {
                        throw new Error(
                          'This method has been removed in JSZip 3.0, please check the upgrade guide.'
                        )
                      },
                      d = 0;
                    d < p.length;
                    d++
                  )
                    a.prototype[p[d]] = v
                  n.exports = a
                },
                {
                  './compressedObject': 2,
                  './stream/DataWorker': 27,
                  './stream/GenericWorker': 28,
                  './stream/StreamHelper': 29,
                  './utf8': 31,
                },
              ],
              36: [
                function (t, n, o) {
                  ;(function (a) {
                    var l,
                      i,
                      c = a.MutationObserver || a.WebKitMutationObserver
                    if (c) {
                      var f = 0,
                        m = new c(x),
                        p = a.document.createTextNode('')
                      ;(m.observe(p, { characterData: !0 }),
                        (l = function () {
                          p.data = f = ++f % 2
                        }))
                    } else if (a.setImmediate || a.MessageChannel === void 0)
                      l =
                        'document' in a &&
                        'onreadystatechange' in
                          a.document.createElement('script')
                          ? function () {
                              var h = a.document.createElement('script')
                              ;((h.onreadystatechange = function () {
                                ;(x(),
                                  (h.onreadystatechange = null),
                                  h.parentNode.removeChild(h),
                                  (h = null))
                              }),
                                a.document.documentElement.appendChild(h))
                            }
                          : function () {
                              setTimeout(x, 0)
                            }
                    else {
                      var v = new a.MessageChannel()
                      ;((v.port1.onmessage = x),
                        (l = function () {
                          v.port2.postMessage(0)
                        }))
                    }
                    var d = []
                    function x() {
                      var h, g
                      i = !0
                      for (var w = d.length; w; ) {
                        for (g = d, d = [], h = -1; ++h < w; ) g[h]()
                        w = d.length
                      }
                      i = !1
                    }
                    n.exports = function (h) {
                      d.push(h) !== 1 || i || l()
                    }
                  }).call(
                    this,
                    typeof pr < 'u'
                      ? pr
                      : typeof self < 'u'
                        ? self
                        : typeof window < 'u'
                          ? window
                          : {}
                  )
                },
                {},
              ],
              37: [
                function (t, n, o) {
                  var a = t('immediate')
                  function l() {}
                  var i = {},
                    c = ['REJECTED'],
                    f = ['FULFILLED'],
                    m = ['PENDING']
                  function p(w) {
                    if (typeof w != 'function')
                      throw new TypeError('resolver must be a function')
                    ;((this.state = m),
                      (this.queue = []),
                      (this.outcome = void 0),
                      w !== l && h(this, w))
                  }
                  function v(w, S, C) {
                    ;((this.promise = w),
                      typeof S == 'function' &&
                        ((this.onFulfilled = S),
                        (this.callFulfilled = this.otherCallFulfilled)),
                      typeof C == 'function' &&
                        ((this.onRejected = C),
                        (this.callRejected = this.otherCallRejected)))
                  }
                  function d(w, S, C) {
                    a(function () {
                      var _
                      try {
                        _ = S(C)
                      } catch (E) {
                        return i.reject(w, E)
                      }
                      _ === w
                        ? i.reject(
                            w,
                            new TypeError('Cannot resolve promise with itself')
                          )
                        : i.resolve(w, _)
                    })
                  }
                  function x(w) {
                    var S = w && w.then
                    if (
                      w &&
                      (typeof w == 'object' || typeof w == 'function') &&
                      typeof S == 'function'
                    )
                      return function () {
                        S.apply(w, arguments)
                      }
                  }
                  function h(w, S) {
                    var C = !1
                    function _(T) {
                      C || ((C = !0), i.reject(w, T))
                    }
                    function E(T) {
                      C || ((C = !0), i.resolve(w, T))
                    }
                    var D = g(function () {
                      S(E, _)
                    })
                    D.status === 'error' && _(D.value)
                  }
                  function g(w, S) {
                    var C = {}
                    try {
                      ;((C.value = w(S)), (C.status = 'success'))
                    } catch (_) {
                      ;((C.status = 'error'), (C.value = _))
                    }
                    return C
                  }
                  ;(((n.exports = p).prototype.finally = function (w) {
                    if (typeof w != 'function') return this
                    var S = this.constructor
                    return this.then(
                      function (C) {
                        return S.resolve(w()).then(function () {
                          return C
                        })
                      },
                      function (C) {
                        return S.resolve(w()).then(function () {
                          throw C
                        })
                      }
                    )
                  }),
                    (p.prototype.catch = function (w) {
                      return this.then(null, w)
                    }),
                    (p.prototype.then = function (w, S) {
                      if (
                        (typeof w != 'function' && this.state === f) ||
                        (typeof S != 'function' && this.state === c)
                      )
                        return this
                      var C = new this.constructor(l)
                      return (
                        this.state !== m
                          ? d(C, this.state === f ? w : S, this.outcome)
                          : this.queue.push(new v(C, w, S)),
                        C
                      )
                    }),
                    (v.prototype.callFulfilled = function (w) {
                      i.resolve(this.promise, w)
                    }),
                    (v.prototype.otherCallFulfilled = function (w) {
                      d(this.promise, this.onFulfilled, w)
                    }),
                    (v.prototype.callRejected = function (w) {
                      i.reject(this.promise, w)
                    }),
                    (v.prototype.otherCallRejected = function (w) {
                      d(this.promise, this.onRejected, w)
                    }),
                    (i.resolve = function (w, S) {
                      var C = g(x, S)
                      if (C.status === 'error') return i.reject(w, C.value)
                      var _ = C.value
                      if (_) h(w, _)
                      else {
                        ;((w.state = f), (w.outcome = S))
                        for (var E = -1, D = w.queue.length; ++E < D; )
                          w.queue[E].callFulfilled(S)
                      }
                      return w
                    }),
                    (i.reject = function (w, S) {
                      ;((w.state = c), (w.outcome = S))
                      for (var C = -1, _ = w.queue.length; ++C < _; )
                        w.queue[C].callRejected(S)
                      return w
                    }),
                    (p.resolve = function (w) {
                      return w instanceof this ? w : i.resolve(new this(l), w)
                    }),
                    (p.reject = function (w) {
                      var S = new this(l)
                      return i.reject(S, w)
                    }),
                    (p.all = function (w) {
                      var S = this
                      if (
                        Object.prototype.toString.call(w) !== '[object Array]'
                      )
                        return this.reject(new TypeError('must be an array'))
                      var C = w.length,
                        _ = !1
                      if (!C) return this.resolve([])
                      for (
                        var E = new Array(C), D = 0, T = -1, I = new this(l);
                        ++T < C;

                      )
                        R(w[T], T)
                      return I
                      function R(L, V) {
                        S.resolve(L).then(
                          function (k) {
                            ;((E[V] = k),
                              ++D !== C || _ || ((_ = !0), i.resolve(I, E)))
                          },
                          function (k) {
                            _ || ((_ = !0), i.reject(I, k))
                          }
                        )
                      }
                    }),
                    (p.race = function (w) {
                      var S = this
                      if (
                        Object.prototype.toString.call(w) !== '[object Array]'
                      )
                        return this.reject(new TypeError('must be an array'))
                      var C = w.length,
                        _ = !1
                      if (!C) return this.resolve([])
                      for (var E = -1, D = new this(l); ++E < C; )
                        ((T = w[E]),
                          S.resolve(T).then(
                            function (I) {
                              _ || ((_ = !0), i.resolve(D, I))
                            },
                            function (I) {
                              _ || ((_ = !0), i.reject(D, I))
                            }
                          ))
                      var T
                      return D
                    }))
                },
                { immediate: 36 },
              ],
              38: [
                function (t, n, o) {
                  var a = {}
                  ;((0, t('./lib/utils/common').assign)(
                    a,
                    t('./lib/deflate'),
                    t('./lib/inflate'),
                    t('./lib/zlib/constants')
                  ),
                    (n.exports = a))
                },
                {
                  './lib/deflate': 39,
                  './lib/inflate': 40,
                  './lib/utils/common': 41,
                  './lib/zlib/constants': 44,
                },
              ],
              39: [
                function (t, n, o) {
                  var a = t('./zlib/deflate'),
                    l = t('./utils/common'),
                    i = t('./utils/strings'),
                    c = t('./zlib/messages'),
                    f = t('./zlib/zstream'),
                    m = Object.prototype.toString,
                    p = 0,
                    v = -1,
                    d = 0,
                    x = 8
                  function h(w) {
                    if (!(this instanceof h)) return new h(w)
                    this.options = l.assign(
                      {
                        level: v,
                        method: x,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: d,
                        to: '',
                      },
                      w || {}
                    )
                    var S = this.options
                    ;(S.raw && 0 < S.windowBits
                      ? (S.windowBits = -S.windowBits)
                      : S.gzip &&
                        0 < S.windowBits &&
                        S.windowBits < 16 &&
                        (S.windowBits += 16),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new f()),
                      (this.strm.avail_out = 0))
                    var C = a.deflateInit2(
                      this.strm,
                      S.level,
                      S.method,
                      S.windowBits,
                      S.memLevel,
                      S.strategy
                    )
                    if (C !== p) throw new Error(c[C])
                    if (
                      (S.header && a.deflateSetHeader(this.strm, S.header),
                      S.dictionary)
                    ) {
                      var _
                      if (
                        ((_ =
                          typeof S.dictionary == 'string'
                            ? i.string2buf(S.dictionary)
                            : m.call(S.dictionary) === '[object ArrayBuffer]'
                              ? new Uint8Array(S.dictionary)
                              : S.dictionary),
                        (C = a.deflateSetDictionary(this.strm, _)) !== p)
                      )
                        throw new Error(c[C])
                      this._dict_set = !0
                    }
                  }
                  function g(w, S) {
                    var C = new h(S)
                    if ((C.push(w, !0), C.err)) throw C.msg || c[C.err]
                    return C.result
                  }
                  ;((h.prototype.push = function (w, S) {
                    var C,
                      _,
                      E = this.strm,
                      D = this.options.chunkSize
                    if (this.ended) return !1
                    ;((_ = S === ~~S ? S : S === !0 ? 4 : 0),
                      typeof w == 'string'
                        ? (E.input = i.string2buf(w))
                        : m.call(w) === '[object ArrayBuffer]'
                          ? (E.input = new Uint8Array(w))
                          : (E.input = w),
                      (E.next_in = 0),
                      (E.avail_in = E.input.length))
                    do {
                      if (
                        (E.avail_out === 0 &&
                          ((E.output = new l.Buf8(D)),
                          (E.next_out = 0),
                          (E.avail_out = D)),
                        (C = a.deflate(E, _)) !== 1 && C !== p)
                      )
                        return (this.onEnd(C), !(this.ended = !0))
                      ;(E.avail_out !== 0 &&
                        (E.avail_in !== 0 || (_ !== 4 && _ !== 2))) ||
                        (this.options.to === 'string'
                          ? this.onData(
                              i.buf2binstring(l.shrinkBuf(E.output, E.next_out))
                            )
                          : this.onData(l.shrinkBuf(E.output, E.next_out)))
                    } while ((0 < E.avail_in || E.avail_out === 0) && C !== 1)
                    return _ === 4
                      ? ((C = a.deflateEnd(this.strm)),
                        this.onEnd(C),
                        (this.ended = !0),
                        C === p)
                      : _ !== 2 || (this.onEnd(p), !(E.avail_out = 0))
                  }),
                    (h.prototype.onData = function (w) {
                      this.chunks.push(w)
                    }),
                    (h.prototype.onEnd = function (w) {
                      ;(w === p &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = l.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = w),
                        (this.msg = this.strm.msg))
                    }),
                    (o.Deflate = h),
                    (o.deflate = g),
                    (o.deflateRaw = function (w, S) {
                      return (((S = S || {}).raw = !0), g(w, S))
                    }),
                    (o.gzip = function (w, S) {
                      return (((S = S || {}).gzip = !0), g(w, S))
                    }))
                },
                {
                  './utils/common': 41,
                  './utils/strings': 42,
                  './zlib/deflate': 46,
                  './zlib/messages': 51,
                  './zlib/zstream': 53,
                },
              ],
              40: [
                function (t, n, o) {
                  var a = t('./zlib/inflate'),
                    l = t('./utils/common'),
                    i = t('./utils/strings'),
                    c = t('./zlib/constants'),
                    f = t('./zlib/messages'),
                    m = t('./zlib/zstream'),
                    p = t('./zlib/gzheader'),
                    v = Object.prototype.toString
                  function d(h) {
                    if (!(this instanceof d)) return new d(h)
                    this.options = l.assign(
                      { chunkSize: 16384, windowBits: 0, to: '' },
                      h || {}
                    )
                    var g = this.options
                    ;(g.raw &&
                      0 <= g.windowBits &&
                      g.windowBits < 16 &&
                      ((g.windowBits = -g.windowBits),
                      g.windowBits === 0 && (g.windowBits = -15)),
                      !(0 <= g.windowBits && g.windowBits < 16) ||
                        (h && h.windowBits) ||
                        (g.windowBits += 32),
                      15 < g.windowBits &&
                        g.windowBits < 48 &&
                        (15 & g.windowBits) == 0 &&
                        (g.windowBits |= 15),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new m()),
                      (this.strm.avail_out = 0))
                    var w = a.inflateInit2(this.strm, g.windowBits)
                    if (w !== c.Z_OK) throw new Error(f[w])
                    ;((this.header = new p()),
                      a.inflateGetHeader(this.strm, this.header))
                  }
                  function x(h, g) {
                    var w = new d(g)
                    if ((w.push(h, !0), w.err)) throw w.msg || f[w.err]
                    return w.result
                  }
                  ;((d.prototype.push = function (h, g) {
                    var w,
                      S,
                      C,
                      _,
                      E,
                      D,
                      T = this.strm,
                      I = this.options.chunkSize,
                      R = this.options.dictionary,
                      L = !1
                    if (this.ended) return !1
                    ;((S =
                      g === ~~g ? g : g === !0 ? c.Z_FINISH : c.Z_NO_FLUSH),
                      typeof h == 'string'
                        ? (T.input = i.binstring2buf(h))
                        : v.call(h) === '[object ArrayBuffer]'
                          ? (T.input = new Uint8Array(h))
                          : (T.input = h),
                      (T.next_in = 0),
                      (T.avail_in = T.input.length))
                    do {
                      if (
                        (T.avail_out === 0 &&
                          ((T.output = new l.Buf8(I)),
                          (T.next_out = 0),
                          (T.avail_out = I)),
                        (w = a.inflate(T, c.Z_NO_FLUSH)) === c.Z_NEED_DICT &&
                          R &&
                          ((D =
                            typeof R == 'string'
                              ? i.string2buf(R)
                              : v.call(R) === '[object ArrayBuffer]'
                                ? new Uint8Array(R)
                                : R),
                          (w = a.inflateSetDictionary(this.strm, D))),
                        w === c.Z_BUF_ERROR &&
                          L === !0 &&
                          ((w = c.Z_OK), (L = !1)),
                        w !== c.Z_STREAM_END && w !== c.Z_OK)
                      )
                        return (this.onEnd(w), !(this.ended = !0))
                      ;(T.next_out &&
                        ((T.avail_out !== 0 &&
                          w !== c.Z_STREAM_END &&
                          (T.avail_in !== 0 ||
                            (S !== c.Z_FINISH && S !== c.Z_SYNC_FLUSH))) ||
                          (this.options.to === 'string'
                            ? ((C = i.utf8border(T.output, T.next_out)),
                              (_ = T.next_out - C),
                              (E = i.buf2string(T.output, C)),
                              (T.next_out = _),
                              (T.avail_out = I - _),
                              _ && l.arraySet(T.output, T.output, C, _, 0),
                              this.onData(E))
                            : this.onData(l.shrinkBuf(T.output, T.next_out)))),
                        T.avail_in === 0 && T.avail_out === 0 && (L = !0))
                    } while (
                      (0 < T.avail_in || T.avail_out === 0) &&
                      w !== c.Z_STREAM_END
                    )
                    return (
                      w === c.Z_STREAM_END && (S = c.Z_FINISH),
                      S === c.Z_FINISH
                        ? ((w = a.inflateEnd(this.strm)),
                          this.onEnd(w),
                          (this.ended = !0),
                          w === c.Z_OK)
                        : S !== c.Z_SYNC_FLUSH ||
                          (this.onEnd(c.Z_OK), !(T.avail_out = 0))
                    )
                  }),
                    (d.prototype.onData = function (h) {
                      this.chunks.push(h)
                    }),
                    (d.prototype.onEnd = function (h) {
                      ;(h === c.Z_OK &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = l.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = h),
                        (this.msg = this.strm.msg))
                    }),
                    (o.Inflate = d),
                    (o.inflate = x),
                    (o.inflateRaw = function (h, g) {
                      return (((g = g || {}).raw = !0), x(h, g))
                    }),
                    (o.ungzip = x))
                },
                {
                  './utils/common': 41,
                  './utils/strings': 42,
                  './zlib/constants': 44,
                  './zlib/gzheader': 47,
                  './zlib/inflate': 49,
                  './zlib/messages': 51,
                  './zlib/zstream': 53,
                },
              ],
              41: [
                function (t, n, o) {
                  var a =
                    typeof Uint8Array < 'u' &&
                    typeof Uint16Array < 'u' &&
                    typeof Int32Array < 'u'
                  ;((o.assign = function (c) {
                    for (
                      var f = Array.prototype.slice.call(arguments, 1);
                      f.length;

                    ) {
                      var m = f.shift()
                      if (m) {
                        if (typeof m != 'object')
                          throw new TypeError(m + 'must be non-object')
                        for (var p in m) m.hasOwnProperty(p) && (c[p] = m[p])
                      }
                    }
                    return c
                  }),
                    (o.shrinkBuf = function (c, f) {
                      return c.length === f
                        ? c
                        : c.subarray
                          ? c.subarray(0, f)
                          : ((c.length = f), c)
                    }))
                  var l = {
                      arraySet: function (c, f, m, p, v) {
                        if (f.subarray && c.subarray)
                          c.set(f.subarray(m, m + p), v)
                        else for (var d = 0; d < p; d++) c[v + d] = f[m + d]
                      },
                      flattenChunks: function (c) {
                        var f, m, p, v, d, x
                        for (f = p = 0, m = c.length; f < m; f++)
                          p += c[f].length
                        for (
                          x = new Uint8Array(p), f = v = 0, m = c.length;
                          f < m;
                          f++
                        )
                          ((d = c[f]), x.set(d, v), (v += d.length))
                        return x
                      },
                    },
                    i = {
                      arraySet: function (c, f, m, p, v) {
                        for (var d = 0; d < p; d++) c[v + d] = f[m + d]
                      },
                      flattenChunks: function (c) {
                        return [].concat.apply([], c)
                      },
                    }
                  ;((o.setTyped = function (c) {
                    c
                      ? ((o.Buf8 = Uint8Array),
                        (o.Buf16 = Uint16Array),
                        (o.Buf32 = Int32Array),
                        o.assign(o, l))
                      : ((o.Buf8 = Array),
                        (o.Buf16 = Array),
                        (o.Buf32 = Array),
                        o.assign(o, i))
                  }),
                    o.setTyped(a))
                },
                {},
              ],
              42: [
                function (t, n, o) {
                  var a = t('./common'),
                    l = !0,
                    i = !0
                  try {
                    String.fromCharCode.apply(null, [0])
                  } catch {
                    l = !1
                  }
                  try {
                    String.fromCharCode.apply(null, new Uint8Array(1))
                  } catch {
                    i = !1
                  }
                  for (var c = new a.Buf8(256), f = 0; f < 256; f++)
                    c[f] =
                      252 <= f
                        ? 6
                        : 248 <= f
                          ? 5
                          : 240 <= f
                            ? 4
                            : 224 <= f
                              ? 3
                              : 192 <= f
                                ? 2
                                : 1
                  function m(p, v) {
                    if (v < 65537 && ((p.subarray && i) || (!p.subarray && l)))
                      return String.fromCharCode.apply(null, a.shrinkBuf(p, v))
                    for (var d = '', x = 0; x < v; x++)
                      d += String.fromCharCode(p[x])
                    return d
                  }
                  ;((c[254] = c[254] = 1),
                    (o.string2buf = function (p) {
                      var v,
                        d,
                        x,
                        h,
                        g,
                        w = p.length,
                        S = 0
                      for (h = 0; h < w; h++)
                        ((64512 & (d = p.charCodeAt(h))) == 55296 &&
                          h + 1 < w &&
                          (64512 & (x = p.charCodeAt(h + 1))) == 56320 &&
                          ((d = 65536 + ((d - 55296) << 10) + (x - 56320)),
                          h++),
                          (S += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4))
                      for (v = new a.Buf8(S), h = g = 0; g < S; h++)
                        ((64512 & (d = p.charCodeAt(h))) == 55296 &&
                          h + 1 < w &&
                          (64512 & (x = p.charCodeAt(h + 1))) == 56320 &&
                          ((d = 65536 + ((d - 55296) << 10) + (x - 56320)),
                          h++),
                          d < 128
                            ? (v[g++] = d)
                            : (d < 2048
                                ? (v[g++] = 192 | (d >>> 6))
                                : (d < 65536
                                    ? (v[g++] = 224 | (d >>> 12))
                                    : ((v[g++] = 240 | (d >>> 18)),
                                      (v[g++] = 128 | ((d >>> 12) & 63))),
                                  (v[g++] = 128 | ((d >>> 6) & 63))),
                              (v[g++] = 128 | (63 & d))))
                      return v
                    }),
                    (o.buf2binstring = function (p) {
                      return m(p, p.length)
                    }),
                    (o.binstring2buf = function (p) {
                      for (
                        var v = new a.Buf8(p.length), d = 0, x = v.length;
                        d < x;
                        d++
                      )
                        v[d] = p.charCodeAt(d)
                      return v
                    }),
                    (o.buf2string = function (p, v) {
                      var d,
                        x,
                        h,
                        g,
                        w = v || p.length,
                        S = new Array(2 * w)
                      for (d = x = 0; d < w; )
                        if ((h = p[d++]) < 128) S[x++] = h
                        else if (4 < (g = c[h]))
                          ((S[x++] = 65533), (d += g - 1))
                        else {
                          for (
                            h &= g === 2 ? 31 : g === 3 ? 15 : 7;
                            1 < g && d < w;

                          )
                            ((h = (h << 6) | (63 & p[d++])), g--)
                          1 < g
                            ? (S[x++] = 65533)
                            : h < 65536
                              ? (S[x++] = h)
                              : ((h -= 65536),
                                (S[x++] = 55296 | ((h >> 10) & 1023)),
                                (S[x++] = 56320 | (1023 & h)))
                        }
                      return m(S, x)
                    }),
                    (o.utf8border = function (p, v) {
                      var d
                      for (
                        (v = v || p.length) > p.length && (v = p.length),
                          d = v - 1;
                        0 <= d && (192 & p[d]) == 128;

                      )
                        d--
                      return d < 0 || d === 0 ? v : d + c[p[d]] > v ? d : v
                    }))
                },
                { './common': 41 },
              ],
              43: [
                function (t, n, o) {
                  n.exports = function (a, l, i, c) {
                    for (
                      var f = (65535 & a) | 0,
                        m = ((a >>> 16) & 65535) | 0,
                        p = 0;
                      i !== 0;

                    ) {
                      for (
                        i -= p = 2e3 < i ? 2e3 : i;
                        (m = (m + (f = (f + l[c++]) | 0)) | 0), --p;

                      );
                      ;((f %= 65521), (m %= 65521))
                    }
                    return f | (m << 16) | 0
                  }
                },
                {},
              ],
              44: [
                function (t, n, o) {
                  n.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8,
                  }
                },
                {},
              ],
              45: [
                function (t, n, o) {
                  var a = (function () {
                    for (var l, i = [], c = 0; c < 256; c++) {
                      l = c
                      for (var f = 0; f < 8; f++)
                        l = 1 & l ? 3988292384 ^ (l >>> 1) : l >>> 1
                      i[c] = l
                    }
                    return i
                  })()
                  n.exports = function (l, i, c, f) {
                    var m = a,
                      p = f + c
                    l ^= -1
                    for (var v = f; v < p; v++)
                      l = (l >>> 8) ^ m[255 & (l ^ i[v])]
                    return -1 ^ l
                  }
                },
                {},
              ],
              46: [
                function (t, n, o) {
                  var a,
                    l = t('../utils/common'),
                    i = t('./trees'),
                    c = t('./adler32'),
                    f = t('./crc32'),
                    m = t('./messages'),
                    p = 0,
                    v = 4,
                    d = 0,
                    x = -2,
                    h = -1,
                    g = 4,
                    w = 2,
                    S = 8,
                    C = 9,
                    _ = 286,
                    E = 30,
                    D = 19,
                    T = 2 * _ + 1,
                    I = 15,
                    R = 3,
                    L = 258,
                    V = L + R + 1,
                    k = 42,
                    P = 113,
                    b = 1,
                    M = 2,
                    K = 3,
                    U = 4
                  function re(y, H) {
                    return ((y.msg = m[H]), H)
                  }
                  function $(y) {
                    return (y << 1) - (4 < y ? 9 : 0)
                  }
                  function ee(y) {
                    for (var H = y.length; 0 <= --H; ) y[H] = 0
                  }
                  function F(y) {
                    var H = y.state,
                      B = H.pending
                    ;(B > y.avail_out && (B = y.avail_out),
                      B !== 0 &&
                        (l.arraySet(
                          y.output,
                          H.pending_buf,
                          H.pending_out,
                          B,
                          y.next_out
                        ),
                        (y.next_out += B),
                        (H.pending_out += B),
                        (y.total_out += B),
                        (y.avail_out -= B),
                        (H.pending -= B),
                        H.pending === 0 && (H.pending_out = 0)))
                  }
                  function A(y, H) {
                    ;(i._tr_flush_block(
                      y,
                      0 <= y.block_start ? y.block_start : -1,
                      y.strstart - y.block_start,
                      H
                    ),
                      (y.block_start = y.strstart),
                      F(y.strm))
                  }
                  function q(y, H) {
                    y.pending_buf[y.pending++] = H
                  }
                  function G(y, H) {
                    ;((y.pending_buf[y.pending++] = (H >>> 8) & 255),
                      (y.pending_buf[y.pending++] = 255 & H))
                  }
                  function Z(y, H) {
                    var B,
                      j,
                      N = y.max_chain_length,
                      O = y.strstart,
                      W = y.prev_length,
                      Y = y.nice_match,
                      z =
                        y.strstart > y.w_size - V
                          ? y.strstart - (y.w_size - V)
                          : 0,
                      X = y.window,
                      oe = y.w_mask,
                      te = y.prev,
                      ae = y.strstart + L,
                      xe = X[O + W - 1],
                      ve = X[O + W]
                    ;(y.prev_length >= y.good_match && (N >>= 2),
                      Y > y.lookahead && (Y = y.lookahead))
                    do
                      if (
                        X[(B = H) + W] === ve &&
                        X[B + W - 1] === xe &&
                        X[B] === X[O] &&
                        X[++B] === X[O + 1]
                      ) {
                        ;((O += 2), B++)
                        do;
                        while (
                          X[++O] === X[++B] &&
                          X[++O] === X[++B] &&
                          X[++O] === X[++B] &&
                          X[++O] === X[++B] &&
                          X[++O] === X[++B] &&
                          X[++O] === X[++B] &&
                          X[++O] === X[++B] &&
                          X[++O] === X[++B] &&
                          O < ae
                        )
                        if (((j = L - (ae - O)), (O = ae - L), W < j)) {
                          if (((y.match_start = H), Y <= (W = j))) break
                          ;((xe = X[O + W - 1]), (ve = X[O + W]))
                        }
                      }
                    while ((H = te[H & oe]) > z && --N != 0)
                    return W <= y.lookahead ? W : y.lookahead
                  }
                  function fe(y) {
                    var H,
                      B,
                      j,
                      N,
                      O,
                      W,
                      Y,
                      z,
                      X,
                      oe,
                      te = y.w_size
                    do {
                      if (
                        ((N = y.window_size - y.lookahead - y.strstart),
                        y.strstart >= te + (te - V))
                      ) {
                        for (
                          l.arraySet(y.window, y.window, te, te, 0),
                            y.match_start -= te,
                            y.strstart -= te,
                            y.block_start -= te,
                            H = B = y.hash_size;
                          (j = y.head[--H]),
                            (y.head[H] = te <= j ? j - te : 0),
                            --B;

                        );
                        for (
                          H = B = te;
                          (j = y.prev[--H]),
                            (y.prev[H] = te <= j ? j - te : 0),
                            --B;

                        );
                        N += te
                      }
                      if (y.strm.avail_in === 0) break
                      if (
                        ((W = y.strm),
                        (Y = y.window),
                        (z = y.strstart + y.lookahead),
                        (X = N),
                        (oe = void 0),
                        (oe = W.avail_in),
                        X < oe && (oe = X),
                        (B =
                          oe === 0
                            ? 0
                            : ((W.avail_in -= oe),
                              l.arraySet(Y, W.input, W.next_in, oe, z),
                              W.state.wrap === 1
                                ? (W.adler = c(W.adler, Y, oe, z))
                                : W.state.wrap === 2 &&
                                  (W.adler = f(W.adler, Y, oe, z)),
                              (W.next_in += oe),
                              (W.total_in += oe),
                              oe)),
                        (y.lookahead += B),
                        y.lookahead + y.insert >= R)
                      )
                        for (
                          O = y.strstart - y.insert,
                            y.ins_h = y.window[O],
                            y.ins_h =
                              ((y.ins_h << y.hash_shift) ^ y.window[O + 1]) &
                              y.hash_mask;
                          y.insert &&
                          ((y.ins_h =
                            ((y.ins_h << y.hash_shift) ^ y.window[O + R - 1]) &
                            y.hash_mask),
                          (y.prev[O & y.w_mask] = y.head[y.ins_h]),
                          (y.head[y.ins_h] = O),
                          O++,
                          y.insert--,
                          !(y.lookahead + y.insert < R));

                        );
                    } while (y.lookahead < V && y.strm.avail_in !== 0)
                  }
                  function Q(y, H) {
                    for (var B, j; ; ) {
                      if (y.lookahead < V) {
                        if ((fe(y), y.lookahead < V && H === p)) return b
                        if (y.lookahead === 0) break
                      }
                      if (
                        ((B = 0),
                        y.lookahead >= R &&
                          ((y.ins_h =
                            ((y.ins_h << y.hash_shift) ^
                              y.window[y.strstart + R - 1]) &
                            y.hash_mask),
                          (B = y.prev[y.strstart & y.w_mask] = y.head[y.ins_h]),
                          (y.head[y.ins_h] = y.strstart)),
                        B !== 0 &&
                          y.strstart - B <= y.w_size - V &&
                          (y.match_length = Z(y, B)),
                        y.match_length >= R)
                      )
                        if (
                          ((j = i._tr_tally(
                            y,
                            y.strstart - y.match_start,
                            y.match_length - R
                          )),
                          (y.lookahead -= y.match_length),
                          y.match_length <= y.max_lazy_match &&
                            y.lookahead >= R)
                        ) {
                          for (
                            y.match_length--;
                            y.strstart++,
                              (y.ins_h =
                                ((y.ins_h << y.hash_shift) ^
                                  y.window[y.strstart + R - 1]) &
                                y.hash_mask),
                              (B = y.prev[y.strstart & y.w_mask] =
                                y.head[y.ins_h]),
                              (y.head[y.ins_h] = y.strstart),
                              --y.match_length != 0;

                          );
                          y.strstart++
                        } else
                          ((y.strstart += y.match_length),
                            (y.match_length = 0),
                            (y.ins_h = y.window[y.strstart]),
                            (y.ins_h =
                              ((y.ins_h << y.hash_shift) ^
                                y.window[y.strstart + 1]) &
                              y.hash_mask))
                      else
                        ((j = i._tr_tally(y, 0, y.window[y.strstart])),
                          y.lookahead--,
                          y.strstart++)
                      if (j && (A(y, !1), y.strm.avail_out === 0)) return b
                    }
                    return (
                      (y.insert = y.strstart < R - 1 ? y.strstart : R - 1),
                      H === v
                        ? (A(y, !0), y.strm.avail_out === 0 ? K : U)
                        : y.last_lit && (A(y, !1), y.strm.avail_out === 0)
                          ? b
                          : M
                    )
                  }
                  function ne(y, H) {
                    for (var B, j, N; ; ) {
                      if (y.lookahead < V) {
                        if ((fe(y), y.lookahead < V && H === p)) return b
                        if (y.lookahead === 0) break
                      }
                      if (
                        ((B = 0),
                        y.lookahead >= R &&
                          ((y.ins_h =
                            ((y.ins_h << y.hash_shift) ^
                              y.window[y.strstart + R - 1]) &
                            y.hash_mask),
                          (B = y.prev[y.strstart & y.w_mask] = y.head[y.ins_h]),
                          (y.head[y.ins_h] = y.strstart)),
                        (y.prev_length = y.match_length),
                        (y.prev_match = y.match_start),
                        (y.match_length = R - 1),
                        B !== 0 &&
                          y.prev_length < y.max_lazy_match &&
                          y.strstart - B <= y.w_size - V &&
                          ((y.match_length = Z(y, B)),
                          y.match_length <= 5 &&
                            (y.strategy === 1 ||
                              (y.match_length === R &&
                                4096 < y.strstart - y.match_start)) &&
                            (y.match_length = R - 1)),
                        y.prev_length >= R && y.match_length <= y.prev_length)
                      ) {
                        for (
                          N = y.strstart + y.lookahead - R,
                            j = i._tr_tally(
                              y,
                              y.strstart - 1 - y.prev_match,
                              y.prev_length - R
                            ),
                            y.lookahead -= y.prev_length - 1,
                            y.prev_length -= 2;
                          ++y.strstart <= N &&
                            ((y.ins_h =
                              ((y.ins_h << y.hash_shift) ^
                                y.window[y.strstart + R - 1]) &
                              y.hash_mask),
                            (B = y.prev[y.strstart & y.w_mask] =
                              y.head[y.ins_h]),
                            (y.head[y.ins_h] = y.strstart)),
                            --y.prev_length != 0;

                        );
                        if (
                          ((y.match_available = 0),
                          (y.match_length = R - 1),
                          y.strstart++,
                          j && (A(y, !1), y.strm.avail_out === 0))
                        )
                          return b
                      } else if (y.match_available) {
                        if (
                          ((j = i._tr_tally(y, 0, y.window[y.strstart - 1])) &&
                            A(y, !1),
                          y.strstart++,
                          y.lookahead--,
                          y.strm.avail_out === 0)
                        )
                          return b
                      } else
                        ((y.match_available = 1), y.strstart++, y.lookahead--)
                    }
                    return (
                      y.match_available &&
                        ((j = i._tr_tally(y, 0, y.window[y.strstart - 1])),
                        (y.match_available = 0)),
                      (y.insert = y.strstart < R - 1 ? y.strstart : R - 1),
                      H === v
                        ? (A(y, !0), y.strm.avail_out === 0 ? K : U)
                        : y.last_lit && (A(y, !1), y.strm.avail_out === 0)
                          ? b
                          : M
                    )
                  }
                  function se(y, H, B, j, N) {
                    ;((this.good_length = y),
                      (this.max_lazy = H),
                      (this.nice_length = B),
                      (this.max_chain = j),
                      (this.func = N))
                  }
                  function ue() {
                    ;((this.strm = null),
                      (this.status = 0),
                      (this.pending_buf = null),
                      (this.pending_buf_size = 0),
                      (this.pending_out = 0),
                      (this.pending = 0),
                      (this.wrap = 0),
                      (this.gzhead = null),
                      (this.gzindex = 0),
                      (this.method = S),
                      (this.last_flush = -1),
                      (this.w_size = 0),
                      (this.w_bits = 0),
                      (this.w_mask = 0),
                      (this.window = null),
                      (this.window_size = 0),
                      (this.prev = null),
                      (this.head = null),
                      (this.ins_h = 0),
                      (this.hash_size = 0),
                      (this.hash_bits = 0),
                      (this.hash_mask = 0),
                      (this.hash_shift = 0),
                      (this.block_start = 0),
                      (this.match_length = 0),
                      (this.prev_match = 0),
                      (this.match_available = 0),
                      (this.strstart = 0),
                      (this.match_start = 0),
                      (this.lookahead = 0),
                      (this.prev_length = 0),
                      (this.max_chain_length = 0),
                      (this.max_lazy_match = 0),
                      (this.level = 0),
                      (this.strategy = 0),
                      (this.good_match = 0),
                      (this.nice_match = 0),
                      (this.dyn_ltree = new l.Buf16(2 * T)),
                      (this.dyn_dtree = new l.Buf16(2 * (2 * E + 1))),
                      (this.bl_tree = new l.Buf16(2 * (2 * D + 1))),
                      ee(this.dyn_ltree),
                      ee(this.dyn_dtree),
                      ee(this.bl_tree),
                      (this.l_desc = null),
                      (this.d_desc = null),
                      (this.bl_desc = null),
                      (this.bl_count = new l.Buf16(I + 1)),
                      (this.heap = new l.Buf16(2 * _ + 1)),
                      ee(this.heap),
                      (this.heap_len = 0),
                      (this.heap_max = 0),
                      (this.depth = new l.Buf16(2 * _ + 1)),
                      ee(this.depth),
                      (this.l_buf = 0),
                      (this.lit_bufsize = 0),
                      (this.last_lit = 0),
                      (this.d_buf = 0),
                      (this.opt_len = 0),
                      (this.static_len = 0),
                      (this.matches = 0),
                      (this.insert = 0),
                      (this.bi_buf = 0),
                      (this.bi_valid = 0))
                  }
                  function ce(y) {
                    var H
                    return y && y.state
                      ? ((y.total_in = y.total_out = 0),
                        (y.data_type = w),
                        ((H = y.state).pending = 0),
                        (H.pending_out = 0),
                        H.wrap < 0 && (H.wrap = -H.wrap),
                        (H.status = H.wrap ? k : P),
                        (y.adler = H.wrap === 2 ? 0 : 1),
                        (H.last_flush = p),
                        i._tr_init(H),
                        d)
                      : re(y, x)
                  }
                  function he(y) {
                    var H = ce(y)
                    return (
                      H === d &&
                        (function (B) {
                          ;((B.window_size = 2 * B.w_size),
                            ee(B.head),
                            (B.max_lazy_match = a[B.level].max_lazy),
                            (B.good_match = a[B.level].good_length),
                            (B.nice_match = a[B.level].nice_length),
                            (B.max_chain_length = a[B.level].max_chain),
                            (B.strstart = 0),
                            (B.block_start = 0),
                            (B.lookahead = 0),
                            (B.insert = 0),
                            (B.match_length = B.prev_length = R - 1),
                            (B.match_available = 0),
                            (B.ins_h = 0))
                        })(y.state),
                      H
                    )
                  }
                  function ye(y, H, B, j, N, O) {
                    if (!y) return x
                    var W = 1
                    if (
                      (H === h && (H = 6),
                      j < 0
                        ? ((W = 0), (j = -j))
                        : 15 < j && ((W = 2), (j -= 16)),
                      N < 1 ||
                        C < N ||
                        B !== S ||
                        j < 8 ||
                        15 < j ||
                        H < 0 ||
                        9 < H ||
                        O < 0 ||
                        g < O)
                    )
                      return re(y, x)
                    j === 8 && (j = 9)
                    var Y = new ue()
                    return (
                      ((y.state = Y).strm = y),
                      (Y.wrap = W),
                      (Y.gzhead = null),
                      (Y.w_bits = j),
                      (Y.w_size = 1 << Y.w_bits),
                      (Y.w_mask = Y.w_size - 1),
                      (Y.hash_bits = N + 7),
                      (Y.hash_size = 1 << Y.hash_bits),
                      (Y.hash_mask = Y.hash_size - 1),
                      (Y.hash_shift = ~~((Y.hash_bits + R - 1) / R)),
                      (Y.window = new l.Buf8(2 * Y.w_size)),
                      (Y.head = new l.Buf16(Y.hash_size)),
                      (Y.prev = new l.Buf16(Y.w_size)),
                      (Y.lit_bufsize = 1 << (N + 6)),
                      (Y.pending_buf_size = 4 * Y.lit_bufsize),
                      (Y.pending_buf = new l.Buf8(Y.pending_buf_size)),
                      (Y.d_buf = 1 * Y.lit_bufsize),
                      (Y.l_buf = 3 * Y.lit_bufsize),
                      (Y.level = H),
                      (Y.strategy = O),
                      (Y.method = B),
                      he(y)
                    )
                  }
                  ;((a = [
                    new se(0, 0, 0, 0, function (y, H) {
                      var B = 65535
                      for (
                        B > y.pending_buf_size - 5 &&
                        (B = y.pending_buf_size - 5);
                        ;

                      ) {
                        if (y.lookahead <= 1) {
                          if ((fe(y), y.lookahead === 0 && H === p)) return b
                          if (y.lookahead === 0) break
                        }
                        ;((y.strstart += y.lookahead), (y.lookahead = 0))
                        var j = y.block_start + B
                        if (
                          ((y.strstart === 0 || y.strstart >= j) &&
                            ((y.lookahead = y.strstart - j),
                            (y.strstart = j),
                            A(y, !1),
                            y.strm.avail_out === 0)) ||
                          (y.strstart - y.block_start >= y.w_size - V &&
                            (A(y, !1), y.strm.avail_out === 0))
                        )
                          return b
                      }
                      return (
                        (y.insert = 0),
                        H === v
                          ? (A(y, !0), y.strm.avail_out === 0 ? K : U)
                          : (y.strstart > y.block_start &&
                              (A(y, !1), y.strm.avail_out),
                            b)
                      )
                    }),
                    new se(4, 4, 8, 4, Q),
                    new se(4, 5, 16, 8, Q),
                    new se(4, 6, 32, 32, Q),
                    new se(4, 4, 16, 16, ne),
                    new se(8, 16, 32, 32, ne),
                    new se(8, 16, 128, 128, ne),
                    new se(8, 32, 128, 256, ne),
                    new se(32, 128, 258, 1024, ne),
                    new se(32, 258, 258, 4096, ne),
                  ]),
                    (o.deflateInit = function (y, H) {
                      return ye(y, H, S, 15, 8, 0)
                    }),
                    (o.deflateInit2 = ye),
                    (o.deflateReset = he),
                    (o.deflateResetKeep = ce),
                    (o.deflateSetHeader = function (y, H) {
                      return y && y.state
                        ? y.state.wrap !== 2
                          ? x
                          : ((y.state.gzhead = H), d)
                        : x
                    }),
                    (o.deflate = function (y, H) {
                      var B, j, N, O
                      if (!y || !y.state || 5 < H || H < 0)
                        return y ? re(y, x) : x
                      if (
                        ((j = y.state),
                        !y.output ||
                          (!y.input && y.avail_in !== 0) ||
                          (j.status === 666 && H !== v))
                      )
                        return re(y, y.avail_out === 0 ? -5 : x)
                      if (
                        ((j.strm = y),
                        (B = j.last_flush),
                        (j.last_flush = H),
                        j.status === k)
                      )
                        if (j.wrap === 2)
                          ((y.adler = 0),
                            q(j, 31),
                            q(j, 139),
                            q(j, 8),
                            j.gzhead
                              ? (q(
                                  j,
                                  (j.gzhead.text ? 1 : 0) +
                                    (j.gzhead.hcrc ? 2 : 0) +
                                    (j.gzhead.extra ? 4 : 0) +
                                    (j.gzhead.name ? 8 : 0) +
                                    (j.gzhead.comment ? 16 : 0)
                                ),
                                q(j, 255 & j.gzhead.time),
                                q(j, (j.gzhead.time >> 8) & 255),
                                q(j, (j.gzhead.time >> 16) & 255),
                                q(j, (j.gzhead.time >> 24) & 255),
                                q(
                                  j,
                                  j.level === 9
                                    ? 2
                                    : 2 <= j.strategy || j.level < 2
                                      ? 4
                                      : 0
                                ),
                                q(j, 255 & j.gzhead.os),
                                j.gzhead.extra &&
                                  j.gzhead.extra.length &&
                                  (q(j, 255 & j.gzhead.extra.length),
                                  q(j, (j.gzhead.extra.length >> 8) & 255)),
                                j.gzhead.hcrc &&
                                  (y.adler = f(
                                    y.adler,
                                    j.pending_buf,
                                    j.pending,
                                    0
                                  )),
                                (j.gzindex = 0),
                                (j.status = 69))
                              : (q(j, 0),
                                q(j, 0),
                                q(j, 0),
                                q(j, 0),
                                q(j, 0),
                                q(
                                  j,
                                  j.level === 9
                                    ? 2
                                    : 2 <= j.strategy || j.level < 2
                                      ? 4
                                      : 0
                                ),
                                q(j, 3),
                                (j.status = P)))
                        else {
                          var W = (S + ((j.w_bits - 8) << 4)) << 8
                          ;((W |=
                            (2 <= j.strategy || j.level < 2
                              ? 0
                              : j.level < 6
                                ? 1
                                : j.level === 6
                                  ? 2
                                  : 3) << 6),
                            j.strstart !== 0 && (W |= 32),
                            (W += 31 - (W % 31)),
                            (j.status = P),
                            G(j, W),
                            j.strstart !== 0 &&
                              (G(j, y.adler >>> 16), G(j, 65535 & y.adler)),
                            (y.adler = 1))
                        }
                      if (j.status === 69)
                        if (j.gzhead.extra) {
                          for (
                            N = j.pending;
                            j.gzindex < (65535 & j.gzhead.extra.length) &&
                            (j.pending !== j.pending_buf_size ||
                              (j.gzhead.hcrc &&
                                j.pending > N &&
                                (y.adler = f(
                                  y.adler,
                                  j.pending_buf,
                                  j.pending - N,
                                  N
                                )),
                              F(y),
                              (N = j.pending),
                              j.pending !== j.pending_buf_size));

                          )
                            (q(j, 255 & j.gzhead.extra[j.gzindex]), j.gzindex++)
                          ;(j.gzhead.hcrc &&
                            j.pending > N &&
                            (y.adler = f(
                              y.adler,
                              j.pending_buf,
                              j.pending - N,
                              N
                            )),
                            j.gzindex === j.gzhead.extra.length &&
                              ((j.gzindex = 0), (j.status = 73)))
                        } else j.status = 73
                      if (j.status === 73)
                        if (j.gzhead.name) {
                          N = j.pending
                          do {
                            if (
                              j.pending === j.pending_buf_size &&
                              (j.gzhead.hcrc &&
                                j.pending > N &&
                                (y.adler = f(
                                  y.adler,
                                  j.pending_buf,
                                  j.pending - N,
                                  N
                                )),
                              F(y),
                              (N = j.pending),
                              j.pending === j.pending_buf_size)
                            ) {
                              O = 1
                              break
                            }
                            ;((O =
                              j.gzindex < j.gzhead.name.length
                                ? 255 & j.gzhead.name.charCodeAt(j.gzindex++)
                                : 0),
                              q(j, O))
                          } while (O !== 0)
                          ;(j.gzhead.hcrc &&
                            j.pending > N &&
                            (y.adler = f(
                              y.adler,
                              j.pending_buf,
                              j.pending - N,
                              N
                            )),
                            O === 0 && ((j.gzindex = 0), (j.status = 91)))
                        } else j.status = 91
                      if (j.status === 91)
                        if (j.gzhead.comment) {
                          N = j.pending
                          do {
                            if (
                              j.pending === j.pending_buf_size &&
                              (j.gzhead.hcrc &&
                                j.pending > N &&
                                (y.adler = f(
                                  y.adler,
                                  j.pending_buf,
                                  j.pending - N,
                                  N
                                )),
                              F(y),
                              (N = j.pending),
                              j.pending === j.pending_buf_size)
                            ) {
                              O = 1
                              break
                            }
                            ;((O =
                              j.gzindex < j.gzhead.comment.length
                                ? 255 & j.gzhead.comment.charCodeAt(j.gzindex++)
                                : 0),
                              q(j, O))
                          } while (O !== 0)
                          ;(j.gzhead.hcrc &&
                            j.pending > N &&
                            (y.adler = f(
                              y.adler,
                              j.pending_buf,
                              j.pending - N,
                              N
                            )),
                            O === 0 && (j.status = 103))
                        } else j.status = 103
                      if (
                        (j.status === 103 &&
                          (j.gzhead.hcrc
                            ? (j.pending + 2 > j.pending_buf_size && F(y),
                              j.pending + 2 <= j.pending_buf_size &&
                                (q(j, 255 & y.adler),
                                q(j, (y.adler >> 8) & 255),
                                (y.adler = 0),
                                (j.status = P)))
                            : (j.status = P)),
                        j.pending !== 0)
                      ) {
                        if ((F(y), y.avail_out === 0))
                          return ((j.last_flush = -1), d)
                      } else if (y.avail_in === 0 && $(H) <= $(B) && H !== v)
                        return re(y, -5)
                      if (j.status === 666 && y.avail_in !== 0) return re(y, -5)
                      if (
                        y.avail_in !== 0 ||
                        j.lookahead !== 0 ||
                        (H !== p && j.status !== 666)
                      ) {
                        var Y =
                          j.strategy === 2
                            ? (function (z, X) {
                                for (var oe; ; ) {
                                  if (
                                    z.lookahead === 0 &&
                                    (fe(z), z.lookahead === 0)
                                  ) {
                                    if (X === p) return b
                                    break
                                  }
                                  if (
                                    ((z.match_length = 0),
                                    (oe = i._tr_tally(
                                      z,
                                      0,
                                      z.window[z.strstart]
                                    )),
                                    z.lookahead--,
                                    z.strstart++,
                                    oe && (A(z, !1), z.strm.avail_out === 0))
                                  )
                                    return b
                                }
                                return (
                                  (z.insert = 0),
                                  X === v
                                    ? (A(z, !0), z.strm.avail_out === 0 ? K : U)
                                    : z.last_lit &&
                                        (A(z, !1), z.strm.avail_out === 0)
                                      ? b
                                      : M
                                )
                              })(j, H)
                            : j.strategy === 3
                              ? (function (z, X) {
                                  for (var oe, te, ae, xe, ve = z.window; ; ) {
                                    if (z.lookahead <= L) {
                                      if ((fe(z), z.lookahead <= L && X === p))
                                        return b
                                      if (z.lookahead === 0) break
                                    }
                                    if (
                                      ((z.match_length = 0),
                                      z.lookahead >= R &&
                                        0 < z.strstart &&
                                        (te = ve[(ae = z.strstart - 1)]) ===
                                          ve[++ae] &&
                                        te === ve[++ae] &&
                                        te === ve[++ae])
                                    ) {
                                      xe = z.strstart + L
                                      do;
                                      while (
                                        te === ve[++ae] &&
                                        te === ve[++ae] &&
                                        te === ve[++ae] &&
                                        te === ve[++ae] &&
                                        te === ve[++ae] &&
                                        te === ve[++ae] &&
                                        te === ve[++ae] &&
                                        te === ve[++ae] &&
                                        ae < xe
                                      )
                                      ;((z.match_length = L - (xe - ae)),
                                        z.match_length > z.lookahead &&
                                          (z.match_length = z.lookahead))
                                    }
                                    if (
                                      (z.match_length >= R
                                        ? ((oe = i._tr_tally(
                                            z,
                                            1,
                                            z.match_length - R
                                          )),
                                          (z.lookahead -= z.match_length),
                                          (z.strstart += z.match_length),
                                          (z.match_length = 0))
                                        : ((oe = i._tr_tally(
                                            z,
                                            0,
                                            z.window[z.strstart]
                                          )),
                                          z.lookahead--,
                                          z.strstart++),
                                      oe && (A(z, !1), z.strm.avail_out === 0))
                                    )
                                      return b
                                  }
                                  return (
                                    (z.insert = 0),
                                    X === v
                                      ? (A(z, !0),
                                        z.strm.avail_out === 0 ? K : U)
                                      : z.last_lit &&
                                          (A(z, !1), z.strm.avail_out === 0)
                                        ? b
                                        : M
                                  )
                                })(j, H)
                              : a[j.level].func(j, H)
                        if (
                          ((Y !== K && Y !== U) || (j.status = 666),
                          Y === b || Y === K)
                        )
                          return (y.avail_out === 0 && (j.last_flush = -1), d)
                        if (
                          Y === M &&
                          (H === 1
                            ? i._tr_align(j)
                            : H !== 5 &&
                              (i._tr_stored_block(j, 0, 0, !1),
                              H === 3 &&
                                (ee(j.head),
                                j.lookahead === 0 &&
                                  ((j.strstart = 0),
                                  (j.block_start = 0),
                                  (j.insert = 0)))),
                          F(y),
                          y.avail_out === 0)
                        )
                          return ((j.last_flush = -1), d)
                      }
                      return H !== v
                        ? d
                        : j.wrap <= 0
                          ? 1
                          : (j.wrap === 2
                              ? (q(j, 255 & y.adler),
                                q(j, (y.adler >> 8) & 255),
                                q(j, (y.adler >> 16) & 255),
                                q(j, (y.adler >> 24) & 255),
                                q(j, 255 & y.total_in),
                                q(j, (y.total_in >> 8) & 255),
                                q(j, (y.total_in >> 16) & 255),
                                q(j, (y.total_in >> 24) & 255))
                              : (G(j, y.adler >>> 16), G(j, 65535 & y.adler)),
                            F(y),
                            0 < j.wrap && (j.wrap = -j.wrap),
                            j.pending !== 0 ? d : 1)
                    }),
                    (o.deflateEnd = function (y) {
                      var H
                      return y && y.state
                        ? (H = y.state.status) !== k &&
                          H !== 69 &&
                          H !== 73 &&
                          H !== 91 &&
                          H !== 103 &&
                          H !== P &&
                          H !== 666
                          ? re(y, x)
                          : ((y.state = null), H === P ? re(y, -3) : d)
                        : x
                    }),
                    (o.deflateSetDictionary = function (y, H) {
                      var B,
                        j,
                        N,
                        O,
                        W,
                        Y,
                        z,
                        X,
                        oe = H.length
                      if (
                        !y ||
                        !y.state ||
                        (O = (B = y.state).wrap) === 2 ||
                        (O === 1 && B.status !== k) ||
                        B.lookahead
                      )
                        return x
                      for (
                        O === 1 && (y.adler = c(y.adler, H, oe, 0)),
                          B.wrap = 0,
                          oe >= B.w_size &&
                            (O === 0 &&
                              (ee(B.head),
                              (B.strstart = 0),
                              (B.block_start = 0),
                              (B.insert = 0)),
                            (X = new l.Buf8(B.w_size)),
                            l.arraySet(X, H, oe - B.w_size, B.w_size, 0),
                            (H = X),
                            (oe = B.w_size)),
                          W = y.avail_in,
                          Y = y.next_in,
                          z = y.input,
                          y.avail_in = oe,
                          y.next_in = 0,
                          y.input = H,
                          fe(B);
                        B.lookahead >= R;

                      ) {
                        for (
                          j = B.strstart, N = B.lookahead - (R - 1);
                          (B.ins_h =
                            ((B.ins_h << B.hash_shift) ^ B.window[j + R - 1]) &
                            B.hash_mask),
                            (B.prev[j & B.w_mask] = B.head[B.ins_h]),
                            (B.head[B.ins_h] = j),
                            j++,
                            --N;

                        );
                        ;((B.strstart = j), (B.lookahead = R - 1), fe(B))
                      }
                      return (
                        (B.strstart += B.lookahead),
                        (B.block_start = B.strstart),
                        (B.insert = B.lookahead),
                        (B.lookahead = 0),
                        (B.match_length = B.prev_length = R - 1),
                        (B.match_available = 0),
                        (y.next_in = Y),
                        (y.input = z),
                        (y.avail_in = W),
                        (B.wrap = O),
                        d
                      )
                    }),
                    (o.deflateInfo = 'pako deflate (from Nodeca project)'))
                },
                {
                  '../utils/common': 41,
                  './adler32': 43,
                  './crc32': 45,
                  './messages': 51,
                  './trees': 52,
                },
              ],
              47: [
                function (t, n, o) {
                  n.exports = function () {
                    ;((this.text = 0),
                      (this.time = 0),
                      (this.xflags = 0),
                      (this.os = 0),
                      (this.extra = null),
                      (this.extra_len = 0),
                      (this.name = ''),
                      (this.comment = ''),
                      (this.hcrc = 0),
                      (this.done = !1))
                  }
                },
                {},
              ],
              48: [
                function (t, n, o) {
                  n.exports = function (a, l) {
                    var i,
                      c,
                      f,
                      m,
                      p,
                      v,
                      d,
                      x,
                      h,
                      g,
                      w,
                      S,
                      C,
                      _,
                      E,
                      D,
                      T,
                      I,
                      R,
                      L,
                      V,
                      k,
                      P,
                      b,
                      M
                    ;((i = a.state),
                      (c = a.next_in),
                      (b = a.input),
                      (f = c + (a.avail_in - 5)),
                      (m = a.next_out),
                      (M = a.output),
                      (p = m - (l - a.avail_out)),
                      (v = m + (a.avail_out - 257)),
                      (d = i.dmax),
                      (x = i.wsize),
                      (h = i.whave),
                      (g = i.wnext),
                      (w = i.window),
                      (S = i.hold),
                      (C = i.bits),
                      (_ = i.lencode),
                      (E = i.distcode),
                      (D = (1 << i.lenbits) - 1),
                      (T = (1 << i.distbits) - 1))
                    e: do {
                      ;(C < 15 &&
                        ((S += b[c++] << C),
                        (C += 8),
                        (S += b[c++] << C),
                        (C += 8)),
                        (I = _[S & D]))
                      t: for (;;) {
                        if (
                          ((S >>>= R = I >>> 24),
                          (C -= R),
                          (R = (I >>> 16) & 255) === 0)
                        )
                          M[m++] = 65535 & I
                        else {
                          if (!(16 & R)) {
                            if ((64 & R) == 0) {
                              I = _[(65535 & I) + (S & ((1 << R) - 1))]
                              continue t
                            }
                            if (32 & R) {
                              i.mode = 12
                              break e
                            }
                            ;((a.msg = 'invalid literal/length code'),
                              (i.mode = 30))
                            break e
                          }
                          ;((L = 65535 & I),
                            (R &= 15) &&
                              (C < R && ((S += b[c++] << C), (C += 8)),
                              (L += S & ((1 << R) - 1)),
                              (S >>>= R),
                              (C -= R)),
                            C < 15 &&
                              ((S += b[c++] << C),
                              (C += 8),
                              (S += b[c++] << C),
                              (C += 8)),
                            (I = E[S & T]))
                          r: for (;;) {
                            if (
                              ((S >>>= R = I >>> 24),
                              (C -= R),
                              !(16 & (R = (I >>> 16) & 255)))
                            ) {
                              if ((64 & R) == 0) {
                                I = E[(65535 & I) + (S & ((1 << R) - 1))]
                                continue r
                              }
                              ;((a.msg = 'invalid distance code'),
                                (i.mode = 30))
                              break e
                            }
                            if (
                              ((V = 65535 & I),
                              C < (R &= 15) &&
                                ((S += b[c++] << C),
                                (C += 8) < R && ((S += b[c++] << C), (C += 8))),
                              d < (V += S & ((1 << R) - 1)))
                            ) {
                              ;((a.msg = 'invalid distance too far back'),
                                (i.mode = 30))
                              break e
                            }
                            if (((S >>>= R), (C -= R), (R = m - p) < V)) {
                              if (h < (R = V - R) && i.sane) {
                                ;((a.msg = 'invalid distance too far back'),
                                  (i.mode = 30))
                                break e
                              }
                              if (((P = w), (k = 0) === g)) {
                                if (((k += x - R), R < L)) {
                                  for (L -= R; (M[m++] = w[k++]), --R; );
                                  ;((k = m - V), (P = M))
                                }
                              } else if (g < R) {
                                if (((k += x + g - R), (R -= g) < L)) {
                                  for (L -= R; (M[m++] = w[k++]), --R; );
                                  if (((k = 0), g < L)) {
                                    for (L -= R = g; (M[m++] = w[k++]), --R; );
                                    ;((k = m - V), (P = M))
                                  }
                                }
                              } else if (((k += g - R), R < L)) {
                                for (L -= R; (M[m++] = w[k++]), --R; );
                                ;((k = m - V), (P = M))
                              }
                              for (; 2 < L; )
                                ((M[m++] = P[k++]),
                                  (M[m++] = P[k++]),
                                  (M[m++] = P[k++]),
                                  (L -= 3))
                              L &&
                                ((M[m++] = P[k++]), 1 < L && (M[m++] = P[k++]))
                            } else {
                              for (
                                k = m - V;
                                (M[m++] = M[k++]),
                                  (M[m++] = M[k++]),
                                  (M[m++] = M[k++]),
                                  2 < (L -= 3);

                              );
                              L &&
                                ((M[m++] = M[k++]), 1 < L && (M[m++] = M[k++]))
                            }
                            break
                          }
                        }
                        break
                      }
                    } while (c < f && m < v)
                    ;((c -= L = C >> 3),
                      (S &= (1 << (C -= L << 3)) - 1),
                      (a.next_in = c),
                      (a.next_out = m),
                      (a.avail_in = c < f ? f - c + 5 : 5 - (c - f)),
                      (a.avail_out = m < v ? v - m + 257 : 257 - (m - v)),
                      (i.hold = S),
                      (i.bits = C))
                  }
                },
                {},
              ],
              49: [
                function (t, n, o) {
                  var a = t('../utils/common'),
                    l = t('./adler32'),
                    i = t('./crc32'),
                    c = t('./inffast'),
                    f = t('./inftrees'),
                    m = 1,
                    p = 2,
                    v = 0,
                    d = -2,
                    x = 1,
                    h = 852,
                    g = 592
                  function w(k) {
                    return (
                      ((k >>> 24) & 255) +
                      ((k >>> 8) & 65280) +
                      ((65280 & k) << 8) +
                      ((255 & k) << 24)
                    )
                  }
                  function S() {
                    ;((this.mode = 0),
                      (this.last = !1),
                      (this.wrap = 0),
                      (this.havedict = !1),
                      (this.flags = 0),
                      (this.dmax = 0),
                      (this.check = 0),
                      (this.total = 0),
                      (this.head = null),
                      (this.wbits = 0),
                      (this.wsize = 0),
                      (this.whave = 0),
                      (this.wnext = 0),
                      (this.window = null),
                      (this.hold = 0),
                      (this.bits = 0),
                      (this.length = 0),
                      (this.offset = 0),
                      (this.extra = 0),
                      (this.lencode = null),
                      (this.distcode = null),
                      (this.lenbits = 0),
                      (this.distbits = 0),
                      (this.ncode = 0),
                      (this.nlen = 0),
                      (this.ndist = 0),
                      (this.have = 0),
                      (this.next = null),
                      (this.lens = new a.Buf16(320)),
                      (this.work = new a.Buf16(288)),
                      (this.lendyn = null),
                      (this.distdyn = null),
                      (this.sane = 0),
                      (this.back = 0),
                      (this.was = 0))
                  }
                  function C(k) {
                    var P
                    return k && k.state
                      ? ((P = k.state),
                        (k.total_in = k.total_out = P.total = 0),
                        (k.msg = ''),
                        P.wrap && (k.adler = 1 & P.wrap),
                        (P.mode = x),
                        (P.last = 0),
                        (P.havedict = 0),
                        (P.dmax = 32768),
                        (P.head = null),
                        (P.hold = 0),
                        (P.bits = 0),
                        (P.lencode = P.lendyn = new a.Buf32(h)),
                        (P.distcode = P.distdyn = new a.Buf32(g)),
                        (P.sane = 1),
                        (P.back = -1),
                        v)
                      : d
                  }
                  function _(k) {
                    var P
                    return k && k.state
                      ? (((P = k.state).wsize = 0),
                        (P.whave = 0),
                        (P.wnext = 0),
                        C(k))
                      : d
                  }
                  function E(k, P) {
                    var b, M
                    return k && k.state
                      ? ((M = k.state),
                        P < 0
                          ? ((b = 0), (P = -P))
                          : ((b = 1 + (P >> 4)), P < 48 && (P &= 15)),
                        P && (P < 8 || 15 < P)
                          ? d
                          : (M.window !== null &&
                              M.wbits !== P &&
                              (M.window = null),
                            (M.wrap = b),
                            (M.wbits = P),
                            _(k)))
                      : d
                  }
                  function D(k, P) {
                    var b, M
                    return k
                      ? ((M = new S()),
                        ((k.state = M).window = null),
                        (b = E(k, P)) !== v && (k.state = null),
                        b)
                      : d
                  }
                  var T,
                    I,
                    R = !0
                  function L(k) {
                    if (R) {
                      var P
                      for (
                        T = new a.Buf32(512), I = new a.Buf32(32), P = 0;
                        P < 144;

                      )
                        k.lens[P++] = 8
                      for (; P < 256; ) k.lens[P++] = 9
                      for (; P < 280; ) k.lens[P++] = 7
                      for (; P < 288; ) k.lens[P++] = 8
                      for (
                        f(m, k.lens, 0, 288, T, 0, k.work, { bits: 9 }), P = 0;
                        P < 32;

                      )
                        k.lens[P++] = 5
                      ;(f(p, k.lens, 0, 32, I, 0, k.work, { bits: 5 }),
                        (R = !1))
                    }
                    ;((k.lencode = T),
                      (k.lenbits = 9),
                      (k.distcode = I),
                      (k.distbits = 5))
                  }
                  function V(k, P, b, M) {
                    var K,
                      U = k.state
                    return (
                      U.window === null &&
                        ((U.wsize = 1 << U.wbits),
                        (U.wnext = 0),
                        (U.whave = 0),
                        (U.window = new a.Buf8(U.wsize))),
                      M >= U.wsize
                        ? (a.arraySet(U.window, P, b - U.wsize, U.wsize, 0),
                          (U.wnext = 0),
                          (U.whave = U.wsize))
                        : (M < (K = U.wsize - U.wnext) && (K = M),
                          a.arraySet(U.window, P, b - M, K, U.wnext),
                          (M -= K)
                            ? (a.arraySet(U.window, P, b - M, M, 0),
                              (U.wnext = M),
                              (U.whave = U.wsize))
                            : ((U.wnext += K),
                              U.wnext === U.wsize && (U.wnext = 0),
                              U.whave < U.wsize && (U.whave += K))),
                      0
                    )
                  }
                  ;((o.inflateReset = _),
                    (o.inflateReset2 = E),
                    (o.inflateResetKeep = C),
                    (o.inflateInit = function (k) {
                      return D(k, 15)
                    }),
                    (o.inflateInit2 = D),
                    (o.inflate = function (k, P) {
                      var b,
                        M,
                        K,
                        U,
                        re,
                        $,
                        ee,
                        F,
                        A,
                        q,
                        G,
                        Z,
                        fe,
                        Q,
                        ne,
                        se,
                        ue,
                        ce,
                        he,
                        ye,
                        y,
                        H,
                        B,
                        j,
                        N = 0,
                        O = new a.Buf8(4),
                        W = [
                          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2,
                          14, 1, 15,
                        ]
                      if (
                        !k ||
                        !k.state ||
                        !k.output ||
                        (!k.input && k.avail_in !== 0)
                      )
                        return d
                      ;((b = k.state).mode === 12 && (b.mode = 13),
                        (re = k.next_out),
                        (K = k.output),
                        (ee = k.avail_out),
                        (U = k.next_in),
                        (M = k.input),
                        ($ = k.avail_in),
                        (F = b.hold),
                        (A = b.bits),
                        (q = $),
                        (G = ee),
                        (H = v))
                      e: for (;;)
                        switch (b.mode) {
                          case x:
                            if (b.wrap === 0) {
                              b.mode = 13
                              break
                            }
                            for (; A < 16; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            if (2 & b.wrap && F === 35615) {
                              ;((O[(b.check = 0)] = 255 & F),
                                (O[1] = (F >>> 8) & 255),
                                (b.check = i(b.check, O, 2, 0)),
                                (A = F = 0),
                                (b.mode = 2))
                              break
                            }
                            if (
                              ((b.flags = 0),
                              b.head && (b.head.done = !1),
                              !(1 & b.wrap) ||
                                (((255 & F) << 8) + (F >> 8)) % 31)
                            ) {
                              ;((k.msg = 'incorrect header check'),
                                (b.mode = 30))
                              break
                            }
                            if ((15 & F) != 8) {
                              ;((k.msg = 'unknown compression method'),
                                (b.mode = 30))
                              break
                            }
                            if (
                              ((A -= 4),
                              (y = 8 + (15 & (F >>>= 4))),
                              b.wbits === 0)
                            )
                              b.wbits = y
                            else if (y > b.wbits) {
                              ;((k.msg = 'invalid window size'), (b.mode = 30))
                              break
                            }
                            ;((b.dmax = 1 << y),
                              (k.adler = b.check = 1),
                              (b.mode = 512 & F ? 10 : 12),
                              (A = F = 0))
                            break
                          case 2:
                            for (; A < 16; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            if (((b.flags = F), (255 & b.flags) != 8)) {
                              ;((k.msg = 'unknown compression method'),
                                (b.mode = 30))
                              break
                            }
                            if (57344 & b.flags) {
                              ;((k.msg = 'unknown header flags set'),
                                (b.mode = 30))
                              break
                            }
                            ;(b.head && (b.head.text = (F >> 8) & 1),
                              512 & b.flags &&
                                ((O[0] = 255 & F),
                                (O[1] = (F >>> 8) & 255),
                                (b.check = i(b.check, O, 2, 0))),
                              (A = F = 0),
                              (b.mode = 3))
                          case 3:
                            for (; A < 32; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            ;(b.head && (b.head.time = F),
                              512 & b.flags &&
                                ((O[0] = 255 & F),
                                (O[1] = (F >>> 8) & 255),
                                (O[2] = (F >>> 16) & 255),
                                (O[3] = (F >>> 24) & 255),
                                (b.check = i(b.check, O, 4, 0))),
                              (A = F = 0),
                              (b.mode = 4))
                          case 4:
                            for (; A < 16; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            ;(b.head &&
                              ((b.head.xflags = 255 & F), (b.head.os = F >> 8)),
                              512 & b.flags &&
                                ((O[0] = 255 & F),
                                (O[1] = (F >>> 8) & 255),
                                (b.check = i(b.check, O, 2, 0))),
                              (A = F = 0),
                              (b.mode = 5))
                          case 5:
                            if (1024 & b.flags) {
                              for (; A < 16; ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              ;((b.length = F),
                                b.head && (b.head.extra_len = F),
                                512 & b.flags &&
                                  ((O[0] = 255 & F),
                                  (O[1] = (F >>> 8) & 255),
                                  (b.check = i(b.check, O, 2, 0))),
                                (A = F = 0))
                            } else b.head && (b.head.extra = null)
                            b.mode = 6
                          case 6:
                            if (
                              1024 & b.flags &&
                              ($ < (Z = b.length) && (Z = $),
                              Z &&
                                (b.head &&
                                  ((y = b.head.extra_len - b.length),
                                  b.head.extra ||
                                    (b.head.extra = new Array(
                                      b.head.extra_len
                                    )),
                                  a.arraySet(b.head.extra, M, U, Z, y)),
                                512 & b.flags &&
                                  (b.check = i(b.check, M, Z, U)),
                                ($ -= Z),
                                (U += Z),
                                (b.length -= Z)),
                              b.length)
                            )
                              break e
                            ;((b.length = 0), (b.mode = 7))
                          case 7:
                            if (2048 & b.flags) {
                              if ($ === 0) break e
                              for (
                                Z = 0;
                                (y = M[U + Z++]),
                                  b.head &&
                                    y &&
                                    b.length < 65536 &&
                                    (b.head.name += String.fromCharCode(y)),
                                  y && Z < $;

                              );
                              if (
                                (512 & b.flags &&
                                  (b.check = i(b.check, M, Z, U)),
                                ($ -= Z),
                                (U += Z),
                                y)
                              )
                                break e
                            } else b.head && (b.head.name = null)
                            ;((b.length = 0), (b.mode = 8))
                          case 8:
                            if (4096 & b.flags) {
                              if ($ === 0) break e
                              for (
                                Z = 0;
                                (y = M[U + Z++]),
                                  b.head &&
                                    y &&
                                    b.length < 65536 &&
                                    (b.head.comment += String.fromCharCode(y)),
                                  y && Z < $;

                              );
                              if (
                                (512 & b.flags &&
                                  (b.check = i(b.check, M, Z, U)),
                                ($ -= Z),
                                (U += Z),
                                y)
                              )
                                break e
                            } else b.head && (b.head.comment = null)
                            b.mode = 9
                          case 9:
                            if (512 & b.flags) {
                              for (; A < 16; ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              if (F !== (65535 & b.check)) {
                                ;((k.msg = 'header crc mismatch'),
                                  (b.mode = 30))
                                break
                              }
                              A = F = 0
                            }
                            ;(b.head &&
                              ((b.head.hcrc = (b.flags >> 9) & 1),
                              (b.head.done = !0)),
                              (k.adler = b.check = 0),
                              (b.mode = 12))
                            break
                          case 10:
                            for (; A < 32; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            ;((k.adler = b.check = w(F)),
                              (A = F = 0),
                              (b.mode = 11))
                          case 11:
                            if (b.havedict === 0)
                              return (
                                (k.next_out = re),
                                (k.avail_out = ee),
                                (k.next_in = U),
                                (k.avail_in = $),
                                (b.hold = F),
                                (b.bits = A),
                                2
                              )
                            ;((k.adler = b.check = 1), (b.mode = 12))
                          case 12:
                            if (P === 5 || P === 6) break e
                          case 13:
                            if (b.last) {
                              ;((F >>>= 7 & A), (A -= 7 & A), (b.mode = 27))
                              break
                            }
                            for (; A < 3; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            switch (
                              ((b.last = 1 & F), (A -= 1), 3 & (F >>>= 1))
                            ) {
                              case 0:
                                b.mode = 14
                                break
                              case 1:
                                if ((L(b), (b.mode = 20), P !== 6)) break
                                ;((F >>>= 2), (A -= 2))
                                break e
                              case 2:
                                b.mode = 17
                                break
                              case 3:
                                ;((k.msg = 'invalid block type'), (b.mode = 30))
                            }
                            ;((F >>>= 2), (A -= 2))
                            break
                          case 14:
                            for (F >>>= 7 & A, A -= 7 & A; A < 32; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            if ((65535 & F) != ((F >>> 16) ^ 65535)) {
                              ;((k.msg = 'invalid stored block lengths'),
                                (b.mode = 30))
                              break
                            }
                            if (
                              ((b.length = 65535 & F),
                              (A = F = 0),
                              (b.mode = 15),
                              P === 6)
                            )
                              break e
                          case 15:
                            b.mode = 16
                          case 16:
                            if ((Z = b.length)) {
                              if (
                                ($ < Z && (Z = $), ee < Z && (Z = ee), Z === 0)
                              )
                                break e
                              ;(a.arraySet(K, M, U, Z, re),
                                ($ -= Z),
                                (U += Z),
                                (ee -= Z),
                                (re += Z),
                                (b.length -= Z))
                              break
                            }
                            b.mode = 12
                            break
                          case 17:
                            for (; A < 14; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            if (
                              ((b.nlen = 257 + (31 & F)),
                              (F >>>= 5),
                              (A -= 5),
                              (b.ndist = 1 + (31 & F)),
                              (F >>>= 5),
                              (A -= 5),
                              (b.ncode = 4 + (15 & F)),
                              (F >>>= 4),
                              (A -= 4),
                              286 < b.nlen || 30 < b.ndist)
                            ) {
                              ;((k.msg = 'too many length or distance symbols'),
                                (b.mode = 30))
                              break
                            }
                            ;((b.have = 0), (b.mode = 18))
                          case 18:
                            for (; b.have < b.ncode; ) {
                              for (; A < 3; ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              ;((b.lens[W[b.have++]] = 7 & F),
                                (F >>>= 3),
                                (A -= 3))
                            }
                            for (; b.have < 19; ) b.lens[W[b.have++]] = 0
                            if (
                              ((b.lencode = b.lendyn),
                              (b.lenbits = 7),
                              (B = { bits: b.lenbits }),
                              (H = f(
                                0,
                                b.lens,
                                0,
                                19,
                                b.lencode,
                                0,
                                b.work,
                                B
                              )),
                              (b.lenbits = B.bits),
                              H)
                            ) {
                              ;((k.msg = 'invalid code lengths set'),
                                (b.mode = 30))
                              break
                            }
                            ;((b.have = 0), (b.mode = 19))
                          case 19:
                            for (; b.have < b.nlen + b.ndist; ) {
                              for (
                                ;
                                (se =
                                  ((N =
                                    b.lencode[F & ((1 << b.lenbits) - 1)]) >>>
                                    16) &
                                  255),
                                  (ue = 65535 & N),
                                  !((ne = N >>> 24) <= A);

                              ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              if (ue < 16)
                                ((F >>>= ne),
                                  (A -= ne),
                                  (b.lens[b.have++] = ue))
                              else {
                                if (ue === 16) {
                                  for (j = ne + 2; A < j; ) {
                                    if ($ === 0) break e
                                    ;($--, (F += M[U++] << A), (A += 8))
                                  }
                                  if (((F >>>= ne), (A -= ne), b.have === 0)) {
                                    ;((k.msg = 'invalid bit length repeat'),
                                      (b.mode = 30))
                                    break
                                  }
                                  ;((y = b.lens[b.have - 1]),
                                    (Z = 3 + (3 & F)),
                                    (F >>>= 2),
                                    (A -= 2))
                                } else if (ue === 17) {
                                  for (j = ne + 3; A < j; ) {
                                    if ($ === 0) break e
                                    ;($--, (F += M[U++] << A), (A += 8))
                                  }
                                  ;((A -= ne),
                                    (y = 0),
                                    (Z = 3 + (7 & (F >>>= ne))),
                                    (F >>>= 3),
                                    (A -= 3))
                                } else {
                                  for (j = ne + 7; A < j; ) {
                                    if ($ === 0) break e
                                    ;($--, (F += M[U++] << A), (A += 8))
                                  }
                                  ;((A -= ne),
                                    (y = 0),
                                    (Z = 11 + (127 & (F >>>= ne))),
                                    (F >>>= 7),
                                    (A -= 7))
                                }
                                if (b.have + Z > b.nlen + b.ndist) {
                                  ;((k.msg = 'invalid bit length repeat'),
                                    (b.mode = 30))
                                  break
                                }
                                for (; Z--; ) b.lens[b.have++] = y
                              }
                            }
                            if (b.mode === 30) break
                            if (b.lens[256] === 0) {
                              ;((k.msg =
                                'invalid code -- missing end-of-block'),
                                (b.mode = 30))
                              break
                            }
                            if (
                              ((b.lenbits = 9),
                              (B = { bits: b.lenbits }),
                              (H = f(
                                m,
                                b.lens,
                                0,
                                b.nlen,
                                b.lencode,
                                0,
                                b.work,
                                B
                              )),
                              (b.lenbits = B.bits),
                              H)
                            ) {
                              ;((k.msg = 'invalid literal/lengths set'),
                                (b.mode = 30))
                              break
                            }
                            if (
                              ((b.distbits = 6),
                              (b.distcode = b.distdyn),
                              (B = { bits: b.distbits }),
                              (H = f(
                                p,
                                b.lens,
                                b.nlen,
                                b.ndist,
                                b.distcode,
                                0,
                                b.work,
                                B
                              )),
                              (b.distbits = B.bits),
                              H)
                            ) {
                              ;((k.msg = 'invalid distances set'),
                                (b.mode = 30))
                              break
                            }
                            if (((b.mode = 20), P === 6)) break e
                          case 20:
                            b.mode = 21
                          case 21:
                            if (6 <= $ && 258 <= ee) {
                              ;((k.next_out = re),
                                (k.avail_out = ee),
                                (k.next_in = U),
                                (k.avail_in = $),
                                (b.hold = F),
                                (b.bits = A),
                                c(k, G),
                                (re = k.next_out),
                                (K = k.output),
                                (ee = k.avail_out),
                                (U = k.next_in),
                                (M = k.input),
                                ($ = k.avail_in),
                                (F = b.hold),
                                (A = b.bits),
                                b.mode === 12 && (b.back = -1))
                              break
                            }
                            for (
                              b.back = 0;
                              (se =
                                ((N = b.lencode[F & ((1 << b.lenbits) - 1)]) >>>
                                  16) &
                                255),
                                (ue = 65535 & N),
                                !((ne = N >>> 24) <= A);

                            ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            if (se && (240 & se) == 0) {
                              for (
                                ce = ne, he = se, ye = ue;
                                (se =
                                  ((N =
                                    b.lencode[
                                      ye + ((F & ((1 << (ce + he)) - 1)) >> ce)
                                    ]) >>>
                                    16) &
                                  255),
                                  (ue = 65535 & N),
                                  !(ce + (ne = N >>> 24) <= A);

                              ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              ;((F >>>= ce), (A -= ce), (b.back += ce))
                            }
                            if (
                              ((F >>>= ne),
                              (A -= ne),
                              (b.back += ne),
                              (b.length = ue),
                              se === 0)
                            ) {
                              b.mode = 26
                              break
                            }
                            if (32 & se) {
                              ;((b.back = -1), (b.mode = 12))
                              break
                            }
                            if (64 & se) {
                              ;((k.msg = 'invalid literal/length code'),
                                (b.mode = 30))
                              break
                            }
                            ;((b.extra = 15 & se), (b.mode = 22))
                          case 22:
                            if (b.extra) {
                              for (j = b.extra; A < j; ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              ;((b.length += F & ((1 << b.extra) - 1)),
                                (F >>>= b.extra),
                                (A -= b.extra),
                                (b.back += b.extra))
                            }
                            ;((b.was = b.length), (b.mode = 23))
                          case 23:
                            for (
                              ;
                              (se =
                                ((N =
                                  b.distcode[F & ((1 << b.distbits) - 1)]) >>>
                                  16) &
                                255),
                                (ue = 65535 & N),
                                !((ne = N >>> 24) <= A);

                            ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            if ((240 & se) == 0) {
                              for (
                                ce = ne, he = se, ye = ue;
                                (se =
                                  ((N =
                                    b.distcode[
                                      ye + ((F & ((1 << (ce + he)) - 1)) >> ce)
                                    ]) >>>
                                    16) &
                                  255),
                                  (ue = 65535 & N),
                                  !(ce + (ne = N >>> 24) <= A);

                              ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              ;((F >>>= ce), (A -= ce), (b.back += ce))
                            }
                            if (
                              ((F >>>= ne), (A -= ne), (b.back += ne), 64 & se)
                            ) {
                              ;((k.msg = 'invalid distance code'),
                                (b.mode = 30))
                              break
                            }
                            ;((b.offset = ue),
                              (b.extra = 15 & se),
                              (b.mode = 24))
                          case 24:
                            if (b.extra) {
                              for (j = b.extra; A < j; ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              ;((b.offset += F & ((1 << b.extra) - 1)),
                                (F >>>= b.extra),
                                (A -= b.extra),
                                (b.back += b.extra))
                            }
                            if (b.offset > b.dmax) {
                              ;((k.msg = 'invalid distance too far back'),
                                (b.mode = 30))
                              break
                            }
                            b.mode = 25
                          case 25:
                            if (ee === 0) break e
                            if (((Z = G - ee), b.offset > Z)) {
                              if ((Z = b.offset - Z) > b.whave && b.sane) {
                                ;((k.msg = 'invalid distance too far back'),
                                  (b.mode = 30))
                                break
                              }
                              ;((fe =
                                Z > b.wnext
                                  ? ((Z -= b.wnext), b.wsize - Z)
                                  : b.wnext - Z),
                                Z > b.length && (Z = b.length),
                                (Q = b.window))
                            } else
                              ((Q = K), (fe = re - b.offset), (Z = b.length))
                            for (
                              ee < Z && (Z = ee), ee -= Z, b.length -= Z;
                              (K[re++] = Q[fe++]), --Z;

                            );
                            b.length === 0 && (b.mode = 21)
                            break
                          case 26:
                            if (ee === 0) break e
                            ;((K[re++] = b.length), ee--, (b.mode = 21))
                            break
                          case 27:
                            if (b.wrap) {
                              for (; A < 32; ) {
                                if ($ === 0) break e
                                ;($--, (F |= M[U++] << A), (A += 8))
                              }
                              if (
                                ((G -= ee),
                                (k.total_out += G),
                                (b.total += G),
                                G &&
                                  (k.adler = b.check =
                                    b.flags
                                      ? i(b.check, K, G, re - G)
                                      : l(b.check, K, G, re - G)),
                                (G = ee),
                                (b.flags ? F : w(F)) !== b.check)
                              ) {
                                ;((k.msg = 'incorrect data check'),
                                  (b.mode = 30))
                                break
                              }
                              A = F = 0
                            }
                            b.mode = 28
                          case 28:
                            if (b.wrap && b.flags) {
                              for (; A < 32; ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              if (F !== (4294967295 & b.total)) {
                                ;((k.msg = 'incorrect length check'),
                                  (b.mode = 30))
                                break
                              }
                              A = F = 0
                            }
                            b.mode = 29
                          case 29:
                            H = 1
                            break e
                          case 30:
                            H = -3
                            break e
                          case 31:
                            return -4
                          case 32:
                          default:
                            return d
                        }
                      return (
                        (k.next_out = re),
                        (k.avail_out = ee),
                        (k.next_in = U),
                        (k.avail_in = $),
                        (b.hold = F),
                        (b.bits = A),
                        (b.wsize ||
                          (G !== k.avail_out &&
                            b.mode < 30 &&
                            (b.mode < 27 || P !== 4))) &&
                        V(k, k.output, k.next_out, G - k.avail_out)
                          ? ((b.mode = 31), -4)
                          : ((q -= k.avail_in),
                            (G -= k.avail_out),
                            (k.total_in += q),
                            (k.total_out += G),
                            (b.total += G),
                            b.wrap &&
                              G &&
                              (k.adler = b.check =
                                b.flags
                                  ? i(b.check, K, G, k.next_out - G)
                                  : l(b.check, K, G, k.next_out - G)),
                            (k.data_type =
                              b.bits +
                              (b.last ? 64 : 0) +
                              (b.mode === 12 ? 128 : 0) +
                              (b.mode === 20 || b.mode === 15 ? 256 : 0)),
                            ((q == 0 && G === 0) || P === 4) &&
                              H === v &&
                              (H = -5),
                            H)
                      )
                    }),
                    (o.inflateEnd = function (k) {
                      if (!k || !k.state) return d
                      var P = k.state
                      return (
                        P.window && (P.window = null),
                        (k.state = null),
                        v
                      )
                    }),
                    (o.inflateGetHeader = function (k, P) {
                      var b
                      return k && k.state
                        ? (2 & (b = k.state).wrap) == 0
                          ? d
                          : (((b.head = P).done = !1), v)
                        : d
                    }),
                    (o.inflateSetDictionary = function (k, P) {
                      var b,
                        M = P.length
                      return k && k.state
                        ? (b = k.state).wrap !== 0 && b.mode !== 11
                          ? d
                          : b.mode === 11 && l(1, P, M, 0) !== b.check
                            ? -3
                            : V(k, P, M, M)
                              ? ((b.mode = 31), -4)
                              : ((b.havedict = 1), v)
                        : d
                    }),
                    (o.inflateInfo = 'pako inflate (from Nodeca project)'))
                },
                {
                  '../utils/common': 41,
                  './adler32': 43,
                  './crc32': 45,
                  './inffast': 48,
                  './inftrees': 50,
                },
              ],
              50: [
                function (t, n, o) {
                  var a = t('../utils/common'),
                    l = [
                      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
                      35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258,
                      0, 0,
                    ],
                    i = [
                      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18,
                      18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21,
                      16, 72, 78,
                    ],
                    c = [
                      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                      257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
                      8193, 12289, 16385, 24577, 0, 0,
                    ],
                    f = [
                      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21,
                      22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28,
                      29, 29, 64, 64,
                    ]
                  n.exports = function (m, p, v, d, x, h, g, w) {
                    var S,
                      C,
                      _,
                      E,
                      D,
                      T,
                      I,
                      R,
                      L,
                      V = w.bits,
                      k = 0,
                      P = 0,
                      b = 0,
                      M = 0,
                      K = 0,
                      U = 0,
                      re = 0,
                      $ = 0,
                      ee = 0,
                      F = 0,
                      A = null,
                      q = 0,
                      G = new a.Buf16(16),
                      Z = new a.Buf16(16),
                      fe = null,
                      Q = 0
                    for (k = 0; k <= 15; k++) G[k] = 0
                    for (P = 0; P < d; P++) G[p[v + P]]++
                    for (K = V, M = 15; 1 <= M && G[M] === 0; M--);
                    if ((M < K && (K = M), M === 0))
                      return (
                        (x[h++] = 20971520),
                        (x[h++] = 20971520),
                        (w.bits = 1),
                        0
                      )
                    for (b = 1; b < M && G[b] === 0; b++);
                    for (K < b && (K = b), k = $ = 1; k <= 15; k++)
                      if ((($ <<= 1), ($ -= G[k]) < 0)) return -1
                    if (0 < $ && (m === 0 || M !== 1)) return -1
                    for (Z[1] = 0, k = 1; k < 15; k++) Z[k + 1] = Z[k] + G[k]
                    for (P = 0; P < d; P++)
                      p[v + P] !== 0 && (g[Z[p[v + P]]++] = P)
                    if (
                      ((T =
                        m === 0
                          ? ((A = fe = g), 19)
                          : m === 1
                            ? ((A = l), (q -= 257), (fe = i), (Q -= 257), 256)
                            : ((A = c), (fe = f), -1)),
                      (k = b),
                      (D = h),
                      (re = P = F = 0),
                      (_ = -1),
                      (E = (ee = 1 << (U = K)) - 1),
                      (m === 1 && 852 < ee) || (m === 2 && 592 < ee))
                    )
                      return 1
                    for (;;) {
                      for (
                        I = k - re,
                          L =
                            g[P] < T
                              ? ((R = 0), g[P])
                              : g[P] > T
                                ? ((R = fe[Q + g[P]]), A[q + g[P]])
                                : ((R = 96), 0),
                          S = 1 << (k - re),
                          b = C = 1 << U;
                        (x[D + (F >> re) + (C -= S)] =
                          (I << 24) | (R << 16) | L | 0),
                          C !== 0;

                      );
                      for (S = 1 << (k - 1); F & S; ) S >>= 1
                      if (
                        (S !== 0 ? ((F &= S - 1), (F += S)) : (F = 0),
                        P++,
                        --G[k] == 0)
                      ) {
                        if (k === M) break
                        k = p[v + g[P]]
                      }
                      if (K < k && (F & E) !== _) {
                        for (
                          re === 0 && (re = K), D += b, $ = 1 << (U = k - re);
                          U + re < M && !(($ -= G[U + re]) <= 0);

                        )
                          (U++, ($ <<= 1))
                        if (
                          ((ee += 1 << U),
                          (m === 1 && 852 < ee) || (m === 2 && 592 < ee))
                        )
                          return 1
                        x[(_ = F & E)] = (K << 24) | (U << 16) | (D - h) | 0
                      }
                    }
                    return (
                      F !== 0 && (x[D + F] = ((k - re) << 24) | (64 << 16) | 0),
                      (w.bits = K),
                      0
                    )
                  }
                },
                { '../utils/common': 41 },
              ],
              51: [
                function (t, n, o) {
                  n.exports = {
                    2: 'need dictionary',
                    1: 'stream end',
                    0: '',
                    '-1': 'file error',
                    '-2': 'stream error',
                    '-3': 'data error',
                    '-4': 'insufficient memory',
                    '-5': 'buffer error',
                    '-6': 'incompatible version',
                  }
                },
                {},
              ],
              52: [
                function (t, n, o) {
                  var a = t('../utils/common'),
                    l = 0,
                    i = 1
                  function c(N) {
                    for (var O = N.length; 0 <= --O; ) N[O] = 0
                  }
                  var f = 0,
                    m = 29,
                    p = 256,
                    v = p + 1 + m,
                    d = 30,
                    x = 19,
                    h = 2 * v + 1,
                    g = 15,
                    w = 16,
                    S = 7,
                    C = 256,
                    _ = 16,
                    E = 17,
                    D = 18,
                    T = [
                      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3,
                      3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
                    ],
                    I = [
                      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8,
                      8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
                    ],
                    R = [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
                    ],
                    L = [
                      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                      1, 15,
                    ],
                    V = new Array(2 * (v + 2))
                  c(V)
                  var k = new Array(2 * d)
                  c(k)
                  var P = new Array(512)
                  c(P)
                  var b = new Array(256)
                  c(b)
                  var M = new Array(m)
                  c(M)
                  var K,
                    U,
                    re,
                    $ = new Array(d)
                  function ee(N, O, W, Y, z) {
                    ;((this.static_tree = N),
                      (this.extra_bits = O),
                      (this.extra_base = W),
                      (this.elems = Y),
                      (this.max_length = z),
                      (this.has_stree = N && N.length))
                  }
                  function F(N, O) {
                    ;((this.dyn_tree = N),
                      (this.max_code = 0),
                      (this.stat_desc = O))
                  }
                  function A(N) {
                    return N < 256 ? P[N] : P[256 + (N >>> 7)]
                  }
                  function q(N, O) {
                    ;((N.pending_buf[N.pending++] = 255 & O),
                      (N.pending_buf[N.pending++] = (O >>> 8) & 255))
                  }
                  function G(N, O, W) {
                    N.bi_valid > w - W
                      ? ((N.bi_buf |= (O << N.bi_valid) & 65535),
                        q(N, N.bi_buf),
                        (N.bi_buf = O >> (w - N.bi_valid)),
                        (N.bi_valid += W - w))
                      : ((N.bi_buf |= (O << N.bi_valid) & 65535),
                        (N.bi_valid += W))
                  }
                  function Z(N, O, W) {
                    G(N, W[2 * O], W[2 * O + 1])
                  }
                  function fe(N, O) {
                    for (
                      var W = 0;
                      (W |= 1 & N), (N >>>= 1), (W <<= 1), 0 < --O;

                    );
                    return W >>> 1
                  }
                  function Q(N, O, W) {
                    var Y,
                      z,
                      X = new Array(g + 1),
                      oe = 0
                    for (Y = 1; Y <= g; Y++) X[Y] = oe = (oe + W[Y - 1]) << 1
                    for (z = 0; z <= O; z++) {
                      var te = N[2 * z + 1]
                      te !== 0 && (N[2 * z] = fe(X[te]++, te))
                    }
                  }
                  function ne(N) {
                    var O
                    for (O = 0; O < v; O++) N.dyn_ltree[2 * O] = 0
                    for (O = 0; O < d; O++) N.dyn_dtree[2 * O] = 0
                    for (O = 0; O < x; O++) N.bl_tree[2 * O] = 0
                    ;((N.dyn_ltree[2 * C] = 1),
                      (N.opt_len = N.static_len = 0),
                      (N.last_lit = N.matches = 0))
                  }
                  function se(N) {
                    ;(8 < N.bi_valid
                      ? q(N, N.bi_buf)
                      : 0 < N.bi_valid &&
                        (N.pending_buf[N.pending++] = N.bi_buf),
                      (N.bi_buf = 0),
                      (N.bi_valid = 0))
                  }
                  function ue(N, O, W, Y) {
                    var z = 2 * O,
                      X = 2 * W
                    return N[z] < N[X] || (N[z] === N[X] && Y[O] <= Y[W])
                  }
                  function ce(N, O, W) {
                    for (
                      var Y = N.heap[W], z = W << 1;
                      z <= N.heap_len &&
                      (z < N.heap_len &&
                        ue(O, N.heap[z + 1], N.heap[z], N.depth) &&
                        z++,
                      !ue(O, Y, N.heap[z], N.depth));

                    )
                      ((N.heap[W] = N.heap[z]), (W = z), (z <<= 1))
                    N.heap[W] = Y
                  }
                  function he(N, O, W) {
                    var Y,
                      z,
                      X,
                      oe,
                      te = 0
                    if (N.last_lit !== 0)
                      for (
                        ;
                        (Y =
                          (N.pending_buf[N.d_buf + 2 * te] << 8) |
                          N.pending_buf[N.d_buf + 2 * te + 1]),
                          (z = N.pending_buf[N.l_buf + te]),
                          te++,
                          Y === 0
                            ? Z(N, z, O)
                            : (Z(N, (X = b[z]) + p + 1, O),
                              (oe = T[X]) !== 0 && G(N, (z -= M[X]), oe),
                              Z(N, (X = A(--Y)), W),
                              (oe = I[X]) !== 0 && G(N, (Y -= $[X]), oe)),
                          te < N.last_lit;

                      );
                    Z(N, C, O)
                  }
                  function ye(N, O) {
                    var W,
                      Y,
                      z,
                      X = O.dyn_tree,
                      oe = O.stat_desc.static_tree,
                      te = O.stat_desc.has_stree,
                      ae = O.stat_desc.elems,
                      xe = -1
                    for (N.heap_len = 0, N.heap_max = h, W = 0; W < ae; W++)
                      X[2 * W] !== 0
                        ? ((N.heap[++N.heap_len] = xe = W), (N.depth[W] = 0))
                        : (X[2 * W + 1] = 0)
                    for (; N.heap_len < 2; )
                      ((X[2 * (z = N.heap[++N.heap_len] = xe < 2 ? ++xe : 0)] =
                        1),
                        (N.depth[z] = 0),
                        N.opt_len--,
                        te && (N.static_len -= oe[2 * z + 1]))
                    for (O.max_code = xe, W = N.heap_len >> 1; 1 <= W; W--)
                      ce(N, X, W)
                    for (
                      z = ae;
                      (W = N.heap[1]),
                        (N.heap[1] = N.heap[N.heap_len--]),
                        ce(N, X, 1),
                        (Y = N.heap[1]),
                        (N.heap[--N.heap_max] = W),
                        (N.heap[--N.heap_max] = Y),
                        (X[2 * z] = X[2 * W] + X[2 * Y]),
                        (N.depth[z] =
                          (N.depth[W] >= N.depth[Y] ? N.depth[W] : N.depth[Y]) +
                          1),
                        (X[2 * W + 1] = X[2 * Y + 1] = z),
                        (N.heap[1] = z++),
                        ce(N, X, 1),
                        2 <= N.heap_len;

                    );
                    ;((N.heap[--N.heap_max] = N.heap[1]),
                      (function (ve, $e) {
                        var Ze,
                          Le,
                          rt,
                          _e,
                          Be,
                          Et,
                          Ie = $e.dyn_tree,
                          dr = $e.max_code,
                          en = $e.stat_desc.static_tree,
                          ur = $e.stat_desc.has_stree,
                          fr = $e.stat_desc.extra_bits,
                          hr = $e.stat_desc.extra_base,
                          Ye = $e.stat_desc.max_length,
                          Oe = 0
                        for (_e = 0; _e <= g; _e++) ve.bl_count[_e] = 0
                        for (
                          Ie[2 * ve.heap[ve.heap_max] + 1] = 0,
                            Ze = ve.heap_max + 1;
                          Ze < h;
                          Ze++
                        )
                          (Ye <
                            (_e =
                              Ie[2 * Ie[2 * (Le = ve.heap[Ze]) + 1] + 1] + 1) &&
                            ((_e = Ye), Oe++),
                            (Ie[2 * Le + 1] = _e),
                            dr < Le ||
                              (ve.bl_count[_e]++,
                              (Be = 0),
                              hr <= Le && (Be = fr[Le - hr]),
                              (Et = Ie[2 * Le]),
                              (ve.opt_len += Et * (_e + Be)),
                              ur &&
                                (ve.static_len += Et * (en[2 * Le + 1] + Be))))
                        if (Oe !== 0) {
                          do {
                            for (_e = Ye - 1; ve.bl_count[_e] === 0; ) _e--
                            ;(ve.bl_count[_e]--,
                              (ve.bl_count[_e + 1] += 2),
                              ve.bl_count[Ye]--,
                              (Oe -= 2))
                          } while (0 < Oe)
                          for (_e = Ye; _e !== 0; _e--)
                            for (Le = ve.bl_count[_e]; Le !== 0; )
                              dr < (rt = ve.heap[--Ze]) ||
                                (Ie[2 * rt + 1] !== _e &&
                                  ((ve.opt_len +=
                                    (_e - Ie[2 * rt + 1]) * Ie[2 * rt]),
                                  (Ie[2 * rt + 1] = _e)),
                                Le--)
                        }
                      })(N, O),
                      Q(X, xe, N.bl_count))
                  }
                  function y(N, O, W) {
                    var Y,
                      z,
                      X = -1,
                      oe = O[1],
                      te = 0,
                      ae = 7,
                      xe = 4
                    for (
                      oe === 0 && ((ae = 138), (xe = 3)),
                        O[2 * (W + 1) + 1] = 65535,
                        Y = 0;
                      Y <= W;
                      Y++
                    )
                      ((z = oe),
                        (oe = O[2 * (Y + 1) + 1]),
                        (++te < ae && z === oe) ||
                          (te < xe
                            ? (N.bl_tree[2 * z] += te)
                            : z !== 0
                              ? (z !== X && N.bl_tree[2 * z]++,
                                N.bl_tree[2 * _]++)
                              : te <= 10
                                ? N.bl_tree[2 * E]++
                                : N.bl_tree[2 * D]++,
                          (X = z),
                          (xe =
                            (te = 0) === oe
                              ? ((ae = 138), 3)
                              : z === oe
                                ? ((ae = 6), 3)
                                : ((ae = 7), 4))))
                  }
                  function H(N, O, W) {
                    var Y,
                      z,
                      X = -1,
                      oe = O[1],
                      te = 0,
                      ae = 7,
                      xe = 4
                    for (oe === 0 && ((ae = 138), (xe = 3)), Y = 0; Y <= W; Y++)
                      if (
                        ((z = oe),
                        (oe = O[2 * (Y + 1) + 1]),
                        !(++te < ae && z === oe))
                      ) {
                        if (te < xe) for (; Z(N, z, N.bl_tree), --te != 0; );
                        else
                          z !== 0
                            ? (z !== X && (Z(N, z, N.bl_tree), te--),
                              Z(N, _, N.bl_tree),
                              G(N, te - 3, 2))
                            : te <= 10
                              ? (Z(N, E, N.bl_tree), G(N, te - 3, 3))
                              : (Z(N, D, N.bl_tree), G(N, te - 11, 7))
                        ;((X = z),
                          (xe =
                            (te = 0) === oe
                              ? ((ae = 138), 3)
                              : z === oe
                                ? ((ae = 6), 3)
                                : ((ae = 7), 4)))
                      }
                  }
                  c($)
                  var B = !1
                  function j(N, O, W, Y) {
                    ;(G(N, (f << 1) + (Y ? 1 : 0), 3),
                      (function (z, X, oe, te) {
                        ;(se(z),
                          q(z, oe),
                          q(z, ~oe),
                          a.arraySet(z.pending_buf, z.window, X, oe, z.pending),
                          (z.pending += oe))
                      })(N, O, W))
                  }
                  ;((o._tr_init = function (N) {
                    ;(B ||
                      ((function () {
                        var O,
                          W,
                          Y,
                          z,
                          X,
                          oe = new Array(g + 1)
                        for (z = Y = 0; z < m - 1; z++)
                          for (M[z] = Y, O = 0; O < 1 << T[z]; O++) b[Y++] = z
                        for (b[Y - 1] = z, z = X = 0; z < 16; z++)
                          for ($[z] = X, O = 0; O < 1 << I[z]; O++) P[X++] = z
                        for (X >>= 7; z < d; z++)
                          for ($[z] = X << 7, O = 0; O < 1 << (I[z] - 7); O++)
                            P[256 + X++] = z
                        for (W = 0; W <= g; W++) oe[W] = 0
                        for (O = 0; O <= 143; )
                          ((V[2 * O + 1] = 8), O++, oe[8]++)
                        for (; O <= 255; ) ((V[2 * O + 1] = 9), O++, oe[9]++)
                        for (; O <= 279; ) ((V[2 * O + 1] = 7), O++, oe[7]++)
                        for (; O <= 287; ) ((V[2 * O + 1] = 8), O++, oe[8]++)
                        for (Q(V, v + 1, oe), O = 0; O < d; O++)
                          ((k[2 * O + 1] = 5), (k[2 * O] = fe(O, 5)))
                        ;((K = new ee(V, T, p + 1, v, g)),
                          (U = new ee(k, I, 0, d, g)),
                          (re = new ee(new Array(0), R, 0, x, S)))
                      })(),
                      (B = !0)),
                      (N.l_desc = new F(N.dyn_ltree, K)),
                      (N.d_desc = new F(N.dyn_dtree, U)),
                      (N.bl_desc = new F(N.bl_tree, re)),
                      (N.bi_buf = 0),
                      (N.bi_valid = 0),
                      ne(N))
                  }),
                    (o._tr_stored_block = j),
                    (o._tr_flush_block = function (N, O, W, Y) {
                      var z,
                        X,
                        oe = 0
                      ;(0 < N.level
                        ? (N.strm.data_type === 2 &&
                            (N.strm.data_type = (function (te) {
                              var ae,
                                xe = 4093624447
                              for (ae = 0; ae <= 31; ae++, xe >>>= 1)
                                if (1 & xe && te.dyn_ltree[2 * ae] !== 0)
                                  return l
                              if (
                                te.dyn_ltree[18] !== 0 ||
                                te.dyn_ltree[20] !== 0 ||
                                te.dyn_ltree[26] !== 0
                              )
                                return i
                              for (ae = 32; ae < p; ae++)
                                if (te.dyn_ltree[2 * ae] !== 0) return i
                              return l
                            })(N)),
                          ye(N, N.l_desc),
                          ye(N, N.d_desc),
                          (oe = (function (te) {
                            var ae
                            for (
                              y(te, te.dyn_ltree, te.l_desc.max_code),
                                y(te, te.dyn_dtree, te.d_desc.max_code),
                                ye(te, te.bl_desc),
                                ae = x - 1;
                              3 <= ae && te.bl_tree[2 * L[ae] + 1] === 0;
                              ae--
                            );
                            return (
                              (te.opt_len += 3 * (ae + 1) + 5 + 5 + 4),
                              ae
                            )
                          })(N)),
                          (z = (N.opt_len + 3 + 7) >>> 3),
                          (X = (N.static_len + 3 + 7) >>> 3) <= z && (z = X))
                        : (z = X = W + 5),
                        W + 4 <= z && O !== -1
                          ? j(N, O, W, Y)
                          : N.strategy === 4 || X === z
                            ? (G(N, 2 + (Y ? 1 : 0), 3), he(N, V, k))
                            : (G(N, 4 + (Y ? 1 : 0), 3),
                              (function (te, ae, xe, ve) {
                                var $e
                                for (
                                  G(te, ae - 257, 5),
                                    G(te, xe - 1, 5),
                                    G(te, ve - 4, 4),
                                    $e = 0;
                                  $e < ve;
                                  $e++
                                )
                                  G(te, te.bl_tree[2 * L[$e] + 1], 3)
                                ;(H(te, te.dyn_ltree, ae - 1),
                                  H(te, te.dyn_dtree, xe - 1))
                              })(
                                N,
                                N.l_desc.max_code + 1,
                                N.d_desc.max_code + 1,
                                oe + 1
                              ),
                              he(N, N.dyn_ltree, N.dyn_dtree)),
                        ne(N),
                        Y && se(N))
                    }),
                    (o._tr_tally = function (N, O, W) {
                      return (
                        (N.pending_buf[N.d_buf + 2 * N.last_lit] =
                          (O >>> 8) & 255),
                        (N.pending_buf[N.d_buf + 2 * N.last_lit + 1] = 255 & O),
                        (N.pending_buf[N.l_buf + N.last_lit] = 255 & W),
                        N.last_lit++,
                        O === 0
                          ? N.dyn_ltree[2 * W]++
                          : (N.matches++,
                            O--,
                            N.dyn_ltree[2 * (b[W] + p + 1)]++,
                            N.dyn_dtree[2 * A(O)]++),
                        N.last_lit === N.lit_bufsize - 1
                      )
                    }),
                    (o._tr_align = function (N) {
                      ;(G(N, 2, 3),
                        Z(N, C, V),
                        (function (O) {
                          O.bi_valid === 16
                            ? (q(O, O.bi_buf), (O.bi_buf = 0), (O.bi_valid = 0))
                            : 8 <= O.bi_valid &&
                              ((O.pending_buf[O.pending++] = 255 & O.bi_buf),
                              (O.bi_buf >>= 8),
                              (O.bi_valid -= 8))
                        })(N))
                    }))
                },
                { '../utils/common': 41 },
              ],
              53: [
                function (t, n, o) {
                  n.exports = function () {
                    ;((this.input = null),
                      (this.next_in = 0),
                      (this.avail_in = 0),
                      (this.total_in = 0),
                      (this.output = null),
                      (this.next_out = 0),
                      (this.avail_out = 0),
                      (this.total_out = 0),
                      (this.msg = ''),
                      (this.state = null),
                      (this.data_type = 2),
                      (this.adler = 0))
                  }
                },
                {},
              ],
              54: [
                function (t, n, o) {
                  ;(function (a) {
                    ;(function (l, i) {
                      if (!l.setImmediate) {
                        var c,
                          f,
                          m,
                          p,
                          v = 1,
                          d = {},
                          x = !1,
                          h = l.document,
                          g = Object.getPrototypeOf && Object.getPrototypeOf(l)
                        ;((g = g && g.setTimeout ? g : l),
                          (c =
                            {}.toString.call(l.process) === '[object process]'
                              ? function (_) {
                                  process.nextTick(function () {
                                    S(_)
                                  })
                                }
                              : (function () {
                                    if (l.postMessage && !l.importScripts) {
                                      var _ = !0,
                                        E = l.onmessage
                                      return (
                                        (l.onmessage = function () {
                                          _ = !1
                                        }),
                                        l.postMessage('', '*'),
                                        (l.onmessage = E),
                                        _
                                      )
                                    }
                                  })()
                                ? ((p = 'setImmediate$' + Math.random() + '$'),
                                  l.addEventListener
                                    ? l.addEventListener('message', C, !1)
                                    : l.attachEvent('onmessage', C),
                                  function (_) {
                                    l.postMessage(p + _, '*')
                                  })
                                : l.MessageChannel
                                  ? (((m =
                                      new MessageChannel()).port1.onmessage =
                                      function (_) {
                                        S(_.data)
                                      }),
                                    function (_) {
                                      m.port2.postMessage(_)
                                    })
                                  : h &&
                                      'onreadystatechange' in
                                        h.createElement('script')
                                    ? ((f = h.documentElement),
                                      function (_) {
                                        var E = h.createElement('script')
                                        ;((E.onreadystatechange = function () {
                                          ;(S(_),
                                            (E.onreadystatechange = null),
                                            f.removeChild(E),
                                            (E = null))
                                        }),
                                          f.appendChild(E))
                                      })
                                    : function (_) {
                                        setTimeout(S, 0, _)
                                      }),
                          (g.setImmediate = function (_) {
                            typeof _ != 'function' && (_ = new Function('' + _))
                            for (
                              var E = new Array(arguments.length - 1), D = 0;
                              D < E.length;
                              D++
                            )
                              E[D] = arguments[D + 1]
                            var T = { callback: _, args: E }
                            return ((d[v] = T), c(v), v++)
                          }),
                          (g.clearImmediate = w))
                      }
                      function w(_) {
                        delete d[_]
                      }
                      function S(_) {
                        if (x) setTimeout(S, 0, _)
                        else {
                          var E = d[_]
                          if (E) {
                            x = !0
                            try {
                              ;(function (D) {
                                var T = D.callback,
                                  I = D.args
                                switch (I.length) {
                                  case 0:
                                    T()
                                    break
                                  case 1:
                                    T(I[0])
                                    break
                                  case 2:
                                    T(I[0], I[1])
                                    break
                                  case 3:
                                    T(I[0], I[1], I[2])
                                    break
                                  default:
                                    T.apply(i, I)
                                }
                              })(E)
                            } finally {
                              ;(w(_), (x = !1))
                            }
                          }
                        }
                      }
                      function C(_) {
                        _.source === l &&
                          typeof _.data == 'string' &&
                          _.data.indexOf(p) === 0 &&
                          S(+_.data.slice(p.length))
                      }
                    })(typeof self > 'u' ? (a === void 0 ? this : a) : self)
                  }).call(
                    this,
                    typeof pr < 'u'
                      ? pr
                      : typeof self < 'u'
                        ? self
                        : typeof window < 'u'
                          ? window
                          : {}
                  )
                },
                {},
              ],
            },
            {},
            [10]
          )(10)
        })
      })(fn)),
    fn.exports
  )
}
var bm = vm()
const xm = Ca(bm)
function Hr(e) {
  const r = Math.floor(e / 3600),
    t = Math.floor((e % 3600) / 60),
    n = e % 60
  return [
    r.toString().padStart(2, '0'),
    t.toString().padStart(2, '0'),
    n.toString().padStart(2, '0'),
  ].join(':')
}
const wm = e => {
    if (e == null) return ''
    const r = String(e)
    return r.includes(',') ||
      r.includes('"') ||
      r.includes(`
`)
      ? `"${r.replace(/"/g, '""')}"`
      : r
  },
  Ot = e => e.map(wm).join(','),
  ym = (e, r = {}) => {
    const {
        includeNotes: t = !0,
        includeUserInfo: n = !0,
        includeTimestamps: o = !0,
      } = r,
      a = [
        'Door ID',
        'Door Number',
        'Destination DC',
        'Freight Type',
        'Trailer Status',
        'Pallet Count',
      ]
    ;(o && a.push('Timestamp', 'Date', 'Time'),
      t && a.push('Notes'),
      n && a.push('User'))
    const l = e.map(i => {
      const c = [
        i.id,
        i.doorNumber,
        i.destinationDC,
        i.freightType,
        i.trailerStatus,
        i.palletCount || 0,
      ]
      if (o && i.timestamp) {
        const f = new Date(i.timestamp)
        c.push(i.timestamp, f.toLocaleDateString(), f.toLocaleTimeString())
      } else o && c.push('', '', '')
      return (
        t && c.push(i.notes || ''),
        n && c.push(i.createdBy || 'system'),
        Ot(c)
      )
    })
    return [Ot(a), ...l].join(`
`)
  },
  Sm = (e, r = {}) => {
    const { includeUserInfo: t = !0, includeTimestamps: n = !0 } = r,
      o = [
        'Pallet ID',
        'Door Number',
        'Pallet Count',
        'Started At',
        'Ended At',
        'Duration',
      ]
    ;(n && o.push('Timestamp', 'Date', 'Time'), t && o.push('User'))
    const a = e.map(l => {
      var c
      const i = [
        l.id,
        ((c = l.doorNumber) == null ? void 0 : c.toString()) || '0',
        l.count.toString(),
        l.startTime || '',
        l.endTime || '',
        l.elapsedTime ? Hr(l.elapsedTime) : '',
      ]
      if (n && l.timestamp) {
        const f = new Date(l.timestamp)
        i.push(l.timestamp, f.toLocaleDateString(), f.toLocaleTimeString())
      } else n && i.push('', '', '')
      return (t && i.push(l.createdBy || 'system'), Ot(i))
    })
    return [Ot(o), ...a].join(`
`)
  },
  Cm = (e, r = {}) => {
    const { includeUserInfo: t = !0, includeTimestamps: n = !0 } = r,
      o = e.filter(i => i.notes && i.notes.trim() !== '')
    if (o.length === 0) return ''
    const a = ['Door ID', 'Door Number', 'Notes']
    ;(n && a.push('Timestamp', 'Date', 'Time'), t && a.push('User'))
    const l = o.map(i => {
      const c = [i.id, i.doorNumber, i.notes || '']
      if (n && i.timestamp) {
        const f = new Date(i.timestamp)
        c.push(i.timestamp, f.toLocaleDateString(), f.toLocaleTimeString())
      } else n && c.push('', '', '')
      return (t && c.push(i.createdBy || 'system'), Ot(c))
    })
    return [Ot(a), ...l].join(`
`)
  },
  _m = async (e, r, t = {}) => {
    const n = new xm(),
      o = ym(e, t),
      a = Sm(r, t),
      l = Cm(e, t)
    ;(o &&
      o.split(`
`).length > 1 &&
      n.file('doors.csv', o),
      a &&
        a.split(`
`).length > 1 &&
        n.file('pallets.csv', a),
      l &&
        l.split(`
`).length > 1 &&
        n.file('notes.csv', l))
    const i = new Date().toISOString(),
      c = `Export generated at: ${i}
Total doors: ${e.length}
Total pallets logged (in export): ${r.length}
Total doors with notes: ${e.filter(g => g.notes && g.notes.trim() !== '').length}

Generated by Walmart DC 8980 Shipping Department PWA v1.0.0
`
    if (
      (n.file('summary.txt', c),
      Object.keys(n.files).length === 0 ||
        (Object.keys(n.files).length === 1 && n.files['summary.txt']))
    )
      throw (
        console.warn('Zip file contains no data CSVs, only summary.txt.'),
        new Error('No data available to export.')
      )
    const f = new Date(),
      m = `${f.getFullYear().toString()}${(f.getMonth() + 1).toString().padStart(2, '0')}${f.getDate().toString().padStart(2, '0')}`,
      p = `${f.getHours().toString().padStart(2, '0')}${f.getMinutes().toString().padStart(2, '0')}${f.getSeconds().toString().padStart(2, '0')}`,
      v = `walmart_dc8980_export_${m}_${p}.zip`,
      d = await n.generateAsync({ type: 'blob' }),
      x = URL.createObjectURL(d),
      h = document.createElement('a')
    return (
      (h.href = x),
      h.setAttribute('download', v),
      document.body.appendChild(h),
      h.click(),
      document.body.removeChild(h),
      URL.revokeObjectURL(x),
      {
        timestamp: i,
        fileName: v,
        doorCount: e.length,
        palletCount: r.length,
        noteCount: e.filter(g => g.notes && g.notes.trim() !== '').length,
      }
    )
  }
var hn,
  Wr = 'HoverCard',
  [wi, Hv] = tt(Wr, [Pr]),
  Kr = Pr(),
  [km, so] = wi(Wr),
  yi = e => {
    const {
        __scopeHoverCard: r,
        children: t,
        open: n,
        defaultOpen: o,
        onOpenChange: a,
        openDelay: l = 700,
        closeDelay: i = 300,
      } = e,
      c = Kr(r),
      f = u.useRef(0),
      m = u.useRef(0),
      p = u.useRef(!1),
      v = u.useRef(!1),
      [d, x] = xt({ prop: n, defaultProp: o ?? !1, onChange: a, caller: Wr }),
      h = u.useCallback(() => {
        ;(clearTimeout(m.current),
          (f.current = window.setTimeout(() => x(!0), l)))
      }, [l, x]),
      g = u.useCallback(() => {
        ;(clearTimeout(f.current),
          !p.current &&
            !v.current &&
            (m.current = window.setTimeout(() => x(!1), i)))
      }, [i, x]),
      w = u.useCallback(() => x(!1), [x])
    return (
      u.useEffect(
        () => () => {
          ;(clearTimeout(f.current), clearTimeout(m.current))
        },
        []
      ),
      s.jsx(km, {
        scope: r,
        open: d,
        onOpenChange: x,
        onOpen: h,
        onClose: g,
        onDismiss: w,
        hasSelectionRef: p,
        isPointerDownOnContentRef: v,
        children: s.jsx(xa, { ...c, children: t }),
      })
    )
  }
yi.displayName = Wr
var Si = 'HoverCardTrigger',
  Ci = u.forwardRef((e, r) => {
    const { __scopeHoverCard: t, ...n } = e,
      o = so(Si, t),
      a = Kr(t)
    return s.jsx(wa, {
      asChild: !0,
      ...a,
      children: s.jsx(Ce.a, {
        'data-state': o.open ? 'open' : 'closed',
        ...n,
        ref: r,
        onPointerEnter: ie(e.onPointerEnter, Er(o.onOpen)),
        onPointerLeave: ie(e.onPointerLeave, Er(o.onClose)),
        onFocus: ie(e.onFocus, o.onOpen),
        onBlur: ie(e.onBlur, o.onClose),
        onTouchStart: ie(e.onTouchStart, l => l.preventDefault()),
      }),
    })
  })
Ci.displayName = Si
var Nm = 'HoverCardPortal',
  [Wv, Em] = wi(Nm, { forceMount: void 0 }),
  Nr = 'HoverCardContent',
  _i = u.forwardRef((e, r) => {
    const t = Em(Nr, e.__scopeHoverCard),
      { forceMount: n = t.forceMount, ...o } = e,
      a = so(Nr, e.__scopeHoverCard)
    return s.jsx(wt, {
      present: n || a.open,
      children: s.jsx(jm, {
        'data-state': a.open ? 'open' : 'closed',
        ...o,
        onPointerEnter: ie(e.onPointerEnter, Er(a.onOpen)),
        onPointerLeave: ie(e.onPointerLeave, Er(a.onClose)),
        ref: r,
      }),
    })
  })
_i.displayName = Nr
var jm = u.forwardRef((e, r) => {
    const {
        __scopeHoverCard: t,
        onEscapeKeyDown: n,
        onPointerDownOutside: o,
        onFocusOutside: a,
        onInteractOutside: l,
        ...i
      } = e,
      c = so(Nr, t),
      f = Kr(t),
      m = u.useRef(null),
      p = je(r, m),
      [v, d] = u.useState(!1)
    return (
      u.useEffect(() => {
        if (v) {
          const x = document.body
          return (
            (hn = x.style.userSelect || x.style.webkitUserSelect),
            (x.style.userSelect = 'none'),
            (x.style.webkitUserSelect = 'none'),
            () => {
              ;((x.style.userSelect = hn), (x.style.webkitUserSelect = hn))
            }
          )
        }
      }, [v]),
      u.useEffect(() => {
        if (m.current) {
          const x = () => {
            ;(d(!1),
              (c.isPointerDownOnContentRef.current = !1),
              setTimeout(() => {
                var g
                ;((g = document.getSelection()) == null
                  ? void 0
                  : g.toString()) !== '' && (c.hasSelectionRef.current = !0)
              }))
          }
          return (
            document.addEventListener('pointerup', x),
            () => {
              ;(document.removeEventListener('pointerup', x),
                (c.hasSelectionRef.current = !1),
                (c.isPointerDownOnContentRef.current = !1))
            }
          )
        }
      }, [c.isPointerDownOnContentRef, c.hasSelectionRef]),
      u.useEffect(() => {
        m.current &&
          Pm(m.current).forEach(h => h.setAttribute('tabindex', '-1'))
      }),
      s.jsx(va, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onInteractOutside: l,
        onEscapeKeyDown: n,
        onPointerDownOutside: o,
        onFocusOutside: ie(a, x => {
          x.preventDefault()
        }),
        onDismiss: c.onDismiss,
        children: s.jsx(ba, {
          ...f,
          ...i,
          onPointerDown: ie(i.onPointerDown, x => {
            ;(x.currentTarget.contains(x.target) && d(!0),
              (c.hasSelectionRef.current = !1),
              (c.isPointerDownOnContentRef.current = !0))
          }),
          ref: p,
          style: {
            ...i.style,
            userSelect: v ? 'text' : void 0,
            WebkitUserSelect: v ? 'text' : void 0,
            '--radix-hover-card-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-hover-card-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-hover-card-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-hover-card-trigger-width':
              'var(--radix-popper-anchor-width)',
            '--radix-hover-card-trigger-height':
              'var(--radix-popper-anchor-height)',
          },
        }),
      })
    )
  }),
  Tm = 'HoverCardArrow',
  Rm = u.forwardRef((e, r) => {
    const { __scopeHoverCard: t, ...n } = e,
      o = Kr(t)
    return s.jsx(ya, { ...o, ...n, ref: r })
  })
Rm.displayName = Tm
function Er(e) {
  return r => (r.pointerType === 'touch' ? void 0 : e())
}
function Pm(e) {
  const r = [],
    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: n =>
        n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
    })
  for (; t.nextNode(); ) r.push(t.currentNode)
  return r
}
var Im = yi,
  Dm = Ci,
  ki = _i
const Am = Im,
  $m = Dm,
  Ni = u.forwardRef(
    ({ className: e, align: r = 'center', sideOffset: t = 4, ...n }, o) =>
      s.jsx(ki, {
        ref: o,
        align: r,
        sideOffset: t,
        className: le(
          'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          e
        ),
        ...n,
      })
  )
Ni.displayName = ki.displayName
const Mm = ({ doorEntries: e, palletEntries: r }) => {
    const [t, n] = u.useState(!1),
      o = async () => {
        if (e.length === 0 && r.length === 0) {
          de.error('No data to export')
          return
        }
        n(!0)
        try {
          ;(await _m(e, r),
            de.success('Export successful!', {
              description: 'All data exported as ZIP file',
            }))
        } catch (a) {
          ;(console.error('Export error:', a),
            de.error('Failed to export data', {
              description: 'Please try again or contact support',
            }))
        } finally {
          n(!1)
        }
      }
    return s.jsxs(Am, {
      children: [
        s.jsx($m, {
          asChild: !0,
          children: s.jsxs(ge, {
            onClick: o,
            disabled: t || (e.length === 0 && r.length === 0),
            className: `bg-walmart-yellow text-black hover:bg-walmart-yellow/80 transition-all hover:scale-105 focus:scale-95 ${t ? 'animate-pulse' : ''}`,
            children: [
              s.jsx(Bd, { className: 'mr-2 h-4 w-4' }),
              t ? 'Exporting...' : 'Export All Data',
            ],
          }),
        }),
        s.jsx(Ni, {
          className: 'w-80 p-4',
          children: s.jsxs('div', {
            className: 'space-y-2',
            children: [
              s.jsx('h4', {
                className: 'text-sm font-semibold',
                children: 'Export All Data',
              }),
              s.jsx('p', {
                className: 'text-sm text-muted-foreground',
                children: 'Exports three CSV files in a ZIP package:',
              }),
              s.jsxs('ul', {
                className:
                  'text-xs text-muted-foreground list-disc pl-4 space-y-1',
                children: [
                  s.jsx('li', { children: 'doors.csv - All door assignments' }),
                  s.jsx('li', { children: 'pallets.csv - All pallet counts' }),
                  s.jsx('li', { children: 'notes.csv - All door notes' }),
                ],
              }),
              s.jsx('p', {
                className: 'text-xs text-muted-foreground mt-2',
                children: 'Each file includes timestamps and user information.',
              }),
            ],
          }),
        }),
      ],
    })
  },
  Om = e => {
    if (e.length === 0) return 332
    const r = new Set(e.map(t => t.doorNumber))
    for (let t = 332; t <= 454; t++) if (!r.has(t)) return t
    return (
      console.warn('All door numbers 332-454 are in use, returning 332'),
      332
    )
  },
  Lm = e => {
    if (e.length === 0) return 332
    const r = [...e].sort((n, o) => n.doorNumber - o.doorNumber),
      t = r[r.length - 1].doorNumber
    return t < 454 ? t + 1 : Om(e)
  },
  Fm = ({ onAddDoor: e, currentDoors: r }) => {
    const { settings: t } = Ge(),
      { currentUser: n } = sr(),
      o = () => {
        if (r.length >= 10) {
          de.error('Maximum door limit reached.')
          return
        }
        const a = Lm(r),
          l = {
            id: Math.random().toString(36).substring(7),
            doorNumber: a,
            destinationDC: t.lastUsedDC,
            freightType: t.lastUsedFreightType,
            trailerStatus: 'empty',
            palletCount: 0,
            timestamp: new Date().toISOString(),
            createdBy: n.username,
            tcrPresent: !1,
          }
        ;(e(l),
          de.success('Door quickly added!', {
            description: `Door ${l.doorNumber} added with your preferred settings`,
          }))
      }
    return s.jsx(Gn, {
      children: s.jsxs(ds, {
        children: [
          s.jsx(us, {
            asChild: !0,
            children: s.jsxs(ge, {
              onClick: o,
              size: 'sm',
              variant: 'outline',
              className:
                'gap-1 border-2 border-walmart-yellow bg-walmart-yellow/80 text-walmart-blue-dark hover:bg-walmart-yellow/90 transition-all duration-300 transform hover:scale-105 focus:scale-95 min-h-[44px] font-medium shadow-md',
              children: [
                s.jsx(Wn, { className: 'h-4 w-4 text-walmart-blue-dark' }),
                s.jsx('span', {
                  className: 'text-value font-semibold',
                  children: 'Quick Add',
                }),
              ],
            }),
          }),
          s.jsxs(Zn, {
            children: [
              s.jsx('p', {
                children: 'Instantly add door using saved preferences',
              }),
              s.jsxs('p', {
                className: 'text-xs text-muted-foreground mt-1',
                children: [
                  'DC: ',
                  t.lastUsedDC,
                  ' • Type: ',
                  t.lastUsedFreightType,
                ],
              }),
            ],
          }),
        ],
      }),
    })
  },
  zm = ({ onAddDoor: e, onQuickAddDoor: r }) => {
    const { toast: t } = Ta(),
      { settings: n } = Ge(),
      o = n.enableActionButton !== !1
    return (
      u.useEffect(() => {
        if (!o) return
        const a = l => {
          l.target instanceof HTMLInputElement ||
            l.target instanceof HTMLTextAreaElement ||
            l.target instanceof HTMLSelectElement ||
            (l.altKey && l.key === 'a'
              ? (l.preventDefault(),
                e(),
                t({
                  title: 'Keyboard Shortcut Used',
                  description: 'Door added with Alt+A',
                }))
              : l.altKey &&
                l.key === 'q' &&
                (l.preventDefault(),
                r(),
                t({
                  title: 'Keyboard Shortcut Used',
                  description: 'Door quick-added with Alt+Q',
                })))
        }
        return (
          window.addEventListener('keydown', a),
          () => {
            window.removeEventListener('keydown', a)
          }
        )
      }, [e, r, t, o]),
      o
        ? s.jsx(Gn, {
            children: s.jsxs(ds, {
              children: [
                s.jsx(us, {
                  asChild: !0,
                  children: s.jsx('div', {
                    className:
                      'flex items-center justify-center ml-2 text-gray-500',
                    children: s.jsx(Wd, { className: 'h-4 w-4' }),
                  }),
                }),
                s.jsxs(Zn, {
                  children: [
                    s.jsx('p', {
                      className: 'font-semibold',
                      children: 'Keyboard Shortcuts',
                    }),
                    s.jsxs('div', {
                      className: 'text-sm mt-1',
                      children: [
                        s.jsxs('p', {
                          children: [
                            s.jsx('kbd', {
                              className: 'px-2 py-1 bg-gray-100 rounded',
                              children: 'Alt+A',
                            }),
                            ' Add door',
                          ],
                        }),
                        s.jsxs('p', {
                          children: [
                            s.jsx('kbd', {
                              className: 'px-2 py-1 bg-gray-100 rounded',
                              children: 'Alt+Q',
                            }),
                            ' Quick add door',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        : null
    )
  },
  Bm = ({ onSelectDoor: e, currentDoors: r = [] }) => {
    const [t, n] = u.useState(!1),
      [o, a] = u.useState(''),
      l = 332,
      i = 454,
      c = d => {
        o.length < 3 && a(x => x + d)
      },
      f = () => {
        a(d => d.slice(0, -1))
      },
      m = () => {
        a('')
      },
      p = () => {
        const d = parseInt(o, 10)
        if (isNaN(d)) {
          de.error('Please enter a valid door number')
          return
        }
        if (d < l || d > i) {
          de.error(`Door number must be between ${l} and ${i}`)
          return
        }
        if (r.includes(d)) {
          de.error(`Door ${d} is already in use`)
          return
        }
        ;(e(d), n(!1), m())
      },
      v = () => {
        const d = [
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
          ['C', '0', '⌫'],
        ]
        return s.jsx('div', {
          className: 'grid grid-cols-3 gap-2 mt-4',
          children: d.map((x, h) =>
            s.jsx(
              'div',
              {
                children: x.map(g =>
                  g === 'C'
                    ? s.jsx(
                        ge,
                        {
                          variant: 'outline',
                          onClick: m,
                          className: 'h-14 text-lg',
                          children: s.jsx(Mr, { size: 18 }),
                        },
                        `digit-${g}`
                      )
                    : g === '⌫'
                      ? s.jsx(
                          ge,
                          {
                            variant: 'outline',
                            onClick: f,
                            className: 'h-14 text-lg',
                            children: s.jsx(zd, { size: 18 }),
                          },
                          `digit-${g}`
                        )
                      : s.jsx(
                          ge,
                          {
                            variant: 'outline',
                            onClick: () => c(g),
                            className: 'h-14 text-lg',
                            children: g,
                          },
                          `digit-${g}`
                        )
                ),
              },
              `row-${h}`
            )
          ),
        })
      }
    return s.jsxs(Jn, {
      open: t,
      onOpenChange: n,
      children: [
        s.jsx(Qn, {
          asChild: !0,
          children: s.jsxs(ge, {
            variant: 'outline',
            size: 'sm',
            'aria-label': 'Fast Add Door',
            className:
              'gap-1 border-2 border-walmart-blue bg-walmart-blue/10 text-walmart-blue hover:bg-walmart-blue/20 transition-all duration-300 transform hover:scale-105 focus:scale-95 min-h-[44px] font-medium',
            children: [
              s.jsx(Ud, {
                className: 'h-4 w-4',
                'data-testid': 'mock-speed-icon',
              }),
              s.jsx('span', { children: 'Speed Add' }),
            ],
          }),
        }),
        s.jsxs(Fr, {
          className: 'sm:max-w-md',
          'data-testid': 'fast-add-door-form',
          children: [
            s.jsxs(eo, {
              children: [
                s.jsx(to, { children: 'Fast Add Door' }),
                s.jsx(ro, {
                  children:
                    'Quickly add a door with default values. Adjust details later if needed.',
                }),
              ],
            }),
            s.jsxs('div', {
              className: 'flex flex-col',
              children: [
                s.jsx('div', {
                  className:
                    'text-center py-4 px-3 bg-gray-50 rounded-md border text-3xl font-mono min-h-[70px] flex items-center justify-center mb-4',
                  children: o || 'Enter Door #',
                }),
                v(),
                s.jsxs(ge, {
                  onClick: p,
                  className: 'mt-4 h-14',
                  disabled: !o || o.length < 3,
                  children: [
                    s.jsx(or, { className: 'mr-2 h-5 w-5' }),
                    'Add Door',
                  ],
                }),
                s.jsxs('div', {
                  className: 'mt-3 text-xs text-gray-500 text-center',
                  children: ['Valid door numbers: ', l, ' - ', i],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  },
  io = 'doorSchedulesStore',
  lo = async () => {
    try {
      const e = localStorage.getItem(io)
      return e ? JSON.parse(e) : []
    } catch (e) {
      return (
        console.error('Error loading schedules from localStorage:', e),
        []
      )
    }
  },
  Kt = async e => {
    try {
      const r = await lo(),
        t = r.some(n => n.id === e.id)
          ? r.map(n => (n.id === e.id ? e : n))
          : [...r, e]
      localStorage.setItem(io, JSON.stringify(t))
    } catch (r) {
      console.error('Error saving schedule to localStorage:', r)
    }
  },
  Um = async e => {
    try {
      const t = (await lo()).filter(n => n.id !== e)
      localStorage.setItem(io, JSON.stringify(t))
    } catch (r) {
      console.error('Error deleting schedule from localStorage:', r)
    }
  },
  Vm = e => {
    const [r, t] = u.useState(!1)
    return (
      u.useEffect(() => {
        const n = window.matchMedia(e),
          o = () => t(n.matches)
        return (
          o(),
          n.addEventListener('change', o),
          () => {
            n.removeEventListener('change', o)
          }
        )
      }, [e]),
      r
    )
  },
  Hm = () => {
    const [e, r] = u.useState([]),
      [t, n] = u.useState(!0),
      [o, a] = u.useState(null),
      { settings: l, updateLastUsedDC: i, updateLastUsedFreightType: c } = Ge(),
      { currentUser: f } = sr(),
      m = Vm('(max-width: 767px)'),
      [p, v] = u.useState(''),
      [d, x] = u.useState(''),
      [h, g] = u.useState(null)
    u.useEffect(() => {
      ;(async () => {
        try {
          n(!0)
          const L = await lo()
          r(L || [])
        } catch (L) {
          ;(console.error('Error loading schedules from localStorage:', L),
            de.error('Failed to load saved schedule data.'))
        } finally {
          n(!1)
        }
      })().catch(L => {
        ;(console.error('Failed to load schedules from localStorage:', L),
          de.error('Failed to load saved schedule data.'),
          n(!1))
      })
    }, [])
    const w = u.useCallback(async () => {
        if (e.length >= 10) {
          de.error('Maximum door limit reached.')
          return
        }
        const R = {
          id: Math.random().toString(36).substring(7),
          doorNumber: 332,
          destinationDC: l.lastUsedDC,
          freightType: l.lastUsedFreightType,
          trailerStatus: 'empty',
          palletCount: 0,
          timestamp: new Date().toISOString(),
          createdBy: f.username,
          tcrPresent: !1,
        }
        try {
          ;(await Kt(R),
            r(L => [...L, R]),
            a(R.id),
            setTimeout(() => a(null), 600),
            de.success('Door added successfully'))
        } catch (L) {
          ;(console.error('Error adding door to localStorage:', L),
            de.error('Failed to save new door.'))
        }
      }, [e, l, f]),
      S = u.useCallback(async R => {
        try {
          ;(await Kt(R),
            r(L => [...L, R]),
            a(R.id),
            setTimeout(() => a(null), 600))
        } catch (L) {
          ;(console.error('Error adding door data to localStorage:', L),
            de.error('Failed to save door data.'))
        }
      }, []),
      C = u.useCallback(
        async R => {
          if (e.length >= 10) {
            de.error('Maximum door limit reached.')
            return
          }
          let L = R.doorNumber ? parseInt(R.doorNumber) : null
          if (
            (L !== null &&
              (isNaN(L) || L < 332 || L > 454) &&
              (de.error(
                `Invalid door number from voice: ${R.doorNumber}. Must be 332-454.`
              ),
              (L = null)),
            L === null)
          ) {
            const M = new Set(e.map(U => U.doorNumber))
            let K = 332
            for (; M.has(K) && K <= 454; ) K++
            if (K > 454) {
              de.error('No available door numbers left.')
              return
            }
            ;((L = K), de.info(`Assigning next available door: ${L}`))
          }
          const V = R.destinationDC && Wm.includes(R.destinationDC),
            k = R.freightType && Km.includes(R.freightType),
            P =
              R.trailerStatus && Gm.map(M => M.value).includes(R.trailerStatus),
            b = {
              id: Math.random().toString(36).substring(7),
              doorNumber: L,
              destinationDC:
                V && R.destinationDC ? R.destinationDC : l.lastUsedDC,
              freightType:
                k && R.freightType ? R.freightType : l.lastUsedFreightType,
              trailerStatus: P && R.trailerStatus ? R.trailerStatus : 'empty',
              palletCount: 0,
              timestamp: new Date().toISOString(),
              createdBy: `${f.username} (voice)`,
              tcrPresent: !1,
            }
          ;(await S(b),
            de.success(`Door ${b.doorNumber} added via voice command.`))
        },
        [e, l, f, S]
      ),
      _ = u.useCallback(
        async R => {
          if (e.length >= 10) {
            de.error('Maximum door limit reached.')
            return
          }
          const L = {
            id: Math.random().toString(36).substring(7),
            doorNumber: R,
            destinationDC: l.lastUsedDC,
            freightType: l.lastUsedFreightType,
            trailerStatus: 'empty',
            palletCount: 0,
            timestamp: new Date().toISOString(),
            createdBy: f.username,
            tcrPresent: !1,
          }
          try {
            ;(await Kt(L),
              r(V => [...V, L]),
              a(L.id),
              setTimeout(() => a(null), 600),
              de.success(`Door ${R} added with speed selection`, {
                description: 'Using your preferred settings',
              }))
          } catch (V) {
            ;(console.error('Error adding speed door to localStorage:', V),
              de.error('Failed to save new door.'))
          }
        },
        [e, l, f]
      ),
      E = u.useCallback(async () => {
        const R = document.querySelector("button[aria-label='Quick add door']")
        if (R instanceof HTMLElement && typeof R.click == 'function') R.click()
        else {
          if (e.length >= 10) {
            de.error('Maximum door limit reached.')
            return
          }
          const L = new Set(e.map(P => P.doorNumber))
          let V = 332
          for (let P = 332; P <= 454; P++)
            if (!L.has(P)) {
              V = P
              break
            }
          const k = {
            id: Math.random().toString(36).substring(7),
            doorNumber: V,
            destinationDC: l.lastUsedDC,
            freightType: l.lastUsedFreightType,
            trailerStatus: 'empty',
            palletCount: 0,
            timestamp: new Date().toISOString(),
            createdBy: f.username,
            tcrPresent: !1,
          }
          try {
            ;(await Kt(k),
              r(P => [...P, k]),
              de.success('Door quickly added via keyboard shortcut', {
                description: `Door ${k.doorNumber} added with your preferred settings`,
              }))
          } catch (P) {
            ;(console.error('Error adding quick door to localStorage:', P),
              de.error('Failed to save new door.'))
          }
        }
      }, [e, l, f, S]),
      D = u.useCallback(
        async (R, L, V) => {
          let k = null
          if (
            (r(P =>
              P.map(M => {
                if (M.id === R) {
                  if (L === 'doorNumber') {
                    const K = parseInt(V)
                    return isNaN(K) || K < 332 || K > 454
                      ? (de.error('Door number must be between 332 and 454'), M)
                      : ((k = {
                          ...M,
                          [L]: K,
                          updatedAt: new Date().toISOString(),
                          updatedBy: f.username,
                        }),
                        k)
                  }
                  return (
                    L === 'destinationDC' ? i(V) : L === 'freightType' && c(V),
                    (k = {
                      ...M,
                      [L]: V,
                      updatedAt: new Date().toISOString(),
                      updatedBy: f.username,
                    }),
                    k
                  )
                }
                return M
              })
            ),
            k)
          )
            try {
              await Kt(k)
            } catch (P) {
              ;(console.error('Error updating schedule in localStorage:', P),
                de.error('Failed to save changes.'))
            }
        },
        [f, i, c]
      ),
      T = u.useCallback(async R => {
        try {
          ;(await Um(R),
            r(L => L.filter(V => V.id !== R)),
            de.success('Door removed successfully'))
        } catch (L) {
          ;(console.error('Error removing door from localStorage:', L),
            de.error('Failed to remove door.'))
        }
      }, []),
      I = e.map(R => R.doorNumber)
    return t
      ? s.jsxs(Je, {
          className: 'container mx-auto p-6 text-center',
          children: [
            s.jsx(Qe, { children: 'Loading Schedule...' }),
            s.jsx('div', {
              className: 'mt-4 text-gray-500',
              children: 'Please wait...',
            }),
          ],
        })
      : s.jsxs(Je, {
          className:
            'container mx-auto shadow-xl border-t-4 border-t-wal-yellow-500 transition-all duration-200 hover:shadow-2xl bg-gradient-to-br from-white to-blue-50',
          children: [
            s.jsx(ht, {
              className:
                'bg-gradient-to-r from-wal-blue-500 to-wal-blue-600 border-b text-white',
              children: s.jsxs('div', {
                className: 'flex flex-wrap items-center justify-between gap-2',
                children: [
                  s.jsxs('div', {
                    className: 'flex items-center',
                    children: [
                      s.jsx(Qe, {
                        className:
                          'text-heading text-white mr-2 font-bold text-xl',
                        children: '🚪 Door Schedule',
                      }),
                      s.jsx(zm, { onAddDoor: w, onQuickAddDoor: E }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: 'flex flex-wrap gap-2',
                    children: [
                      s.jsxs(ge, {
                        onClick: w,
                        size: 'sm',
                        className:
                          'gap-2 bg-wal-yellow-500 text-wal-blue-800 hover:bg-wal-yellow-400 hover:text-wal-blue-900 transition-all duration-300 transform hover:scale-105 focus:scale-95 min-h-[44px] font-bold shadow-lg hover:shadow-xl',
                        children: [
                          s.jsx(qt, { className: 'h-4 w-4' }),
                          s.jsx('span', {
                            className: 'text-value',
                            children: 'Add Door',
                          }),
                        ],
                      }),
                      s.jsx(Fm, { onAddDoor: S, currentDoors: e }),
                      s.jsx(Bm, { onSelectDoor: _, currentDoors: I }),
                      s.jsx(yh, { onAddDoor: w, onAddDoorWithParams: C }),
                      s.jsx(Mm, { doorEntries: e, palletEntries: [] }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsx(pt, {
              className: 'p-4 md:p-6',
              children: s.jsx('div', {
                className: 'space-y-4',
                children:
                  e.length === 0
                    ? s.jsxs('div', {
                        className:
                          'text-center py-16 px-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-dashed border-wal-blue-300 shadow-inner',
                        children: [
                          s.jsx('div', {
                            className: 'text-6xl mb-4',
                            children: '🚪',
                          }),
                          s.jsx('p', {
                            className:
                              'text-heading text-wal-blue-700 font-bold text-lg',
                            children: 'No doors assigned yet',
                          }),
                          s.jsx('p', {
                            className: 'text-label mt-2 text-wal-blue-600',
                            children:
                              'Click "Add Door" to get started with door scheduling.',
                          }),
                          s.jsxs(ge, {
                            onClick: w,
                            className:
                              'mt-6 bg-wal-yellow-500 text-wal-blue-800 hover:bg-wal-yellow-400 hover:text-wal-blue-900 min-h-[44px] font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
                            children: [
                              s.jsx(qt, { className: 'h-4 w-4 mr-2' }),
                              s.jsx('span', {
                                className: 'text-value',
                                children: 'Add Your First Door',
                              }),
                            ],
                          }),
                        ],
                      })
                    : s.jsx('div', {
                        className: `mt-4 ${m ? 'space-y-3' : 'border-2 border-wal-blue-200 rounded-xl overflow-hidden bg-gradient-to-br from-white to-blue-50 shadow-lg'}`,
                        children: m
                          ? s.jsx('div', {
                              className: 'space-y-3',
                              children: e.map(R =>
                                s.jsx(
                                  ea,
                                  {
                                    door: R,
                                    updateDoorSchedule: D,
                                    removeDoor: T,
                                    isAnimated: o === R.id,
                                    isMobileView: !0,
                                  },
                                  R.id
                                )
                              ),
                            })
                          : s.jsx('div', {
                              className: 'overflow-x-auto',
                              children: s.jsxs(Ts, {
                                children: [
                                  s.jsx(Rs, {
                                    children: s.jsxs(qn, {
                                      className:
                                        'bg-gradient-to-r from-wal-blue-100 to-wal-blue-200 hover:from-wal-blue-200 hover:to-wal-blue-300 transition-all duration-200',
                                      children: [
                                        s.jsx(it, {
                                          className:
                                            'font-bold text-wal-blue-800',
                                          children: '🚪 Door',
                                        }),
                                        s.jsx(it, {
                                          className:
                                            'font-bold text-wal-blue-800',
                                          children: '📍 Destination',
                                        }),
                                        s.jsx(it, {
                                          className:
                                            'font-bold text-wal-blue-800',
                                          children: '📦 Freight',
                                        }),
                                        s.jsx(it, {
                                          className:
                                            'font-bold text-wal-blue-800',
                                          children: '📊 Status',
                                        }),
                                        s.jsx(it, {
                                          className:
                                            'text-center font-bold text-wal-blue-800',
                                          children: '📋 Pallets',
                                        }),
                                        s.jsx(it, {
                                          className:
                                            'text-center font-bold text-wal-blue-800',
                                          children: '📋 TCR',
                                        }),
                                        s.jsx(it, {
                                          className:
                                            'text-right font-bold text-wal-blue-800',
                                          children: s.jsx('span', {
                                            className: 'hidden sm:inline',
                                            children: '⚙️ Actions',
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  s.jsx(Ps, {
                                    children: e.map(R =>
                                      s.jsx(
                                        ea,
                                        {
                                          door: R,
                                          updateDoorSchedule: D,
                                          removeDoor: T,
                                          isAnimated: o === R.id,
                                          isMobileView: !1,
                                        },
                                        R.id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            }),
                      }),
              }),
            }),
          ],
        })
  },
  Wm = ['6024', '6070', '6039', '6040', '7045'],
  Km = ['23/43', '28', 'XD', 'AIB'],
  Gm = [
    { value: 'empty', label: 'Empty' },
    { value: '25%', label: '25%' },
    { value: '50%', label: '50%' },
    { value: '75%', label: '75%' },
    { value: 'partial', label: 'Partial' },
    { value: 'shipload', label: 'Shipload' },
  ],
  Zm = () => {
    const [e, r] = u.useState([]),
      { currentUser: t } = sr()
    ;(u.useEffect(() => {
      const f = localStorage.getItem('palletEntries')
      if (f)
        try {
          const p = JSON.parse(f).map(v =>
            !v.doorNumber && typeof v.doorNumber != 'number'
              ? { ...v, doorNumber: 0 }
              : v
          )
          r(p)
        } catch (m) {
          ;(console.error('Error parsing saved pallet entries:', m), r([]))
        }
    }, []),
      u.useEffect(() => {
        e.length > 0 && localStorage.setItem('palletEntries', JSON.stringify(e))
      }, [e]))
    const n = () => {
        const f = {
          id: Math.random().toString(36).substring(7),
          count: 0,
          timestamp: new Date().toISOString(),
          createdBy: t.username,
          isActive: !1,
          startTime: null,
          endTime: null,
          elapsedTime: 0,
          doorNumber: 0,
        }
        ;(r([...e, f]), de.success('New counter added'))
      },
      o = (f, m) => {
        r(p =>
          p.map(v => {
            if (v.id === f) {
              const d = m ? v.count + 1 : Math.max(0, v.count - 1)
              let x = { ...v }
              return (
                m && d === 1 && !v.isActive && !v.startTime
                  ? ((x = {
                      ...x,
                      isActive: !0,
                      startTime: new Date().toISOString(),
                      updatedAt: new Date().toISOString(),
                      updatedBy: t.username,
                      count: d,
                    }),
                    de.success(`Started timer and increased to ${d}`))
                  : m
                    ? (de.success(`Increased to ${d}`),
                      (x = {
                        ...x,
                        count: d,
                        updatedAt: new Date().toISOString(),
                        updatedBy: t.username,
                      }))
                    : v.count > 0 &&
                      (de.info(`Decreased to ${d}`),
                      (x = {
                        ...x,
                        count: d,
                        updatedAt: new Date().toISOString(),
                        updatedBy: t.username,
                      })),
                x
              )
            }
            return v
          })
        )
      },
      a = f => {
        r(m =>
          m.map(p => {
            if (p.id === f)
              if (p.isActive) {
                const v = new Date().toISOString(),
                  d = p.startTime ? new Date(p.startTime).getTime() : 0,
                  x = new Date(v).getTime(),
                  h = d ? x - d : 0,
                  g = Math.floor(h / 1e3)
                return (
                  de.success(`Timer stopped. Total time: ${c(g)}`),
                  {
                    ...p,
                    isActive: !1,
                    endTime: v,
                    elapsedTime: g,
                    updatedAt: new Date().toISOString(),
                    updatedBy: t.username,
                  }
                )
              } else
                return (
                  de.success('Timer started'),
                  {
                    ...p,
                    isActive: !0,
                    startTime: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    updatedBy: t.username,
                  }
                )
            return p
          })
        )
      },
      l = f => {
        ;(r(m => m.filter(p => p.id !== f)), de.success('Counter removed'))
      },
      i = (f, m) => {
        r(p =>
          p.map(v =>
            v.id === f
              ? {
                  ...v,
                  doorNumber: m,
                  updatedAt: new Date().toISOString(),
                  updatedBy: t.username,
                }
              : v
          )
        )
      },
      c = f => Hr(f)
    return {
      palletEntries: e,
      addPalletEntry: n,
      updateCount: o,
      deletePalletEntry: l,
      updateDoorNumber: i,
      toggleTimer: a,
      formatElapsedTime: c,
    }
  },
  co = u.forwardRef(({ className: e, type: r, ...t }, n) =>
    s.jsx('input', {
      type: r,
      className: le(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        e
      ),
      ref: n,
      ...t,
    })
  )
co.displayName = 'Input'
const Ym = 'Left',
  Xm = 'Right',
  qm = 'Up',
  Jm = 'Down',
  It = {
    delta: 10,
    preventScrollOnSwipe: !1,
    rotationAngle: 0,
    trackMouse: !1,
    trackTouch: !0,
    swipeDuration: 1 / 0,
    touchEventOptions: { passive: !0 },
  },
  Tn = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
  ra = 'mousemove',
  na = 'mouseup',
  Qm = 'touchend',
  eg = 'touchmove',
  tg = 'touchstart'
function rg(e, r, t, n) {
  return e > r ? (t > 0 ? Xm : Ym) : n > 0 ? Jm : qm
}
function oa(e, r) {
  if (r === 0) return e
  const t = (Math.PI / 180) * r,
    n = e[0] * Math.cos(t) + e[1] * Math.sin(t),
    o = e[1] * Math.cos(t) - e[0] * Math.sin(t)
  return [n, o]
}
function ng(e, r) {
  const t = m => {
      const p = 'touches' in m
      ;(p && m.touches.length > 1) ||
        e((v, d) => {
          d.trackMouse &&
            !p &&
            (document.addEventListener(ra, n), document.addEventListener(na, l))
          const { clientX: x, clientY: h } = p ? m.touches[0] : m,
            g = oa([x, h], d.rotationAngle)
          return (
            d.onTouchStartOrOnMouseDown &&
              d.onTouchStartOrOnMouseDown({ event: m }),
            Object.assign(Object.assign(Object.assign({}, v), Tn), {
              initial: g.slice(),
              xy: g,
              start: m.timeStamp || 0,
            })
          )
        })
    },
    n = m => {
      e((p, v) => {
        const d = 'touches' in m
        if (d && m.touches.length > 1) return p
        if (m.timeStamp - p.start > v.swipeDuration)
          return p.swiping
            ? Object.assign(Object.assign({}, p), { swiping: !1 })
            : p
        const { clientX: x, clientY: h } = d ? m.touches[0] : m,
          [g, w] = oa([x, h], v.rotationAngle),
          S = g - p.xy[0],
          C = w - p.xy[1],
          _ = Math.abs(S),
          E = Math.abs(C),
          D = (m.timeStamp || 0) - p.start,
          T = Math.sqrt(_ * _ + E * E) / (D || 1),
          I = [S / (D || 1), C / (D || 1)],
          R = rg(_, E, S, C),
          L =
            typeof v.delta == 'number'
              ? v.delta
              : v.delta[R.toLowerCase()] || It.delta
        if (_ < L && E < L && !p.swiping) return p
        const V = {
          absX: _,
          absY: E,
          deltaX: S,
          deltaY: C,
          dir: R,
          event: m,
          first: p.first,
          initial: p.initial,
          velocity: T,
          vxvy: I,
        }
        ;(V.first && v.onSwipeStart && v.onSwipeStart(V),
          v.onSwiping && v.onSwiping(V))
        let k = !1
        return (
          (v.onSwiping || v.onSwiped || v[`onSwiped${R}`]) && (k = !0),
          k &&
            v.preventScrollOnSwipe &&
            v.trackTouch &&
            m.cancelable &&
            m.preventDefault(),
          Object.assign(Object.assign({}, p), {
            first: !1,
            eventData: V,
            swiping: !0,
          })
        )
      })
    },
    o = m => {
      e((p, v) => {
        let d
        if (p.swiping && p.eventData) {
          if (m.timeStamp - p.start < v.swipeDuration) {
            ;((d = Object.assign(Object.assign({}, p.eventData), { event: m })),
              v.onSwiped && v.onSwiped(d))
            const x = v[`onSwiped${d.dir}`]
            x && x(d)
          }
        } else v.onTap && v.onTap({ event: m })
        return (
          v.onTouchEndOrOnMouseUp && v.onTouchEndOrOnMouseUp({ event: m }),
          Object.assign(Object.assign(Object.assign({}, p), Tn), {
            eventData: d,
          })
        )
      })
    },
    a = () => {
      ;(document.removeEventListener(ra, n),
        document.removeEventListener(na, l))
    },
    l = m => {
      ;(a(), o(m))
    },
    i = (m, p) => {
      let v = () => {}
      if (m && m.addEventListener) {
        const d = Object.assign(
            Object.assign({}, It.touchEventOptions),
            p.touchEventOptions
          ),
          x = [
            [tg, t, d],
            [
              eg,
              n,
              Object.assign(
                Object.assign({}, d),
                p.preventScrollOnSwipe ? { passive: !1 } : {}
              ),
            ],
            [Qm, o, d],
          ]
        ;(x.forEach(([h, g, w]) => m.addEventListener(h, g, w)),
          (v = () => x.forEach(([h, g]) => m.removeEventListener(h, g))))
      }
      return v
    },
    f = {
      ref: m => {
        m !== null &&
          e((p, v) => {
            if (p.el === m) return p
            const d = {}
            return (
              p.el &&
                p.el !== m &&
                p.cleanUpTouch &&
                (p.cleanUpTouch(), (d.cleanUpTouch = void 0)),
              v.trackTouch && m && (d.cleanUpTouch = i(m, v)),
              Object.assign(Object.assign(Object.assign({}, p), { el: m }), d)
            )
          })
      },
    }
  return (r.trackMouse && (f.onMouseDown = t), [f, i])
}
function og(e, r, t, n) {
  return !r.trackTouch || !e.el
    ? (e.cleanUpTouch && e.cleanUpTouch(),
      Object.assign(Object.assign({}, e), { cleanUpTouch: void 0 }))
    : e.cleanUpTouch
      ? r.preventScrollOnSwipe !== t.preventScrollOnSwipe ||
        r.touchEventOptions.passive !== t.touchEventOptions.passive
        ? (e.cleanUpTouch(),
          Object.assign(Object.assign({}, e), { cleanUpTouch: n(e.el, r) }))
        : e
      : Object.assign(Object.assign({}, e), { cleanUpTouch: n(e.el, r) })
}
function ag(e) {
  const { trackMouse: r } = e,
    t = u.useRef(Object.assign({}, Tn)),
    n = u.useRef(Object.assign({}, It)),
    o = u.useRef(Object.assign({}, n.current))
  ;((o.current = Object.assign({}, n.current)),
    (n.current = Object.assign(Object.assign({}, It), e)))
  let a
  for (a in It) n.current[a] === void 0 && (n.current[a] = It[a])
  const [l, i] = u.useMemo(
    () => ng(c => (t.current = c(t.current, n.current)), { trackMouse: r }),
    [r]
  )
  return ((t.current = og(t.current, n.current, o.current, i)), l)
}
const sg = ({
    entry: e,
    onIncrement: r,
    onDecrement: t,
    onDelete: n,
    onDoorNumberChange: o,
    onToggleTimer: a,
    formatElapsedTime: l,
  }) => {
    const { settings: i } = Ge(),
      [c, f] = J.useState(null),
      [m, p] = J.useState(e.elapsedTime || 0)
    J.useEffect(() => {
      let C = null
      return (
        e.isActive && e.startTime
          ? (C = setInterval(() => {
              const _ = new Date(e.startTime).getTime(),
                E = new Date().getTime(),
                D = Math.floor((E - _) / 1e3)
              p(D)
            }, 1e3))
          : p(e.elapsedTime || 0),
        () => {
          C && clearInterval(C)
        }
      )
    }, [e.isActive, e.startTime, e.elapsedTime])
    const v = J.useMemo(() => (l ? l(m) : Hr(m)), [m, l]),
      d = ag({
        onSwiping: C => {
          i.interactionMode === 'swipe' && f(C.dir)
        },
        onSwiped: C => {
          i.interactionMode === 'swipe' &&
            (C.dir === 'Right'
              ? (r(), de.success(`Increased to ${e.count + 1}`))
              : C.dir === 'Left' &&
                (t(), de.info(`Decreased to ${Math.max(0, e.count - 1)}`)),
            f(null))
        },
        delta: 10,
        trackTouch: !0,
        trackMouse: !1,
      }),
      h = `flex items-center justify-between p-3 rounded-lg border ${c === 'Right' ? 'bg-green-50' : c === 'Left' ? 'bg-red-50' : ''} ${e.isActive ? 'bg-green-50' : ''} transition-colors duration-200`,
      g = C =>
        C
          ? new Date(C).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })
          : '',
      w = C =>
        C
          ? new Date(C).toLocaleDateString([], {
              month: 'short',
              day: 'numeric',
            })
          : '',
      S = C => {
        const _ = C.target.value,
          E = _ === '' ? 0 : parseInt(_, 10)
        !isNaN(E) && o && o(E)
      }
    return s.jsx('div', {
      ...(i.interactionMode === 'swipe' ? d : {}),
      className: h,
      children: s.jsxs('div', {
        className: 'flex flex-col gap-2 w-full',
        children: [
          s.jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              s.jsx(co, {
                type: 'number',
                placeholder: 'Door number',
                value: e.doorNumber || '',
                onChange: S,
                className:
                  'w-32 border-gray-200 focus:border-walmart-blue focus:ring-1 focus:ring-walmart-blue',
                min: 332,
                max: 454,
                'aria-label': 'Door number',
              }),
              s.jsxs('div', {
                className: 'flex items-center gap-1',
                children: [
                  s.jsx(ge, {
                    variant: 'outline',
                    size: 'icon',
                    onClick: t,
                    className: 'h-8 w-8 rounded-full bg-white hover:bg-red-50',
                    'aria-label': 'Decrement pallet count',
                    children: s.jsx(Ld, {
                      className: 'h-4 w-4 text-red-500',
                      'aria-hidden': 'true',
                    }),
                  }),
                  s.jsx('span', {
                    className: 'text-2xl font-bold w-12 text-center',
                    role: 'status',
                    'aria-label': 'Current pallet count',
                    children: e.count,
                  }),
                  s.jsx(ge, {
                    variant: 'outline',
                    size: 'icon',
                    onClick: r,
                    className:
                      'h-8 w-8 rounded-full bg-white hover:bg-green-50',
                    'aria-label': 'Increment pallet count',
                    children: s.jsx(Fd, {
                      className: 'h-4 w-4 text-green-600',
                      'aria-hidden': 'true',
                    }),
                  }),
                  s.jsx(ge, {
                    variant: (e.isActive, 'outline'),
                    size: 'icon',
                    onClick: a,
                    className: `h-8 w-8 rounded-full ml-2 ${e.isActive ? 'bg-red-50 hover:bg-red-100' : 'bg-green-50 hover:bg-green-100'}`,
                    'aria-label': e.isActive ? 'Stop timer' : 'Start timer',
                    'aria-pressed': e.isActive,
                    children: e.isActive
                      ? s.jsx(Qd, {
                          className: 'h-4 w-4 text-red-500',
                          'aria-hidden': 'true',
                        })
                      : s.jsx(Xd, {
                          className: 'h-4 w-4 text-green-600',
                          'aria-hidden': 'true',
                        }),
                  }),
                ],
              }),
            ],
          }),
          s.jsxs('div', {
            className: 'flex items-center justify-between mt-1',
            children: [
              s.jsx('div', {
                className: 'flex items-center',
                children: e.isActive
                  ? s.jsxs('span', {
                      className:
                        'text-xs font-medium text-green-600 animate-pulse',
                      role: 'timer',
                      'aria-live': 'polite',
                      children: ['● Active: ', v],
                    })
                  : e.startTime
                    ? s.jsx('span', {
                        className: 'text-xs text-gray-600',
                        role: 'timer',
                        'aria-live': 'polite',
                        children:
                          e.elapsedTime && e.elapsedTime > 0
                            ? `Duration: ${v}`
                            : '',
                      })
                    : null,
              }),
              s.jsxs('div', {
                className: 'flex items-center',
                children: [
                  e.timestamp &&
                    s.jsxs('div', {
                      className: 'flex flex-col items-end text-right',
                      children: [
                        s.jsx('p', {
                          className: 'text-xs text-gray-500',
                          children: w(e.timestamp),
                        }),
                        s.jsx('p', {
                          className: 'text-sm text-gray-600',
                          children: g(e.timestamp),
                        }),
                      ],
                    }),
                  s.jsx(ge, {
                    variant: 'ghost',
                    size: 'icon',
                    onClick: n,
                    className:
                      'text-red-500 hover:text-red-700 hover:bg-red-50 min-w-[44px] min-h-[44px] ml-1',
                    children: s.jsx(Ja, { className: 'h-4 w-4' }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  },
  ig = ({ palletEntries: e }) => {
    const [r, t] = u.useState(!1),
      n = () => {
        if (e.length === 0) {
          de.error('No pallet data to export')
          return
        }
        t(!0)
        try {
          const o = new Date().toISOString().split('T')[0],
            a = new Date()
              .toISOString()
              .split('T')[1]
              .split('.')[0]
              .replace(/:/g, '-'),
            l = `walmart_dc8980_pallets_${o}_${a}.csv`,
            i = [
              'ID',
              'Door Number',
              'Pallet Count',
              'Started At',
              'Ended At',
              'Duration (HH:MM:SS)',
              'Timestamp',
              'Date',
              'Time',
            ],
            c = e.map(d => {
              const x = new Date(d.timestamp),
                h = d.elapsedTime ? Hr(d.elapsedTime) : ''
              return [
                d.id,
                d.doorNumber || 0,
                d.count,
                d.startTime || '',
                d.endTime || '',
                h,
                d.timestamp,
                x.toLocaleDateString(),
                x.toLocaleTimeString(),
              ]
            }),
            f = [i.join(','), ...c.map(d => d.join(','))].join(`
`),
            m = new Blob([f], { type: 'text/csv;charset=utf-8;' }),
            p = URL.createObjectURL(m),
            v = document.createElement('a')
          ;((v.href = p),
            (v.download = l),
            document.body.appendChild(v),
            v.click(),
            setTimeout(() => {
              ;(document.body.removeChild(v), URL.revokeObjectURL(p), t(!1))
            }, 100),
            de.success('CSV export successful!', {
              description: `File saved as ${l}`,
            }))
        } catch (o) {
          ;(console.error('Export error:', o),
            de.error('Failed to export data', {
              description: 'Please try again or contact support',
            }),
            t(!1))
        }
      }
    return s.jsxs(ge, {
      onClick: n,
      disabled: r,
      className: `mt-4 bg-walmart-yellow text-black hover:bg-walmart-yellow/80 transition-all ${r ? 'animate-pulse' : ''}`,
      children: [
        s.jsx(qa, { className: 'mr-2 h-4 w-4' }),
        r ? 'Exporting...' : 'Export Pallet Data',
      ],
    })
  },
  lg = ({ onAddDoor: e }) => {
    const { settings: r } = Ge(),
      { browserSupportsSpeechRecognition: t } = Lr(),
      n = [
        {
          regex:
            /add counter|add pallet|counter|pallet|new pallet|new counter/i,
          commandName: 'add pallet',
        },
      ],
      {
        isListening: o,
        startListening: a,
        stopListening: l,
        transcript: i,
        interimTranscript: c,
        recentCommand: f,
        isProcessing: m,
        isFinal: p,
        getConfidenceColor: v,
      } = Is({
        commandPatterns: n,
        onCommandRecognized: e,
        speakBackText: 'Pallet counter added',
      })
    if (!r.voiceRecognitionEnabled) return null
    if (!t)
      return s.jsxs(ge, {
        variant: 'outline',
        size: 'sm',
        onClick: () => {
          de.info('Voice commands not available', {
            description:
              "Use the 'Add Counter' button instead. Voice commands work best in Chrome on desktop.",
            duration: 4e3,
          })
        },
        className: 'gap-2 border-gray-300 text-gray-500 hover:bg-gray-50',
        children: [
          s.jsx(Hn, { className: 'h-4 w-4' }),
          s.jsx(Hd, { className: 'h-3 w-3' }),
        ],
      })
    const d = ['Add counter', 'Add pallet', 'New counter', 'Counter', 'Pallet']
    return s.jsxs('div', {
      className: 'relative flex items-center gap-1',
      children: [
        s.jsx(Ds, {
          isListening: o,
          onToggle: o ? l : a,
          label: 'Voice Control',
          stopLabel: 'Stop Listening',
        }),
        s.jsx(Os, { commandType: 'pallet' }),
        s.jsx(As, {
          isListening: o,
          isProcessing: m,
          interimTranscript: c,
          transcript: i,
          isFinal: p,
          recentCommand: f,
          getConfidenceColor: v,
          helpText: 'Say "Add Pallet" or "Add Counter"',
        }),
        s.jsx($s, { isListening: o, commandList: d }),
      ],
    })
  },
  Ei = () => {
    const {
      palletEntries: e,
      addPalletEntry: r,
      updateCount: t,
      deletePalletEntry: n,
      updateDoorNumber: o,
      toggleTimer: a,
      formatElapsedTime: l,
    } = Zm()
    return s.jsxs(Je, {
      className:
        'container mx-auto shadow-lg border-t-4 border-t-walmart-yellow transition-all duration-200 hover:shadow-xl',
      children: [
        s.jsx(ht, {
          className: 'bg-gradient-to-r from-gray-50 to-white border-b',
          children: s.jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              s.jsx(Qe, {
                className: 'text-2xl font-bold text-walmart-blue',
                children: 'Pallet Counter',
              }),
              s.jsxs('div', {
                className: 'flex gap-2',
                children: [
                  s.jsxs(ge, {
                    onClick: r,
                    size: 'sm',
                    className:
                      'bg-walmart-yellow text-walmart-blue hover:bg-walmart-yellow/90 transition-all duration-300 transform hover:scale-105 min-h-[44px] font-semibold',
                    children: [
                      s.jsx(qt, { className: 'h-4 w-4 mr-2' }),
                      'Add Counter',
                    ],
                  }),
                  s.jsx(lg, { onAddDoor: r }),
                  s.jsx(ig, { palletEntries: e }),
                ],
              }),
            ],
          }),
        }),
        s.jsx(pt, {
          className: 'p-6',
          children: s.jsx('div', {
            className: 'space-y-4',
            children:
              e.length === 0
                ? s.jsxs('div', {
                    className:
                      'text-center py-16 px-4 rounded-lg bg-gray-50 border-2 border-dashed border-gray-200',
                    children: [
                      s.jsx('p', {
                        className: 'text-lg font-medium text-gray-600',
                        children: 'No pallet counters added yet',
                      }),
                      s.jsx('p', {
                        className: 'text-sm mt-1 text-gray-500',
                        children:
                          'Click "Add Counter" to get started with pallet counting.',
                      }),
                      s.jsxs(ge, {
                        onClick: r,
                        className:
                          'mt-4 bg-walmart-yellow text-walmart-blue hover:bg-walmart-yellow/90 min-h-[44px] font-semibold',
                        children: [
                          s.jsx(qt, { className: 'h-4 w-4 mr-2' }),
                          'Add Your First Counter',
                        ],
                      }),
                    ],
                  })
                : s.jsx('ul', {
                    className:
                      'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
                    role: 'list',
                    'data-testid': 'pallet-entry-list',
                    children: e.map(i =>
                      s.jsx(
                        'li',
                        {
                          children: s.jsx(
                            sg,
                            {
                              entry: i,
                              onIncrement: () => t(i.id, !0),
                              onDecrement: () => t(i.id, !1),
                              onDelete: () => n(i.id),
                              onDoorNumberChange: c => o(i.id, c),
                              onToggleTimer: () => a(i.id),
                              formatElapsedTime: l,
                            },
                            i.id
                          ),
                        },
                        i.id
                      )
                    ),
                  }),
          }),
        }),
      ],
    })
  },
  cg = () => {
    const { currentUser: e, updateUser: r } = sr(),
      [t, n] = u.useState(e.displayName),
      [o, a] = u.useState(!1)
    u.useEffect(() => {
      ;(n(e.displayName), a(!1))
    }, [e.displayName])
    const l = c => {
        ;(n(c.target.value), a(c.target.value !== e.displayName))
      },
      i = () => {
        if (t.trim() === '') {
          de.error('Display name cannot be empty', {
            description: 'Please enter a valid display name',
          })
          return
        }
        if (
          (r({ ...e, displayName: t.trim() }),
          de.success('Profile updated', {
            description: 'Your display name has been updated',
          }),
          a(!1),
          'indexedDB' in window)
        ) {
          const c = indexedDB.open('door-ship-flow-db', 1)
          ;((c.onupgradeneeded = f => {
            const m = f.target.result
            m.objectStoreNames.contains('userProfile') ||
              m.createObjectStore('userProfile', { keyPath: 'id' })
          }),
            (c.onsuccess = f => {
              f.target.result
                .transaction(['userProfile'], 'readwrite')
                .objectStore('userProfile')
                .put({ ...e, id: 'currentUser', displayName: t.trim() })
            }))
        }
      }
    return s.jsxs(Je, {
      className: 'container mx-auto mb-8 border-walmart-blue',
      children: [
        s.jsx(ht, {
          className: 'border-b bg-walmart-blue bg-opacity-5',
          children: s.jsxs(Qe, {
            className: 'flex items-center text-walmart-blue',
            children: [
              s.jsx(ru, { className: 'mr-2 h-5 w-5' }),
              s.jsx('span', { children: 'Profile' }),
            ],
          }),
        }),
        s.jsx(pt, {
          className: 'p-4 space-y-4',
          children: s.jsxs('div', {
            className: 'space-y-2',
            children: [
              s.jsx(Te, {
                htmlFor: 'display-name',
                className: 'text-base',
                children: 'Display Name',
              }),
              s.jsxs('div', {
                className: 'flex items-center gap-2',
                children: [
                  s.jsx(co, {
                    id: 'display-name',
                    value: t,
                    onChange: l,
                    placeholder: 'Enter your display name',
                    className: 'flex-1 min-h-[44px]',
                    'aria-label': 'Your display name',
                  }),
                  s.jsx(ge, {
                    onClick: i,
                    className:
                      'bg-walmart-blue hover:bg-walmart-blue-dark min-h-[44px]',
                    disabled: !o,
                    'aria-label': 'Save display name',
                    children: 'Save',
                  }),
                ],
              }),
              s.jsx('p', {
                className: 'text-sm text-muted-foreground',
                children:
                  'This name will be displayed in the header and on exports',
              }),
            ],
          }),
        }),
      ],
    })
  }
var pn = 'rovingFocusGroup.onEntryFocus',
  dg = { bubbles: !1, cancelable: !0 },
  ir = 'RovingFocusGroup',
  [Rn, ji, ug] = Ir(ir),
  [fg, Gr] = tt(ir, [ug]),
  [hg, pg] = fg(ir),
  Ti = u.forwardRef((e, r) =>
    s.jsx(Rn.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: s.jsx(Rn.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: s.jsx(mg, { ...e, ref: r }),
      }),
    })
  )
Ti.displayName = ir
var mg = u.forwardRef((e, r) => {
    const {
        __scopeRovingFocusGroup: t,
        orientation: n,
        loop: o = !1,
        dir: a,
        currentTabStopId: l,
        defaultCurrentTabStopId: i,
        onCurrentTabStopIdChange: c,
        onEntryFocus: f,
        preventScrollOnEntryFocus: m = !1,
        ...p
      } = e,
      v = u.useRef(null),
      d = je(r, v),
      x = Dr(a),
      [h, g] = xt({ prop: l, defaultProp: i ?? null, onChange: c, caller: ir }),
      [w, S] = u.useState(!1),
      C = bt(f),
      _ = ji(t),
      E = u.useRef(!1),
      [D, T] = u.useState(0)
    return (
      u.useEffect(() => {
        const I = v.current
        if (I)
          return (I.addEventListener(pn, C), () => I.removeEventListener(pn, C))
      }, [C]),
      s.jsx(hg, {
        scope: t,
        orientation: n,
        dir: x,
        loop: o,
        currentTabStopId: h,
        onItemFocus: u.useCallback(I => g(I), [g]),
        onItemShiftTab: u.useCallback(() => S(!0), []),
        onFocusableItemAdd: u.useCallback(() => T(I => I + 1), []),
        onFocusableItemRemove: u.useCallback(() => T(I => I - 1), []),
        children: s.jsx(Ce.div, {
          tabIndex: w || D === 0 ? -1 : 0,
          'data-orientation': n,
          ...p,
          ref: d,
          style: { outline: 'none', ...e.style },
          onMouseDown: ie(e.onMouseDown, () => {
            E.current = !0
          }),
          onFocus: ie(e.onFocus, I => {
            const R = !E.current
            if (I.target === I.currentTarget && R && !w) {
              const L = new CustomEvent(pn, dg)
              if ((I.currentTarget.dispatchEvent(L), !L.defaultPrevented)) {
                const V = _().filter(K => K.focusable),
                  k = V.find(K => K.active),
                  P = V.find(K => K.id === h),
                  M = [k, P, ...V].filter(Boolean).map(K => K.ref.current)
                Ii(M, m)
              }
            }
            E.current = !1
          }),
          onBlur: ie(e.onBlur, () => S(!1)),
        }),
      })
    )
  }),
  Ri = 'RovingFocusGroupItem',
  Pi = u.forwardRef((e, r) => {
    const {
        __scopeRovingFocusGroup: t,
        focusable: n = !0,
        active: o = !1,
        tabStopId: a,
        children: l,
        ...i
      } = e,
      c = gn(),
      f = a || c,
      m = pg(Ri, t),
      p = m.currentTabStopId === f,
      v = ji(t),
      {
        onFocusableItemAdd: d,
        onFocusableItemRemove: x,
        currentTabStopId: h,
      } = m
    return (
      u.useEffect(() => {
        if (n) return (d(), () => x())
      }, [n, d, x]),
      s.jsx(Rn.ItemSlot, {
        scope: t,
        id: f,
        focusable: n,
        active: o,
        children: s.jsx(Ce.span, {
          tabIndex: p ? 0 : -1,
          'data-orientation': m.orientation,
          ...i,
          ref: r,
          onMouseDown: ie(e.onMouseDown, g => {
            n ? m.onItemFocus(f) : g.preventDefault()
          }),
          onFocus: ie(e.onFocus, () => m.onItemFocus(f)),
          onKeyDown: ie(e.onKeyDown, g => {
            if (g.key === 'Tab' && g.shiftKey) {
              m.onItemShiftTab()
              return
            }
            if (g.target !== g.currentTarget) return
            const w = bg(g, m.orientation, m.dir)
            if (w !== void 0) {
              if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return
              g.preventDefault()
              let C = v()
                .filter(_ => _.focusable)
                .map(_ => _.ref.current)
              if (w === 'last') C.reverse()
              else if (w === 'prev' || w === 'next') {
                w === 'prev' && C.reverse()
                const _ = C.indexOf(g.currentTarget)
                C = m.loop ? xg(C, _ + 1) : C.slice(_ + 1)
              }
              setTimeout(() => Ii(C))
            }
          }),
          children:
            typeof l == 'function'
              ? l({ isCurrentTabStop: p, hasTabStop: h != null })
              : l,
        }),
      })
    )
  })
Pi.displayName = Ri
var gg = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
}
function vg(e, r) {
  return r !== 'rtl'
    ? e
    : e === 'ArrowLeft'
      ? 'ArrowRight'
      : e === 'ArrowRight'
        ? 'ArrowLeft'
        : e
}
function bg(e, r, t) {
  const n = vg(e.key, t)
  if (
    !(r === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(n)) &&
    !(r === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(n))
  )
    return gg[n]
}
function Ii(e, r = !1) {
  const t = document.activeElement
  for (const n of e)
    if (
      n === t ||
      (n.focus({ preventScroll: r }), document.activeElement !== t)
    )
      return
}
function xg(e, r) {
  return e.map((t, n) => e[(r + n) % e.length])
}
var Di = Ti,
  Ai = Pi,
  uo = 'Radio',
  [wg, $i] = tt(uo),
  [yg, Sg] = wg(uo),
  Mi = u.forwardRef((e, r) => {
    const {
        __scopeRadio: t,
        name: n,
        checked: o = !1,
        required: a,
        disabled: l,
        value: i = 'on',
        onCheck: c,
        form: f,
        ...m
      } = e,
      [p, v] = u.useState(null),
      d = je(r, g => v(g)),
      x = u.useRef(!1),
      h = p ? f || !!p.closest('form') : !0
    return s.jsxs(yg, {
      scope: t,
      checked: o,
      disabled: l,
      children: [
        s.jsx(Ce.button, {
          type: 'button',
          role: 'radio',
          'aria-checked': o,
          'data-state': zi(o),
          'data-disabled': l ? '' : void 0,
          disabled: l,
          value: i,
          ...m,
          ref: d,
          onClick: ie(e.onClick, g => {
            ;(o || c == null || c(),
              h &&
                ((x.current = g.isPropagationStopped()),
                x.current || g.stopPropagation()))
          }),
        }),
        h &&
          s.jsx(Fi, {
            control: p,
            bubbles: !x.current,
            name: n,
            value: i,
            checked: o,
            required: a,
            disabled: l,
            form: f,
            style: { transform: 'translateX(-100%)' },
          }),
      ],
    })
  })
Mi.displayName = uo
var Oi = 'RadioIndicator',
  Li = u.forwardRef((e, r) => {
    const { __scopeRadio: t, forceMount: n, ...o } = e,
      a = Sg(Oi, t)
    return s.jsx(wt, {
      present: n || a.checked,
      children: s.jsx(Ce.span, {
        'data-state': zi(a.checked),
        'data-disabled': a.disabled ? '' : void 0,
        ...o,
        ref: r,
      }),
    })
  })
Li.displayName = Oi
var Cg = 'RadioBubbleInput',
  Fi = u.forwardRef(
    ({ __scopeRadio: e, control: r, checked: t, bubbles: n = !0, ...o }, a) => {
      const l = u.useRef(null),
        i = je(l, a),
        c = Ln(t),
        f = On(r)
      return (
        u.useEffect(() => {
          const m = l.current
          if (!m) return
          const p = window.HTMLInputElement.prototype,
            d = Object.getOwnPropertyDescriptor(p, 'checked').set
          if (c !== t && d) {
            const x = new Event('click', { bubbles: n })
            ;(d.call(m, t), m.dispatchEvent(x))
          }
        }, [c, t, n]),
        s.jsx(Ce.input, {
          type: 'radio',
          'aria-hidden': !0,
          defaultChecked: t,
          ...o,
          tabIndex: -1,
          ref: i,
          style: {
            ...o.style,
            ...f,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0,
          },
        })
      )
    }
  )
Fi.displayName = Cg
function zi(e) {
  return e ? 'checked' : 'unchecked'
}
var _g = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
  Zr = 'RadioGroup',
  [kg, Kv] = tt(Zr, [Gr, $i]),
  Bi = Gr(),
  Ui = $i(),
  [Ng, Eg] = kg(Zr),
  Vi = u.forwardRef((e, r) => {
    const {
        __scopeRadioGroup: t,
        name: n,
        defaultValue: o,
        value: a,
        required: l = !1,
        disabled: i = !1,
        orientation: c,
        dir: f,
        loop: m = !0,
        onValueChange: p,
        ...v
      } = e,
      d = Bi(t),
      x = Dr(f),
      [h, g] = xt({ prop: a, defaultProp: o ?? null, onChange: p, caller: Zr })
    return s.jsx(Ng, {
      scope: t,
      name: n,
      required: l,
      disabled: i,
      value: h,
      onValueChange: g,
      children: s.jsx(Di, {
        asChild: !0,
        ...d,
        orientation: c,
        dir: x,
        loop: m,
        children: s.jsx(Ce.div, {
          role: 'radiogroup',
          'aria-required': l,
          'aria-orientation': c,
          'data-disabled': i ? '' : void 0,
          dir: x,
          ...v,
          ref: r,
        }),
      }),
    })
  })
Vi.displayName = Zr
var Hi = 'RadioGroupItem',
  Wi = u.forwardRef((e, r) => {
    const { __scopeRadioGroup: t, disabled: n, ...o } = e,
      a = Eg(Hi, t),
      l = a.disabled || n,
      i = Bi(t),
      c = Ui(t),
      f = u.useRef(null),
      m = je(r, f),
      p = a.value === o.value,
      v = u.useRef(!1)
    return (
      u.useEffect(() => {
        const d = h => {
            _g.includes(h.key) && (v.current = !0)
          },
          x = () => (v.current = !1)
        return (
          document.addEventListener('keydown', d),
          document.addEventListener('keyup', x),
          () => {
            ;(document.removeEventListener('keydown', d),
              document.removeEventListener('keyup', x))
          }
        )
      }, []),
      s.jsx(Ai, {
        asChild: !0,
        ...i,
        focusable: !l,
        active: p,
        children: s.jsx(Mi, {
          disabled: l,
          required: a.required,
          checked: p,
          ...c,
          ...o,
          name: a.name,
          ref: m,
          onCheck: () => a.onValueChange(o.value),
          onKeyDown: ie(d => {
            d.key === 'Enter' && d.preventDefault()
          }),
          onFocus: ie(o.onFocus, () => {
            var d
            v.current && ((d = f.current) == null || d.click())
          }),
        }),
      })
    )
  })
Wi.displayName = Hi
var jg = 'RadioGroupIndicator',
  Ki = u.forwardRef((e, r) => {
    const { __scopeRadioGroup: t, ...n } = e,
      o = Ui(t)
    return s.jsx(Li, { ...o, ...n, ref: r })
  })
Ki.displayName = jg
var Gi = Vi,
  Zi = Wi,
  Tg = Ki
const Yi = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(Gi, { className: le('grid gap-2', e), ...r, ref: t })
)
Yi.displayName = Gi.displayName
const Pn = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(Zi, {
    ref: t,
    className: le(
      'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      e
    ),
    ...r,
    children: s.jsx(Tg, {
      className: 'flex items-center justify-center',
      children: s.jsx(Xa, {
        className: 'h-2.5 w-2.5 fill-current text-current',
      }),
    }),
  })
)
Pn.displayName = Zi.displayName
var Yr = 'Switch',
  [Rg, Gv] = tt(Yr),
  [Pg, Ig] = Rg(Yr),
  Xi = u.forwardRef((e, r) => {
    const {
        __scopeSwitch: t,
        name: n,
        checked: o,
        defaultChecked: a,
        required: l,
        disabled: i,
        value: c = 'on',
        onCheckedChange: f,
        form: m,
        ...p
      } = e,
      [v, d] = u.useState(null),
      x = je(r, C => d(C)),
      h = u.useRef(!1),
      g = v ? m || !!v.closest('form') : !0,
      [w, S] = xt({ prop: o, defaultProp: a ?? !1, onChange: f, caller: Yr })
    return s.jsxs(Pg, {
      scope: t,
      checked: w,
      disabled: i,
      children: [
        s.jsx(Ce.button, {
          type: 'button',
          role: 'switch',
          'aria-checked': w,
          'aria-required': l,
          'data-state': el(w),
          'data-disabled': i ? '' : void 0,
          disabled: i,
          value: c,
          ...p,
          ref: x,
          onClick: ie(e.onClick, C => {
            ;(S(_ => !_),
              g &&
                ((h.current = C.isPropagationStopped()),
                h.current || C.stopPropagation()))
          }),
        }),
        g &&
          s.jsx(Qi, {
            control: v,
            bubbles: !h.current,
            name: n,
            value: c,
            checked: w,
            required: l,
            disabled: i,
            form: m,
            style: { transform: 'translateX(-100%)' },
          }),
      ],
    })
  })
Xi.displayName = Yr
var qi = 'SwitchThumb',
  Ji = u.forwardRef((e, r) => {
    const { __scopeSwitch: t, ...n } = e,
      o = Ig(qi, t)
    return s.jsx(Ce.span, {
      'data-state': el(o.checked),
      'data-disabled': o.disabled ? '' : void 0,
      ...n,
      ref: r,
    })
  })
Ji.displayName = qi
var Dg = 'SwitchBubbleInput',
  Qi = u.forwardRef(
    (
      { __scopeSwitch: e, control: r, checked: t, bubbles: n = !0, ...o },
      a
    ) => {
      const l = u.useRef(null),
        i = je(l, a),
        c = Ln(t),
        f = On(r)
      return (
        u.useEffect(() => {
          const m = l.current
          if (!m) return
          const p = window.HTMLInputElement.prototype,
            d = Object.getOwnPropertyDescriptor(p, 'checked').set
          if (c !== t && d) {
            const x = new Event('click', { bubbles: n })
            ;(d.call(m, t), m.dispatchEvent(x))
          }
        }, [c, t, n]),
        s.jsx('input', {
          type: 'checkbox',
          'aria-hidden': !0,
          defaultChecked: t,
          ...o,
          tabIndex: -1,
          ref: i,
          style: {
            ...o.style,
            ...f,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0,
          },
        })
      )
    }
  )
Qi.displayName = Dg
function el(e) {
  return e ? 'checked' : 'unchecked'
}
var tl = Xi,
  Ag = Ji
const dt = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(tl, {
    className: le(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      e
    ),
    ...r,
    ref: t,
    children: s.jsx(Ag, {
      className: le(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      ),
    }),
  })
)
dt.displayName = tl.displayName
const $g = () => {
  const { settings: e, updateSetting: r } = Ge(),
    t = o => {
      r('interactionMode', o)
    },
    n = o => {
      r('enableActionButton', o)
    }
  return s.jsxs(Je, {
    className: 'mb-6',
    children: [
      s.jsx(ht, {
        className: 'pb-3',
        children: s.jsx(Qe, {
          className: 'text-lg font-medium',
          children: 'Interaction Settings',
        }),
      }),
      s.jsxs(pt, {
        className: 'space-y-4',
        children: [
          s.jsxs('div', {
            className: 'space-y-2',
            children: [
              s.jsx(Te, {
                htmlFor: 'interaction-mode',
                className: 'text-sm font-medium',
                children: 'Interaction Mode',
              }),
              s.jsxs(Yi, {
                id: 'interaction-mode',
                value: e.interactionMode,
                onValueChange: t,
                className: 'flex flex-col space-y-1',
                children: [
                  s.jsxs('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                      s.jsx(Pn, { value: 'tap', id: 'tap' }),
                      s.jsx(Te, {
                        htmlFor: 'tap',
                        className: 'font-normal',
                        children: 'Tap (Standard button interactions)',
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                      s.jsx(Pn, { value: 'swipe', id: 'swipe' }),
                      s.jsx(Te, {
                        htmlFor: 'swipe',
                        className: 'font-normal',
                        children:
                          'Swipe (Swipe left/right to decrease/increase)',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              s.jsxs('div', {
                className: 'space-y-0.5',
                children: [
                  s.jsx(Te, {
                    htmlFor: 'action-button',
                    className: 'text-sm font-medium',
                    children: 'Enable Action Button',
                  }),
                  s.jsx('p', {
                    className: 'text-xs text-muted-foreground',
                    children: 'Show floating action button for quick access',
                  }),
                ],
              }),
              s.jsx(dt, {
                id: 'action-button',
                checked: e.enableActionButton,
                onCheckedChange: n,
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function rl(e, [r, t]) {
  return Math.min(t, Math.max(r, e))
}
var nl = ['PageUp', 'PageDown'],
  ol = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
  al = {
    'from-left': ['Home', 'PageDown', 'ArrowDown', 'ArrowLeft'],
    'from-right': ['Home', 'PageDown', 'ArrowDown', 'ArrowRight'],
    'from-bottom': ['Home', 'PageDown', 'ArrowDown', 'ArrowLeft'],
    'from-top': ['Home', 'PageDown', 'ArrowUp', 'ArrowLeft'],
  },
  Vt = 'Slider',
  [In, Mg, Og] = Ir(Vt),
  [sl, Zv] = tt(Vt, [Og]),
  [Lg, Xr] = sl(Vt),
  il = u.forwardRef((e, r) => {
    const {
        name: t,
        min: n = 0,
        max: o = 100,
        step: a = 1,
        orientation: l = 'horizontal',
        disabled: i = !1,
        minStepsBetweenThumbs: c = 0,
        defaultValue: f = [n],
        value: m,
        onValueChange: p = () => {},
        onValueCommit: v = () => {},
        inverted: d = !1,
        form: x,
        ...h
      } = e,
      g = u.useRef(new Set()),
      w = u.useRef(0),
      C = l === 'horizontal' ? Fg : zg,
      [_ = [], E] = xt({
        prop: m,
        defaultProp: f,
        onChange: V => {
          var P
          ;((P = [...g.current][w.current]) == null || P.focus(), p(V))
        },
      }),
      D = u.useRef(_)
    function T(V) {
      const k = Wg(_, V)
      L(V, k)
    }
    function I(V) {
      L(V, w.current)
    }
    function R() {
      const V = D.current[w.current]
      _[w.current] !== V && v(_)
    }
    function L(V, k, { commit: P } = { commit: !1 }) {
      const b = Yg(a),
        M = Xg(Math.round((V - n) / a) * a + n, b),
        K = rl(M, [n, o])
      E((U = []) => {
        const re = Vg(U, K, k)
        if (Zg(re, c * a)) {
          w.current = re.indexOf(K)
          const $ = String(re) !== String(U)
          return ($ && P && v(re), $ ? re : U)
        } else return U
      })
    }
    return s.jsx(Lg, {
      scope: e.__scopeSlider,
      name: t,
      disabled: i,
      min: n,
      max: o,
      valueIndexToChangeRef: w,
      thumbs: g.current,
      values: _,
      orientation: l,
      form: x,
      children: s.jsx(In.Provider, {
        scope: e.__scopeSlider,
        children: s.jsx(In.Slot, {
          scope: e.__scopeSlider,
          children: s.jsx(C, {
            'aria-disabled': i,
            'data-disabled': i ? '' : void 0,
            ...h,
            ref: r,
            onPointerDown: ie(h.onPointerDown, () => {
              i || (D.current = _)
            }),
            min: n,
            max: o,
            inverted: d,
            onSlideStart: i ? void 0 : T,
            onSlideMove: i ? void 0 : I,
            onSlideEnd: i ? void 0 : R,
            onHomeKeyDown: () => !i && L(n, 0, { commit: !0 }),
            onEndKeyDown: () => !i && L(o, _.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: V, direction: k }) => {
              if (!i) {
                const M =
                    nl.includes(V.key) || (V.shiftKey && ol.includes(V.key))
                      ? 10
                      : 1,
                  K = w.current,
                  U = _[K],
                  re = a * M * k
                L(U + re, K, { commit: !0 })
              }
            },
          }),
        }),
      }),
    })
  })
il.displayName = Vt
var [ll, cl] = sl(Vt, {
    startEdge: 'left',
    endEdge: 'right',
    size: 'width',
    direction: 1,
  }),
  Fg = u.forwardRef((e, r) => {
    const {
        min: t,
        max: n,
        dir: o,
        inverted: a,
        onSlideStart: l,
        onSlideMove: i,
        onSlideEnd: c,
        onStepKeyDown: f,
        ...m
      } = e,
      [p, v] = u.useState(null),
      d = je(r, C => v(C)),
      x = u.useRef(void 0),
      h = Dr(o),
      g = h === 'ltr',
      w = (g && !a) || (!g && a)
    function S(C) {
      const _ = x.current || p.getBoundingClientRect(),
        E = [0, _.width],
        T = fo(E, w ? [t, n] : [n, t])
      return ((x.current = _), T(C - _.left))
    }
    return s.jsx(ll, {
      scope: e.__scopeSlider,
      startEdge: w ? 'left' : 'right',
      endEdge: w ? 'right' : 'left',
      direction: w ? 1 : -1,
      size: 'width',
      children: s.jsx(dl, {
        dir: h,
        'data-orientation': 'horizontal',
        ...m,
        ref: d,
        style: {
          ...m.style,
          '--radix-slider-thumb-transform': 'translateX(-50%)',
        },
        onSlideStart: C => {
          const _ = S(C.clientX)
          l == null || l(_)
        },
        onSlideMove: C => {
          const _ = S(C.clientX)
          i == null || i(_)
        },
        onSlideEnd: () => {
          ;((x.current = void 0), c == null || c())
        },
        onStepKeyDown: C => {
          const E = al[w ? 'from-left' : 'from-right'].includes(C.key)
          f == null || f({ event: C, direction: E ? -1 : 1 })
        },
      }),
    })
  }),
  zg = u.forwardRef((e, r) => {
    const {
        min: t,
        max: n,
        inverted: o,
        onSlideStart: a,
        onSlideMove: l,
        onSlideEnd: i,
        onStepKeyDown: c,
        ...f
      } = e,
      m = u.useRef(null),
      p = je(r, m),
      v = u.useRef(void 0),
      d = !o
    function x(h) {
      const g = v.current || m.current.getBoundingClientRect(),
        w = [0, g.height],
        C = fo(w, d ? [n, t] : [t, n])
      return ((v.current = g), C(h - g.top))
    }
    return s.jsx(ll, {
      scope: e.__scopeSlider,
      startEdge: d ? 'bottom' : 'top',
      endEdge: d ? 'top' : 'bottom',
      size: 'height',
      direction: d ? 1 : -1,
      children: s.jsx(dl, {
        'data-orientation': 'vertical',
        ...f,
        ref: p,
        style: {
          ...f.style,
          '--radix-slider-thumb-transform': 'translateY(50%)',
        },
        onSlideStart: h => {
          const g = x(h.clientY)
          a == null || a(g)
        },
        onSlideMove: h => {
          const g = x(h.clientY)
          l == null || l(g)
        },
        onSlideEnd: () => {
          ;((v.current = void 0), i == null || i())
        },
        onStepKeyDown: h => {
          const w = al[d ? 'from-bottom' : 'from-top'].includes(h.key)
          c == null || c({ event: h, direction: w ? -1 : 1 })
        },
      }),
    })
  }),
  dl = u.forwardRef((e, r) => {
    const {
        __scopeSlider: t,
        onSlideStart: n,
        onSlideMove: o,
        onSlideEnd: a,
        onHomeKeyDown: l,
        onEndKeyDown: i,
        onStepKeyDown: c,
        ...f
      } = e,
      m = Xr(Vt, t)
    return s.jsx(Ce.span, {
      ...f,
      ref: r,
      onKeyDown: ie(e.onKeyDown, p => {
        p.key === 'Home'
          ? (l(p), p.preventDefault())
          : p.key === 'End'
            ? (i(p), p.preventDefault())
            : nl.concat(ol).includes(p.key) && (c(p), p.preventDefault())
      }),
      onPointerDown: ie(e.onPointerDown, p => {
        const v = p.target
        ;(v.setPointerCapture(p.pointerId),
          p.preventDefault(),
          m.thumbs.has(v) ? v.focus() : n(p))
      }),
      onPointerMove: ie(e.onPointerMove, p => {
        p.target.hasPointerCapture(p.pointerId) && o(p)
      }),
      onPointerUp: ie(e.onPointerUp, p => {
        const v = p.target
        v.hasPointerCapture(p.pointerId) &&
          (v.releasePointerCapture(p.pointerId), a(p))
      }),
    })
  }),
  ul = 'SliderTrack',
  fl = u.forwardRef((e, r) => {
    const { __scopeSlider: t, ...n } = e,
      o = Xr(ul, t)
    return s.jsx(Ce.span, {
      'data-disabled': o.disabled ? '' : void 0,
      'data-orientation': o.orientation,
      ...n,
      ref: r,
    })
  })
fl.displayName = ul
var Dn = 'SliderRange',
  hl = u.forwardRef((e, r) => {
    const { __scopeSlider: t, ...n } = e,
      o = Xr(Dn, t),
      a = cl(Dn, t),
      l = u.useRef(null),
      i = je(r, l),
      c = o.values.length,
      f = o.values.map(v => gl(v, o.min, o.max)),
      m = c > 1 ? Math.min(...f) : 0,
      p = 100 - Math.max(...f)
    return s.jsx(Ce.span, {
      'data-orientation': o.orientation,
      'data-disabled': o.disabled ? '' : void 0,
      ...n,
      ref: i,
      style: { ...e.style, [a.startEdge]: m + '%', [a.endEdge]: p + '%' },
    })
  })
hl.displayName = Dn
var An = 'SliderThumb',
  pl = u.forwardRef((e, r) => {
    const t = Mg(e.__scopeSlider),
      [n, o] = u.useState(null),
      a = je(r, i => o(i)),
      l = u.useMemo(
        () => (n ? t().findIndex(i => i.ref.current === n) : -1),
        [t, n]
      )
    return s.jsx(Bg, { ...e, ref: a, index: l })
  }),
  Bg = u.forwardRef((e, r) => {
    const { __scopeSlider: t, index: n, name: o, ...a } = e,
      l = Xr(An, t),
      i = cl(An, t),
      [c, f] = u.useState(null),
      m = je(r, S => f(S)),
      p = c ? l.form || !!c.closest('form') : !0,
      v = On(c),
      d = l.values[n],
      x = d === void 0 ? 0 : gl(d, l.min, l.max),
      h = Hg(n, l.values.length),
      g = v == null ? void 0 : v[i.size],
      w = g ? Kg(g, x, i.direction) : 0
    return (
      u.useEffect(() => {
        if (c)
          return (
            l.thumbs.add(c),
            () => {
              l.thumbs.delete(c)
            }
          )
      }, [c, l.thumbs]),
      s.jsxs('span', {
        style: {
          transform: 'var(--radix-slider-thumb-transform)',
          position: 'absolute',
          [i.startEdge]: `calc(${x}% + ${w}px)`,
        },
        children: [
          s.jsx(In.ItemSlot, {
            scope: e.__scopeSlider,
            children: s.jsx(Ce.span, {
              role: 'slider',
              'aria-label': e['aria-label'] || h,
              'aria-valuemin': l.min,
              'aria-valuenow': d,
              'aria-valuemax': l.max,
              'aria-orientation': l.orientation,
              'data-orientation': l.orientation,
              'data-disabled': l.disabled ? '' : void 0,
              tabIndex: l.disabled ? void 0 : 0,
              ...a,
              ref: m,
              style: d === void 0 ? { display: 'none' } : e.style,
              onFocus: ie(e.onFocus, () => {
                l.valueIndexToChangeRef.current = n
              }),
            }),
          }),
          p &&
            s.jsx(
              ml,
              {
                name:
                  o ??
                  (l.name
                    ? l.name + (l.values.length > 1 ? '[]' : '')
                    : void 0),
                form: l.form,
                value: d,
              },
              n
            ),
        ],
      })
    )
  })
pl.displayName = An
var Ug = 'RadioBubbleInput',
  ml = u.forwardRef(({ __scopeSlider: e, value: r, ...t }, n) => {
    const o = u.useRef(null),
      a = je(o, n),
      l = Ln(r)
    return (
      u.useEffect(() => {
        const i = o.current
        if (!i) return
        const c = window.HTMLInputElement.prototype,
          m = Object.getOwnPropertyDescriptor(c, 'value').set
        if (l !== r && m) {
          const p = new Event('input', { bubbles: !0 })
          ;(m.call(i, r), i.dispatchEvent(p))
        }
      }, [l, r]),
      s.jsx(Ce.input, {
        style: { display: 'none' },
        ...t,
        ref: a,
        defaultValue: r,
      })
    )
  })
ml.displayName = Ug
function Vg(e = [], r, t) {
  const n = [...e]
  return ((n[t] = r), n.sort((o, a) => o - a))
}
function gl(e, r, t) {
  const a = (100 / (t - r)) * (e - r)
  return rl(a, [0, 100])
}
function Hg(e, r) {
  return r > 2
    ? `Value ${e + 1} of ${r}`
    : r === 2
      ? ['Minimum', 'Maximum'][e]
      : void 0
}
function Wg(e, r) {
  if (e.length === 1) return 0
  const t = e.map(o => Math.abs(o - r)),
    n = Math.min(...t)
  return t.indexOf(n)
}
function Kg(e, r, t) {
  const n = e / 2,
    a = fo([0, 50], [0, n])
  return (n - a(r) * t) * t
}
function Gg(e) {
  return e.slice(0, -1).map((r, t) => e[t + 1] - r)
}
function Zg(e, r) {
  if (r > 0) {
    const t = Gg(e)
    return Math.min(...t) >= r
  }
  return !0
}
function fo(e, r) {
  return t => {
    if (e[0] === e[1] || r[0] === r[1]) return r[0]
    const n = (r[1] - r[0]) / (e[1] - e[0])
    return r[0] + n * (t - e[0])
  }
}
function Yg(e) {
  return (String(e).split('.')[1] || '').length
}
function Xg(e, r) {
  const t = Math.pow(10, r)
  return Math.round(e * t) / t
}
var vl = il,
  qg = fl,
  Jg = hl,
  Qg = pl
const $n = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsxs(vl, {
    ref: t,
    className: le(
      'relative flex w-full touch-none select-none items-center',
      e
    ),
    ...r,
    children: [
      s.jsx(qg, {
        className:
          'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary',
        children: s.jsx(Jg, { className: 'absolute h-full bg-primary' }),
      }),
      s.jsx(Qg, {
        className:
          'block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      }),
    ],
  })
)
$n.displayName = vl.displayName
const e0 = () => {
    const { settings: e, updateSetting: r } = Ge()
    Lr({})
    const [t, n] = u.useState(!1),
      o = (a, l) => {
        ;(r(a, l),
          de.success(`${String(a)} preference saved!`, {
            description:
              'Your setting will be remembered next time you use the app',
            duration: 2e3,
          }))
      }
    return s.jsxs('div', {
      className: 'pt-4 border-t mt-4',
      children: [
        s.jsxs('div', {
          className: 'flex items-center mb-2',
          children: [
            s.jsx(Lt, { className: 'mr-2 h-4 w-4 text-walmart-blue' }),
            s.jsx(Te, { className: 'text-base', children: 'Voice Commands' }),
          ],
        }),
        s.jsxs('div', {
          className: 'flex items-center space-x-2 mt-4',
          children: [
            s.jsx(dt, {
              id: 'voice-enabled',
              checked: e.voiceRecognitionEnabled !== !1,
              onCheckedChange: a => o('voiceRecognitionEnabled', a),
            }),
            s.jsx(Te, {
              htmlFor: 'voice-enabled',
              children: 'Enable Voice Commands',
            }),
          ],
        }),
        e.voiceRecognitionEnabled !== !1 &&
          s.jsxs('div', {
            className: 'mt-4 pl-6 space-y-4',
            children: [
              s.jsxs('div', {
                children: [
                  s.jsx(Te, {
                    htmlFor: 'voice-activation-mode',
                    className: 'text-sm block mb-2',
                    children: 'Activation Mode',
                  }),
                  s.jsxs(At, {
                    value: e.voiceActivationMode || 'button',
                    onValueChange: a => o('voiceActivationMode', a),
                    children: [
                      s.jsx(gt, {
                        id: 'voice-activation-mode',
                        className: 'w-[200px]',
                        children: s.jsx($t, { placeholder: 'Select mode' }),
                      }),
                      s.jsxs(vt, {
                        children: [
                          s.jsx(Ke, {
                            value: 'button',
                            children: 'Button Press (Default)',
                          }),
                          s.jsx(Ke, {
                            value: 'continuous',
                            children: 'Continuous',
                          }),
                          s.jsx(Ke, {
                            value: 'hotword',
                            children: 'Hotword ("Add Door")',
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx('p', {
                    className: 'text-xs text-muted-foreground mt-1',
                    children:
                      e.voiceActivationMode === 'hotword'
                        ? 'Say "Add Door" to activate voice recognition'
                        : e.voiceActivationMode === 'continuous'
                          ? 'Voice recognition stays active'
                          : 'Press button to activate voice recognition',
                  }),
                ],
              }),
              s.jsxs('div', {
                children: [
                  s.jsx(Te, {
                    htmlFor: 'voice-engine',
                    className: 'text-sm block mb-2',
                    children: 'Voice Recognition Engine',
                  }),
                  s.jsxs(At, {
                    value: e.voiceEngine || 'browser',
                    onValueChange: a => o('voiceEngine', a),
                    children: [
                      s.jsx(gt, {
                        id: 'voice-engine',
                        className: 'w-[200px]',
                        children: s.jsx($t, { placeholder: 'Select engine' }),
                      }),
                      s.jsx(vt, {
                        children: s.jsx(Ke, {
                          value: 'browser',
                          children: 'Browser (Default)',
                        }),
                      }),
                    ],
                  }),
                  s.jsx('p', {
                    className: 'text-xs text-muted-foreground mt-1',
                    children:
                      'Browser-based speech recognition works online and provides good accuracy.',
                  }),
                ],
              }),
              s.jsxs('div', {
                className: 'flex items-center space-x-2',
                children: [
                  s.jsx(dt, {
                    id: 'noise-suppression',
                    checked: e.noiseSuppression !== !1,
                    onCheckedChange: a => o('noiseSuppression', a),
                  }),
                  s.jsx(Te, {
                    htmlFor: 'noise-suppression',
                    className: 'text-sm',
                    children: 'Noise Suppression',
                  }),
                ],
              }),
              s.jsxs('div', {
                className: 'flex items-center space-x-2',
                children: [
                  s.jsx(dt, {
                    id: 'auto-stop',
                    checked: e.autoStop !== !1,
                    onCheckedChange: a => o('autoStop', a),
                  }),
                  s.jsx(Te, {
                    htmlFor: 'auto-stop',
                    className: 'text-sm',
                    children: 'Auto-stop on Success',
                  }),
                ],
              }),
              s.jsxs('div', {
                className: 'flex items-center space-x-2',
                children: [
                  s.jsx(dt, {
                    id: 'partial-results',
                    checked: e.voiceAcceptPartialResults !== !1,
                    onCheckedChange: a => o('voiceAcceptPartialResults', a),
                  }),
                  s.jsx(Te, {
                    htmlFor: 'partial-results',
                    className: 'text-sm',
                    children: 'Accept Partial Results (Faster Response)',
                  }),
                ],
              }),
              s.jsx('p', {
                className: 'text-xs text-muted-foreground mt-1 ml-6',
                children:
                  'Process commands before speech is complete (may increase errors)',
              }),
              s.jsxs('div', {
                children: [
                  s.jsx(Te, {
                    htmlFor: 'confidence-threshold',
                    className: 'text-sm block mb-2',
                    children: 'Confidence Threshold',
                  }),
                  s.jsx($n, {
                    id: 'confidence-threshold',
                    min: 0.5,
                    max: 1,
                    step: 0.05,
                    value: [e.confidenceThreshold || 0.75],
                    onValueChange: ([a]) => o('confidenceThreshold', a),
                    className: 'w-[200px]',
                  }),
                  s.jsx('p', {
                    className: 'text-xs text-muted-foreground mt-1',
                    children:
                      'Higher values reduce errors but may require clearer speech',
                  }),
                ],
              }),
              s.jsxs('div', {
                className: 'flex items-center space-x-2 mt-2 pt-2 border-t',
                children: [
                  s.jsx(dt, {
                    id: 'speak-back',
                    checked: e.speakBackCommands === !0,
                    onCheckedChange: a => o('speakBackCommands', a),
                  }),
                  s.jsx(Te, {
                    htmlFor: 'speak-back',
                    className: 'text-sm',
                    children: 'Voice Feedback',
                  }),
                ],
              }),
              e.speakBackCommands &&
                s.jsx('div', {
                  className: 'pl-6 space-y-4',
                  children: s.jsxs('div', {
                    children: [
                      s.jsxs('div', {
                        className: 'flex items-center justify-between mb-2',
                        children: [
                          s.jsx(Te, {
                            htmlFor: 'voice-volume',
                            className: 'text-sm',
                            children: 'Voice Volume',
                          }),
                          s.jsxs('span', {
                            className: 'text-xs text-muted-foreground',
                            children: [
                              Math.round((e.voiceVolume || 0.8) * 100),
                              '%',
                            ],
                          }),
                        ],
                      }),
                      s.jsx($n, {
                        id: 'voice-volume',
                        defaultValue: [(e.voiceVolume || 0.8) * 100],
                        max: 100,
                        step: 5,
                        onValueChange: a => o('voiceVolume', a[0] / 100),
                        className: 'w-full',
                        'aria-label': 'Voice volume control',
                      }),
                    ],
                  }),
                }),
            ],
          }),
        s.jsxs(_a, {
          open: t,
          onOpenChange: n,
          className: 'mt-4 pt-2',
          children: [
            s.jsx(ed, {
              asChild: !0,
              children: s.jsxs('button', {
                type: 'button',
                className:
                  'text-xs px-3 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 transition-colors duration-200',
                children: [
                  s.jsx('span', {
                    children: t
                      ? 'Hide Advanced Settings'
                      : 'Show Advanced Settings',
                  }),
                  s.jsx(Vn, {
                    className: `h-4 w-4 transition-transform duration-300 ease-in-out ${t ? 'transform rotate-180' : ''}`,
                  }),
                ],
              }),
            }),
            s.jsx(td, {
              className:
                'overflow-hidden transition-all duration-300 ease-in-out',
              children: s.jsxs('div', {
                className: `mt-4 space-y-3 border-t pt-4 transform transition-transform duration-300 ease-in-out ${t ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`,
                children: [
                  s.jsx('p', {
                    className: 'text-sm font-medium',
                    children: 'Advanced Voice Settings',
                  }),
                  s.jsxs('div', {
                    className:
                      'flex items-center justify-between animate-in fade-in slide-in-from-left-5 duration-300',
                    children: [
                      s.jsx(Te, {
                        htmlFor: 'command-timeout',
                        className: 'text-sm',
                        children: 'Command Timeout',
                      }),
                      s.jsxs(At, {
                        value: String(e.commandTimeout || 3e3),
                        onValueChange: a => o('commandTimeout', parseInt(a)),
                        children: [
                          s.jsx(gt, {
                            id: 'command-timeout',
                            className: 'w-[120px] text-sm h-8',
                            children: s.jsx($t, {}),
                          }),
                          s.jsxs(vt, {
                            children: [
                              s.jsx(Ke, {
                                value: '2000',
                                children: '2 seconds',
                              }),
                              s.jsx(Ke, {
                                value: '3000',
                                children: '3 seconds',
                              }),
                              s.jsx(Ke, {
                                value: '5000',
                                children: '5 seconds',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className:
                      'flex items-center space-x-2 animate-in fade-in slide-in-from-left-5 duration-300 delay-100',
                    children: [
                      s.jsx(dt, {
                        id: 'use-grammar',
                        checked: e.useGrammar !== !1,
                        onCheckedChange: a => o('useGrammar', a),
                      }),
                      s.jsx(Te, {
                        htmlFor: 'use-grammar',
                        className: 'text-sm',
                        children: 'Use Custom Grammar',
                      }),
                    ],
                  }),
                  s.jsx('p', {
                    className:
                      'text-xs text-muted-foreground animate-in fade-in slide-in-from-left-5 duration-300 delay-200',
                    children:
                      'Restricts recognition to warehouse-specific vocabulary',
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  },
  t0 = () => {
    const { updateSetting: e } = Ge(),
      r = () => {
        ;(e('interactionMode', 'tap'),
          e('enableActionButton', !1),
          e('autoExportOnShiftEnd', !1),
          e('voiceRecognitionEnabled', !0),
          e('voiceEngine', 'browser'),
          e('noiseSuppression', !0),
          e('confidenceThreshold', 0.75),
          e('commandTimeout', 3e3),
          e('useGrammar', !0),
          e('autoStop', !0),
          e('speakBackCommands', !0),
          e('voiceVolume', 0.8),
          e('voiceAcceptPartialResults', !1),
          e('voiceActivationMode', 'button'),
          de.success('Settings reset to defaults', {
            description: 'Your preferences have been reset',
          }))
      }
    return s.jsxs('div', {
      className: 'space-y-8',
      children: [
        s.jsx(cg, {}),
        s.jsxs(Je, {
          className: 'container mx-auto mb-8 border-walmart-blue',
          children: [
            s.jsx(ht, {
              className: 'border-b bg-walmart-blue bg-opacity-5',
              children: s.jsxs(Qe, {
                className: 'flex items-center text-walmart-blue',
                children: [
                  s.jsx(Jd, { className: 'mr-2 h-5 w-5' }),
                  s.jsx('span', { children: 'Interaction Preferences' }),
                ],
              }),
            }),
            s.jsxs(pt, {
              className: 'p-4 space-y-6',
              children: [
                s.jsxs('div', {
                  className: 'space-y-2',
                  children: [s.jsx($g, {}), s.jsx(e0, {})],
                }),
                s.jsx('div', {
                  children: s.jsx(ge, {
                    variant: 'outline',
                    onClick: r,
                    className: 'text-sm',
                    'aria-label': 'Reset settings to defaults',
                    children: 'Reset to Defaults',
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  }
var Mn = ['Enter', ' '],
  r0 = ['ArrowDown', 'PageUp', 'Home'],
  bl = ['ArrowUp', 'PageDown', 'End'],
  n0 = [...r0, ...bl],
  o0 = { ltr: [...Mn, 'ArrowRight'], rtl: [...Mn, 'ArrowLeft'] },
  a0 = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
  lr = 'Menu',
  [tr, s0, i0] = Ir(lr),
  [kt, xl] = tt(lr, [i0, Pr, Gr]),
  qr = Pr(),
  wl = Gr(),
  [l0, Nt] = kt(lr),
  [c0, cr] = kt(lr),
  yl = e => {
    const {
        __scopeMenu: r,
        open: t = !1,
        children: n,
        dir: o,
        onOpenChange: a,
        modal: l = !0,
      } = e,
      i = qr(r),
      [c, f] = u.useState(null),
      m = u.useRef(!1),
      p = bt(a),
      v = Dr(o)
    return (
      u.useEffect(() => {
        const d = () => {
            ;((m.current = !0),
              document.addEventListener('pointerdown', x, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener('pointermove', x, {
                capture: !0,
                once: !0,
              }))
          },
          x = () => (m.current = !1)
        return (
          document.addEventListener('keydown', d, { capture: !0 }),
          () => {
            ;(document.removeEventListener('keydown', d, { capture: !0 }),
              document.removeEventListener('pointerdown', x, { capture: !0 }),
              document.removeEventListener('pointermove', x, { capture: !0 }))
          }
        )
      }, []),
      s.jsx(xa, {
        ...i,
        children: s.jsx(l0, {
          scope: r,
          open: t,
          onOpenChange: p,
          content: c,
          onContentChange: f,
          children: s.jsx(c0, {
            scope: r,
            onClose: u.useCallback(() => p(!1), [p]),
            isUsingKeyboardRef: m,
            dir: v,
            modal: l,
            children: n,
          }),
        }),
      })
    )
  }
yl.displayName = lr
var d0 = 'MenuAnchor',
  ho = u.forwardRef((e, r) => {
    const { __scopeMenu: t, ...n } = e,
      o = qr(t)
    return s.jsx(wa, { ...o, ...n, ref: r })
  })
ho.displayName = d0
var po = 'MenuPortal',
  [u0, Sl] = kt(po, { forceMount: void 0 }),
  Cl = e => {
    const { __scopeMenu: r, forceMount: t, children: n, container: o } = e,
      a = Nt(po, r)
    return s.jsx(u0, {
      scope: r,
      forceMount: t,
      children: s.jsx(wt, {
        present: t || a.open,
        children: s.jsx(ia, { asChild: !0, container: o, children: n }),
      }),
    })
  }
Cl.displayName = po
var Fe = 'MenuContent',
  [f0, mo] = kt(Fe),
  _l = u.forwardRef((e, r) => {
    const t = Sl(Fe, e.__scopeMenu),
      { forceMount: n = t.forceMount, ...o } = e,
      a = Nt(Fe, e.__scopeMenu),
      l = cr(Fe, e.__scopeMenu)
    return s.jsx(tr.Provider, {
      scope: e.__scopeMenu,
      children: s.jsx(wt, {
        present: n || a.open,
        children: s.jsx(tr.Slot, {
          scope: e.__scopeMenu,
          children: l.modal
            ? s.jsx(h0, { ...o, ref: r })
            : s.jsx(p0, { ...o, ref: r }),
        }),
      }),
    })
  }),
  h0 = u.forwardRef((e, r) => {
    const t = Nt(Fe, e.__scopeMenu),
      n = u.useRef(null),
      o = je(r, n)
    return (
      u.useEffect(() => {
        const a = n.current
        if (a) return ga(a)
      }, []),
      s.jsx(go, {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: ie(e.onFocusOutside, a => a.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => t.onOpenChange(!1),
      })
    )
  }),
  p0 = u.forwardRef((e, r) => {
    const t = Nt(Fe, e.__scopeMenu)
    return s.jsx(go, {
      ...e,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1),
    })
  }),
  m0 = Yc('MenuContent.ScrollLock'),
  go = u.forwardRef((e, r) => {
    const {
        __scopeMenu: t,
        loop: n = !1,
        trapFocus: o,
        onOpenAutoFocus: a,
        onCloseAutoFocus: l,
        disableOutsidePointerEvents: i,
        onEntryFocus: c,
        onEscapeKeyDown: f,
        onPointerDownOutside: m,
        onFocusOutside: p,
        onInteractOutside: v,
        onDismiss: d,
        disableOutsideScroll: x,
        ...h
      } = e,
      g = Nt(Fe, t),
      w = cr(Fe, t),
      S = qr(t),
      C = wl(t),
      _ = s0(t),
      [E, D] = u.useState(null),
      T = u.useRef(null),
      I = je(r, T, g.onContentChange),
      R = u.useRef(0),
      L = u.useRef(''),
      V = u.useRef(0),
      k = u.useRef(null),
      P = u.useRef('right'),
      b = u.useRef(0),
      M = x ? Zc : u.Fragment,
      K = x ? { as: m0, allowPinchZoom: !0 } : void 0,
      U = $ => {
        var Q, ne
        const ee = L.current + $,
          F = _().filter(se => !se.disabled),
          A = document.activeElement,
          q =
            (Q = F.find(se => se.ref.current === A)) == null
              ? void 0
              : Q.textValue,
          G = F.map(se => se.textValue),
          Z = E0(G, ee, q),
          fe =
            (ne = F.find(se => se.textValue === Z)) == null
              ? void 0
              : ne.ref.current
        ;((function se(ue) {
          ;((L.current = ue),
            window.clearTimeout(R.current),
            ue !== '' && (R.current = window.setTimeout(() => se(''), 1e3)))
        })(ee),
          fe && setTimeout(() => fe.focus()))
      }
    ;(u.useEffect(() => () => window.clearTimeout(R.current), []), Gc())
    const re = u.useCallback($ => {
      var F, A
      return (
        P.current === ((F = k.current) == null ? void 0 : F.side) &&
        T0($, (A = k.current) == null ? void 0 : A.area)
      )
    }, [])
    return s.jsx(f0, {
      scope: t,
      searchRef: L,
      onItemEnter: u.useCallback(
        $ => {
          re($) && $.preventDefault()
        },
        [re]
      ),
      onItemLeave: u.useCallback(
        $ => {
          var ee
          re($) || ((ee = T.current) == null || ee.focus(), D(null))
        },
        [re]
      ),
      onTriggerLeave: u.useCallback(
        $ => {
          re($) && $.preventDefault()
        },
        [re]
      ),
      pointerGraceTimerRef: V,
      onPointerGraceIntentChange: u.useCallback($ => {
        k.current = $
      }, []),
      children: s.jsx(M, {
        ...K,
        children: s.jsx(Xc, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: ie(a, $ => {
            var ee
            ;($.preventDefault(),
              (ee = T.current) == null || ee.focus({ preventScroll: !0 }))
          }),
          onUnmountAutoFocus: l,
          children: s.jsx(va, {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: f,
            onPointerDownOutside: m,
            onFocusOutside: p,
            onInteractOutside: v,
            onDismiss: d,
            children: s.jsx(Di, {
              asChild: !0,
              ...C,
              dir: w.dir,
              orientation: 'vertical',
              loop: n,
              currentTabStopId: E,
              onCurrentTabStopIdChange: D,
              onEntryFocus: ie(c, $ => {
                w.isUsingKeyboardRef.current || $.preventDefault()
              }),
              preventScrollOnEntryFocus: !0,
              children: s.jsx(ba, {
                role: 'menu',
                'aria-orientation': 'vertical',
                'data-state': zl(g.open),
                'data-radix-menu-content': '',
                dir: w.dir,
                ...S,
                ...h,
                ref: I,
                style: { outline: 'none', ...h.style },
                onKeyDown: ie(h.onKeyDown, $ => {
                  const F =
                      $.target.closest('[data-radix-menu-content]') ===
                      $.currentTarget,
                    A = $.ctrlKey || $.altKey || $.metaKey,
                    q = $.key.length === 1
                  F &&
                    ($.key === 'Tab' && $.preventDefault(), !A && q && U($.key))
                  const G = T.current
                  if ($.target !== G || !n0.includes($.key)) return
                  $.preventDefault()
                  const fe = _()
                    .filter(Q => !Q.disabled)
                    .map(Q => Q.ref.current)
                  ;(bl.includes($.key) && fe.reverse(), k0(fe))
                }),
                onBlur: ie(e.onBlur, $ => {
                  $.currentTarget.contains($.target) ||
                    (window.clearTimeout(R.current), (L.current = ''))
                }),
                onPointerMove: ie(
                  e.onPointerMove,
                  rr($ => {
                    const ee = $.target,
                      F = b.current !== $.clientX
                    if ($.currentTarget.contains(ee) && F) {
                      const A = $.clientX > b.current ? 'right' : 'left'
                      ;((P.current = A), (b.current = $.clientX))
                    }
                  })
                ),
              }),
            }),
          }),
        }),
      }),
    })
  })
_l.displayName = Fe
var g0 = 'MenuGroup',
  vo = u.forwardRef((e, r) => {
    const { __scopeMenu: t, ...n } = e
    return s.jsx(Ce.div, { role: 'group', ...n, ref: r })
  })
vo.displayName = g0
var v0 = 'MenuLabel',
  kl = u.forwardRef((e, r) => {
    const { __scopeMenu: t, ...n } = e
    return s.jsx(Ce.div, { ...n, ref: r })
  })
kl.displayName = v0
var jr = 'MenuItem',
  aa = 'menu.itemSelect',
  Jr = u.forwardRef((e, r) => {
    const { disabled: t = !1, onSelect: n, ...o } = e,
      a = u.useRef(null),
      l = cr(jr, e.__scopeMenu),
      i = mo(jr, e.__scopeMenu),
      c = je(r, a),
      f = u.useRef(!1),
      m = () => {
        const p = a.current
        if (!t && p) {
          const v = new CustomEvent(aa, { bubbles: !0, cancelable: !0 })
          ;(p.addEventListener(aa, d => (n == null ? void 0 : n(d)), {
            once: !0,
          }),
            la(p, v),
            v.defaultPrevented ? (f.current = !1) : l.onClose())
        }
      }
    return s.jsx(Nl, {
      ...o,
      ref: c,
      disabled: t,
      onClick: ie(e.onClick, m),
      onPointerDown: p => {
        var v
        ;((v = e.onPointerDown) == null || v.call(e, p), (f.current = !0))
      },
      onPointerUp: ie(e.onPointerUp, p => {
        var v
        f.current || (v = p.currentTarget) == null || v.click()
      }),
      onKeyDown: ie(e.onKeyDown, p => {
        const v = i.searchRef.current !== ''
        t ||
          (v && p.key === ' ') ||
          (Mn.includes(p.key) && (p.currentTarget.click(), p.preventDefault()))
      }),
    })
  })
Jr.displayName = jr
var Nl = u.forwardRef((e, r) => {
    const { __scopeMenu: t, disabled: n = !1, textValue: o, ...a } = e,
      l = mo(jr, t),
      i = wl(t),
      c = u.useRef(null),
      f = je(r, c),
      [m, p] = u.useState(!1),
      [v, d] = u.useState('')
    return (
      u.useEffect(() => {
        const x = c.current
        x && d((x.textContent ?? '').trim())
      }, [a.children]),
      s.jsx(tr.ItemSlot, {
        scope: t,
        disabled: n,
        textValue: o ?? v,
        children: s.jsx(Ai, {
          asChild: !0,
          ...i,
          focusable: !n,
          children: s.jsx(Ce.div, {
            role: 'menuitem',
            'data-highlighted': m ? '' : void 0,
            'aria-disabled': n || void 0,
            'data-disabled': n ? '' : void 0,
            ...a,
            ref: f,
            onPointerMove: ie(
              e.onPointerMove,
              rr(x => {
                n
                  ? l.onItemLeave(x)
                  : (l.onItemEnter(x),
                    x.defaultPrevented ||
                      x.currentTarget.focus({ preventScroll: !0 }))
              })
            ),
            onPointerLeave: ie(
              e.onPointerLeave,
              rr(x => l.onItemLeave(x))
            ),
            onFocus: ie(e.onFocus, () => p(!0)),
            onBlur: ie(e.onBlur, () => p(!1)),
          }),
        }),
      })
    )
  }),
  b0 = 'MenuCheckboxItem',
  El = u.forwardRef((e, r) => {
    const { checked: t = !1, onCheckedChange: n, ...o } = e
    return s.jsx(Il, {
      scope: e.__scopeMenu,
      checked: t,
      children: s.jsx(Jr, {
        role: 'menuitemcheckbox',
        'aria-checked': Tr(t) ? 'mixed' : t,
        ...o,
        ref: r,
        'data-state': xo(t),
        onSelect: ie(
          o.onSelect,
          () => (n == null ? void 0 : n(Tr(t) ? !0 : !t)),
          { checkForDefaultPrevented: !1 }
        ),
      }),
    })
  })
El.displayName = b0
var jl = 'MenuRadioGroup',
  [x0, w0] = kt(jl, { value: void 0, onValueChange: () => {} }),
  Tl = u.forwardRef((e, r) => {
    const { value: t, onValueChange: n, ...o } = e,
      a = bt(n)
    return s.jsx(x0, {
      scope: e.__scopeMenu,
      value: t,
      onValueChange: a,
      children: s.jsx(vo, { ...o, ref: r }),
    })
  })
Tl.displayName = jl
var Rl = 'MenuRadioItem',
  Pl = u.forwardRef((e, r) => {
    const { value: t, ...n } = e,
      o = w0(Rl, e.__scopeMenu),
      a = t === o.value
    return s.jsx(Il, {
      scope: e.__scopeMenu,
      checked: a,
      children: s.jsx(Jr, {
        role: 'menuitemradio',
        'aria-checked': a,
        ...n,
        ref: r,
        'data-state': xo(a),
        onSelect: ie(
          n.onSelect,
          () => {
            var l
            return (l = o.onValueChange) == null ? void 0 : l.call(o, t)
          },
          { checkForDefaultPrevented: !1 }
        ),
      }),
    })
  })
Pl.displayName = Rl
var bo = 'MenuItemIndicator',
  [Il, y0] = kt(bo, { checked: !1 }),
  Dl = u.forwardRef((e, r) => {
    const { __scopeMenu: t, forceMount: n, ...o } = e,
      a = y0(bo, t)
    return s.jsx(wt, {
      present: n || Tr(a.checked) || a.checked === !0,
      children: s.jsx(Ce.span, { ...o, ref: r, 'data-state': xo(a.checked) }),
    })
  })
Dl.displayName = bo
var S0 = 'MenuSeparator',
  Al = u.forwardRef((e, r) => {
    const { __scopeMenu: t, ...n } = e
    return s.jsx(Ce.div, {
      role: 'separator',
      'aria-orientation': 'horizontal',
      ...n,
      ref: r,
    })
  })
Al.displayName = S0
var C0 = 'MenuArrow',
  $l = u.forwardRef((e, r) => {
    const { __scopeMenu: t, ...n } = e,
      o = qr(t)
    return s.jsx(ya, { ...o, ...n, ref: r })
  })
$l.displayName = C0
var _0 = 'MenuSub',
  [Yv, Ml] = kt(_0),
  Zt = 'MenuSubTrigger',
  Ol = u.forwardRef((e, r) => {
    const t = Nt(Zt, e.__scopeMenu),
      n = cr(Zt, e.__scopeMenu),
      o = Ml(Zt, e.__scopeMenu),
      a = mo(Zt, e.__scopeMenu),
      l = u.useRef(null),
      { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a,
      f = { __scopeMenu: e.__scopeMenu },
      m = u.useCallback(() => {
        ;(l.current && window.clearTimeout(l.current), (l.current = null))
      }, [])
    return (
      u.useEffect(() => m, [m]),
      u.useEffect(() => {
        const p = i.current
        return () => {
          ;(window.clearTimeout(p), c(null))
        }
      }, [i, c]),
      s.jsx(ho, {
        asChild: !0,
        ...f,
        children: s.jsx(Nl, {
          id: o.triggerId,
          'aria-haspopup': 'menu',
          'aria-expanded': t.open,
          'aria-controls': o.contentId,
          'data-state': zl(t.open),
          ...e,
          ref: Sa(r, o.onTriggerChange),
          onClick: p => {
            var v
            ;((v = e.onClick) == null || v.call(e, p),
              !(e.disabled || p.defaultPrevented) &&
                (p.currentTarget.focus(), t.open || t.onOpenChange(!0)))
          },
          onPointerMove: ie(
            e.onPointerMove,
            rr(p => {
              ;(a.onItemEnter(p),
                !p.defaultPrevented &&
                  !e.disabled &&
                  !t.open &&
                  !l.current &&
                  (a.onPointerGraceIntentChange(null),
                  (l.current = window.setTimeout(() => {
                    ;(t.onOpenChange(!0), m())
                  }, 100))))
            })
          ),
          onPointerLeave: ie(
            e.onPointerLeave,
            rr(p => {
              var d, x
              m()
              const v =
                (d = t.content) == null ? void 0 : d.getBoundingClientRect()
              if (v) {
                const h = (x = t.content) == null ? void 0 : x.dataset.side,
                  g = h === 'right',
                  w = g ? -5 : 5,
                  S = v[g ? 'left' : 'right'],
                  C = v[g ? 'right' : 'left']
                ;(a.onPointerGraceIntentChange({
                  area: [
                    { x: p.clientX + w, y: p.clientY },
                    { x: S, y: v.top },
                    { x: C, y: v.top },
                    { x: C, y: v.bottom },
                    { x: S, y: v.bottom },
                  ],
                  side: h,
                }),
                  window.clearTimeout(i.current),
                  (i.current = window.setTimeout(
                    () => a.onPointerGraceIntentChange(null),
                    300
                  )))
              } else {
                if ((a.onTriggerLeave(p), p.defaultPrevented)) return
                a.onPointerGraceIntentChange(null)
              }
            })
          ),
          onKeyDown: ie(e.onKeyDown, p => {
            var d
            const v = a.searchRef.current !== ''
            e.disabled ||
              (v && p.key === ' ') ||
              (o0[n.dir].includes(p.key) &&
                (t.onOpenChange(!0),
                (d = t.content) == null || d.focus(),
                p.preventDefault()))
          }),
        }),
      })
    )
  })
Ol.displayName = Zt
var Ll = 'MenuSubContent',
  Fl = u.forwardRef((e, r) => {
    const t = Sl(Fe, e.__scopeMenu),
      { forceMount: n = t.forceMount, ...o } = e,
      a = Nt(Fe, e.__scopeMenu),
      l = cr(Fe, e.__scopeMenu),
      i = Ml(Ll, e.__scopeMenu),
      c = u.useRef(null),
      f = je(r, c)
    return s.jsx(tr.Provider, {
      scope: e.__scopeMenu,
      children: s.jsx(wt, {
        present: n || a.open,
        children: s.jsx(tr.Slot, {
          scope: e.__scopeMenu,
          children: s.jsx(go, {
            id: i.contentId,
            'aria-labelledby': i.triggerId,
            ...o,
            ref: f,
            align: 'start',
            side: l.dir === 'rtl' ? 'left' : 'right',
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: m => {
              var p
              ;(l.isUsingKeyboardRef.current &&
                ((p = c.current) == null || p.focus()),
                m.preventDefault())
            },
            onCloseAutoFocus: m => m.preventDefault(),
            onFocusOutside: ie(e.onFocusOutside, m => {
              m.target !== i.trigger && a.onOpenChange(!1)
            }),
            onEscapeKeyDown: ie(e.onEscapeKeyDown, m => {
              ;(l.onClose(), m.preventDefault())
            }),
            onKeyDown: ie(e.onKeyDown, m => {
              var d
              const p = m.currentTarget.contains(m.target),
                v = a0[l.dir].includes(m.key)
              p &&
                v &&
                (a.onOpenChange(!1),
                (d = i.trigger) == null || d.focus(),
                m.preventDefault())
            }),
          }),
        }),
      }),
    })
  })
Fl.displayName = Ll
function zl(e) {
  return e ? 'open' : 'closed'
}
function Tr(e) {
  return e === 'indeterminate'
}
function xo(e) {
  return Tr(e) ? 'indeterminate' : e ? 'checked' : 'unchecked'
}
function k0(e) {
  const r = document.activeElement
  for (const t of e)
    if (t === r || (t.focus(), document.activeElement !== r)) return
}
function N0(e, r) {
  return e.map((t, n) => e[(r + n) % e.length])
}
function E0(e, r, t) {
  const o = r.length > 1 && Array.from(r).every(f => f === r[0]) ? r[0] : r,
    a = t ? e.indexOf(t) : -1
  let l = N0(e, Math.max(a, 0))
  o.length === 1 && (l = l.filter(f => f !== t))
  const c = l.find(f => f.toLowerCase().startsWith(o.toLowerCase()))
  return c !== t ? c : void 0
}
function j0(e, r) {
  const { x: t, y: n } = e
  let o = !1
  for (let a = 0, l = r.length - 1; a < r.length; l = a++) {
    const i = r[a],
      c = r[l],
      f = i.x,
      m = i.y,
      p = c.x,
      v = c.y
    m > n != v > n && t < ((p - f) * (n - m)) / (v - m) + f && (o = !o)
  }
  return o
}
function T0(e, r) {
  if (!r) return !1
  const t = { x: e.clientX, y: e.clientY }
  return j0(t, r)
}
function rr(e) {
  return r => (r.pointerType === 'mouse' ? e(r) : void 0)
}
var R0 = yl,
  P0 = ho,
  I0 = Cl,
  D0 = _l,
  A0 = vo,
  $0 = kl,
  M0 = Jr,
  O0 = El,
  L0 = Tl,
  F0 = Pl,
  z0 = Dl,
  B0 = Al,
  U0 = $l,
  V0 = Ol,
  H0 = Fl,
  Qr = 'DropdownMenu',
  [W0, Xv] = tt(Qr, [xl]),
  Ae = xl(),
  [K0, Bl] = W0(Qr),
  Ul = e => {
    const {
        __scopeDropdownMenu: r,
        children: t,
        dir: n,
        open: o,
        defaultOpen: a,
        onOpenChange: l,
        modal: i = !0,
      } = e,
      c = Ae(r),
      f = u.useRef(null),
      [m, p] = xt({ prop: o, defaultProp: a ?? !1, onChange: l, caller: Qr })
    return s.jsx(K0, {
      scope: r,
      triggerId: gn(),
      triggerRef: f,
      contentId: gn(),
      open: m,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p(v => !v), [p]),
      modal: i,
      children: s.jsx(R0, {
        ...c,
        open: m,
        onOpenChange: p,
        dir: n,
        modal: i,
        children: t,
      }),
    })
  }
Ul.displayName = Qr
var Vl = 'DropdownMenuTrigger',
  Hl = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, disabled: n = !1, ...o } = e,
      a = Bl(Vl, t),
      l = Ae(t)
    return s.jsx(P0, {
      asChild: !0,
      ...l,
      children: s.jsx(Ce.button, {
        type: 'button',
        id: a.triggerId,
        'aria-haspopup': 'menu',
        'aria-expanded': a.open,
        'aria-controls': a.open ? a.contentId : void 0,
        'data-state': a.open ? 'open' : 'closed',
        'data-disabled': n ? '' : void 0,
        disabled: n,
        ...o,
        ref: Sa(r, a.triggerRef),
        onPointerDown: ie(e.onPointerDown, i => {
          !n &&
            i.button === 0 &&
            i.ctrlKey === !1 &&
            (a.onOpenToggle(), a.open || i.preventDefault())
        }),
        onKeyDown: ie(e.onKeyDown, i => {
          n ||
            (['Enter', ' '].includes(i.key) && a.onOpenToggle(),
            i.key === 'ArrowDown' && a.onOpenChange(!0),
            ['Enter', ' ', 'ArrowDown'].includes(i.key) && i.preventDefault())
        }),
      }),
    })
  })
Hl.displayName = Vl
var G0 = 'DropdownMenuPortal',
  Wl = e => {
    const { __scopeDropdownMenu: r, ...t } = e,
      n = Ae(r)
    return s.jsx(I0, { ...n, ...t })
  }
Wl.displayName = G0
var Kl = 'DropdownMenuContent',
  Gl = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Bl(Kl, t),
      a = Ae(t),
      l = u.useRef(!1)
    return s.jsx(D0, {
      id: o.contentId,
      'aria-labelledby': o.triggerId,
      ...a,
      ...n,
      ref: r,
      onCloseAutoFocus: ie(e.onCloseAutoFocus, i => {
        var c
        ;(l.current || (c = o.triggerRef.current) == null || c.focus(),
          (l.current = !1),
          i.preventDefault())
      }),
      onInteractOutside: ie(e.onInteractOutside, i => {
        const c = i.detail.originalEvent,
          f = c.button === 0 && c.ctrlKey === !0,
          m = c.button === 2 || f
        ;(!o.modal || m) && (l.current = !0)
      }),
      style: {
        ...e.style,
        '--radix-dropdown-menu-content-transform-origin':
          'var(--radix-popper-transform-origin)',
        '--radix-dropdown-menu-content-available-width':
          'var(--radix-popper-available-width)',
        '--radix-dropdown-menu-content-available-height':
          'var(--radix-popper-available-height)',
        '--radix-dropdown-menu-trigger-width':
          'var(--radix-popper-anchor-width)',
        '--radix-dropdown-menu-trigger-height':
          'var(--radix-popper-anchor-height)',
      },
    })
  })
Gl.displayName = Kl
var Z0 = 'DropdownMenuGroup',
  Y0 = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx(A0, { ...o, ...n, ref: r })
  })
Y0.displayName = Z0
var X0 = 'DropdownMenuLabel',
  Zl = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx($0, { ...o, ...n, ref: r })
  })
Zl.displayName = X0
var q0 = 'DropdownMenuItem',
  Yl = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx(M0, { ...o, ...n, ref: r })
  })
Yl.displayName = q0
var J0 = 'DropdownMenuCheckboxItem',
  Xl = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx(O0, { ...o, ...n, ref: r })
  })
Xl.displayName = J0
var Q0 = 'DropdownMenuRadioGroup',
  ev = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx(L0, { ...o, ...n, ref: r })
  })
ev.displayName = Q0
var tv = 'DropdownMenuRadioItem',
  ql = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx(F0, { ...o, ...n, ref: r })
  })
ql.displayName = tv
var rv = 'DropdownMenuItemIndicator',
  Jl = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx(z0, { ...o, ...n, ref: r })
  })
Jl.displayName = rv
var nv = 'DropdownMenuSeparator',
  Ql = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx(B0, { ...o, ...n, ref: r })
  })
Ql.displayName = nv
var ov = 'DropdownMenuArrow',
  av = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx(U0, { ...o, ...n, ref: r })
  })
av.displayName = ov
var sv = 'DropdownMenuSubTrigger',
  ec = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx(V0, { ...o, ...n, ref: r })
  })
ec.displayName = sv
var iv = 'DropdownMenuSubContent',
  tc = u.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      o = Ae(t)
    return s.jsx(H0, {
      ...o,
      ...n,
      ref: r,
      style: {
        ...e.style,
        '--radix-dropdown-menu-content-transform-origin':
          'var(--radix-popper-transform-origin)',
        '--radix-dropdown-menu-content-available-width':
          'var(--radix-popper-available-width)',
        '--radix-dropdown-menu-content-available-height':
          'var(--radix-popper-available-height)',
        '--radix-dropdown-menu-trigger-width':
          'var(--radix-popper-anchor-width)',
        '--radix-dropdown-menu-trigger-height':
          'var(--radix-popper-anchor-height)',
      },
    })
  })
tc.displayName = iv
var lv = Ul,
  cv = Hl,
  dv = Wl,
  rc = Gl,
  nc = Zl,
  oc = Yl,
  ac = Xl,
  sc = ql,
  ic = Jl,
  lc = Ql,
  cc = ec,
  dc = tc
const uv = lv,
  fv = cv,
  hv = u.forwardRef(({ className: e, inset: r, children: t, ...n }, o) =>
    s.jsxs(cc, {
      ref: o,
      className: le(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
        r && 'pl-8',
        e
      ),
      ...n,
      children: [t, s.jsx(Dd, { className: 'ml-auto h-4 w-4' })],
    })
  )
hv.displayName = cc.displayName
const pv = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(dc, {
    ref: t,
    className: le(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      e
    ),
    ...r,
  })
)
pv.displayName = dc.displayName
const uc = u.forwardRef(({ className: e, sideOffset: r = 4, ...t }, n) =>
  s.jsx(dv, {
    children: s.jsx(rc, {
      ref: n,
      sideOffset: r,
      className: le(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        e
      ),
      ...t,
    }),
  })
)
uc.displayName = rc.displayName
const Yt = u.forwardRef(({ className: e, inset: r, ...t }, n) =>
  s.jsx(oc, {
    ref: n,
    className: le(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      r && 'pl-8',
      e
    ),
    ...t,
  })
)
Yt.displayName = oc.displayName
const mv = u.forwardRef(({ className: e, children: r, checked: t, ...n }, o) =>
  s.jsxs(ac, {
    ref: o,
    className: le(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      e
    ),
    checked: t,
    ...n,
    children: [
      s.jsx('span', {
        className:
          'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        children: s.jsx(ic, { children: s.jsx(or, { className: 'h-4 w-4' }) }),
      }),
      r,
    ],
  })
)
mv.displayName = ac.displayName
const gv = u.forwardRef(({ className: e, children: r, ...t }, n) =>
  s.jsxs(sc, {
    ref: n,
    className: le(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      e
    ),
    ...t,
    children: [
      s.jsx('span', {
        className:
          'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        children: s.jsx(ic, {
          children: s.jsx(Xa, { className: 'h-2 w-2 fill-current' }),
        }),
      }),
      r,
    ],
  })
)
gv.displayName = sc.displayName
const vv = u.forwardRef(({ className: e, inset: r, ...t }, n) =>
  s.jsx(nc, {
    ref: n,
    className: le('px-2 py-1.5 text-sm font-semibold', r && 'pl-8', e),
    ...t,
  })
)
vv.displayName = nc.displayName
const bv = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(lc, { ref: t, className: le('-mx-1 my-1 h-px bg-muted', e), ...r })
)
bv.displayName = lc.displayName
const fc = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(Na, {
    ref: t,
    className: le(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      e
    ),
    ...r,
  })
)
fc.displayName = Na.displayName
const xv = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(Ea, { ref: t, className: le('aspect-square h-full w-full', e), ...r })
)
xv.displayName = Ea.displayName
const hc = u.forwardRef(({ className: e, ...r }, t) =>
  s.jsx(ja, {
    ref: t,
    className: le(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      e
    ),
    ...r,
  })
)
hc.displayName = ja.displayName
const wv = ['add door ', 'remove door ', 'export all', 'show status'],
  yv = ({ onSubmit: e }) => {
    const [r, t] = u.useState(''),
      [n, o] = u.useState(!1),
      [a, l] = u.useState([]),
      [i, c] = u.useState(null),
      [f, m] = u.useState([]),
      p = u.useRef(null),
      {
        transcript: v,
        isListening: d,
        startListening: x,
        stopListening: h,
        confidence: g,
      } = Lr({}),
      w = () => {
        d ? (h(), o(!1)) : (x(), o(!0))
      }
    u.useEffect(() => {
      n && v && (t(v), C(v))
    }, [v, n])
    const S = D => {
        ;(n && (h(), o(!1)), t(D.target.value), C(D.target.value))
      },
      C = D => {
        if (!D) {
          m([])
          return
        }
        m(wv.filter(T => T.startsWith(D.toLowerCase())))
      }
    u.useEffect(() => {
      const D = T => {
        if (
          (T.ctrlKey && T.key === 'm' && w(),
          T.key === 'Escape' && d && (h(), o(!1)),
          T.key === 'Enter' &&
            document.activeElement === p.current &&
            _(r, g, n),
          T.key === 'ArrowUp' &&
            a.length > 0 &&
            c(I => {
              const R = I === null ? a.length - 1 : Math.max(0, I - 1)
              return (t(a[R].text), R)
            }),
          T.key === 'ArrowDown' && a.length > 0 && i !== null)
        ) {
          const I = Math.min(a.length - 1, i + 1)
          ;(t(a[I].text), c(I))
        }
      }
      return (
        window.addEventListener('keydown', D),
        () => window.removeEventListener('keydown', D)
      )
    }, [r, d, n, a, i, g])
    const _ = (D, T, I) => {
        if (!D.trim()) return
        const R = { text: D.trim(), confidence: T, isVoice: I }
        ;(e(R), l(L => [...L, R]), t(''), m([]), c(null), h(), o(!1))
      },
      E = D => {
        var T
        ;(t(D), m([]), (T = p.current) == null || T.focus())
      }
    return s.jsxs('div', {
      className: 'flex flex-col gap-1',
      children: [
        s.jsxs('div', {
          className: 'flex items-center gap-2',
          children: [
            s.jsx('input', {
              ref: p,
              type: 'text',
              value: r,
              onChange: S,
              className: 'flex-1 border rounded px-3 py-2',
              placeholder: d ? 'Listening...' : 'Type or use voice',
              'aria-label': 'Input',
              autoComplete: 'off',
            }),
            s.jsx(ge, {
              type: 'button',
              onClick: w,
              'aria-label': d ? 'Stop voice input' : 'Start voice input',
              variant: d ? 'destructive' : 'outline',
              children: d ? s.jsx(Hn, {}) : s.jsx(Lt, {}),
            }),
            s.jsx(ge, {
              type: 'button',
              onClick: () => _(r, g, n),
              disabled: !r.trim(),
              children: 'Submit',
            }),
            n &&
              s.jsx('span', {
                className: 'ml-2 text-xs text-gray-500',
                children: d ? 'Listening...' : 'Voice ready',
              }),
            typeof g == 'number' &&
              s.jsxs('span', {
                className: `ml-2 text-xs flex items-center gap-1 ${g > 0.8 ? 'text-green-600' : 'text-yellow-600'}`,
                'aria-live': 'polite',
                children: [
                  g > 0.8 ? s.jsx(Md, { size: 14 }) : s.jsx($d, { size: 14 }),
                  Math.round(g * 100),
                  '% confidence',
                ],
              }),
          ],
        }),
        f.length > 0 &&
          s.jsx('ul', {
            className: 'border rounded bg-white shadow p-2 mt-1 max-w-md',
            children: f.map(D =>
              s.jsx(
                'li',
                {
                  className: 'cursor-pointer hover:bg-gray-100 px-2 py-1',
                  onClick: () => E(D),
                  tabIndex: 0,
                  onKeyDown: T => {
                    T.key === 'Enter' && E(D)
                  },
                  children: D,
                },
                D
              )
            ),
          }),
        a.length > 0 &&
          s.jsx('div', {
            className: 'flex gap-2 mt-1 flex-wrap',
            children: a
              .slice(-5)
              .reverse()
              .map((D, T) =>
                s.jsx(
                  ge,
                  {
                    size: 'sm',
                    variant: 'ghost',
                    onClick: () => t(D.text),
                    'aria-label': `Recall: ${D.text}`,
                    children: D.text,
                  },
                  T
                )
              ),
          }),
      ],
    })
  },
  Sv = () =>
    s.jsxs(Je, {
      className: 'w-full max-w-2xl mx-auto',
      children: [
        s.jsx(ht, {
          children: s.jsxs(Qe, {
            className: 'flex items-center gap-2',
            children: [
              s.jsx(Lt, { className: 'h-5 w-5 text-blue-500' }),
              'Voice Commands Quick Reference',
            ],
          }),
        }),
        s.jsxs(pt, {
          className: 'space-y-6',
          children: [
            s.jsxs('div', {
              className: 'space-y-3',
              children: [
                s.jsxs('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    s.jsx(Yd, { className: 'h-4 w-4 text-green-500' }),
                    s.jsx('h3', {
                      className: 'font-semibold',
                      children: 'Pallet Counter',
                    }),
                  ],
                }),
                s.jsx('div', {
                  className: 'grid grid-cols-1 md:grid-cols-2 gap-2',
                  children: [
                    'Add counter',
                    'Add pallet',
                    'Counter',
                    'Pallet',
                  ].map(e =>
                    s.jsxs(
                      'div',
                      {
                        className:
                          'flex items-center gap-2 p-2 bg-green-50 rounded-lg',
                        children: [
                          s.jsx(Gt, {
                            variant: 'outline',
                            className: 'text-xs',
                            children: 'Say',
                          }),
                          s.jsxs('span', {
                            className: 'font-medium',
                            children: ['"', e, '"'],
                          }),
                        ],
                      },
                      e
                    )
                  ),
                }),
              ],
            }),
            s.jsxs('div', {
              className: 'space-y-3',
              children: [
                s.jsxs('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    s.jsx(tu, { className: 'h-4 w-4 text-blue-500' }),
                    s.jsx('h3', {
                      className: 'font-semibold',
                      children: 'Door Scheduling - SPEED COMMANDS',
                    }),
                  ],
                }),
                s.jsxs('div', {
                  className: 'bg-red-50 p-3 rounded-lg',
                  children: [
                    s.jsx('h4', {
                      className: 'font-medium text-red-700 mb-2',
                      children: '🔥 ULTRA-FAST (1-2 seconds)',
                    }),
                    s.jsx('div', {
                      className: 'grid grid-cols-2 gap-2',
                      children: ['332', '6024', 'XD', '28'].map(e =>
                        s.jsxs(
                          'div',
                          {
                            className:
                              'flex items-center gap-2 p-1 bg-white rounded',
                            children: [
                              s.jsx(Gt, {
                                variant: 'outline',
                                className: 'text-xs bg-red-100',
                                children: 'Say',
                              }),
                              s.jsxs('span', {
                                className: 'font-bold text-red-700',
                                children: ['"', e, '"'],
                              }),
                            ],
                          },
                          e
                        )
                      ),
                    }),
                  ],
                }),
                s.jsxs('div', {
                  className: 'bg-orange-50 p-3 rounded-lg',
                  children: [
                    s.jsx('h4', {
                      className: 'font-medium text-orange-700 mb-2',
                      children: '🚀 FAST (2-3 seconds)',
                    }),
                    s.jsx('div', {
                      className: 'grid grid-cols-1 gap-2',
                      children: [
                        'Door 332 to 6024',
                        'Door 335 XD',
                        'Door 340 empty',
                      ].map(e =>
                        s.jsxs(
                          'div',
                          {
                            className:
                              'flex items-center gap-2 p-1 bg-white rounded',
                            children: [
                              s.jsx(Gt, {
                                variant: 'outline',
                                className: 'text-xs bg-orange-100',
                                children: 'Say',
                              }),
                              s.jsxs('span', {
                                className: 'font-medium text-orange-700',
                                children: ['"', e, '"'],
                              }),
                            ],
                          },
                          e
                        )
                      ),
                    }),
                  ],
                }),
                s.jsxs('div', {
                  className: 'bg-green-50 p-3 rounded-lg',
                  children: [
                    s.jsx('h4', {
                      className: 'font-medium text-green-700 mb-2',
                      children: '⚡ COMPLETE (3-4 seconds)',
                    }),
                    s.jsx('div', {
                      className: 'grid grid-cols-1 gap-2',
                      children: ['Door 332 to 6024 XD empty'].map(e =>
                        s.jsxs(
                          'div',
                          {
                            className:
                              'flex items-center gap-2 p-1 bg-white rounded',
                            children: [
                              s.jsx(Gt, {
                                variant: 'outline',
                                className: 'text-xs bg-green-100',
                                children: 'Say',
                              }),
                              s.jsxs('span', {
                                className: 'font-medium text-green-700',
                                children: ['"', e, '"'],
                              }),
                            ],
                          },
                          e
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs('div', {
              className: 'space-y-3',
              children: [
                s.jsxs('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    s.jsx(Wn, { className: 'h-4 w-4 text-yellow-500' }),
                    s.jsx('h3', {
                      className: 'font-semibold',
                      children: 'SPEED TIPS for Warehouse Efficiency',
                    }),
                  ],
                }),
                s.jsxs('div', {
                  className: 'bg-yellow-50 p-4 rounded-lg space-y-2',
                  children: [
                    s.jsxs('div', {
                      className: 'flex items-start gap-2',
                      children: [
                        s.jsx('span', {
                          className: 'text-yellow-600 font-bold',
                          children: '🔥',
                        }),
                        s.jsxs('span', {
                          className: 'text-sm',
                          children: [
                            s.jsx('strong', { children: 'FASTEST:' }),
                            ' Just say the number! "332" creates door 332',
                          ],
                        }),
                      ],
                    }),
                    s.jsxs('div', {
                      className: 'flex items-start gap-2',
                      children: [
                        s.jsx('span', {
                          className: 'text-yellow-600 font-bold',
                          children: '⚡',
                        }),
                        s.jsxs('span', {
                          className: 'text-sm',
                          children: [
                            s.jsx('strong', { children: 'RAPID:' }),
                            ' "Door 332 to 6024" = complete setup in 3 seconds',
                          ],
                        }),
                      ],
                    }),
                    s.jsxs('div', {
                      className: 'flex items-start gap-2',
                      children: [
                        s.jsx('span', {
                          className: 'text-yellow-600 font-bold',
                          children: '🚀',
                        }),
                        s.jsxs('span', {
                          className: 'text-sm',
                          children: [
                            s.jsx('strong', { children: 'CHAIN:' }),
                            ' Say multiple commands back-to-back',
                          ],
                        }),
                      ],
                    }),
                    s.jsxs('div', {
                      className: 'flex items-start gap-2',
                      children: [
                        s.jsx('span', {
                          className: 'text-yellow-600 font-bold',
                          children: '💨',
                        }),
                        s.jsxs('span', {
                          className: 'text-sm',
                          children: [
                            s.jsx('strong', { children: 'NO PAUSES:' }),
                            ' Speak continuously for maximum speed',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs('div', {
              className: 'bg-blue-50 p-4 rounded-lg',
              children: [
                s.jsx('h4', {
                  className: 'font-medium mb-2 text-blue-800',
                  children: '⚡ SPEED WORKFLOW EXAMPLES:',
                }),
                s.jsxs('div', {
                  className: 'space-y-2 text-sm text-blue-700',
                  children: [
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Ultra-Fast:' }),
                        ' Click mic → "332" → Done! (2 seconds)',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Fast Setup:' }),
                        ' Click mic → "Door 335 to 6024" → Done! (3 seconds)',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Complete:' }),
                        ' Click mic → "Door 340 to 6070 XD empty" → Done! (4 seconds)',
                      ],
                    }),
                    s.jsxs('p', {
                      children: [
                        s.jsx('strong', { children: 'Chain Mode:' }),
                        ' Click mic → "332" → "335" → "340" → Multiple doors!',
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Cv = () => {
    const [e, r] = u.useState('doors')
    return (
      Ge(),
      s.jsx(Es, { children: s.jsx(_v, { currentView: e, setCurrentView: r }) })
    )
  },
  _v = ({ currentView: e, setCurrentView: r }) => {
    const { currentUser: t } = sr()
    return s.jsxs('div', {
      className: 'min-h-screen bg-gray-50',
      children: [
        s.jsx('header', {
          className: 'bg-walmart-blue text-white py-4 shadow-md',
          children: s.jsxs('div', {
            className:
              'container mx-auto px-4 flex justify-between items-center',
            children: [
              s.jsxs('div', {
                children: [
                  s.jsx('h1', {
                    className: 'text-2xl font-bold',
                    children: 'Walmart DC 8980 Shipping',
                  }),
                  s.jsx('p', {
                    className: 'text-sm opacity-80',
                    children: 'Door scheduling and pallet tracking system',
                  }),
                ],
              }),
              s.jsxs('div', {
                className: 'flex items-center gap-4',
                children: [
                  s.jsxs(Jn, {
                    children: [
                      s.jsx(Qn, {
                        asChild: !0,
                        children: s.jsxs(ge, {
                          variant: 'ghost',
                          className:
                            'text-white hover:bg-walmart-blue/20 gap-2',
                          title: 'Voice Commands Quick Reference',
                          children: [
                            s.jsx(Wn, { className: 'h-4 w-4' }),
                            s.jsx('span', {
                              className: 'hidden sm:inline',
                              children: 'Voice Commands',
                            }),
                          ],
                        }),
                      }),
                      s.jsx(Fr, {
                        className: 'max-w-4xl max-h-[80vh] overflow-y-auto',
                        children: s.jsx(Sv, {}),
                      }),
                    ],
                  }),
                  s.jsxs('div', {
                    className:
                      'flex items-center bg-walmart-blue/30 px-3 py-1 rounded-full',
                    children: [
                      s.jsx(fc, {
                        className: 'h-7 w-7 border border-white/30',
                        children: s.jsx(hc, {
                          className: 'bg-walmart-blue/50 text-white',
                          children: t.displayName
                            .split(' ')
                            .map(n => n[0])
                            .join(''),
                        }),
                      }),
                      s.jsx('span', {
                        className: 'ml-2 text-sm font-medium',
                        children: t.displayName,
                      }),
                    ],
                  }),
                  s.jsxs(uv, {
                    children: [
                      s.jsx(fv, {
                        asChild: !0,
                        children: s.jsx(ge, {
                          variant: 'ghost',
                          className: 'text-white hover:bg-walmart-blue/20',
                          children: s.jsx(Kd, { className: 'h-6 w-6' }),
                        }),
                      }),
                      s.jsxs(uc, {
                        align: 'end',
                        className: 'w-48',
                        children: [
                          s.jsx(Yt, {
                            onClick: () => r('doors'),
                            children: 'Door Schedule',
                          }),
                          s.jsx(Yt, {
                            onClick: () => r('pallets'),
                            children: 'Pallet Counter',
                          }),
                          s.jsx(Yt, {
                            onClick: () => r('settings'),
                            children: 'Settings',
                          }),
                          s.jsx(Yt, {
                            asChild: !0,
                            children: s.jsxs(_s, {
                              to: '/notes',
                              className: 'flex w-full',
                              children: [
                                s.jsx(qa, { className: 'mr-2 h-4 w-4' }),
                                'Notes',
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsx('div', {
          className: 'py-8',
          children: s.jsxs('div', {
            className: 'container mx-auto px-4',
            children: [
              s.jsx('div', {
                className: 'mb-6',
                children: s.jsx(yv, { onSubmit: n => {} }),
              }),
              e === 'doors' && s.jsx(Hm, {}),
              e === 'pallets' && s.jsx(Ei, {}),
              e === 'settings' && s.jsx(t0, {}),
            ],
          }),
        }),
      ],
    })
  },
  kv = () =>
    s.jsx('div', {
      className: 'container mx-auto p-4',
      children: s.jsx(Ei, {}),
    }),
  Nv = () =>
    s.jsxs('div', {
      className: 'container mx-auto p-4',
      children: [
        s.jsx('h1', { className: 'text-2xl font-bold', children: 'Notes' }),
        s.jsx('p', { children: 'User notes and logs will be available here.' }),
      ],
    }),
  Ev = () =>
    s.jsxs('div', {
      className: 'container mx-auto p-4',
      children: [
        s.jsx('h1', { className: 'text-2xl font-bold', children: 'Settings' }),
        s.jsx('p', {
          children: 'Application settings will be configured here.',
        }),
      ],
    }),
  jv = () => {
    const e = Bt()
    return (
      u.useEffect(() => {
        console.error(
          '404 Error: User attempted to access non-existent route:',
          e.pathname
        )
      }, [e.pathname]),
      s.jsx('div', {
        className: 'min-h-screen flex items-center justify-center bg-gray-100',
        children: s.jsxs('div', {
          className: 'text-center',
          children: [
            s.jsx('h1', {
              className: 'text-4xl font-bold mb-4',
              children: '404',
            }),
            s.jsx('p', {
              className: 'text-xl text-gray-600 mb-4',
              children: 'Oops! Page not found',
            }),
            s.jsx('a', {
              href: '/',
              className: 'text-blue-500 hover:text-blue-700 underline',
              children: 'Return to Home',
            }),
          ],
        }),
      })
    )
  }
function Tv(...e) {
  return os(Un(e))
}
const Rv = [
    { name: 'Scheduler', path: '/' },
    { name: 'Pallet Counter', path: '/pallet-counter' },
    { name: 'Notes', path: '/notes' },
    { name: 'Settings', path: '/settings' },
  ],
  Pv = () => {
    const r = Bt().pathname
    return s.jsx('nav', {
      className: 'bg-wal-blue-500 p-2 mb-4 shadow-md',
      children: s.jsx('div', {
        className: 'container mx-auto flex justify-center space-x-2',
        children: Rv.map(t => {
          const n = r === t.path
          return s.jsx(
            ge,
            {
              variant: n ? 'secondary' : 'ghost',
              className: Tv(
                'text-white hover:bg-wal-blue-400',
                n && 'bg-wal-blue-600 font-semibold'
              ),
              asChild: !0,
              children: s.jsx(_s, { to: t.path, children: t.name }),
            },
            t.name
          )
        }),
      }),
    })
  }
class mn extends u.Component {
  constructor(t) {
    super(t)
    tn(this, 'handleRetry', () => {
      this.setState({ hasError: !1, error: null, errorInfo: null })
    })
    tn(this, 'handleGoHome', () => {
      window.location.href = '/'
    })
    this.state = { hasError: !1, error: null, errorInfo: null }
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, error: t, errorInfo: null }
  }
  componentDidCatch(t, n) {
    ;(console.error('ErrorBoundary caught an error:', t, errorInfo),
      this.setState({ error: t, errorInfo }),
      this.props.onError && this.props.onError(t, errorInfo),
      console.error('Production error logged:', {
        error: t.message,
        stack: t.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
      }))
  }
  render() {
    return this.state.hasError
      ? this.props.fallback
        ? this.props.fallback
        : s.jsx('div', {
            className:
              'min-h-screen flex items-center justify-center p-4 bg-gray-50',
            children: s.jsxs(Je, {
              className: 'w-full max-w-md',
              children: [
                s.jsxs(ht, {
                  className: 'text-center',
                  children: [
                    s.jsx('div', {
                      className:
                        'mx-auto mb-4 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center',
                      children: s.jsx(eu, {
                        className: 'w-6 h-6 text-red-600',
                      }),
                    }),
                    s.jsx(Qe, {
                      className: 'text-xl font-semibold text-gray-900',
                      children: 'Something went wrong',
                    }),
                    s.jsx(js, {
                      className: 'text-gray-600',
                      children:
                        'We encountered an unexpected error. This has been logged and our team will investigate.',
                    }),
                  ],
                }),
                s.jsxs(pt, {
                  className: 'space-y-4',
                  children: [
                    !1,
                    s.jsxs('div', {
                      className: 'flex flex-col sm:flex-row gap-2',
                      children: [
                        s.jsxs(ge, {
                          onClick: this.handleRetry,
                          className:
                            'flex-1 flex items-center justify-center gap-2',
                          variant: 'default',
                          children: [
                            s.jsx(qd, { className: 'w-4 h-4' }),
                            'Try Again',
                          ],
                        }),
                        s.jsxs(ge, {
                          onClick: this.handleGoHome,
                          className:
                            'flex-1 flex items-center justify-center gap-2',
                          variant: 'outline',
                          children: [
                            s.jsx(Vd, { className: 'w-4 h-4' }),
                            'Go Home',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
      : this.props.children
  }
}
const Iv = new rd(),
  Dv = () =>
    s.jsx(mn, {
      children: s.jsx(nd, {
        client: Iv,
        children: s.jsxs(Gn, {
          children: [
            s.jsx(Fu, {}),
            s.jsx(Es, {
              children: s.jsxs(Ff, {
                children: [
                  s.jsx(mn, { children: s.jsx(Pv, {}) }),
                  s.jsx('main', {
                    className: 'container mx-auto p-4',
                    children: s.jsx(mn, {
                      children: s.jsxs(If, {
                        children: [
                          s.jsx(Pt, { path: '/', element: s.jsx(Cv, {}) }),
                          s.jsx(Pt, {
                            path: '/pallet-counter',
                            element: s.jsx(kv, {}),
                          }),
                          s.jsx(Pt, { path: '/notes', element: s.jsx(Nv, {}) }),
                          s.jsx(Pt, {
                            path: '/settings',
                            element: s.jsx(Ev, {}),
                          }),
                          s.jsx(Pt, { path: '*', element: s.jsx(jv, {}) }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  pc = document.getElementById('root')
pc.innerHTML = ''
id.createRoot(pc).render(s.jsx(Dv, {}))
