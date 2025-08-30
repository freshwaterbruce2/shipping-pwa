var fc = Object.defineProperty
var hc = (e, r, t) =>
  r in e
    ? fc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[r] = t)
var Ve = (e, r, t) => hc(e, typeof r != 'symbol' ? r + '' : r, t)
import {
  c as nt,
  a as jr,
  u as Ee,
  j as o,
  B as pc,
  P as Ce,
  b as xt,
  d as wt,
  e as ie,
  f as bt,
  V as cs,
  R as mc,
  g as ds,
  h as gc,
  i as us,
  C as fs,
  k as vc,
  l as bc,
  T as xc,
  S as wc,
  O as hs,
  m as yc,
  n as ps,
  o as Sc,
  p as ms,
  D as gs,
  q as Cc,
  s as _c,
  t as vs,
  v as kc,
  w as Nc,
  x as Ec,
  y as jc,
  z as Tc,
  A as Rc,
  E as Pc,
  F as Dc,
  G as Ic,
  H as Ac,
  I as $c,
  _ as Mc,
  J as Oc,
  K as jt,
  L as Lc,
  M as Fc,
  N as zc,
  Q as Bc,
  U as Uc,
  W as Hc,
  X as bs,
  Y as xs,
  Z as Vc,
  $ as Tr,
  a0 as ws,
  a1 as ys,
  a2 as Ss,
  a3 as Cs,
  a4 as _s,
  a5 as mn,
  a6 as Rr,
  a7 as Mn,
  a8 as On,
  a9 as Wc,
  aa as Kc,
  ab as ks,
  ac as Gc,
  ad as Yc,
  ae as Zc,
  af as qc,
  ag as Ns,
  ah as Es,
  ai as js,
} from './ui-DvJDu2Kv.js'
import {
  d as Xc,
  g as Ts,
  a as h,
  b as Pr,
  R as X,
  $ as Rs,
  c as Qc,
  e as fr,
  L as Ps,
  u as Ds,
  B as Jc,
  f as ed,
  h as Ut,
} from './react-4MTRaESf.js'
import { Q as td, a as rd, c as nd } from './state-B9vcjMxp.js'
import { m as od } from './motion-I4RUWiZv.js'
;(function () {
  const r = document.createElement('link').relList
  if (r && r.supports && r.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s)
  new MutationObserver(s => {
    for (const a of s)
      if (a.type === 'childList')
        for (const l of a.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function t(s) {
    const a = {}
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (a.credentials = 'omit')
          : (a.credentials = 'same-origin'),
      a
    )
  }
  function n(s) {
    if (s.ep) return
    s.ep = !0
    const a = t(s)
    fetch(s.href, a)
  }
})()
var hr = {},
  yo
function sd() {
  if (yo) return hr
  yo = 1
  var e = Xc()
  return ((hr.createRoot = e.createRoot), (hr.hydrateRoot = e.hydrateRoot), hr)
}
var ad = sd()
const id = Ts(ad),
  ld = 1,
  cd = 1e6
let en = 0
function dd() {
  return ((en = (en + 1) % Number.MAX_SAFE_INTEGER), en.toString())
}
const tn = new Map(),
  So = e => {
    if (tn.has(e)) return
    const r = setTimeout(() => {
      ;(tn.delete(e), Zt({ type: 'REMOVE_TOAST', toastId: e }))
    }, cd)
    tn.set(e, r)
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
            ? So(t)
            : e.toasts.forEach(n => {
                So(n.id)
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
  Sr = []
let Cr = { toasts: [] }
function Zt(e) {
  ;((Cr = ud(Cr, e)),
    Sr.forEach(r => {
      r(Cr)
    }))
}
function fd({ ...e }) {
  const r = dd(),
    t = s => Zt({ type: 'UPDATE_TOAST', toast: { ...s, id: r } }),
    n = () => Zt({ type: 'DISMISS_TOAST', toastId: r })
  return (
    Zt({
      type: 'ADD_TOAST',
      toast: {
        ...e,
        id: r,
        open: !0,
        onOpenChange: s => {
          s || n()
        },
      },
    }),
    { id: r, dismiss: n, update: t }
  )
}
function Is() {
  const [e, r] = h.useState(Cr)
  return (
    h.useEffect(
      () => (
        Sr.push(r),
        () => {
          const t = Sr.indexOf(r)
          t > -1 && Sr.splice(t, 1)
        }
      ),
      [e]
    ),
    { ...e, toast: fd, dismiss: t => Zt({ type: 'DISMISS_TOAST', toastId: t }) }
  )
}
var Ln = 'ToastProvider',
  [Fn, hd, pd] = jr('Toast'),
  [As, gv] = nt('Toast', [pd]),
  [md, Dr] = As(Ln),
  $s = e => {
    const {
        __scopeToast: r,
        label: t = 'Notification',
        duration: n = 5e3,
        swipeDirection: s = 'right',
        swipeThreshold: a = 50,
        children: l,
      } = e,
      [i, d] = h.useState(null),
      [u, p] = h.useState(0),
      g = h.useRef(!1),
      v = h.useRef(!1)
    return (
      t.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Ln}\`. Expected non-empty \`string\`.`
        ),
      o.jsx(Fn.Provider, {
        scope: r,
        children: o.jsx(md, {
          scope: r,
          label: t,
          duration: n,
          swipeDirection: s,
          swipeThreshold: a,
          toastCount: u,
          viewport: i,
          onViewportChange: d,
          onToastAdd: h.useCallback(() => p(c => c + 1), []),
          onToastRemove: h.useCallback(() => p(c => c - 1), []),
          isFocusedToastEscapeKeyDownRef: g,
          isClosePausedRef: v,
          children: l,
        }),
      })
    )
  }
$s.displayName = Ln
var Ms = 'ToastViewport',
  gd = ['F8'],
  gn = 'toast.viewportPause',
  vn = 'toast.viewportResume',
  Os = h.forwardRef((e, r) => {
    const {
        __scopeToast: t,
        hotkey: n = gd,
        label: s = 'Notifications ({hotkey})',
        ...a
      } = e,
      l = Dr(Ms, t),
      i = hd(t),
      d = h.useRef(null),
      u = h.useRef(null),
      p = h.useRef(null),
      g = h.useRef(null),
      v = Ee(r, g, l.onViewportChange),
      c = n.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
      x = l.toastCount > 0
    ;(h.useEffect(() => {
      const m = w => {
        var C
        n.length !== 0 &&
          n.every(k => w[k] || w.code === k) &&
          ((C = g.current) == null || C.focus())
      }
      return (
        document.addEventListener('keydown', m),
        () => document.removeEventListener('keydown', m)
      )
    }, [n]),
      h.useEffect(() => {
        const m = d.current,
          w = g.current
        if (x && m && w) {
          const S = () => {
              if (!l.isClosePausedRef.current) {
                const I = new CustomEvent(gn)
                ;(w.dispatchEvent(I), (l.isClosePausedRef.current = !0))
              }
            },
            C = () => {
              if (l.isClosePausedRef.current) {
                const I = new CustomEvent(vn)
                ;(w.dispatchEvent(I), (l.isClosePausedRef.current = !1))
              }
            },
            k = I => {
              !m.contains(I.relatedTarget) && C()
            },
            E = () => {
              m.contains(document.activeElement) || C()
            }
          return (
            m.addEventListener('focusin', S),
            m.addEventListener('focusout', k),
            m.addEventListener('pointermove', S),
            m.addEventListener('pointerleave', E),
            window.addEventListener('blur', S),
            window.addEventListener('focus', C),
            () => {
              ;(m.removeEventListener('focusin', S),
                m.removeEventListener('focusout', k),
                m.removeEventListener('pointermove', S),
                m.removeEventListener('pointerleave', E),
                window.removeEventListener('blur', S),
                window.removeEventListener('focus', C))
            }
          )
        }
      }, [x, l.isClosePausedRef]))
    const f = h.useCallback(
      ({ tabbingDirection: m }) => {
        const S = i().map(C => {
          const k = C.ref.current,
            E = [k, ...Td(k)]
          return m === 'forwards' ? E : E.reverse()
        })
        return (m === 'forwards' ? S.reverse() : S).flat()
      },
      [i]
    )
    return (
      h.useEffect(() => {
        const m = g.current
        if (m) {
          const w = S => {
            var E, I, T
            const C = S.altKey || S.ctrlKey || S.metaKey
            if (S.key === 'Tab' && !C) {
              const D = document.activeElement,
                R = S.shiftKey
              if (S.target === m && R) {
                ;(E = u.current) == null || E.focus()
                return
              }
              const _ = f({ tabbingDirection: R ? 'backwards' : 'forwards' }),
                P = _.findIndex(b => b === D)
              rn(_.slice(P + 1))
                ? S.preventDefault()
                : R
                  ? (I = u.current) == null || I.focus()
                  : (T = p.current) == null || T.focus()
            }
          }
          return (
            m.addEventListener('keydown', w),
            () => m.removeEventListener('keydown', w)
          )
        }
      }, [i, f]),
      o.jsxs(pc, {
        ref: d,
        role: 'region',
        'aria-label': s.replace('{hotkey}', c),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : 'none' },
        children: [
          x &&
            o.jsx(bn, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const m = f({ tabbingDirection: 'forwards' })
                rn(m)
              },
            }),
          o.jsx(Fn.Slot, {
            scope: t,
            children: o.jsx(Ce.ol, { tabIndex: -1, ...a, ref: v }),
          }),
          x &&
            o.jsx(bn, {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const m = f({ tabbingDirection: 'backwards' })
                rn(m)
              },
            }),
        ],
      })
    )
  })
Os.displayName = Ms
var Ls = 'ToastFocusProxy',
  bn = h.forwardRef((e, r) => {
    const { __scopeToast: t, onFocusFromOutsideViewport: n, ...s } = e,
      a = Dr(Ls, t)
    return o.jsx(cs, {
      'aria-hidden': !0,
      tabIndex: 0,
      ...s,
      ref: r,
      style: { position: 'fixed' },
      onFocus: l => {
        var u
        const i = l.relatedTarget
        !((u = a.viewport) != null && u.contains(i)) && n()
      },
    })
  })
bn.displayName = Ls
var er = 'Toast',
  vd = 'toast.swipeStart',
  bd = 'toast.swipeMove',
  xd = 'toast.swipeCancel',
  wd = 'toast.swipeEnd',
  Fs = h.forwardRef((e, r) => {
    const { forceMount: t, open: n, defaultOpen: s, onOpenChange: a, ...l } = e,
      [i, d] = xt({ prop: n, defaultProp: s ?? !0, onChange: a, caller: er })
    return o.jsx(wt, {
      present: t || i,
      children: o.jsx(Cd, {
        open: i,
        ...l,
        ref: r,
        onClose: () => d(!1),
        onPause: bt(e.onPause),
        onResume: bt(e.onResume),
        onSwipeStart: ie(e.onSwipeStart, u => {
          u.currentTarget.setAttribute('data-swipe', 'start')
        }),
        onSwipeMove: ie(e.onSwipeMove, u => {
          const { x: p, y: g } = u.detail.delta
          ;(u.currentTarget.setAttribute('data-swipe', 'move'),
            u.currentTarget.style.setProperty(
              '--radix-toast-swipe-move-x',
              `${p}px`
            ),
            u.currentTarget.style.setProperty(
              '--radix-toast-swipe-move-y',
              `${g}px`
            ))
        }),
        onSwipeCancel: ie(e.onSwipeCancel, u => {
          ;(u.currentTarget.setAttribute('data-swipe', 'cancel'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-end-x'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-end-y'))
        }),
        onSwipeEnd: ie(e.onSwipeEnd, u => {
          const { x: p, y: g } = u.detail.delta
          ;(u.currentTarget.setAttribute('data-swipe', 'end'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-move-x'),
            u.currentTarget.style.removeProperty('--radix-toast-swipe-move-y'),
            u.currentTarget.style.setProperty(
              '--radix-toast-swipe-end-x',
              `${p}px`
            ),
            u.currentTarget.style.setProperty(
              '--radix-toast-swipe-end-y',
              `${g}px`
            ),
            d(!1))
        }),
      }),
    })
  })
Fs.displayName = er
var [yd, Sd] = As(er, { onClose() {} }),
  Cd = h.forwardRef((e, r) => {
    const {
        __scopeToast: t,
        type: n = 'foreground',
        duration: s,
        open: a,
        onClose: l,
        onEscapeKeyDown: i,
        onPause: d,
        onResume: u,
        onSwipeStart: p,
        onSwipeMove: g,
        onSwipeCancel: v,
        onSwipeEnd: c,
        ...x
      } = e,
      f = Dr(er, t),
      [m, w] = h.useState(null),
      S = Ee(r, b => w(b)),
      C = h.useRef(null),
      k = h.useRef(null),
      E = s || f.duration,
      I = h.useRef(0),
      T = h.useRef(E),
      D = h.useRef(0),
      { onToastAdd: R, onToastRemove: L } = f,
      H = bt(() => {
        var M
        ;((m == null ? void 0 : m.contains(document.activeElement)) &&
          ((M = f.viewport) == null || M.focus()),
          l())
      }),
      _ = h.useCallback(
        b => {
          !b ||
            b === 1 / 0 ||
            (window.clearTimeout(D.current),
            (I.current = new Date().getTime()),
            (D.current = window.setTimeout(H, b)))
        },
        [H]
      )
    ;(h.useEffect(() => {
      const b = f.viewport
      if (b) {
        const M = () => {
            ;(_(T.current), u == null || u())
          },
          K = () => {
            const U = new Date().getTime() - I.current
            ;((T.current = T.current - U),
              window.clearTimeout(D.current),
              d == null || d())
          }
        return (
          b.addEventListener(gn, K),
          b.addEventListener(vn, M),
          () => {
            ;(b.removeEventListener(gn, K), b.removeEventListener(vn, M))
          }
        )
      }
    }, [f.viewport, E, d, u, _]),
      h.useEffect(() => {
        a && !f.isClosePausedRef.current && _(E)
      }, [a, E, f.isClosePausedRef, _]),
      h.useEffect(() => (R(), () => L()), [R, L]))
    const P = h.useMemo(() => (m ? Ks(m) : null), [m])
    return f.viewport
      ? o.jsxs(o.Fragment, {
          children: [
            P &&
              o.jsx(_d, {
                __scopeToast: t,
                role: 'status',
                'aria-live': n === 'foreground' ? 'assertive' : 'polite',
                'aria-atomic': !0,
                children: P,
              }),
            o.jsx(yd, {
              scope: t,
              onClose: H,
              children: Pr.createPortal(
                o.jsx(Fn.ItemSlot, {
                  scope: t,
                  children: o.jsx(mc, {
                    asChild: !0,
                    onEscapeKeyDown: ie(i, () => {
                      ;(f.isFocusedToastEscapeKeyDownRef.current || H(),
                        (f.isFocusedToastEscapeKeyDownRef.current = !1))
                    }),
                    children: o.jsx(Ce.li, {
                      role: 'status',
                      'aria-live': 'off',
                      'aria-atomic': !0,
                      tabIndex: 0,
                      'data-state': a ? 'open' : 'closed',
                      'data-swipe-direction': f.swipeDirection,
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
                            ((f.isFocusedToastEscapeKeyDownRef.current = !0),
                            H()))
                      }),
                      onPointerDown: ie(e.onPointerDown, b => {
                        b.button === 0 &&
                          (C.current = { x: b.clientX, y: b.clientY })
                      }),
                      onPointerMove: ie(e.onPointerMove, b => {
                        if (!C.current) return
                        const M = b.clientX - C.current.x,
                          K = b.clientY - C.current.y,
                          U = !!k.current,
                          re = ['left', 'right'].includes(f.swipeDirection),
                          $ = ['left', 'up'].includes(f.swipeDirection)
                            ? Math.min
                            : Math.max,
                          ee = re ? $(0, M) : 0,
                          F = re ? 0 : $(0, K),
                          A = b.pointerType === 'touch' ? 10 : 2,
                          Q = { x: ee, y: F },
                          G = { originalEvent: b, delta: Q }
                        U
                          ? ((k.current = Q), pr(bd, g, G, { discrete: !1 }))
                          : Co(Q, f.swipeDirection, A)
                            ? ((k.current = Q),
                              pr(vd, p, G, { discrete: !1 }),
                              b.target.setPointerCapture(b.pointerId))
                            : (Math.abs(M) > A || Math.abs(K) > A) &&
                              (C.current = null)
                      }),
                      onPointerUp: ie(e.onPointerUp, b => {
                        const M = k.current,
                          K = b.target
                        if (
                          (K.hasPointerCapture(b.pointerId) &&
                            K.releasePointerCapture(b.pointerId),
                          (k.current = null),
                          (C.current = null),
                          M)
                        ) {
                          const U = b.currentTarget,
                            re = { originalEvent: b, delta: M }
                          ;(Co(M, f.swipeDirection, f.swipeThreshold)
                            ? pr(wd, c, re, { discrete: !0 })
                            : pr(xd, v, re, { discrete: !0 }),
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
                f.viewport
              ),
            }),
          ],
        })
      : null
  }),
  _d = e => {
    const { __scopeToast: r, children: t, ...n } = e,
      s = Dr(er, r),
      [a, l] = h.useState(!1),
      [i, d] = h.useState(!1)
    return (
      Ed(() => l(!0)),
      h.useEffect(() => {
        const u = window.setTimeout(() => d(!0), 1e3)
        return () => window.clearTimeout(u)
      }, []),
      i
        ? null
        : o.jsx(ds, {
            asChild: !0,
            children: o.jsx(cs, {
              ...n,
              children:
                a && o.jsxs(o.Fragment, { children: [s.label, ' ', t] }),
            }),
          })
    )
  },
  kd = 'ToastTitle',
  zs = h.forwardRef((e, r) => {
    const { __scopeToast: t, ...n } = e
    return o.jsx(Ce.div, { ...n, ref: r })
  })
zs.displayName = kd
var Nd = 'ToastDescription',
  Bs = h.forwardRef((e, r) => {
    const { __scopeToast: t, ...n } = e
    return o.jsx(Ce.div, { ...n, ref: r })
  })
Bs.displayName = Nd
var Us = 'ToastAction',
  Hs = h.forwardRef((e, r) => {
    const { altText: t, ...n } = e
    return t.trim()
      ? o.jsx(Ws, {
          altText: t,
          asChild: !0,
          children: o.jsx(zn, { ...n, ref: r }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Us}\`. Expected non-empty \`string\`.`
        ),
        null)
  })
Hs.displayName = Us
var Vs = 'ToastClose',
  zn = h.forwardRef((e, r) => {
    const { __scopeToast: t, ...n } = e,
      s = Sd(Vs, t)
    return o.jsx(Ws, {
      asChild: !0,
      children: o.jsx(Ce.button, {
        type: 'button',
        ...n,
        ref: r,
        onClick: ie(e.onClick, s.onClose),
      }),
    })
  })
zn.displayName = Vs
var Ws = h.forwardRef((e, r) => {
  const { __scopeToast: t, altText: n, ...s } = e
  return o.jsx(Ce.div, {
    'data-radix-toast-announce-exclude': '',
    'data-radix-toast-announce-alt': n || void 0,
    ...s,
    ref: r,
  })
})
function Ks(e) {
  const r = []
  return (
    Array.from(e.childNodes).forEach(n => {
      if (
        (n.nodeType === n.TEXT_NODE && n.textContent && r.push(n.textContent),
        jd(n))
      ) {
        const s = n.ariaHidden || n.hidden || n.style.display === 'none',
          a = n.dataset.radixToastAnnounceExclude === ''
        if (!s)
          if (a) {
            const l = n.dataset.radixToastAnnounceAlt
            l && r.push(l)
          } else r.push(...Ks(n))
      }
    }),
    r
  )
}
function pr(e, r, t, { discrete: n }) {
  const s = t.originalEvent.currentTarget,
    a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: t })
  ;(r && s.addEventListener(e, r, { once: !0 }),
    n ? us(s, a) : s.dispatchEvent(a))
}
var Co = (e, r, t = 0) => {
  const n = Math.abs(e.x),
    s = Math.abs(e.y),
    a = n > s
  return r === 'left' || r === 'right' ? a && n > t : !a && s > t
}
function Ed(e = () => {}) {
  const r = bt(e)
  gc(() => {
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
        const s = n.tagName === 'INPUT' && n.type === 'hidden'
        return n.disabled || n.hidden || s
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
      },
    })
  for (; t.nextNode(); ) r.push(t.currentNode)
  return r
}
function rn(e) {
  const r = document.activeElement
  return e.some(t => (t === r ? !0 : (t.focus(), document.activeElement !== r)))
}
var Rd = $s,
  Gs = Os,
  Ys = Fs,
  Zs = zs,
  qs = Bs,
  Xs = Hs,
  Qs = zn
function Js(e) {
  var r,
    t,
    n = ''
  if (typeof e == 'string' || typeof e == 'number') n += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var s = e.length
      for (r = 0; r < s; r++)
        e[r] && (t = Js(e[r])) && (n && (n += ' '), (n += t))
    } else for (t in e) e[t] && (n && (n += ' '), (n += t))
  return n
}
function Bn() {
  for (var e, r, t = 0, n = '', s = arguments.length; t < s; t++)
    (e = arguments[t]) && (r = Js(e)) && (n && (n += ' '), (n += r))
  return n
}
const _o = e => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
  ko = Bn,
  Ir = (e, r) => t => {
    var n
    if ((r == null ? void 0 : r.variants) == null)
      return ko(
        e,
        t == null ? void 0 : t.class,
        t == null ? void 0 : t.className
      )
    const { variants: s, defaultVariants: a } = r,
      l = Object.keys(s).map(u => {
        const p = t == null ? void 0 : t[u],
          g = a == null ? void 0 : a[u]
        if (p === null) return null
        const v = _o(p) || _o(g)
        return s[u][v]
      }),
      i =
        t &&
        Object.entries(t).reduce((u, p) => {
          let [g, v] = p
          return (v === void 0 || (u[g] = v), u)
        }, {}),
      d =
        r == null || (n = r.compoundVariants) === null || n === void 0
          ? void 0
          : n.reduce((u, p) => {
              let { class: g, className: v, ...c } = p
              return Object.entries(c).every(x => {
                let [f, m] = x
                return Array.isArray(m)
                  ? m.includes({ ...a, ...i }[f])
                  : { ...a, ...i }[f] === m
              })
                ? [...u, g, v]
                : u
            }, [])
    return ko(
      e,
      l,
      d,
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
 */ const Dd = e => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ve = (e, r) => {
  const t = h.forwardRef(
    (
      {
        color: n = 'currentColor',
        size: s = 24,
        strokeWidth: a = 2,
        absoluteStrokeWidth: l,
        className: i = '',
        children: d,
        ...u
      },
      p
    ) =>
      h.createElement(
        'svg',
        {
          ref: p,
          ...Pd,
          width: s,
          height: s,
          stroke: n,
          strokeWidth: l ? (Number(a) * 24) / Number(s) : a,
          className: ['lucide', `lucide-${Dd(e)}`, i].join(' '),
          ...u,
        },
        [
          ...r.map(([g, v]) => h.createElement(g, v)),
          ...(Array.isArray(d) ? d : [d]),
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
 */ const tr = ve('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Un = ve('ChevronDown', [
  ['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Id = ve('ChevronRight', [
  ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ad = ve('ChevronUp', [
  ['path', { d: 'm18 15-6-6-6 6', key: '153udz' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $d = ve('CircleAlert', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
  ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Md = ve('CircleCheckBig', [
  ['path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', key: 'g774vq' }],
  ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Od = ve('CircleHelp', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ld = ve('CircleMinus', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M8 12h8', key: '1wcyev' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fd = ve('CirclePlus', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M8 12h8', key: '1wcyev' }],
  ['path', { d: 'M12 8v8', key: 'napkw2' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ea = ve('Circle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zd = ve('Delete', [
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
 */ const Bd = ve('Download', [
  ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ['polyline', { points: '7 10 12 15 17 10', key: '2ggqvy' }],
  ['line', { x1: '12', x2: '12', y1: '15', y2: '3', key: '1vk2je' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ud = ve('FileArchive', [
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
 */ const ta = ve('FileText', [
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
 */ const Hd = ve('Gauge', [
  ['path', { d: 'm12 14 4-4', key: '9kzdfg' }],
  ['path', { d: 'M3.34 19a10 10 0 1 1 17.32 0', key: '19p75a' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vd = ve('Home', [
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
 */ const Wd = ve('Info', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['path', { d: 'M12 16v-4', key: '1dtifu' }],
  ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kd = ve('Keyboard', [
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
 */ const Gd = ve('Menu', [
  ['line', { x1: '4', x2: '20', y1: '12', y2: '12', key: '1e0a9i' }],
  ['line', { x1: '4', x2: '20', y1: '6', y2: '6', key: '1owob3' }],
  ['line', { x1: '4', x2: '20', y1: '18', y2: '18', key: 'yk5zj1' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yd = ve('MessageCircle', [
  ['path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z', key: 'vv11sd' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hn = ve('MicOff', [
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
 */ const Ot = ve('Mic', [
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
 */ const Zd = ve('Minus', [['path', { d: 'M5 12h14', key: '1ays0h' }]])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qd = ve('Package', [
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
 */ const Xd = ve('Play', [
  ['polygon', { points: '6 3 20 12 6 21 6 3', key: '1oa8hb' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const At = ve('Plus', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'M12 5v14', key: 's699le' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qd = ve('RefreshCw', [
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
 */ const Jd = ve('Settings', [
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
 */ const No = ve('Share', [
  ['path', { d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8', key: '1b2hhj' }],
  ['polyline', { points: '16 6 12 2 8 6', key: 'm901s6' }],
  ['line', { x1: '12', x2: '12', y1: '2', y2: '15', key: '1p0rca' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eu = ve('Smartphone', [
  [
    'rect',
    {
      width: '14',
      height: '20',
      x: '5',
      y: '2',
      rx: '2',
      ry: '2',
      key: '1yt0o3',
    },
  ],
  ['path', { d: 'M12 18h.01', key: 'mhygvu' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tu = ve('Square', [
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
 */ const ra = ve('Trash2', [
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
 */ const ru = ve('TriangleAlert', [
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
 */ const nu = ve('Truck', [
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
 */ const ou = ve('User', [
  ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
  ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const su = ve('Volume2', [
  ['polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5', key: '16drj5' }],
  ['path', { d: 'M15.54 8.46a5 5 0 0 1 0 7.07', key: 'ltjumu' }],
  ['path', { d: 'M19.07 4.93a10 10 0 0 1 0 14.14', key: '1kegas' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const au = ve('Volume', [
  ['polygon', { points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5', key: '16drj5' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iu = ve('WifiOff', [
  ['path', { d: 'M12 20h.01', key: 'zekei9' }],
  ['path', { d: 'M8.5 16.429a5 5 0 0 1 7 0', key: '1bycff' }],
  ['path', { d: 'M5 12.859a10 10 0 0 1 5.17-2.69', key: '1dl1wf' }],
  ['path', { d: 'M19 12.859a10 10 0 0 0-2.007-1.523', key: '4k23kn' }],
  ['path', { d: 'M2 8.82a15 15 0 0 1 4.177-2.643', key: '1grhjp' }],
  ['path', { d: 'M22 8.82a15 15 0 0 0-11.288-3.764', key: 'z3jwby' }],
  ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lu = ve('Wifi', [
  ['path', { d: 'M12 20h.01', key: 'zekei9' }],
  ['path', { d: 'M2 8.82a15 15 0 0 1 20 0', key: 'dnpr2z' }],
  ['path', { d: 'M5 12.859a10 10 0 0 1 14 0', key: '1x1e6c' }],
  ['path', { d: 'M8.5 16.429a5 5 0 0 1 7 0', key: '1bycff' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ar = ve('X', [
  ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
  ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
])
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vn = ve('Zap', [
    [
      'path',
      {
        d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z',
        key: '1xq2db',
      },
    ],
  ]),
  Wn = '-',
  cu = e => {
    const r = uu(e),
      { conflictingClassGroups: t, conflictingClassGroupModifiers: n } = e
    return {
      getClassGroupId: l => {
        const i = l.split(Wn)
        return (i[0] === '' && i.length !== 1 && i.shift(), na(i, r) || du(l))
      },
      getConflictingClassGroupIds: (l, i) => {
        const d = t[l] || []
        return i && n[l] ? [...d, ...n[l]] : d
      },
    }
  },
  na = (e, r) => {
    var l
    if (e.length === 0) return r.classGroupId
    const t = e[0],
      n = r.nextPart.get(t),
      s = n ? na(e.slice(1), n) : void 0
    if (s) return s
    if (r.validators.length === 0) return
    const a = e.join(Wn)
    return (l = r.validators.find(({ validator: i }) => i(a))) == null
      ? void 0
      : l.classGroupId
  },
  Eo = /^\[(.+)\]$/,
  du = e => {
    if (Eo.test(e)) {
      const r = Eo.exec(e)[1],
        t = r == null ? void 0 : r.substring(0, r.indexOf(':'))
      if (t) return 'arbitrary..' + t
    }
  },
  uu = e => {
    const { theme: r, prefix: t } = e,
      n = { nextPart: new Map(), validators: [] }
    return (
      hu(Object.entries(e.classGroups), t).forEach(([a, l]) => {
        xn(l, n, a, r)
      }),
      n
    )
  },
  xn = (e, r, t, n) => {
    e.forEach(s => {
      if (typeof s == 'string') {
        const a = s === '' ? r : jo(r, s)
        a.classGroupId = t
        return
      }
      if (typeof s == 'function') {
        if (fu(s)) {
          xn(s(n), r, t, n)
          return
        }
        r.validators.push({ validator: s, classGroupId: t })
        return
      }
      Object.entries(s).forEach(([a, l]) => {
        xn(l, jo(r, a), t, n)
      })
    })
  },
  jo = (e, r) => {
    let t = e
    return (
      r.split(Wn).forEach(n => {
        ;(t.nextPart.has(n) ||
          t.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (t = t.nextPart.get(n)))
      }),
      t
    )
  },
  fu = e => e.isThemeGetter,
  hu = (e, r) =>
    r
      ? e.map(([t, n]) => {
          const s = n.map(a =>
            typeof a == 'string'
              ? r + a
              : typeof a == 'object'
                ? Object.fromEntries(
                    Object.entries(a).map(([l, i]) => [r + l, i])
                  )
                : a
          )
          return [t, s]
        })
      : e,
  pu = e => {
    if (e < 1) return { get: () => {}, set: () => {} }
    let r = 0,
      t = new Map(),
      n = new Map()
    const s = (a, l) => {
      ;(t.set(a, l), r++, r > e && ((r = 0), (n = t), (t = new Map())))
    }
    return {
      get(a) {
        let l = t.get(a)
        if (l !== void 0) return l
        if ((l = n.get(a)) !== void 0) return (s(a, l), l)
      },
      set(a, l) {
        t.has(a) ? t.set(a, l) : s(a, l)
      },
    }
  },
  oa = '!',
  mu = e => {
    const { separator: r, experimentalParseClassName: t } = e,
      n = r.length === 1,
      s = r[0],
      a = r.length,
      l = i => {
        const d = []
        let u = 0,
          p = 0,
          g
        for (let m = 0; m < i.length; m++) {
          let w = i[m]
          if (u === 0) {
            if (w === s && (n || i.slice(m, m + a) === r)) {
              ;(d.push(i.slice(p, m)), (p = m + a))
              continue
            }
            if (w === '/') {
              g = m
              continue
            }
          }
          w === '[' ? u++ : w === ']' && u--
        }
        const v = d.length === 0 ? i : i.substring(p),
          c = v.startsWith(oa),
          x = c ? v.substring(1) : v,
          f = g && g > p ? g - p : void 0
        return {
          modifiers: d,
          hasImportantModifier: c,
          baseClassName: x,
          maybePostfixModifierPosition: f,
        }
      }
    return t ? i => t({ className: i, parseClassName: l }) : l
  },
  gu = e => {
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
  vu = e => ({ cache: pu(e.cacheSize), parseClassName: mu(e), ...cu(e) }),
  bu = /\s+/,
  xu = (e, r) => {
    const {
        parseClassName: t,
        getClassGroupId: n,
        getConflictingClassGroupIds: s,
      } = r,
      a = [],
      l = e.trim().split(bu)
    let i = ''
    for (let d = l.length - 1; d >= 0; d -= 1) {
      const u = l[d],
        {
          modifiers: p,
          hasImportantModifier: g,
          baseClassName: v,
          maybePostfixModifierPosition: c,
        } = t(u)
      let x = !!c,
        f = n(x ? v.substring(0, c) : v)
      if (!f) {
        if (!x) {
          i = u + (i.length > 0 ? ' ' + i : i)
          continue
        }
        if (((f = n(v)), !f)) {
          i = u + (i.length > 0 ? ' ' + i : i)
          continue
        }
        x = !1
      }
      const m = gu(p).join(':'),
        w = g ? m + oa : m,
        S = w + f
      if (a.includes(S)) continue
      a.push(S)
      const C = s(f, x)
      for (let k = 0; k < C.length; ++k) {
        const E = C[k]
        a.push(w + E)
      }
      i = u + (i.length > 0 ? ' ' + i : i)
    }
    return i
  }
function wu() {
  let e = 0,
    r,
    t,
    n = ''
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = sa(r)) && (n && (n += ' '), (n += t))
  return n
}
const sa = e => {
  if (typeof e == 'string') return e
  let r,
    t = ''
  for (let n = 0; n < e.length; n++)
    e[n] && (r = sa(e[n])) && (t && (t += ' '), (t += r))
  return t
}
function yu(e, ...r) {
  let t,
    n,
    s,
    a = l
  function l(d) {
    const u = r.reduce((p, g) => g(p), e())
    return ((t = vu(u)), (n = t.cache.get), (s = t.cache.set), (a = i), i(d))
  }
  function i(d) {
    const u = n(d)
    if (u) return u
    const p = xu(d, t)
    return (s(d, p), p)
  }
  return function () {
    return a(wu.apply(null, arguments))
  }
}
const ke = e => {
    const r = t => t[e] || []
    return ((r.isThemeGetter = !0), r)
  },
  aa = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Su = /^\d+\/\d+$/,
  Cu = new Set(['px', 'full', 'screen']),
  _u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ku =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Nu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Eu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ju =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Qe = e => Pt(e) || Cu.has(e) || Su.test(e),
  it = e => Lt(e, 'length', Mu),
  Pt = e => !!e && !Number.isNaN(Number(e)),
  nn = e => Lt(e, 'number', Pt),
  Ht = e => !!e && Number.isInteger(Number(e)),
  Tu = e => e.endsWith('%') && Pt(e.slice(0, -1)),
  ge = e => aa.test(e),
  lt = e => _u.test(e),
  Ru = new Set(['length', 'size', 'percentage']),
  Pu = e => Lt(e, Ru, ia),
  Du = e => Lt(e, 'position', ia),
  Iu = new Set(['image', 'url']),
  Au = e => Lt(e, Iu, Lu),
  $u = e => Lt(e, '', Ou),
  Vt = () => !0,
  Lt = (e, r, t) => {
    const n = aa.exec(e)
    return n
      ? n[1]
        ? typeof r == 'string'
          ? n[1] === r
          : r.has(n[1])
        : t(n[2])
      : !1
  },
  Mu = e => ku.test(e) && !Nu.test(e),
  ia = () => !1,
  Ou = e => Eu.test(e),
  Lu = e => ju.test(e),
  Fu = () => {
    const e = ke('colors'),
      r = ke('spacing'),
      t = ke('blur'),
      n = ke('brightness'),
      s = ke('borderColor'),
      a = ke('borderRadius'),
      l = ke('borderSpacing'),
      i = ke('borderWidth'),
      d = ke('contrast'),
      u = ke('grayscale'),
      p = ke('hueRotate'),
      g = ke('invert'),
      v = ke('gap'),
      c = ke('gradientColorStops'),
      x = ke('gradientColorStopPositions'),
      f = ke('inset'),
      m = ke('margin'),
      w = ke('opacity'),
      S = ke('padding'),
      C = ke('saturate'),
      k = ke('scale'),
      E = ke('sepia'),
      I = ke('skew'),
      T = ke('space'),
      D = ke('translate'),
      R = () => ['auto', 'contain', 'none'],
      L = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      H = () => ['auto', ge, r],
      _ = () => [ge, r],
      P = () => ['', Qe, it],
      b = () => ['auto', Pt, ge],
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
      $ = () => ['', '0', ge],
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
      F = () => [Pt, ge]
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [Vt],
        spacing: [Qe, it],
        blur: ['none', '', lt, ge],
        brightness: F(),
        borderColor: [e],
        borderRadius: ['none', '', 'full', lt, ge],
        borderSpacing: _(),
        borderWidth: P(),
        contrast: F(),
        grayscale: $(),
        hueRotate: F(),
        invert: $(),
        gap: _(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Tu, it],
        inset: H(),
        margin: H(),
        opacity: F(),
        padding: _(),
        saturate: F(),
        scale: F(),
        sepia: $(),
        skew: F(),
        space: _(),
        translate: _(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', ge] }],
        container: ['container'],
        columns: [{ columns: [lt] }],
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
        'object-position': [{ object: [...M(), ge] }],
        overflow: [{ overflow: L() }],
        'overflow-x': [{ 'overflow-x': L() }],
        'overflow-y': [{ 'overflow-y': L() }],
        overscroll: [{ overscroll: R() }],
        'overscroll-x': [{ 'overscroll-x': R() }],
        'overscroll-y': [{ 'overscroll-y': R() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [f] }],
        'inset-x': [{ 'inset-x': [f] }],
        'inset-y': [{ 'inset-y': [f] }],
        start: [{ start: [f] }],
        end: [{ end: [f] }],
        top: [{ top: [f] }],
        right: [{ right: [f] }],
        bottom: [{ bottom: [f] }],
        left: [{ left: [f] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', Ht, ge] }],
        basis: [{ basis: H() }],
        'flex-direction': [
          { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
        ],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', ge] }],
        grow: [{ grow: $() }],
        shrink: [{ shrink: $() }],
        order: [{ order: ['first', 'last', 'none', Ht, ge] }],
        'grid-cols': [{ 'grid-cols': [Vt] }],
        'col-start-end': [{ col: ['auto', { span: ['full', Ht, ge] }, ge] }],
        'col-start': [{ 'col-start': b() }],
        'col-end': [{ 'col-end': b() }],
        'grid-rows': [{ 'grid-rows': [Vt] }],
        'row-start-end': [{ row: ['auto', { span: [Ht, ge] }, ge] }],
        'row-start': [{ 'row-start': b() }],
        'row-end': [{ 'row-end': b() }],
        'grid-flow': [
          { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
        ],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', ge] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', ge] }],
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
        m: [{ m: [m] }],
        mx: [{ mx: [m] }],
        my: [{ my: [m] }],
        ms: [{ ms: [m] }],
        me: [{ me: [m] }],
        mt: [{ mt: [m] }],
        mr: [{ mr: [m] }],
        mb: [{ mb: [m] }],
        ml: [{ ml: [m] }],
        'space-x': [{ 'space-x': [T] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [T] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', ge, r] }],
        'min-w': [{ 'min-w': [ge, r, 'min', 'max', 'fit'] }],
        'max-w': [
          {
            'max-w': [
              ge,
              r,
              'none',
              'full',
              'min',
              'max',
              'fit',
              'prose',
              { screen: [lt] },
              lt,
            ],
          },
        ],
        h: [{ h: [ge, r, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [
          { 'min-h': [ge, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
        ],
        'max-h': [
          { 'max-h': [ge, r, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
        ],
        size: [{ size: [ge, r, 'auto', 'min', 'max', 'fit'] }],
        'font-size': [{ text: ['base', lt, it] }],
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
              nn,
            ],
          },
        ],
        'font-family': [{ font: [Vt] }],
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
              ge,
            ],
          },
        ],
        'line-clamp': [{ 'line-clamp': ['none', Pt, nn] }],
        leading: [
          {
            leading: [
              'none',
              'tight',
              'snug',
              'normal',
              'relaxed',
              'loose',
              Qe,
              ge,
            ],
          },
        ],
        'list-image': [{ 'list-image': ['none', ge] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', ge] }],
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
          { decoration: ['auto', 'from-font', Qe, it] },
        ],
        'underline-offset': [{ 'underline-offset': ['auto', Qe, ge] }],
        'text-decoration-color': [{ decoration: [e] }],
        'text-transform': [
          'uppercase',
          'lowercase',
          'capitalize',
          'normal-case',
        ],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: _() }],
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
              ge,
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
        content: [{ content: ['none', ge] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [w] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...M(), Du] }],
        'bg-repeat': [
          { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] },
        ],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', Pu] }],
        'bg-image': [
          {
            bg: [
              'none',
              { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
              Au,
            ],
          },
        ],
        'bg-color': [{ bg: [e] }],
        'gradient-from-pos': [{ from: [x] }],
        'gradient-via-pos': [{ via: [x] }],
        'gradient-to-pos': [{ to: [x] }],
        'gradient-from': [{ from: [c] }],
        'gradient-via': [{ via: [c] }],
        'gradient-to': [{ to: [c] }],
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
        'border-color': [{ border: [s] }],
        'border-color-x': [{ 'border-x': [s] }],
        'border-color-y': [{ 'border-y': [s] }],
        'border-color-s': [{ 'border-s': [s] }],
        'border-color-e': [{ 'border-e': [s] }],
        'border-color-t': [{ 'border-t': [s] }],
        'border-color-r': [{ 'border-r': [s] }],
        'border-color-b': [{ 'border-b': [s] }],
        'border-color-l': [{ 'border-l': [s] }],
        'divide-color': [{ divide: [s] }],
        'outline-style': [{ outline: ['', ...K()] }],
        'outline-offset': [{ 'outline-offset': [Qe, ge] }],
        'outline-w': [{ outline: [Qe, it] }],
        'outline-color': [{ outline: [e] }],
        'ring-w': [{ ring: P() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [e] }],
        'ring-opacity': [{ 'ring-opacity': [w] }],
        'ring-offset-w': [{ 'ring-offset': [Qe, it] }],
        'ring-offset-color': [{ 'ring-offset': [e] }],
        shadow: [{ shadow: ['', 'inner', 'none', lt, $u] }],
        'shadow-color': [{ shadow: [Vt] }],
        opacity: [{ opacity: [w] }],
        'mix-blend': [{ 'mix-blend': [...U(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': U() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [t] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [d] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', lt, ge] }],
        grayscale: [{ grayscale: [u] }],
        'hue-rotate': [{ 'hue-rotate': [p] }],
        invert: [{ invert: [g] }],
        saturate: [{ saturate: [C] }],
        sepia: [{ sepia: [E] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [t] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [n] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [d] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [p] }],
        'backdrop-invert': [{ 'backdrop-invert': [g] }],
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
              ge,
            ],
          },
        ],
        duration: [{ duration: F() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', ge] }],
        delay: [{ delay: F() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', ge] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [k] }],
        'scale-x': [{ 'scale-x': [k] }],
        'scale-y': [{ 'scale-y': [k] }],
        rotate: [{ rotate: [Ht, ge] }],
        'translate-x': [{ 'translate-x': [D] }],
        'translate-y': [{ 'translate-y': [D] }],
        'skew-x': [{ 'skew-x': [I] }],
        'skew-y': [{ 'skew-y': [I] }],
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
              ge,
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
              ge,
            ],
          },
        ],
        'caret-color': [{ caret: [e] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': _() }],
        'scroll-mx': [{ 'scroll-mx': _() }],
        'scroll-my': [{ 'scroll-my': _() }],
        'scroll-ms': [{ 'scroll-ms': _() }],
        'scroll-me': [{ 'scroll-me': _() }],
        'scroll-mt': [{ 'scroll-mt': _() }],
        'scroll-mr': [{ 'scroll-mr': _() }],
        'scroll-mb': [{ 'scroll-mb': _() }],
        'scroll-ml': [{ 'scroll-ml': _() }],
        'scroll-p': [{ 'scroll-p': _() }],
        'scroll-px': [{ 'scroll-px': _() }],
        'scroll-py': [{ 'scroll-py': _() }],
        'scroll-ps': [{ 'scroll-ps': _() }],
        'scroll-pe': [{ 'scroll-pe': _() }],
        'scroll-pt': [{ 'scroll-pt': _() }],
        'scroll-pr': [{ 'scroll-pr': _() }],
        'scroll-pb': [{ 'scroll-pb': _() }],
        'scroll-pl': [{ 'scroll-pl': _() }],
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
          { 'will-change': ['auto', 'scroll', 'contents', 'transform', ge] },
        ],
        fill: [{ fill: [e, 'none'] }],
        'stroke-w': [{ stroke: [Qe, it, nn] }],
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
  la = yu(Fu)
function le(...e) {
  return la(Bn(e))
}
const zu = Rd,
  ca = h.forwardRef(({ className: e, ...r }, t) =>
    o.jsx(Gs, {
      ref: t,
      className: le(
        'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
        e
      ),
      ...r,
    })
  )
ca.displayName = Gs.displayName
const Bu = Ir(
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
  da = h.forwardRef(({ className: e, variant: r, ...t }, n) =>
    o.jsx(Ys, { ref: n, className: le(Bu({ variant: r }), e), ...t })
  )
da.displayName = Ys.displayName
const Uu = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(Xs, {
    ref: t,
    className: le(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      e
    ),
    ...r,
  })
)
Uu.displayName = Xs.displayName
const ua = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(Qs, {
    ref: t,
    className: le(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      e
    ),
    'toast-close': '',
    ...r,
    children: o.jsx(Ar, { className: 'h-4 w-4' }),
  })
)
ua.displayName = Qs.displayName
const fa = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(Zs, { ref: t, className: le('text-sm font-semibold', e), ...r })
)
fa.displayName = Zs.displayName
const ha = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(qs, { ref: t, className: le('text-sm opacity-90', e), ...r })
)
ha.displayName = qs.displayName
function Hu() {
  const { toasts: e } = Is()
  return o.jsxs(zu, {
    children: [
      e.map(function ({ id: r, title: t, description: n, action: s, ...a }) {
        return o.jsxs(
          da,
          {
            ...a,
            children: [
              o.jsxs('div', {
                className: 'grid gap-1',
                children: [
                  t && o.jsx(fa, { children: t }),
                  n && o.jsx(ha, { children: n }),
                ],
              }),
              s,
              o.jsx(ua, {}),
            ],
          },
          r
        )
      }),
      o.jsx(ca, {}),
    ],
  })
}
const Kn = vc,
  pa = bc,
  ma = xc,
  Gn = h.forwardRef(({ className: e, sideOffset: r = 4, ...t }, n) =>
    o.jsx(fs, {
      ref: n,
      sideOffset: r,
      className: le(
        'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        e
      ),
      ...t,
    })
  )
Gn.displayName = fs.displayName
const ga = {
    id: '1',
    username: 'user1',
    displayName: 'Warehouse Manager',
    role: 'manager',
  },
  va = h.createContext({ currentUser: ga, updateUser: () => {} }),
  ba = ({ children: e }) => {
    const [r, t] = h.useState(ga)
    h.useEffect(() => {
      const s = localStorage.getItem('currentUser')
      s && t(JSON.parse(s))
    }, [])
    const n = s => {
      ;(t(s), localStorage.setItem('currentUser', JSON.stringify(s)))
    }
    return o.jsx(va.Provider, {
      value: { currentUser: r, updateUser: n },
      children: e,
    })
  },
  rr = () => h.useContext(va),
  et = h.forwardRef(({ className: e, ...r }, t) =>
    o.jsx('div', {
      ref: t,
      className: le(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        e
      ),
      ...r,
    })
  )
et.displayName = 'Card'
const ht = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('div', {
    ref: t,
    className: le('flex flex-col space-y-1.5 p-6', e),
    ...r,
  })
)
ht.displayName = 'CardHeader'
const tt = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('h3', {
    ref: t,
    className: le('text-2xl font-semibold leading-none tracking-tight', e),
    ...r,
  })
)
tt.displayName = 'CardTitle'
const xa = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('p', {
    ref: t,
    className: le('text-sm text-muted-foreground', e),
    ...r,
  })
)
xa.displayName = 'CardDescription'
const pt = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('div', { ref: t, className: le('p-6 pt-0', e), ...r })
)
pt.displayName = 'CardContent'
const Vu = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('div', { ref: t, className: le('flex items-center p-6 pt-0', e), ...r })
)
Vu.displayName = 'CardFooter'
const Wu = Ir(
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
  fe = h.forwardRef(
    ({ className: e, variant: r, size: t, asChild: n = !1, ...s }, a) => {
      const l = n ? wc : 'button'
      return o.jsx(l, {
        className: le(Wu({ variant: r, size: t, className: e })),
        ref: a,
        ...s,
      })
    }
  )
fe.displayName = 'Button'
var Ku = e => {
    switch (e) {
      case 'success':
        return Zu
      case 'info':
        return Xu
      case 'warning':
        return qu
      case 'error':
        return Qu
      default:
        return null
    }
  },
  Gu = Array(12).fill(0),
  Yu = ({ visible: e, className: r }) =>
    X.createElement(
      'div',
      {
        className: ['sonner-loading-wrapper', r].filter(Boolean).join(' '),
        'data-visible': e,
      },
      X.createElement(
        'div',
        { className: 'sonner-spinner' },
        Gu.map((t, n) =>
          X.createElement('div', {
            className: 'sonner-loading-bar',
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  Zu = X.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    X.createElement('path', {
      fillRule: 'evenodd',
      d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
      clipRule: 'evenodd',
    })
  ),
  qu = X.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    X.createElement('path', {
      fillRule: 'evenodd',
      d: 'M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z',
      clipRule: 'evenodd',
    })
  ),
  Xu = X.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    X.createElement('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
      clipRule: 'evenodd',
    })
  ),
  Qu = X.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    X.createElement('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
      clipRule: 'evenodd',
    })
  ),
  Ju = X.createElement(
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
    X.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
    X.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
  ),
  ef = () => {
    let [e, r] = X.useState(document.hidden)
    return (
      X.useEffect(() => {
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
  wn = 1,
  tf = class {
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
            s =
              typeof (e == null ? void 0 : e.id) == 'number' ||
              ((r = e.id) == null ? void 0 : r.length) > 0
                ? e.id
                : wn++,
            a = this.toasts.find(i => i.id === s),
            l = e.dismissible === void 0 ? !0 : e.dismissible
          return (
            this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            a
              ? (this.toasts = this.toasts.map(i =>
                  i.id === s
                    ? (this.publish({ ...i, ...e, id: s, title: t }),
                      { ...i, ...e, id: s, dismissible: l, title: t })
                    : i
                ))
              : this.addToast({ title: t, ...n, dismissible: l, id: s }),
            s
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
            s = t !== void 0,
            a,
            l = n
              .then(async d => {
                if (((a = ['resolve', d]), X.isValidElement(d)))
                  ((s = !1),
                    this.create({ id: t, type: 'default', message: d }))
                else if (nf(d) && !d.ok) {
                  s = !1
                  let u =
                      typeof r.error == 'function'
                        ? await r.error(`HTTP error! status: ${d.status}`)
                        : r.error,
                    p =
                      typeof r.description == 'function'
                        ? await r.description(`HTTP error! status: ${d.status}`)
                        : r.description
                  this.create({
                    id: t,
                    type: 'error',
                    message: u,
                    description: p,
                  })
                } else if (r.success !== void 0) {
                  s = !1
                  let u =
                      typeof r.success == 'function'
                        ? await r.success(d)
                        : r.success,
                    p =
                      typeof r.description == 'function'
                        ? await r.description(d)
                        : r.description
                  this.create({
                    id: t,
                    type: 'success',
                    message: u,
                    description: p,
                  })
                }
              })
              .catch(async d => {
                if (((a = ['reject', d]), r.error !== void 0)) {
                  s = !1
                  let u =
                      typeof r.error == 'function' ? await r.error(d) : r.error,
                    p =
                      typeof r.description == 'function'
                        ? await r.description(d)
                        : r.description
                  this.create({
                    id: t,
                    type: 'error',
                    message: u,
                    description: p,
                  })
                }
              })
              .finally(() => {
                var d
                ;(s && (this.dismiss(t), (t = void 0)),
                  (d = r.finally) == null || d.call(r))
              }),
            i = () =>
              new Promise((d, u) =>
                l.then(() => (a[0] === 'reject' ? u(a[1]) : d(a[1]))).catch(u)
              )
          return typeof t != 'string' && typeof t != 'number'
            ? { unwrap: i }
            : Object.assign(t, { unwrap: i })
        }),
        (this.custom = (e, r) => {
          let t = (r == null ? void 0 : r.id) || wn++
          return (this.create({ jsx: e(t), id: t, ...r }), t)
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter(e => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()))
    }
  },
  $e = new tf(),
  rf = (e, r) => {
    let t = (r == null ? void 0 : r.id) || wn++
    return ($e.addToast({ title: e, ...r, id: t }), t)
  },
  nf = e =>
    e &&
    typeof e == 'object' &&
    'ok' in e &&
    typeof e.ok == 'boolean' &&
    'status' in e &&
    typeof e.status == 'number',
  of = rf,
  sf = () => $e.toasts,
  af = () => $e.getActiveToasts(),
  ce = Object.assign(
    of,
    {
      success: $e.success,
      info: $e.info,
      warning: $e.warning,
      error: $e.error,
      custom: $e.custom,
      message: $e.message,
      promise: $e.promise,
      dismiss: $e.dismiss,
      loading: $e.loading,
    },
    { getHistory: sf, getToasts: af }
  )
function lf(e, { insertAt: r } = {}) {
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
lf(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`)
function mr(e) {
  return e.label !== void 0
}
var cf = 3,
  df = '32px',
  uf = '16px',
  To = 4e3,
  ff = 356,
  hf = 14,
  pf = 20,
  mf = 200
function We(...e) {
  return e.filter(Boolean).join(' ')
}
function gf(e) {
  let [r, t] = e.split('-'),
    n = []
  return (r && n.push(r), t && n.push(t), n)
}
var vf = e => {
  var r, t, n, s, a, l, i, d, u, p, g
  let {
      invert: v,
      toast: c,
      unstyled: x,
      interacting: f,
      setHeights: m,
      visibleToasts: w,
      heights: S,
      index: C,
      toasts: k,
      expanded: E,
      removeToast: I,
      defaultRichColors: T,
      closeButton: D,
      style: R,
      cancelButtonStyle: L,
      actionButtonStyle: H,
      className: _ = '',
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
    [Q, G] = X.useState(null),
    [Y, he] = X.useState(null),
    [J, ne] = X.useState(!1),
    [ae, ue] = X.useState(!1),
    [de, pe] = X.useState(!1),
    [ye, y] = X.useState(!1),
    [V, B] = X.useState(!1),
    [j, N] = X.useState(0),
    [O, W] = X.useState(0),
    Z = X.useRef(c.duration || b || To),
    z = X.useRef(null),
    q = X.useRef(null),
    oe = C === 0,
    te = C + 1 <= w,
    se = c.type,
    xe = c.dismissible !== !1,
    be = c.className || '',
    Ae = c.descriptionClassName || '',
    Ye = X.useMemo(
      () => S.findIndex(me => me.toastId === c.id) || 0,
      [S, c.id]
    ),
    Oe = X.useMemo(() => {
      var me
      return (me = c.closeButton) != null ? me : D
    }, [c.closeButton, D]),
    ot = X.useMemo(() => c.duration || b || To, [c.duration, b]),
    _e = X.useRef(0),
    ze = X.useRef(0),
    kt = X.useRef(0),
    Pe = X.useRef(null),
    [lr, Jr] = M.split('-'),
    cr = X.useMemo(
      () => S.reduce((me, Se, Ne) => (Ne >= Ye ? me : me + Se.height), 0),
      [S, Ye]
    ),
    dr = ef(),
    ur = c.invert || v,
    Xe = se === 'loading'
  ;((ze.current = X.useMemo(() => Ye * K + cr, [Ye, cr])),
    X.useEffect(() => {
      Z.current = ot
    }, [ot]),
    X.useEffect(() => {
      ne(!0)
    }, []),
    X.useEffect(() => {
      let me = q.current
      if (me) {
        let Se = me.getBoundingClientRect().height
        return (
          W(Se),
          m(Ne => [{ toastId: c.id, height: Se, position: c.position }, ...Ne]),
          () => m(Ne => Ne.filter(Be => Be.toastId !== c.id))
        )
      }
    }, [m, c.id]),
    X.useLayoutEffect(() => {
      if (!J) return
      let me = q.current,
        Se = me.style.height
      me.style.height = 'auto'
      let Ne = me.getBoundingClientRect().height
      ;((me.style.height = Se),
        W(Ne),
        m(Be =>
          Be.find(Ue => Ue.toastId === c.id)
            ? Be.map(Ue => (Ue.toastId === c.id ? { ...Ue, height: Ne } : Ue))
            : [{ toastId: c.id, height: Ne, position: c.position }, ...Be]
        ))
    }, [J, c.title, c.description, m, c.id]))
  let Me = X.useCallback(() => {
    ;(ue(!0),
      N(ze.current),
      m(me => me.filter(Se => Se.toastId !== c.id)),
      setTimeout(() => {
        I(c)
      }, mf))
  }, [c, I, m, ze])
  ;(X.useEffect(() => {
    if (
      (c.promise && se === 'loading') ||
      c.duration === 1 / 0 ||
      c.type === 'loading'
    )
      return
    let me
    return (
      E || f || (A && dr)
        ? (() => {
            if (kt.current < _e.current) {
              let Se = new Date().getTime() - _e.current
              Z.current = Z.current - Se
            }
            kt.current = new Date().getTime()
          })()
        : Z.current !== 1 / 0 &&
          ((_e.current = new Date().getTime()),
          (me = setTimeout(() => {
            var Se
            ;((Se = c.onAutoClose) == null || Se.call(c, c), Me())
          }, Z.current))),
      () => clearTimeout(me)
    )
  }, [E, f, c, se, A, dr, Me]),
    X.useEffect(() => {
      c.delete && Me()
    }, [Me, c.delete]))
  function uc() {
    var me, Se, Ne
    return ee != null && ee.loading
      ? X.createElement(
          'div',
          {
            className: We(
              $ == null ? void 0 : $.loader,
              (me = c == null ? void 0 : c.classNames) == null
                ? void 0
                : me.loader,
              'sonner-loader'
            ),
            'data-visible': se === 'loading',
          },
          ee.loading
        )
      : U
        ? X.createElement(
            'div',
            {
              className: We(
                $ == null ? void 0 : $.loader,
                (Se = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : Se.loader,
                'sonner-loader'
              ),
              'data-visible': se === 'loading',
            },
            U
          )
        : X.createElement(Yu, {
            className: We(
              $ == null ? void 0 : $.loader,
              (Ne = c == null ? void 0 : c.classNames) == null
                ? void 0
                : Ne.loader
            ),
            visible: se === 'loading',
          })
  }
  return X.createElement(
    'li',
    {
      tabIndex: 0,
      ref: q,
      className: We(
        _,
        be,
        $ == null ? void 0 : $.toast,
        (r = c == null ? void 0 : c.classNames) == null ? void 0 : r.toast,
        $ == null ? void 0 : $.default,
        $ == null ? void 0 : $[se],
        (t = c == null ? void 0 : c.classNames) == null ? void 0 : t[se]
      ),
      'data-sonner-toast': '',
      'data-rich-colors': (n = c.richColors) != null ? n : T,
      'data-styled': !(c.jsx || c.unstyled || x),
      'data-mounted': J,
      'data-promise': !!c.promise,
      'data-swiped': V,
      'data-removed': ae,
      'data-visible': te,
      'data-y-position': lr,
      'data-x-position': Jr,
      'data-index': C,
      'data-front': oe,
      'data-swiping': de,
      'data-dismissible': xe,
      'data-type': se,
      'data-invert': ur,
      'data-swipe-out': ye,
      'data-swipe-direction': Y,
      'data-expanded': !!(E || (re && J)),
      style: {
        '--index': C,
        '--toasts-before': C,
        '--z-index': k.length - C,
        '--offset': `${ae ? j : ze.current}px`,
        '--initial-height': re ? 'auto' : `${O}px`,
        ...R,
        ...c.style,
      },
      onDragEnd: () => {
        ;(pe(!1), G(null), (Pe.current = null))
      },
      onPointerDown: me => {
        Xe ||
          !xe ||
          ((z.current = new Date()),
          N(ze.current),
          me.target.setPointerCapture(me.pointerId),
          me.target.tagName !== 'BUTTON' &&
            (pe(!0), (Pe.current = { x: me.clientX, y: me.clientY })))
      },
      onPointerUp: () => {
        var me, Se, Ne, Be
        if (ye || !xe) return
        Pe.current = null
        let Ue = Number(
            ((me = q.current) == null
              ? void 0
              : me.style
                  .getPropertyValue('--swipe-amount-x')
                  .replace('px', '')) || 0
          ),
          st = Number(
            ((Se = q.current) == null
              ? void 0
              : Se.style
                  .getPropertyValue('--swipe-amount-y')
                  .replace('px', '')) || 0
          ),
          mt =
            new Date().getTime() -
            ((Ne = z.current) == null ? void 0 : Ne.getTime()),
          He = Q === 'x' ? Ue : st,
          at = Math.abs(He) / mt
        if (Math.abs(He) >= pf || at > 0.11) {
          ;(N(ze.current),
            (Be = c.onDismiss) == null || Be.call(c, c),
            he(
              Q === 'x' ? (Ue > 0 ? 'right' : 'left') : st > 0 ? 'down' : 'up'
            ),
            Me(),
            y(!0),
            B(!1))
          return
        }
        ;(pe(!1), G(null))
      },
      onPointerMove: me => {
        var Se, Ne, Be, Ue
        if (
          !Pe.current ||
          !xe ||
          ((Se = window.getSelection()) == null
            ? void 0
            : Se.toString().length) > 0
        )
          return
        let st = me.clientY - Pe.current.y,
          mt = me.clientX - Pe.current.x,
          He = (Ne = e.swipeDirections) != null ? Ne : gf(M)
        !Q &&
          (Math.abs(mt) > 1 || Math.abs(st) > 1) &&
          G(Math.abs(mt) > Math.abs(st) ? 'x' : 'y')
        let at = { x: 0, y: 0 }
        ;(Q === 'y'
          ? (He.includes('top') || He.includes('bottom')) &&
            ((He.includes('top') && st < 0) ||
              (He.includes('bottom') && st > 0)) &&
            (at.y = st)
          : Q === 'x' &&
            (He.includes('left') || He.includes('right')) &&
            ((He.includes('left') && mt < 0) ||
              (He.includes('right') && mt > 0)) &&
            (at.x = mt),
          (Math.abs(at.x) > 0 || Math.abs(at.y) > 0) && B(!0),
          (Be = q.current) == null ||
            Be.style.setProperty('--swipe-amount-x', `${at.x}px`),
          (Ue = q.current) == null ||
            Ue.style.setProperty('--swipe-amount-y', `${at.y}px`))
      },
    },
    Oe && !c.jsx
      ? X.createElement(
          'button',
          {
            'aria-label': F,
            'data-disabled': Xe,
            'data-close-button': !0,
            onClick:
              Xe || !xe
                ? () => {}
                : () => {
                    var me
                    ;(Me(), (me = c.onDismiss) == null || me.call(c, c))
                  },
            className: We(
              $ == null ? void 0 : $.closeButton,
              (s = c == null ? void 0 : c.classNames) == null
                ? void 0
                : s.closeButton
            ),
          },
          (a = ee == null ? void 0 : ee.close) != null ? a : Ju
        )
      : null,
    c.jsx || h.isValidElement(c.title)
      ? c.jsx
        ? c.jsx
        : typeof c.title == 'function'
          ? c.title()
          : c.title
      : X.createElement(
          X.Fragment,
          null,
          se || c.icon || c.promise
            ? X.createElement(
                'div',
                {
                  'data-icon': '',
                  className: We(
                    $ == null ? void 0 : $.icon,
                    (l = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : l.icon
                  ),
                },
                c.promise || (c.type === 'loading' && !c.icon)
                  ? c.icon || uc()
                  : null,
                c.type !== 'loading'
                  ? c.icon || (ee == null ? void 0 : ee[se]) || Ku(se)
                  : null
              )
            : null,
          X.createElement(
            'div',
            {
              'data-content': '',
              className: We(
                $ == null ? void 0 : $.content,
                (i = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : i.content
              ),
            },
            X.createElement(
              'div',
              {
                'data-title': '',
                className: We(
                  $ == null ? void 0 : $.title,
                  (d = c == null ? void 0 : c.classNames) == null
                    ? void 0
                    : d.title
                ),
              },
              typeof c.title == 'function' ? c.title() : c.title
            ),
            c.description
              ? X.createElement(
                  'div',
                  {
                    'data-description': '',
                    className: We(
                      P,
                      Ae,
                      $ == null ? void 0 : $.description,
                      (u = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof c.description == 'function'
                    ? c.description()
                    : c.description
                )
              : null
          ),
          h.isValidElement(c.cancel)
            ? c.cancel
            : c.cancel && mr(c.cancel)
              ? X.createElement(
                  'button',
                  {
                    'data-button': !0,
                    'data-cancel': !0,
                    style: c.cancelButtonStyle || L,
                    onClick: me => {
                      var Se, Ne
                      mr(c.cancel) &&
                        xe &&
                        ((Ne = (Se = c.cancel).onClick) == null ||
                          Ne.call(Se, me),
                        Me())
                    },
                    className: We(
                      $ == null ? void 0 : $.cancelButton,
                      (p = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : p.cancelButton
                    ),
                  },
                  c.cancel.label
                )
              : null,
          h.isValidElement(c.action)
            ? c.action
            : c.action && mr(c.action)
              ? X.createElement(
                  'button',
                  {
                    'data-button': !0,
                    'data-action': !0,
                    style: c.actionButtonStyle || H,
                    onClick: me => {
                      var Se, Ne
                      mr(c.action) &&
                        ((Ne = (Se = c.action).onClick) == null ||
                          Ne.call(Se, me),
                        !me.defaultPrevented && Me())
                    },
                    className: We(
                      $ == null ? void 0 : $.actionButton,
                      (g = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : g.actionButton
                    ),
                  },
                  c.action.label
                )
              : null
        )
  )
}
function Ro() {
  if (typeof window > 'u' || typeof document > 'u') return 'ltr'
  let e = document.documentElement.getAttribute('dir')
  return e === 'auto' || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e
}
function bf(e, r) {
  let t = {}
  return (
    [e, r].forEach((n, s) => {
      let a = s === 1,
        l = a ? '--mobile-offset' : '--offset',
        i = a ? uf : df
      function d(u) {
        ;['top', 'right', 'bottom', 'left'].forEach(p => {
          t[`${l}-${p}`] = typeof u == 'number' ? `${u}px` : u
        })
      }
      typeof n == 'number' || typeof n == 'string'
        ? d(n)
        : typeof n == 'object'
          ? ['top', 'right', 'bottom', 'left'].forEach(u => {
              n[u] === void 0
                ? (t[`${l}-${u}`] = i)
                : (t[`${l}-${u}`] =
                    typeof n[u] == 'number' ? `${n[u]}px` : n[u])
            })
          : d(i)
    }),
    t
  )
}
h.forwardRef(function (e, r) {
  let {
      invert: t,
      position: n = 'bottom-right',
      hotkey: s = ['altKey', 'KeyT'],
      expand: a,
      closeButton: l,
      className: i,
      offset: d,
      mobileOffset: u,
      theme: p = 'light',
      richColors: g,
      duration: v,
      style: c,
      visibleToasts: x = cf,
      toastOptions: f,
      dir: m = Ro(),
      gap: w = hf,
      loadingIcon: S,
      icons: C,
      containerAriaLabel: k = 'Notifications',
      pauseWhenPageIsHidden: E,
    } = e,
    [I, T] = X.useState([]),
    D = X.useMemo(
      () =>
        Array.from(
          new Set([n].concat(I.filter(A => A.position).map(A => A.position)))
        ),
      [I, n]
    ),
    [R, L] = X.useState([]),
    [H, _] = X.useState(!1),
    [P, b] = X.useState(!1),
    [M, K] = X.useState(
      p !== 'system'
        ? p
        : typeof window < 'u' &&
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    ),
    U = X.useRef(null),
    re = s.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
    $ = X.useRef(null),
    ee = X.useRef(!1),
    F = X.useCallback(A => {
      T(Q => {
        var G
        return (
          ((G = Q.find(Y => Y.id === A.id)) != null && G.delete) ||
            $e.dismiss(A.id),
          Q.filter(({ id: Y }) => Y !== A.id)
        )
      })
    }, [])
  return (
    X.useEffect(
      () =>
        $e.subscribe(A => {
          if (A.dismiss) {
            T(Q => Q.map(G => (G.id === A.id ? { ...G, delete: !0 } : G)))
            return
          }
          setTimeout(() => {
            Rs.flushSync(() => {
              T(Q => {
                let G = Q.findIndex(Y => Y.id === A.id)
                return G !== -1
                  ? [...Q.slice(0, G), { ...Q[G], ...A }, ...Q.slice(G + 1)]
                  : [A, ...Q]
              })
            })
          })
        }),
      []
    ),
    X.useEffect(() => {
      if (p !== 'system') {
        K(p)
        return
      }
      if (
        (p === 'system' &&
          (window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
            ? K('dark')
            : K('light')),
        typeof window > 'u')
      )
        return
      let A = window.matchMedia('(prefers-color-scheme: dark)')
      try {
        A.addEventListener('change', ({ matches: Q }) => {
          K(Q ? 'dark' : 'light')
        })
      } catch {
        A.addListener(({ matches: G }) => {
          try {
            K(G ? 'dark' : 'light')
          } catch (Y) {
            console.error(Y)
          }
        })
      }
    }, [p]),
    X.useEffect(() => {
      I.length <= 1 && _(!1)
    }, [I]),
    X.useEffect(() => {
      let A = Q => {
        var G, Y
        ;(s.every(he => Q[he] || Q.code === he) &&
          (_(!0), (G = U.current) == null || G.focus()),
          Q.code === 'Escape' &&
            (document.activeElement === U.current ||
              ((Y = U.current) != null &&
                Y.contains(document.activeElement))) &&
            _(!1))
      }
      return (
        document.addEventListener('keydown', A),
        () => document.removeEventListener('keydown', A)
      )
    }, [s]),
    X.useEffect(() => {
      if (U.current)
        return () => {
          $.current &&
            ($.current.focus({ preventScroll: !0 }),
            ($.current = null),
            (ee.current = !1))
        }
    }, [U.current]),
    X.createElement(
      'section',
      {
        ref: r,
        'aria-label': `${k} ${re}`,
        tabIndex: -1,
        'aria-live': 'polite',
        'aria-relevant': 'additions text',
        'aria-atomic': 'false',
        suppressHydrationWarning: !0,
      },
      D.map((A, Q) => {
        var G
        let [Y, he] = A.split('-')
        return I.length
          ? X.createElement(
              'ol',
              {
                key: A,
                dir: m === 'auto' ? Ro() : m,
                tabIndex: -1,
                ref: U,
                className: i,
                'data-sonner-toaster': !0,
                'data-theme': M,
                'data-y-position': Y,
                'data-lifted': H && I.length > 1 && !a,
                'data-x-position': he,
                style: {
                  '--front-toast-height': `${((G = R[0]) == null ? void 0 : G.height) || 0}px`,
                  '--width': `${ff}px`,
                  '--gap': `${w}px`,
                  ...c,
                  ...bf(d, u),
                },
                onBlur: J => {
                  ee.current &&
                    !J.currentTarget.contains(J.relatedTarget) &&
                    ((ee.current = !1),
                    $.current &&
                      ($.current.focus({ preventScroll: !0 }),
                      ($.current = null)))
                },
                onFocus: J => {
                  ;(J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === 'false') ||
                    ee.current ||
                    ((ee.current = !0), ($.current = J.relatedTarget))
                },
                onMouseEnter: () => _(!0),
                onMouseMove: () => _(!0),
                onMouseLeave: () => {
                  P || _(!1)
                },
                onDragEnd: () => _(!1),
                onPointerDown: J => {
                  ;(J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === 'false') ||
                    b(!0)
                },
                onPointerUp: () => b(!1),
              },
              I.filter(J => (!J.position && Q === 0) || J.position === A).map(
                (J, ne) => {
                  var ae, ue
                  return X.createElement(vf, {
                    key: J.id,
                    icons: C,
                    index: ne,
                    toast: J,
                    defaultRichColors: g,
                    duration:
                      (ae = f == null ? void 0 : f.duration) != null ? ae : v,
                    className: f == null ? void 0 : f.className,
                    descriptionClassName:
                      f == null ? void 0 : f.descriptionClassName,
                    invert: t,
                    visibleToasts: x,
                    closeButton:
                      (ue = f == null ? void 0 : f.closeButton) != null
                        ? ue
                        : l,
                    interacting: P,
                    position: A,
                    style: f == null ? void 0 : f.style,
                    unstyled: f == null ? void 0 : f.unstyled,
                    classNames: f == null ? void 0 : f.classNames,
                    cancelButtonStyle: f == null ? void 0 : f.cancelButtonStyle,
                    actionButtonStyle: f == null ? void 0 : f.actionButtonStyle,
                    removeToast: F,
                    toasts: I.filter(de => de.position == J.position),
                    heights: R.filter(de => de.position == J.position),
                    setHeights: L,
                    expandByDefault: a,
                    gap: w,
                    loadingIcon: S,
                    expanded: H,
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
const wa = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('div', {
    className: 'relative w-full overflow-auto',
    children: o.jsx('table', {
      ref: t,
      className: le('w-full caption-bottom text-sm', e),
      ...r,
    }),
  })
)
wa.displayName = 'Table'
const ya = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('thead', { ref: t, className: le('[&_tr]:border-b', e), ...r })
)
ya.displayName = 'TableHeader'
const Sa = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('tbody', {
    ref: t,
    className: le('[&_tr:last-child]:border-0', e),
    ...r,
  })
)
Sa.displayName = 'TableBody'
const xf = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('tfoot', {
    ref: t,
    className: le('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', e),
    ...r,
  })
)
xf.displayName = 'TableFooter'
const Yn = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('tr', {
    ref: t,
    className: le(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      e
    ),
    ...r,
  })
)
Yn.displayName = 'TableRow'
const ct = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('th', {
    ref: t,
    className: le(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      e
    ),
    ...r,
  })
)
ct.displayName = 'TableHead'
const dt = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('td', {
    ref: t,
    className: le('p-4 align-middle [&:has([role=checkbox])]:pr-0', e),
    ...r,
  })
)
dt.displayName = 'TableCell'
const wf = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx('caption', {
    ref: t,
    className: le('mt-4 text-sm text-muted-foreground', e),
    ...r,
  })
)
wf.displayName = 'TableCaption'
const $r = (e = {}) => {
    const [r, t] = h.useState(''),
      [n, s] = h.useState(''),
      [a, l] = h.useState(!1),
      [i, d] = h.useState(!1),
      [u, p] = h.useState(0),
      [g, v] = h.useState(!1),
      c = h.useRef(null),
      x = (() => {
        const S = /iPad|iPhone|iPod/.test(navigator.userAgent),
          C =
            /Safari/.test(navigator.userAgent) &&
            !/Chrome/.test(navigator.userAgent),
          k = window.matchMedia('(display-mode: standalone)').matches
        return S && C && k
          ? (console.warn(
              'Voice commands may have limited functionality on iPhone Safari PWA'
            ),
            !1)
          : !!(window.SpeechRecognition || window.webkitSpeechRecognition)
      })()
    h.useEffect(() => {
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
            (C.onresult = k => {
              let E = '',
                I = ''
              for (let T = k.resultIndex; T < k.results.length; T++) {
                const D = k.results[T][0].transcript
                k.results[T].isFinal
                  ? ((E += D),
                    t(E),
                    p(k.results[T][0].confidence || 0.8),
                    v(!0))
                  : ((I += D), s(I))
              }
            }),
            (C.onend = () => {
              ;(l(!1), d(!1))
            }),
            (C.onerror = k => {
              ;(console.error('Speech recognition error:', k),
                console.error('Error type:', k.error),
                l(!1),
                d(!1),
                k.error === 'not-allowed'
                  ? console.warn(
                      'Microphone access denied. Please enable microphone permissions.'
                    )
                  : k.error === 'no-speech'
                    ? console.warn('No speech detected. Please try again.')
                    : k.error === 'network' &&
                      console.warn(
                        'Network error occurred during speech recognition.'
                      ))
            }),
            (C.onaudiostart = () => {}),
            (C.onspeechstart = () => {}),
            (C.onspeechend = () => {}),
            (c.current = C))
        } catch (C) {
          console.error('Failed to initialize speech recognition:', C)
        }
    }, [x])
    const f = h.useCallback(() => {
        if (!x) {
          console.warn('Speech recognition not supported on this device')
          return
        }
        if (c.current) {
          ;(t(''), s(''), p(0), v(!1), d(!0), l(!0))
          try {
            c.current.start()
          } catch (S) {
            ;(console.error('Speech recognition start error:', S),
              l(!1),
              d(!1),
              S.name === 'InvalidStateError'
                ? console.warn('Speech recognition is already running')
                : S.name === 'NotAllowedError' &&
                  console.warn('Microphone access denied'))
          }
        } else console.warn('Speech recognition not initialized')
      }, [x]),
      m = h.useCallback(() => {
        c.current && a && c.current.stop()
      }, [a]),
      w = h.useCallback(() => {
        ;(t(''), s(''), p(0), v(!1))
      }, [])
    return {
      transcript: r,
      interimTranscript: n,
      isListening: a,
      startListening: f,
      stopListening: m,
      resetTranscript: w,
      confidence: u,
      isProcessing: i,
      isFinal: g,
      browserSupportsSpeechRecognition: x,
    }
  },
  gr = {
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
    const [e, r] = h.useState(gr)
    ;(h.useEffect(() => {
      const d = localStorage.getItem('userSettings')
      if (d)
        try {
          r({ ...gr, ...JSON.parse(d) })
        } catch {
          r(gr)
        }
    }, []),
      h.useEffect(() => {
        try {
          if (
            (localStorage.setItem('userSettings', JSON.stringify(e)),
            'indexedDB' in window)
          ) {
            const d = indexedDB.open('door-ship-flow-db', 1)
            ;((d.onupgradeneeded = u => {
              const p = u.target.result
              p.objectStoreNames.contains('settings') ||
                p.createObjectStore('settings', { keyPath: 'id' })
            }),
              (d.onsuccess = u => {
                u.target.result
                  .transaction(['settings'], 'readwrite')
                  .objectStore('settings')
                  .put({ id: 'userSettings', ...e })
              }))
          }
        } catch {}
      }, [e]))
    const t = (d, u) => {
      r(p => ({ ...p, [d]: u }))
    }
    return {
      settings: e,
      updateSetting: t,
      updateLastUsedDC: d => {
        t('lastUsedDC', d)
      },
      updateLastUsedFreightType: d => {
        t('lastUsedFreightType', d)
      },
      updateVoiceEngine: d => {
        t('voiceEngine', d)
      },
      updateVoiceActivationMode: d => {
        t('voiceActivationMode', d)
      },
      resetSettings: () => {
        r(gr)
      },
    }
  }
function Ca({ commandPatterns: e, onCommandRecognized: r, speakBackText: t }) {
  const { settings: n } = Ge(),
    [s, a] = h.useState(null),
    [l, i] = h.useState(0),
    [d, u] = h.useState(!1),
    [p, g] = h.useState(null),
    v = h.useRef(''),
    c = h.useRef(null),
    x = h.useRef(null),
    {
      transcript: f,
      interimTranscript: m,
      isListening: w,
      startListening: S,
      stopListening: C,
      confidence: k,
      isProcessing: E,
      isFinal: I,
      resetTranscript: T,
      browserSupportsSpeechRecognition: D,
    } = $r({ engine: n.voiceEngine ?? 'browser' })
  ;(h.useEffect(() => {
    if (!D) {
      ;(g('Speech recognition is not supported in this browser'),
        ce.error('Speech recognition is not supported', {
          description: 'Please try using a supported browser like Chrome',
          duration: 5e3,
        }))
      return
    }
    return () => {
      x.current && clearTimeout(x.current)
    }
  }, [D, n.voiceActivationMode]),
    h.useEffect(() => {
      if (
        !n.voiceRecognitionEnabled ||
        !f ||
        d ||
        (!I && !n.voiceAcceptPartialResults) ||
        f === v.current
      )
        return
      const L = f.toLowerCase().trim()
      let H = !1
      for (const _ of e) {
        const P = L.match(_.regex)
        if (P) {
          ;(u(!0), (v.current = f))
          const b = P.slice(1)
          try {
            if (
              (r(_.commandName, b),
              a(_.commandName),
              i(k),
              n.speakBackCommands && (t || _.feedback))
            ) {
              const M = new SpeechSynthesisUtterance(_.feedback ?? t)
              ;((M.volume = n.voiceVolume ?? 0.8),
                window.speechSynthesis.speak(M))
            }
            ;(ce.success(
              `${_.commandName} via voice command! (${Math.round(k * 100)}% confidence)`,
              {
                position: 'top-center',
                id: 'voice-command-success',
                duration: 1500,
              }
            ),
              (H = !0))
          } catch (M) {
            ;(console.error('Error executing command:', M),
              ce.error('Error executing voice command', {
                description: 'Please try again',
                duration: 3e3,
              }))
          }
          break
        }
      }
      ;(c.current && window.clearTimeout(c.current),
        (c.current = window.setTimeout(
          () => {
            ;(H && a(null), u(!1), T(), (c.current = null))
          },
          H ? 2e3 : 1e3
        )))
    }, [f, I, k, n, C, w, d, T, e, r, t]),
    h.useEffect(
      () => () => {
        c.current && window.clearTimeout(c.current)
      },
      []
    ),
    h.useEffect(() => {
      w ||
        ((v.current = ''),
        u(!1),
        T(),
        c.current && (window.clearTimeout(c.current), (c.current = null)))
    }, [w, T]))
  const R = h.useCallback(
    () =>
      l > 0.8 ? 'text-green-500' : l > 0.6 ? 'text-yellow-500' : 'text-red-500',
    [l]
  )
  return {
    isListening: w,
    startListening: S,
    stopListening: C,
    transcript: f,
    interimTranscript: m,
    recentCommand: s,
    commandConfidence: l,
    isProcessing: E,
    isFinal: I,
    isProcessingCommand: d,
    getConfidenceColor: R,
    errorMessage: p,
  }
}
const _a = ({
    isListening: e,
    onToggle: r,
    label: t = 'Voice Command',
    stopLabel: n = 'Stop Voice',
    className: s = '',
  }) => {
    const a =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    return o.jsx(fe, {
      variant: 'outline',
      size: 'sm',
      className: `gap-2 transition-all duration-300 transform border-2 font-semibold shadow-lg hover:shadow-xl active:shadow-md ${a ? 'min-h-[48px] min-w-[120px] px-4' : 'min-h-[44px] px-3'} ${e ? 'border-red-500 bg-gradient-to-r from-red-100 to-red-200 text-red-700 hover:from-red-200 hover:to-red-300 animate-pulse shadow-red-200' : 'border-blue-500 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 hover:from-blue-200 hover:to-cyan-200 hover:border-blue-600 hover:scale-105 focus:scale-95 shadow-blue-200'} ${a ? 'active:scale-95 touch-manipulation' : ''} ${s}`,
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
        ? o.jsxs(o.Fragment, {
            children: [
              o.jsxs('div', {
                className: 'relative',
                children: [
                  o.jsx(Hn, { className: 'h-5 w-5' }),
                  o.jsx('span', {
                    className:
                      'absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-ping',
                  }),
                ],
              }),
              o.jsx('span', { className: 'text-value font-bold', children: n }),
            ],
          })
        : o.jsxs(o.Fragment, {
            children: [
              o.jsx(Ot, { className: 'h-5 w-5' }),
              o.jsxs('span', {
                className: 'text-value font-bold',
                children: ['🎤 ', t],
              }),
            ],
          }),
    })
  },
  ka = ({
    isListening: e,
    isProcessing: r,
    interimTranscript: t,
    transcript: n,
    isFinal: s,
    recentCommand: a,
    getConfidenceColor: l,
    helpText: i,
    commandList: d,
  }) => {
    const u =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
      p = /iPad|iPhone|iPod/.test(navigator.userAgent)
    return e
      ? o.jsx('div', {
          className: `absolute left-0 -bottom-16 bg-white px-4 py-3 rounded-lg shadow-xl border-2 border-blue-200 transition-all duration-200 animate-fade-in z-20 ${u ? 'min-w-[200px] max-w-[280px] text-sm font-medium' : 'min-w-[180px] max-w-[250px] text-xs'}`,
          role: 'status',
          'aria-live': 'polite',
          children:
            r && !t
              ? o.jsxs('div', {
                  className: 'flex items-center',
                  children: [
                    o.jsx(au, {
                      className: `${u ? 'h-4 w-4' : 'h-3 w-3'} text-blue-600 mr-2 animate-pulse`,
                    }),
                    o.jsx('span', {
                      className: 'text-blue-700 font-semibold',
                      children: '🎤 Listening...',
                    }),
                    o.jsx('span', {
                      className:
                        'ml-2 inline-block animate-pulse text-blue-500',
                      children: '●●●',
                    }),
                  ],
                })
              : t
                ? o.jsxs('div', {
                    children: [
                      o.jsxs('div', {
                        className: 'flex items-center gap-2 mb-2',
                        children: [
                          o.jsx('span', {
                            className: 'font-bold text-blue-700',
                            children: 'Heard:',
                          }),
                          o.jsx('span', {
                            className: `italic font-medium ${s ? 'text-green-700 bg-green-50 px-2 py-1 rounded' : 'text-orange-600 bg-orange-50 px-2 py-1 rounded'}`,
                            children: s ? n : t,
                          }),
                          s &&
                            o.jsx(tr, {
                              className: `${u ? 'h-4 w-4' : 'h-3 w-3'} text-green-600`,
                            }),
                        ],
                      }),
                      a &&
                        o.jsxs('div', {
                          className:
                            'flex items-center gap-2 mt-2 p-2 bg-blue-50 rounded',
                          children: [
                            o.jsx('span', {
                              className: 'font-bold text-blue-700',
                              children: 'Command:',
                            }),
                            o.jsx('span', {
                              className: `font-semibold ${l()}`,
                              children: a,
                            }),
                          ],
                        }),
                    ],
                  })
                : o.jsxs('div', {
                    className: 'flex flex-col space-y-1',
                    children: [
                      o.jsx('span', {
                        className: 'text-blue-700 font-bold',
                        children: i,
                      }),
                      o.jsx('span', {
                        className: `text-blue-500 font-medium ${u ? 'text-xs' : 'text-[10px]'}`,
                        children: '🎙️ Voice recognition active - Speak clearly',
                      }),
                      p &&
                        o.jsx('span', {
                          className: 'text-orange-600 font-medium text-xs',
                          children: '📱 iPhone detected - Optimized for Safari',
                        }),
                    ],
                  }),
        })
      : null
  },
  Na = ({ isListening: e, commandList: r }) =>
    e
      ? null
      : o.jsxs('div', {
          className:
            'absolute left-0 -bottom-14 bg-white px-3 py-2 rounded-md shadow-md text-xs border border-gray-200 transition-opacity opacity-0 group-hover:opacity-100 min-w-[150px] z-10 hidden md:block',
          children: [
            o.jsx('div', {
              className: 'font-medium text-gray-700',
              children: 'Valid commands:',
            }),
            o.jsx('ul', {
              className: 'text-gray-600 mt-1',
              children: r.map((t, n) =>
                o.jsxs('li', { children: ['"', t, '"'] }, n)
              ),
            }),
          ],
        }),
  yf = Ir(
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
function Kt({ className: e, variant: r, ...t }) {
  return o.jsx('div', { className: le(yf({ variant: r }), e), ...t })
}
const Zn = Cc,
  qn = _c,
  Sf = yc,
  Ea = h.forwardRef(({ className: e, ...r }, t) =>
    o.jsx(hs, {
      ref: t,
      className: le(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        e
      ),
      ...r,
    })
  )
Ea.displayName = hs.displayName
const Mr = h.forwardRef(({ className: e, children: r, ...t }, n) =>
  o.jsxs(Sf, {
    children: [
      o.jsx(Ea, {}),
      o.jsxs(ps, {
        ref: n,
        className: le(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
          e
        ),
        ...t,
        children: [
          r,
          o.jsxs(Sc, {
            className:
              'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
            children: [
              o.jsx(Ar, { className: 'h-4 w-4' }),
              o.jsx('span', { className: 'sr-only', children: 'Close' }),
            ],
          }),
        ],
      }),
    ],
  })
)
Mr.displayName = ps.displayName
const Xn = ({ className: e, ...r }) =>
  o.jsx('div', {
    className: le('flex flex-col space-y-1.5 text-center sm:text-left', e),
    ...r,
  })
Xn.displayName = 'DialogHeader'
const Qn = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(ms, {
    ref: t,
    className: le('text-lg font-semibold leading-none tracking-tight', e),
    ...r,
  })
)
Qn.displayName = ms.displayName
const Jn = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(gs, { ref: t, className: le('text-sm text-muted-foreground', e), ...r })
)
Jn.displayName = gs.displayName
const ja = ({ commandType: e }) => {
    const [r, t] = h.useState(!1),
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
    return o.jsxs(Zn, {
      open: r,
      onOpenChange: t,
      children: [
        o.jsx(qn, {
          asChild: !0,
          children: o.jsx(fe, {
            variant: 'ghost',
            size: 'sm',
            className: 'h-8 w-8 p-0 text-gray-500 hover:text-gray-700',
            children: o.jsx(Od, { className: 'h-4 w-4' }),
          }),
        }),
        o.jsxs(Mr, {
          className: 'max-w-md',
          children: [
            o.jsxs(Xn, {
              children: [
                o.jsxs(Qn, {
                  className: 'flex items-center gap-2',
                  children: [
                    o.jsx(Ot, { className: 'h-5 w-5' }),
                    'Voice Commands Help',
                  ],
                }),
                o.jsx(Jn, {
                  children:
                    e === 'pallet'
                      ? 'Voice commands for pallet counter'
                      : 'Voice commands for door scheduling',
                }),
              ],
            }),
            o.jsxs('div', {
              className: 'space-y-4',
              children: [
                o.jsxs('div', {
                  children: [
                    o.jsx('h3', {
                      className: 'font-medium mb-2',
                      children: 'Available Commands:',
                    }),
                    o.jsx('div', {
                      className: 'space-y-2',
                      children: a.map((i, d) =>
                        o.jsxs(
                          'div',
                          {
                            className:
                              'flex items-start gap-2 p-2 bg-gray-50 rounded-lg',
                            children: [
                              o.jsxs(Kt, {
                                variant: 'secondary',
                                className: 'text-xs',
                                children: [
                                  o.jsx(su, { className: 'h-3 w-3 mr-1' }),
                                  'Say',
                                ],
                              }),
                              o.jsxs('div', {
                                className: 'flex-1',
                                children: [
                                  o.jsxs('p', {
                                    className: 'font-medium text-sm',
                                    children: ['"', i.command, '"'],
                                  }),
                                  o.jsx('p', {
                                    className: 'text-xs text-gray-600',
                                    children: i.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          d
                        )
                      ),
                    }),
                  ],
                }),
                o.jsxs('div', {
                  children: [
                    o.jsx('h3', {
                      className: 'font-medium mb-2',
                      children: 'Tips for Success:',
                    }),
                    o.jsx('ul', {
                      className: 'space-y-1 text-sm text-gray-600',
                      children: l.map((i, d) =>
                        o.jsxs(
                          'li',
                          {
                            className: 'flex items-start gap-2',
                            children: [
                              o.jsx('span', {
                                className: 'text-green-500 mt-1',
                                children: '•',
                              }),
                              i,
                            ],
                          },
                          d
                        )
                      ),
                    }),
                  ],
                }),
                o.jsx('div', {
                  className: 'bg-blue-50 p-3 rounded-lg',
                  children: o.jsxs('p', {
                    className: 'text-sm text-blue-800',
                    children: [
                      o.jsx('strong', { children: 'How to use:' }),
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
  Po = e => ['empty', '25%', '50%', '75%', 'partial', 'shipload'].includes(e),
  Cf = ({ onAddDoor: e, onAddDoorWithParams: r }) => {
    const { settings: t, updateSetting: n } = Ge(),
      [s, a] = h.useState(!1),
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
        startListening: d,
        stopListening: u,
        transcript: p,
        interimTranscript: g,
        recentCommand: v,
        isProcessing: c,
        isFinal: x,
        getConfidenceColor: f,
        errorMessage: m,
      } = Ca({
        commandPatterns: l,
        onCommandRecognized: (I, T) => {
          var R, L, H
          const D = {}
          if (I === 'confirm command') {
            ce.success('Command confirmed', { duration: 1500 })
            return
          }
          if (I === 'cancel command') {
            ce.info('Command cancelled', { duration: 1500 })
            return
          }
          if (
            I === 'add door' ||
            I === 'quick add door' ||
            I === 'emergency door'
          ) {
            e()
            return
          }
          if (T && T.length > 0)
            switch (I) {
              case 'add specific door':
                const _ = T[0] || T[1] || T[2]
                _ && /^\d{3}$/.test(_)
                  ? (D.doorNumber = _)
                  : console.warn(`Invalid door number format: ${_}`)
                break
              case 'add complete door':
                if (
                  (T[0] && /^\d{3}$/.test(T[0]) && (D.doorNumber = T[0]),
                  T[1] && /^\d{4}$/.test(T[1]) && (D.destinationDC = T[1]),
                  T[2])
                ) {
                  const b = T[2].toLowerCase()
                  b.includes('xd') || b.includes('cross')
                    ? (D.freightType = 'XD')
                    : b.includes('28') || b.includes('twenty')
                      ? (D.freightType = '28')
                      : b.includes('23') || b.includes('43')
                        ? (D.freightType = '23/43')
                        : (b.includes('aib') || b.includes('air')) &&
                          (D.freightType = 'AIB')
                }
                if (T[3]) {
                  const b = T[3].toLowerCase()
                  b.includes('empty')
                    ? (D.trailerStatus = 'empty')
                    : b.includes('partial')
                      ? (D.trailerStatus = 'partial')
                      : b.includes('shipload') || b.includes('full')
                        ? (D.trailerStatus = 'shipload')
                        : b.includes('25')
                          ? (D.trailerStatus = '25%')
                          : b.includes('50')
                            ? (D.trailerStatus = '50%')
                            : b.includes('75') && (D.trailerStatus = '75%')
                }
                break
              case 'add door with dc':
                ;(T[0] && /^\d{3}$/.test(T[0]) && (D.doorNumber = T[0]),
                  T[1] && /^\d{4}$/.test(T[1]) && (D.destinationDC = T[1]))
                break
              case 'add door with freight':
                if (
                  (T[0] && /^\d{3}$/.test(T[0]) && (D.doorNumber = T[0]), T[1])
                ) {
                  const b = T[1].toLowerCase()
                  b.includes('xd') || b.includes('cross')
                    ? (D.freightType = 'XD')
                    : b.includes('28')
                      ? (D.freightType = '28')
                      : b.includes('23') || b.includes('43')
                        ? (D.freightType = '23/43')
                        : (b.includes('aib') || b.includes('air')) &&
                          (D.freightType = 'AIB')
                }
                break
              case 'add dc door':
                const P = T[0] || T[1]
                P && E.includes(P)
                  ? (D.destinationDC = P)
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
                  ? (D.trailerStatus = K)
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
                  ? (D.freightType = K)
                  : console.warn(`Invalid freight type: ${b}`)
                break
              }
              case 'tcr status': {
                const b = (H = T[0]) == null ? void 0 : H.toLowerCase()
                b && ['present', 'available', 'yes'].includes(b)
                  ? (D.tcrPresent = !0)
                  : b &&
                    ['not available', 'missing', 'no'].includes(b) &&
                    (D.tcrPresent = !1)
                break
              }
              case 'set pallet count': {
                const b = T[0],
                  M = parseInt(T[1])
                b && !isNaN(M) && ((D.doorNumber = b), (D.palletCount = M))
                break
              }
              case 'update door destination': {
                const b = T[0],
                  M = T[1]
                b &&
                  M &&
                  E.includes(M) &&
                  ((D.doorNumber = b), (D.destinationDC = M), (D.isUpdate = !0))
                break
              }
              case 'remove door': {
                const b = T[0]
                b && ((D.doorNumber = b), (D.isRemove = !0))
                break
              }
              case 'set trailer status':
                T[0] &&
                  Po(T[0].toLowerCase()) &&
                  (D.trailerStatus = T[0].toLowerCase())
                break
              default:
                ;(console.warn(`Unhandled command with params: ${I}`), e())
                return
            }
          Object.keys(D).length > 0
            ? r(D)
            : (console.warn(
                `Command ${I} recognized but no parameters parsed. Falling back.`
              ),
              e())
        },
        speakBackText: t.voiceFeedback ? 'Okay' : void 0,
      }),
      w = () => {
        const I = !s
        ;(a(I),
          I
            ? (d(),
              ce.success('Hands-free voice mode activated', {
                description:
                  "Voice recognition will stay active. Say 'Add Door' to begin.",
                duration: 3e3,
              }))
            : i && (u(), ce.info('Hands-free mode disabled')),
          n('voiceActivationMode', I ? 'continuous' : 'button'))
      }
    h.useEffect(() => {
      t.voiceActivationMode === 'hotword' && !i && d()
    }, [t.voiceActivationMode])
    const S = () =>
        m
          ? 'text-red-500'
          : c
            ? 'text-yellow-500'
            : i
              ? 'text-green-500'
              : 'text-neutral-600',
      C = () =>
        m ||
        (t.voiceActivationMode === 'hotword'
          ? 'Say "Add Door" to begin'
          : s
            ? 'Hands-free mode active'
            : 'Say "Add Door" or "New Door"')
    if (!t.voiceRecognitionEnabled) return null
    const k = [
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
      ].filter(I => Po(I.value)),
      o.jsxs('div', {
        className: 'relative',
        children: [
          o.jsxs('div', {
            className: 'flex items-center gap-2',
            children: [
              o.jsx(_a, {
                isListening: i,
                onToggle: () => {
                  i ? u() : d()
                },
                label:
                  t.voiceActivationMode === 'hotword'
                    ? 'Say "Add Door"'
                    : 'Voice Command',
                stopLabel: 'Stop Voice',
                className: `ml-2 ${S()}`,
              }),
              o.jsxs('div', {
                className: 'flex items-center gap-1 ml-1',
                children: [
                  o.jsx(ja, { commandType: 'door' }),
                  o.jsx(fe, {
                    variant: 'ghost',
                    size: 'icon',
                    className: `h-9 w-9 rounded-full ${s ? 'bg-red-50 text-red-500' : 'text-neutral-600'}`,
                    onClick: () => {
                      w()
                    },
                    title: s
                      ? 'Disable hands-free mode'
                      : 'Enable hands-free mode',
                    children: o.jsx(Ot, { className: 'h-4 w-4' }),
                  }),
                ],
              }),
            ],
          }),
          o.jsx(ka, {
            isListening: i,
            isProcessing: c,
            interimTranscript: g,
            transcript: p,
            isFinal: x,
            recentCommand: v,
            getConfidenceColor: f,
            helpText: C(),
          }),
          o.jsx(Na, { isListening: i, commandList: k }),
        ],
      })
    )
  },
  Ta = h.forwardRef(({ className: e, ...r }, t) =>
    o.jsx('textarea', {
      className: le(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        e
      ),
      ref: t,
      ...r,
    })
  )
Ta.displayName = 'Textarea'
const _f = vs,
  kf = kc
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
function Do(e, [r, t]) {
  return Math.min(t, Math.max(r, e))
}
function Te(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), t === !1 || !s.defaultPrevented))
      return r == null ? void 0 : r(s)
  }
}
function eo(e, r = []) {
  let t = []
  function n(a, l) {
    const i = h.createContext(l),
      d = t.length
    t = [...t, l]
    function u(g) {
      const { scope: v, children: c, ...x } = g,
        f = (v == null ? void 0 : v[e][d]) || i,
        m = h.useMemo(() => x, Object.values(x))
      return h.createElement(f.Provider, { value: m }, c)
    }
    function p(g, v) {
      const c = (v == null ? void 0 : v[e][d]) || i,
        x = h.useContext(c)
      if (x) return x
      if (l !== void 0) return l
      throw new Error(`\`${g}\` must be used within \`${a}\``)
    }
    return ((u.displayName = a + 'Provider'), [u, p])
  }
  const s = () => {
    const a = t.map(l => h.createContext(l))
    return function (i) {
      const d = (i == null ? void 0 : i[e]) || a
      return h.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: d } }), [i, d])
    }
  }
  return ((s.scopeName = e), [n, Nf(s, ...r)])
}
function Nf(...e) {
  const r = e[0]
  if (e.length === 1) return r
  const t = () => {
    const n = e.map(s => ({ useScope: s(), scopeName: s.scopeName }))
    return function (a) {
      const l = n.reduce((i, { useScope: d, scopeName: u }) => {
        const g = d(a)[`__scope${u}`]
        return { ...i, ...g }
      }, {})
      return h.useMemo(() => ({ [`__scope${r.scopeName}`]: l }), [l])
    }
  }
  return ((t.scopeName = r.scopeName), t)
}
function Ef(e, r) {
  typeof e == 'function' ? e(r) : e != null && (e.current = r)
}
function Ra(...e) {
  return r => e.forEach(t => Ef(t, r))
}
function De(...e) {
  return h.useCallback(Ra(...e), e)
}
const qt = h.forwardRef((e, r) => {
  const { children: t, ...n } = e,
    s = h.Children.toArray(t),
    a = s.find(Tf)
  if (a) {
    const l = a.props.children,
      i = s.map(d =>
        d === a
          ? h.Children.count(l) > 1
            ? h.Children.only(null)
            : h.isValidElement(l)
              ? l.props.children
              : null
          : d
      )
    return h.createElement(
      yn,
      we({}, n, { ref: r }),
      h.isValidElement(l) ? h.cloneElement(l, void 0, i) : null
    )
  }
  return h.createElement(yn, we({}, n, { ref: r }), t)
})
qt.displayName = 'Slot'
const yn = h.forwardRef((e, r) => {
  const { children: t, ...n } = e
  return h.isValidElement(t)
    ? h.cloneElement(t, { ...Rf(n, t.props), ref: r ? Ra(r, t.ref) : t.ref })
    : h.Children.count(t) > 1
      ? h.Children.only(null)
      : null
})
yn.displayName = 'SlotClone'
const jf = ({ children: e }) => h.createElement(h.Fragment, null, e)
function Tf(e) {
  return h.isValidElement(e) && e.type === jf
}
function Rf(e, r) {
  const t = { ...r }
  for (const n in r) {
    const s = e[n],
      a = r[n]
    ;/^on[A-Z]/.test(n)
      ? s && a
        ? (t[n] = (...i) => {
            ;(a(...i), s(...i))
          })
        : s && (t[n] = s)
      : n === 'style'
        ? (t[n] = { ...s, ...a })
        : n === 'className' && (t[n] = [s, a].filter(Boolean).join(' '))
  }
  return { ...e, ...t }
}
function Pf(e) {
  const r = e + 'CollectionProvider',
    [t, n] = eo(r),
    [s, a] = t(r, { collectionRef: { current: null }, itemMap: new Map() }),
    l = c => {
      const { scope: x, children: f } = c,
        m = X.useRef(null),
        w = X.useRef(new Map()).current
      return X.createElement(s, { scope: x, itemMap: w, collectionRef: m }, f)
    },
    i = e + 'CollectionSlot',
    d = X.forwardRef((c, x) => {
      const { scope: f, children: m } = c,
        w = a(i, f),
        S = De(x, w.collectionRef)
      return X.createElement(qt, { ref: S }, m)
    }),
    u = e + 'CollectionItemSlot',
    p = 'data-radix-collection-item',
    g = X.forwardRef((c, x) => {
      const { scope: f, children: m, ...w } = c,
        S = X.useRef(null),
        C = De(x, S),
        k = a(u, f)
      return (
        X.useEffect(
          () => (
            k.itemMap.set(S, { ref: S, ...w }),
            () => void k.itemMap.delete(S)
          )
        ),
        X.createElement(qt, { [p]: '', ref: C }, m)
      )
    })
  function v(c) {
    const x = a(e + 'CollectionConsumer', c)
    return X.useCallback(() => {
      const m = x.collectionRef.current
      if (!m) return []
      const w = Array.from(m.querySelectorAll(`[${p}]`))
      return Array.from(x.itemMap.values()).sort(
        (k, E) => w.indexOf(k.ref.current) - w.indexOf(E.ref.current)
      )
    }, [x.collectionRef, x.itemMap])
  }
  return [{ Provider: l, Slot: d, ItemSlot: g }, v, n]
}
const Df = h.createContext(void 0)
function If(e) {
  const r = h.useContext(Df)
  return e || r || 'ltr'
}
const Af = [
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
  Re = Af.reduce((e, r) => {
    const t = h.forwardRef((n, s) => {
      const { asChild: a, ...l } = n,
        i = a ? qt : r
      return (
        h.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0
        }, []),
        h.createElement(i, we({}, l, { ref: s }))
      )
    })
    return ((t.displayName = `Primitive.${r}`), { ...e, [r]: t })
  }, {})
function $f(e, r) {
  e && Pr.flushSync(() => e.dispatchEvent(r))
}
function rt(e) {
  const r = h.useRef(e)
  return (
    h.useEffect(() => {
      r.current = e
    }),
    h.useMemo(
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
function Mf(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = rt(e)
  h.useEffect(() => {
    const n = s => {
      s.key === 'Escape' && t(s)
    }
    return (
      r.addEventListener('keydown', n),
      () => r.removeEventListener('keydown', n)
    )
  }, [t, r])
}
const Sn = 'dismissableLayer.update',
  Of = 'dismissableLayer.pointerDownOutside',
  Lf = 'dismissableLayer.focusOutside'
let Io
const Ff = h.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  zf = h.forwardRef((e, r) => {
    var t
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: l,
        onInteractOutside: i,
        onDismiss: d,
        ...u
      } = e,
      p = h.useContext(Ff),
      [g, v] = h.useState(null),
      c =
        (t = g == null ? void 0 : g.ownerDocument) !== null && t !== void 0
          ? t
          : globalThis == null
            ? void 0
            : globalThis.document,
      [, x] = h.useState({}),
      f = De(r, D => v(D)),
      m = Array.from(p.layers),
      [w] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      S = m.indexOf(w),
      C = g ? m.indexOf(g) : -1,
      k = p.layersWithOutsidePointerEventsDisabled.size > 0,
      E = C >= S,
      I = Bf(D => {
        const R = D.target,
          L = [...p.branches].some(H => H.contains(R))
        !E ||
          L ||
          (a == null || a(D),
          i == null || i(D),
          D.defaultPrevented || d == null || d())
      }, c),
      T = Uf(D => {
        const R = D.target
        ;[...p.branches].some(H => H.contains(R)) ||
          (l == null || l(D),
          i == null || i(D),
          D.defaultPrevented || d == null || d())
      }, c)
    return (
      Mf(D => {
        C === p.layers.size - 1 &&
          (s == null || s(D),
          !D.defaultPrevented && d && (D.preventDefault(), d()))
      }, c),
      h.useEffect(() => {
        if (g)
          return (
            n &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Io = c.body.style.pointerEvents),
                (c.body.style.pointerEvents = 'none')),
              p.layersWithOutsidePointerEventsDisabled.add(g)),
            p.layers.add(g),
            Ao(),
            () => {
              n &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (c.body.style.pointerEvents = Io)
            }
          )
      }, [g, c, n, p]),
      h.useEffect(
        () => () => {
          g &&
            (p.layers.delete(g),
            p.layersWithOutsidePointerEventsDisabled.delete(g),
            Ao())
        },
        [g, p]
      ),
      h.useEffect(() => {
        const D = () => x({})
        return (
          document.addEventListener(Sn, D),
          () => document.removeEventListener(Sn, D)
        )
      }, []),
      h.createElement(
        Re.div,
        we({}, u, {
          ref: f,
          style: {
            pointerEvents: k ? (E ? 'auto' : 'none') : void 0,
            ...e.style,
          },
          onFocusCapture: Te(e.onFocusCapture, T.onFocusCapture),
          onBlurCapture: Te(e.onBlurCapture, T.onBlurCapture),
          onPointerDownCapture: Te(
            e.onPointerDownCapture,
            I.onPointerDownCapture
          ),
        })
      )
    )
  })
function Bf(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = rt(e),
    n = h.useRef(!1),
    s = h.useRef(() => {})
  return (
    h.useEffect(() => {
      const a = i => {
          if (i.target && !n.current) {
            let u = function () {
              Pa(Of, t, d, { discrete: !0 })
            }
            const d = { originalEvent: i }
            i.pointerType === 'touch'
              ? (r.removeEventListener('click', s.current),
                (s.current = u),
                r.addEventListener('click', s.current, { once: !0 }))
              : u()
          }
          n.current = !1
        },
        l = window.setTimeout(() => {
          r.addEventListener('pointerdown', a)
        }, 0)
      return () => {
        ;(window.clearTimeout(l),
          r.removeEventListener('pointerdown', a),
          r.removeEventListener('click', s.current))
      }
    }, [r, t]),
    { onPointerDownCapture: () => (n.current = !0) }
  )
}
function Uf(e, r = globalThis == null ? void 0 : globalThis.document) {
  const t = rt(e),
    n = h.useRef(!1)
  return (
    h.useEffect(() => {
      const s = a => {
        a.target &&
          !n.current &&
          Pa(Lf, t, { originalEvent: a }, { discrete: !1 })
      }
      return (
        r.addEventListener('focusin', s),
        () => r.removeEventListener('focusin', s)
      )
    }, [r, t]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  )
}
function Ao() {
  const e = new CustomEvent(Sn)
  document.dispatchEvent(e)
}
function Pa(e, r, t, { discrete: n }) {
  const s = t.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t })
  ;(r && s.addEventListener(e, r, { once: !0 }),
    n ? $f(s, a) : s.dispatchEvent(a))
}
let on = 0
function Hf() {
  h.useEffect(() => {
    var e, r
    const t = document.querySelectorAll('[data-radix-focus-guard]')
    return (
      document.body.insertAdjacentElement(
        'afterbegin',
        (e = t[0]) !== null && e !== void 0 ? e : $o()
      ),
      document.body.insertAdjacentElement(
        'beforeend',
        (r = t[1]) !== null && r !== void 0 ? r : $o()
      ),
      on++,
      () => {
        ;(on === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach(n => n.remove()),
          on--)
      }
    )
  }, [])
}
function $o() {
  const e = document.createElement('span')
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.cssText =
      'outline: none; opacity: 0; position: fixed; pointer-events: none'),
    e
  )
}
const sn = 'focusScope.autoFocusOnMount',
  an = 'focusScope.autoFocusOnUnmount',
  Mo = { bubbles: !1, cancelable: !0 },
  Vf = h.forwardRef((e, r) => {
    const {
        loop: t = !1,
        trapped: n = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: a,
        ...l
      } = e,
      [i, d] = h.useState(null),
      u = rt(s),
      p = rt(a),
      g = h.useRef(null),
      v = De(r, f => d(f)),
      c = h.useRef({
        paused: !1,
        pause() {
          this.paused = !0
        },
        resume() {
          this.paused = !1
        },
      }).current
    ;(h.useEffect(() => {
      if (n) {
        let f = function (C) {
            if (c.paused || !i) return
            const k = C.target
            i.contains(k) ? (g.current = k) : ut(g.current, { select: !0 })
          },
          m = function (C) {
            if (c.paused || !i) return
            const k = C.relatedTarget
            k !== null && (i.contains(k) || ut(g.current, { select: !0 }))
          },
          w = function (C) {
            const k = document.activeElement
            for (const E of C)
              E.removedNodes.length > 0 &&
                ((i != null && i.contains(k)) || ut(i))
          }
        ;(document.addEventListener('focusin', f),
          document.addEventListener('focusout', m))
        const S = new MutationObserver(w)
        return (
          i && S.observe(i, { childList: !0, subtree: !0 }),
          () => {
            ;(document.removeEventListener('focusin', f),
              document.removeEventListener('focusout', m),
              S.disconnect())
          }
        )
      }
    }, [n, i, c.paused]),
      h.useEffect(() => {
        if (i) {
          Lo.add(c)
          const f = document.activeElement
          if (!i.contains(f)) {
            const w = new CustomEvent(sn, Mo)
            ;(i.addEventListener(sn, u),
              i.dispatchEvent(w),
              w.defaultPrevented ||
                (Wf(qf(Da(i)), { select: !0 }),
                document.activeElement === f && ut(i)))
          }
          return () => {
            ;(i.removeEventListener(sn, u),
              setTimeout(() => {
                const w = new CustomEvent(an, Mo)
                ;(i.addEventListener(an, p),
                  i.dispatchEvent(w),
                  w.defaultPrevented || ut(f ?? document.body, { select: !0 }),
                  i.removeEventListener(an, p),
                  Lo.remove(c))
              }, 0))
          }
        }
      }, [i, u, p, c]))
    const x = h.useCallback(
      f => {
        if ((!t && !n) || c.paused) return
        const m = f.key === 'Tab' && !f.altKey && !f.ctrlKey && !f.metaKey,
          w = document.activeElement
        if (m && w) {
          const S = f.currentTarget,
            [C, k] = Kf(S)
          C && k
            ? !f.shiftKey && w === k
              ? (f.preventDefault(), t && ut(C, { select: !0 }))
              : f.shiftKey &&
                w === C &&
                (f.preventDefault(), t && ut(k, { select: !0 }))
            : w === S && f.preventDefault()
        }
      },
      [t, n, c.paused]
    )
    return h.createElement(
      Re.div,
      we({ tabIndex: -1 }, l, { ref: v, onKeyDown: x })
    )
  })
function Wf(e, { select: r = !1 } = {}) {
  const t = document.activeElement
  for (const n of e)
    if ((ut(n, { select: r }), document.activeElement !== t)) return
}
function Kf(e) {
  const r = Da(e),
    t = Oo(r, e),
    n = Oo(r.reverse(), e)
  return [t, n]
}
function Da(e) {
  const r = [],
    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: n => {
        const s = n.tagName === 'INPUT' && n.type === 'hidden'
        return n.disabled || n.hidden || s
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
      },
    })
  for (; t.nextNode(); ) r.push(t.currentNode)
  return r
}
function Oo(e, r) {
  for (const t of e) if (!Gf(t, { upTo: r })) return t
}
function Gf(e, { upTo: r }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0
  for (; e; ) {
    if (r !== void 0 && e === r) return !1
    if (getComputedStyle(e).display === 'none') return !0
    e = e.parentElement
  }
  return !1
}
function Yf(e) {
  return e instanceof HTMLInputElement && 'select' in e
}
function ut(e, { select: r = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement
    ;(e.focus({ preventScroll: !0 }), e !== t && Yf(e) && r && e.select())
  }
}
const Lo = Zf()
function Zf() {
  let e = []
  return {
    add(r) {
      const t = e[0]
      ;(r !== t && (t == null || t.pause()), (e = Fo(e, r)), e.unshift(r))
    },
    remove(r) {
      var t
      ;((e = Fo(e, r)), (t = e[0]) === null || t === void 0 || t.resume())
    },
  }
}
function Fo(e, r) {
  const t = [...e],
    n = t.indexOf(r)
  return (n !== -1 && t.splice(n, 1), t)
}
function qf(e) {
  return e.filter(r => r.tagName !== 'A')
}
const Fe =
    globalThis != null && globalThis.document ? h.useLayoutEffect : () => {},
  Xf = Qc.useId || (() => {})
let Qf = 0
function Ia(e) {
  const [r, t] = h.useState(Xf())
  return (
    Fe(() => {
      t(n => n ?? String(Qf++))
    }, [e]),
    r ? `radix-${r}` : ''
  )
}
function Jf(e) {
  const [r, t] = h.useState(void 0)
  return (
    Fe(() => {
      if (e) {
        t({ width: e.offsetWidth, height: e.offsetHeight })
        const n = new ResizeObserver(s => {
          if (!Array.isArray(s) || !s.length) return
          const a = s[0]
          let l, i
          if ('borderBoxSize' in a) {
            const d = a.borderBoxSize,
              u = Array.isArray(d) ? d[0] : d
            ;((l = u.inlineSize), (i = u.blockSize))
          } else ((l = e.offsetWidth), (i = e.offsetHeight))
          t({ width: l, height: i })
        })
        return (n.observe(e, { box: 'border-box' }), () => n.unobserve(e))
      } else t(void 0)
    }, [e]),
    r
  )
}
const Aa = 'Popper',
  [$a, Ma] = eo(Aa),
  [eh, Oa] = $a(Aa),
  th = e => {
    const { __scopePopper: r, children: t } = e,
      [n, s] = h.useState(null)
    return h.createElement(eh, { scope: r, anchor: n, onAnchorChange: s }, t)
  },
  rh = 'PopperAnchor',
  nh = h.forwardRef((e, r) => {
    const { __scopePopper: t, virtualRef: n, ...s } = e,
      a = Oa(rh, t),
      l = h.useRef(null),
      i = De(r, l)
    return (
      h.useEffect(() => {
        a.onAnchorChange((n == null ? void 0 : n.current) || l.current)
      }),
      n ? null : h.createElement(Re.div, we({}, s, { ref: i }))
    )
  }),
  La = 'PopperContent',
  [oh, vv] = $a(La),
  sh = h.forwardRef((e, r) => {
    var t, n, s, a, l, i, d, u
    const {
        __scopePopper: p,
        side: g = 'bottom',
        sideOffset: v = 0,
        align: c = 'center',
        alignOffset: x = 0,
        arrowPadding: f = 0,
        collisionBoundary: m = [],
        collisionPadding: w = 0,
        sticky: S = 'partial',
        hideWhenDetached: C = !1,
        avoidCollisions: k = !0,
        onPlaced: E,
        ...I
      } = e,
      T = Oa(La, p),
      [D, R] = h.useState(null),
      L = De(r, y => R(y)),
      [H, _] = h.useState(null),
      P = Jf(H),
      b = (t = P == null ? void 0 : P.width) !== null && t !== void 0 ? t : 0,
      M = (n = P == null ? void 0 : P.height) !== null && n !== void 0 ? n : 0,
      K = g + (c !== 'center' ? '-' + c : ''),
      U =
        typeof w == 'number'
          ? w
          : { top: 0, right: 0, bottom: 0, left: 0, ...w },
      re = Array.isArray(m) ? m : [m],
      $ = re.length > 0,
      ee = { padding: U, boundary: re.filter(ah), altBoundary: $ },
      {
        refs: F,
        floatingStyles: A,
        placement: Q,
        isPositioned: G,
        middlewareData: Y,
      } = Nc({
        strategy: 'fixed',
        placement: K,
        whileElementsMounted: Ic,
        elements: { reference: T.anchor },
        middleware: [
          Ec({ mainAxis: v + M, alignmentAxis: x }),
          k &&
            jc({
              mainAxis: !0,
              crossAxis: !1,
              limiter: S === 'partial' ? Ac() : void 0,
              ...ee,
            }),
          k && Tc({ ...ee }),
          Rc({
            ...ee,
            apply: ({
              elements: y,
              rects: V,
              availableWidth: B,
              availableHeight: j,
            }) => {
              const { width: N, height: O } = V.reference,
                W = y.floating.style
              ;(W.setProperty('--radix-popper-available-width', `${B}px`),
                W.setProperty('--radix-popper-available-height', `${j}px`),
                W.setProperty('--radix-popper-anchor-width', `${N}px`),
                W.setProperty('--radix-popper-anchor-height', `${O}px`))
            },
          }),
          H && Pc({ element: H, padding: f }),
          ih({ arrowWidth: b, arrowHeight: M }),
          C && Dc({ strategy: 'referenceHidden' }),
        ],
      }),
      [he, J] = Fa(Q),
      ne = rt(E)
    Fe(() => {
      G && (ne == null || ne())
    }, [G, ne])
    const ae = (s = Y.arrow) === null || s === void 0 ? void 0 : s.x,
      ue = (a = Y.arrow) === null || a === void 0 ? void 0 : a.y,
      de =
        ((l = Y.arrow) === null || l === void 0 ? void 0 : l.centerOffset) !==
        0,
      [pe, ye] = h.useState()
    return (
      Fe(() => {
        D && ye(window.getComputedStyle(D).zIndex)
      }, [D]),
      h.createElement(
        'div',
        {
          ref: F.setFloating,
          'data-radix-popper-content-wrapper': '',
          style: {
            ...A,
            transform: G ? A.transform : 'translate(0, -200%)',
            minWidth: 'max-content',
            zIndex: pe,
            '--radix-popper-transform-origin': [
              (i = Y.transformOrigin) === null || i === void 0 ? void 0 : i.x,
              (d = Y.transformOrigin) === null || d === void 0 ? void 0 : d.y,
            ].join(' '),
          },
          dir: e.dir,
        },
        h.createElement(
          oh,
          {
            scope: p,
            placedSide: he,
            onArrowChange: _,
            arrowX: ae,
            arrowY: ue,
            shouldHideArrow: de,
          },
          h.createElement(
            Re.div,
            we({ 'data-side': he, 'data-align': J }, I, {
              ref: L,
              style: {
                ...I.style,
                animation: G ? void 0 : 'none',
                opacity:
                  (u = Y.hide) !== null && u !== void 0 && u.referenceHidden
                    ? 0
                    : void 0,
              },
            })
          )
        )
      )
    )
  })
function ah(e) {
  return e !== null
}
const ih = e => ({
  name: 'transformOrigin',
  options: e,
  fn(r) {
    var t, n, s, a, l
    const { placement: i, rects: d, middlewareData: u } = r,
      g =
        ((t = u.arrow) === null || t === void 0 ? void 0 : t.centerOffset) !==
        0,
      v = g ? 0 : e.arrowWidth,
      c = g ? 0 : e.arrowHeight,
      [x, f] = Fa(i),
      m = { start: '0%', center: '50%', end: '100%' }[f],
      w =
        ((n = (s = u.arrow) === null || s === void 0 ? void 0 : s.x) !== null &&
        n !== void 0
          ? n
          : 0) +
        v / 2,
      S =
        ((a = (l = u.arrow) === null || l === void 0 ? void 0 : l.y) !== null &&
        a !== void 0
          ? a
          : 0) +
        c / 2
    let C = '',
      k = ''
    return (
      x === 'bottom'
        ? ((C = g ? m : `${w}px`), (k = `${-c}px`))
        : x === 'top'
          ? ((C = g ? m : `${w}px`), (k = `${d.floating.height + c}px`))
          : x === 'right'
            ? ((C = `${-c}px`), (k = g ? m : `${S}px`))
            : x === 'left' &&
              ((C = `${d.floating.width + c}px`), (k = g ? m : `${S}px`)),
      { data: { x: C, y: k } }
    )
  },
})
function Fa(e) {
  const [r, t = 'center'] = e.split('-')
  return [r, t]
}
const lh = th,
  ch = nh,
  dh = sh,
  uh = h.forwardRef((e, r) => {
    var t
    const {
      container: n = globalThis == null ||
      (t = globalThis.document) === null ||
      t === void 0
        ? void 0
        : t.body,
      ...s
    } = e
    return n
      ? Rs.createPortal(h.createElement(Re.div, we({}, s, { ref: r })), n)
      : null
  })
function zo({ prop: e, defaultProp: r, onChange: t = () => {} }) {
  const [n, s] = fh({ defaultProp: r, onChange: t }),
    a = e !== void 0,
    l = a ? e : n,
    i = rt(t),
    d = h.useCallback(
      u => {
        if (a) {
          const g = typeof u == 'function' ? u(e) : u
          g !== e && i(g)
        } else s(u)
      },
      [a, e, s, i]
    )
  return [l, d]
}
function fh({ defaultProp: e, onChange: r }) {
  const t = h.useState(e),
    [n] = t,
    s = h.useRef(n),
    a = rt(r)
  return (
    h.useEffect(() => {
      s.current !== n && (a(n), (s.current = n))
    }, [n, s, a]),
    t
  )
}
function hh(e) {
  const r = h.useRef({ value: e, previous: e })
  return h.useMemo(
    () => (
      r.current.value !== e &&
        ((r.current.previous = r.current.value), (r.current.value = e)),
      r.current.previous
    ),
    [e]
  )
}
const ph = h.forwardRef((e, r) =>
  h.createElement(
    Re.span,
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
var za = $c(),
  ln = function () {},
  Or = h.forwardRef(function (e, r) {
    var t = h.useRef(null),
      n = h.useState({
        onScrollCapture: ln,
        onWheelCapture: ln,
        onTouchMoveCapture: ln,
      }),
      s = n[0],
      a = n[1],
      l = e.forwardProps,
      i = e.children,
      d = e.className,
      u = e.removeScrollBar,
      p = e.enabled,
      g = e.shards,
      v = e.sideCar,
      c = e.noIsolation,
      x = e.inert,
      f = e.allowPinchZoom,
      m = e.as,
      w = m === void 0 ? 'div' : m,
      S = Mc(e, [
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
      k = Oc([t, r]),
      E = jt(jt({}, S), s)
    return h.createElement(
      h.Fragment,
      null,
      p &&
        h.createElement(C, {
          sideCar: za,
          removeScrollBar: u,
          shards: g,
          noIsolation: c,
          inert: x,
          setCallbacks: a,
          allowPinchZoom: !!f,
          lockRef: t,
        }),
      l
        ? h.cloneElement(h.Children.only(i), jt(jt({}, E), { ref: k }))
        : h.createElement(w, jt({}, E, { className: d, ref: k }), i)
    )
  })
Or.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }
Or.classNames = { fullWidth: Fc, zeroRight: Lc }
var Cn = !1
if (typeof window < 'u')
  try {
    var vr = Object.defineProperty({}, 'passive', {
      get: function () {
        return ((Cn = !0), !0)
      },
    })
    ;(window.addEventListener('test', vr, vr),
      window.removeEventListener('test', vr, vr))
  } catch {
    Cn = !1
  }
var Nt = Cn ? { passive: !1 } : !1,
  mh = function (e) {
    return e.tagName === 'TEXTAREA'
  },
  Ba = function (e, r) {
    var t = window.getComputedStyle(e)
    return (
      t[r] !== 'hidden' &&
      !(t.overflowY === t.overflowX && !mh(e) && t[r] === 'visible')
    )
  },
  gh = function (e) {
    return Ba(e, 'overflowY')
  },
  vh = function (e) {
    return Ba(e, 'overflowX')
  },
  Bo = function (e, r) {
    var t = r
    do {
      typeof ShadowRoot < 'u' && t instanceof ShadowRoot && (t = t.host)
      var n = Ua(e, t)
      if (n) {
        var s = Ha(e, t),
          a = s[1],
          l = s[2]
        if (a > l) return !0
      }
      t = t.parentNode
    } while (t && t !== document.body)
    return !1
  },
  bh = function (e) {
    var r = e.scrollTop,
      t = e.scrollHeight,
      n = e.clientHeight
    return [r, t, n]
  },
  xh = function (e) {
    var r = e.scrollLeft,
      t = e.scrollWidth,
      n = e.clientWidth
    return [r, t, n]
  },
  Ua = function (e, r) {
    return e === 'v' ? gh(r) : vh(r)
  },
  Ha = function (e, r) {
    return e === 'v' ? bh(r) : xh(r)
  },
  wh = function (e, r) {
    return e === 'h' && r === 'rtl' ? -1 : 1
  },
  yh = function (e, r, t, n, s) {
    var a = wh(e, window.getComputedStyle(r).direction),
      l = a * n,
      i = t.target,
      d = r.contains(i),
      u = !1,
      p = l > 0,
      g = 0,
      v = 0
    do {
      var c = Ha(e, i),
        x = c[0],
        f = c[1],
        m = c[2],
        w = f - m - a * x
      ;((x || w) && Ua(e, i) && ((g += w), (v += x)), (i = i.parentNode))
    } while ((!d && i !== document.body) || (d && (r.contains(i) || r === i)))
    return (((p && g === 0) || (!p && v === 0)) && (u = !0), u)
  },
  br = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0]
  },
  Uo = function (e) {
    return [e.deltaX, e.deltaY]
  },
  Ho = function (e) {
    return e && 'current' in e ? e.current : e
  },
  Sh = function (e, r) {
    return e[0] === r[0] && e[1] === r[1]
  },
  Ch = function (e) {
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
  _h = 0,
  Et = []
function kh(e) {
  var r = h.useRef([]),
    t = h.useRef([0, 0]),
    n = h.useRef(),
    s = h.useState(_h++)[0],
    a = h.useState(function () {
      return zc()
    })[0],
    l = h.useRef(e)
  ;(h.useEffect(
    function () {
      l.current = e
    },
    [e]
  ),
    h.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(s))
          var f = Bc([e.lockRef.current], (e.shards || []).map(Ho), !0).filter(
            Boolean
          )
          return (
            f.forEach(function (m) {
              return m.classList.add('allow-interactivity-'.concat(s))
            }),
            function () {
              ;(document.body.classList.remove(
                'block-interactivity-'.concat(s)
              ),
                f.forEach(function (m) {
                  return m.classList.remove('allow-interactivity-'.concat(s))
                }))
            }
          )
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    ))
  var i = h.useCallback(function (f, m) {
      if ('touches' in f && f.touches.length === 2)
        return !l.current.allowPinchZoom
      var w = br(f),
        S = t.current,
        C = 'deltaX' in f ? f.deltaX : S[0] - w[0],
        k = 'deltaY' in f ? f.deltaY : S[1] - w[1],
        E,
        I = f.target,
        T = Math.abs(C) > Math.abs(k) ? 'h' : 'v'
      if ('touches' in f && T === 'h' && I.type === 'range') return !1
      var D = Bo(T, I)
      if (!D) return !0
      if ((D ? (E = T) : ((E = T === 'v' ? 'h' : 'v'), (D = Bo(T, I))), !D))
        return !1
      if (
        (!n.current && 'changedTouches' in f && (C || k) && (n.current = E), !E)
      )
        return !0
      var R = n.current || E
      return yh(R, m, f, R === 'h' ? C : k)
    }, []),
    d = h.useCallback(function (f) {
      var m = f
      if (!(!Et.length || Et[Et.length - 1] !== a)) {
        var w = 'deltaY' in m ? Uo(m) : br(m),
          S = r.current.filter(function (E) {
            return E.name === m.type && E.target === m.target && Sh(E.delta, w)
          })[0]
        if (S && S.should) {
          m.cancelable && m.preventDefault()
          return
        }
        if (!S) {
          var C = (l.current.shards || [])
              .map(Ho)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(m.target)
              }),
            k = C.length > 0 ? i(m, C[0]) : !l.current.noIsolation
          k && m.cancelable && m.preventDefault()
        }
      }
    }, []),
    u = h.useCallback(function (f, m, w, S) {
      var C = { name: f, delta: m, target: w, should: S }
      ;(r.current.push(C),
        setTimeout(function () {
          r.current = r.current.filter(function (k) {
            return k !== C
          })
        }, 1))
    }, []),
    p = h.useCallback(function (f) {
      ;((t.current = br(f)), (n.current = void 0))
    }, []),
    g = h.useCallback(function (f) {
      u(f.type, Uo(f), f.target, i(f, e.lockRef.current))
    }, []),
    v = h.useCallback(function (f) {
      u(f.type, br(f), f.target, i(f, e.lockRef.current))
    }, [])
  h.useEffect(function () {
    return (
      Et.push(a),
      e.setCallbacks({
        onScrollCapture: g,
        onWheelCapture: g,
        onTouchMoveCapture: v,
      }),
      document.addEventListener('wheel', d, Nt),
      document.addEventListener('touchmove', d, Nt),
      document.addEventListener('touchstart', p, Nt),
      function () {
        ;((Et = Et.filter(function (f) {
          return f !== a
        })),
          document.removeEventListener('wheel', d, Nt),
          document.removeEventListener('touchmove', d, Nt),
          document.removeEventListener('touchstart', p, Nt))
      }
    )
  }, [])
  var c = e.removeScrollBar,
    x = e.inert
  return h.createElement(
    h.Fragment,
    null,
    x ? h.createElement(a, { styles: Ch(s) }) : null,
    c ? h.createElement(Uc, { gapMode: 'margin' }) : null
  )
}
const Nh = Hc(za, kh)
var Va = h.forwardRef(function (e, r) {
  return h.createElement(Or, jt({}, e, { ref: r, sideCar: Nh }))
})
Va.classNames = Or.classNames
const Eh = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
  jh = [' ', 'Enter'],
  Lr = 'Select',
  [Fr, zr, Th] = Pf(Lr),
  [Ft, bv] = eo(Lr, [Th, Ma]),
  to = Ma(),
  [Rh, yt] = Ft(Lr),
  [Ph, Dh] = Ft(Lr),
  Ih = e => {
    const {
        __scopeSelect: r,
        children: t,
        open: n,
        defaultOpen: s,
        onOpenChange: a,
        value: l,
        defaultValue: i,
        onValueChange: d,
        dir: u,
        name: p,
        autoComplete: g,
        disabled: v,
        required: c,
      } = e,
      x = to(r),
      [f, m] = h.useState(null),
      [w, S] = h.useState(null),
      [C, k] = h.useState(!1),
      E = If(u),
      [I = !1, T] = zo({ prop: n, defaultProp: s, onChange: a }),
      [D, R] = zo({ prop: l, defaultProp: i, onChange: d }),
      L = h.useRef(null),
      H = f ? !!f.closest('form') : !0,
      [_, P] = h.useState(new Set()),
      b = Array.from(_)
        .map(M => M.props.value)
        .join(';')
    return h.createElement(
      lh,
      x,
      h.createElement(
        Rh,
        {
          required: c,
          scope: r,
          trigger: f,
          onTriggerChange: m,
          valueNode: w,
          onValueNodeChange: S,
          valueNodeHasChildren: C,
          onValueNodeHasChildrenChange: k,
          contentId: Ia(),
          value: D,
          onValueChange: R,
          open: I,
          onOpenChange: T,
          dir: E,
          triggerPointerDownPosRef: L,
          disabled: v,
        },
        h.createElement(
          Fr.Provider,
          { scope: r },
          h.createElement(
            Ph,
            {
              scope: e.__scopeSelect,
              onNativeOptionAdd: h.useCallback(M => {
                P(K => new Set(K).add(M))
              }, []),
              onNativeOptionRemove: h.useCallback(M => {
                P(K => {
                  const U = new Set(K)
                  return (U.delete(M), U)
                })
              }, []),
            },
            t
          )
        ),
        H
          ? h.createElement(
              Ya,
              {
                key: b,
                'aria-hidden': !0,
                required: c,
                tabIndex: -1,
                name: p,
                autoComplete: g,
                value: D,
                onChange: M => R(M.target.value),
                disabled: v,
              },
              D === void 0 ? h.createElement('option', { value: '' }) : null,
              Array.from(_)
            )
          : null
      )
    )
  },
  Ah = 'SelectTrigger',
  $h = h.forwardRef((e, r) => {
    const { __scopeSelect: t, disabled: n = !1, ...s } = e,
      a = to(t),
      l = yt(Ah, t),
      i = l.disabled || n,
      d = De(r, l.onTriggerChange),
      u = zr(t),
      [p, g, v] = Za(x => {
        const f = u().filter(S => !S.disabled),
          m = f.find(S => S.value === l.value),
          w = qa(f, x, m)
        w !== void 0 && l.onValueChange(w.value)
      }),
      c = () => {
        i || (l.onOpenChange(!0), v())
      }
    return h.createElement(
      ch,
      we({ asChild: !0 }, a),
      h.createElement(
        Re.button,
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
          s,
          {
            ref: d,
            onClick: Te(s.onClick, x => {
              x.currentTarget.focus()
            }),
            onPointerDown: Te(s.onPointerDown, x => {
              const f = x.target
              ;(f.hasPointerCapture(x.pointerId) &&
                f.releasePointerCapture(x.pointerId),
                x.button === 0 &&
                  x.ctrlKey === !1 &&
                  (c(),
                  (l.triggerPointerDownPosRef.current = {
                    x: Math.round(x.pageX),
                    y: Math.round(x.pageY),
                  }),
                  x.preventDefault()))
            }),
            onKeyDown: Te(s.onKeyDown, x => {
              const f = p.current !== ''
              ;(!(x.ctrlKey || x.altKey || x.metaKey) &&
                x.key.length === 1 &&
                g(x.key),
                !(f && x.key === ' ') &&
                  Eh.includes(x.key) &&
                  (c(), x.preventDefault()))
            }),
          }
        )
      )
    )
  }),
  Mh = 'SelectValue',
  Oh = h.forwardRef((e, r) => {
    const {
        __scopeSelect: t,
        className: n,
        style: s,
        children: a,
        placeholder: l,
        ...i
      } = e,
      d = yt(Mh, t),
      { onValueNodeHasChildrenChange: u } = d,
      p = a !== void 0,
      g = De(r, d.onValueNodeChange)
    return (
      Fe(() => {
        u(p)
      }, [u, p]),
      h.createElement(
        Re.span,
        we({}, i, { ref: g, style: { pointerEvents: 'none' } }),
        d.value === void 0 && l !== void 0 ? l : a
      )
    )
  }),
  Lh = h.forwardRef((e, r) => {
    const { __scopeSelect: t, children: n, ...s } = e
    return h.createElement(
      Re.span,
      we({ 'aria-hidden': !0 }, s, { ref: r }),
      n || '▼'
    )
  }),
  Fh = e => h.createElement(uh, we({ asChild: !0 }, e)),
  $t = 'SelectContent',
  zh = h.forwardRef((e, r) => {
    const t = yt($t, e.__scopeSelect),
      [n, s] = h.useState()
    if (
      (Fe(() => {
        s(new DocumentFragment())
      }, []),
      !t.open)
    ) {
      const a = n
      return a
        ? Pr.createPortal(
            h.createElement(
              Wa,
              { scope: e.__scopeSelect },
              h.createElement(
                Fr.Slot,
                { scope: e.__scopeSelect },
                h.createElement('div', null, e.children)
              )
            ),
            a
          )
        : null
    }
    return h.createElement(Bh, we({}, e, { ref: r }))
  }),
  Je = 10,
  [Wa, St] = Ft($t),
  Bh = h.forwardRef((e, r) => {
    const {
        __scopeSelect: t,
        position: n = 'item-aligned',
        onCloseAutoFocus: s,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        side: i,
        sideOffset: d,
        align: u,
        alignOffset: p,
        arrowPadding: g,
        collisionBoundary: v,
        collisionPadding: c,
        sticky: x,
        hideWhenDetached: f,
        avoidCollisions: m,
        ...w
      } = e,
      S = yt($t, t),
      [C, k] = h.useState(null),
      [E, I] = h.useState(null),
      T = De(r, J => k(J)),
      [D, R] = h.useState(null),
      [L, H] = h.useState(null),
      _ = zr(t),
      [P, b] = h.useState(!1),
      M = h.useRef(!1)
    ;(h.useEffect(() => {
      if (C) return bs(C)
    }, [C]),
      Hf())
    const K = h.useCallback(
        J => {
          const [ne, ...ae] = _().map(pe => pe.ref.current),
            [ue] = ae.slice(-1),
            de = document.activeElement
          for (const pe of J)
            if (
              pe === de ||
              (pe == null || pe.scrollIntoView({ block: 'nearest' }),
              pe === ne && E && (E.scrollTop = 0),
              pe === ue && E && (E.scrollTop = E.scrollHeight),
              pe == null || pe.focus(),
              document.activeElement !== de)
            )
              return
        },
        [_, E]
      ),
      U = h.useCallback(() => K([D, C]), [K, D, C])
    h.useEffect(() => {
      P && U()
    }, [P, U])
    const { onOpenChange: re, triggerPointerDownPosRef: $ } = S
    ;(h.useEffect(() => {
      if (C) {
        let J = { x: 0, y: 0 }
        const ne = ue => {
            var de, pe, ye, y
            J = {
              x: Math.abs(
                Math.round(ue.pageX) -
                  ((de =
                    (pe = $.current) === null || pe === void 0
                      ? void 0
                      : pe.x) !== null && de !== void 0
                    ? de
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
          ae = ue => {
            ;(J.x <= 10 && J.y <= 10
              ? ue.preventDefault()
              : C.contains(ue.target) || re(!1),
              document.removeEventListener('pointermove', ne),
              ($.current = null))
          }
        return (
          $.current !== null &&
            (document.addEventListener('pointermove', ne),
            document.addEventListener('pointerup', ae, {
              capture: !0,
              once: !0,
            })),
          () => {
            ;(document.removeEventListener('pointermove', ne),
              document.removeEventListener('pointerup', ae, { capture: !0 }))
          }
        )
      }
    }, [C, re, $]),
      h.useEffect(() => {
        const J = () => re(!1)
        return (
          window.addEventListener('blur', J),
          window.addEventListener('resize', J),
          () => {
            ;(window.removeEventListener('blur', J),
              window.removeEventListener('resize', J))
          }
        )
      }, [re]))
    const [ee, F] = Za(J => {
        const ne = _().filter(de => !de.disabled),
          ae = ne.find(de => de.ref.current === document.activeElement),
          ue = qa(ne, J, ae)
        ue && setTimeout(() => ue.ref.current.focus())
      }),
      A = h.useCallback(
        (J, ne, ae) => {
          const ue = !M.current && !ae
          ;((S.value !== void 0 && S.value === ne) || ue) &&
            (R(J), ue && (M.current = !0))
        },
        [S.value]
      ),
      Q = h.useCallback(() => (C == null ? void 0 : C.focus()), [C]),
      G = h.useCallback(
        (J, ne, ae) => {
          const ue = !M.current && !ae
          ;((S.value !== void 0 && S.value === ne) || ue) && H(J)
        },
        [S.value]
      ),
      Y = n === 'popper' ? Vo : Uh,
      he =
        Y === Vo
          ? {
              side: i,
              sideOffset: d,
              align: u,
              alignOffset: p,
              arrowPadding: g,
              collisionBoundary: v,
              collisionPadding: c,
              sticky: x,
              hideWhenDetached: f,
              avoidCollisions: m,
            }
          : {}
    return h.createElement(
      Wa,
      {
        scope: t,
        content: C,
        viewport: E,
        onViewportChange: I,
        itemRefCallback: A,
        selectedItem: D,
        onItemLeave: Q,
        itemTextRefCallback: G,
        focusSelectedItem: U,
        selectedItemText: L,
        position: n,
        isPositioned: P,
        searchRef: ee,
      },
      h.createElement(
        Va,
        { as: qt, allowPinchZoom: !0 },
        h.createElement(
          Vf,
          {
            asChild: !0,
            trapped: S.open,
            onMountAutoFocus: J => {
              J.preventDefault()
            },
            onUnmountAutoFocus: Te(s, J => {
              var ne
              ;((ne = S.trigger) === null ||
                ne === void 0 ||
                ne.focus({ preventScroll: !0 }),
                J.preventDefault())
            }),
          },
          h.createElement(
            zf,
            {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: a,
              onPointerDownOutside: l,
              onFocusOutside: J => J.preventDefault(),
              onDismiss: () => S.onOpenChange(!1),
            },
            h.createElement(
              Y,
              we(
                {
                  role: 'listbox',
                  id: S.contentId,
                  'data-state': S.open ? 'open' : 'closed',
                  dir: S.dir,
                  onContextMenu: J => J.preventDefault(),
                },
                w,
                he,
                {
                  onPlaced: () => b(!0),
                  ref: T,
                  style: {
                    display: 'flex',
                    flexDirection: 'column',
                    outline: 'none',
                    ...w.style,
                  },
                  onKeyDown: Te(w.onKeyDown, J => {
                    const ne = J.ctrlKey || J.altKey || J.metaKey
                    if (
                      (J.key === 'Tab' && J.preventDefault(),
                      !ne && J.key.length === 1 && F(J.key),
                      ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(J.key))
                    ) {
                      let ue = _()
                        .filter(de => !de.disabled)
                        .map(de => de.ref.current)
                      if (
                        (['ArrowUp', 'End'].includes(J.key) &&
                          (ue = ue.slice().reverse()),
                        ['ArrowUp', 'ArrowDown'].includes(J.key))
                      ) {
                        const de = J.target,
                          pe = ue.indexOf(de)
                        ue = ue.slice(pe + 1)
                      }
                      ;(setTimeout(() => K(ue)), J.preventDefault())
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
  Uh = h.forwardRef((e, r) => {
    const { __scopeSelect: t, onPlaced: n, ...s } = e,
      a = yt($t, t),
      l = St($t, t),
      [i, d] = h.useState(null),
      [u, p] = h.useState(null),
      g = De(r, T => p(T)),
      v = zr(t),
      c = h.useRef(!1),
      x = h.useRef(!0),
      {
        viewport: f,
        selectedItem: m,
        selectedItemText: w,
        focusSelectedItem: S,
      } = l,
      C = h.useCallback(() => {
        if (a.trigger && a.valueNode && i && u && f && m && w) {
          const T = a.trigger.getBoundingClientRect(),
            D = u.getBoundingClientRect(),
            R = a.valueNode.getBoundingClientRect(),
            L = w.getBoundingClientRect()
          if (a.dir !== 'rtl') {
            const de = L.left - D.left,
              pe = R.left - de,
              ye = T.left - pe,
              y = T.width + ye,
              V = Math.max(y, D.width),
              B = window.innerWidth - Je,
              j = Do(pe, [Je, B - V])
            ;((i.style.minWidth = y + 'px'), (i.style.left = j + 'px'))
          } else {
            const de = D.right - L.right,
              pe = window.innerWidth - R.right - de,
              ye = window.innerWidth - T.right - pe,
              y = T.width + ye,
              V = Math.max(y, D.width),
              B = window.innerWidth - Je,
              j = Do(pe, [Je, B - V])
            ;((i.style.minWidth = y + 'px'), (i.style.right = j + 'px'))
          }
          const H = v(),
            _ = window.innerHeight - Je * 2,
            P = f.scrollHeight,
            b = window.getComputedStyle(u),
            M = parseInt(b.borderTopWidth, 10),
            K = parseInt(b.paddingTop, 10),
            U = parseInt(b.borderBottomWidth, 10),
            re = parseInt(b.paddingBottom, 10),
            $ = M + K + P + re + U,
            ee = Math.min(m.offsetHeight * 5, $),
            F = window.getComputedStyle(f),
            A = parseInt(F.paddingTop, 10),
            Q = parseInt(F.paddingBottom, 10),
            G = T.top + T.height / 2 - Je,
            Y = _ - G,
            he = m.offsetHeight / 2,
            J = m.offsetTop + he,
            ne = M + K + J,
            ae = $ - ne
          if (ne <= G) {
            const de = m === H[H.length - 1].ref.current
            i.style.bottom = '0px'
            const pe = u.clientHeight - f.offsetTop - f.offsetHeight,
              ye = Math.max(Y, he + (de ? Q : 0) + pe + U),
              y = ne + ye
            i.style.height = y + 'px'
          } else {
            const de = m === H[0].ref.current
            i.style.top = '0px'
            const ye = Math.max(G, M + f.offsetTop + (de ? A : 0) + he) + ae
            ;((i.style.height = ye + 'px'),
              (f.scrollTop = ne - G + f.offsetTop))
          }
          ;((i.style.margin = `${Je}px 0`),
            (i.style.minHeight = ee + 'px'),
            (i.style.maxHeight = _ + 'px'),
            n == null || n(),
            requestAnimationFrame(() => (c.current = !0)))
        }
      }, [v, a.trigger, a.valueNode, i, u, f, m, w, a.dir, n])
    Fe(() => C(), [C])
    const [k, E] = h.useState()
    Fe(() => {
      u && E(window.getComputedStyle(u).zIndex)
    }, [u])
    const I = h.useCallback(
      T => {
        T && x.current === !0 && (C(), S == null || S(), (x.current = !1))
      },
      [C, S]
    )
    return h.createElement(
      Hh,
      {
        scope: t,
        contentWrapper: i,
        shouldExpandOnScrollRef: c,
        onScrollButtonChange: I,
      },
      h.createElement(
        'div',
        {
          ref: d,
          style: {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            zIndex: k,
          },
        },
        h.createElement(
          Re.div,
          we({}, s, {
            ref: g,
            style: { boxSizing: 'border-box', maxHeight: '100%', ...s.style },
          })
        )
      )
    )
  }),
  Vo = h.forwardRef((e, r) => {
    const {
        __scopeSelect: t,
        align: n = 'start',
        collisionPadding: s = Je,
        ...a
      } = e,
      l = to(t)
    return h.createElement(
      dh,
      we({}, l, a, {
        ref: r,
        align: n,
        collisionPadding: s,
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
  [Hh, ro] = Ft($t, {}),
  Wo = 'SelectViewport',
  Vh = h.forwardRef((e, r) => {
    const { __scopeSelect: t, ...n } = e,
      s = St(Wo, t),
      a = ro(Wo, t),
      l = De(r, s.onViewportChange),
      i = h.useRef(0)
    return h.createElement(
      h.Fragment,
      null,
      h.createElement('style', {
        dangerouslySetInnerHTML: {
          __html:
            '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
        },
      }),
      h.createElement(
        Fr.Slot,
        { scope: t },
        h.createElement(
          Re.div,
          we({ 'data-radix-select-viewport': '', role: 'presentation' }, n, {
            ref: l,
            style: {
              position: 'relative',
              flex: 1,
              overflow: 'auto',
              ...n.style,
            },
            onScroll: Te(n.onScroll, d => {
              const u = d.currentTarget,
                { contentWrapper: p, shouldExpandOnScrollRef: g } = a
              if (g != null && g.current && p) {
                const v = Math.abs(i.current - u.scrollTop)
                if (v > 0) {
                  const c = window.innerHeight - Je * 2,
                    x = parseFloat(p.style.minHeight),
                    f = parseFloat(p.style.height),
                    m = Math.max(x, f)
                  if (m < c) {
                    const w = m + v,
                      S = Math.min(c, w),
                      C = w - S
                    ;((p.style.height = S + 'px'),
                      p.style.bottom === '0px' &&
                        ((u.scrollTop = C > 0 ? C : 0),
                        (p.style.justifyContent = 'flex-end')))
                  }
                }
              }
              i.current = u.scrollTop
            }),
          })
        )
      )
    )
  }),
  Wh = 'SelectGroup',
  [xv, Kh] = Ft(Wh),
  Gh = 'SelectLabel',
  Yh = h.forwardRef((e, r) => {
    const { __scopeSelect: t, ...n } = e,
      s = Kh(Gh, t)
    return h.createElement(Re.div, we({ id: s.id }, n, { ref: r }))
  }),
  _n = 'SelectItem',
  [Zh, Ka] = Ft(_n),
  qh = h.forwardRef((e, r) => {
    const {
        __scopeSelect: t,
        value: n,
        disabled: s = !1,
        textValue: a,
        ...l
      } = e,
      i = yt(_n, t),
      d = St(_n, t),
      u = i.value === n,
      [p, g] = h.useState(a ?? ''),
      [v, c] = h.useState(!1),
      x = De(r, w => {
        var S
        return (S = d.itemRefCallback) === null || S === void 0
          ? void 0
          : S.call(d, w, n, s)
      }),
      f = Ia(),
      m = () => {
        s || (i.onValueChange(n), i.onOpenChange(!1))
      }
    return h.createElement(
      Zh,
      {
        scope: t,
        value: n,
        disabled: s,
        textId: f,
        isSelected: u,
        onItemTextChange: h.useCallback(w => {
          g(S => {
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
      h.createElement(
        Fr.ItemSlot,
        { scope: t, value: n, disabled: s, textValue: p },
        h.createElement(
          Re.div,
          we(
            {
              role: 'option',
              'aria-labelledby': f,
              'data-highlighted': v ? '' : void 0,
              'aria-selected': u && v,
              'data-state': u ? 'checked' : 'unchecked',
              'aria-disabled': s || void 0,
              'data-disabled': s ? '' : void 0,
              tabIndex: s ? void 0 : -1,
            },
            l,
            {
              ref: x,
              onFocus: Te(l.onFocus, () => c(!0)),
              onBlur: Te(l.onBlur, () => c(!1)),
              onPointerUp: Te(l.onPointerUp, m),
              onPointerMove: Te(l.onPointerMove, w => {
                if (s) {
                  var S
                  ;(S = d.onItemLeave) === null || S === void 0 || S.call(d)
                } else w.currentTarget.focus({ preventScroll: !0 })
              }),
              onPointerLeave: Te(l.onPointerLeave, w => {
                if (w.currentTarget === document.activeElement) {
                  var S
                  ;(S = d.onItemLeave) === null || S === void 0 || S.call(d)
                }
              }),
              onKeyDown: Te(l.onKeyDown, w => {
                var S
                ;(((S = d.searchRef) === null || S === void 0
                  ? void 0
                  : S.current) !== '' &&
                  w.key === ' ') ||
                  (jh.includes(w.key) && m(),
                  w.key === ' ' && w.preventDefault())
              }),
            }
          )
        )
      )
    )
  }),
  xr = 'SelectItemText',
  Xh = h.forwardRef((e, r) => {
    const { __scopeSelect: t, className: n, style: s, ...a } = e,
      l = yt(xr, t),
      i = St(xr, t),
      d = Ka(xr, t),
      u = Dh(xr, t),
      [p, g] = h.useState(null),
      v = De(
        r,
        w => g(w),
        d.onItemTextChange,
        w => {
          var S
          return (S = i.itemTextRefCallback) === null || S === void 0
            ? void 0
            : S.call(i, w, d.value, d.disabled)
        }
      ),
      c = p == null ? void 0 : p.textContent,
      x = h.useMemo(
        () =>
          h.createElement(
            'option',
            { key: d.value, value: d.value, disabled: d.disabled },
            c
          ),
        [d.disabled, d.value, c]
      ),
      { onNativeOptionAdd: f, onNativeOptionRemove: m } = u
    return (
      Fe(() => (f(x), () => m(x)), [f, m, x]),
      h.createElement(
        h.Fragment,
        null,
        h.createElement(Re.span, we({ id: d.textId }, a, { ref: v })),
        d.isSelected && l.valueNode && !l.valueNodeHasChildren
          ? Pr.createPortal(a.children, l.valueNode)
          : null
      )
    )
  }),
  Qh = 'SelectItemIndicator',
  Jh = h.forwardRef((e, r) => {
    const { __scopeSelect: t, ...n } = e
    return Ka(Qh, t).isSelected
      ? h.createElement(Re.span, we({ 'aria-hidden': !0 }, n, { ref: r }))
      : null
  }),
  Ko = 'SelectScrollUpButton',
  ep = h.forwardRef((e, r) => {
    const t = St(Ko, e.__scopeSelect),
      n = ro(Ko, e.__scopeSelect),
      [s, a] = h.useState(!1),
      l = De(r, n.onScrollButtonChange)
    return (
      Fe(() => {
        if (t.viewport && t.isPositioned) {
          let d = function () {
            const u = i.scrollTop > 0
            a(u)
          }
          const i = t.viewport
          return (
            d(),
            i.addEventListener('scroll', d),
            () => i.removeEventListener('scroll', d)
          )
        }
      }, [t.viewport, t.isPositioned]),
      s
        ? h.createElement(
            Ga,
            we({}, e, {
              ref: l,
              onAutoScroll: () => {
                const { viewport: i, selectedItem: d } = t
                i && d && (i.scrollTop = i.scrollTop - d.offsetHeight)
              },
            })
          )
        : null
    )
  }),
  Go = 'SelectScrollDownButton',
  tp = h.forwardRef((e, r) => {
    const t = St(Go, e.__scopeSelect),
      n = ro(Go, e.__scopeSelect),
      [s, a] = h.useState(!1),
      l = De(r, n.onScrollButtonChange)
    return (
      Fe(() => {
        if (t.viewport && t.isPositioned) {
          let d = function () {
            const u = i.scrollHeight - i.clientHeight,
              p = Math.ceil(i.scrollTop) < u
            a(p)
          }
          const i = t.viewport
          return (
            d(),
            i.addEventListener('scroll', d),
            () => i.removeEventListener('scroll', d)
          )
        }
      }, [t.viewport, t.isPositioned]),
      s
        ? h.createElement(
            Ga,
            we({}, e, {
              ref: l,
              onAutoScroll: () => {
                const { viewport: i, selectedItem: d } = t
                i && d && (i.scrollTop = i.scrollTop + d.offsetHeight)
              },
            })
          )
        : null
    )
  }),
  Ga = h.forwardRef((e, r) => {
    const { __scopeSelect: t, onAutoScroll: n, ...s } = e,
      a = St('SelectScrollButton', t),
      l = h.useRef(null),
      i = zr(t),
      d = h.useCallback(() => {
        l.current !== null &&
          (window.clearInterval(l.current), (l.current = null))
      }, [])
    return (
      h.useEffect(() => () => d(), [d]),
      Fe(() => {
        var u
        const p = i().find(g => g.ref.current === document.activeElement)
        p == null ||
          (u = p.ref.current) === null ||
          u === void 0 ||
          u.scrollIntoView({ block: 'nearest' })
      }, [i]),
      h.createElement(
        Re.div,
        we({ 'aria-hidden': !0 }, s, {
          ref: r,
          style: { flexShrink: 0, ...s.style },
          onPointerDown: Te(s.onPointerDown, () => {
            l.current === null && (l.current = window.setInterval(n, 50))
          }),
          onPointerMove: Te(s.onPointerMove, () => {
            var u
            ;((u = a.onItemLeave) === null || u === void 0 || u.call(a),
              l.current === null && (l.current = window.setInterval(n, 50)))
          }),
          onPointerLeave: Te(s.onPointerLeave, () => {
            d()
          }),
        })
      )
    )
  }),
  rp = h.forwardRef((e, r) => {
    const { __scopeSelect: t, ...n } = e
    return h.createElement(Re.div, we({ 'aria-hidden': !0 }, n, { ref: r }))
  }),
  Ya = h.forwardRef((e, r) => {
    const { value: t, ...n } = e,
      s = h.useRef(null),
      a = De(r, s),
      l = hh(t)
    return (
      h.useEffect(() => {
        const i = s.current,
          d = window.HTMLSelectElement.prototype,
          p = Object.getOwnPropertyDescriptor(d, 'value').set
        if (l !== t && p) {
          const g = new Event('change', { bubbles: !0 })
          ;(p.call(i, t), i.dispatchEvent(g))
        }
      }, [l, t]),
      h.createElement(
        ph,
        { asChild: !0 },
        h.createElement('select', we({}, n, { ref: a, defaultValue: t }))
      )
    )
  })
Ya.displayName = 'BubbleSelect'
function Za(e) {
  const r = rt(e),
    t = h.useRef(''),
    n = h.useRef(0),
    s = h.useCallback(
      l => {
        const i = t.current + l
        ;(r(i),
          (function d(u) {
            ;((t.current = u),
              window.clearTimeout(n.current),
              u !== '' && (n.current = window.setTimeout(() => d(''), 1e3)))
          })(i))
      },
      [r]
    ),
    a = h.useCallback(() => {
      ;((t.current = ''), window.clearTimeout(n.current))
    }, [])
  return (
    h.useEffect(() => () => window.clearTimeout(n.current), []),
    [t, s, a]
  )
}
function qa(e, r, t) {
  const s = r.length > 1 && Array.from(r).every(u => u === r[0]) ? r[0] : r,
    a = t ? e.indexOf(t) : -1
  let l = np(e, Math.max(a, 0))
  s.length === 1 && (l = l.filter(u => u !== t))
  const d = l.find(u => u.textValue.toLowerCase().startsWith(s.toLowerCase()))
  return d !== t ? d : void 0
}
function np(e, r) {
  return e.map((t, n) => e[(r + n) % e.length])
}
const op = Ih,
  Xa = $h,
  sp = Oh,
  ap = Lh,
  ip = Fh,
  Qa = zh,
  lp = Vh,
  Ja = Yh,
  ei = qh,
  cp = Xh,
  dp = Jh,
  ti = ep,
  ri = tp,
  ni = rp,
  Dt = op,
  It = sp,
  gt = h.forwardRef(({ className: e, children: r, ...t }, n) =>
    o.jsxs(Xa, {
      ref: n,
      className: le(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        e
      ),
      ...t,
      children: [
        r,
        o.jsx(ap, {
          asChild: !0,
          children: o.jsx(Un, { className: 'h-4 w-4 opacity-50' }),
        }),
      ],
    })
  )
gt.displayName = Xa.displayName
const oi = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(ti, {
    ref: t,
    className: le('flex cursor-default items-center justify-center py-1', e),
    ...r,
    children: o.jsx(Ad, { className: 'h-4 w-4' }),
  })
)
oi.displayName = ti.displayName
const si = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(ri, {
    ref: t,
    className: le('flex cursor-default items-center justify-center py-1', e),
    ...r,
    children: o.jsx(Un, { className: 'h-4 w-4' }),
  })
)
si.displayName = ri.displayName
const vt = h.forwardRef(
  ({ className: e, children: r, position: t = 'popper', ...n }, s) =>
    o.jsx(ip, {
      children: o.jsxs(Qa, {
        ref: s,
        className: le(
          'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          t === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          e
        ),
        position: t,
        ...n,
        children: [
          o.jsx(oi, {}),
          o.jsx(lp, {
            className: le(
              'p-1',
              t === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
            ),
            children: r,
          }),
          o.jsx(si, {}),
        ],
      }),
    })
)
vt.displayName = Qa.displayName
const up = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(Ja, {
    ref: t,
    className: le('py-1.5 pl-8 pr-2 text-sm font-semibold', e),
    ...r,
  })
)
up.displayName = Ja.displayName
const Ke = h.forwardRef(({ className: e, children: r, ...t }, n) =>
  o.jsxs(ei, {
    ref: n,
    className: le(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      e
    ),
    ...t,
    children: [
      o.jsx('span', {
        className:
          'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        children: o.jsx(dp, { children: o.jsx(tr, { className: 'h-4 w-4' }) }),
      }),
      o.jsx(cp, { children: r }),
    ],
  })
)
Ke.displayName = ei.displayName
const fp = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(ni, { ref: t, className: le('-mx-1 my-1 h-px bg-muted', e), ...r })
)
fp.displayName = ni.displayName
const ai = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(xs, {
    ref: t,
    className: le(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      e
    ),
    ...r,
    children: o.jsx(Vc, {
      className: le('flex items-center justify-center text-current'),
      children: o.jsx(tr, { className: 'h-4 w-4' }),
    }),
  })
)
ai.displayName = xs.displayName
var hp = 'Label',
  ii = h.forwardRef((e, r) =>
    o.jsx(Ce.label, {
      ...e,
      ref: r,
      onMouseDown: t => {
        var s
        t.target.closest('button, input, select, textarea') ||
          ((s = e.onMouseDown) == null || s.call(e, t),
          !t.defaultPrevented && t.detail > 1 && t.preventDefault())
      },
    })
  )
ii.displayName = hp
var li = ii
const pp = Ir(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
  ),
  je = h.forwardRef(({ className: e, ...r }, t) =>
    o.jsx(li, { ref: t, className: le(pp(), e), ...r })
  )
je.displayName = li.displayName
const mp = ({ currentCount: e, onUpdate: r, onClose: t }) => {
    const [n, s] = X.useState(''),
      a = v => {
        s(c => (c + v.toString()).slice(0, 4))
      },
      l = () => {
        const v = parseInt(n, 10)
        !isNaN(v) && v >= 0
          ? (r(v), t())
          : n === ''
            ? t()
            : (console.error('Invalid pallet count input'), s(''))
      },
      i = () => {
        ;(r(e + 1), s(''))
      },
      d = () => {
        ;(r(Math.max(0, e - 1)), s(''))
      },
      u = () => {
        s(v => v.slice(0, -1))
      },
      p = () => {
        s('')
      },
      g = v => {
        v.stopPropagation()
      }
    return o.jsxs('div', {
      className:
        'absolute z-20 bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-48 bg-white border border-gray-300 rounded-lg shadow-xl p-2 grid grid-cols-3 gap-1',
      onClick: g,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': 'Quick pallet input',
      children: [
        o.jsx('div', {
          className:
            'col-span-3 text-right p-1 border-b mb-1 text-lg font-semibold h-8 truncate',
          children: n || e.toString(),
        }),
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(v =>
          o.jsx(
            fe,
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
        o.jsx(fe, {
          variant: 'outline',
          size: 'sm',
          className: 'h-8 text-xs focus:ring-2 focus:ring-blue-400',
          onClick: p,
          children: 'CLR',
        }),
        o.jsx(fe, {
          variant: 'outline',
          size: 'sm',
          className: 'h-8 text-sm focus:ring-2 focus:ring-blue-400',
          onClick: () => a(0),
          children: '0',
        }),
        o.jsx(fe, {
          variant: 'outline',
          size: 'sm',
          className: 'h-8 text-xs focus:ring-2 focus:ring-blue-400',
          onClick: u,
          children: 'DEL',
        }),
        o.jsxs('div', {
          className: 'col-span-3 grid grid-cols-3 gap-1 mt-1',
          children: [
            o.jsx(fe, {
              variant: 'secondary',
              size: 'icon',
              className: 'h-8 w-full focus:ring-2 focus:ring-blue-400',
              onClick: d,
              'aria-label': 'Decrement pallet count',
              children: o.jsx(Zd, { className: 'h-4 w-4' }),
            }),
            o.jsx(fe, {
              variant: 'secondary',
              size: 'icon',
              className: 'h-8 w-full focus:ring-2 focus:ring-blue-400',
              onClick: i,
              'aria-label': 'Increment pallet count',
              children: o.jsx(At, { className: 'h-4 w-4' }),
            }),
            o.jsx(fe, {
              variant: 'default',
              size: 'sm',
              className:
                'h-8 text-xs focus:ring-2 focus:ring-offset-1 focus:ring-green-500',
              onClick: l,
              children: 'OK',
            }),
          ],
        }),
        o.jsx(fe, {
          variant: 'ghost',
          size: 'icon',
          className:
            'absolute top-0 right-0 h-6 w-6 text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 rounded-full',
          onClick: t,
          'aria-label': 'Close quick input',
          children: o.jsx(Ar, { className: 'h-4 w-4' }),
        }),
      ],
    })
  },
  ci = ['6024', '6070', '6039', '6040', '7045'],
  di = ['23/43', '28', 'XD', 'AIB'],
  gp = e => ['empty', '25%', '50%', '75%', 'partial', 'shipload'].includes(e),
  vp = [
    { value: 'empty', label: 'Empty', colorClass: 'text-gray-700' },
    { value: '25%', label: '25%', colorClass: 'text-emerald-700' },
    { value: '50%', label: '50%', colorClass: 'text-amber-700' },
    { value: '75%', label: '75%', colorClass: 'text-red-700' },
    { value: 'partial', label: 'Partial', colorClass: 'text-blue-700' },
    { value: 'shipload', label: 'Shipload', colorClass: 'text-violet-700' },
  ].filter(e => gp(e.value)),
  bp = e => {
    const r = {}
    return (
      (e.doorNumber < 332 || e.doorNumber > 454) &&
        (r.doorNumber = 'Invalid door (332–454)'),
      ci.includes(e.destinationDC) || (r.dc = 'Invalid destination DC'),
      di.includes(e.freightType) || (r.freight = 'Invalid freight type'),
      r
    )
  },
  Yo = h.memo(
    ({
      door: e,
      updateDoorSchedule: r,
      removeDoor: t,
      isAnimated: n,
      isMobileView: s,
      isCompact: a = !1,
    }) => {
      const [l, i] = h.useState(!1),
        [d, u] = h.useState(!1),
        [p, g] = h.useState({}),
        [v, c] = h.useState(!1),
        x = h.useRef(e.palletCount)
      ;(h.useEffect(() => {
        if (e.palletCount !== x.current) {
          c(!0)
          const P = setTimeout(() => c(!1), 300)
          return ((x.current = e.palletCount), () => clearTimeout(P))
        }
      }, [e.palletCount]),
        h.useEffect(() => {
          g(bp(e))
        }, [e, e.doorNumber, e.destinationDC, e.freightType]))
      const f = (P, b) => {
          r(e.id, P, b)
        },
        m = P => {
          f('palletCount', P)
        },
        w = P => {
          ;(P.stopPropagation(), u(!d))
        },
        S = () => {
          u(!1)
        },
        C = o.jsxs('button', {
          type: 'button',
          className: `relative flex flex-col items-center justify-center h-full cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-100 hover:to-indigo-200 p-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-wal-blue-400 focus-visible:ring-offset-1 shadow-md hover:shadow-lg transform hover:scale-105 ${s ? 'py-2' : ''}`,
          onClick: w,
          onKeyDown: P => (P.key === 'Enter' || P.key === ' ') && w(P),
          'aria-haspopup': 'dialog',
          'aria-label': `Current pallet count ${e.palletCount}, click or press enter to edit`,
          children: [
            o.jsx('span', {
              className: `font-bold leading-none transition-transform duration-300 ease-in-out ${s ? 'text-3xl' : 'text-4xl'} ${v ? 'scale-125 text-wal-yellow-600' : 'scale-100 text-wal-blue-700'}`,
              'aria-live': 'polite',
              role: 'status',
              children: e.palletCount,
            }),
            o.jsx('span', {
              className: 'text-xs text-wal-blue-600 mt-1 font-medium',
              children: 'Pallets',
            }),
            d &&
              o.jsx(mp, {
                currentCount: e.palletCount || 0,
                onUpdate: m,
                onClose: S,
              }),
          ],
        }),
        k =
          'w-full h-9 text-sm border-wal-blue-200 focus:border-wal-blue-400 hover:border-wal-blue-300 transition-all duration-200 shadow-sm hover:shadow-md',
        I = o.jsxs('div', {
          children: [
            !a &&
              o.jsx('div', {
                className: `text-xs text-wal-blue-600 font-bold mb-1 ${s ? 'sr-only' : ''}`,
                children: '📍 Destination',
              }),
            o.jsxs(Dt, {
              value: e.destinationDC,
              onValueChange: P => f('destinationDC', P),
              children: [
                o.jsx(gt, {
                  className: a
                    ? 'h-7 text-xs border-wal-blue-200 focus:border-wal-blue-400 hover:border-wal-blue-300 transition-all duration-200'
                    : k,
                  'aria-label': `Select Destination DC, current value ${e.destinationDC}`,
                  children: o.jsx(It, { placeholder: a ? 'DC' : 'Select DC' }),
                }),
                o.jsx(vt, {
                  children: ci.map(P =>
                    o.jsxs(
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
            p.dc &&
              o.jsx('div', {
                role: 'alert',
                className: 'text-red-600 text-xs mt-1',
                children: p.dc,
              }),
          ],
        }),
        T = o.jsxs('div', {
          children: [
            o.jsx('div', {
              className: `text-xs text-wal-blue-600 font-bold mb-1 ${s ? 'sr-only' : ''}`,
              children: '📦 Freight Type',
            }),
            o.jsxs(Dt, {
              value: e.freightType,
              onValueChange: P => f('freightType', P),
              children: [
                o.jsx(gt, {
                  className: k,
                  'aria-label': `Select Freight Type, current value ${e.freightType}`,
                  children: o.jsx(It, { placeholder: 'Select Type' }),
                }),
                o.jsx(vt, {
                  children: di.map(P =>
                    o.jsxs(
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
            p.freight &&
              o.jsx('div', {
                role: 'alert',
                className: 'text-red-600 text-xs mt-1',
                children: p.freight,
              }),
          ],
        }),
        D = P => {
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
              return k
          }
        },
        R = o.jsxs('div', {
          children: [
            o.jsx('div', {
              className: `text-xs text-wal-blue-600 font-bold mb-1 ${s ? 'sr-only' : ''}`,
              children: '📊 Status',
            }),
            o.jsxs(Dt, {
              value: e.trailerStatus,
              onValueChange: P => f('trailerStatus', P),
              children: [
                o.jsx(gt, {
                  className: `${e.trailerStatus ? D(e.trailerStatus) : k} font-medium`,
                  'aria-label': `Select Trailer Status, current value ${e.trailerStatus}`,
                  children: o.jsx(It, { placeholder: 'Select Status' }),
                }),
                o.jsx(vt, {
                  children: vp.map(P =>
                    o.jsx(
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
        L = o.jsxs(od.div, {
          className: 'flex items-center space-x-2',
          whileTap: { scale: 0.95 },
          children: [
            o.jsx(ai, {
              id: `tcr-${e.id}`,
              checked: !!e.tcrPresent,
              onCheckedChange: P => {
                f('tcrPresent', P)
              },
              'aria-labelledby': `tcr-label-${e.id}`,
              'aria-describedby': `tcr-help-${e.id}`,
              className:
                'data-[state=checked]:bg-wal-blue-600 data-[state=checked]:border-wal-blue-600 transition-colors duration-200 border-2',
            }),
            o.jsx(je, {
              htmlFor: `tcr-${e.id}`,
              id: `tcr-label-${e.id}`,
              className:
                'text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-wal-blue-700',
              children: '📋 TCR Present',
            }),
            o.jsx('p', {
              id: `tcr-help-${e.id}`,
              className: 'sr-only',
              children:
                'Indicates whether a Trailer Condition Report is available for this door',
            }),
          ],
        }),
        H = o.jsxs('div', {
          className: s ? 'flex items-center gap-2' : 'text-center',
          children: [
            o.jsxs('div', {
              className: 'flex flex-col items-center',
              children: [
                o.jsx('span', {
                  className: `font-bold text-wal-blue-700 bg-gradient-to-br from-wal-yellow-400 to-wal-yellow-500 px-3 py-1 rounded-lg shadow-md ${s ? 'text-xl' : 'text-[22px]'}`,
                  children: e.doorNumber,
                }),
                !s &&
                  o.jsx('div', {
                    className: 'text-xs text-wal-blue-600 font-medium mt-1',
                    children: 'Door #',
                  }),
              ],
            }),
            p.doorNumber &&
              o.jsx('div', {
                role: 'alert',
                className: 'text-red-600 text-xs mt-1',
                children: p.doorNumber,
              }),
          ],
        }),
        _ = o.jsxs('div', {
          className: `flex items-center gap-1 ${s ? 'justify-end' : 'h-9'}`,
          children: [
            o.jsx(fe, {
              variant: 'ghost',
              size: 'icon',
              className:
                'text-wal-blue-600 hover:text-wal-blue-800 hover:bg-blue-100 h-8 w-8 transition-all duration-200 hover:scale-110',
              onClick: () => i(!l),
              'aria-label': l ? 'Close notes' : 'Open notes',
              children: o.jsx(Yd, { className: 'h-4 w-4' }),
            }),
            o.jsx(fe, {
              variant: 'destructive',
              size: 'icon',
              className:
                'bg-red-500 hover:bg-red-600 text-white h-8 w-8 transition-all duration-200 hover:scale-110 shadow-md',
              onClick: () => t(e.id),
              'aria-label': `Remove door ${e.doorNumber}`,
              children: o.jsx(ra, { className: 'h-4 w-4' }),
            }),
          ],
        })
      return s
        ? o.jsxs('div', {
            className: `bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-wal-blue-200 shadow-lg hover:shadow-xl p-4 space-y-3 transition-all duration-200 ${n ? 'animate-pulse-bg-blue' : ''}`,
            children: [
              o.jsxs('div', {
                className: 'flex items-center justify-between',
                children: [
                  H,
                  o.jsx('div', {
                    className: 'flex items-center gap-1',
                    children: _,
                  }),
                ],
              }),
              o.jsxs('div', {
                className: 'grid grid-cols-3 gap-3',
                children: [I, T, R],
              }),
              o.jsxs('div', {
                className: 'grid grid-cols-2 gap-3 pt-2',
                children: [C, L],
              }),
              o.jsx(_f, {
                open: l,
                onOpenChange: i,
                children: o.jsx(kf, {
                  className: 'mt-2',
                  children: o.jsx(Ta, {
                    value: e.notes ?? '',
                    onChange: P => f('notes', P.target.value),
                    placeholder: 'Add notes...',
                    className: 'w-full text-sm h-20 focus:ring-blue-300',
                    'aria-label': `Notes for door ${e.doorNumber}`,
                  }),
                }),
              }),
            ],
          })
        : o.jsxs(Yn, {
            className: `bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-indigo-100 transition-all duration-200 ease-in-out border-b border-wal-blue-100 ${n ? 'animate-pulse-bg-blue' : ''} ${a ? 'py-1' : 'py-2'}`,
            children: [
              o.jsx(dt, {
                className: `font-medium text-center ${a ? 'min-w-[60px] px-2' : 'min-w-[70px] px-3'}`,
                children: H,
              }),
              o.jsx(dt, {
                className: a ? 'min-w-[100px]' : 'min-w-[120px]',
                children: I,
              }),
              o.jsx(dt, { className: 'min-w-[120px]', children: T }),
              o.jsx(dt, { className: 'min-w-[120px]', children: R }),
              o.jsx(dt, {
                className: 'text-center w-[100px] p-1',
                children: C,
              }),
              o.jsx(dt, { className: 'min-w-[100px]', children: L }),
              o.jsx(dt, { className: 'text-right w-[100px]', children: _ }),
            ],
          })
    }
  )
function wr(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  )
}
var cn = { exports: {} }
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ var Zo
function xp() {
  return (
    Zo ||
      ((Zo = 1),
      (function (e, r) {
        ;(function (t) {
          e.exports = t()
        })(function () {
          return (function t(n, s, a) {
            function l(u, p) {
              if (!s[u]) {
                if (!n[u]) {
                  var g = typeof wr == 'function' && wr
                  if (!p && g) return g(u, !0)
                  if (i) return i(u, !0)
                  var v = new Error("Cannot find module '" + u + "'")
                  throw ((v.code = 'MODULE_NOT_FOUND'), v)
                }
                var c = (s[u] = { exports: {} })
                n[u][0].call(
                  c.exports,
                  function (x) {
                    var f = n[u][1][x]
                    return l(f || x)
                  },
                  c,
                  c.exports,
                  t,
                  n,
                  s,
                  a
                )
              }
              return s[u].exports
            }
            for (
              var i = typeof wr == 'function' && wr, d = 0;
              d < a.length;
              d++
            )
              l(a[d])
            return l
          })(
            {
              1: [
                function (t, n, s) {
                  var a = t('./utils'),
                    l = t('./support'),
                    i =
                      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
                  ;((s.encode = function (d) {
                    for (
                      var u,
                        p,
                        g,
                        v,
                        c,
                        x,
                        f,
                        m = [],
                        w = 0,
                        S = d.length,
                        C = S,
                        k = a.getTypeOf(d) !== 'string';
                      w < d.length;

                    )
                      ((C = S - w),
                        (g = k
                          ? ((u = d[w++]),
                            (p = w < S ? d[w++] : 0),
                            w < S ? d[w++] : 0)
                          : ((u = d.charCodeAt(w++)),
                            (p = w < S ? d.charCodeAt(w++) : 0),
                            w < S ? d.charCodeAt(w++) : 0)),
                        (v = u >> 2),
                        (c = ((3 & u) << 4) | (p >> 4)),
                        (x = 1 < C ? ((15 & p) << 2) | (g >> 6) : 64),
                        (f = 2 < C ? 63 & g : 64),
                        m.push(
                          i.charAt(v) + i.charAt(c) + i.charAt(x) + i.charAt(f)
                        ))
                    return m.join('')
                  }),
                    (s.decode = function (d) {
                      var u,
                        p,
                        g,
                        v,
                        c,
                        x,
                        f = 0,
                        m = 0,
                        w = 'data:'
                      if (d.substr(0, w.length) === w)
                        throw new Error(
                          'Invalid base64 input, it looks like a data url.'
                        )
                      var S,
                        C =
                          (3 * (d = d.replace(/[^A-Za-z0-9+/=]/g, '')).length) /
                          4
                      if (
                        (d.charAt(d.length - 1) === i.charAt(64) && C--,
                        d.charAt(d.length - 2) === i.charAt(64) && C--,
                        C % 1 != 0)
                      )
                        throw new Error(
                          'Invalid base64 input, bad content length.'
                        )
                      for (
                        S = l.uint8array
                          ? new Uint8Array(0 | C)
                          : new Array(0 | C);
                        f < d.length;

                      )
                        ((u =
                          (i.indexOf(d.charAt(f++)) << 2) |
                          ((v = i.indexOf(d.charAt(f++))) >> 4)),
                          (p =
                            ((15 & v) << 4) |
                            ((c = i.indexOf(d.charAt(f++))) >> 2)),
                          (g = ((3 & c) << 6) | (x = i.indexOf(d.charAt(f++)))),
                          (S[m++] = u),
                          c !== 64 && (S[m++] = p),
                          x !== 64 && (S[m++] = g))
                      return S
                    }))
                },
                { './support': 30, './utils': 32 },
              ],
              2: [
                function (t, n, s) {
                  var a = t('./external'),
                    l = t('./stream/DataWorker'),
                    i = t('./stream/Crc32Probe'),
                    d = t('./stream/DataLengthProbe')
                  function u(p, g, v, c, x) {
                    ;((this.compressedSize = p),
                      (this.uncompressedSize = g),
                      (this.crc32 = v),
                      (this.compression = c),
                      (this.compressedContent = x))
                  }
                  ;((u.prototype = {
                    getContentWorker: function () {
                      var p = new l(a.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new d('data_length')),
                        g = this
                      return (
                        p.on('end', function () {
                          if (
                            this.streamInfo.data_length !== g.uncompressedSize
                          )
                            throw new Error(
                              'Bug : uncompressed data size mismatch'
                            )
                        }),
                        p
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
                    (u.createWorkerFrom = function (p, g, v) {
                      return p
                        .pipe(new i())
                        .pipe(new d('uncompressedSize'))
                        .pipe(g.compressWorker(v))
                        .pipe(new d('compressedSize'))
                        .withStreamInfo('compression', g)
                    }),
                    (n.exports = u))
                },
                {
                  './external': 6,
                  './stream/Crc32Probe': 25,
                  './stream/DataLengthProbe': 26,
                  './stream/DataWorker': 27,
                },
              ],
              3: [
                function (t, n, s) {
                  var a = t('./stream/GenericWorker')
                  ;((s.STORE = {
                    magic: '\0\0',
                    compressWorker: function () {
                      return new a('STORE compression')
                    },
                    uncompressWorker: function () {
                      return new a('STORE decompression')
                    },
                  }),
                    (s.DEFLATE = t('./flate')))
                },
                { './flate': 7, './stream/GenericWorker': 28 },
              ],
              4: [
                function (t, n, s) {
                  var a = t('./utils'),
                    l = (function () {
                      for (var i, d = [], u = 0; u < 256; u++) {
                        i = u
                        for (var p = 0; p < 8; p++)
                          i = 1 & i ? 3988292384 ^ (i >>> 1) : i >>> 1
                        d[u] = i
                      }
                      return d
                    })()
                  n.exports = function (i, d) {
                    return i !== void 0 && i.length
                      ? a.getTypeOf(i) !== 'string'
                        ? (function (u, p, g, v) {
                            var c = l,
                              x = v + g
                            u ^= -1
                            for (var f = v; f < x; f++)
                              u = (u >>> 8) ^ c[255 & (u ^ p[f])]
                            return -1 ^ u
                          })(0 | d, i, i.length, 0)
                        : (function (u, p, g, v) {
                            var c = l,
                              x = v + g
                            u ^= -1
                            for (var f = v; f < x; f++)
                              u = (u >>> 8) ^ c[255 & (u ^ p.charCodeAt(f))]
                            return -1 ^ u
                          })(0 | d, i, i.length, 0)
                      : 0
                  }
                },
                { './utils': 32 },
              ],
              5: [
                function (t, n, s) {
                  ;((s.base64 = !1),
                    (s.binary = !1),
                    (s.dir = !1),
                    (s.createFolders = !0),
                    (s.date = null),
                    (s.compression = null),
                    (s.compressionOptions = null),
                    (s.comment = null),
                    (s.unixPermissions = null),
                    (s.dosPermissions = null))
                },
                {},
              ],
              6: [
                function (t, n, s) {
                  var a = null
                  ;((a = typeof Promise < 'u' ? Promise : t('lie')),
                    (n.exports = { Promise: a }))
                },
                { lie: 37 },
              ],
              7: [
                function (t, n, s) {
                  var a =
                      typeof Uint8Array < 'u' &&
                      typeof Uint16Array < 'u' &&
                      typeof Uint32Array < 'u',
                    l = t('pako'),
                    i = t('./utils'),
                    d = t('./stream/GenericWorker'),
                    u = a ? 'uint8array' : 'array'
                  function p(g, v) {
                    ;(d.call(this, 'FlateWorker/' + g),
                      (this._pako = null),
                      (this._pakoAction = g),
                      (this._pakoOptions = v),
                      (this.meta = {}))
                  }
                  ;((s.magic = '\b\0'),
                    i.inherits(p, d),
                    (p.prototype.processChunk = function (g) {
                      ;((this.meta = g.meta),
                        this._pako === null && this._createPako(),
                        this._pako.push(i.transformTo(u, g.data), !1))
                    }),
                    (p.prototype.flush = function () {
                      ;(d.prototype.flush.call(this),
                        this._pako === null && this._createPako(),
                        this._pako.push([], !0))
                    }),
                    (p.prototype.cleanUp = function () {
                      ;(d.prototype.cleanUp.call(this), (this._pako = null))
                    }),
                    (p.prototype._createPako = function () {
                      this._pako = new l[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1,
                      })
                      var g = this
                      this._pako.onData = function (v) {
                        g.push({ data: v, meta: g.meta })
                      }
                    }),
                    (s.compressWorker = function (g) {
                      return new p('Deflate', g)
                    }),
                    (s.uncompressWorker = function () {
                      return new p('Inflate', {})
                    }))
                },
                { './stream/GenericWorker': 28, './utils': 32, pako: 38 },
              ],
              8: [
                function (t, n, s) {
                  function a(c, x) {
                    var f,
                      m = ''
                    for (f = 0; f < x; f++)
                      ((m += String.fromCharCode(255 & c)), (c >>>= 8))
                    return m
                  }
                  function l(c, x, f, m, w, S) {
                    var C,
                      k,
                      E = c.file,
                      I = c.compression,
                      T = S !== u.utf8encode,
                      D = i.transformTo('string', S(E.name)),
                      R = i.transformTo('string', u.utf8encode(E.name)),
                      L = E.comment,
                      H = i.transformTo('string', S(L)),
                      _ = i.transformTo('string', u.utf8encode(L)),
                      P = R.length !== E.name.length,
                      b = _.length !== L.length,
                      M = '',
                      K = '',
                      U = '',
                      re = E.dir,
                      $ = E.date,
                      ee = { crc32: 0, compressedSize: 0, uncompressedSize: 0 }
                    ;(x && !f) ||
                      ((ee.crc32 = c.crc32),
                      (ee.compressedSize = c.compressedSize),
                      (ee.uncompressedSize = c.uncompressedSize))
                    var F = 0
                    ;(x && (F |= 8), T || (!P && !b) || (F |= 2048))
                    var A = 0,
                      Q = 0
                    ;(re && (A |= 16),
                      w === 'UNIX'
                        ? ((Q = 798),
                          (A |= (function (Y, he) {
                            var J = Y
                            return (
                              Y || (J = he ? 16893 : 33204),
                              (65535 & J) << 16
                            )
                          })(E.unixPermissions, re)))
                        : ((Q = 20),
                          (A |= (function (Y) {
                            return 63 & (Y || 0)
                          })(E.dosPermissions))),
                      (C = $.getUTCHours()),
                      (C <<= 6),
                      (C |= $.getUTCMinutes()),
                      (C <<= 5),
                      (C |= $.getUTCSeconds() / 2),
                      (k = $.getUTCFullYear() - 1980),
                      (k <<= 4),
                      (k |= $.getUTCMonth() + 1),
                      (k <<= 5),
                      (k |= $.getUTCDate()),
                      P &&
                        ((K = a(1, 1) + a(p(D), 4) + R),
                        (M += 'up' + a(K.length, 2) + K)),
                      b &&
                        ((U = a(1, 1) + a(p(H), 4) + _),
                        (M += 'uc' + a(U.length, 2) + U)))
                    var G = ''
                    return (
                      (G += `
\0`),
                      (G += a(F, 2)),
                      (G += I.magic),
                      (G += a(C, 2)),
                      (G += a(k, 2)),
                      (G += a(ee.crc32, 4)),
                      (G += a(ee.compressedSize, 4)),
                      (G += a(ee.uncompressedSize, 4)),
                      (G += a(D.length, 2)),
                      (G += a(M.length, 2)),
                      {
                        fileRecord: g.LOCAL_FILE_HEADER + G + D + M,
                        dirRecord:
                          g.CENTRAL_FILE_HEADER +
                          a(Q, 2) +
                          G +
                          a(H.length, 2) +
                          '\0\0\0\0' +
                          a(A, 4) +
                          a(m, 4) +
                          D +
                          M +
                          H,
                      }
                    )
                  }
                  var i = t('../utils'),
                    d = t('../stream/GenericWorker'),
                    u = t('../utf8'),
                    p = t('../crc32'),
                    g = t('../signature')
                  function v(c, x, f, m) {
                    ;(d.call(this, 'ZipFileWorker'),
                      (this.bytesWritten = 0),
                      (this.zipComment = x),
                      (this.zipPlatform = f),
                      (this.encodeFileName = m),
                      (this.streamFiles = c),
                      (this.accumulate = !1),
                      (this.contentBuffer = []),
                      (this.dirRecords = []),
                      (this.currentSourceOffset = 0),
                      (this.entriesCount = 0),
                      (this.currentFile = null),
                      (this._sources = []))
                  }
                  ;(i.inherits(v, d),
                    (v.prototype.push = function (c) {
                      var x = c.meta.percent || 0,
                        f = this.entriesCount,
                        m = this._sources.length
                      this.accumulate
                        ? this.contentBuffer.push(c)
                        : ((this.bytesWritten += c.data.length),
                          d.prototype.push.call(this, {
                            data: c.data,
                            meta: {
                              currentFile: this.currentFile,
                              percent: f ? (x + 100 * (f - m - 1)) / f : 100,
                            },
                          }))
                    }),
                    (v.prototype.openedSource = function (c) {
                      ;((this.currentSourceOffset = this.bytesWritten),
                        (this.currentFile = c.file.name))
                      var x = this.streamFiles && !c.file.dir
                      if (x) {
                        var f = l(
                          c,
                          x,
                          !1,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName
                        )
                        this.push({ data: f.fileRecord, meta: { percent: 0 } })
                      } else this.accumulate = !0
                    }),
                    (v.prototype.closedSource = function (c) {
                      this.accumulate = !1
                      var x = this.streamFiles && !c.file.dir,
                        f = l(
                          c,
                          x,
                          !0,
                          this.currentSourceOffset,
                          this.zipPlatform,
                          this.encodeFileName
                        )
                      if ((this.dirRecords.push(f.dirRecord), x))
                        this.push({
                          data: (function (m) {
                            return (
                              g.DATA_DESCRIPTOR +
                              a(m.crc32, 4) +
                              a(m.compressedSize, 4) +
                              a(m.uncompressedSize, 4)
                            )
                          })(c),
                          meta: { percent: 100 },
                        })
                      else
                        for (
                          this.push({
                            data: f.fileRecord,
                            meta: { percent: 0 },
                          });
                          this.contentBuffer.length;

                        )
                          this.push(this.contentBuffer.shift())
                      this.currentFile = null
                    }),
                    (v.prototype.flush = function () {
                      for (
                        var c = this.bytesWritten, x = 0;
                        x < this.dirRecords.length;
                        x++
                      )
                        this.push({
                          data: this.dirRecords[x],
                          meta: { percent: 100 },
                        })
                      var f = this.bytesWritten - c,
                        m = (function (w, S, C, k, E) {
                          var I = i.transformTo('string', E(k))
                          return (
                            g.CENTRAL_DIRECTORY_END +
                            '\0\0\0\0' +
                            a(w, 2) +
                            a(w, 2) +
                            a(S, 4) +
                            a(C, 4) +
                            a(I.length, 2) +
                            I
                          )
                        })(
                          this.dirRecords.length,
                          f,
                          c,
                          this.zipComment,
                          this.encodeFileName
                        )
                      this.push({ data: m, meta: { percent: 100 } })
                    }),
                    (v.prototype.prepareNextSource = function () {
                      ;((this.previous = this._sources.shift()),
                        this.openedSource(this.previous.streamInfo),
                        this.isPaused
                          ? this.previous.pause()
                          : this.previous.resume())
                    }),
                    (v.prototype.registerPrevious = function (c) {
                      this._sources.push(c)
                      var x = this
                      return (
                        c.on('data', function (f) {
                          x.processChunk(f)
                        }),
                        c.on('end', function () {
                          ;(x.closedSource(x.previous.streamInfo),
                            x._sources.length ? x.prepareNextSource() : x.end())
                        }),
                        c.on('error', function (f) {
                          x.error(f)
                        }),
                        this
                      )
                    }),
                    (v.prototype.resume = function () {
                      return (
                        !!d.prototype.resume.call(this) &&
                        (!this.previous && this._sources.length
                          ? (this.prepareNextSource(), !0)
                          : this.previous ||
                              this._sources.length ||
                              this.generatedError
                            ? void 0
                            : (this.end(), !0))
                      )
                    }),
                    (v.prototype.error = function (c) {
                      var x = this._sources
                      if (!d.prototype.error.call(this, c)) return !1
                      for (var f = 0; f < x.length; f++)
                        try {
                          x[f].error(c)
                        } catch {}
                      return !0
                    }),
                    (v.prototype.lock = function () {
                      d.prototype.lock.call(this)
                      for (var c = this._sources, x = 0; x < c.length; x++)
                        c[x].lock()
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
                function (t, n, s) {
                  var a = t('../compressions'),
                    l = t('./ZipFileWorker')
                  s.generateWorker = function (i, d, u) {
                    var p = new l(
                        d.streamFiles,
                        u,
                        d.platform,
                        d.encodeFileName
                      ),
                      g = 0
                    try {
                      ;(i.forEach(function (v, c) {
                        g++
                        var x = (function (S, C) {
                            var k = S || C,
                              E = a[k]
                            if (!E)
                              throw new Error(
                                k + ' is not a valid compression method !'
                              )
                            return E
                          })(c.options.compression, d.compression),
                          f =
                            c.options.compressionOptions ||
                            d.compressionOptions ||
                            {},
                          m = c.dir,
                          w = c.date
                        c._compressWorker(x, f)
                          .withStreamInfo('file', {
                            name: v,
                            dir: m,
                            date: w,
                            comment: c.comment || '',
                            unixPermissions: c.unixPermissions,
                            dosPermissions: c.dosPermissions,
                          })
                          .pipe(p)
                      }),
                        (p.entriesCount = g))
                    } catch (v) {
                      p.error(v)
                    }
                    return p
                  }
                },
                { '../compressions': 3, './ZipFileWorker': 8 },
              ],
              10: [
                function (t, n, s) {
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
                function (t, n, s) {
                  var a = t('./utils'),
                    l = t('./external'),
                    i = t('./utf8'),
                    d = t('./zipEntries'),
                    u = t('./stream/Crc32Probe'),
                    p = t('./nodejsUtils')
                  function g(v) {
                    return new l.Promise(function (c, x) {
                      var f = v.decompressed.getContentWorker().pipe(new u())
                      f.on('error', function (m) {
                        x(m)
                      })
                        .on('end', function () {
                          f.streamInfo.crc32 !== v.decompressed.crc32
                            ? x(new Error('Corrupted zip : CRC32 mismatch'))
                            : c()
                        })
                        .resume()
                    })
                  }
                  n.exports = function (v, c) {
                    var x = this
                    return (
                      (c = a.extend(c || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: i.utf8decode,
                      })),
                      p.isNode && p.isStream(v)
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
                              c.optimizedBinaryString,
                              c.base64
                            )
                            .then(function (f) {
                              var m = new d(c)
                              return (m.load(f), m)
                            })
                            .then(function (f) {
                              var m = [l.Promise.resolve(f)],
                                w = f.files
                              if (c.checkCRC32)
                                for (var S = 0; S < w.length; S++)
                                  m.push(g(w[S]))
                              return l.Promise.all(m)
                            })
                            .then(function (f) {
                              for (
                                var m = f.shift(), w = m.files, S = 0;
                                S < w.length;
                                S++
                              ) {
                                var C = w[S],
                                  k = C.fileNameStr,
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
                                  createFolders: c.createFolders,
                                }),
                                  C.dir || (x.file(E).unsafeOriginalName = k))
                              }
                              return (
                                m.zipComment.length &&
                                  (x.comment = m.zipComment),
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
                function (t, n, s) {
                  var a = t('../utils'),
                    l = t('../stream/GenericWorker')
                  function i(d, u) {
                    ;(l.call(this, 'Nodejs stream input adapter for ' + d),
                      (this._upstreamEnded = !1),
                      this._bindStream(u))
                  }
                  ;(a.inherits(i, l),
                    (i.prototype._bindStream = function (d) {
                      var u = this
                      ;((this._stream = d).pause(),
                        d
                          .on('data', function (p) {
                            u.push({ data: p, meta: { percent: 0 } })
                          })
                          .on('error', function (p) {
                            u.isPaused ? (this.generatedError = p) : u.error(p)
                          })
                          .on('end', function () {
                            u.isPaused ? (u._upstreamEnded = !0) : u.end()
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
                function (t, n, s) {
                  var a = t('readable-stream').Readable
                  function l(i, d, u) {
                    ;(a.call(this, d), (this._helper = i))
                    var p = this
                    i.on('data', function (g, v) {
                      ;(p.push(g) || p._helper.pause(), u && u(v))
                    })
                      .on('error', function (g) {
                        p.emit('error', g)
                      })
                      .on('end', function () {
                        p.push(null)
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
                function (t, n, s) {
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
                function (t, n, s) {
                  function a(E, I, T) {
                    var D,
                      R = i.getTypeOf(I),
                      L = i.extend(T || {}, p)
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
                      L.createFolders && (D = m(E)) && S.call(this, D, !0))
                    var H = R === 'string' && L.binary === !1 && L.base64 === !1
                    ;((T && T.binary !== void 0) || (L.binary = !H),
                      ((I instanceof g && I.uncompressedSize === 0) ||
                        L.dir ||
                        !I ||
                        I.length === 0) &&
                        ((L.base64 = !1),
                        (L.binary = !0),
                        (I = ''),
                        (L.compression = 'STORE'),
                        (R = 'string')))
                    var _ = null
                    _ =
                      I instanceof g || I instanceof d
                        ? I
                        : x.isNode && x.isStream(I)
                          ? new f(E, I)
                          : i.prepareContent(
                              E,
                              I,
                              L.binary,
                              L.optimizedBinaryString,
                              L.base64
                            )
                    var P = new v(E, _, L)
                    this.files[E] = P
                  }
                  var l = t('./utf8'),
                    i = t('./utils'),
                    d = t('./stream/GenericWorker'),
                    u = t('./stream/StreamHelper'),
                    p = t('./defaults'),
                    g = t('./compressedObject'),
                    v = t('./zipObject'),
                    c = t('./generate'),
                    x = t('./nodejsUtils'),
                    f = t('./nodejs/NodejsStreamInputAdapter'),
                    m = function (E) {
                      E.slice(-1) === '/' && (E = E.substring(0, E.length - 1))
                      var I = E.lastIndexOf('/')
                      return 0 < I ? E.substring(0, I) : ''
                    },
                    w = function (E) {
                      return (E.slice(-1) !== '/' && (E += '/'), E)
                    },
                    S = function (E, I) {
                      return (
                        (I = I !== void 0 ? I : p.createFolders),
                        (E = w(E)),
                        this.files[E] ||
                          a.call(this, E, null, { dir: !0, createFolders: I }),
                        this.files[E]
                      )
                    }
                  function C(E) {
                    return (
                      Object.prototype.toString.call(E) === '[object RegExp]'
                    )
                  }
                  var k = {
                    load: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.'
                      )
                    },
                    forEach: function (E) {
                      var I, T, D
                      for (I in this.files)
                        ((D = this.files[I]),
                          (T = I.slice(this.root.length, I.length)) &&
                            I.slice(0, this.root.length) === this.root &&
                            E(T, D))
                    },
                    filter: function (E) {
                      var I = []
                      return (
                        this.forEach(function (T, D) {
                          E(T, D) && I.push(D)
                        }),
                        I
                      )
                    },
                    file: function (E, I, T) {
                      if (arguments.length !== 1)
                        return (
                          (E = this.root + E),
                          a.call(this, E, I, T),
                          this
                        )
                      if (C(E)) {
                        var D = E
                        return this.filter(function (L, H) {
                          return !H.dir && D.test(L)
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
                      var I = this.root + E,
                        T = S.call(this, I),
                        D = this.clone()
                      return ((D.root = T.name), D)
                    },
                    remove: function (E) {
                      E = this.root + E
                      var I = this.files[E]
                      if (
                        (I ||
                          (E.slice(-1) !== '/' && (E += '/'),
                          (I = this.files[E])),
                        I && !I.dir)
                      )
                        delete this.files[E]
                      else
                        for (
                          var T = this.filter(function (R, L) {
                              return L.name.slice(0, E.length) === E
                            }),
                            D = 0;
                          D < T.length;
                          D++
                        )
                          delete this.files[T[D].name]
                      return this
                    },
                    generate: function () {
                      throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.'
                      )
                    },
                    generateInternalStream: function (E) {
                      var I,
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
                        var D = T.comment || this.comment || ''
                        I = c.generateWorker(this, T, D)
                      } catch (R) {
                        ;(I = new d('error')).error(R)
                      }
                      return new u(I, T.type || 'string', T.mimeType)
                    },
                    generateAsync: function (E, I) {
                      return this.generateInternalStream(E).accumulate(I)
                    },
                    generateNodeStream: function (E, I) {
                      return (
                        (E = E || {}).type || (E.type = 'nodebuffer'),
                        this.generateInternalStream(E).toNodejsStream(I)
                      )
                    },
                  }
                  n.exports = k
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
                function (t, n, s) {
                  n.exports = t('stream')
                },
                { stream: void 0 },
              ],
              17: [
                function (t, n, s) {
                  var a = t('./DataReader')
                  function l(i) {
                    a.call(this, i)
                    for (var d = 0; d < this.data.length; d++) i[d] = 255 & i[d]
                  }
                  ;(t('../utils').inherits(l, a),
                    (l.prototype.byteAt = function (i) {
                      return this.data[this.zero + i]
                    }),
                    (l.prototype.lastIndexOfSignature = function (i) {
                      for (
                        var d = i.charCodeAt(0),
                          u = i.charCodeAt(1),
                          p = i.charCodeAt(2),
                          g = i.charCodeAt(3),
                          v = this.length - 4;
                        0 <= v;
                        --v
                      )
                        if (
                          this.data[v] === d &&
                          this.data[v + 1] === u &&
                          this.data[v + 2] === p &&
                          this.data[v + 3] === g
                        )
                          return v - this.zero
                      return -1
                    }),
                    (l.prototype.readAndCheckSignature = function (i) {
                      var d = i.charCodeAt(0),
                        u = i.charCodeAt(1),
                        p = i.charCodeAt(2),
                        g = i.charCodeAt(3),
                        v = this.readData(4)
                      return (
                        d === v[0] && u === v[1] && p === v[2] && g === v[3]
                      )
                    }),
                    (l.prototype.readData = function (i) {
                      if ((this.checkOffset(i), i === 0)) return []
                      var d = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + i
                      )
                      return ((this.index += i), d)
                    }),
                    (n.exports = l))
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              18: [
                function (t, n, s) {
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
                      var d,
                        u = 0
                      for (
                        this.checkOffset(i), d = this.index + i - 1;
                        d >= this.index;
                        d--
                      )
                        u = (u << 8) + this.byteAt(d)
                      return ((this.index += i), u)
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
                function (t, n, s) {
                  var a = t('./Uint8ArrayReader')
                  function l(i) {
                    a.call(this, i)
                  }
                  ;(t('../utils').inherits(l, a),
                    (l.prototype.readData = function (i) {
                      this.checkOffset(i)
                      var d = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + i
                      )
                      return ((this.index += i), d)
                    }),
                    (n.exports = l))
                },
                { '../utils': 32, './Uint8ArrayReader': 21 },
              ],
              20: [
                function (t, n, s) {
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
                      var d = this.data.slice(
                        this.zero + this.index,
                        this.zero + this.index + i
                      )
                      return ((this.index += i), d)
                    }),
                    (n.exports = l))
                },
                { '../utils': 32, './DataReader': 18 },
              ],
              21: [
                function (t, n, s) {
                  var a = t('./ArrayReader')
                  function l(i) {
                    a.call(this, i)
                  }
                  ;(t('../utils').inherits(l, a),
                    (l.prototype.readData = function (i) {
                      if ((this.checkOffset(i), i === 0))
                        return new Uint8Array(0)
                      var d = this.data.subarray(
                        this.zero + this.index,
                        this.zero + this.index + i
                      )
                      return ((this.index += i), d)
                    }),
                    (n.exports = l))
                },
                { '../utils': 32, './ArrayReader': 17 },
              ],
              22: [
                function (t, n, s) {
                  var a = t('../utils'),
                    l = t('../support'),
                    i = t('./ArrayReader'),
                    d = t('./StringReader'),
                    u = t('./NodeBufferReader'),
                    p = t('./Uint8ArrayReader')
                  n.exports = function (g) {
                    var v = a.getTypeOf(g)
                    return (
                      a.checkSupport(v),
                      v !== 'string' || l.uint8array
                        ? v === 'nodebuffer'
                          ? new u(g)
                          : l.uint8array
                            ? new p(a.transformTo('uint8array', g))
                            : new i(a.transformTo('array', g))
                        : new d(g)
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
                function (t, n, s) {
                  ;((s.LOCAL_FILE_HEADER = 'PK'),
                    (s.CENTRAL_FILE_HEADER = 'PK'),
                    (s.CENTRAL_DIRECTORY_END = 'PK'),
                    (s.ZIP64_CENTRAL_DIRECTORY_LOCATOR = 'PK\x07'),
                    (s.ZIP64_CENTRAL_DIRECTORY_END = 'PK'),
                    (s.DATA_DESCRIPTOR = 'PK\x07\b'))
                },
                {},
              ],
              24: [
                function (t, n, s) {
                  var a = t('./GenericWorker'),
                    l = t('../utils')
                  function i(d) {
                    ;(a.call(this, 'ConvertWorker to ' + d),
                      (this.destType = d))
                  }
                  ;(l.inherits(i, a),
                    (i.prototype.processChunk = function (d) {
                      this.push({
                        data: l.transformTo(this.destType, d.data),
                        meta: d.meta,
                      })
                    }),
                    (n.exports = i))
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              25: [
                function (t, n, s) {
                  var a = t('./GenericWorker'),
                    l = t('../crc32')
                  function i() {
                    ;(a.call(this, 'Crc32Probe'),
                      this.withStreamInfo('crc32', 0))
                  }
                  ;(t('../utils').inherits(i, a),
                    (i.prototype.processChunk = function (d) {
                      ;((this.streamInfo.crc32 = l(
                        d.data,
                        this.streamInfo.crc32 || 0
                      )),
                        this.push(d))
                    }),
                    (n.exports = i))
                },
                { '../crc32': 4, '../utils': 32, './GenericWorker': 28 },
              ],
              26: [
                function (t, n, s) {
                  var a = t('../utils'),
                    l = t('./GenericWorker')
                  function i(d) {
                    ;(l.call(this, 'DataLengthProbe for ' + d),
                      (this.propName = d),
                      this.withStreamInfo(d, 0))
                  }
                  ;(a.inherits(i, l),
                    (i.prototype.processChunk = function (d) {
                      if (d) {
                        var u = this.streamInfo[this.propName] || 0
                        this.streamInfo[this.propName] = u + d.data.length
                      }
                      l.prototype.processChunk.call(this, d)
                    }),
                    (n.exports = i))
                },
                { '../utils': 32, './GenericWorker': 28 },
              ],
              27: [
                function (t, n, s) {
                  var a = t('../utils'),
                    l = t('./GenericWorker')
                  function i(d) {
                    l.call(this, 'DataWorker')
                    var u = this
                    ;((this.dataIsReady = !1),
                      (this.index = 0),
                      (this.max = 0),
                      (this.data = null),
                      (this.type = ''),
                      (this._tickScheduled = !1),
                      d.then(
                        function (p) {
                          ;((u.dataIsReady = !0),
                            (u.data = p),
                            (u.max = (p && p.length) || 0),
                            (u.type = a.getTypeOf(p)),
                            u.isPaused || u._tickAndRepeat())
                        },
                        function (p) {
                          u.error(p)
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
                      var d = null,
                        u = Math.min(this.max, this.index + 16384)
                      if (this.index >= this.max) return this.end()
                      switch (this.type) {
                        case 'string':
                          d = this.data.substring(this.index, u)
                          break
                        case 'uint8array':
                          d = this.data.subarray(this.index, u)
                          break
                        case 'array':
                        case 'nodebuffer':
                          d = this.data.slice(this.index, u)
                      }
                      return (
                        (this.index = u),
                        this.push({
                          data: d,
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
                function (t, n, s) {
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
                        for (var d = 0; d < this._listeners[l].length; d++)
                          this._listeners[l][d].call(this, i)
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
                        l.on('data', function (d) {
                          i.processChunk(d)
                        }),
                        l.on('end', function () {
                          i.end()
                        }),
                        l.on('error', function (d) {
                          i.error(d)
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
                function (t, n, s) {
                  var a = t('../utils'),
                    l = t('./ConvertWorker'),
                    i = t('./GenericWorker'),
                    d = t('../base64'),
                    u = t('../support'),
                    p = t('../external'),
                    g = null
                  if (u.nodestream)
                    try {
                      g = t('../nodejs/NodejsStreamOutputAdapter')
                    } catch {}
                  function v(x, f) {
                    return new p.Promise(function (m, w) {
                      var S = [],
                        C = x._internalType,
                        k = x._outputType,
                        E = x._mimeType
                      x.on('data', function (I, T) {
                        ;(S.push(I), f && f(T))
                      })
                        .on('error', function (I) {
                          ;((S = []), w(I))
                        })
                        .on('end', function () {
                          try {
                            var I = (function (T, D, R) {
                              switch (T) {
                                case 'blob':
                                  return a.newBlob(
                                    a.transformTo('arraybuffer', D),
                                    R
                                  )
                                case 'base64':
                                  return d.encode(D)
                                default:
                                  return a.transformTo(T, D)
                              }
                            })(
                              k,
                              (function (T, D) {
                                var R,
                                  L = 0,
                                  H = null,
                                  _ = 0
                                for (R = 0; R < D.length; R++) _ += D[R].length
                                switch (T) {
                                  case 'string':
                                    return D.join('')
                                  case 'array':
                                    return Array.prototype.concat.apply([], D)
                                  case 'uint8array':
                                    for (
                                      H = new Uint8Array(_), R = 0;
                                      R < D.length;
                                      R++
                                    )
                                      (H.set(D[R], L), (L += D[R].length))
                                    return H
                                  case 'nodebuffer':
                                    return Buffer.concat(D)
                                  default:
                                    throw new Error(
                                      "concat : unsupported type '" + T + "'"
                                    )
                                }
                              })(C, S),
                              E
                            )
                            m(I)
                          } catch (T) {
                            w(T)
                          }
                          S = []
                        })
                        .resume()
                    })
                  }
                  function c(x, f, m) {
                    var w = f
                    switch (f) {
                      case 'blob':
                      case 'arraybuffer':
                        w = 'uint8array'
                        break
                      case 'base64':
                        w = 'string'
                    }
                    try {
                      ;((this._internalType = w),
                        (this._outputType = f),
                        (this._mimeType = m),
                        a.checkSupport(w),
                        (this._worker = x.pipe(new l(w))),
                        x.lock())
                    } catch (S) {
                      ;((this._worker = new i('error')), this._worker.error(S))
                    }
                  }
                  ;((c.prototype = {
                    accumulate: function (x) {
                      return v(this, x)
                    },
                    on: function (x, f) {
                      var m = this
                      return (
                        x === 'data'
                          ? this._worker.on(x, function (w) {
                              f.call(m, w.data, w.meta)
                            })
                          : this._worker.on(x, function () {
                              a.delay(f, arguments, m)
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
                      return new g(
                        this,
                        { objectMode: this._outputType !== 'nodebuffer' },
                        x
                      )
                    },
                  }),
                    (n.exports = c))
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
                function (t, n, s) {
                  if (
                    ((s.base64 = !0),
                    (s.array = !0),
                    (s.string = !0),
                    (s.arraybuffer =
                      typeof ArrayBuffer < 'u' && typeof Uint8Array < 'u'),
                    (s.nodebuffer = typeof Buffer < 'u'),
                    (s.uint8array = typeof Uint8Array < 'u'),
                    typeof ArrayBuffer > 'u')
                  )
                    s.blob = !1
                  else {
                    var a = new ArrayBuffer(0)
                    try {
                      s.blob =
                        new Blob([a], { type: 'application/zip' }).size === 0
                    } catch {
                      try {
                        var l = new (self.BlobBuilder ||
                          self.WebKitBlobBuilder ||
                          self.MozBlobBuilder ||
                          self.MSBlobBuilder)()
                        ;(l.append(a),
                          (s.blob = l.getBlob('application/zip').size === 0))
                      } catch {
                        s.blob = !1
                      }
                    }
                  }
                  try {
                    s.nodestream = !!t('readable-stream').Readable
                  } catch {
                    s.nodestream = !1
                  }
                },
                { 'readable-stream': 16 },
              ],
              31: [
                function (t, n, s) {
                  for (
                    var a = t('./utils'),
                      l = t('./support'),
                      i = t('./nodejsUtils'),
                      d = t('./stream/GenericWorker'),
                      u = new Array(256),
                      p = 0;
                    p < 256;
                    p++
                  )
                    u[p] =
                      252 <= p
                        ? 6
                        : 248 <= p
                          ? 5
                          : 240 <= p
                            ? 4
                            : 224 <= p
                              ? 3
                              : 192 <= p
                                ? 2
                                : 1
                  u[254] = u[254] = 1
                  function g() {
                    ;(d.call(this, 'utf-8 decode'), (this.leftOver = null))
                  }
                  function v() {
                    d.call(this, 'utf-8 encode')
                  }
                  ;((s.utf8encode = function (c) {
                    return l.nodebuffer
                      ? i.newBufferFrom(c, 'utf-8')
                      : (function (x) {
                          var f,
                            m,
                            w,
                            S,
                            C,
                            k = x.length,
                            E = 0
                          for (S = 0; S < k; S++)
                            ((64512 & (m = x.charCodeAt(S))) == 55296 &&
                              S + 1 < k &&
                              (64512 & (w = x.charCodeAt(S + 1))) == 56320 &&
                              ((m = 65536 + ((m - 55296) << 10) + (w - 56320)),
                              S++),
                              (E +=
                                m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4))
                          for (
                            f = l.uint8array ? new Uint8Array(E) : new Array(E),
                              S = C = 0;
                            C < E;
                            S++
                          )
                            ((64512 & (m = x.charCodeAt(S))) == 55296 &&
                              S + 1 < k &&
                              (64512 & (w = x.charCodeAt(S + 1))) == 56320 &&
                              ((m = 65536 + ((m - 55296) << 10) + (w - 56320)),
                              S++),
                              m < 128
                                ? (f[C++] = m)
                                : (m < 2048
                                    ? (f[C++] = 192 | (m >>> 6))
                                    : (m < 65536
                                        ? (f[C++] = 224 | (m >>> 12))
                                        : ((f[C++] = 240 | (m >>> 18)),
                                          (f[C++] = 128 | ((m >>> 12) & 63))),
                                      (f[C++] = 128 | ((m >>> 6) & 63))),
                                  (f[C++] = 128 | (63 & m))))
                          return f
                        })(c)
                  }),
                    (s.utf8decode = function (c) {
                      return l.nodebuffer
                        ? a.transformTo('nodebuffer', c).toString('utf-8')
                        : (function (x) {
                            var f,
                              m,
                              w,
                              S,
                              C = x.length,
                              k = new Array(2 * C)
                            for (f = m = 0; f < C; )
                              if ((w = x[f++]) < 128) k[m++] = w
                              else if (4 < (S = u[w]))
                                ((k[m++] = 65533), (f += S - 1))
                              else {
                                for (
                                  w &= S === 2 ? 31 : S === 3 ? 15 : 7;
                                  1 < S && f < C;

                                )
                                  ((w = (w << 6) | (63 & x[f++])), S--)
                                1 < S
                                  ? (k[m++] = 65533)
                                  : w < 65536
                                    ? (k[m++] = w)
                                    : ((w -= 65536),
                                      (k[m++] = 55296 | ((w >> 10) & 1023)),
                                      (k[m++] = 56320 | (1023 & w)))
                              }
                            return (
                              k.length !== m &&
                                (k.subarray
                                  ? (k = k.subarray(0, m))
                                  : (k.length = m)),
                              a.applyFromCharCode(k)
                            )
                          })(
                            (c = a.transformTo(
                              l.uint8array ? 'uint8array' : 'array',
                              c
                            ))
                          )
                    }),
                    a.inherits(g, d),
                    (g.prototype.processChunk = function (c) {
                      var x = a.transformTo(
                        l.uint8array ? 'uint8array' : 'array',
                        c.data
                      )
                      if (this.leftOver && this.leftOver.length) {
                        if (l.uint8array) {
                          var f = x
                          ;((x = new Uint8Array(
                            f.length + this.leftOver.length
                          )).set(this.leftOver, 0),
                            x.set(f, this.leftOver.length))
                        } else x = this.leftOver.concat(x)
                        this.leftOver = null
                      }
                      var m = (function (S, C) {
                          var k
                          for (
                            (C = C || S.length) > S.length && (C = S.length),
                              k = C - 1;
                            0 <= k && (192 & S[k]) == 128;

                          )
                            k--
                          return k < 0 || k === 0 ? C : k + u[S[k]] > C ? k : C
                        })(x),
                        w = x
                      ;(m !== x.length &&
                        (l.uint8array
                          ? ((w = x.subarray(0, m)),
                            (this.leftOver = x.subarray(m, x.length)))
                          : ((w = x.slice(0, m)),
                            (this.leftOver = x.slice(m, x.length)))),
                        this.push({ data: s.utf8decode(w), meta: c.meta }))
                    }),
                    (g.prototype.flush = function () {
                      this.leftOver &&
                        this.leftOver.length &&
                        (this.push({
                          data: s.utf8decode(this.leftOver),
                          meta: {},
                        }),
                        (this.leftOver = null))
                    }),
                    (s.Utf8DecodeWorker = g),
                    a.inherits(v, d),
                    (v.prototype.processChunk = function (c) {
                      this.push({ data: s.utf8encode(c.data), meta: c.meta })
                    }),
                    (s.Utf8EncodeWorker = v))
                },
                {
                  './nodejsUtils': 14,
                  './stream/GenericWorker': 28,
                  './support': 30,
                  './utils': 32,
                },
              ],
              32: [
                function (t, n, s) {
                  var a = t('./support'),
                    l = t('./base64'),
                    i = t('./nodejsUtils'),
                    d = t('./external')
                  function u(f) {
                    return f
                  }
                  function p(f, m) {
                    for (var w = 0; w < f.length; ++w)
                      m[w] = 255 & f.charCodeAt(w)
                    return m
                  }
                  ;(t('setimmediate'),
                    (s.newBlob = function (f, m) {
                      s.checkSupport('blob')
                      try {
                        return new Blob([f], { type: m })
                      } catch {
                        try {
                          var w = new (self.BlobBuilder ||
                            self.WebKitBlobBuilder ||
                            self.MozBlobBuilder ||
                            self.MSBlobBuilder)()
                          return (w.append(f), w.getBlob(m))
                        } catch {
                          throw new Error("Bug : can't construct the Blob.")
                        }
                      }
                    }))
                  var g = {
                    stringifyByChunk: function (f, m, w) {
                      var S = [],
                        C = 0,
                        k = f.length
                      if (k <= w) return String.fromCharCode.apply(null, f)
                      for (; C < k; )
                        (m === 'array' || m === 'nodebuffer'
                          ? S.push(
                              String.fromCharCode.apply(
                                null,
                                f.slice(C, Math.min(C + w, k))
                              )
                            )
                          : S.push(
                              String.fromCharCode.apply(
                                null,
                                f.subarray(C, Math.min(C + w, k))
                              )
                            ),
                          (C += w))
                      return S.join('')
                    },
                    stringifyByChar: function (f) {
                      for (var m = '', w = 0; w < f.length; w++)
                        m += String.fromCharCode(f[w])
                      return m
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
                  function v(f) {
                    var m = 65536,
                      w = s.getTypeOf(f),
                      S = !0
                    if (
                      (w === 'uint8array'
                        ? (S = g.applyCanBeUsed.uint8array)
                        : w === 'nodebuffer' &&
                          (S = g.applyCanBeUsed.nodebuffer),
                      S)
                    )
                      for (; 1 < m; )
                        try {
                          return g.stringifyByChunk(f, w, m)
                        } catch {
                          m = Math.floor(m / 2)
                        }
                    return g.stringifyByChar(f)
                  }
                  function c(f, m) {
                    for (var w = 0; w < f.length; w++) m[w] = f[w]
                    return m
                  }
                  s.applyFromCharCode = v
                  var x = {}
                  ;((x.string = {
                    string: u,
                    array: function (f) {
                      return p(f, new Array(f.length))
                    },
                    arraybuffer: function (f) {
                      return x.string.uint8array(f).buffer
                    },
                    uint8array: function (f) {
                      return p(f, new Uint8Array(f.length))
                    },
                    nodebuffer: function (f) {
                      return p(f, i.allocBuffer(f.length))
                    },
                  }),
                    (x.array = {
                      string: v,
                      array: u,
                      arraybuffer: function (f) {
                        return new Uint8Array(f).buffer
                      },
                      uint8array: function (f) {
                        return new Uint8Array(f)
                      },
                      nodebuffer: function (f) {
                        return i.newBufferFrom(f)
                      },
                    }),
                    (x.arraybuffer = {
                      string: function (f) {
                        return v(new Uint8Array(f))
                      },
                      array: function (f) {
                        return c(new Uint8Array(f), new Array(f.byteLength))
                      },
                      arraybuffer: u,
                      uint8array: function (f) {
                        return new Uint8Array(f)
                      },
                      nodebuffer: function (f) {
                        return i.newBufferFrom(new Uint8Array(f))
                      },
                    }),
                    (x.uint8array = {
                      string: v,
                      array: function (f) {
                        return c(f, new Array(f.length))
                      },
                      arraybuffer: function (f) {
                        return f.buffer
                      },
                      uint8array: u,
                      nodebuffer: function (f) {
                        return i.newBufferFrom(f)
                      },
                    }),
                    (x.nodebuffer = {
                      string: v,
                      array: function (f) {
                        return c(f, new Array(f.length))
                      },
                      arraybuffer: function (f) {
                        return x.nodebuffer.uint8array(f).buffer
                      },
                      uint8array: function (f) {
                        return c(f, new Uint8Array(f.length))
                      },
                      nodebuffer: u,
                    }),
                    (s.transformTo = function (f, m) {
                      if (((m = m || ''), !f)) return m
                      s.checkSupport(f)
                      var w = s.getTypeOf(m)
                      return x[w][f](m)
                    }),
                    (s.resolve = function (f) {
                      for (
                        var m = f.split('/'), w = [], S = 0;
                        S < m.length;
                        S++
                      ) {
                        var C = m[S]
                        C === '.' ||
                          (C === '' && S !== 0 && S !== m.length - 1) ||
                          (C === '..' ? w.pop() : w.push(C))
                      }
                      return w.join('/')
                    }),
                    (s.getTypeOf = function (f) {
                      return typeof f == 'string'
                        ? 'string'
                        : Object.prototype.toString.call(f) === '[object Array]'
                          ? 'array'
                          : a.nodebuffer && i.isBuffer(f)
                            ? 'nodebuffer'
                            : a.uint8array && f instanceof Uint8Array
                              ? 'uint8array'
                              : a.arraybuffer && f instanceof ArrayBuffer
                                ? 'arraybuffer'
                                : void 0
                    }),
                    (s.checkSupport = function (f) {
                      if (!a[f.toLowerCase()])
                        throw new Error(
                          f + ' is not supported by this platform'
                        )
                    }),
                    (s.MAX_VALUE_16BITS = 65535),
                    (s.MAX_VALUE_32BITS = -1),
                    (s.pretty = function (f) {
                      var m,
                        w,
                        S = ''
                      for (w = 0; w < (f || '').length; w++)
                        S +=
                          '\\x' +
                          ((m = f.charCodeAt(w)) < 16 ? '0' : '') +
                          m.toString(16).toUpperCase()
                      return S
                    }),
                    (s.delay = function (f, m, w) {
                      setImmediate(function () {
                        f.apply(w || null, m || [])
                      })
                    }),
                    (s.inherits = function (f, m) {
                      function w() {}
                      ;((w.prototype = m.prototype), (f.prototype = new w()))
                    }),
                    (s.extend = function () {
                      var f,
                        m,
                        w = {}
                      for (f = 0; f < arguments.length; f++)
                        for (m in arguments[f])
                          Object.prototype.hasOwnProperty.call(
                            arguments[f],
                            m
                          ) &&
                            w[m] === void 0 &&
                            (w[m] = arguments[f][m])
                      return w
                    }),
                    (s.prepareContent = function (f, m, w, S, C) {
                      return d.Promise.resolve(m)
                        .then(function (k) {
                          return a.blob &&
                            (k instanceof Blob ||
                              ['[object File]', '[object Blob]'].indexOf(
                                Object.prototype.toString.call(k)
                              ) !== -1) &&
                            typeof FileReader < 'u'
                            ? new d.Promise(function (E, I) {
                                var T = new FileReader()
                                ;((T.onload = function (D) {
                                  E(D.target.result)
                                }),
                                  (T.onerror = function (D) {
                                    I(D.target.error)
                                  }),
                                  T.readAsArrayBuffer(k))
                              })
                            : k
                        })
                        .then(function (k) {
                          var E = s.getTypeOf(k)
                          return E
                            ? (E === 'arraybuffer'
                                ? (k = s.transformTo('uint8array', k))
                                : E === 'string' &&
                                  (C
                                    ? (k = l.decode(k))
                                    : w &&
                                      S !== !0 &&
                                      (k = (function (I) {
                                        return p(
                                          I,
                                          a.uint8array
                                            ? new Uint8Array(I.length)
                                            : new Array(I.length)
                                        )
                                      })(k))),
                              k)
                            : d.Promise.reject(
                                new Error(
                                  "Can't read the data of '" +
                                    f +
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
                function (t, n, s) {
                  var a = t('./reader/readerFor'),
                    l = t('./utils'),
                    i = t('./signature'),
                    d = t('./zipEntry'),
                    u = t('./support')
                  function p(g) {
                    ;((this.files = []), (this.loadOptions = g))
                  }
                  ;((p.prototype = {
                    checkSignature: function (g) {
                      if (!this.reader.readAndCheckSignature(g)) {
                        this.reader.index -= 4
                        var v = this.reader.readString(4)
                        throw new Error(
                          'Corrupted zip or bug: unexpected signature (' +
                            l.pretty(v) +
                            ', expected ' +
                            l.pretty(g) +
                            ')'
                        )
                      }
                    },
                    isSignature: function (g, v) {
                      var c = this.reader.index
                      this.reader.setIndex(g)
                      var x = this.reader.readString(4) === v
                      return (this.reader.setIndex(c), x)
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
                      var g = this.reader.readData(this.zipCommentLength),
                        v = u.uint8array ? 'uint8array' : 'array',
                        c = l.transformTo(v, g)
                      this.zipComment = this.loadOptions.decodeFileName(c)
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
                        var g, v, c, x = this.zip64EndOfCentralSize - 44;
                        0 < x;

                      )
                        ((g = this.reader.readInt(2)),
                          (v = this.reader.readInt(4)),
                          (c = this.reader.readData(v)),
                          (this.zip64ExtensibleData[g] = {
                            id: g,
                            length: v,
                            value: c,
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
                      var g, v
                      for (g = 0; g < this.files.length; g++)
                        ((v = this.files[g]),
                          this.reader.setIndex(v.localHeaderOffset),
                          this.checkSignature(i.LOCAL_FILE_HEADER),
                          v.readLocalPart(this.reader),
                          v.handleUTF8(),
                          v.processAttributes())
                    },
                    readCentralDir: function () {
                      var g
                      for (
                        this.reader.setIndex(this.centralDirOffset);
                        this.reader.readAndCheckSignature(
                          i.CENTRAL_FILE_HEADER
                        );

                      )
                        ((g = new d(
                          { zip64: this.zip64 },
                          this.loadOptions
                        )).readCentralPart(this.reader),
                          this.files.push(g))
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
                      var g = this.reader.lastIndexOfSignature(
                        i.CENTRAL_DIRECTORY_END
                      )
                      if (g < 0)
                        throw this.isSignature(0, i.LOCAL_FILE_HEADER)
                          ? new Error(
                              "Corrupted zip: can't find end of central directory"
                            )
                          : new Error(
                              "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"
                            )
                      this.reader.setIndex(g)
                      var v = g
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
                          (g = this.reader.lastIndexOfSignature(
                            i.ZIP64_CENTRAL_DIRECTORY_LOCATOR
                          )) < 0)
                        )
                          throw new Error(
                            "Corrupted zip: can't find the ZIP64 end of central directory locator"
                          )
                        if (
                          (this.reader.setIndex(g),
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
                      var c = this.centralDirOffset + this.centralDirSize
                      this.zip64 &&
                        ((c += 20), (c += 12 + this.zip64EndOfCentralSize))
                      var x = v - c
                      if (0 < x)
                        this.isSignature(v, i.CENTRAL_FILE_HEADER) ||
                          (this.reader.zero = x)
                      else if (x < 0)
                        throw new Error(
                          'Corrupted zip: missing ' + Math.abs(x) + ' bytes.'
                        )
                    },
                    prepareReader: function (g) {
                      this.reader = a(g)
                    },
                    load: function (g) {
                      ;(this.prepareReader(g),
                        this.readEndOfCentral(),
                        this.readCentralDir(),
                        this.readLocalFiles())
                    },
                  }),
                    (n.exports = p))
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
                function (t, n, s) {
                  var a = t('./reader/readerFor'),
                    l = t('./utils'),
                    i = t('./compressedObject'),
                    d = t('./crc32'),
                    u = t('./utf8'),
                    p = t('./compressions'),
                    g = t('./support')
                  function v(c, x) {
                    ;((this.options = c), (this.loadOptions = x))
                  }
                  ;((v.prototype = {
                    isEncrypted: function () {
                      return (1 & this.bitFlag) == 1
                    },
                    useUTF8: function () {
                      return (2048 & this.bitFlag) == 2048
                    },
                    readLocalPart: function (c) {
                      var x, f
                      if (
                        (c.skip(22),
                        (this.fileNameLength = c.readInt(2)),
                        (f = c.readInt(2)),
                        (this.fileName = c.readData(this.fileNameLength)),
                        c.skip(f),
                        this.compressedSize === -1 ||
                          this.uncompressedSize === -1)
                      )
                        throw new Error(
                          "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)"
                        )
                      if (
                        (x = (function (m) {
                          for (var w in p)
                            if (
                              Object.prototype.hasOwnProperty.call(p, w) &&
                              p[w].magic === m
                            )
                              return p[w]
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
                        c.readData(this.compressedSize)
                      )
                    },
                    readCentralPart: function (c) {
                      ;((this.versionMadeBy = c.readInt(2)),
                        c.skip(2),
                        (this.bitFlag = c.readInt(2)),
                        (this.compressionMethod = c.readString(2)),
                        (this.date = c.readDate()),
                        (this.crc32 = c.readInt(4)),
                        (this.compressedSize = c.readInt(4)),
                        (this.uncompressedSize = c.readInt(4)))
                      var x = c.readInt(2)
                      if (
                        ((this.extraFieldsLength = c.readInt(2)),
                        (this.fileCommentLength = c.readInt(2)),
                        (this.diskNumberStart = c.readInt(2)),
                        (this.internalFileAttributes = c.readInt(2)),
                        (this.externalFileAttributes = c.readInt(4)),
                        (this.localHeaderOffset = c.readInt(4)),
                        this.isEncrypted())
                      )
                        throw new Error('Encrypted zip are not supported')
                      ;(c.skip(x),
                        this.readExtraFields(c),
                        this.parseZIP64ExtraField(c),
                        (this.fileComment = c.readData(this.fileCommentLength)))
                    },
                    processAttributes: function () {
                      ;((this.unixPermissions = null),
                        (this.dosPermissions = null))
                      var c = this.versionMadeBy >> 8
                      ;((this.dir = !!(16 & this.externalFileAttributes)),
                        c == 0 &&
                          (this.dosPermissions =
                            63 & this.externalFileAttributes),
                        c == 3 &&
                          (this.unixPermissions =
                            (this.externalFileAttributes >> 16) & 65535),
                        this.dir ||
                          this.fileNameStr.slice(-1) !== '/' ||
                          (this.dir = !0))
                    },
                    parseZIP64ExtraField: function () {
                      if (this.extraFields[1]) {
                        var c = a(this.extraFields[1].value)
                        ;(this.uncompressedSize === l.MAX_VALUE_32BITS &&
                          (this.uncompressedSize = c.readInt(8)),
                          this.compressedSize === l.MAX_VALUE_32BITS &&
                            (this.compressedSize = c.readInt(8)),
                          this.localHeaderOffset === l.MAX_VALUE_32BITS &&
                            (this.localHeaderOffset = c.readInt(8)),
                          this.diskNumberStart === l.MAX_VALUE_32BITS &&
                            (this.diskNumberStart = c.readInt(4)))
                      }
                    },
                    readExtraFields: function (c) {
                      var x,
                        f,
                        m,
                        w = c.index + this.extraFieldsLength
                      for (
                        this.extraFields || (this.extraFields = {});
                        c.index + 4 < w;

                      )
                        ((x = c.readInt(2)),
                          (f = c.readInt(2)),
                          (m = c.readData(f)),
                          (this.extraFields[x] = {
                            id: x,
                            length: f,
                            value: m,
                          }))
                      c.setIndex(w)
                    },
                    handleUTF8: function () {
                      var c = g.uint8array ? 'uint8array' : 'array'
                      if (this.useUTF8())
                        ((this.fileNameStr = u.utf8decode(this.fileName)),
                          (this.fileCommentStr = u.utf8decode(
                            this.fileComment
                          )))
                      else {
                        var x = this.findExtraFieldUnicodePath()
                        if (x !== null) this.fileNameStr = x
                        else {
                          var f = l.transformTo(c, this.fileName)
                          this.fileNameStr = this.loadOptions.decodeFileName(f)
                        }
                        var m = this.findExtraFieldUnicodeComment()
                        if (m !== null) this.fileCommentStr = m
                        else {
                          var w = l.transformTo(c, this.fileComment)
                          this.fileCommentStr =
                            this.loadOptions.decodeFileName(w)
                        }
                      }
                    },
                    findExtraFieldUnicodePath: function () {
                      var c = this.extraFields[28789]
                      if (c) {
                        var x = a(c.value)
                        return x.readInt(1) !== 1 ||
                          d(this.fileName) !== x.readInt(4)
                          ? null
                          : u.utf8decode(x.readData(c.length - 5))
                      }
                      return null
                    },
                    findExtraFieldUnicodeComment: function () {
                      var c = this.extraFields[25461]
                      if (c) {
                        var x = a(c.value)
                        return x.readInt(1) !== 1 ||
                          d(this.fileComment) !== x.readInt(4)
                          ? null
                          : u.utf8decode(x.readData(c.length - 5))
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
                function (t, n, s) {
                  function a(x, f, m) {
                    ;((this.name = x),
                      (this.dir = m.dir),
                      (this.date = m.date),
                      (this.comment = m.comment),
                      (this.unixPermissions = m.unixPermissions),
                      (this.dosPermissions = m.dosPermissions),
                      (this._data = f),
                      (this._dataBinary = m.binary),
                      (this.options = {
                        compression: m.compression,
                        compressionOptions: m.compressionOptions,
                      }))
                  }
                  var l = t('./stream/StreamHelper'),
                    i = t('./stream/DataWorker'),
                    d = t('./utf8'),
                    u = t('./compressedObject'),
                    p = t('./stream/GenericWorker')
                  a.prototype = {
                    internalStream: function (x) {
                      var f = null,
                        m = 'string'
                      try {
                        if (!x) throw new Error('No output type specified.')
                        var w =
                          (m = x.toLowerCase()) === 'string' || m === 'text'
                        ;((m !== 'binarystring' && m !== 'text') ||
                          (m = 'string'),
                          (f = this._decompressWorker()))
                        var S = !this._dataBinary
                        ;(S && !w && (f = f.pipe(new d.Utf8EncodeWorker())),
                          !S && w && (f = f.pipe(new d.Utf8DecodeWorker())))
                      } catch (C) {
                        ;(f = new p('error')).error(C)
                      }
                      return new l(f, m, '')
                    },
                    async: function (x, f) {
                      return this.internalStream(x).accumulate(f)
                    },
                    nodeStream: function (x, f) {
                      return this.internalStream(
                        x || 'nodebuffer'
                      ).toNodejsStream(f)
                    },
                    _compressWorker: function (x, f) {
                      if (
                        this._data instanceof u &&
                        this._data.compression.magic === x.magic
                      )
                        return this._data.getCompressedWorker()
                      var m = this._decompressWorker()
                      return (
                        this._dataBinary ||
                          (m = m.pipe(new d.Utf8EncodeWorker())),
                        u.createWorkerFrom(m, x, f)
                      )
                    },
                    _decompressWorker: function () {
                      return this._data instanceof u
                        ? this._data.getContentWorker()
                        : this._data instanceof p
                          ? this._data
                          : new i(this._data)
                    },
                  }
                  for (
                    var g = [
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
                      c = 0;
                    c < g.length;
                    c++
                  )
                    a.prototype[g[c]] = v
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
                function (t, n, s) {
                  ;(function (a) {
                    var l,
                      i,
                      d = a.MutationObserver || a.WebKitMutationObserver
                    if (d) {
                      var u = 0,
                        p = new d(x),
                        g = a.document.createTextNode('')
                      ;(p.observe(g, { characterData: !0 }),
                        (l = function () {
                          g.data = u = ++u % 2
                        }))
                    } else if (a.setImmediate || a.MessageChannel === void 0)
                      l =
                        'document' in a &&
                        'onreadystatechange' in
                          a.document.createElement('script')
                          ? function () {
                              var f = a.document.createElement('script')
                              ;((f.onreadystatechange = function () {
                                ;(x(),
                                  (f.onreadystatechange = null),
                                  f.parentNode.removeChild(f),
                                  (f = null))
                              }),
                                a.document.documentElement.appendChild(f))
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
                    var c = []
                    function x() {
                      var f, m
                      i = !0
                      for (var w = c.length; w; ) {
                        for (m = c, c = [], f = -1; ++f < w; ) m[f]()
                        w = c.length
                      }
                      i = !1
                    }
                    n.exports = function (f) {
                      c.push(f) !== 1 || i || l()
                    }
                  }).call(
                    this,
                    typeof fr < 'u'
                      ? fr
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
                function (t, n, s) {
                  var a = t('immediate')
                  function l() {}
                  var i = {},
                    d = ['REJECTED'],
                    u = ['FULFILLED'],
                    p = ['PENDING']
                  function g(w) {
                    if (typeof w != 'function')
                      throw new TypeError('resolver must be a function')
                    ;((this.state = p),
                      (this.queue = []),
                      (this.outcome = void 0),
                      w !== l && f(this, w))
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
                  function c(w, S, C) {
                    a(function () {
                      var k
                      try {
                        k = S(C)
                      } catch (E) {
                        return i.reject(w, E)
                      }
                      k === w
                        ? i.reject(
                            w,
                            new TypeError('Cannot resolve promise with itself')
                          )
                        : i.resolve(w, k)
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
                  function f(w, S) {
                    var C = !1
                    function k(T) {
                      C || ((C = !0), i.reject(w, T))
                    }
                    function E(T) {
                      C || ((C = !0), i.resolve(w, T))
                    }
                    var I = m(function () {
                      S(E, k)
                    })
                    I.status === 'error' && k(I.value)
                  }
                  function m(w, S) {
                    var C = {}
                    try {
                      ;((C.value = w(S)), (C.status = 'success'))
                    } catch (k) {
                      ;((C.status = 'error'), (C.value = k))
                    }
                    return C
                  }
                  ;(((n.exports = g).prototype.finally = function (w) {
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
                    (g.prototype.catch = function (w) {
                      return this.then(null, w)
                    }),
                    (g.prototype.then = function (w, S) {
                      if (
                        (typeof w != 'function' && this.state === u) ||
                        (typeof S != 'function' && this.state === d)
                      )
                        return this
                      var C = new this.constructor(l)
                      return (
                        this.state !== p
                          ? c(C, this.state === u ? w : S, this.outcome)
                          : this.queue.push(new v(C, w, S)),
                        C
                      )
                    }),
                    (v.prototype.callFulfilled = function (w) {
                      i.resolve(this.promise, w)
                    }),
                    (v.prototype.otherCallFulfilled = function (w) {
                      c(this.promise, this.onFulfilled, w)
                    }),
                    (v.prototype.callRejected = function (w) {
                      i.reject(this.promise, w)
                    }),
                    (v.prototype.otherCallRejected = function (w) {
                      c(this.promise, this.onRejected, w)
                    }),
                    (i.resolve = function (w, S) {
                      var C = m(x, S)
                      if (C.status === 'error') return i.reject(w, C.value)
                      var k = C.value
                      if (k) f(w, k)
                      else {
                        ;((w.state = u), (w.outcome = S))
                        for (var E = -1, I = w.queue.length; ++E < I; )
                          w.queue[E].callFulfilled(S)
                      }
                      return w
                    }),
                    (i.reject = function (w, S) {
                      ;((w.state = d), (w.outcome = S))
                      for (var C = -1, k = w.queue.length; ++C < k; )
                        w.queue[C].callRejected(S)
                      return w
                    }),
                    (g.resolve = function (w) {
                      return w instanceof this ? w : i.resolve(new this(l), w)
                    }),
                    (g.reject = function (w) {
                      var S = new this(l)
                      return i.reject(S, w)
                    }),
                    (g.all = function (w) {
                      var S = this
                      if (
                        Object.prototype.toString.call(w) !== '[object Array]'
                      )
                        return this.reject(new TypeError('must be an array'))
                      var C = w.length,
                        k = !1
                      if (!C) return this.resolve([])
                      for (
                        var E = new Array(C), I = 0, T = -1, D = new this(l);
                        ++T < C;

                      )
                        R(w[T], T)
                      return D
                      function R(L, H) {
                        S.resolve(L).then(
                          function (_) {
                            ;((E[H] = _),
                              ++I !== C || k || ((k = !0), i.resolve(D, E)))
                          },
                          function (_) {
                            k || ((k = !0), i.reject(D, _))
                          }
                        )
                      }
                    }),
                    (g.race = function (w) {
                      var S = this
                      if (
                        Object.prototype.toString.call(w) !== '[object Array]'
                      )
                        return this.reject(new TypeError('must be an array'))
                      var C = w.length,
                        k = !1
                      if (!C) return this.resolve([])
                      for (var E = -1, I = new this(l); ++E < C; )
                        ((T = w[E]),
                          S.resolve(T).then(
                            function (D) {
                              k || ((k = !0), i.resolve(I, D))
                            },
                            function (D) {
                              k || ((k = !0), i.reject(I, D))
                            }
                          ))
                      var T
                      return I
                    }))
                },
                { immediate: 36 },
              ],
              38: [
                function (t, n, s) {
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
                function (t, n, s) {
                  var a = t('./zlib/deflate'),
                    l = t('./utils/common'),
                    i = t('./utils/strings'),
                    d = t('./zlib/messages'),
                    u = t('./zlib/zstream'),
                    p = Object.prototype.toString,
                    g = 0,
                    v = -1,
                    c = 0,
                    x = 8
                  function f(w) {
                    if (!(this instanceof f)) return new f(w)
                    this.options = l.assign(
                      {
                        level: v,
                        method: x,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: c,
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
                      (this.strm = new u()),
                      (this.strm.avail_out = 0))
                    var C = a.deflateInit2(
                      this.strm,
                      S.level,
                      S.method,
                      S.windowBits,
                      S.memLevel,
                      S.strategy
                    )
                    if (C !== g) throw new Error(d[C])
                    if (
                      (S.header && a.deflateSetHeader(this.strm, S.header),
                      S.dictionary)
                    ) {
                      var k
                      if (
                        ((k =
                          typeof S.dictionary == 'string'
                            ? i.string2buf(S.dictionary)
                            : p.call(S.dictionary) === '[object ArrayBuffer]'
                              ? new Uint8Array(S.dictionary)
                              : S.dictionary),
                        (C = a.deflateSetDictionary(this.strm, k)) !== g)
                      )
                        throw new Error(d[C])
                      this._dict_set = !0
                    }
                  }
                  function m(w, S) {
                    var C = new f(S)
                    if ((C.push(w, !0), C.err)) throw C.msg || d[C.err]
                    return C.result
                  }
                  ;((f.prototype.push = function (w, S) {
                    var C,
                      k,
                      E = this.strm,
                      I = this.options.chunkSize
                    if (this.ended) return !1
                    ;((k = S === ~~S ? S : S === !0 ? 4 : 0),
                      typeof w == 'string'
                        ? (E.input = i.string2buf(w))
                        : p.call(w) === '[object ArrayBuffer]'
                          ? (E.input = new Uint8Array(w))
                          : (E.input = w),
                      (E.next_in = 0),
                      (E.avail_in = E.input.length))
                    do {
                      if (
                        (E.avail_out === 0 &&
                          ((E.output = new l.Buf8(I)),
                          (E.next_out = 0),
                          (E.avail_out = I)),
                        (C = a.deflate(E, k)) !== 1 && C !== g)
                      )
                        return (this.onEnd(C), !(this.ended = !0))
                      ;(E.avail_out !== 0 &&
                        (E.avail_in !== 0 || (k !== 4 && k !== 2))) ||
                        (this.options.to === 'string'
                          ? this.onData(
                              i.buf2binstring(l.shrinkBuf(E.output, E.next_out))
                            )
                          : this.onData(l.shrinkBuf(E.output, E.next_out)))
                    } while ((0 < E.avail_in || E.avail_out === 0) && C !== 1)
                    return k === 4
                      ? ((C = a.deflateEnd(this.strm)),
                        this.onEnd(C),
                        (this.ended = !0),
                        C === g)
                      : k !== 2 || (this.onEnd(g), !(E.avail_out = 0))
                  }),
                    (f.prototype.onData = function (w) {
                      this.chunks.push(w)
                    }),
                    (f.prototype.onEnd = function (w) {
                      ;(w === g &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = l.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = w),
                        (this.msg = this.strm.msg))
                    }),
                    (s.Deflate = f),
                    (s.deflate = m),
                    (s.deflateRaw = function (w, S) {
                      return (((S = S || {}).raw = !0), m(w, S))
                    }),
                    (s.gzip = function (w, S) {
                      return (((S = S || {}).gzip = !0), m(w, S))
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
                function (t, n, s) {
                  var a = t('./zlib/inflate'),
                    l = t('./utils/common'),
                    i = t('./utils/strings'),
                    d = t('./zlib/constants'),
                    u = t('./zlib/messages'),
                    p = t('./zlib/zstream'),
                    g = t('./zlib/gzheader'),
                    v = Object.prototype.toString
                  function c(f) {
                    if (!(this instanceof c)) return new c(f)
                    this.options = l.assign(
                      { chunkSize: 16384, windowBits: 0, to: '' },
                      f || {}
                    )
                    var m = this.options
                    ;(m.raw &&
                      0 <= m.windowBits &&
                      m.windowBits < 16 &&
                      ((m.windowBits = -m.windowBits),
                      m.windowBits === 0 && (m.windowBits = -15)),
                      !(0 <= m.windowBits && m.windowBits < 16) ||
                        (f && f.windowBits) ||
                        (m.windowBits += 32),
                      15 < m.windowBits &&
                        m.windowBits < 48 &&
                        (15 & m.windowBits) == 0 &&
                        (m.windowBits |= 15),
                      (this.err = 0),
                      (this.msg = ''),
                      (this.ended = !1),
                      (this.chunks = []),
                      (this.strm = new p()),
                      (this.strm.avail_out = 0))
                    var w = a.inflateInit2(this.strm, m.windowBits)
                    if (w !== d.Z_OK) throw new Error(u[w])
                    ;((this.header = new g()),
                      a.inflateGetHeader(this.strm, this.header))
                  }
                  function x(f, m) {
                    var w = new c(m)
                    if ((w.push(f, !0), w.err)) throw w.msg || u[w.err]
                    return w.result
                  }
                  ;((c.prototype.push = function (f, m) {
                    var w,
                      S,
                      C,
                      k,
                      E,
                      I,
                      T = this.strm,
                      D = this.options.chunkSize,
                      R = this.options.dictionary,
                      L = !1
                    if (this.ended) return !1
                    ;((S =
                      m === ~~m ? m : m === !0 ? d.Z_FINISH : d.Z_NO_FLUSH),
                      typeof f == 'string'
                        ? (T.input = i.binstring2buf(f))
                        : v.call(f) === '[object ArrayBuffer]'
                          ? (T.input = new Uint8Array(f))
                          : (T.input = f),
                      (T.next_in = 0),
                      (T.avail_in = T.input.length))
                    do {
                      if (
                        (T.avail_out === 0 &&
                          ((T.output = new l.Buf8(D)),
                          (T.next_out = 0),
                          (T.avail_out = D)),
                        (w = a.inflate(T, d.Z_NO_FLUSH)) === d.Z_NEED_DICT &&
                          R &&
                          ((I =
                            typeof R == 'string'
                              ? i.string2buf(R)
                              : v.call(R) === '[object ArrayBuffer]'
                                ? new Uint8Array(R)
                                : R),
                          (w = a.inflateSetDictionary(this.strm, I))),
                        w === d.Z_BUF_ERROR &&
                          L === !0 &&
                          ((w = d.Z_OK), (L = !1)),
                        w !== d.Z_STREAM_END && w !== d.Z_OK)
                      )
                        return (this.onEnd(w), !(this.ended = !0))
                      ;(T.next_out &&
                        ((T.avail_out !== 0 &&
                          w !== d.Z_STREAM_END &&
                          (T.avail_in !== 0 ||
                            (S !== d.Z_FINISH && S !== d.Z_SYNC_FLUSH))) ||
                          (this.options.to === 'string'
                            ? ((C = i.utf8border(T.output, T.next_out)),
                              (k = T.next_out - C),
                              (E = i.buf2string(T.output, C)),
                              (T.next_out = k),
                              (T.avail_out = D - k),
                              k && l.arraySet(T.output, T.output, C, k, 0),
                              this.onData(E))
                            : this.onData(l.shrinkBuf(T.output, T.next_out)))),
                        T.avail_in === 0 && T.avail_out === 0 && (L = !0))
                    } while (
                      (0 < T.avail_in || T.avail_out === 0) &&
                      w !== d.Z_STREAM_END
                    )
                    return (
                      w === d.Z_STREAM_END && (S = d.Z_FINISH),
                      S === d.Z_FINISH
                        ? ((w = a.inflateEnd(this.strm)),
                          this.onEnd(w),
                          (this.ended = !0),
                          w === d.Z_OK)
                        : S !== d.Z_SYNC_FLUSH ||
                          (this.onEnd(d.Z_OK), !(T.avail_out = 0))
                    )
                  }),
                    (c.prototype.onData = function (f) {
                      this.chunks.push(f)
                    }),
                    (c.prototype.onEnd = function (f) {
                      ;(f === d.Z_OK &&
                        (this.options.to === 'string'
                          ? (this.result = this.chunks.join(''))
                          : (this.result = l.flattenChunks(this.chunks))),
                        (this.chunks = []),
                        (this.err = f),
                        (this.msg = this.strm.msg))
                    }),
                    (s.Inflate = c),
                    (s.inflate = x),
                    (s.inflateRaw = function (f, m) {
                      return (((m = m || {}).raw = !0), x(f, m))
                    }),
                    (s.ungzip = x))
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
                function (t, n, s) {
                  var a =
                    typeof Uint8Array < 'u' &&
                    typeof Uint16Array < 'u' &&
                    typeof Int32Array < 'u'
                  ;((s.assign = function (d) {
                    for (
                      var u = Array.prototype.slice.call(arguments, 1);
                      u.length;

                    ) {
                      var p = u.shift()
                      if (p) {
                        if (typeof p != 'object')
                          throw new TypeError(p + 'must be non-object')
                        for (var g in p) p.hasOwnProperty(g) && (d[g] = p[g])
                      }
                    }
                    return d
                  }),
                    (s.shrinkBuf = function (d, u) {
                      return d.length === u
                        ? d
                        : d.subarray
                          ? d.subarray(0, u)
                          : ((d.length = u), d)
                    }))
                  var l = {
                      arraySet: function (d, u, p, g, v) {
                        if (u.subarray && d.subarray)
                          d.set(u.subarray(p, p + g), v)
                        else for (var c = 0; c < g; c++) d[v + c] = u[p + c]
                      },
                      flattenChunks: function (d) {
                        var u, p, g, v, c, x
                        for (u = g = 0, p = d.length; u < p; u++)
                          g += d[u].length
                        for (
                          x = new Uint8Array(g), u = v = 0, p = d.length;
                          u < p;
                          u++
                        )
                          ((c = d[u]), x.set(c, v), (v += c.length))
                        return x
                      },
                    },
                    i = {
                      arraySet: function (d, u, p, g, v) {
                        for (var c = 0; c < g; c++) d[v + c] = u[p + c]
                      },
                      flattenChunks: function (d) {
                        return [].concat.apply([], d)
                      },
                    }
                  ;((s.setTyped = function (d) {
                    d
                      ? ((s.Buf8 = Uint8Array),
                        (s.Buf16 = Uint16Array),
                        (s.Buf32 = Int32Array),
                        s.assign(s, l))
                      : ((s.Buf8 = Array),
                        (s.Buf16 = Array),
                        (s.Buf32 = Array),
                        s.assign(s, i))
                  }),
                    s.setTyped(a))
                },
                {},
              ],
              42: [
                function (t, n, s) {
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
                  for (var d = new a.Buf8(256), u = 0; u < 256; u++)
                    d[u] =
                      252 <= u
                        ? 6
                        : 248 <= u
                          ? 5
                          : 240 <= u
                            ? 4
                            : 224 <= u
                              ? 3
                              : 192 <= u
                                ? 2
                                : 1
                  function p(g, v) {
                    if (v < 65537 && ((g.subarray && i) || (!g.subarray && l)))
                      return String.fromCharCode.apply(null, a.shrinkBuf(g, v))
                    for (var c = '', x = 0; x < v; x++)
                      c += String.fromCharCode(g[x])
                    return c
                  }
                  ;((d[254] = d[254] = 1),
                    (s.string2buf = function (g) {
                      var v,
                        c,
                        x,
                        f,
                        m,
                        w = g.length,
                        S = 0
                      for (f = 0; f < w; f++)
                        ((64512 & (c = g.charCodeAt(f))) == 55296 &&
                          f + 1 < w &&
                          (64512 & (x = g.charCodeAt(f + 1))) == 56320 &&
                          ((c = 65536 + ((c - 55296) << 10) + (x - 56320)),
                          f++),
                          (S += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4))
                      for (v = new a.Buf8(S), f = m = 0; m < S; f++)
                        ((64512 & (c = g.charCodeAt(f))) == 55296 &&
                          f + 1 < w &&
                          (64512 & (x = g.charCodeAt(f + 1))) == 56320 &&
                          ((c = 65536 + ((c - 55296) << 10) + (x - 56320)),
                          f++),
                          c < 128
                            ? (v[m++] = c)
                            : (c < 2048
                                ? (v[m++] = 192 | (c >>> 6))
                                : (c < 65536
                                    ? (v[m++] = 224 | (c >>> 12))
                                    : ((v[m++] = 240 | (c >>> 18)),
                                      (v[m++] = 128 | ((c >>> 12) & 63))),
                                  (v[m++] = 128 | ((c >>> 6) & 63))),
                              (v[m++] = 128 | (63 & c))))
                      return v
                    }),
                    (s.buf2binstring = function (g) {
                      return p(g, g.length)
                    }),
                    (s.binstring2buf = function (g) {
                      for (
                        var v = new a.Buf8(g.length), c = 0, x = v.length;
                        c < x;
                        c++
                      )
                        v[c] = g.charCodeAt(c)
                      return v
                    }),
                    (s.buf2string = function (g, v) {
                      var c,
                        x,
                        f,
                        m,
                        w = v || g.length,
                        S = new Array(2 * w)
                      for (c = x = 0; c < w; )
                        if ((f = g[c++]) < 128) S[x++] = f
                        else if (4 < (m = d[f]))
                          ((S[x++] = 65533), (c += m - 1))
                        else {
                          for (
                            f &= m === 2 ? 31 : m === 3 ? 15 : 7;
                            1 < m && c < w;

                          )
                            ((f = (f << 6) | (63 & g[c++])), m--)
                          1 < m
                            ? (S[x++] = 65533)
                            : f < 65536
                              ? (S[x++] = f)
                              : ((f -= 65536),
                                (S[x++] = 55296 | ((f >> 10) & 1023)),
                                (S[x++] = 56320 | (1023 & f)))
                        }
                      return p(S, x)
                    }),
                    (s.utf8border = function (g, v) {
                      var c
                      for (
                        (v = v || g.length) > g.length && (v = g.length),
                          c = v - 1;
                        0 <= c && (192 & g[c]) == 128;

                      )
                        c--
                      return c < 0 || c === 0 ? v : c + d[g[c]] > v ? c : v
                    }))
                },
                { './common': 41 },
              ],
              43: [
                function (t, n, s) {
                  n.exports = function (a, l, i, d) {
                    for (
                      var u = (65535 & a) | 0,
                        p = ((a >>> 16) & 65535) | 0,
                        g = 0;
                      i !== 0;

                    ) {
                      for (
                        i -= g = 2e3 < i ? 2e3 : i;
                        (p = (p + (u = (u + l[d++]) | 0)) | 0), --g;

                      );
                      ;((u %= 65521), (p %= 65521))
                    }
                    return u | (p << 16) | 0
                  }
                },
                {},
              ],
              44: [
                function (t, n, s) {
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
                function (t, n, s) {
                  var a = (function () {
                    for (var l, i = [], d = 0; d < 256; d++) {
                      l = d
                      for (var u = 0; u < 8; u++)
                        l = 1 & l ? 3988292384 ^ (l >>> 1) : l >>> 1
                      i[d] = l
                    }
                    return i
                  })()
                  n.exports = function (l, i, d, u) {
                    var p = a,
                      g = u + d
                    l ^= -1
                    for (var v = u; v < g; v++)
                      l = (l >>> 8) ^ p[255 & (l ^ i[v])]
                    return -1 ^ l
                  }
                },
                {},
              ],
              46: [
                function (t, n, s) {
                  var a,
                    l = t('../utils/common'),
                    i = t('./trees'),
                    d = t('./adler32'),
                    u = t('./crc32'),
                    p = t('./messages'),
                    g = 0,
                    v = 4,
                    c = 0,
                    x = -2,
                    f = -1,
                    m = 4,
                    w = 2,
                    S = 8,
                    C = 9,
                    k = 286,
                    E = 30,
                    I = 19,
                    T = 2 * k + 1,
                    D = 15,
                    R = 3,
                    L = 258,
                    H = L + R + 1,
                    _ = 42,
                    P = 113,
                    b = 1,
                    M = 2,
                    K = 3,
                    U = 4
                  function re(y, V) {
                    return ((y.msg = p[V]), V)
                  }
                  function $(y) {
                    return (y << 1) - (4 < y ? 9 : 0)
                  }
                  function ee(y) {
                    for (var V = y.length; 0 <= --V; ) y[V] = 0
                  }
                  function F(y) {
                    var V = y.state,
                      B = V.pending
                    ;(B > y.avail_out && (B = y.avail_out),
                      B !== 0 &&
                        (l.arraySet(
                          y.output,
                          V.pending_buf,
                          V.pending_out,
                          B,
                          y.next_out
                        ),
                        (y.next_out += B),
                        (V.pending_out += B),
                        (y.total_out += B),
                        (y.avail_out -= B),
                        (V.pending -= B),
                        V.pending === 0 && (V.pending_out = 0)))
                  }
                  function A(y, V) {
                    ;(i._tr_flush_block(
                      y,
                      0 <= y.block_start ? y.block_start : -1,
                      y.strstart - y.block_start,
                      V
                    ),
                      (y.block_start = y.strstart),
                      F(y.strm))
                  }
                  function Q(y, V) {
                    y.pending_buf[y.pending++] = V
                  }
                  function G(y, V) {
                    ;((y.pending_buf[y.pending++] = (V >>> 8) & 255),
                      (y.pending_buf[y.pending++] = 255 & V))
                  }
                  function Y(y, V) {
                    var B,
                      j,
                      N = y.max_chain_length,
                      O = y.strstart,
                      W = y.prev_length,
                      Z = y.nice_match,
                      z =
                        y.strstart > y.w_size - H
                          ? y.strstart - (y.w_size - H)
                          : 0,
                      q = y.window,
                      oe = y.w_mask,
                      te = y.prev,
                      se = y.strstart + L,
                      xe = q[O + W - 1],
                      be = q[O + W]
                    ;(y.prev_length >= y.good_match && (N >>= 2),
                      Z > y.lookahead && (Z = y.lookahead))
                    do
                      if (
                        q[(B = V) + W] === be &&
                        q[B + W - 1] === xe &&
                        q[B] === q[O] &&
                        q[++B] === q[O + 1]
                      ) {
                        ;((O += 2), B++)
                        do;
                        while (
                          q[++O] === q[++B] &&
                          q[++O] === q[++B] &&
                          q[++O] === q[++B] &&
                          q[++O] === q[++B] &&
                          q[++O] === q[++B] &&
                          q[++O] === q[++B] &&
                          q[++O] === q[++B] &&
                          q[++O] === q[++B] &&
                          O < se
                        )
                        if (((j = L - (se - O)), (O = se - L), W < j)) {
                          if (((y.match_start = V), Z <= (W = j))) break
                          ;((xe = q[O + W - 1]), (be = q[O + W]))
                        }
                      }
                    while ((V = te[V & oe]) > z && --N != 0)
                    return W <= y.lookahead ? W : y.lookahead
                  }
                  function he(y) {
                    var V,
                      B,
                      j,
                      N,
                      O,
                      W,
                      Z,
                      z,
                      q,
                      oe,
                      te = y.w_size
                    do {
                      if (
                        ((N = y.window_size - y.lookahead - y.strstart),
                        y.strstart >= te + (te - H))
                      ) {
                        for (
                          l.arraySet(y.window, y.window, te, te, 0),
                            y.match_start -= te,
                            y.strstart -= te,
                            y.block_start -= te,
                            V = B = y.hash_size;
                          (j = y.head[--V]),
                            (y.head[V] = te <= j ? j - te : 0),
                            --B;

                        );
                        for (
                          V = B = te;
                          (j = y.prev[--V]),
                            (y.prev[V] = te <= j ? j - te : 0),
                            --B;

                        );
                        N += te
                      }
                      if (y.strm.avail_in === 0) break
                      if (
                        ((W = y.strm),
                        (Z = y.window),
                        (z = y.strstart + y.lookahead),
                        (q = N),
                        (oe = void 0),
                        (oe = W.avail_in),
                        q < oe && (oe = q),
                        (B =
                          oe === 0
                            ? 0
                            : ((W.avail_in -= oe),
                              l.arraySet(Z, W.input, W.next_in, oe, z),
                              W.state.wrap === 1
                                ? (W.adler = d(W.adler, Z, oe, z))
                                : W.state.wrap === 2 &&
                                  (W.adler = u(W.adler, Z, oe, z)),
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
                    } while (y.lookahead < H && y.strm.avail_in !== 0)
                  }
                  function J(y, V) {
                    for (var B, j; ; ) {
                      if (y.lookahead < H) {
                        if ((he(y), y.lookahead < H && V === g)) return b
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
                          y.strstart - B <= y.w_size - H &&
                          (y.match_length = Y(y, B)),
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
                      V === v
                        ? (A(y, !0), y.strm.avail_out === 0 ? K : U)
                        : y.last_lit && (A(y, !1), y.strm.avail_out === 0)
                          ? b
                          : M
                    )
                  }
                  function ne(y, V) {
                    for (var B, j, N; ; ) {
                      if (y.lookahead < H) {
                        if ((he(y), y.lookahead < H && V === g)) return b
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
                          y.strstart - B <= y.w_size - H &&
                          ((y.match_length = Y(y, B)),
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
                      V === v
                        ? (A(y, !0), y.strm.avail_out === 0 ? K : U)
                        : y.last_lit && (A(y, !1), y.strm.avail_out === 0)
                          ? b
                          : M
                    )
                  }
                  function ae(y, V, B, j, N) {
                    ;((this.good_length = y),
                      (this.max_lazy = V),
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
                      (this.bl_tree = new l.Buf16(2 * (2 * I + 1))),
                      ee(this.dyn_ltree),
                      ee(this.dyn_dtree),
                      ee(this.bl_tree),
                      (this.l_desc = null),
                      (this.d_desc = null),
                      (this.bl_desc = null),
                      (this.bl_count = new l.Buf16(D + 1)),
                      (this.heap = new l.Buf16(2 * k + 1)),
                      ee(this.heap),
                      (this.heap_len = 0),
                      (this.heap_max = 0),
                      (this.depth = new l.Buf16(2 * k + 1)),
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
                  function de(y) {
                    var V
                    return y && y.state
                      ? ((y.total_in = y.total_out = 0),
                        (y.data_type = w),
                        ((V = y.state).pending = 0),
                        (V.pending_out = 0),
                        V.wrap < 0 && (V.wrap = -V.wrap),
                        (V.status = V.wrap ? _ : P),
                        (y.adler = V.wrap === 2 ? 0 : 1),
                        (V.last_flush = g),
                        i._tr_init(V),
                        c)
                      : re(y, x)
                  }
                  function pe(y) {
                    var V = de(y)
                    return (
                      V === c &&
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
                      V
                    )
                  }
                  function ye(y, V, B, j, N, O) {
                    if (!y) return x
                    var W = 1
                    if (
                      (V === f && (V = 6),
                      j < 0
                        ? ((W = 0), (j = -j))
                        : 15 < j && ((W = 2), (j -= 16)),
                      N < 1 ||
                        C < N ||
                        B !== S ||
                        j < 8 ||
                        15 < j ||
                        V < 0 ||
                        9 < V ||
                        O < 0 ||
                        m < O)
                    )
                      return re(y, x)
                    j === 8 && (j = 9)
                    var Z = new ue()
                    return (
                      ((y.state = Z).strm = y),
                      (Z.wrap = W),
                      (Z.gzhead = null),
                      (Z.w_bits = j),
                      (Z.w_size = 1 << Z.w_bits),
                      (Z.w_mask = Z.w_size - 1),
                      (Z.hash_bits = N + 7),
                      (Z.hash_size = 1 << Z.hash_bits),
                      (Z.hash_mask = Z.hash_size - 1),
                      (Z.hash_shift = ~~((Z.hash_bits + R - 1) / R)),
                      (Z.window = new l.Buf8(2 * Z.w_size)),
                      (Z.head = new l.Buf16(Z.hash_size)),
                      (Z.prev = new l.Buf16(Z.w_size)),
                      (Z.lit_bufsize = 1 << (N + 6)),
                      (Z.pending_buf_size = 4 * Z.lit_bufsize),
                      (Z.pending_buf = new l.Buf8(Z.pending_buf_size)),
                      (Z.d_buf = 1 * Z.lit_bufsize),
                      (Z.l_buf = 3 * Z.lit_bufsize),
                      (Z.level = V),
                      (Z.strategy = O),
                      (Z.method = B),
                      pe(y)
                    )
                  }
                  ;((a = [
                    new ae(0, 0, 0, 0, function (y, V) {
                      var B = 65535
                      for (
                        B > y.pending_buf_size - 5 &&
                        (B = y.pending_buf_size - 5);
                        ;

                      ) {
                        if (y.lookahead <= 1) {
                          if ((he(y), y.lookahead === 0 && V === g)) return b
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
                          (y.strstart - y.block_start >= y.w_size - H &&
                            (A(y, !1), y.strm.avail_out === 0))
                        )
                          return b
                      }
                      return (
                        (y.insert = 0),
                        V === v
                          ? (A(y, !0), y.strm.avail_out === 0 ? K : U)
                          : (y.strstart > y.block_start &&
                              (A(y, !1), y.strm.avail_out),
                            b)
                      )
                    }),
                    new ae(4, 4, 8, 4, J),
                    new ae(4, 5, 16, 8, J),
                    new ae(4, 6, 32, 32, J),
                    new ae(4, 4, 16, 16, ne),
                    new ae(8, 16, 32, 32, ne),
                    new ae(8, 16, 128, 128, ne),
                    new ae(8, 32, 128, 256, ne),
                    new ae(32, 128, 258, 1024, ne),
                    new ae(32, 258, 258, 4096, ne),
                  ]),
                    (s.deflateInit = function (y, V) {
                      return ye(y, V, S, 15, 8, 0)
                    }),
                    (s.deflateInit2 = ye),
                    (s.deflateReset = pe),
                    (s.deflateResetKeep = de),
                    (s.deflateSetHeader = function (y, V) {
                      return y && y.state
                        ? y.state.wrap !== 2
                          ? x
                          : ((y.state.gzhead = V), c)
                        : x
                    }),
                    (s.deflate = function (y, V) {
                      var B, j, N, O
                      if (!y || !y.state || 5 < V || V < 0)
                        return y ? re(y, x) : x
                      if (
                        ((j = y.state),
                        !y.output ||
                          (!y.input && y.avail_in !== 0) ||
                          (j.status === 666 && V !== v))
                      )
                        return re(y, y.avail_out === 0 ? -5 : x)
                      if (
                        ((j.strm = y),
                        (B = j.last_flush),
                        (j.last_flush = V),
                        j.status === _)
                      )
                        if (j.wrap === 2)
                          ((y.adler = 0),
                            Q(j, 31),
                            Q(j, 139),
                            Q(j, 8),
                            j.gzhead
                              ? (Q(
                                  j,
                                  (j.gzhead.text ? 1 : 0) +
                                    (j.gzhead.hcrc ? 2 : 0) +
                                    (j.gzhead.extra ? 4 : 0) +
                                    (j.gzhead.name ? 8 : 0) +
                                    (j.gzhead.comment ? 16 : 0)
                                ),
                                Q(j, 255 & j.gzhead.time),
                                Q(j, (j.gzhead.time >> 8) & 255),
                                Q(j, (j.gzhead.time >> 16) & 255),
                                Q(j, (j.gzhead.time >> 24) & 255),
                                Q(
                                  j,
                                  j.level === 9
                                    ? 2
                                    : 2 <= j.strategy || j.level < 2
                                      ? 4
                                      : 0
                                ),
                                Q(j, 255 & j.gzhead.os),
                                j.gzhead.extra &&
                                  j.gzhead.extra.length &&
                                  (Q(j, 255 & j.gzhead.extra.length),
                                  Q(j, (j.gzhead.extra.length >> 8) & 255)),
                                j.gzhead.hcrc &&
                                  (y.adler = u(
                                    y.adler,
                                    j.pending_buf,
                                    j.pending,
                                    0
                                  )),
                                (j.gzindex = 0),
                                (j.status = 69))
                              : (Q(j, 0),
                                Q(j, 0),
                                Q(j, 0),
                                Q(j, 0),
                                Q(j, 0),
                                Q(
                                  j,
                                  j.level === 9
                                    ? 2
                                    : 2 <= j.strategy || j.level < 2
                                      ? 4
                                      : 0
                                ),
                                Q(j, 3),
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
                                (y.adler = u(
                                  y.adler,
                                  j.pending_buf,
                                  j.pending - N,
                                  N
                                )),
                              F(y),
                              (N = j.pending),
                              j.pending !== j.pending_buf_size));

                          )
                            (Q(j, 255 & j.gzhead.extra[j.gzindex]), j.gzindex++)
                          ;(j.gzhead.hcrc &&
                            j.pending > N &&
                            (y.adler = u(
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
                                (y.adler = u(
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
                              Q(j, O))
                          } while (O !== 0)
                          ;(j.gzhead.hcrc &&
                            j.pending > N &&
                            (y.adler = u(
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
                                (y.adler = u(
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
                              Q(j, O))
                          } while (O !== 0)
                          ;(j.gzhead.hcrc &&
                            j.pending > N &&
                            (y.adler = u(
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
                                (Q(j, 255 & y.adler),
                                Q(j, (y.adler >> 8) & 255),
                                (y.adler = 0),
                                (j.status = P)))
                            : (j.status = P)),
                        j.pending !== 0)
                      ) {
                        if ((F(y), y.avail_out === 0))
                          return ((j.last_flush = -1), c)
                      } else if (y.avail_in === 0 && $(V) <= $(B) && V !== v)
                        return re(y, -5)
                      if (j.status === 666 && y.avail_in !== 0) return re(y, -5)
                      if (
                        y.avail_in !== 0 ||
                        j.lookahead !== 0 ||
                        (V !== g && j.status !== 666)
                      ) {
                        var Z =
                          j.strategy === 2
                            ? (function (z, q) {
                                for (var oe; ; ) {
                                  if (
                                    z.lookahead === 0 &&
                                    (he(z), z.lookahead === 0)
                                  ) {
                                    if (q === g) return b
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
                                  q === v
                                    ? (A(z, !0), z.strm.avail_out === 0 ? K : U)
                                    : z.last_lit &&
                                        (A(z, !1), z.strm.avail_out === 0)
                                      ? b
                                      : M
                                )
                              })(j, V)
                            : j.strategy === 3
                              ? (function (z, q) {
                                  for (var oe, te, se, xe, be = z.window; ; ) {
                                    if (z.lookahead <= L) {
                                      if ((he(z), z.lookahead <= L && q === g))
                                        return b
                                      if (z.lookahead === 0) break
                                    }
                                    if (
                                      ((z.match_length = 0),
                                      z.lookahead >= R &&
                                        0 < z.strstart &&
                                        (te = be[(se = z.strstart - 1)]) ===
                                          be[++se] &&
                                        te === be[++se] &&
                                        te === be[++se])
                                    ) {
                                      xe = z.strstart + L
                                      do;
                                      while (
                                        te === be[++se] &&
                                        te === be[++se] &&
                                        te === be[++se] &&
                                        te === be[++se] &&
                                        te === be[++se] &&
                                        te === be[++se] &&
                                        te === be[++se] &&
                                        te === be[++se] &&
                                        se < xe
                                      )
                                      ;((z.match_length = L - (xe - se)),
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
                                    q === v
                                      ? (A(z, !0),
                                        z.strm.avail_out === 0 ? K : U)
                                      : z.last_lit &&
                                          (A(z, !1), z.strm.avail_out === 0)
                                        ? b
                                        : M
                                  )
                                })(j, V)
                              : a[j.level].func(j, V)
                        if (
                          ((Z !== K && Z !== U) || (j.status = 666),
                          Z === b || Z === K)
                        )
                          return (y.avail_out === 0 && (j.last_flush = -1), c)
                        if (
                          Z === M &&
                          (V === 1
                            ? i._tr_align(j)
                            : V !== 5 &&
                              (i._tr_stored_block(j, 0, 0, !1),
                              V === 3 &&
                                (ee(j.head),
                                j.lookahead === 0 &&
                                  ((j.strstart = 0),
                                  (j.block_start = 0),
                                  (j.insert = 0)))),
                          F(y),
                          y.avail_out === 0)
                        )
                          return ((j.last_flush = -1), c)
                      }
                      return V !== v
                        ? c
                        : j.wrap <= 0
                          ? 1
                          : (j.wrap === 2
                              ? (Q(j, 255 & y.adler),
                                Q(j, (y.adler >> 8) & 255),
                                Q(j, (y.adler >> 16) & 255),
                                Q(j, (y.adler >> 24) & 255),
                                Q(j, 255 & y.total_in),
                                Q(j, (y.total_in >> 8) & 255),
                                Q(j, (y.total_in >> 16) & 255),
                                Q(j, (y.total_in >> 24) & 255))
                              : (G(j, y.adler >>> 16), G(j, 65535 & y.adler)),
                            F(y),
                            0 < j.wrap && (j.wrap = -j.wrap),
                            j.pending !== 0 ? c : 1)
                    }),
                    (s.deflateEnd = function (y) {
                      var V
                      return y && y.state
                        ? (V = y.state.status) !== _ &&
                          V !== 69 &&
                          V !== 73 &&
                          V !== 91 &&
                          V !== 103 &&
                          V !== P &&
                          V !== 666
                          ? re(y, x)
                          : ((y.state = null), V === P ? re(y, -3) : c)
                        : x
                    }),
                    (s.deflateSetDictionary = function (y, V) {
                      var B,
                        j,
                        N,
                        O,
                        W,
                        Z,
                        z,
                        q,
                        oe = V.length
                      if (
                        !y ||
                        !y.state ||
                        (O = (B = y.state).wrap) === 2 ||
                        (O === 1 && B.status !== _) ||
                        B.lookahead
                      )
                        return x
                      for (
                        O === 1 && (y.adler = d(y.adler, V, oe, 0)),
                          B.wrap = 0,
                          oe >= B.w_size &&
                            (O === 0 &&
                              (ee(B.head),
                              (B.strstart = 0),
                              (B.block_start = 0),
                              (B.insert = 0)),
                            (q = new l.Buf8(B.w_size)),
                            l.arraySet(q, V, oe - B.w_size, B.w_size, 0),
                            (V = q),
                            (oe = B.w_size)),
                          W = y.avail_in,
                          Z = y.next_in,
                          z = y.input,
                          y.avail_in = oe,
                          y.next_in = 0,
                          y.input = V,
                          he(B);
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
                        ;((B.strstart = j), (B.lookahead = R - 1), he(B))
                      }
                      return (
                        (B.strstart += B.lookahead),
                        (B.block_start = B.strstart),
                        (B.insert = B.lookahead),
                        (B.lookahead = 0),
                        (B.match_length = B.prev_length = R - 1),
                        (B.match_available = 0),
                        (y.next_in = Z),
                        (y.input = z),
                        (y.avail_in = W),
                        (B.wrap = O),
                        c
                      )
                    }),
                    (s.deflateInfo = 'pako deflate (from Nodeca project)'))
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
                function (t, n, s) {
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
                function (t, n, s) {
                  n.exports = function (a, l) {
                    var i,
                      d,
                      u,
                      p,
                      g,
                      v,
                      c,
                      x,
                      f,
                      m,
                      w,
                      S,
                      C,
                      k,
                      E,
                      I,
                      T,
                      D,
                      R,
                      L,
                      H,
                      _,
                      P,
                      b,
                      M
                    ;((i = a.state),
                      (d = a.next_in),
                      (b = a.input),
                      (u = d + (a.avail_in - 5)),
                      (p = a.next_out),
                      (M = a.output),
                      (g = p - (l - a.avail_out)),
                      (v = p + (a.avail_out - 257)),
                      (c = i.dmax),
                      (x = i.wsize),
                      (f = i.whave),
                      (m = i.wnext),
                      (w = i.window),
                      (S = i.hold),
                      (C = i.bits),
                      (k = i.lencode),
                      (E = i.distcode),
                      (I = (1 << i.lenbits) - 1),
                      (T = (1 << i.distbits) - 1))
                    e: do {
                      ;(C < 15 &&
                        ((S += b[d++] << C),
                        (C += 8),
                        (S += b[d++] << C),
                        (C += 8)),
                        (D = k[S & I]))
                      t: for (;;) {
                        if (
                          ((S >>>= R = D >>> 24),
                          (C -= R),
                          (R = (D >>> 16) & 255) === 0)
                        )
                          M[p++] = 65535 & D
                        else {
                          if (!(16 & R)) {
                            if ((64 & R) == 0) {
                              D = k[(65535 & D) + (S & ((1 << R) - 1))]
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
                          ;((L = 65535 & D),
                            (R &= 15) &&
                              (C < R && ((S += b[d++] << C), (C += 8)),
                              (L += S & ((1 << R) - 1)),
                              (S >>>= R),
                              (C -= R)),
                            C < 15 &&
                              ((S += b[d++] << C),
                              (C += 8),
                              (S += b[d++] << C),
                              (C += 8)),
                            (D = E[S & T]))
                          r: for (;;) {
                            if (
                              ((S >>>= R = D >>> 24),
                              (C -= R),
                              !(16 & (R = (D >>> 16) & 255)))
                            ) {
                              if ((64 & R) == 0) {
                                D = E[(65535 & D) + (S & ((1 << R) - 1))]
                                continue r
                              }
                              ;((a.msg = 'invalid distance code'),
                                (i.mode = 30))
                              break e
                            }
                            if (
                              ((H = 65535 & D),
                              C < (R &= 15) &&
                                ((S += b[d++] << C),
                                (C += 8) < R && ((S += b[d++] << C), (C += 8))),
                              c < (H += S & ((1 << R) - 1)))
                            ) {
                              ;((a.msg = 'invalid distance too far back'),
                                (i.mode = 30))
                              break e
                            }
                            if (((S >>>= R), (C -= R), (R = p - g) < H)) {
                              if (f < (R = H - R) && i.sane) {
                                ;((a.msg = 'invalid distance too far back'),
                                  (i.mode = 30))
                                break e
                              }
                              if (((P = w), (_ = 0) === m)) {
                                if (((_ += x - R), R < L)) {
                                  for (L -= R; (M[p++] = w[_++]), --R; );
                                  ;((_ = p - H), (P = M))
                                }
                              } else if (m < R) {
                                if (((_ += x + m - R), (R -= m) < L)) {
                                  for (L -= R; (M[p++] = w[_++]), --R; );
                                  if (((_ = 0), m < L)) {
                                    for (L -= R = m; (M[p++] = w[_++]), --R; );
                                    ;((_ = p - H), (P = M))
                                  }
                                }
                              } else if (((_ += m - R), R < L)) {
                                for (L -= R; (M[p++] = w[_++]), --R; );
                                ;((_ = p - H), (P = M))
                              }
                              for (; 2 < L; )
                                ((M[p++] = P[_++]),
                                  (M[p++] = P[_++]),
                                  (M[p++] = P[_++]),
                                  (L -= 3))
                              L &&
                                ((M[p++] = P[_++]), 1 < L && (M[p++] = P[_++]))
                            } else {
                              for (
                                _ = p - H;
                                (M[p++] = M[_++]),
                                  (M[p++] = M[_++]),
                                  (M[p++] = M[_++]),
                                  2 < (L -= 3);

                              );
                              L &&
                                ((M[p++] = M[_++]), 1 < L && (M[p++] = M[_++]))
                            }
                            break
                          }
                        }
                        break
                      }
                    } while (d < u && p < v)
                    ;((d -= L = C >> 3),
                      (S &= (1 << (C -= L << 3)) - 1),
                      (a.next_in = d),
                      (a.next_out = p),
                      (a.avail_in = d < u ? u - d + 5 : 5 - (d - u)),
                      (a.avail_out = p < v ? v - p + 257 : 257 - (p - v)),
                      (i.hold = S),
                      (i.bits = C))
                  }
                },
                {},
              ],
              49: [
                function (t, n, s) {
                  var a = t('../utils/common'),
                    l = t('./adler32'),
                    i = t('./crc32'),
                    d = t('./inffast'),
                    u = t('./inftrees'),
                    p = 1,
                    g = 2,
                    v = 0,
                    c = -2,
                    x = 1,
                    f = 852,
                    m = 592
                  function w(_) {
                    return (
                      ((_ >>> 24) & 255) +
                      ((_ >>> 8) & 65280) +
                      ((65280 & _) << 8) +
                      ((255 & _) << 24)
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
                  function C(_) {
                    var P
                    return _ && _.state
                      ? ((P = _.state),
                        (_.total_in = _.total_out = P.total = 0),
                        (_.msg = ''),
                        P.wrap && (_.adler = 1 & P.wrap),
                        (P.mode = x),
                        (P.last = 0),
                        (P.havedict = 0),
                        (P.dmax = 32768),
                        (P.head = null),
                        (P.hold = 0),
                        (P.bits = 0),
                        (P.lencode = P.lendyn = new a.Buf32(f)),
                        (P.distcode = P.distdyn = new a.Buf32(m)),
                        (P.sane = 1),
                        (P.back = -1),
                        v)
                      : c
                  }
                  function k(_) {
                    var P
                    return _ && _.state
                      ? (((P = _.state).wsize = 0),
                        (P.whave = 0),
                        (P.wnext = 0),
                        C(_))
                      : c
                  }
                  function E(_, P) {
                    var b, M
                    return _ && _.state
                      ? ((M = _.state),
                        P < 0
                          ? ((b = 0), (P = -P))
                          : ((b = 1 + (P >> 4)), P < 48 && (P &= 15)),
                        P && (P < 8 || 15 < P)
                          ? c
                          : (M.window !== null &&
                              M.wbits !== P &&
                              (M.window = null),
                            (M.wrap = b),
                            (M.wbits = P),
                            k(_)))
                      : c
                  }
                  function I(_, P) {
                    var b, M
                    return _
                      ? ((M = new S()),
                        ((_.state = M).window = null),
                        (b = E(_, P)) !== v && (_.state = null),
                        b)
                      : c
                  }
                  var T,
                    D,
                    R = !0
                  function L(_) {
                    if (R) {
                      var P
                      for (
                        T = new a.Buf32(512), D = new a.Buf32(32), P = 0;
                        P < 144;

                      )
                        _.lens[P++] = 8
                      for (; P < 256; ) _.lens[P++] = 9
                      for (; P < 280; ) _.lens[P++] = 7
                      for (; P < 288; ) _.lens[P++] = 8
                      for (
                        u(p, _.lens, 0, 288, T, 0, _.work, { bits: 9 }), P = 0;
                        P < 32;

                      )
                        _.lens[P++] = 5
                      ;(u(g, _.lens, 0, 32, D, 0, _.work, { bits: 5 }),
                        (R = !1))
                    }
                    ;((_.lencode = T),
                      (_.lenbits = 9),
                      (_.distcode = D),
                      (_.distbits = 5))
                  }
                  function H(_, P, b, M) {
                    var K,
                      U = _.state
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
                  ;((s.inflateReset = k),
                    (s.inflateReset2 = E),
                    (s.inflateResetKeep = C),
                    (s.inflateInit = function (_) {
                      return I(_, 15)
                    }),
                    (s.inflateInit2 = I),
                    (s.inflate = function (_, P) {
                      var b,
                        M,
                        K,
                        U,
                        re,
                        $,
                        ee,
                        F,
                        A,
                        Q,
                        G,
                        Y,
                        he,
                        J,
                        ne,
                        ae,
                        ue,
                        de,
                        pe,
                        ye,
                        y,
                        V,
                        B,
                        j,
                        N = 0,
                        O = new a.Buf8(4),
                        W = [
                          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2,
                          14, 1, 15,
                        ]
                      if (
                        !_ ||
                        !_.state ||
                        !_.output ||
                        (!_.input && _.avail_in !== 0)
                      )
                        return c
                      ;((b = _.state).mode === 12 && (b.mode = 13),
                        (re = _.next_out),
                        (K = _.output),
                        (ee = _.avail_out),
                        (U = _.next_in),
                        (M = _.input),
                        ($ = _.avail_in),
                        (F = b.hold),
                        (A = b.bits),
                        (Q = $),
                        (G = ee),
                        (V = v))
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
                              ;((_.msg = 'incorrect header check'),
                                (b.mode = 30))
                              break
                            }
                            if ((15 & F) != 8) {
                              ;((_.msg = 'unknown compression method'),
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
                              ;((_.msg = 'invalid window size'), (b.mode = 30))
                              break
                            }
                            ;((b.dmax = 1 << y),
                              (_.adler = b.check = 1),
                              (b.mode = 512 & F ? 10 : 12),
                              (A = F = 0))
                            break
                          case 2:
                            for (; A < 16; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            if (((b.flags = F), (255 & b.flags) != 8)) {
                              ;((_.msg = 'unknown compression method'),
                                (b.mode = 30))
                              break
                            }
                            if (57344 & b.flags) {
                              ;((_.msg = 'unknown header flags set'),
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
                              ($ < (Y = b.length) && (Y = $),
                              Y &&
                                (b.head &&
                                  ((y = b.head.extra_len - b.length),
                                  b.head.extra ||
                                    (b.head.extra = new Array(
                                      b.head.extra_len
                                    )),
                                  a.arraySet(b.head.extra, M, U, Y, y)),
                                512 & b.flags &&
                                  (b.check = i(b.check, M, Y, U)),
                                ($ -= Y),
                                (U += Y),
                                (b.length -= Y)),
                              b.length)
                            )
                              break e
                            ;((b.length = 0), (b.mode = 7))
                          case 7:
                            if (2048 & b.flags) {
                              if ($ === 0) break e
                              for (
                                Y = 0;
                                (y = M[U + Y++]),
                                  b.head &&
                                    y &&
                                    b.length < 65536 &&
                                    (b.head.name += String.fromCharCode(y)),
                                  y && Y < $;

                              );
                              if (
                                (512 & b.flags &&
                                  (b.check = i(b.check, M, Y, U)),
                                ($ -= Y),
                                (U += Y),
                                y)
                              )
                                break e
                            } else b.head && (b.head.name = null)
                            ;((b.length = 0), (b.mode = 8))
                          case 8:
                            if (4096 & b.flags) {
                              if ($ === 0) break e
                              for (
                                Y = 0;
                                (y = M[U + Y++]),
                                  b.head &&
                                    y &&
                                    b.length < 65536 &&
                                    (b.head.comment += String.fromCharCode(y)),
                                  y && Y < $;

                              );
                              if (
                                (512 & b.flags &&
                                  (b.check = i(b.check, M, Y, U)),
                                ($ -= Y),
                                (U += Y),
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
                                ;((_.msg = 'header crc mismatch'),
                                  (b.mode = 30))
                                break
                              }
                              A = F = 0
                            }
                            ;(b.head &&
                              ((b.head.hcrc = (b.flags >> 9) & 1),
                              (b.head.done = !0)),
                              (_.adler = b.check = 0),
                              (b.mode = 12))
                            break
                          case 10:
                            for (; A < 32; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            ;((_.adler = b.check = w(F)),
                              (A = F = 0),
                              (b.mode = 11))
                          case 11:
                            if (b.havedict === 0)
                              return (
                                (_.next_out = re),
                                (_.avail_out = ee),
                                (_.next_in = U),
                                (_.avail_in = $),
                                (b.hold = F),
                                (b.bits = A),
                                2
                              )
                            ;((_.adler = b.check = 1), (b.mode = 12))
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
                                ;((_.msg = 'invalid block type'), (b.mode = 30))
                            }
                            ;((F >>>= 2), (A -= 2))
                            break
                          case 14:
                            for (F >>>= 7 & A, A -= 7 & A; A < 32; ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            if ((65535 & F) != ((F >>> 16) ^ 65535)) {
                              ;((_.msg = 'invalid stored block lengths'),
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
                            if ((Y = b.length)) {
                              if (
                                ($ < Y && (Y = $), ee < Y && (Y = ee), Y === 0)
                              )
                                break e
                              ;(a.arraySet(K, M, U, Y, re),
                                ($ -= Y),
                                (U += Y),
                                (ee -= Y),
                                (re += Y),
                                (b.length -= Y))
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
                              ;((_.msg = 'too many length or distance symbols'),
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
                              (V = u(
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
                              V)
                            ) {
                              ;((_.msg = 'invalid code lengths set'),
                                (b.mode = 30))
                              break
                            }
                            ;((b.have = 0), (b.mode = 19))
                          case 19:
                            for (; b.have < b.nlen + b.ndist; ) {
                              for (
                                ;
                                (ae =
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
                                    ;((_.msg = 'invalid bit length repeat'),
                                      (b.mode = 30))
                                    break
                                  }
                                  ;((y = b.lens[b.have - 1]),
                                    (Y = 3 + (3 & F)),
                                    (F >>>= 2),
                                    (A -= 2))
                                } else if (ue === 17) {
                                  for (j = ne + 3; A < j; ) {
                                    if ($ === 0) break e
                                    ;($--, (F += M[U++] << A), (A += 8))
                                  }
                                  ;((A -= ne),
                                    (y = 0),
                                    (Y = 3 + (7 & (F >>>= ne))),
                                    (F >>>= 3),
                                    (A -= 3))
                                } else {
                                  for (j = ne + 7; A < j; ) {
                                    if ($ === 0) break e
                                    ;($--, (F += M[U++] << A), (A += 8))
                                  }
                                  ;((A -= ne),
                                    (y = 0),
                                    (Y = 11 + (127 & (F >>>= ne))),
                                    (F >>>= 7),
                                    (A -= 7))
                                }
                                if (b.have + Y > b.nlen + b.ndist) {
                                  ;((_.msg = 'invalid bit length repeat'),
                                    (b.mode = 30))
                                  break
                                }
                                for (; Y--; ) b.lens[b.have++] = y
                              }
                            }
                            if (b.mode === 30) break
                            if (b.lens[256] === 0) {
                              ;((_.msg =
                                'invalid code -- missing end-of-block'),
                                (b.mode = 30))
                              break
                            }
                            if (
                              ((b.lenbits = 9),
                              (B = { bits: b.lenbits }),
                              (V = u(
                                p,
                                b.lens,
                                0,
                                b.nlen,
                                b.lencode,
                                0,
                                b.work,
                                B
                              )),
                              (b.lenbits = B.bits),
                              V)
                            ) {
                              ;((_.msg = 'invalid literal/lengths set'),
                                (b.mode = 30))
                              break
                            }
                            if (
                              ((b.distbits = 6),
                              (b.distcode = b.distdyn),
                              (B = { bits: b.distbits }),
                              (V = u(
                                g,
                                b.lens,
                                b.nlen,
                                b.ndist,
                                b.distcode,
                                0,
                                b.work,
                                B
                              )),
                              (b.distbits = B.bits),
                              V)
                            ) {
                              ;((_.msg = 'invalid distances set'),
                                (b.mode = 30))
                              break
                            }
                            if (((b.mode = 20), P === 6)) break e
                          case 20:
                            b.mode = 21
                          case 21:
                            if (6 <= $ && 258 <= ee) {
                              ;((_.next_out = re),
                                (_.avail_out = ee),
                                (_.next_in = U),
                                (_.avail_in = $),
                                (b.hold = F),
                                (b.bits = A),
                                d(_, G),
                                (re = _.next_out),
                                (K = _.output),
                                (ee = _.avail_out),
                                (U = _.next_in),
                                (M = _.input),
                                ($ = _.avail_in),
                                (F = b.hold),
                                (A = b.bits),
                                b.mode === 12 && (b.back = -1))
                              break
                            }
                            for (
                              b.back = 0;
                              (ae =
                                ((N = b.lencode[F & ((1 << b.lenbits) - 1)]) >>>
                                  16) &
                                255),
                                (ue = 65535 & N),
                                !((ne = N >>> 24) <= A);

                            ) {
                              if ($ === 0) break e
                              ;($--, (F += M[U++] << A), (A += 8))
                            }
                            if (ae && (240 & ae) == 0) {
                              for (
                                de = ne, pe = ae, ye = ue;
                                (ae =
                                  ((N =
                                    b.lencode[
                                      ye + ((F & ((1 << (de + pe)) - 1)) >> de)
                                    ]) >>>
                                    16) &
                                  255),
                                  (ue = 65535 & N),
                                  !(de + (ne = N >>> 24) <= A);

                              ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              ;((F >>>= de), (A -= de), (b.back += de))
                            }
                            if (
                              ((F >>>= ne),
                              (A -= ne),
                              (b.back += ne),
                              (b.length = ue),
                              ae === 0)
                            ) {
                              b.mode = 26
                              break
                            }
                            if (32 & ae) {
                              ;((b.back = -1), (b.mode = 12))
                              break
                            }
                            if (64 & ae) {
                              ;((_.msg = 'invalid literal/length code'),
                                (b.mode = 30))
                              break
                            }
                            ;((b.extra = 15 & ae), (b.mode = 22))
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
                              (ae =
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
                            if ((240 & ae) == 0) {
                              for (
                                de = ne, pe = ae, ye = ue;
                                (ae =
                                  ((N =
                                    b.distcode[
                                      ye + ((F & ((1 << (de + pe)) - 1)) >> de)
                                    ]) >>>
                                    16) &
                                  255),
                                  (ue = 65535 & N),
                                  !(de + (ne = N >>> 24) <= A);

                              ) {
                                if ($ === 0) break e
                                ;($--, (F += M[U++] << A), (A += 8))
                              }
                              ;((F >>>= de), (A -= de), (b.back += de))
                            }
                            if (
                              ((F >>>= ne), (A -= ne), (b.back += ne), 64 & ae)
                            ) {
                              ;((_.msg = 'invalid distance code'),
                                (b.mode = 30))
                              break
                            }
                            ;((b.offset = ue),
                              (b.extra = 15 & ae),
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
                              ;((_.msg = 'invalid distance too far back'),
                                (b.mode = 30))
                              break
                            }
                            b.mode = 25
                          case 25:
                            if (ee === 0) break e
                            if (((Y = G - ee), b.offset > Y)) {
                              if ((Y = b.offset - Y) > b.whave && b.sane) {
                                ;((_.msg = 'invalid distance too far back'),
                                  (b.mode = 30))
                                break
                              }
                              ;((he =
                                Y > b.wnext
                                  ? ((Y -= b.wnext), b.wsize - Y)
                                  : b.wnext - Y),
                                Y > b.length && (Y = b.length),
                                (J = b.window))
                            } else
                              ((J = K), (he = re - b.offset), (Y = b.length))
                            for (
                              ee < Y && (Y = ee), ee -= Y, b.length -= Y;
                              (K[re++] = J[he++]), --Y;

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
                                (_.total_out += G),
                                (b.total += G),
                                G &&
                                  (_.adler = b.check =
                                    b.flags
                                      ? i(b.check, K, G, re - G)
                                      : l(b.check, K, G, re - G)),
                                (G = ee),
                                (b.flags ? F : w(F)) !== b.check)
                              ) {
                                ;((_.msg = 'incorrect data check'),
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
                                ;((_.msg = 'incorrect length check'),
                                  (b.mode = 30))
                                break
                              }
                              A = F = 0
                            }
                            b.mode = 29
                          case 29:
                            V = 1
                            break e
                          case 30:
                            V = -3
                            break e
                          case 31:
                            return -4
                          case 32:
                          default:
                            return c
                        }
                      return (
                        (_.next_out = re),
                        (_.avail_out = ee),
                        (_.next_in = U),
                        (_.avail_in = $),
                        (b.hold = F),
                        (b.bits = A),
                        (b.wsize ||
                          (G !== _.avail_out &&
                            b.mode < 30 &&
                            (b.mode < 27 || P !== 4))) &&
                        H(_, _.output, _.next_out, G - _.avail_out)
                          ? ((b.mode = 31), -4)
                          : ((Q -= _.avail_in),
                            (G -= _.avail_out),
                            (_.total_in += Q),
                            (_.total_out += G),
                            (b.total += G),
                            b.wrap &&
                              G &&
                              (_.adler = b.check =
                                b.flags
                                  ? i(b.check, K, G, _.next_out - G)
                                  : l(b.check, K, G, _.next_out - G)),
                            (_.data_type =
                              b.bits +
                              (b.last ? 64 : 0) +
                              (b.mode === 12 ? 128 : 0) +
                              (b.mode === 20 || b.mode === 15 ? 256 : 0)),
                            ((Q == 0 && G === 0) || P === 4) &&
                              V === v &&
                              (V = -5),
                            V)
                      )
                    }),
                    (s.inflateEnd = function (_) {
                      if (!_ || !_.state) return c
                      var P = _.state
                      return (
                        P.window && (P.window = null),
                        (_.state = null),
                        v
                      )
                    }),
                    (s.inflateGetHeader = function (_, P) {
                      var b
                      return _ && _.state
                        ? (2 & (b = _.state).wrap) == 0
                          ? c
                          : (((b.head = P).done = !1), v)
                        : c
                    }),
                    (s.inflateSetDictionary = function (_, P) {
                      var b,
                        M = P.length
                      return _ && _.state
                        ? (b = _.state).wrap !== 0 && b.mode !== 11
                          ? c
                          : b.mode === 11 && l(1, P, M, 0) !== b.check
                            ? -3
                            : H(_, P, M, M)
                              ? ((b.mode = 31), -4)
                              : ((b.havedict = 1), v)
                        : c
                    }),
                    (s.inflateInfo = 'pako inflate (from Nodeca project)'))
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
                function (t, n, s) {
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
                    d = [
                      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
                      257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
                      8193, 12289, 16385, 24577, 0, 0,
                    ],
                    u = [
                      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21,
                      22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28,
                      29, 29, 64, 64,
                    ]
                  n.exports = function (p, g, v, c, x, f, m, w) {
                    var S,
                      C,
                      k,
                      E,
                      I,
                      T,
                      D,
                      R,
                      L,
                      H = w.bits,
                      _ = 0,
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
                      Q = 0,
                      G = new a.Buf16(16),
                      Y = new a.Buf16(16),
                      he = null,
                      J = 0
                    for (_ = 0; _ <= 15; _++) G[_] = 0
                    for (P = 0; P < c; P++) G[g[v + P]]++
                    for (K = H, M = 15; 1 <= M && G[M] === 0; M--);
                    if ((M < K && (K = M), M === 0))
                      return (
                        (x[f++] = 20971520),
                        (x[f++] = 20971520),
                        (w.bits = 1),
                        0
                      )
                    for (b = 1; b < M && G[b] === 0; b++);
                    for (K < b && (K = b), _ = $ = 1; _ <= 15; _++)
                      if ((($ <<= 1), ($ -= G[_]) < 0)) return -1
                    if (0 < $ && (p === 0 || M !== 1)) return -1
                    for (Y[1] = 0, _ = 1; _ < 15; _++) Y[_ + 1] = Y[_] + G[_]
                    for (P = 0; P < c; P++)
                      g[v + P] !== 0 && (m[Y[g[v + P]]++] = P)
                    if (
                      ((T =
                        p === 0
                          ? ((A = he = m), 19)
                          : p === 1
                            ? ((A = l), (Q -= 257), (he = i), (J -= 257), 256)
                            : ((A = d), (he = u), -1)),
                      (_ = b),
                      (I = f),
                      (re = P = F = 0),
                      (k = -1),
                      (E = (ee = 1 << (U = K)) - 1),
                      (p === 1 && 852 < ee) || (p === 2 && 592 < ee))
                    )
                      return 1
                    for (;;) {
                      for (
                        D = _ - re,
                          L =
                            m[P] < T
                              ? ((R = 0), m[P])
                              : m[P] > T
                                ? ((R = he[J + m[P]]), A[Q + m[P]])
                                : ((R = 96), 0),
                          S = 1 << (_ - re),
                          b = C = 1 << U;
                        (x[I + (F >> re) + (C -= S)] =
                          (D << 24) | (R << 16) | L | 0),
                          C !== 0;

                      );
                      for (S = 1 << (_ - 1); F & S; ) S >>= 1
                      if (
                        (S !== 0 ? ((F &= S - 1), (F += S)) : (F = 0),
                        P++,
                        --G[_] == 0)
                      ) {
                        if (_ === M) break
                        _ = g[v + m[P]]
                      }
                      if (K < _ && (F & E) !== k) {
                        for (
                          re === 0 && (re = K), I += b, $ = 1 << (U = _ - re);
                          U + re < M && !(($ -= G[U + re]) <= 0);

                        )
                          (U++, ($ <<= 1))
                        if (
                          ((ee += 1 << U),
                          (p === 1 && 852 < ee) || (p === 2 && 592 < ee))
                        )
                          return 1
                        x[(k = F & E)] = (K << 24) | (U << 16) | (I - f) | 0
                      }
                    }
                    return (
                      F !== 0 && (x[I + F] = ((_ - re) << 24) | (64 << 16) | 0),
                      (w.bits = K),
                      0
                    )
                  }
                },
                { '../utils/common': 41 },
              ],
              51: [
                function (t, n, s) {
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
                function (t, n, s) {
                  var a = t('../utils/common'),
                    l = 0,
                    i = 1
                  function d(N) {
                    for (var O = N.length; 0 <= --O; ) N[O] = 0
                  }
                  var u = 0,
                    p = 29,
                    g = 256,
                    v = g + 1 + p,
                    c = 30,
                    x = 19,
                    f = 2 * v + 1,
                    m = 15,
                    w = 16,
                    S = 7,
                    C = 256,
                    k = 16,
                    E = 17,
                    I = 18,
                    T = [
                      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3,
                      3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
                    ],
                    D = [
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
                    H = new Array(2 * (v + 2))
                  d(H)
                  var _ = new Array(2 * c)
                  d(_)
                  var P = new Array(512)
                  d(P)
                  var b = new Array(256)
                  d(b)
                  var M = new Array(p)
                  d(M)
                  var K,
                    U,
                    re,
                    $ = new Array(c)
                  function ee(N, O, W, Z, z) {
                    ;((this.static_tree = N),
                      (this.extra_bits = O),
                      (this.extra_base = W),
                      (this.elems = Z),
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
                  function Q(N, O) {
                    ;((N.pending_buf[N.pending++] = 255 & O),
                      (N.pending_buf[N.pending++] = (O >>> 8) & 255))
                  }
                  function G(N, O, W) {
                    N.bi_valid > w - W
                      ? ((N.bi_buf |= (O << N.bi_valid) & 65535),
                        Q(N, N.bi_buf),
                        (N.bi_buf = O >> (w - N.bi_valid)),
                        (N.bi_valid += W - w))
                      : ((N.bi_buf |= (O << N.bi_valid) & 65535),
                        (N.bi_valid += W))
                  }
                  function Y(N, O, W) {
                    G(N, W[2 * O], W[2 * O + 1])
                  }
                  function he(N, O) {
                    for (
                      var W = 0;
                      (W |= 1 & N), (N >>>= 1), (W <<= 1), 0 < --O;

                    );
                    return W >>> 1
                  }
                  function J(N, O, W) {
                    var Z,
                      z,
                      q = new Array(m + 1),
                      oe = 0
                    for (Z = 1; Z <= m; Z++) q[Z] = oe = (oe + W[Z - 1]) << 1
                    for (z = 0; z <= O; z++) {
                      var te = N[2 * z + 1]
                      te !== 0 && (N[2 * z] = he(q[te]++, te))
                    }
                  }
                  function ne(N) {
                    var O
                    for (O = 0; O < v; O++) N.dyn_ltree[2 * O] = 0
                    for (O = 0; O < c; O++) N.dyn_dtree[2 * O] = 0
                    for (O = 0; O < x; O++) N.bl_tree[2 * O] = 0
                    ;((N.dyn_ltree[2 * C] = 1),
                      (N.opt_len = N.static_len = 0),
                      (N.last_lit = N.matches = 0))
                  }
                  function ae(N) {
                    ;(8 < N.bi_valid
                      ? Q(N, N.bi_buf)
                      : 0 < N.bi_valid &&
                        (N.pending_buf[N.pending++] = N.bi_buf),
                      (N.bi_buf = 0),
                      (N.bi_valid = 0))
                  }
                  function ue(N, O, W, Z) {
                    var z = 2 * O,
                      q = 2 * W
                    return N[z] < N[q] || (N[z] === N[q] && Z[O] <= Z[W])
                  }
                  function de(N, O, W) {
                    for (
                      var Z = N.heap[W], z = W << 1;
                      z <= N.heap_len &&
                      (z < N.heap_len &&
                        ue(O, N.heap[z + 1], N.heap[z], N.depth) &&
                        z++,
                      !ue(O, Z, N.heap[z], N.depth));

                    )
                      ((N.heap[W] = N.heap[z]), (W = z), (z <<= 1))
                    N.heap[W] = Z
                  }
                  function pe(N, O, W) {
                    var Z,
                      z,
                      q,
                      oe,
                      te = 0
                    if (N.last_lit !== 0)
                      for (
                        ;
                        (Z =
                          (N.pending_buf[N.d_buf + 2 * te] << 8) |
                          N.pending_buf[N.d_buf + 2 * te + 1]),
                          (z = N.pending_buf[N.l_buf + te]),
                          te++,
                          Z === 0
                            ? Y(N, z, O)
                            : (Y(N, (q = b[z]) + g + 1, O),
                              (oe = T[q]) !== 0 && G(N, (z -= M[q]), oe),
                              Y(N, (q = A(--Z)), W),
                              (oe = D[q]) !== 0 && G(N, (Z -= $[q]), oe)),
                          te < N.last_lit;

                      );
                    Y(N, C, O)
                  }
                  function ye(N, O) {
                    var W,
                      Z,
                      z,
                      q = O.dyn_tree,
                      oe = O.stat_desc.static_tree,
                      te = O.stat_desc.has_stree,
                      se = O.stat_desc.elems,
                      xe = -1
                    for (N.heap_len = 0, N.heap_max = f, W = 0; W < se; W++)
                      q[2 * W] !== 0
                        ? ((N.heap[++N.heap_len] = xe = W), (N.depth[W] = 0))
                        : (q[2 * W + 1] = 0)
                    for (; N.heap_len < 2; )
                      ((q[2 * (z = N.heap[++N.heap_len] = xe < 2 ? ++xe : 0)] =
                        1),
                        (N.depth[z] = 0),
                        N.opt_len--,
                        te && (N.static_len -= oe[2 * z + 1]))
                    for (O.max_code = xe, W = N.heap_len >> 1; 1 <= W; W--)
                      de(N, q, W)
                    for (
                      z = se;
                      (W = N.heap[1]),
                        (N.heap[1] = N.heap[N.heap_len--]),
                        de(N, q, 1),
                        (Z = N.heap[1]),
                        (N.heap[--N.heap_max] = W),
                        (N.heap[--N.heap_max] = Z),
                        (q[2 * z] = q[2 * W] + q[2 * Z]),
                        (N.depth[z] =
                          (N.depth[W] >= N.depth[Z] ? N.depth[W] : N.depth[Z]) +
                          1),
                        (q[2 * W + 1] = q[2 * Z + 1] = z),
                        (N.heap[1] = z++),
                        de(N, q, 1),
                        2 <= N.heap_len;

                    );
                    ;((N.heap[--N.heap_max] = N.heap[1]),
                      (function (be, Ae) {
                        var Ye,
                          Oe,
                          ot,
                          _e,
                          ze,
                          kt,
                          Pe = Ae.dyn_tree,
                          lr = Ae.max_code,
                          Jr = Ae.stat_desc.static_tree,
                          cr = Ae.stat_desc.has_stree,
                          dr = Ae.stat_desc.extra_bits,
                          ur = Ae.stat_desc.extra_base,
                          Xe = Ae.stat_desc.max_length,
                          Me = 0
                        for (_e = 0; _e <= m; _e++) be.bl_count[_e] = 0
                        for (
                          Pe[2 * be.heap[be.heap_max] + 1] = 0,
                            Ye = be.heap_max + 1;
                          Ye < f;
                          Ye++
                        )
                          (Xe <
                            (_e =
                              Pe[2 * Pe[2 * (Oe = be.heap[Ye]) + 1] + 1] + 1) &&
                            ((_e = Xe), Me++),
                            (Pe[2 * Oe + 1] = _e),
                            lr < Oe ||
                              (be.bl_count[_e]++,
                              (ze = 0),
                              ur <= Oe && (ze = dr[Oe - ur]),
                              (kt = Pe[2 * Oe]),
                              (be.opt_len += kt * (_e + ze)),
                              cr &&
                                (be.static_len += kt * (Jr[2 * Oe + 1] + ze))))
                        if (Me !== 0) {
                          do {
                            for (_e = Xe - 1; be.bl_count[_e] === 0; ) _e--
                            ;(be.bl_count[_e]--,
                              (be.bl_count[_e + 1] += 2),
                              be.bl_count[Xe]--,
                              (Me -= 2))
                          } while (0 < Me)
                          for (_e = Xe; _e !== 0; _e--)
                            for (Oe = be.bl_count[_e]; Oe !== 0; )
                              lr < (ot = be.heap[--Ye]) ||
                                (Pe[2 * ot + 1] !== _e &&
                                  ((be.opt_len +=
                                    (_e - Pe[2 * ot + 1]) * Pe[2 * ot]),
                                  (Pe[2 * ot + 1] = _e)),
                                Oe--)
                        }
                      })(N, O),
                      J(q, xe, N.bl_count))
                  }
                  function y(N, O, W) {
                    var Z,
                      z,
                      q = -1,
                      oe = O[1],
                      te = 0,
                      se = 7,
                      xe = 4
                    for (
                      oe === 0 && ((se = 138), (xe = 3)),
                        O[2 * (W + 1) + 1] = 65535,
                        Z = 0;
                      Z <= W;
                      Z++
                    )
                      ((z = oe),
                        (oe = O[2 * (Z + 1) + 1]),
                        (++te < se && z === oe) ||
                          (te < xe
                            ? (N.bl_tree[2 * z] += te)
                            : z !== 0
                              ? (z !== q && N.bl_tree[2 * z]++,
                                N.bl_tree[2 * k]++)
                              : te <= 10
                                ? N.bl_tree[2 * E]++
                                : N.bl_tree[2 * I]++,
                          (q = z),
                          (xe =
                            (te = 0) === oe
                              ? ((se = 138), 3)
                              : z === oe
                                ? ((se = 6), 3)
                                : ((se = 7), 4))))
                  }
                  function V(N, O, W) {
                    var Z,
                      z,
                      q = -1,
                      oe = O[1],
                      te = 0,
                      se = 7,
                      xe = 4
                    for (oe === 0 && ((se = 138), (xe = 3)), Z = 0; Z <= W; Z++)
                      if (
                        ((z = oe),
                        (oe = O[2 * (Z + 1) + 1]),
                        !(++te < se && z === oe))
                      ) {
                        if (te < xe) for (; Y(N, z, N.bl_tree), --te != 0; );
                        else
                          z !== 0
                            ? (z !== q && (Y(N, z, N.bl_tree), te--),
                              Y(N, k, N.bl_tree),
                              G(N, te - 3, 2))
                            : te <= 10
                              ? (Y(N, E, N.bl_tree), G(N, te - 3, 3))
                              : (Y(N, I, N.bl_tree), G(N, te - 11, 7))
                        ;((q = z),
                          (xe =
                            (te = 0) === oe
                              ? ((se = 138), 3)
                              : z === oe
                                ? ((se = 6), 3)
                                : ((se = 7), 4)))
                      }
                  }
                  d($)
                  var B = !1
                  function j(N, O, W, Z) {
                    ;(G(N, (u << 1) + (Z ? 1 : 0), 3),
                      (function (z, q, oe, te) {
                        ;(ae(z),
                          Q(z, oe),
                          Q(z, ~oe),
                          a.arraySet(z.pending_buf, z.window, q, oe, z.pending),
                          (z.pending += oe))
                      })(N, O, W))
                  }
                  ;((s._tr_init = function (N) {
                    ;(B ||
                      ((function () {
                        var O,
                          W,
                          Z,
                          z,
                          q,
                          oe = new Array(m + 1)
                        for (z = Z = 0; z < p - 1; z++)
                          for (M[z] = Z, O = 0; O < 1 << T[z]; O++) b[Z++] = z
                        for (b[Z - 1] = z, z = q = 0; z < 16; z++)
                          for ($[z] = q, O = 0; O < 1 << D[z]; O++) P[q++] = z
                        for (q >>= 7; z < c; z++)
                          for ($[z] = q << 7, O = 0; O < 1 << (D[z] - 7); O++)
                            P[256 + q++] = z
                        for (W = 0; W <= m; W++) oe[W] = 0
                        for (O = 0; O <= 143; )
                          ((H[2 * O + 1] = 8), O++, oe[8]++)
                        for (; O <= 255; ) ((H[2 * O + 1] = 9), O++, oe[9]++)
                        for (; O <= 279; ) ((H[2 * O + 1] = 7), O++, oe[7]++)
                        for (; O <= 287; ) ((H[2 * O + 1] = 8), O++, oe[8]++)
                        for (J(H, v + 1, oe), O = 0; O < c; O++)
                          ((_[2 * O + 1] = 5), (_[2 * O] = he(O, 5)))
                        ;((K = new ee(H, T, g + 1, v, m)),
                          (U = new ee(_, D, 0, c, m)),
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
                    (s._tr_stored_block = j),
                    (s._tr_flush_block = function (N, O, W, Z) {
                      var z,
                        q,
                        oe = 0
                      ;(0 < N.level
                        ? (N.strm.data_type === 2 &&
                            (N.strm.data_type = (function (te) {
                              var se,
                                xe = 4093624447
                              for (se = 0; se <= 31; se++, xe >>>= 1)
                                if (1 & xe && te.dyn_ltree[2 * se] !== 0)
                                  return l
                              if (
                                te.dyn_ltree[18] !== 0 ||
                                te.dyn_ltree[20] !== 0 ||
                                te.dyn_ltree[26] !== 0
                              )
                                return i
                              for (se = 32; se < g; se++)
                                if (te.dyn_ltree[2 * se] !== 0) return i
                              return l
                            })(N)),
                          ye(N, N.l_desc),
                          ye(N, N.d_desc),
                          (oe = (function (te) {
                            var se
                            for (
                              y(te, te.dyn_ltree, te.l_desc.max_code),
                                y(te, te.dyn_dtree, te.d_desc.max_code),
                                ye(te, te.bl_desc),
                                se = x - 1;
                              3 <= se && te.bl_tree[2 * L[se] + 1] === 0;
                              se--
                            );
                            return (
                              (te.opt_len += 3 * (se + 1) + 5 + 5 + 4),
                              se
                            )
                          })(N)),
                          (z = (N.opt_len + 3 + 7) >>> 3),
                          (q = (N.static_len + 3 + 7) >>> 3) <= z && (z = q))
                        : (z = q = W + 5),
                        W + 4 <= z && O !== -1
                          ? j(N, O, W, Z)
                          : N.strategy === 4 || q === z
                            ? (G(N, 2 + (Z ? 1 : 0), 3), pe(N, H, _))
                            : (G(N, 4 + (Z ? 1 : 0), 3),
                              (function (te, se, xe, be) {
                                var Ae
                                for (
                                  G(te, se - 257, 5),
                                    G(te, xe - 1, 5),
                                    G(te, be - 4, 4),
                                    Ae = 0;
                                  Ae < be;
                                  Ae++
                                )
                                  G(te, te.bl_tree[2 * L[Ae] + 1], 3)
                                ;(V(te, te.dyn_ltree, se - 1),
                                  V(te, te.dyn_dtree, xe - 1))
                              })(
                                N,
                                N.l_desc.max_code + 1,
                                N.d_desc.max_code + 1,
                                oe + 1
                              ),
                              pe(N, N.dyn_ltree, N.dyn_dtree)),
                        ne(N),
                        Z && ae(N))
                    }),
                    (s._tr_tally = function (N, O, W) {
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
                            N.dyn_ltree[2 * (b[W] + g + 1)]++,
                            N.dyn_dtree[2 * A(O)]++),
                        N.last_lit === N.lit_bufsize - 1
                      )
                    }),
                    (s._tr_align = function (N) {
                      ;(G(N, 2, 3),
                        Y(N, C, H),
                        (function (O) {
                          O.bi_valid === 16
                            ? (Q(O, O.bi_buf), (O.bi_buf = 0), (O.bi_valid = 0))
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
                function (t, n, s) {
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
                function (t, n, s) {
                  ;(function (a) {
                    ;(function (l, i) {
                      if (!l.setImmediate) {
                        var d,
                          u,
                          p,
                          g,
                          v = 1,
                          c = {},
                          x = !1,
                          f = l.document,
                          m = Object.getPrototypeOf && Object.getPrototypeOf(l)
                        ;((m = m && m.setTimeout ? m : l),
                          (d =
                            {}.toString.call(l.process) === '[object process]'
                              ? function (k) {
                                  process.nextTick(function () {
                                    S(k)
                                  })
                                }
                              : (function () {
                                    if (l.postMessage && !l.importScripts) {
                                      var k = !0,
                                        E = l.onmessage
                                      return (
                                        (l.onmessage = function () {
                                          k = !1
                                        }),
                                        l.postMessage('', '*'),
                                        (l.onmessage = E),
                                        k
                                      )
                                    }
                                  })()
                                ? ((g = 'setImmediate$' + Math.random() + '$'),
                                  l.addEventListener
                                    ? l.addEventListener('message', C, !1)
                                    : l.attachEvent('onmessage', C),
                                  function (k) {
                                    l.postMessage(g + k, '*')
                                  })
                                : l.MessageChannel
                                  ? (((p =
                                      new MessageChannel()).port1.onmessage =
                                      function (k) {
                                        S(k.data)
                                      }),
                                    function (k) {
                                      p.port2.postMessage(k)
                                    })
                                  : f &&
                                      'onreadystatechange' in
                                        f.createElement('script')
                                    ? ((u = f.documentElement),
                                      function (k) {
                                        var E = f.createElement('script')
                                        ;((E.onreadystatechange = function () {
                                          ;(S(k),
                                            (E.onreadystatechange = null),
                                            u.removeChild(E),
                                            (E = null))
                                        }),
                                          u.appendChild(E))
                                      })
                                    : function (k) {
                                        setTimeout(S, 0, k)
                                      }),
                          (m.setImmediate = function (k) {
                            typeof k != 'function' && (k = new Function('' + k))
                            for (
                              var E = new Array(arguments.length - 1), I = 0;
                              I < E.length;
                              I++
                            )
                              E[I] = arguments[I + 1]
                            var T = { callback: k, args: E }
                            return ((c[v] = T), d(v), v++)
                          }),
                          (m.clearImmediate = w))
                      }
                      function w(k) {
                        delete c[k]
                      }
                      function S(k) {
                        if (x) setTimeout(S, 0, k)
                        else {
                          var E = c[k]
                          if (E) {
                            x = !0
                            try {
                              ;(function (I) {
                                var T = I.callback,
                                  D = I.args
                                switch (D.length) {
                                  case 0:
                                    T()
                                    break
                                  case 1:
                                    T(D[0])
                                    break
                                  case 2:
                                    T(D[0], D[1])
                                    break
                                  case 3:
                                    T(D[0], D[1], D[2])
                                    break
                                  default:
                                    T.apply(i, D)
                                }
                              })(E)
                            } finally {
                              ;(w(k), (x = !1))
                            }
                          }
                        }
                      }
                      function C(k) {
                        k.source === l &&
                          typeof k.data == 'string' &&
                          k.data.indexOf(g) === 0 &&
                          S(+k.data.slice(g.length))
                      }
                    })(typeof self > 'u' ? (a === void 0 ? this : a) : self)
                  }).call(
                    this,
                    typeof fr < 'u'
                      ? fr
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
      })(cn)),
    cn.exports
  )
}
var wp = xp()
const yp = Ts(wp)
function Br(e) {
  const r = Math.floor(e / 3600),
    t = Math.floor((e % 3600) / 60),
    n = e % 60
  return [
    r.toString().padStart(2, '0'),
    t.toString().padStart(2, '0'),
    n.toString().padStart(2, '0'),
  ].join(':')
}
const Sp = e => {
    if (e == null) return ''
    const r = String(e)
    return r.includes(',') ||
      r.includes('"') ||
      r.includes(`
`)
      ? `"${r.replace(/"/g, '""')}"`
      : r
  },
  Mt = e => e.map(Sp).join(','),
  Cp = (e, r = {}) => {
    const {
        includeNotes: t = !0,
        includeUserInfo: n = !0,
        includeTimestamps: s = !0,
      } = r,
      a = [
        'Door ID',
        'Door Number',
        'Destination DC',
        'Freight Type',
        'Trailer Status',
        'Pallet Count',
      ]
    ;(s && a.push('Timestamp', 'Date', 'Time'),
      t && a.push('Notes'),
      n && a.push('User'))
    const l = e.map(i => {
      const d = [
        i.id,
        i.doorNumber,
        i.destinationDC,
        i.freightType,
        i.trailerStatus,
        i.palletCount || 0,
      ]
      if (s && i.timestamp) {
        const u = new Date(i.timestamp)
        d.push(i.timestamp, u.toLocaleDateString(), u.toLocaleTimeString())
      } else s && d.push('', '', '')
      return (
        t && d.push(i.notes || ''),
        n && d.push(i.createdBy || 'system'),
        Mt(d)
      )
    })
    return [Mt(a), ...l].join(`
`)
  },
  _p = (e, r = {}) => {
    const { includeUserInfo: t = !0, includeTimestamps: n = !0 } = r,
      s = [
        'Pallet ID',
        'Door Number',
        'Pallet Count',
        'Started At',
        'Ended At',
        'Duration',
      ]
    ;(n && s.push('Timestamp', 'Date', 'Time'), t && s.push('User'))
    const a = e.map(l => {
      var d
      const i = [
        l.id,
        ((d = l.doorNumber) == null ? void 0 : d.toString()) || '0',
        l.count.toString(),
        l.startTime || '',
        l.endTime || '',
        l.elapsedTime ? Br(l.elapsedTime) : '',
      ]
      if (n && l.timestamp) {
        const u = new Date(l.timestamp)
        i.push(l.timestamp, u.toLocaleDateString(), u.toLocaleTimeString())
      } else n && i.push('', '', '')
      return (t && i.push(l.createdBy || 'system'), Mt(i))
    })
    return [Mt(s), ...a].join(`
`)
  },
  kp = (e, r = {}) => {
    const { includeUserInfo: t = !0, includeTimestamps: n = !0 } = r,
      s = e.filter(i => i.notes && i.notes.trim() !== '')
    if (s.length === 0) return ''
    const a = ['Door ID', 'Door Number', 'Notes']
    ;(n && a.push('Timestamp', 'Date', 'Time'), t && a.push('User'))
    const l = s.map(i => {
      const d = [i.id, i.doorNumber, i.notes || '']
      if (n && i.timestamp) {
        const u = new Date(i.timestamp)
        d.push(i.timestamp, u.toLocaleDateString(), u.toLocaleTimeString())
      } else n && d.push('', '', '')
      return (t && d.push(i.createdBy || 'system'), Mt(d))
    })
    return [Mt(a), ...l].join(`
`)
  },
  Np = async (e, r, t = {}) => {
    const n = new yp(),
      s = Cp(e, t),
      a = _p(r, t),
      l = kp(e, t)
    ;(s &&
      s.split(`
`).length > 1 &&
      n.file('doors.csv', s),
      a &&
        a.split(`
`).length > 1 &&
        n.file('pallets.csv', a),
      l &&
        l.split(`
`).length > 1 &&
        n.file('notes.csv', l))
    const i = new Date().toISOString(),
      d = `Export generated at: ${i}
Total doors: ${e.length}
Total pallets logged (in export): ${r.length}
Total doors with notes: ${e.filter(m => m.notes && m.notes.trim() !== '').length}

Generated by Walmart DC 8980 Shipping Department PWA v1.0.0
`
    if (
      (n.file('summary.txt', d),
      Object.keys(n.files).length === 0 ||
        (Object.keys(n.files).length === 1 && n.files['summary.txt']))
    )
      throw (
        console.warn('Zip file contains no data CSVs, only summary.txt.'),
        new Error('No data available to export.')
      )
    const u = new Date(),
      p = `${u.getFullYear().toString()}${(u.getMonth() + 1).toString().padStart(2, '0')}${u.getDate().toString().padStart(2, '0')}`,
      g = `${u.getHours().toString().padStart(2, '0')}${u.getMinutes().toString().padStart(2, '0')}${u.getSeconds().toString().padStart(2, '0')}`,
      v = `walmart_dc8980_export_${p}_${g}.zip`,
      c = await n.generateAsync({ type: 'blob' }),
      x = URL.createObjectURL(c),
      f = document.createElement('a')
    return (
      (f.href = x),
      f.setAttribute('download', v),
      document.body.appendChild(f),
      f.click(),
      document.body.removeChild(f),
      URL.revokeObjectURL(x),
      {
        timestamp: i,
        fileName: v,
        doorCount: e.length,
        palletCount: r.length,
        noteCount: e.filter(m => m.notes && m.notes.trim() !== '').length,
      }
    )
  }
var dn,
  Ur = 'HoverCard',
  [ui, wv] = nt(Ur, [Tr]),
  Hr = Tr(),
  [Ep, no] = ui(Ur),
  fi = e => {
    const {
        __scopeHoverCard: r,
        children: t,
        open: n,
        defaultOpen: s,
        onOpenChange: a,
        openDelay: l = 700,
        closeDelay: i = 300,
      } = e,
      d = Hr(r),
      u = h.useRef(0),
      p = h.useRef(0),
      g = h.useRef(!1),
      v = h.useRef(!1),
      [c, x] = xt({ prop: n, defaultProp: s ?? !1, onChange: a, caller: Ur }),
      f = h.useCallback(() => {
        ;(clearTimeout(p.current),
          (u.current = window.setTimeout(() => x(!0), l)))
      }, [l, x]),
      m = h.useCallback(() => {
        ;(clearTimeout(u.current),
          !g.current &&
            !v.current &&
            (p.current = window.setTimeout(() => x(!1), i)))
      }, [i, x]),
      w = h.useCallback(() => x(!1), [x])
    return (
      h.useEffect(
        () => () => {
          ;(clearTimeout(u.current), clearTimeout(p.current))
        },
        []
      ),
      o.jsx(Ep, {
        scope: r,
        open: c,
        onOpenChange: x,
        onOpen: f,
        onClose: m,
        onDismiss: w,
        hasSelectionRef: g,
        isPointerDownOnContentRef: v,
        children: o.jsx(Ss, { ...d, children: t }),
      })
    )
  }
fi.displayName = Ur
var hi = 'HoverCardTrigger',
  pi = h.forwardRef((e, r) => {
    const { __scopeHoverCard: t, ...n } = e,
      s = no(hi, t),
      a = Hr(t)
    return o.jsx(Cs, {
      asChild: !0,
      ...a,
      children: o.jsx(Ce.a, {
        'data-state': s.open ? 'open' : 'closed',
        ...n,
        ref: r,
        onPointerEnter: ie(e.onPointerEnter, kr(s.onOpen)),
        onPointerLeave: ie(e.onPointerLeave, kr(s.onClose)),
        onFocus: ie(e.onFocus, s.onOpen),
        onBlur: ie(e.onBlur, s.onClose),
        onTouchStart: ie(e.onTouchStart, l => l.preventDefault()),
      }),
    })
  })
pi.displayName = hi
var jp = 'HoverCardPortal',
  [yv, Tp] = ui(jp, { forceMount: void 0 }),
  _r = 'HoverCardContent',
  mi = h.forwardRef((e, r) => {
    const t = Tp(_r, e.__scopeHoverCard),
      { forceMount: n = t.forceMount, ...s } = e,
      a = no(_r, e.__scopeHoverCard)
    return o.jsx(wt, {
      present: n || a.open,
      children: o.jsx(Rp, {
        'data-state': a.open ? 'open' : 'closed',
        ...s,
        onPointerEnter: ie(e.onPointerEnter, kr(a.onOpen)),
        onPointerLeave: ie(e.onPointerLeave, kr(a.onClose)),
        ref: r,
      }),
    })
  })
mi.displayName = _r
var Rp = h.forwardRef((e, r) => {
    const {
        __scopeHoverCard: t,
        onEscapeKeyDown: n,
        onPointerDownOutside: s,
        onFocusOutside: a,
        onInteractOutside: l,
        ...i
      } = e,
      d = no(_r, t),
      u = Hr(t),
      p = h.useRef(null),
      g = Ee(r, p),
      [v, c] = h.useState(!1)
    return (
      h.useEffect(() => {
        if (v) {
          const x = document.body
          return (
            (dn = x.style.userSelect || x.style.webkitUserSelect),
            (x.style.userSelect = 'none'),
            (x.style.webkitUserSelect = 'none'),
            () => {
              ;((x.style.userSelect = dn), (x.style.webkitUserSelect = dn))
            }
          )
        }
      }, [v]),
      h.useEffect(() => {
        if (p.current) {
          const x = () => {
            ;(c(!1),
              (d.isPointerDownOnContentRef.current = !1),
              setTimeout(() => {
                var m
                ;((m = document.getSelection()) == null
                  ? void 0
                  : m.toString()) !== '' && (d.hasSelectionRef.current = !0)
              }))
          }
          return (
            document.addEventListener('pointerup', x),
            () => {
              ;(document.removeEventListener('pointerup', x),
                (d.hasSelectionRef.current = !1),
                (d.isPointerDownOnContentRef.current = !1))
            }
          )
        }
      }, [d.isPointerDownOnContentRef, d.hasSelectionRef]),
      h.useEffect(() => {
        p.current &&
          Ip(p.current).forEach(f => f.setAttribute('tabindex', '-1'))
      }),
      o.jsx(ws, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onInteractOutside: l,
        onEscapeKeyDown: n,
        onPointerDownOutside: s,
        onFocusOutside: ie(a, x => {
          x.preventDefault()
        }),
        onDismiss: d.onDismiss,
        children: o.jsx(ys, {
          ...u,
          ...i,
          onPointerDown: ie(i.onPointerDown, x => {
            ;(x.currentTarget.contains(x.target) && c(!0),
              (d.hasSelectionRef.current = !1),
              (d.isPointerDownOnContentRef.current = !0))
          }),
          ref: g,
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
  Pp = 'HoverCardArrow',
  Dp = h.forwardRef((e, r) => {
    const { __scopeHoverCard: t, ...n } = e,
      s = Hr(t)
    return o.jsx(_s, { ...s, ...n, ref: r })
  })
Dp.displayName = Pp
function kr(e) {
  return r => (r.pointerType === 'touch' ? void 0 : e())
}
function Ip(e) {
  const r = [],
    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: n =>
        n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
    })
  for (; t.nextNode(); ) r.push(t.currentNode)
  return r
}
var Ap = fi,
  $p = pi,
  gi = mi
const Mp = Ap,
  Op = $p,
  vi = h.forwardRef(
    ({ className: e, align: r = 'center', sideOffset: t = 4, ...n }, s) =>
      o.jsx(gi, {
        ref: s,
        align: r,
        sideOffset: t,
        className: le(
          'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          e
        ),
        ...n,
      })
  )
vi.displayName = gi.displayName
const Lp = ({ doorEntries: e, palletEntries: r }) => {
    const [t, n] = h.useState(!1),
      s = async () => {
        if (e.length === 0 && r.length === 0) {
          ce.error('No data to export')
          return
        }
        n(!0)
        try {
          ;(await Np(e, r),
            ce.success('Export successful!', {
              description: 'All data exported as ZIP file',
            }))
        } catch (a) {
          ;(console.error('Export error:', a),
            ce.error('Failed to export data', {
              description: 'Please try again or contact support',
            }))
        } finally {
          n(!1)
        }
      }
    return o.jsxs(Mp, {
      children: [
        o.jsx(Op, {
          asChild: !0,
          children: o.jsxs(fe, {
            onClick: s,
            disabled: t || (e.length === 0 && r.length === 0),
            className: `bg-walmart-yellow text-black hover:bg-walmart-yellow/80 transition-all hover:scale-105 focus:scale-95 ${t ? 'animate-pulse' : ''}`,
            children: [
              o.jsx(Ud, { className: 'mr-2 h-4 w-4' }),
              t ? 'Exporting...' : 'Export All Data',
            ],
          }),
        }),
        o.jsx(vi, {
          className: 'w-80 p-4',
          children: o.jsxs('div', {
            className: 'space-y-2',
            children: [
              o.jsx('h4', {
                className: 'text-sm font-semibold',
                children: 'Export All Data',
              }),
              o.jsx('p', {
                className: 'text-sm text-muted-foreground',
                children: 'Exports three CSV files in a ZIP package:',
              }),
              o.jsxs('ul', {
                className:
                  'text-xs text-muted-foreground list-disc pl-4 space-y-1',
                children: [
                  o.jsx('li', { children: 'doors.csv - All door assignments' }),
                  o.jsx('li', { children: 'pallets.csv - All pallet counts' }),
                  o.jsx('li', { children: 'notes.csv - All door notes' }),
                ],
              }),
              o.jsx('p', {
                className: 'text-xs text-muted-foreground mt-2',
                children: 'Each file includes timestamps and user information.',
              }),
            ],
          }),
        }),
      ],
    })
  },
  Fp = e => {
    if (e.length === 0) return 332
    const r = new Set(e.map(t => t.doorNumber))
    for (let t = 332; t <= 454; t++) if (!r.has(t)) return t
    return (
      console.warn('All door numbers 332-454 are in use, returning 332'),
      332
    )
  },
  zp = e => {
    if (e.length === 0) return 332
    const r = [...e].sort((n, s) => n.doorNumber - s.doorNumber),
      t = r[r.length - 1].doorNumber
    return t < 454 ? t + 1 : Fp(e)
  },
  Bp = ({ onAddDoor: e, currentDoors: r }) => {
    const { settings: t } = Ge(),
      { currentUser: n } = rr(),
      s = () => {
        if (r.length >= 10) {
          ce.error('Maximum door limit reached.')
          return
        }
        const a = zp(r),
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
          ce.success('Door quickly added!', {
            description: `Door ${l.doorNumber} added with your preferred settings`,
          }))
      }
    return o.jsx(Kn, {
      children: o.jsxs(pa, {
        children: [
          o.jsx(ma, {
            asChild: !0,
            children: o.jsxs(fe, {
              onClick: s,
              size: 'sm',
              variant: 'outline',
              className:
                'gap-1 border-2 border-walmart-yellow bg-walmart-yellow/80 text-walmart-blue-dark hover:bg-walmart-yellow/90 transition-all duration-300 transform hover:scale-105 focus:scale-95 min-h-[44px] font-medium shadow-md',
              children: [
                o.jsx(Vn, { className: 'h-4 w-4 text-walmart-blue-dark' }),
                o.jsx('span', {
                  className: 'text-value font-semibold',
                  children: 'Quick Add',
                }),
              ],
            }),
          }),
          o.jsxs(Gn, {
            children: [
              o.jsx('p', {
                children: 'Instantly add door using saved preferences',
              }),
              o.jsxs('p', {
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
  Up = ({ onAddDoor: e, onQuickAddDoor: r }) => {
    const { toast: t } = Is(),
      { settings: n } = Ge(),
      s = n.enableActionButton !== !1
    return (
      h.useEffect(() => {
        if (!s) return
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
      }, [e, r, t, s]),
      s
        ? o.jsx(Kn, {
            children: o.jsxs(pa, {
              children: [
                o.jsx(ma, {
                  asChild: !0,
                  children: o.jsx('div', {
                    className:
                      'flex items-center justify-center ml-2 text-gray-500',
                    children: o.jsx(Kd, { className: 'h-4 w-4' }),
                  }),
                }),
                o.jsxs(Gn, {
                  children: [
                    o.jsx('p', {
                      className: 'font-semibold',
                      children: 'Keyboard Shortcuts',
                    }),
                    o.jsxs('div', {
                      className: 'text-sm mt-1',
                      children: [
                        o.jsxs('p', {
                          children: [
                            o.jsx('kbd', {
                              className: 'px-2 py-1 bg-gray-100 rounded',
                              children: 'Alt+A',
                            }),
                            ' Add door',
                          ],
                        }),
                        o.jsxs('p', {
                          children: [
                            o.jsx('kbd', {
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
  Hp = ({ onSelectDoor: e, currentDoors: r = [] }) => {
    const [t, n] = h.useState(!1),
      [s, a] = h.useState(''),
      l = 332,
      i = 454,
      d = c => {
        s.length < 3 && a(x => x + c)
      },
      u = () => {
        a(c => c.slice(0, -1))
      },
      p = () => {
        a('')
      },
      g = () => {
        const c = parseInt(s, 10)
        if (isNaN(c)) {
          ce.error('Please enter a valid door number')
          return
        }
        if (c < l || c > i) {
          ce.error(`Door number must be between ${l} and ${i}`)
          return
        }
        if (r.includes(c)) {
          ce.error(`Door ${c} is already in use`)
          return
        }
        ;(e(c), n(!1), p())
      },
      v = () => {
        const c = [
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
          ['C', '0', '⌫'],
        ]
        return o.jsx('div', {
          className: 'grid grid-cols-3 gap-2 mt-4',
          children: c.map((x, f) =>
            o.jsx(
              'div',
              {
                children: x.map(m =>
                  m === 'C'
                    ? o.jsx(
                        fe,
                        {
                          variant: 'outline',
                          onClick: p,
                          className: 'h-14 text-lg',
                          children: o.jsx(Ar, { size: 18 }),
                        },
                        `digit-${m}`
                      )
                    : m === '⌫'
                      ? o.jsx(
                          fe,
                          {
                            variant: 'outline',
                            onClick: u,
                            className: 'h-14 text-lg',
                            children: o.jsx(zd, { size: 18 }),
                          },
                          `digit-${m}`
                        )
                      : o.jsx(
                          fe,
                          {
                            variant: 'outline',
                            onClick: () => d(m),
                            className: 'h-14 text-lg',
                            children: m,
                          },
                          `digit-${m}`
                        )
                ),
              },
              `row-${f}`
            )
          ),
        })
      }
    return o.jsxs(Zn, {
      open: t,
      onOpenChange: n,
      children: [
        o.jsx(qn, {
          asChild: !0,
          children: o.jsxs(fe, {
            variant: 'outline',
            size: 'sm',
            'aria-label': 'Fast Add Door',
            className:
              'gap-1 border-2 border-walmart-blue bg-walmart-blue/10 text-walmart-blue hover:bg-walmart-blue/20 transition-all duration-300 transform hover:scale-105 focus:scale-95 min-h-[44px] font-medium',
            children: [
              o.jsx(Hd, {
                className: 'h-4 w-4',
                'data-testid': 'mock-speed-icon',
              }),
              o.jsx('span', { children: 'Speed Add' }),
            ],
          }),
        }),
        o.jsxs(Mr, {
          className: 'sm:max-w-md',
          'data-testid': 'fast-add-door-form',
          children: [
            o.jsxs(Xn, {
              children: [
                o.jsx(Qn, { children: 'Fast Add Door' }),
                o.jsx(Jn, {
                  children:
                    'Quickly add a door with default values. Adjust details later if needed.',
                }),
              ],
            }),
            o.jsxs('div', {
              className: 'flex flex-col',
              children: [
                o.jsx('div', {
                  className:
                    'text-center py-4 px-3 bg-gray-50 rounded-md border text-3xl font-mono min-h-[70px] flex items-center justify-center mb-4',
                  children: s || 'Enter Door #',
                }),
                v(),
                o.jsxs(fe, {
                  onClick: g,
                  className: 'mt-4 h-14',
                  disabled: !s || s.length < 3,
                  children: [
                    o.jsx(tr, { className: 'mr-2 h-5 w-5' }),
                    'Add Door',
                  ],
                }),
                o.jsxs('div', {
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
  oo = 'doorSchedulesStore',
  so = async () => {
    try {
      const e = localStorage.getItem(oo)
      return e ? JSON.parse(e) : []
    } catch (e) {
      return (
        console.error('Error loading schedules from localStorage:', e),
        []
      )
    }
  },
  Wt = async e => {
    try {
      const r = await so(),
        t = r.some(n => n.id === e.id)
          ? r.map(n => (n.id === e.id ? e : n))
          : [...r, e]
      localStorage.setItem(oo, JSON.stringify(t))
    } catch (r) {
      console.error('Error saving schedule to localStorage:', r)
    }
  },
  Vp = async e => {
    try {
      const t = (await so()).filter(n => n.id !== e)
      localStorage.setItem(oo, JSON.stringify(t))
    } catch (r) {
      console.error('Error deleting schedule from localStorage:', r)
    }
  },
  Wp = e => {
    const [r, t] = h.useState(!1)
    return (
      h.useEffect(() => {
        const n = window.matchMedia(e),
          s = () => t(n.matches)
        return (
          s(),
          n.addEventListener('change', s),
          () => {
            n.removeEventListener('change', s)
          }
        )
      }, [e]),
      r
    )
  },
  Kp = () => {
    const [e, r] = h.useState([]),
      [t, n] = h.useState(!0),
      [s, a] = h.useState(null),
      { settings: l, updateLastUsedDC: i, updateLastUsedFreightType: d } = Ge(),
      { currentUser: u } = rr(),
      p = Wp('(max-width: 767px)'),
      [g, v] = h.useState(''),
      [c, x] = h.useState(''),
      [f, m] = h.useState(null)
    h.useEffect(() => {
      ;(async () => {
        try {
          n(!0)
          const L = await so()
          r(L || [])
        } catch (L) {
          ;(console.error('Error loading schedules from localStorage:', L),
            ce.error('Failed to load saved schedule data.'))
        } finally {
          n(!1)
        }
      })().catch(L => {
        ;(console.error('Failed to load schedules from localStorage:', L),
          ce.error('Failed to load saved schedule data.'),
          n(!1))
      })
    }, [])
    const w = h.useCallback(async () => {
        if (e.length >= 10) {
          ce.error('Maximum door limit reached.')
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
          createdBy: u.username,
          tcrPresent: !1,
        }
        try {
          ;(await Wt(R),
            r(L => [...L, R]),
            a(R.id),
            setTimeout(() => a(null), 600),
            ce.success('Door added successfully'))
        } catch (L) {
          ;(console.error('Error adding door to localStorage:', L),
            ce.error('Failed to save new door.'))
        }
      }, [e, l, u]),
      S = h.useCallback(async R => {
        try {
          ;(await Wt(R),
            r(L => [...L, R]),
            a(R.id),
            setTimeout(() => a(null), 600))
        } catch (L) {
          ;(console.error('Error adding door data to localStorage:', L),
            ce.error('Failed to save door data.'))
        }
      }, []),
      C = h.useCallback(
        async R => {
          if (e.length >= 10) {
            ce.error('Maximum door limit reached.')
            return
          }
          let L = R.doorNumber ? parseInt(R.doorNumber) : null
          if (
            (L !== null &&
              (isNaN(L) || L < 332 || L > 454) &&
              (ce.error(
                `Invalid door number from voice: ${R.doorNumber}. Must be 332-454.`
              ),
              (L = null)),
            L === null)
          ) {
            const M = new Set(e.map(U => U.doorNumber))
            let K = 332
            for (; M.has(K) && K <= 454; ) K++
            if (K > 454) {
              ce.error('No available door numbers left.')
              return
            }
            ;((L = K), ce.info(`Assigning next available door: ${L}`))
          }
          const H = R.destinationDC && Gp.includes(R.destinationDC),
            _ = R.freightType && Yp.includes(R.freightType),
            P =
              R.trailerStatus && Zp.map(M => M.value).includes(R.trailerStatus),
            b = {
              id: Math.random().toString(36).substring(7),
              doorNumber: L,
              destinationDC:
                H && R.destinationDC ? R.destinationDC : l.lastUsedDC,
              freightType:
                _ && R.freightType ? R.freightType : l.lastUsedFreightType,
              trailerStatus: P && R.trailerStatus ? R.trailerStatus : 'empty',
              palletCount: 0,
              timestamp: new Date().toISOString(),
              createdBy: `${u.username} (voice)`,
              tcrPresent: !1,
            }
          ;(await S(b),
            ce.success(`Door ${b.doorNumber} added via voice command.`))
        },
        [e, l, u, S]
      ),
      k = h.useCallback(
        async R => {
          if (e.length >= 10) {
            ce.error('Maximum door limit reached.')
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
            createdBy: u.username,
            tcrPresent: !1,
          }
          try {
            ;(await Wt(L),
              r(H => [...H, L]),
              a(L.id),
              setTimeout(() => a(null), 600),
              ce.success(`Door ${R} added with speed selection`, {
                description: 'Using your preferred settings',
              }))
          } catch (H) {
            ;(console.error('Error adding speed door to localStorage:', H),
              ce.error('Failed to save new door.'))
          }
        },
        [e, l, u]
      ),
      E = h.useCallback(async () => {
        const R = document.querySelector("button[aria-label='Quick add door']")
        if (R instanceof HTMLElement && typeof R.click == 'function') R.click()
        else {
          if (e.length >= 10) {
            ce.error('Maximum door limit reached.')
            return
          }
          const L = new Set(e.map(P => P.doorNumber))
          let H = 332
          for (let P = 332; P <= 454; P++)
            if (!L.has(P)) {
              H = P
              break
            }
          const _ = {
            id: Math.random().toString(36).substring(7),
            doorNumber: H,
            destinationDC: l.lastUsedDC,
            freightType: l.lastUsedFreightType,
            trailerStatus: 'empty',
            palletCount: 0,
            timestamp: new Date().toISOString(),
            createdBy: u.username,
            tcrPresent: !1,
          }
          try {
            ;(await Wt(_),
              r(P => [...P, _]),
              ce.success('Door quickly added via keyboard shortcut', {
                description: `Door ${_.doorNumber} added with your preferred settings`,
              }))
          } catch (P) {
            ;(console.error('Error adding quick door to localStorage:', P),
              ce.error('Failed to save new door.'))
          }
        }
      }, [e, l, u, S]),
      I = h.useCallback(
        async (R, L, H) => {
          let _ = null
          if (
            (r(P =>
              P.map(M => {
                if (M.id === R) {
                  if (L === 'doorNumber') {
                    const K = parseInt(H)
                    return isNaN(K) || K < 332 || K > 454
                      ? (ce.error('Door number must be between 332 and 454'), M)
                      : ((_ = {
                          ...M,
                          [L]: K,
                          updatedAt: new Date().toISOString(),
                          updatedBy: u.username,
                        }),
                        _)
                  }
                  return (
                    L === 'destinationDC' ? i(H) : L === 'freightType' && d(H),
                    (_ = {
                      ...M,
                      [L]: H,
                      updatedAt: new Date().toISOString(),
                      updatedBy: u.username,
                    }),
                    _
                  )
                }
                return M
              })
            ),
            _)
          )
            try {
              await Wt(_)
            } catch (P) {
              ;(console.error('Error updating schedule in localStorage:', P),
                ce.error('Failed to save changes.'))
            }
        },
        [u, i, d]
      ),
      T = h.useCallback(async R => {
        try {
          ;(await Vp(R),
            r(L => L.filter(H => H.id !== R)),
            ce.success('Door removed successfully'))
        } catch (L) {
          ;(console.error('Error removing door from localStorage:', L),
            ce.error('Failed to remove door.'))
        }
      }, []),
      D = e.map(R => R.doorNumber)
    return t
      ? o.jsxs(et, {
          className: 'container mx-auto p-6 text-center',
          children: [
            o.jsx(tt, { children: 'Loading Schedule...' }),
            o.jsx('div', {
              className: 'mt-4 text-gray-500',
              children: 'Please wait...',
            }),
          ],
        })
      : o.jsxs(et, {
          className:
            'container mx-auto shadow-xl border-t-4 border-t-wal-yellow-500 transition-all duration-200 hover:shadow-2xl bg-gradient-to-br from-white to-blue-50',
          children: [
            o.jsx(ht, {
              className:
                'bg-gradient-to-r from-wal-blue-500 to-wal-blue-600 border-b text-white',
              children: o.jsxs('div', {
                className: 'flex flex-wrap items-center justify-between gap-2',
                children: [
                  o.jsxs('div', {
                    className: 'flex items-center',
                    children: [
                      o.jsx(tt, {
                        className:
                          'text-heading text-white mr-2 font-bold text-xl',
                        children: '🚪 Door Schedule',
                      }),
                      o.jsx(Up, { onAddDoor: w, onQuickAddDoor: E }),
                    ],
                  }),
                  o.jsxs('div', {
                    className: 'flex flex-wrap gap-2',
                    children: [
                      o.jsxs(fe, {
                        onClick: w,
                        size: 'sm',
                        className:
                          'gap-2 bg-wal-yellow-500 text-wal-blue-800 hover:bg-wal-yellow-400 hover:text-wal-blue-900 transition-all duration-300 transform hover:scale-105 focus:scale-95 min-h-[44px] font-bold shadow-lg hover:shadow-xl',
                        children: [
                          o.jsx(At, { className: 'h-4 w-4' }),
                          o.jsx('span', {
                            className: 'text-value',
                            children: 'Add Door',
                          }),
                        ],
                      }),
                      o.jsx(Bp, { onAddDoor: S, currentDoors: e }),
                      o.jsx(Hp, { onSelectDoor: k, currentDoors: D }),
                      o.jsx(Cf, { onAddDoor: w, onAddDoorWithParams: C }),
                      o.jsx(Lp, { doorEntries: e, palletEntries: [] }),
                    ],
                  }),
                ],
              }),
            }),
            o.jsx(pt, {
              className: 'p-4 md:p-6',
              children: o.jsx('div', {
                className: 'space-y-4',
                children:
                  e.length === 0
                    ? o.jsxs('div', {
                        className:
                          'text-center py-16 px-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-dashed border-wal-blue-300 shadow-inner',
                        children: [
                          o.jsx('div', {
                            className: 'text-6xl mb-4',
                            children: '🚪',
                          }),
                          o.jsx('p', {
                            className:
                              'text-heading text-wal-blue-700 font-bold text-lg',
                            children: 'No doors assigned yet',
                          }),
                          o.jsx('p', {
                            className: 'text-label mt-2 text-wal-blue-600',
                            children:
                              'Click "Add Door" to get started with door scheduling.',
                          }),
                          o.jsxs(fe, {
                            onClick: w,
                            className:
                              'mt-6 bg-wal-yellow-500 text-wal-blue-800 hover:bg-wal-yellow-400 hover:text-wal-blue-900 min-h-[44px] font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300',
                            children: [
                              o.jsx(At, { className: 'h-4 w-4 mr-2' }),
                              o.jsx('span', {
                                className: 'text-value',
                                children: 'Add Your First Door',
                              }),
                            ],
                          }),
                        ],
                      })
                    : o.jsx('div', {
                        className: `mt-4 ${p ? 'space-y-3' : 'border-2 border-wal-blue-200 rounded-xl overflow-hidden bg-gradient-to-br from-white to-blue-50 shadow-lg'}`,
                        children: p
                          ? o.jsx('div', {
                              className: 'space-y-3',
                              children: e.map(R =>
                                o.jsx(
                                  Yo,
                                  {
                                    door: R,
                                    updateDoorSchedule: I,
                                    removeDoor: T,
                                    isAnimated: s === R.id,
                                    isMobileView: !0,
                                  },
                                  R.id
                                )
                              ),
                            })
                          : o.jsx('div', {
                              className: 'overflow-x-auto',
                              children: o.jsxs(wa, {
                                children: [
                                  o.jsx(ya, {
                                    children: o.jsxs(Yn, {
                                      className:
                                        'bg-gradient-to-r from-wal-blue-100 to-wal-blue-200 hover:from-wal-blue-200 hover:to-wal-blue-300 transition-all duration-200',
                                      children: [
                                        o.jsx(ct, {
                                          className:
                                            'font-bold text-wal-blue-800',
                                          children: '🚪 Door',
                                        }),
                                        o.jsx(ct, {
                                          className:
                                            'font-bold text-wal-blue-800',
                                          children: '📍 Destination',
                                        }),
                                        o.jsx(ct, {
                                          className:
                                            'font-bold text-wal-blue-800',
                                          children: '📦 Freight',
                                        }),
                                        o.jsx(ct, {
                                          className:
                                            'font-bold text-wal-blue-800',
                                          children: '📊 Status',
                                        }),
                                        o.jsx(ct, {
                                          className:
                                            'text-center font-bold text-wal-blue-800',
                                          children: '📋 Pallets',
                                        }),
                                        o.jsx(ct, {
                                          className:
                                            'text-center font-bold text-wal-blue-800',
                                          children: '📋 TCR',
                                        }),
                                        o.jsx(ct, {
                                          className:
                                            'text-right font-bold text-wal-blue-800',
                                          children: o.jsx('span', {
                                            className: 'hidden sm:inline',
                                            children: '⚙️ Actions',
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  o.jsx(Sa, {
                                    children: e.map(R =>
                                      o.jsx(
                                        Yo,
                                        {
                                          door: R,
                                          updateDoorSchedule: I,
                                          removeDoor: T,
                                          isAnimated: s === R.id,
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
  Gp = ['6024', '6070', '6039', '6040', '7045'],
  Yp = ['23/43', '28', 'XD', 'AIB'],
  Zp = [
    { value: 'empty', label: 'Empty' },
    { value: '25%', label: '25%' },
    { value: '50%', label: '50%' },
    { value: '75%', label: '75%' },
    { value: 'partial', label: 'Partial' },
    { value: 'shipload', label: 'Shipload' },
  ],
  qp = () => {
    const [e, r] = h.useState([]),
      { currentUser: t } = rr()
    ;(h.useEffect(() => {
      const u = localStorage.getItem('palletEntries')
      if (u)
        try {
          const g = JSON.parse(u).map(v =>
            !v.doorNumber && typeof v.doorNumber != 'number'
              ? { ...v, doorNumber: 0 }
              : v
          )
          r(g)
        } catch (p) {
          ;(console.error('Error parsing saved pallet entries:', p), r([]))
        }
    }, []),
      h.useEffect(() => {
        e.length > 0 && localStorage.setItem('palletEntries', JSON.stringify(e))
      }, [e]))
    const n = () => {
        const u = {
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
        ;(r([...e, u]), ce.success('New counter added'))
      },
      s = (u, p) => {
        r(g =>
          g.map(v => {
            if (v.id === u) {
              const c = p ? v.count + 1 : Math.max(0, v.count - 1)
              let x = { ...v }
              return (
                p && c === 1 && !v.isActive && !v.startTime
                  ? ((x = {
                      ...x,
                      isActive: !0,
                      startTime: new Date().toISOString(),
                      updatedAt: new Date().toISOString(),
                      updatedBy: t.username,
                      count: c,
                    }),
                    ce.success(`Started timer and increased to ${c}`))
                  : p
                    ? (ce.success(`Increased to ${c}`),
                      (x = {
                        ...x,
                        count: c,
                        updatedAt: new Date().toISOString(),
                        updatedBy: t.username,
                      }))
                    : v.count > 0 &&
                      (ce.info(`Decreased to ${c}`),
                      (x = {
                        ...x,
                        count: c,
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
      a = u => {
        r(p =>
          p.map(g => {
            if (g.id === u)
              if (g.isActive) {
                const v = new Date().toISOString(),
                  c = g.startTime ? new Date(g.startTime).getTime() : 0,
                  x = new Date(v).getTime(),
                  f = c ? x - c : 0,
                  m = Math.floor(f / 1e3)
                return (
                  ce.success(`Timer stopped. Total time: ${d(m)}`),
                  {
                    ...g,
                    isActive: !1,
                    endTime: v,
                    elapsedTime: m,
                    updatedAt: new Date().toISOString(),
                    updatedBy: t.username,
                  }
                )
              } else
                return (
                  ce.success('Timer started'),
                  {
                    ...g,
                    isActive: !0,
                    startTime: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    updatedBy: t.username,
                  }
                )
            return g
          })
        )
      },
      l = u => {
        ;(r(p => p.filter(g => g.id !== u)), ce.success('Counter removed'))
      },
      i = (u, p) => {
        r(g =>
          g.map(v =>
            v.id === u
              ? {
                  ...v,
                  doorNumber: p,
                  updatedAt: new Date().toISOString(),
                  updatedBy: t.username,
                }
              : v
          )
        )
      },
      d = u => Br(u)
    return {
      palletEntries: e,
      addPalletEntry: n,
      updateCount: s,
      deletePalletEntry: l,
      updateDoorNumber: i,
      toggleTimer: a,
      formatElapsedTime: d,
    }
  },
  ao = h.forwardRef(({ className: e, type: r, ...t }, n) =>
    o.jsx('input', {
      type: r,
      className: le(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        e
      ),
      ref: n,
      ...t,
    })
  )
ao.displayName = 'Input'
const Xp = 'Left',
  Qp = 'Right',
  Jp = 'Up',
  em = 'Down',
  Tt = {
    delta: 10,
    preventScrollOnSwipe: !1,
    rotationAngle: 0,
    trackMouse: !1,
    trackTouch: !0,
    swipeDuration: 1 / 0,
    touchEventOptions: { passive: !0 },
  },
  kn = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
  qo = 'mousemove',
  Xo = 'mouseup',
  tm = 'touchend',
  rm = 'touchmove',
  nm = 'touchstart'
function om(e, r, t, n) {
  return e > r ? (t > 0 ? Qp : Xp) : n > 0 ? em : Jp
}
function Qo(e, r) {
  if (r === 0) return e
  const t = (Math.PI / 180) * r,
    n = e[0] * Math.cos(t) + e[1] * Math.sin(t),
    s = e[1] * Math.cos(t) - e[0] * Math.sin(t)
  return [n, s]
}
function sm(e, r) {
  const t = p => {
      const g = 'touches' in p
      ;(g && p.touches.length > 1) ||
        e((v, c) => {
          c.trackMouse &&
            !g &&
            (document.addEventListener(qo, n), document.addEventListener(Xo, l))
          const { clientX: x, clientY: f } = g ? p.touches[0] : p,
            m = Qo([x, f], c.rotationAngle)
          return (
            c.onTouchStartOrOnMouseDown &&
              c.onTouchStartOrOnMouseDown({ event: p }),
            Object.assign(Object.assign(Object.assign({}, v), kn), {
              initial: m.slice(),
              xy: m,
              start: p.timeStamp || 0,
            })
          )
        })
    },
    n = p => {
      e((g, v) => {
        const c = 'touches' in p
        if (c && p.touches.length > 1) return g
        if (p.timeStamp - g.start > v.swipeDuration)
          return g.swiping
            ? Object.assign(Object.assign({}, g), { swiping: !1 })
            : g
        const { clientX: x, clientY: f } = c ? p.touches[0] : p,
          [m, w] = Qo([x, f], v.rotationAngle),
          S = m - g.xy[0],
          C = w - g.xy[1],
          k = Math.abs(S),
          E = Math.abs(C),
          I = (p.timeStamp || 0) - g.start,
          T = Math.sqrt(k * k + E * E) / (I || 1),
          D = [S / (I || 1), C / (I || 1)],
          R = om(k, E, S, C),
          L =
            typeof v.delta == 'number'
              ? v.delta
              : v.delta[R.toLowerCase()] || Tt.delta
        if (k < L && E < L && !g.swiping) return g
        const H = {
          absX: k,
          absY: E,
          deltaX: S,
          deltaY: C,
          dir: R,
          event: p,
          first: g.first,
          initial: g.initial,
          velocity: T,
          vxvy: D,
        }
        ;(H.first && v.onSwipeStart && v.onSwipeStart(H),
          v.onSwiping && v.onSwiping(H))
        let _ = !1
        return (
          (v.onSwiping || v.onSwiped || v[`onSwiped${R}`]) && (_ = !0),
          _ &&
            v.preventScrollOnSwipe &&
            v.trackTouch &&
            p.cancelable &&
            p.preventDefault(),
          Object.assign(Object.assign({}, g), {
            first: !1,
            eventData: H,
            swiping: !0,
          })
        )
      })
    },
    s = p => {
      e((g, v) => {
        let c
        if (g.swiping && g.eventData) {
          if (p.timeStamp - g.start < v.swipeDuration) {
            ;((c = Object.assign(Object.assign({}, g.eventData), { event: p })),
              v.onSwiped && v.onSwiped(c))
            const x = v[`onSwiped${c.dir}`]
            x && x(c)
          }
        } else v.onTap && v.onTap({ event: p })
        return (
          v.onTouchEndOrOnMouseUp && v.onTouchEndOrOnMouseUp({ event: p }),
          Object.assign(Object.assign(Object.assign({}, g), kn), {
            eventData: c,
          })
        )
      })
    },
    a = () => {
      ;(document.removeEventListener(qo, n),
        document.removeEventListener(Xo, l))
    },
    l = p => {
      ;(a(), s(p))
    },
    i = (p, g) => {
      let v = () => {}
      if (p && p.addEventListener) {
        const c = Object.assign(
            Object.assign({}, Tt.touchEventOptions),
            g.touchEventOptions
          ),
          x = [
            [nm, t, c],
            [
              rm,
              n,
              Object.assign(
                Object.assign({}, c),
                g.preventScrollOnSwipe ? { passive: !1 } : {}
              ),
            ],
            [tm, s, c],
          ]
        ;(x.forEach(([f, m, w]) => p.addEventListener(f, m, w)),
          (v = () => x.forEach(([f, m]) => p.removeEventListener(f, m))))
      }
      return v
    },
    u = {
      ref: p => {
        p !== null &&
          e((g, v) => {
            if (g.el === p) return g
            const c = {}
            return (
              g.el &&
                g.el !== p &&
                g.cleanUpTouch &&
                (g.cleanUpTouch(), (c.cleanUpTouch = void 0)),
              v.trackTouch && p && (c.cleanUpTouch = i(p, v)),
              Object.assign(Object.assign(Object.assign({}, g), { el: p }), c)
            )
          })
      },
    }
  return (r.trackMouse && (u.onMouseDown = t), [u, i])
}
function am(e, r, t, n) {
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
function im(e) {
  const { trackMouse: r } = e,
    t = h.useRef(Object.assign({}, kn)),
    n = h.useRef(Object.assign({}, Tt)),
    s = h.useRef(Object.assign({}, n.current))
  ;((s.current = Object.assign({}, n.current)),
    (n.current = Object.assign(Object.assign({}, Tt), e)))
  let a
  for (a in Tt) n.current[a] === void 0 && (n.current[a] = Tt[a])
  const [l, i] = h.useMemo(
    () => sm(d => (t.current = d(t.current, n.current)), { trackMouse: r }),
    [r]
  )
  return ((t.current = am(t.current, n.current, s.current, i)), l)
}
const lm = ({
    entry: e,
    onIncrement: r,
    onDecrement: t,
    onDelete: n,
    onDoorNumberChange: s,
    onToggleTimer: a,
    formatElapsedTime: l,
  }) => {
    const { settings: i } = Ge(),
      [d, u] = X.useState(null),
      [p, g] = X.useState(e.elapsedTime || 0)
    X.useEffect(() => {
      let C = null
      return (
        e.isActive && e.startTime
          ? (C = setInterval(() => {
              const k = new Date(e.startTime).getTime(),
                E = new Date().getTime(),
                I = Math.floor((E - k) / 1e3)
              g(I)
            }, 1e3))
          : g(e.elapsedTime || 0),
        () => {
          C && clearInterval(C)
        }
      )
    }, [e.isActive, e.startTime, e.elapsedTime])
    const v = X.useMemo(() => (l ? l(p) : Br(p)), [p, l]),
      c = im({
        onSwiping: C => {
          i.interactionMode === 'swipe' && u(C.dir)
        },
        onSwiped: C => {
          i.interactionMode === 'swipe' &&
            (C.dir === 'Right'
              ? (r(), ce.success(`Increased to ${e.count + 1}`))
              : C.dir === 'Left' &&
                (t(), ce.info(`Decreased to ${Math.max(0, e.count - 1)}`)),
            u(null))
        },
        delta: 10,
        trackTouch: !0,
        trackMouse: !1,
      }),
      f = `flex items-center justify-between p-3 rounded-lg border ${d === 'Right' ? 'bg-green-50' : d === 'Left' ? 'bg-red-50' : ''} ${e.isActive ? 'bg-green-50' : ''} transition-colors duration-200`,
      m = C =>
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
        const k = C.target.value,
          E = k === '' ? 0 : parseInt(k, 10)
        !isNaN(E) && s && s(E)
      }
    return o.jsx('div', {
      ...(i.interactionMode === 'swipe' ? c : {}),
      className: f,
      children: o.jsxs('div', {
        className: 'flex flex-col gap-2 w-full',
        children: [
          o.jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              o.jsx(ao, {
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
              o.jsxs('div', {
                className: 'flex items-center gap-1',
                children: [
                  o.jsx(fe, {
                    variant: 'outline',
                    size: 'icon',
                    onClick: t,
                    className: 'h-8 w-8 rounded-full bg-white hover:bg-red-50',
                    'aria-label': 'Decrement pallet count',
                    children: o.jsx(Ld, {
                      className: 'h-4 w-4 text-red-500',
                      'aria-hidden': 'true',
                    }),
                  }),
                  o.jsx('span', {
                    className: 'text-2xl font-bold w-12 text-center',
                    role: 'status',
                    'aria-label': 'Current pallet count',
                    children: e.count,
                  }),
                  o.jsx(fe, {
                    variant: 'outline',
                    size: 'icon',
                    onClick: r,
                    className:
                      'h-8 w-8 rounded-full bg-white hover:bg-green-50',
                    'aria-label': 'Increment pallet count',
                    children: o.jsx(Fd, {
                      className: 'h-4 w-4 text-green-600',
                      'aria-hidden': 'true',
                    }),
                  }),
                  o.jsx(fe, {
                    variant: (e.isActive, 'outline'),
                    size: 'icon',
                    onClick: a,
                    className: `h-8 w-8 rounded-full ml-2 ${e.isActive ? 'bg-red-50 hover:bg-red-100' : 'bg-green-50 hover:bg-green-100'}`,
                    'aria-label': e.isActive ? 'Stop timer' : 'Start timer',
                    'aria-pressed': e.isActive,
                    children: e.isActive
                      ? o.jsx(tu, {
                          className: 'h-4 w-4 text-red-500',
                          'aria-hidden': 'true',
                        })
                      : o.jsx(Xd, {
                          className: 'h-4 w-4 text-green-600',
                          'aria-hidden': 'true',
                        }),
                  }),
                ],
              }),
            ],
          }),
          o.jsxs('div', {
            className: 'flex items-center justify-between mt-1',
            children: [
              o.jsx('div', {
                className: 'flex items-center',
                children: e.isActive
                  ? o.jsxs('span', {
                      className:
                        'text-xs font-medium text-green-600 animate-pulse',
                      role: 'timer',
                      'aria-live': 'polite',
                      children: ['● Active: ', v],
                    })
                  : e.startTime
                    ? o.jsx('span', {
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
              o.jsxs('div', {
                className: 'flex items-center',
                children: [
                  e.timestamp &&
                    o.jsxs('div', {
                      className: 'flex flex-col items-end text-right',
                      children: [
                        o.jsx('p', {
                          className: 'text-xs text-gray-500',
                          children: w(e.timestamp),
                        }),
                        o.jsx('p', {
                          className: 'text-sm text-gray-600',
                          children: m(e.timestamp),
                        }),
                      ],
                    }),
                  o.jsx(fe, {
                    variant: 'ghost',
                    size: 'icon',
                    onClick: n,
                    className:
                      'text-red-500 hover:text-red-700 hover:bg-red-50 min-w-[44px] min-h-[44px] ml-1',
                    children: o.jsx(ra, { className: 'h-4 w-4' }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  },
  cm = ({ palletEntries: e }) => {
    const [r, t] = h.useState(!1),
      n = () => {
        if (e.length === 0) {
          ce.error('No pallet data to export')
          return
        }
        t(!0)
        try {
          const s = new Date().toISOString().split('T')[0],
            a = new Date()
              .toISOString()
              .split('T')[1]
              .split('.')[0]
              .replace(/:/g, '-'),
            l = `walmart_dc8980_pallets_${s}_${a}.csv`,
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
            d = e.map(c => {
              const x = new Date(c.timestamp),
                f = c.elapsedTime ? Br(c.elapsedTime) : ''
              return [
                c.id,
                c.doorNumber || 0,
                c.count,
                c.startTime || '',
                c.endTime || '',
                f,
                c.timestamp,
                x.toLocaleDateString(),
                x.toLocaleTimeString(),
              ]
            }),
            u = [i.join(','), ...d.map(c => c.join(','))].join(`
`),
            p = new Blob([u], { type: 'text/csv;charset=utf-8;' }),
            g = URL.createObjectURL(p),
            v = document.createElement('a')
          ;((v.href = g),
            (v.download = l),
            document.body.appendChild(v),
            v.click(),
            setTimeout(() => {
              ;(document.body.removeChild(v), URL.revokeObjectURL(g), t(!1))
            }, 100),
            ce.success('CSV export successful!', {
              description: `File saved as ${l}`,
            }))
        } catch (s) {
          ;(console.error('Export error:', s),
            ce.error('Failed to export data', {
              description: 'Please try again or contact support',
            }),
            t(!1))
        }
      }
    return o.jsxs(fe, {
      onClick: n,
      disabled: r,
      className: `mt-4 bg-walmart-yellow text-black hover:bg-walmart-yellow/80 transition-all ${r ? 'animate-pulse' : ''}`,
      children: [
        o.jsx(ta, { className: 'mr-2 h-4 w-4' }),
        r ? 'Exporting...' : 'Export Pallet Data',
      ],
    })
  },
  dm = ({ onAddDoor: e }) => {
    const { settings: r } = Ge(),
      { browserSupportsSpeechRecognition: t } = $r(),
      n = [
        {
          regex:
            /add counter|add pallet|counter|pallet|new pallet|new counter/i,
          commandName: 'add pallet',
        },
      ],
      {
        isListening: s,
        startListening: a,
        stopListening: l,
        transcript: i,
        interimTranscript: d,
        recentCommand: u,
        isProcessing: p,
        isFinal: g,
        getConfidenceColor: v,
      } = Ca({
        commandPatterns: n,
        onCommandRecognized: e,
        speakBackText: 'Pallet counter added',
      })
    if (!r.voiceRecognitionEnabled) return null
    if (!t)
      return o.jsxs(fe, {
        variant: 'outline',
        size: 'sm',
        onClick: () => {
          ce.info('Voice commands not available', {
            description:
              "Use the 'Add Counter' button instead. Voice commands work best in Chrome on desktop.",
            duration: 4e3,
          })
        },
        className: 'gap-2 border-gray-300 text-gray-500 hover:bg-gray-50',
        children: [
          o.jsx(Hn, { className: 'h-4 w-4' }),
          o.jsx(Wd, { className: 'h-3 w-3' }),
        ],
      })
    const c = ['Add counter', 'Add pallet', 'New counter', 'Counter', 'Pallet']
    return o.jsxs('div', {
      className: 'relative flex items-center gap-1',
      children: [
        o.jsx(_a, {
          isListening: s,
          onToggle: s ? l : a,
          label: 'Voice Control',
          stopLabel: 'Stop Listening',
        }),
        o.jsx(ja, { commandType: 'pallet' }),
        o.jsx(ka, {
          isListening: s,
          isProcessing: p,
          interimTranscript: d,
          transcript: i,
          isFinal: g,
          recentCommand: u,
          getConfidenceColor: v,
          helpText: 'Say "Add Pallet" or "Add Counter"',
        }),
        o.jsx(Na, { isListening: s, commandList: c }),
      ],
    })
  },
  bi = () => {
    const {
      palletEntries: e,
      addPalletEntry: r,
      updateCount: t,
      deletePalletEntry: n,
      updateDoorNumber: s,
      toggleTimer: a,
      formatElapsedTime: l,
    } = qp()
    return o.jsxs(et, {
      className:
        'container mx-auto shadow-lg border-t-4 border-t-walmart-yellow transition-all duration-200 hover:shadow-xl',
      children: [
        o.jsx(ht, {
          className: 'bg-gradient-to-r from-gray-50 to-white border-b',
          children: o.jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              o.jsx(tt, {
                className: 'text-2xl font-bold text-walmart-blue',
                children: 'Pallet Counter',
              }),
              o.jsxs('div', {
                className: 'flex gap-2',
                children: [
                  o.jsxs(fe, {
                    onClick: r,
                    size: 'sm',
                    className:
                      'bg-walmart-yellow text-walmart-blue hover:bg-walmart-yellow/90 transition-all duration-300 transform hover:scale-105 min-h-[44px] font-semibold',
                    children: [
                      o.jsx(At, { className: 'h-4 w-4 mr-2' }),
                      'Add Counter',
                    ],
                  }),
                  o.jsx(dm, { onAddDoor: r }),
                  o.jsx(cm, { palletEntries: e }),
                ],
              }),
            ],
          }),
        }),
        o.jsx(pt, {
          className: 'p-6',
          children: o.jsx('div', {
            className: 'space-y-4',
            children:
              e.length === 0
                ? o.jsxs('div', {
                    className:
                      'text-center py-16 px-4 rounded-lg bg-gray-50 border-2 border-dashed border-gray-200',
                    children: [
                      o.jsx('p', {
                        className: 'text-lg font-medium text-gray-600',
                        children: 'No pallet counters added yet',
                      }),
                      o.jsx('p', {
                        className: 'text-sm mt-1 text-gray-500',
                        children:
                          'Click "Add Counter" to get started with pallet counting.',
                      }),
                      o.jsxs(fe, {
                        onClick: r,
                        className:
                          'mt-4 bg-walmart-yellow text-walmart-blue hover:bg-walmart-yellow/90 min-h-[44px] font-semibold',
                        children: [
                          o.jsx(At, { className: 'h-4 w-4 mr-2' }),
                          'Add Your First Counter',
                        ],
                      }),
                    ],
                  })
                : o.jsx('ul', {
                    className:
                      'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4',
                    role: 'list',
                    'data-testid': 'pallet-entry-list',
                    children: e.map(i =>
                      o.jsx(
                        'li',
                        {
                          children: o.jsx(
                            lm,
                            {
                              entry: i,
                              onIncrement: () => t(i.id, !0),
                              onDecrement: () => t(i.id, !1),
                              onDelete: () => n(i.id),
                              onDoorNumberChange: d => s(i.id, d),
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
  um = () => {
    const { currentUser: e, updateUser: r } = rr(),
      [t, n] = h.useState(e.displayName),
      [s, a] = h.useState(!1)
    h.useEffect(() => {
      ;(n(e.displayName), a(!1))
    }, [e.displayName])
    const l = d => {
        ;(n(d.target.value), a(d.target.value !== e.displayName))
      },
      i = () => {
        if (t.trim() === '') {
          ce.error('Display name cannot be empty', {
            description: 'Please enter a valid display name',
          })
          return
        }
        if (
          (r({ ...e, displayName: t.trim() }),
          ce.success('Profile updated', {
            description: 'Your display name has been updated',
          }),
          a(!1),
          'indexedDB' in window)
        ) {
          const d = indexedDB.open('door-ship-flow-db', 1)
          ;((d.onupgradeneeded = u => {
            const p = u.target.result
            p.objectStoreNames.contains('userProfile') ||
              p.createObjectStore('userProfile', { keyPath: 'id' })
          }),
            (d.onsuccess = u => {
              u.target.result
                .transaction(['userProfile'], 'readwrite')
                .objectStore('userProfile')
                .put({ ...e, id: 'currentUser', displayName: t.trim() })
            }))
        }
      }
    return o.jsxs(et, {
      className: 'container mx-auto mb-8 border-walmart-blue',
      children: [
        o.jsx(ht, {
          className: 'border-b bg-walmart-blue bg-opacity-5',
          children: o.jsxs(tt, {
            className: 'flex items-center text-walmart-blue',
            children: [
              o.jsx(ou, { className: 'mr-2 h-5 w-5' }),
              o.jsx('span', { children: 'Profile' }),
            ],
          }),
        }),
        o.jsx(pt, {
          className: 'p-4 space-y-4',
          children: o.jsxs('div', {
            className: 'space-y-2',
            children: [
              o.jsx(je, {
                htmlFor: 'display-name',
                className: 'text-base',
                children: 'Display Name',
              }),
              o.jsxs('div', {
                className: 'flex items-center gap-2',
                children: [
                  o.jsx(ao, {
                    id: 'display-name',
                    value: t,
                    onChange: l,
                    placeholder: 'Enter your display name',
                    className: 'flex-1 min-h-[44px]',
                    'aria-label': 'Your display name',
                  }),
                  o.jsx(fe, {
                    onClick: i,
                    className:
                      'bg-walmart-blue hover:bg-walmart-blue-dark min-h-[44px]',
                    disabled: !s,
                    'aria-label': 'Save display name',
                    children: 'Save',
                  }),
                ],
              }),
              o.jsx('p', {
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
var un = 'rovingFocusGroup.onEntryFocus',
  fm = { bubbles: !1, cancelable: !0 },
  nr = 'RovingFocusGroup',
  [Nn, xi, hm] = jr(nr),
  [pm, Vr] = nt(nr, [hm]),
  [mm, gm] = pm(nr),
  wi = h.forwardRef((e, r) =>
    o.jsx(Nn.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: o.jsx(Nn.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: o.jsx(vm, { ...e, ref: r }),
      }),
    })
  )
wi.displayName = nr
var vm = h.forwardRef((e, r) => {
    const {
        __scopeRovingFocusGroup: t,
        orientation: n,
        loop: s = !1,
        dir: a,
        currentTabStopId: l,
        defaultCurrentTabStopId: i,
        onCurrentTabStopIdChange: d,
        onEntryFocus: u,
        preventScrollOnEntryFocus: p = !1,
        ...g
      } = e,
      v = h.useRef(null),
      c = Ee(r, v),
      x = Rr(a),
      [f, m] = xt({ prop: l, defaultProp: i ?? null, onChange: d, caller: nr }),
      [w, S] = h.useState(!1),
      C = bt(u),
      k = xi(t),
      E = h.useRef(!1),
      [I, T] = h.useState(0)
    return (
      h.useEffect(() => {
        const D = v.current
        if (D)
          return (D.addEventListener(un, C), () => D.removeEventListener(un, C))
      }, [C]),
      o.jsx(mm, {
        scope: t,
        orientation: n,
        dir: x,
        loop: s,
        currentTabStopId: f,
        onItemFocus: h.useCallback(D => m(D), [m]),
        onItemShiftTab: h.useCallback(() => S(!0), []),
        onFocusableItemAdd: h.useCallback(() => T(D => D + 1), []),
        onFocusableItemRemove: h.useCallback(() => T(D => D - 1), []),
        children: o.jsx(Ce.div, {
          tabIndex: w || I === 0 ? -1 : 0,
          'data-orientation': n,
          ...g,
          ref: c,
          style: { outline: 'none', ...e.style },
          onMouseDown: ie(e.onMouseDown, () => {
            E.current = !0
          }),
          onFocus: ie(e.onFocus, D => {
            const R = !E.current
            if (D.target === D.currentTarget && R && !w) {
              const L = new CustomEvent(un, fm)
              if ((D.currentTarget.dispatchEvent(L), !L.defaultPrevented)) {
                const H = k().filter(K => K.focusable),
                  _ = H.find(K => K.active),
                  P = H.find(K => K.id === f),
                  M = [_, P, ...H].filter(Boolean).map(K => K.ref.current)
                Ci(M, p)
              }
            }
            E.current = !1
          }),
          onBlur: ie(e.onBlur, () => S(!1)),
        }),
      })
    )
  }),
  yi = 'RovingFocusGroupItem',
  Si = h.forwardRef((e, r) => {
    const {
        __scopeRovingFocusGroup: t,
        focusable: n = !0,
        active: s = !1,
        tabStopId: a,
        children: l,
        ...i
      } = e,
      d = mn(),
      u = a || d,
      p = gm(yi, t),
      g = p.currentTabStopId === u,
      v = xi(t),
      {
        onFocusableItemAdd: c,
        onFocusableItemRemove: x,
        currentTabStopId: f,
      } = p
    return (
      h.useEffect(() => {
        if (n) return (c(), () => x())
      }, [n, c, x]),
      o.jsx(Nn.ItemSlot, {
        scope: t,
        id: u,
        focusable: n,
        active: s,
        children: o.jsx(Ce.span, {
          tabIndex: g ? 0 : -1,
          'data-orientation': p.orientation,
          ...i,
          ref: r,
          onMouseDown: ie(e.onMouseDown, m => {
            n ? p.onItemFocus(u) : m.preventDefault()
          }),
          onFocus: ie(e.onFocus, () => p.onItemFocus(u)),
          onKeyDown: ie(e.onKeyDown, m => {
            if (m.key === 'Tab' && m.shiftKey) {
              p.onItemShiftTab()
              return
            }
            if (m.target !== m.currentTarget) return
            const w = wm(m, p.orientation, p.dir)
            if (w !== void 0) {
              if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return
              m.preventDefault()
              let C = v()
                .filter(k => k.focusable)
                .map(k => k.ref.current)
              if (w === 'last') C.reverse()
              else if (w === 'prev' || w === 'next') {
                w === 'prev' && C.reverse()
                const k = C.indexOf(m.currentTarget)
                C = p.loop ? ym(C, k + 1) : C.slice(k + 1)
              }
              setTimeout(() => Ci(C))
            }
          }),
          children:
            typeof l == 'function'
              ? l({ isCurrentTabStop: g, hasTabStop: f != null })
              : l,
        }),
      })
    )
  })
Si.displayName = yi
var bm = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
}
function xm(e, r) {
  return r !== 'rtl'
    ? e
    : e === 'ArrowLeft'
      ? 'ArrowRight'
      : e === 'ArrowRight'
        ? 'ArrowLeft'
        : e
}
function wm(e, r, t) {
  const n = xm(e.key, t)
  if (
    !(r === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(n)) &&
    !(r === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(n))
  )
    return bm[n]
}
function Ci(e, r = !1) {
  const t = document.activeElement
  for (const n of e)
    if (
      n === t ||
      (n.focus({ preventScroll: r }), document.activeElement !== t)
    )
      return
}
function ym(e, r) {
  return e.map((t, n) => e[(r + n) % e.length])
}
var _i = wi,
  ki = Si,
  io = 'Radio',
  [Sm, Ni] = nt(io),
  [Cm, _m] = Sm(io),
  Ei = h.forwardRef((e, r) => {
    const {
        __scopeRadio: t,
        name: n,
        checked: s = !1,
        required: a,
        disabled: l,
        value: i = 'on',
        onCheck: d,
        form: u,
        ...p
      } = e,
      [g, v] = h.useState(null),
      c = Ee(r, m => v(m)),
      x = h.useRef(!1),
      f = g ? u || !!g.closest('form') : !0
    return o.jsxs(Cm, {
      scope: t,
      checked: s,
      disabled: l,
      children: [
        o.jsx(Ce.button, {
          type: 'button',
          role: 'radio',
          'aria-checked': s,
          'data-state': Pi(s),
          'data-disabled': l ? '' : void 0,
          disabled: l,
          value: i,
          ...p,
          ref: c,
          onClick: ie(e.onClick, m => {
            ;(s || d == null || d(),
              f &&
                ((x.current = m.isPropagationStopped()),
                x.current || m.stopPropagation()))
          }),
        }),
        f &&
          o.jsx(Ri, {
            control: g,
            bubbles: !x.current,
            name: n,
            value: i,
            checked: s,
            required: a,
            disabled: l,
            form: u,
            style: { transform: 'translateX(-100%)' },
          }),
      ],
    })
  })
Ei.displayName = io
var ji = 'RadioIndicator',
  Ti = h.forwardRef((e, r) => {
    const { __scopeRadio: t, forceMount: n, ...s } = e,
      a = _m(ji, t)
    return o.jsx(wt, {
      present: n || a.checked,
      children: o.jsx(Ce.span, {
        'data-state': Pi(a.checked),
        'data-disabled': a.disabled ? '' : void 0,
        ...s,
        ref: r,
      }),
    })
  })
Ti.displayName = ji
var km = 'RadioBubbleInput',
  Ri = h.forwardRef(
    ({ __scopeRadio: e, control: r, checked: t, bubbles: n = !0, ...s }, a) => {
      const l = h.useRef(null),
        i = Ee(l, a),
        d = Mn(t),
        u = On(r)
      return (
        h.useEffect(() => {
          const p = l.current
          if (!p) return
          const g = window.HTMLInputElement.prototype,
            c = Object.getOwnPropertyDescriptor(g, 'checked').set
          if (d !== t && c) {
            const x = new Event('click', { bubbles: n })
            ;(c.call(p, t), p.dispatchEvent(x))
          }
        }, [d, t, n]),
        o.jsx(Ce.input, {
          type: 'radio',
          'aria-hidden': !0,
          defaultChecked: t,
          ...s,
          tabIndex: -1,
          ref: i,
          style: {
            ...s.style,
            ...u,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0,
          },
        })
      )
    }
  )
Ri.displayName = km
function Pi(e) {
  return e ? 'checked' : 'unchecked'
}
var Nm = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
  Wr = 'RadioGroup',
  [Em, Sv] = nt(Wr, [Vr, Ni]),
  Di = Vr(),
  Ii = Ni(),
  [jm, Tm] = Em(Wr),
  Ai = h.forwardRef((e, r) => {
    const {
        __scopeRadioGroup: t,
        name: n,
        defaultValue: s,
        value: a,
        required: l = !1,
        disabled: i = !1,
        orientation: d,
        dir: u,
        loop: p = !0,
        onValueChange: g,
        ...v
      } = e,
      c = Di(t),
      x = Rr(u),
      [f, m] = xt({ prop: a, defaultProp: s ?? null, onChange: g, caller: Wr })
    return o.jsx(jm, {
      scope: t,
      name: n,
      required: l,
      disabled: i,
      value: f,
      onValueChange: m,
      children: o.jsx(_i, {
        asChild: !0,
        ...c,
        orientation: d,
        dir: x,
        loop: p,
        children: o.jsx(Ce.div, {
          role: 'radiogroup',
          'aria-required': l,
          'aria-orientation': d,
          'data-disabled': i ? '' : void 0,
          dir: x,
          ...v,
          ref: r,
        }),
      }),
    })
  })
Ai.displayName = Wr
var $i = 'RadioGroupItem',
  Mi = h.forwardRef((e, r) => {
    const { __scopeRadioGroup: t, disabled: n, ...s } = e,
      a = Tm($i, t),
      l = a.disabled || n,
      i = Di(t),
      d = Ii(t),
      u = h.useRef(null),
      p = Ee(r, u),
      g = a.value === s.value,
      v = h.useRef(!1)
    return (
      h.useEffect(() => {
        const c = f => {
            Nm.includes(f.key) && (v.current = !0)
          },
          x = () => (v.current = !1)
        return (
          document.addEventListener('keydown', c),
          document.addEventListener('keyup', x),
          () => {
            ;(document.removeEventListener('keydown', c),
              document.removeEventListener('keyup', x))
          }
        )
      }, []),
      o.jsx(ki, {
        asChild: !0,
        ...i,
        focusable: !l,
        active: g,
        children: o.jsx(Ei, {
          disabled: l,
          required: a.required,
          checked: g,
          ...d,
          ...s,
          name: a.name,
          ref: p,
          onCheck: () => a.onValueChange(s.value),
          onKeyDown: ie(c => {
            c.key === 'Enter' && c.preventDefault()
          }),
          onFocus: ie(s.onFocus, () => {
            var c
            v.current && ((c = u.current) == null || c.click())
          }),
        }),
      })
    )
  })
Mi.displayName = $i
var Rm = 'RadioGroupIndicator',
  Oi = h.forwardRef((e, r) => {
    const { __scopeRadioGroup: t, ...n } = e,
      s = Ii(t)
    return o.jsx(Ti, { ...s, ...n, ref: r })
  })
Oi.displayName = Rm
var Li = Ai,
  Fi = Mi,
  Pm = Oi
const zi = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(Li, { className: le('grid gap-2', e), ...r, ref: t })
)
zi.displayName = Li.displayName
const En = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(Fi, {
    ref: t,
    className: le(
      'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      e
    ),
    ...r,
    children: o.jsx(Pm, {
      className: 'flex items-center justify-center',
      children: o.jsx(ea, {
        className: 'h-2.5 w-2.5 fill-current text-current',
      }),
    }),
  })
)
En.displayName = Fi.displayName
var Kr = 'Switch',
  [Dm, Cv] = nt(Kr),
  [Im, Am] = Dm(Kr),
  Bi = h.forwardRef((e, r) => {
    const {
        __scopeSwitch: t,
        name: n,
        checked: s,
        defaultChecked: a,
        required: l,
        disabled: i,
        value: d = 'on',
        onCheckedChange: u,
        form: p,
        ...g
      } = e,
      [v, c] = h.useState(null),
      x = Ee(r, C => c(C)),
      f = h.useRef(!1),
      m = v ? p || !!v.closest('form') : !0,
      [w, S] = xt({ prop: s, defaultProp: a ?? !1, onChange: u, caller: Kr })
    return o.jsxs(Im, {
      scope: t,
      checked: w,
      disabled: i,
      children: [
        o.jsx(Ce.button, {
          type: 'button',
          role: 'switch',
          'aria-checked': w,
          'aria-required': l,
          'data-state': Wi(w),
          'data-disabled': i ? '' : void 0,
          disabled: i,
          value: d,
          ...g,
          ref: x,
          onClick: ie(e.onClick, C => {
            ;(S(k => !k),
              m &&
                ((f.current = C.isPropagationStopped()),
                f.current || C.stopPropagation()))
          }),
        }),
        m &&
          o.jsx(Vi, {
            control: v,
            bubbles: !f.current,
            name: n,
            value: d,
            checked: w,
            required: l,
            disabled: i,
            form: p,
            style: { transform: 'translateX(-100%)' },
          }),
      ],
    })
  })
Bi.displayName = Kr
var Ui = 'SwitchThumb',
  Hi = h.forwardRef((e, r) => {
    const { __scopeSwitch: t, ...n } = e,
      s = Am(Ui, t)
    return o.jsx(Ce.span, {
      'data-state': Wi(s.checked),
      'data-disabled': s.disabled ? '' : void 0,
      ...n,
      ref: r,
    })
  })
Hi.displayName = Ui
var $m = 'SwitchBubbleInput',
  Vi = h.forwardRef(
    (
      { __scopeSwitch: e, control: r, checked: t, bubbles: n = !0, ...s },
      a
    ) => {
      const l = h.useRef(null),
        i = Ee(l, a),
        d = Mn(t),
        u = On(r)
      return (
        h.useEffect(() => {
          const p = l.current
          if (!p) return
          const g = window.HTMLInputElement.prototype,
            c = Object.getOwnPropertyDescriptor(g, 'checked').set
          if (d !== t && c) {
            const x = new Event('click', { bubbles: n })
            ;(c.call(p, t), p.dispatchEvent(x))
          }
        }, [d, t, n]),
        o.jsx('input', {
          type: 'checkbox',
          'aria-hidden': !0,
          defaultChecked: t,
          ...s,
          tabIndex: -1,
          ref: i,
          style: {
            ...s.style,
            ...u,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0,
          },
        })
      )
    }
  )
Vi.displayName = $m
function Wi(e) {
  return e ? 'checked' : 'unchecked'
}
var Ki = Bi,
  Mm = Hi
const ft = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(Ki, {
    className: le(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      e
    ),
    ...r,
    ref: t,
    children: o.jsx(Mm, {
      className: le(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      ),
    }),
  })
)
ft.displayName = Ki.displayName
const Om = () => {
  const { settings: e, updateSetting: r } = Ge(),
    t = s => {
      r('interactionMode', s)
    },
    n = s => {
      r('enableActionButton', s)
    }
  return o.jsxs(et, {
    className: 'mb-6',
    children: [
      o.jsx(ht, {
        className: 'pb-3',
        children: o.jsx(tt, {
          className: 'text-lg font-medium',
          children: 'Interaction Settings',
        }),
      }),
      o.jsxs(pt, {
        className: 'space-y-4',
        children: [
          o.jsxs('div', {
            className: 'space-y-2',
            children: [
              o.jsx(je, {
                htmlFor: 'interaction-mode',
                className: 'text-sm font-medium',
                children: 'Interaction Mode',
              }),
              o.jsxs(zi, {
                id: 'interaction-mode',
                value: e.interactionMode,
                onValueChange: t,
                className: 'flex flex-col space-y-1',
                children: [
                  o.jsxs('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                      o.jsx(En, { value: 'tap', id: 'tap' }),
                      o.jsx(je, {
                        htmlFor: 'tap',
                        className: 'font-normal',
                        children: 'Tap (Standard button interactions)',
                      }),
                    ],
                  }),
                  o.jsxs('div', {
                    className: 'flex items-center space-x-2',
                    children: [
                      o.jsx(En, { value: 'swipe', id: 'swipe' }),
                      o.jsx(je, {
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
          o.jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              o.jsxs('div', {
                className: 'space-y-0.5',
                children: [
                  o.jsx(je, {
                    htmlFor: 'action-button',
                    className: 'text-sm font-medium',
                    children: 'Enable Action Button',
                  }),
                  o.jsx('p', {
                    className: 'text-xs text-muted-foreground',
                    children: 'Show floating action button for quick access',
                  }),
                ],
              }),
              o.jsx(ft, {
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
function Gi(e, [r, t]) {
  return Math.min(t, Math.max(r, e))
}
var Yi = ['PageUp', 'PageDown'],
  Zi = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
  qi = {
    'from-left': ['Home', 'PageDown', 'ArrowDown', 'ArrowLeft'],
    'from-right': ['Home', 'PageDown', 'ArrowDown', 'ArrowRight'],
    'from-bottom': ['Home', 'PageDown', 'ArrowDown', 'ArrowLeft'],
    'from-top': ['Home', 'PageDown', 'ArrowUp', 'ArrowLeft'],
  },
  zt = 'Slider',
  [jn, Lm, Fm] = jr(zt),
  [Xi, _v] = nt(zt, [Fm]),
  [zm, Gr] = Xi(zt),
  Qi = h.forwardRef((e, r) => {
    const {
        name: t,
        min: n = 0,
        max: s = 100,
        step: a = 1,
        orientation: l = 'horizontal',
        disabled: i = !1,
        minStepsBetweenThumbs: d = 0,
        defaultValue: u = [n],
        value: p,
        onValueChange: g = () => {},
        onValueCommit: v = () => {},
        inverted: c = !1,
        form: x,
        ...f
      } = e,
      m = h.useRef(new Set()),
      w = h.useRef(0),
      C = l === 'horizontal' ? Bm : Um,
      [k = [], E] = xt({
        prop: p,
        defaultProp: u,
        onChange: H => {
          var P
          ;((P = [...m.current][w.current]) == null || P.focus(), g(H))
        },
      }),
      I = h.useRef(k)
    function T(H) {
      const _ = Gm(k, H)
      L(H, _)
    }
    function D(H) {
      L(H, w.current)
    }
    function R() {
      const H = I.current[w.current]
      k[w.current] !== H && v(k)
    }
    function L(H, _, { commit: P } = { commit: !1 }) {
      const b = Xm(a),
        M = Qm(Math.round((H - n) / a) * a + n, b),
        K = Gi(M, [n, s])
      E((U = []) => {
        const re = Wm(U, K, _)
        if (qm(re, d * a)) {
          w.current = re.indexOf(K)
          const $ = String(re) !== String(U)
          return ($ && P && v(re), $ ? re : U)
        } else return U
      })
    }
    return o.jsx(zm, {
      scope: e.__scopeSlider,
      name: t,
      disabled: i,
      min: n,
      max: s,
      valueIndexToChangeRef: w,
      thumbs: m.current,
      values: k,
      orientation: l,
      form: x,
      children: o.jsx(jn.Provider, {
        scope: e.__scopeSlider,
        children: o.jsx(jn.Slot, {
          scope: e.__scopeSlider,
          children: o.jsx(C, {
            'aria-disabled': i,
            'data-disabled': i ? '' : void 0,
            ...f,
            ref: r,
            onPointerDown: ie(f.onPointerDown, () => {
              i || (I.current = k)
            }),
            min: n,
            max: s,
            inverted: c,
            onSlideStart: i ? void 0 : T,
            onSlideMove: i ? void 0 : D,
            onSlideEnd: i ? void 0 : R,
            onHomeKeyDown: () => !i && L(n, 0, { commit: !0 }),
            onEndKeyDown: () => !i && L(s, k.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: H, direction: _ }) => {
              if (!i) {
                const M =
                    Yi.includes(H.key) || (H.shiftKey && Zi.includes(H.key))
                      ? 10
                      : 1,
                  K = w.current,
                  U = k[K],
                  re = a * M * _
                L(U + re, K, { commit: !0 })
              }
            },
          }),
        }),
      }),
    })
  })
Qi.displayName = zt
var [Ji, el] = Xi(zt, {
    startEdge: 'left',
    endEdge: 'right',
    size: 'width',
    direction: 1,
  }),
  Bm = h.forwardRef((e, r) => {
    const {
        min: t,
        max: n,
        dir: s,
        inverted: a,
        onSlideStart: l,
        onSlideMove: i,
        onSlideEnd: d,
        onStepKeyDown: u,
        ...p
      } = e,
      [g, v] = h.useState(null),
      c = Ee(r, C => v(C)),
      x = h.useRef(void 0),
      f = Rr(s),
      m = f === 'ltr',
      w = (m && !a) || (!m && a)
    function S(C) {
      const k = x.current || g.getBoundingClientRect(),
        E = [0, k.width],
        T = lo(E, w ? [t, n] : [n, t])
      return ((x.current = k), T(C - k.left))
    }
    return o.jsx(Ji, {
      scope: e.__scopeSlider,
      startEdge: w ? 'left' : 'right',
      endEdge: w ? 'right' : 'left',
      direction: w ? 1 : -1,
      size: 'width',
      children: o.jsx(tl, {
        dir: f,
        'data-orientation': 'horizontal',
        ...p,
        ref: c,
        style: {
          ...p.style,
          '--radix-slider-thumb-transform': 'translateX(-50%)',
        },
        onSlideStart: C => {
          const k = S(C.clientX)
          l == null || l(k)
        },
        onSlideMove: C => {
          const k = S(C.clientX)
          i == null || i(k)
        },
        onSlideEnd: () => {
          ;((x.current = void 0), d == null || d())
        },
        onStepKeyDown: C => {
          const E = qi[w ? 'from-left' : 'from-right'].includes(C.key)
          u == null || u({ event: C, direction: E ? -1 : 1 })
        },
      }),
    })
  }),
  Um = h.forwardRef((e, r) => {
    const {
        min: t,
        max: n,
        inverted: s,
        onSlideStart: a,
        onSlideMove: l,
        onSlideEnd: i,
        onStepKeyDown: d,
        ...u
      } = e,
      p = h.useRef(null),
      g = Ee(r, p),
      v = h.useRef(void 0),
      c = !s
    function x(f) {
      const m = v.current || p.current.getBoundingClientRect(),
        w = [0, m.height],
        C = lo(w, c ? [n, t] : [t, n])
      return ((v.current = m), C(f - m.top))
    }
    return o.jsx(Ji, {
      scope: e.__scopeSlider,
      startEdge: c ? 'bottom' : 'top',
      endEdge: c ? 'top' : 'bottom',
      size: 'height',
      direction: c ? 1 : -1,
      children: o.jsx(tl, {
        'data-orientation': 'vertical',
        ...u,
        ref: g,
        style: {
          ...u.style,
          '--radix-slider-thumb-transform': 'translateY(50%)',
        },
        onSlideStart: f => {
          const m = x(f.clientY)
          a == null || a(m)
        },
        onSlideMove: f => {
          const m = x(f.clientY)
          l == null || l(m)
        },
        onSlideEnd: () => {
          ;((v.current = void 0), i == null || i())
        },
        onStepKeyDown: f => {
          const w = qi[c ? 'from-bottom' : 'from-top'].includes(f.key)
          d == null || d({ event: f, direction: w ? -1 : 1 })
        },
      }),
    })
  }),
  tl = h.forwardRef((e, r) => {
    const {
        __scopeSlider: t,
        onSlideStart: n,
        onSlideMove: s,
        onSlideEnd: a,
        onHomeKeyDown: l,
        onEndKeyDown: i,
        onStepKeyDown: d,
        ...u
      } = e,
      p = Gr(zt, t)
    return o.jsx(Ce.span, {
      ...u,
      ref: r,
      onKeyDown: ie(e.onKeyDown, g => {
        g.key === 'Home'
          ? (l(g), g.preventDefault())
          : g.key === 'End'
            ? (i(g), g.preventDefault())
            : Yi.concat(Zi).includes(g.key) && (d(g), g.preventDefault())
      }),
      onPointerDown: ie(e.onPointerDown, g => {
        const v = g.target
        ;(v.setPointerCapture(g.pointerId),
          g.preventDefault(),
          p.thumbs.has(v) ? v.focus() : n(g))
      }),
      onPointerMove: ie(e.onPointerMove, g => {
        g.target.hasPointerCapture(g.pointerId) && s(g)
      }),
      onPointerUp: ie(e.onPointerUp, g => {
        const v = g.target
        v.hasPointerCapture(g.pointerId) &&
          (v.releasePointerCapture(g.pointerId), a(g))
      }),
    })
  }),
  rl = 'SliderTrack',
  nl = h.forwardRef((e, r) => {
    const { __scopeSlider: t, ...n } = e,
      s = Gr(rl, t)
    return o.jsx(Ce.span, {
      'data-disabled': s.disabled ? '' : void 0,
      'data-orientation': s.orientation,
      ...n,
      ref: r,
    })
  })
nl.displayName = rl
var Tn = 'SliderRange',
  ol = h.forwardRef((e, r) => {
    const { __scopeSlider: t, ...n } = e,
      s = Gr(Tn, t),
      a = el(Tn, t),
      l = h.useRef(null),
      i = Ee(r, l),
      d = s.values.length,
      u = s.values.map(v => il(v, s.min, s.max)),
      p = d > 1 ? Math.min(...u) : 0,
      g = 100 - Math.max(...u)
    return o.jsx(Ce.span, {
      'data-orientation': s.orientation,
      'data-disabled': s.disabled ? '' : void 0,
      ...n,
      ref: i,
      style: { ...e.style, [a.startEdge]: p + '%', [a.endEdge]: g + '%' },
    })
  })
ol.displayName = Tn
var Rn = 'SliderThumb',
  sl = h.forwardRef((e, r) => {
    const t = Lm(e.__scopeSlider),
      [n, s] = h.useState(null),
      a = Ee(r, i => s(i)),
      l = h.useMemo(
        () => (n ? t().findIndex(i => i.ref.current === n) : -1),
        [t, n]
      )
    return o.jsx(Hm, { ...e, ref: a, index: l })
  }),
  Hm = h.forwardRef((e, r) => {
    const { __scopeSlider: t, index: n, name: s, ...a } = e,
      l = Gr(Rn, t),
      i = el(Rn, t),
      [d, u] = h.useState(null),
      p = Ee(r, S => u(S)),
      g = d ? l.form || !!d.closest('form') : !0,
      v = On(d),
      c = l.values[n],
      x = c === void 0 ? 0 : il(c, l.min, l.max),
      f = Km(n, l.values.length),
      m = v == null ? void 0 : v[i.size],
      w = m ? Ym(m, x, i.direction) : 0
    return (
      h.useEffect(() => {
        if (d)
          return (
            l.thumbs.add(d),
            () => {
              l.thumbs.delete(d)
            }
          )
      }, [d, l.thumbs]),
      o.jsxs('span', {
        style: {
          transform: 'var(--radix-slider-thumb-transform)',
          position: 'absolute',
          [i.startEdge]: `calc(${x}% + ${w}px)`,
        },
        children: [
          o.jsx(jn.ItemSlot, {
            scope: e.__scopeSlider,
            children: o.jsx(Ce.span, {
              role: 'slider',
              'aria-label': e['aria-label'] || f,
              'aria-valuemin': l.min,
              'aria-valuenow': c,
              'aria-valuemax': l.max,
              'aria-orientation': l.orientation,
              'data-orientation': l.orientation,
              'data-disabled': l.disabled ? '' : void 0,
              tabIndex: l.disabled ? void 0 : 0,
              ...a,
              ref: p,
              style: c === void 0 ? { display: 'none' } : e.style,
              onFocus: ie(e.onFocus, () => {
                l.valueIndexToChangeRef.current = n
              }),
            }),
          }),
          g &&
            o.jsx(
              al,
              {
                name:
                  s ??
                  (l.name
                    ? l.name + (l.values.length > 1 ? '[]' : '')
                    : void 0),
                form: l.form,
                value: c,
              },
              n
            ),
        ],
      })
    )
  })
sl.displayName = Rn
var Vm = 'RadioBubbleInput',
  al = h.forwardRef(({ __scopeSlider: e, value: r, ...t }, n) => {
    const s = h.useRef(null),
      a = Ee(s, n),
      l = Mn(r)
    return (
      h.useEffect(() => {
        const i = s.current
        if (!i) return
        const d = window.HTMLInputElement.prototype,
          p = Object.getOwnPropertyDescriptor(d, 'value').set
        if (l !== r && p) {
          const g = new Event('input', { bubbles: !0 })
          ;(p.call(i, r), i.dispatchEvent(g))
        }
      }, [l, r]),
      o.jsx(Ce.input, {
        style: { display: 'none' },
        ...t,
        ref: a,
        defaultValue: r,
      })
    )
  })
al.displayName = Vm
function Wm(e = [], r, t) {
  const n = [...e]
  return ((n[t] = r), n.sort((s, a) => s - a))
}
function il(e, r, t) {
  const a = (100 / (t - r)) * (e - r)
  return Gi(a, [0, 100])
}
function Km(e, r) {
  return r > 2
    ? `Value ${e + 1} of ${r}`
    : r === 2
      ? ['Minimum', 'Maximum'][e]
      : void 0
}
function Gm(e, r) {
  if (e.length === 1) return 0
  const t = e.map(s => Math.abs(s - r)),
    n = Math.min(...t)
  return t.indexOf(n)
}
function Ym(e, r, t) {
  const n = e / 2,
    a = lo([0, 50], [0, n])
  return (n - a(r) * t) * t
}
function Zm(e) {
  return e.slice(0, -1).map((r, t) => e[t + 1] - r)
}
function qm(e, r) {
  if (r > 0) {
    const t = Zm(e)
    return Math.min(...t) >= r
  }
  return !0
}
function lo(e, r) {
  return t => {
    if (e[0] === e[1] || r[0] === r[1]) return r[0]
    const n = (r[1] - r[0]) / (e[1] - e[0])
    return r[0] + n * (t - e[0])
  }
}
function Xm(e) {
  return (String(e).split('.')[1] || '').length
}
function Qm(e, r) {
  const t = Math.pow(10, r)
  return Math.round(e * t) / t
}
var ll = Qi,
  Jm = nl,
  eg = ol,
  tg = sl
const Pn = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsxs(ll, {
    ref: t,
    className: le(
      'relative flex w-full touch-none select-none items-center',
      e
    ),
    ...r,
    children: [
      o.jsx(Jm, {
        className:
          'relative h-2 w-full grow overflow-hidden rounded-full bg-secondary',
        children: o.jsx(eg, { className: 'absolute h-full bg-primary' }),
      }),
      o.jsx(tg, {
        className:
          'block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      }),
    ],
  })
)
Pn.displayName = ll.displayName
const rg = () => {
    const { settings: e, updateSetting: r } = Ge()
    $r({})
    const [t, n] = h.useState(!1),
      s = (a, l) => {
        ;(r(a, l),
          ce.success(`${String(a)} preference saved!`, {
            description:
              'Your setting will be remembered next time you use the app',
            duration: 2e3,
          }))
      }
    return o.jsxs('div', {
      className: 'pt-4 border-t mt-4',
      children: [
        o.jsxs('div', {
          className: 'flex items-center mb-2',
          children: [
            o.jsx(Ot, { className: 'mr-2 h-4 w-4 text-walmart-blue' }),
            o.jsx(je, { className: 'text-base', children: 'Voice Commands' }),
          ],
        }),
        o.jsxs('div', {
          className: 'flex items-center space-x-2 mt-4',
          children: [
            o.jsx(ft, {
              id: 'voice-enabled',
              checked: e.voiceRecognitionEnabled !== !1,
              onCheckedChange: a => s('voiceRecognitionEnabled', a),
            }),
            o.jsx(je, {
              htmlFor: 'voice-enabled',
              children: 'Enable Voice Commands',
            }),
          ],
        }),
        e.voiceRecognitionEnabled !== !1 &&
          o.jsxs('div', {
            className: 'mt-4 pl-6 space-y-4',
            children: [
              o.jsxs('div', {
                children: [
                  o.jsx(je, {
                    htmlFor: 'voice-activation-mode',
                    className: 'text-sm block mb-2',
                    children: 'Activation Mode',
                  }),
                  o.jsxs(Dt, {
                    value: e.voiceActivationMode || 'button',
                    onValueChange: a => s('voiceActivationMode', a),
                    children: [
                      o.jsx(gt, {
                        id: 'voice-activation-mode',
                        className: 'w-[200px]',
                        children: o.jsx(It, { placeholder: 'Select mode' }),
                      }),
                      o.jsxs(vt, {
                        children: [
                          o.jsx(Ke, {
                            value: 'button',
                            children: 'Button Press (Default)',
                          }),
                          o.jsx(Ke, {
                            value: 'continuous',
                            children: 'Continuous',
                          }),
                          o.jsx(Ke, {
                            value: 'hotword',
                            children: 'Hotword ("Add Door")',
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx('p', {
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
              o.jsxs('div', {
                children: [
                  o.jsx(je, {
                    htmlFor: 'voice-engine',
                    className: 'text-sm block mb-2',
                    children: 'Voice Recognition Engine',
                  }),
                  o.jsxs(Dt, {
                    value: e.voiceEngine || 'browser',
                    onValueChange: a => s('voiceEngine', a),
                    children: [
                      o.jsx(gt, {
                        id: 'voice-engine',
                        className: 'w-[200px]',
                        children: o.jsx(It, { placeholder: 'Select engine' }),
                      }),
                      o.jsx(vt, {
                        children: o.jsx(Ke, {
                          value: 'browser',
                          children: 'Browser (Default)',
                        }),
                      }),
                    ],
                  }),
                  o.jsx('p', {
                    className: 'text-xs text-muted-foreground mt-1',
                    children:
                      'Browser-based speech recognition works online and provides good accuracy.',
                  }),
                ],
              }),
              o.jsxs('div', {
                className: 'flex items-center space-x-2',
                children: [
                  o.jsx(ft, {
                    id: 'noise-suppression',
                    checked: e.noiseSuppression !== !1,
                    onCheckedChange: a => s('noiseSuppression', a),
                  }),
                  o.jsx(je, {
                    htmlFor: 'noise-suppression',
                    className: 'text-sm',
                    children: 'Noise Suppression',
                  }),
                ],
              }),
              o.jsxs('div', {
                className: 'flex items-center space-x-2',
                children: [
                  o.jsx(ft, {
                    id: 'auto-stop',
                    checked: e.autoStop !== !1,
                    onCheckedChange: a => s('autoStop', a),
                  }),
                  o.jsx(je, {
                    htmlFor: 'auto-stop',
                    className: 'text-sm',
                    children: 'Auto-stop on Success',
                  }),
                ],
              }),
              o.jsxs('div', {
                className: 'flex items-center space-x-2',
                children: [
                  o.jsx(ft, {
                    id: 'partial-results',
                    checked: e.voiceAcceptPartialResults !== !1,
                    onCheckedChange: a => s('voiceAcceptPartialResults', a),
                  }),
                  o.jsx(je, {
                    htmlFor: 'partial-results',
                    className: 'text-sm',
                    children: 'Accept Partial Results (Faster Response)',
                  }),
                ],
              }),
              o.jsx('p', {
                className: 'text-xs text-muted-foreground mt-1 ml-6',
                children:
                  'Process commands before speech is complete (may increase errors)',
              }),
              o.jsxs('div', {
                children: [
                  o.jsx(je, {
                    htmlFor: 'confidence-threshold',
                    className: 'text-sm block mb-2',
                    children: 'Confidence Threshold',
                  }),
                  o.jsx(Pn, {
                    id: 'confidence-threshold',
                    min: 0.5,
                    max: 1,
                    step: 0.05,
                    value: [e.confidenceThreshold || 0.75],
                    onValueChange: ([a]) => s('confidenceThreshold', a),
                    className: 'w-[200px]',
                  }),
                  o.jsx('p', {
                    className: 'text-xs text-muted-foreground mt-1',
                    children:
                      'Higher values reduce errors but may require clearer speech',
                  }),
                ],
              }),
              o.jsxs('div', {
                className: 'flex items-center space-x-2 mt-2 pt-2 border-t',
                children: [
                  o.jsx(ft, {
                    id: 'speak-back',
                    checked: e.speakBackCommands === !0,
                    onCheckedChange: a => s('speakBackCommands', a),
                  }),
                  o.jsx(je, {
                    htmlFor: 'speak-back',
                    className: 'text-sm',
                    children: 'Voice Feedback',
                  }),
                ],
              }),
              e.speakBackCommands &&
                o.jsx('div', {
                  className: 'pl-6 space-y-4',
                  children: o.jsxs('div', {
                    children: [
                      o.jsxs('div', {
                        className: 'flex items-center justify-between mb-2',
                        children: [
                          o.jsx(je, {
                            htmlFor: 'voice-volume',
                            className: 'text-sm',
                            children: 'Voice Volume',
                          }),
                          o.jsxs('span', {
                            className: 'text-xs text-muted-foreground',
                            children: [
                              Math.round((e.voiceVolume || 0.8) * 100),
                              '%',
                            ],
                          }),
                        ],
                      }),
                      o.jsx(Pn, {
                        id: 'voice-volume',
                        defaultValue: [(e.voiceVolume || 0.8) * 100],
                        max: 100,
                        step: 5,
                        onValueChange: a => s('voiceVolume', a[0] / 100),
                        className: 'w-full',
                        'aria-label': 'Voice volume control',
                      }),
                    ],
                  }),
                }),
            ],
          }),
        o.jsxs(vs, {
          open: t,
          onOpenChange: n,
          className: 'mt-4 pt-2',
          children: [
            o.jsx(Wc, {
              asChild: !0,
              children: o.jsxs('button', {
                type: 'button',
                className:
                  'text-xs px-3 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 transition-colors duration-200',
                children: [
                  o.jsx('span', {
                    children: t
                      ? 'Hide Advanced Settings'
                      : 'Show Advanced Settings',
                  }),
                  o.jsx(Un, {
                    className: `h-4 w-4 transition-transform duration-300 ease-in-out ${t ? 'transform rotate-180' : ''}`,
                  }),
                ],
              }),
            }),
            o.jsx(Kc, {
              className:
                'overflow-hidden transition-all duration-300 ease-in-out',
              children: o.jsxs('div', {
                className: `mt-4 space-y-3 border-t pt-4 transform transition-transform duration-300 ease-in-out ${t ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`,
                children: [
                  o.jsx('p', {
                    className: 'text-sm font-medium',
                    children: 'Advanced Voice Settings',
                  }),
                  o.jsxs('div', {
                    className:
                      'flex items-center justify-between animate-in fade-in slide-in-from-left-5 duration-300',
                    children: [
                      o.jsx(je, {
                        htmlFor: 'command-timeout',
                        className: 'text-sm',
                        children: 'Command Timeout',
                      }),
                      o.jsxs(Dt, {
                        value: String(e.commandTimeout || 3e3),
                        onValueChange: a => s('commandTimeout', parseInt(a)),
                        children: [
                          o.jsx(gt, {
                            id: 'command-timeout',
                            className: 'w-[120px] text-sm h-8',
                            children: o.jsx(It, {}),
                          }),
                          o.jsxs(vt, {
                            children: [
                              o.jsx(Ke, {
                                value: '2000',
                                children: '2 seconds',
                              }),
                              o.jsx(Ke, {
                                value: '3000',
                                children: '3 seconds',
                              }),
                              o.jsx(Ke, {
                                value: '5000',
                                children: '5 seconds',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs('div', {
                    className:
                      'flex items-center space-x-2 animate-in fade-in slide-in-from-left-5 duration-300 delay-100',
                    children: [
                      o.jsx(ft, {
                        id: 'use-grammar',
                        checked: e.useGrammar !== !1,
                        onCheckedChange: a => s('useGrammar', a),
                      }),
                      o.jsx(je, {
                        htmlFor: 'use-grammar',
                        className: 'text-sm',
                        children: 'Use Custom Grammar',
                      }),
                    ],
                  }),
                  o.jsx('p', {
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
  ng = () => {
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
          ce.success('Settings reset to defaults', {
            description: 'Your preferences have been reset',
          }))
      }
    return o.jsxs('div', {
      className: 'space-y-8',
      children: [
        o.jsx(um, {}),
        o.jsxs(et, {
          className: 'container mx-auto mb-8 border-walmart-blue',
          children: [
            o.jsx(ht, {
              className: 'border-b bg-walmart-blue bg-opacity-5',
              children: o.jsxs(tt, {
                className: 'flex items-center text-walmart-blue',
                children: [
                  o.jsx(Jd, { className: 'mr-2 h-5 w-5' }),
                  o.jsx('span', { children: 'Interaction Preferences' }),
                ],
              }),
            }),
            o.jsxs(pt, {
              className: 'p-4 space-y-6',
              children: [
                o.jsxs('div', {
                  className: 'space-y-2',
                  children: [o.jsx(Om, {}), o.jsx(rg, {})],
                }),
                o.jsx('div', {
                  children: o.jsx(fe, {
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
var Dn = ['Enter', ' '],
  og = ['ArrowDown', 'PageUp', 'Home'],
  cl = ['ArrowUp', 'PageDown', 'End'],
  sg = [...og, ...cl],
  ag = { ltr: [...Dn, 'ArrowRight'], rtl: [...Dn, 'ArrowLeft'] },
  ig = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
  or = 'Menu',
  [Xt, lg, cg] = jr(or),
  [Ct, dl] = nt(or, [cg, Tr, Vr]),
  Yr = Tr(),
  ul = Vr(),
  [dg, _t] = Ct(or),
  [ug, sr] = Ct(or),
  fl = e => {
    const {
        __scopeMenu: r,
        open: t = !1,
        children: n,
        dir: s,
        onOpenChange: a,
        modal: l = !0,
      } = e,
      i = Yr(r),
      [d, u] = h.useState(null),
      p = h.useRef(!1),
      g = bt(a),
      v = Rr(s)
    return (
      h.useEffect(() => {
        const c = () => {
            ;((p.current = !0),
              document.addEventListener('pointerdown', x, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener('pointermove', x, {
                capture: !0,
                once: !0,
              }))
          },
          x = () => (p.current = !1)
        return (
          document.addEventListener('keydown', c, { capture: !0 }),
          () => {
            ;(document.removeEventListener('keydown', c, { capture: !0 }),
              document.removeEventListener('pointerdown', x, { capture: !0 }),
              document.removeEventListener('pointermove', x, { capture: !0 }))
          }
        )
      }, []),
      o.jsx(Ss, {
        ...i,
        children: o.jsx(dg, {
          scope: r,
          open: t,
          onOpenChange: g,
          content: d,
          onContentChange: u,
          children: o.jsx(ug, {
            scope: r,
            onClose: h.useCallback(() => g(!1), [g]),
            isUsingKeyboardRef: p,
            dir: v,
            modal: l,
            children: n,
          }),
        }),
      })
    )
  }
fl.displayName = or
var fg = 'MenuAnchor',
  co = h.forwardRef((e, r) => {
    const { __scopeMenu: t, ...n } = e,
      s = Yr(t)
    return o.jsx(Cs, { ...s, ...n, ref: r })
  })
co.displayName = fg
var uo = 'MenuPortal',
  [hg, hl] = Ct(uo, { forceMount: void 0 }),
  pl = e => {
    const { __scopeMenu: r, forceMount: t, children: n, container: s } = e,
      a = _t(uo, r)
    return o.jsx(hg, {
      scope: r,
      forceMount: t,
      children: o.jsx(wt, {
        present: t || a.open,
        children: o.jsx(ds, { asChild: !0, container: s, children: n }),
      }),
    })
  }
pl.displayName = uo
var Le = 'MenuContent',
  [pg, fo] = Ct(Le),
  ml = h.forwardRef((e, r) => {
    const t = hl(Le, e.__scopeMenu),
      { forceMount: n = t.forceMount, ...s } = e,
      a = _t(Le, e.__scopeMenu),
      l = sr(Le, e.__scopeMenu)
    return o.jsx(Xt.Provider, {
      scope: e.__scopeMenu,
      children: o.jsx(wt, {
        present: n || a.open,
        children: o.jsx(Xt.Slot, {
          scope: e.__scopeMenu,
          children: l.modal
            ? o.jsx(mg, { ...s, ref: r })
            : o.jsx(gg, { ...s, ref: r }),
        }),
      }),
    })
  }),
  mg = h.forwardRef((e, r) => {
    const t = _t(Le, e.__scopeMenu),
      n = h.useRef(null),
      s = Ee(r, n)
    return (
      h.useEffect(() => {
        const a = n.current
        if (a) return bs(a)
      }, []),
      o.jsx(ho, {
        ...e,
        ref: s,
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
  gg = h.forwardRef((e, r) => {
    const t = _t(Le, e.__scopeMenu)
    return o.jsx(ho, {
      ...e,
      ref: r,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1),
    })
  }),
  vg = Zc('MenuContent.ScrollLock'),
  ho = h.forwardRef((e, r) => {
    const {
        __scopeMenu: t,
        loop: n = !1,
        trapFocus: s,
        onOpenAutoFocus: a,
        onCloseAutoFocus: l,
        disableOutsidePointerEvents: i,
        onEntryFocus: d,
        onEscapeKeyDown: u,
        onPointerDownOutside: p,
        onFocusOutside: g,
        onInteractOutside: v,
        onDismiss: c,
        disableOutsideScroll: x,
        ...f
      } = e,
      m = _t(Le, t),
      w = sr(Le, t),
      S = Yr(t),
      C = ul(t),
      k = lg(t),
      [E, I] = h.useState(null),
      T = h.useRef(null),
      D = Ee(r, T, m.onContentChange),
      R = h.useRef(0),
      L = h.useRef(''),
      H = h.useRef(0),
      _ = h.useRef(null),
      P = h.useRef('right'),
      b = h.useRef(0),
      M = x ? Yc : h.Fragment,
      K = x ? { as: vg, allowPinchZoom: !0 } : void 0,
      U = $ => {
        var J, ne
        const ee = L.current + $,
          F = k().filter(ae => !ae.disabled),
          A = document.activeElement,
          Q =
            (J = F.find(ae => ae.ref.current === A)) == null
              ? void 0
              : J.textValue,
          G = F.map(ae => ae.textValue),
          Y = Tg(G, ee, Q),
          he =
            (ne = F.find(ae => ae.textValue === Y)) == null
              ? void 0
              : ne.ref.current
        ;((function ae(ue) {
          ;((L.current = ue),
            window.clearTimeout(R.current),
            ue !== '' && (R.current = window.setTimeout(() => ae(''), 1e3)))
        })(ee),
          he && setTimeout(() => he.focus()))
      }
    ;(h.useEffect(() => () => window.clearTimeout(R.current), []), Gc())
    const re = h.useCallback($ => {
      var F, A
      return (
        P.current === ((F = _.current) == null ? void 0 : F.side) &&
        Pg($, (A = _.current) == null ? void 0 : A.area)
      )
    }, [])
    return o.jsx(pg, {
      scope: t,
      searchRef: L,
      onItemEnter: h.useCallback(
        $ => {
          re($) && $.preventDefault()
        },
        [re]
      ),
      onItemLeave: h.useCallback(
        $ => {
          var ee
          re($) || ((ee = T.current) == null || ee.focus(), I(null))
        },
        [re]
      ),
      onTriggerLeave: h.useCallback(
        $ => {
          re($) && $.preventDefault()
        },
        [re]
      ),
      pointerGraceTimerRef: H,
      onPointerGraceIntentChange: h.useCallback($ => {
        _.current = $
      }, []),
      children: o.jsx(M, {
        ...K,
        children: o.jsx(qc, {
          asChild: !0,
          trapped: s,
          onMountAutoFocus: ie(a, $ => {
            var ee
            ;($.preventDefault(),
              (ee = T.current) == null || ee.focus({ preventScroll: !0 }))
          }),
          onUnmountAutoFocus: l,
          children: o.jsx(ws, {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: u,
            onPointerDownOutside: p,
            onFocusOutside: g,
            onInteractOutside: v,
            onDismiss: c,
            children: o.jsx(_i, {
              asChild: !0,
              ...C,
              dir: w.dir,
              orientation: 'vertical',
              loop: n,
              currentTabStopId: E,
              onCurrentTabStopIdChange: I,
              onEntryFocus: ie(d, $ => {
                w.isUsingKeyboardRef.current || $.preventDefault()
              }),
              preventScrollOnEntryFocus: !0,
              children: o.jsx(ys, {
                role: 'menu',
                'aria-orientation': 'vertical',
                'data-state': Pl(m.open),
                'data-radix-menu-content': '',
                dir: w.dir,
                ...S,
                ...f,
                ref: D,
                style: { outline: 'none', ...f.style },
                onKeyDown: ie(f.onKeyDown, $ => {
                  const F =
                      $.target.closest('[data-radix-menu-content]') ===
                      $.currentTarget,
                    A = $.ctrlKey || $.altKey || $.metaKey,
                    Q = $.key.length === 1
                  F &&
                    ($.key === 'Tab' && $.preventDefault(), !A && Q && U($.key))
                  const G = T.current
                  if ($.target !== G || !sg.includes($.key)) return
                  $.preventDefault()
                  const he = k()
                    .filter(J => !J.disabled)
                    .map(J => J.ref.current)
                  ;(cl.includes($.key) && he.reverse(), Eg(he))
                }),
                onBlur: ie(e.onBlur, $ => {
                  $.currentTarget.contains($.target) ||
                    (window.clearTimeout(R.current), (L.current = ''))
                }),
                onPointerMove: ie(
                  e.onPointerMove,
                  Qt($ => {
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
ml.displayName = Le
var bg = 'MenuGroup',
  po = h.forwardRef((e, r) => {
    const { __scopeMenu: t, ...n } = e
    return o.jsx(Ce.div, { role: 'group', ...n, ref: r })
  })
po.displayName = bg
var xg = 'MenuLabel',
  gl = h.forwardRef((e, r) => {
    const { __scopeMenu: t, ...n } = e
    return o.jsx(Ce.div, { ...n, ref: r })
  })
gl.displayName = xg
var Nr = 'MenuItem',
  Jo = 'menu.itemSelect',
  Zr = h.forwardRef((e, r) => {
    const { disabled: t = !1, onSelect: n, ...s } = e,
      a = h.useRef(null),
      l = sr(Nr, e.__scopeMenu),
      i = fo(Nr, e.__scopeMenu),
      d = Ee(r, a),
      u = h.useRef(!1),
      p = () => {
        const g = a.current
        if (!t && g) {
          const v = new CustomEvent(Jo, { bubbles: !0, cancelable: !0 })
          ;(g.addEventListener(Jo, c => (n == null ? void 0 : n(c)), {
            once: !0,
          }),
            us(g, v),
            v.defaultPrevented ? (u.current = !1) : l.onClose())
        }
      }
    return o.jsx(vl, {
      ...s,
      ref: d,
      disabled: t,
      onClick: ie(e.onClick, p),
      onPointerDown: g => {
        var v
        ;((v = e.onPointerDown) == null || v.call(e, g), (u.current = !0))
      },
      onPointerUp: ie(e.onPointerUp, g => {
        var v
        u.current || (v = g.currentTarget) == null || v.click()
      }),
      onKeyDown: ie(e.onKeyDown, g => {
        const v = i.searchRef.current !== ''
        t ||
          (v && g.key === ' ') ||
          (Dn.includes(g.key) && (g.currentTarget.click(), g.preventDefault()))
      }),
    })
  })
Zr.displayName = Nr
var vl = h.forwardRef((e, r) => {
    const { __scopeMenu: t, disabled: n = !1, textValue: s, ...a } = e,
      l = fo(Nr, t),
      i = ul(t),
      d = h.useRef(null),
      u = Ee(r, d),
      [p, g] = h.useState(!1),
      [v, c] = h.useState('')
    return (
      h.useEffect(() => {
        const x = d.current
        x && c((x.textContent ?? '').trim())
      }, [a.children]),
      o.jsx(Xt.ItemSlot, {
        scope: t,
        disabled: n,
        textValue: s ?? v,
        children: o.jsx(ki, {
          asChild: !0,
          ...i,
          focusable: !n,
          children: o.jsx(Ce.div, {
            role: 'menuitem',
            'data-highlighted': p ? '' : void 0,
            'aria-disabled': n || void 0,
            'data-disabled': n ? '' : void 0,
            ...a,
            ref: u,
            onPointerMove: ie(
              e.onPointerMove,
              Qt(x => {
                n
                  ? l.onItemLeave(x)
                  : (l.onItemEnter(x),
                    x.defaultPrevented ||
                      x.currentTarget.focus({ preventScroll: !0 }))
              })
            ),
            onPointerLeave: ie(
              e.onPointerLeave,
              Qt(x => l.onItemLeave(x))
            ),
            onFocus: ie(e.onFocus, () => g(!0)),
            onBlur: ie(e.onBlur, () => g(!1)),
          }),
        }),
      })
    )
  }),
  wg = 'MenuCheckboxItem',
  bl = h.forwardRef((e, r) => {
    const { checked: t = !1, onCheckedChange: n, ...s } = e
    return o.jsx(Cl, {
      scope: e.__scopeMenu,
      checked: t,
      children: o.jsx(Zr, {
        role: 'menuitemcheckbox',
        'aria-checked': Er(t) ? 'mixed' : t,
        ...s,
        ref: r,
        'data-state': go(t),
        onSelect: ie(
          s.onSelect,
          () => (n == null ? void 0 : n(Er(t) ? !0 : !t)),
          { checkForDefaultPrevented: !1 }
        ),
      }),
    })
  })
bl.displayName = wg
var xl = 'MenuRadioGroup',
  [yg, Sg] = Ct(xl, { value: void 0, onValueChange: () => {} }),
  wl = h.forwardRef((e, r) => {
    const { value: t, onValueChange: n, ...s } = e,
      a = bt(n)
    return o.jsx(yg, {
      scope: e.__scopeMenu,
      value: t,
      onValueChange: a,
      children: o.jsx(po, { ...s, ref: r }),
    })
  })
wl.displayName = xl
var yl = 'MenuRadioItem',
  Sl = h.forwardRef((e, r) => {
    const { value: t, ...n } = e,
      s = Sg(yl, e.__scopeMenu),
      a = t === s.value
    return o.jsx(Cl, {
      scope: e.__scopeMenu,
      checked: a,
      children: o.jsx(Zr, {
        role: 'menuitemradio',
        'aria-checked': a,
        ...n,
        ref: r,
        'data-state': go(a),
        onSelect: ie(
          n.onSelect,
          () => {
            var l
            return (l = s.onValueChange) == null ? void 0 : l.call(s, t)
          },
          { checkForDefaultPrevented: !1 }
        ),
      }),
    })
  })
Sl.displayName = yl
var mo = 'MenuItemIndicator',
  [Cl, Cg] = Ct(mo, { checked: !1 }),
  _l = h.forwardRef((e, r) => {
    const { __scopeMenu: t, forceMount: n, ...s } = e,
      a = Cg(mo, t)
    return o.jsx(wt, {
      present: n || Er(a.checked) || a.checked === !0,
      children: o.jsx(Ce.span, { ...s, ref: r, 'data-state': go(a.checked) }),
    })
  })
_l.displayName = mo
var _g = 'MenuSeparator',
  kl = h.forwardRef((e, r) => {
    const { __scopeMenu: t, ...n } = e
    return o.jsx(Ce.div, {
      role: 'separator',
      'aria-orientation': 'horizontal',
      ...n,
      ref: r,
    })
  })
kl.displayName = _g
var kg = 'MenuArrow',
  Nl = h.forwardRef((e, r) => {
    const { __scopeMenu: t, ...n } = e,
      s = Yr(t)
    return o.jsx(_s, { ...s, ...n, ref: r })
  })
Nl.displayName = kg
var Ng = 'MenuSub',
  [kv, El] = Ct(Ng),
  Gt = 'MenuSubTrigger',
  jl = h.forwardRef((e, r) => {
    const t = _t(Gt, e.__scopeMenu),
      n = sr(Gt, e.__scopeMenu),
      s = El(Gt, e.__scopeMenu),
      a = fo(Gt, e.__scopeMenu),
      l = h.useRef(null),
      { pointerGraceTimerRef: i, onPointerGraceIntentChange: d } = a,
      u = { __scopeMenu: e.__scopeMenu },
      p = h.useCallback(() => {
        ;(l.current && window.clearTimeout(l.current), (l.current = null))
      }, [])
    return (
      h.useEffect(() => p, [p]),
      h.useEffect(() => {
        const g = i.current
        return () => {
          ;(window.clearTimeout(g), d(null))
        }
      }, [i, d]),
      o.jsx(co, {
        asChild: !0,
        ...u,
        children: o.jsx(vl, {
          id: s.triggerId,
          'aria-haspopup': 'menu',
          'aria-expanded': t.open,
          'aria-controls': s.contentId,
          'data-state': Pl(t.open),
          ...e,
          ref: ks(r, s.onTriggerChange),
          onClick: g => {
            var v
            ;((v = e.onClick) == null || v.call(e, g),
              !(e.disabled || g.defaultPrevented) &&
                (g.currentTarget.focus(), t.open || t.onOpenChange(!0)))
          },
          onPointerMove: ie(
            e.onPointerMove,
            Qt(g => {
              ;(a.onItemEnter(g),
                !g.defaultPrevented &&
                  !e.disabled &&
                  !t.open &&
                  !l.current &&
                  (a.onPointerGraceIntentChange(null),
                  (l.current = window.setTimeout(() => {
                    ;(t.onOpenChange(!0), p())
                  }, 100))))
            })
          ),
          onPointerLeave: ie(
            e.onPointerLeave,
            Qt(g => {
              var c, x
              p()
              const v =
                (c = t.content) == null ? void 0 : c.getBoundingClientRect()
              if (v) {
                const f = (x = t.content) == null ? void 0 : x.dataset.side,
                  m = f === 'right',
                  w = m ? -5 : 5,
                  S = v[m ? 'left' : 'right'],
                  C = v[m ? 'right' : 'left']
                ;(a.onPointerGraceIntentChange({
                  area: [
                    { x: g.clientX + w, y: g.clientY },
                    { x: S, y: v.top },
                    { x: C, y: v.top },
                    { x: C, y: v.bottom },
                    { x: S, y: v.bottom },
                  ],
                  side: f,
                }),
                  window.clearTimeout(i.current),
                  (i.current = window.setTimeout(
                    () => a.onPointerGraceIntentChange(null),
                    300
                  )))
              } else {
                if ((a.onTriggerLeave(g), g.defaultPrevented)) return
                a.onPointerGraceIntentChange(null)
              }
            })
          ),
          onKeyDown: ie(e.onKeyDown, g => {
            var c
            const v = a.searchRef.current !== ''
            e.disabled ||
              (v && g.key === ' ') ||
              (ag[n.dir].includes(g.key) &&
                (t.onOpenChange(!0),
                (c = t.content) == null || c.focus(),
                g.preventDefault()))
          }),
        }),
      })
    )
  })
jl.displayName = Gt
var Tl = 'MenuSubContent',
  Rl = h.forwardRef((e, r) => {
    const t = hl(Le, e.__scopeMenu),
      { forceMount: n = t.forceMount, ...s } = e,
      a = _t(Le, e.__scopeMenu),
      l = sr(Le, e.__scopeMenu),
      i = El(Tl, e.__scopeMenu),
      d = h.useRef(null),
      u = Ee(r, d)
    return o.jsx(Xt.Provider, {
      scope: e.__scopeMenu,
      children: o.jsx(wt, {
        present: n || a.open,
        children: o.jsx(Xt.Slot, {
          scope: e.__scopeMenu,
          children: o.jsx(ho, {
            id: i.contentId,
            'aria-labelledby': i.triggerId,
            ...s,
            ref: u,
            align: 'start',
            side: l.dir === 'rtl' ? 'left' : 'right',
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: p => {
              var g
              ;(l.isUsingKeyboardRef.current &&
                ((g = d.current) == null || g.focus()),
                p.preventDefault())
            },
            onCloseAutoFocus: p => p.preventDefault(),
            onFocusOutside: ie(e.onFocusOutside, p => {
              p.target !== i.trigger && a.onOpenChange(!1)
            }),
            onEscapeKeyDown: ie(e.onEscapeKeyDown, p => {
              ;(l.onClose(), p.preventDefault())
            }),
            onKeyDown: ie(e.onKeyDown, p => {
              var c
              const g = p.currentTarget.contains(p.target),
                v = ig[l.dir].includes(p.key)
              g &&
                v &&
                (a.onOpenChange(!1),
                (c = i.trigger) == null || c.focus(),
                p.preventDefault())
            }),
          }),
        }),
      }),
    })
  })
Rl.displayName = Tl
function Pl(e) {
  return e ? 'open' : 'closed'
}
function Er(e) {
  return e === 'indeterminate'
}
function go(e) {
  return Er(e) ? 'indeterminate' : e ? 'checked' : 'unchecked'
}
function Eg(e) {
  const r = document.activeElement
  for (const t of e)
    if (t === r || (t.focus(), document.activeElement !== r)) return
}
function jg(e, r) {
  return e.map((t, n) => e[(r + n) % e.length])
}
function Tg(e, r, t) {
  const s = r.length > 1 && Array.from(r).every(u => u === r[0]) ? r[0] : r,
    a = t ? e.indexOf(t) : -1
  let l = jg(e, Math.max(a, 0))
  s.length === 1 && (l = l.filter(u => u !== t))
  const d = l.find(u => u.toLowerCase().startsWith(s.toLowerCase()))
  return d !== t ? d : void 0
}
function Rg(e, r) {
  const { x: t, y: n } = e
  let s = !1
  for (let a = 0, l = r.length - 1; a < r.length; l = a++) {
    const i = r[a],
      d = r[l],
      u = i.x,
      p = i.y,
      g = d.x,
      v = d.y
    p > n != v > n && t < ((g - u) * (n - p)) / (v - p) + u && (s = !s)
  }
  return s
}
function Pg(e, r) {
  if (!r) return !1
  const t = { x: e.clientX, y: e.clientY }
  return Rg(t, r)
}
function Qt(e) {
  return r => (r.pointerType === 'mouse' ? e(r) : void 0)
}
var Dg = fl,
  Ig = co,
  Ag = pl,
  $g = ml,
  Mg = po,
  Og = gl,
  Lg = Zr,
  Fg = bl,
  zg = wl,
  Bg = Sl,
  Ug = _l,
  Hg = kl,
  Vg = Nl,
  Wg = jl,
  Kg = Rl,
  qr = 'DropdownMenu',
  [Gg, Nv] = nt(qr, [dl]),
  Ie = dl(),
  [Yg, Dl] = Gg(qr),
  Il = e => {
    const {
        __scopeDropdownMenu: r,
        children: t,
        dir: n,
        open: s,
        defaultOpen: a,
        onOpenChange: l,
        modal: i = !0,
      } = e,
      d = Ie(r),
      u = h.useRef(null),
      [p, g] = xt({ prop: s, defaultProp: a ?? !1, onChange: l, caller: qr })
    return o.jsx(Yg, {
      scope: r,
      triggerId: mn(),
      triggerRef: u,
      contentId: mn(),
      open: p,
      onOpenChange: g,
      onOpenToggle: h.useCallback(() => g(v => !v), [g]),
      modal: i,
      children: o.jsx(Dg, {
        ...d,
        open: p,
        onOpenChange: g,
        dir: n,
        modal: i,
        children: t,
      }),
    })
  }
Il.displayName = qr
var Al = 'DropdownMenuTrigger',
  $l = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, disabled: n = !1, ...s } = e,
      a = Dl(Al, t),
      l = Ie(t)
    return o.jsx(Ig, {
      asChild: !0,
      ...l,
      children: o.jsx(Ce.button, {
        type: 'button',
        id: a.triggerId,
        'aria-haspopup': 'menu',
        'aria-expanded': a.open,
        'aria-controls': a.open ? a.contentId : void 0,
        'data-state': a.open ? 'open' : 'closed',
        'data-disabled': n ? '' : void 0,
        disabled: n,
        ...s,
        ref: ks(r, a.triggerRef),
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
$l.displayName = Al
var Zg = 'DropdownMenuPortal',
  Ml = e => {
    const { __scopeDropdownMenu: r, ...t } = e,
      n = Ie(r)
    return o.jsx(Ag, { ...n, ...t })
  }
Ml.displayName = Zg
var Ol = 'DropdownMenuContent',
  Ll = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Dl(Ol, t),
      a = Ie(t),
      l = h.useRef(!1)
    return o.jsx($g, {
      id: s.contentId,
      'aria-labelledby': s.triggerId,
      ...a,
      ...n,
      ref: r,
      onCloseAutoFocus: ie(e.onCloseAutoFocus, i => {
        var d
        ;(l.current || (d = s.triggerRef.current) == null || d.focus(),
          (l.current = !1),
          i.preventDefault())
      }),
      onInteractOutside: ie(e.onInteractOutside, i => {
        const d = i.detail.originalEvent,
          u = d.button === 0 && d.ctrlKey === !0,
          p = d.button === 2 || u
        ;(!s.modal || p) && (l.current = !0)
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
Ll.displayName = Ol
var qg = 'DropdownMenuGroup',
  Xg = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(Mg, { ...s, ...n, ref: r })
  })
Xg.displayName = qg
var Qg = 'DropdownMenuLabel',
  Fl = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(Og, { ...s, ...n, ref: r })
  })
Fl.displayName = Qg
var Jg = 'DropdownMenuItem',
  zl = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(Lg, { ...s, ...n, ref: r })
  })
zl.displayName = Jg
var e0 = 'DropdownMenuCheckboxItem',
  Bl = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(Fg, { ...s, ...n, ref: r })
  })
Bl.displayName = e0
var t0 = 'DropdownMenuRadioGroup',
  r0 = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(zg, { ...s, ...n, ref: r })
  })
r0.displayName = t0
var n0 = 'DropdownMenuRadioItem',
  Ul = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(Bg, { ...s, ...n, ref: r })
  })
Ul.displayName = n0
var o0 = 'DropdownMenuItemIndicator',
  Hl = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(Ug, { ...s, ...n, ref: r })
  })
Hl.displayName = o0
var s0 = 'DropdownMenuSeparator',
  Vl = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(Hg, { ...s, ...n, ref: r })
  })
Vl.displayName = s0
var a0 = 'DropdownMenuArrow',
  i0 = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(Vg, { ...s, ...n, ref: r })
  })
i0.displayName = a0
var l0 = 'DropdownMenuSubTrigger',
  Wl = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(Wg, { ...s, ...n, ref: r })
  })
Wl.displayName = l0
var c0 = 'DropdownMenuSubContent',
  Kl = h.forwardRef((e, r) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      s = Ie(t)
    return o.jsx(Kg, {
      ...s,
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
Kl.displayName = c0
var d0 = Il,
  u0 = $l,
  f0 = Ml,
  Gl = Ll,
  Yl = Fl,
  Zl = zl,
  ql = Bl,
  Xl = Ul,
  Ql = Hl,
  Jl = Vl,
  ec = Wl,
  tc = Kl
const h0 = d0,
  p0 = u0,
  m0 = h.forwardRef(({ className: e, inset: r, children: t, ...n }, s) =>
    o.jsxs(ec, {
      ref: s,
      className: le(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
        r && 'pl-8',
        e
      ),
      ...n,
      children: [t, o.jsx(Id, { className: 'ml-auto h-4 w-4' })],
    })
  )
m0.displayName = ec.displayName
const g0 = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(tc, {
    ref: t,
    className: le(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      e
    ),
    ...r,
  })
)
g0.displayName = tc.displayName
const rc = h.forwardRef(({ className: e, sideOffset: r = 4, ...t }, n) =>
  o.jsx(f0, {
    children: o.jsx(Gl, {
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
rc.displayName = Gl.displayName
const Yt = h.forwardRef(({ className: e, inset: r, ...t }, n) =>
  o.jsx(Zl, {
    ref: n,
    className: le(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      r && 'pl-8',
      e
    ),
    ...t,
  })
)
Yt.displayName = Zl.displayName
const v0 = h.forwardRef(({ className: e, children: r, checked: t, ...n }, s) =>
  o.jsxs(ql, {
    ref: s,
    className: le(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      e
    ),
    checked: t,
    ...n,
    children: [
      o.jsx('span', {
        className:
          'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        children: o.jsx(Ql, { children: o.jsx(tr, { className: 'h-4 w-4' }) }),
      }),
      r,
    ],
  })
)
v0.displayName = ql.displayName
const b0 = h.forwardRef(({ className: e, children: r, ...t }, n) =>
  o.jsxs(Xl, {
    ref: n,
    className: le(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      e
    ),
    ...t,
    children: [
      o.jsx('span', {
        className:
          'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        children: o.jsx(Ql, {
          children: o.jsx(ea, { className: 'h-2 w-2 fill-current' }),
        }),
      }),
      r,
    ],
  })
)
b0.displayName = Xl.displayName
const x0 = h.forwardRef(({ className: e, inset: r, ...t }, n) =>
  o.jsx(Yl, {
    ref: n,
    className: le('px-2 py-1.5 text-sm font-semibold', r && 'pl-8', e),
    ...t,
  })
)
x0.displayName = Yl.displayName
const w0 = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(Jl, { ref: t, className: le('-mx-1 my-1 h-px bg-muted', e), ...r })
)
w0.displayName = Jl.displayName
const nc = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(Ns, {
    ref: t,
    className: le(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      e
    ),
    ...r,
  })
)
nc.displayName = Ns.displayName
const y0 = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(Es, { ref: t, className: le('aspect-square h-full w-full', e), ...r })
)
y0.displayName = Es.displayName
const oc = h.forwardRef(({ className: e, ...r }, t) =>
  o.jsx(js, {
    ref: t,
    className: le(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      e
    ),
    ...r,
  })
)
oc.displayName = js.displayName
const S0 = ['add door ', 'remove door ', 'export all', 'show status'],
  C0 = ({ onSubmit: e }) => {
    const [r, t] = h.useState(''),
      [n, s] = h.useState(!1),
      [a, l] = h.useState([]),
      [i, d] = h.useState(null),
      [u, p] = h.useState([]),
      g = h.useRef(null),
      {
        transcript: v,
        isListening: c,
        startListening: x,
        stopListening: f,
        confidence: m,
      } = $r({}),
      w = () => {
        c ? (f(), s(!1)) : (x(), s(!0))
      }
    h.useEffect(() => {
      n && v && (t(v), C(v))
    }, [v, n])
    const S = I => {
        ;(n && (f(), s(!1)), t(I.target.value), C(I.target.value))
      },
      C = I => {
        if (!I) {
          p([])
          return
        }
        p(S0.filter(T => T.startsWith(I.toLowerCase())))
      }
    h.useEffect(() => {
      const I = T => {
        if (
          (T.ctrlKey && T.key === 'm' && w(),
          T.key === 'Escape' && c && (f(), s(!1)),
          T.key === 'Enter' &&
            document.activeElement === g.current &&
            k(r, m, n),
          T.key === 'ArrowUp' &&
            a.length > 0 &&
            d(D => {
              const R = D === null ? a.length - 1 : Math.max(0, D - 1)
              return (t(a[R].text), R)
            }),
          T.key === 'ArrowDown' && a.length > 0 && i !== null)
        ) {
          const D = Math.min(a.length - 1, i + 1)
          ;(t(a[D].text), d(D))
        }
      }
      return (
        window.addEventListener('keydown', I),
        () => window.removeEventListener('keydown', I)
      )
    }, [r, c, n, a, i, m])
    const k = (I, T, D) => {
        if (!I.trim()) return
        const R = { text: I.trim(), confidence: T, isVoice: D }
        ;(e(R), l(L => [...L, R]), t(''), p([]), d(null), f(), s(!1))
      },
      E = I => {
        var T
        ;(t(I), p([]), (T = g.current) == null || T.focus())
      }
    return o.jsxs('div', {
      className: 'flex flex-col gap-1',
      children: [
        o.jsxs('div', {
          className: 'flex items-center gap-2',
          children: [
            o.jsx('input', {
              ref: g,
              type: 'text',
              value: r,
              onChange: S,
              className: 'flex-1 border rounded px-3 py-2',
              placeholder: c ? 'Listening...' : 'Type or use voice',
              'aria-label': 'Input',
              autoComplete: 'off',
            }),
            o.jsx(fe, {
              type: 'button',
              onClick: w,
              'aria-label': c ? 'Stop voice input' : 'Start voice input',
              variant: c ? 'destructive' : 'outline',
              children: c ? o.jsx(Hn, {}) : o.jsx(Ot, {}),
            }),
            o.jsx(fe, {
              type: 'button',
              onClick: () => k(r, m, n),
              disabled: !r.trim(),
              children: 'Submit',
            }),
            n &&
              o.jsx('span', {
                className: 'ml-2 text-xs text-gray-500',
                children: c ? 'Listening...' : 'Voice ready',
              }),
            typeof m == 'number' &&
              o.jsxs('span', {
                className: `ml-2 text-xs flex items-center gap-1 ${m > 0.8 ? 'text-green-600' : 'text-yellow-600'}`,
                'aria-live': 'polite',
                children: [
                  m > 0.8 ? o.jsx(Md, { size: 14 }) : o.jsx($d, { size: 14 }),
                  Math.round(m * 100),
                  '% confidence',
                ],
              }),
          ],
        }),
        u.length > 0 &&
          o.jsx('ul', {
            className: 'border rounded bg-white shadow p-2 mt-1 max-w-md',
            children: u.map(I =>
              o.jsx(
                'li',
                {
                  className: 'cursor-pointer hover:bg-gray-100 px-2 py-1',
                  onClick: () => E(I),
                  tabIndex: 0,
                  onKeyDown: T => {
                    T.key === 'Enter' && E(I)
                  },
                  children: I,
                },
                I
              )
            ),
          }),
        a.length > 0 &&
          o.jsx('div', {
            className: 'flex gap-2 mt-1 flex-wrap',
            children: a
              .slice(-5)
              .reverse()
              .map((I, T) =>
                o.jsx(
                  fe,
                  {
                    size: 'sm',
                    variant: 'ghost',
                    onClick: () => t(I.text),
                    'aria-label': `Recall: ${I.text}`,
                    children: I.text,
                  },
                  T
                )
              ),
          }),
      ],
    })
  },
  _0 = () =>
    o.jsxs(et, {
      className: 'w-full max-w-2xl mx-auto',
      children: [
        o.jsx(ht, {
          children: o.jsxs(tt, {
            className: 'flex items-center gap-2',
            children: [
              o.jsx(Ot, { className: 'h-5 w-5 text-blue-500' }),
              'Voice Commands Quick Reference',
            ],
          }),
        }),
        o.jsxs(pt, {
          className: 'space-y-6',
          children: [
            o.jsxs('div', {
              className: 'space-y-3',
              children: [
                o.jsxs('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    o.jsx(qd, { className: 'h-4 w-4 text-green-500' }),
                    o.jsx('h3', {
                      className: 'font-semibold',
                      children: 'Pallet Counter',
                    }),
                  ],
                }),
                o.jsx('div', {
                  className: 'grid grid-cols-1 md:grid-cols-2 gap-2',
                  children: [
                    'Add counter',
                    'Add pallet',
                    'Counter',
                    'Pallet',
                  ].map(e =>
                    o.jsxs(
                      'div',
                      {
                        className:
                          'flex items-center gap-2 p-2 bg-green-50 rounded-lg',
                        children: [
                          o.jsx(Kt, {
                            variant: 'outline',
                            className: 'text-xs',
                            children: 'Say',
                          }),
                          o.jsxs('span', {
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
            o.jsxs('div', {
              className: 'space-y-3',
              children: [
                o.jsxs('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    o.jsx(nu, { className: 'h-4 w-4 text-blue-500' }),
                    o.jsx('h3', {
                      className: 'font-semibold',
                      children: 'Door Scheduling - SPEED COMMANDS',
                    }),
                  ],
                }),
                o.jsxs('div', {
                  className: 'bg-red-50 p-3 rounded-lg',
                  children: [
                    o.jsx('h4', {
                      className: 'font-medium text-red-700 mb-2',
                      children: '🔥 ULTRA-FAST (1-2 seconds)',
                    }),
                    o.jsx('div', {
                      className: 'grid grid-cols-2 gap-2',
                      children: ['332', '6024', 'XD', '28'].map(e =>
                        o.jsxs(
                          'div',
                          {
                            className:
                              'flex items-center gap-2 p-1 bg-white rounded',
                            children: [
                              o.jsx(Kt, {
                                variant: 'outline',
                                className: 'text-xs bg-red-100',
                                children: 'Say',
                              }),
                              o.jsxs('span', {
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
                o.jsxs('div', {
                  className: 'bg-orange-50 p-3 rounded-lg',
                  children: [
                    o.jsx('h4', {
                      className: 'font-medium text-orange-700 mb-2',
                      children: '🚀 FAST (2-3 seconds)',
                    }),
                    o.jsx('div', {
                      className: 'grid grid-cols-1 gap-2',
                      children: [
                        'Door 332 to 6024',
                        'Door 335 XD',
                        'Door 340 empty',
                      ].map(e =>
                        o.jsxs(
                          'div',
                          {
                            className:
                              'flex items-center gap-2 p-1 bg-white rounded',
                            children: [
                              o.jsx(Kt, {
                                variant: 'outline',
                                className: 'text-xs bg-orange-100',
                                children: 'Say',
                              }),
                              o.jsxs('span', {
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
                o.jsxs('div', {
                  className: 'bg-green-50 p-3 rounded-lg',
                  children: [
                    o.jsx('h4', {
                      className: 'font-medium text-green-700 mb-2',
                      children: '⚡ COMPLETE (3-4 seconds)',
                    }),
                    o.jsx('div', {
                      className: 'grid grid-cols-1 gap-2',
                      children: ['Door 332 to 6024 XD empty'].map(e =>
                        o.jsxs(
                          'div',
                          {
                            className:
                              'flex items-center gap-2 p-1 bg-white rounded',
                            children: [
                              o.jsx(Kt, {
                                variant: 'outline',
                                className: 'text-xs bg-green-100',
                                children: 'Say',
                              }),
                              o.jsxs('span', {
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
            o.jsxs('div', {
              className: 'space-y-3',
              children: [
                o.jsxs('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    o.jsx(Vn, { className: 'h-4 w-4 text-yellow-500' }),
                    o.jsx('h3', {
                      className: 'font-semibold',
                      children: 'SPEED TIPS for Warehouse Efficiency',
                    }),
                  ],
                }),
                o.jsxs('div', {
                  className: 'bg-yellow-50 p-4 rounded-lg space-y-2',
                  children: [
                    o.jsxs('div', {
                      className: 'flex items-start gap-2',
                      children: [
                        o.jsx('span', {
                          className: 'text-yellow-600 font-bold',
                          children: '🔥',
                        }),
                        o.jsxs('span', {
                          className: 'text-sm',
                          children: [
                            o.jsx('strong', { children: 'FASTEST:' }),
                            ' Just say the number! "332" creates door 332',
                          ],
                        }),
                      ],
                    }),
                    o.jsxs('div', {
                      className: 'flex items-start gap-2',
                      children: [
                        o.jsx('span', {
                          className: 'text-yellow-600 font-bold',
                          children: '⚡',
                        }),
                        o.jsxs('span', {
                          className: 'text-sm',
                          children: [
                            o.jsx('strong', { children: 'RAPID:' }),
                            ' "Door 332 to 6024" = complete setup in 3 seconds',
                          ],
                        }),
                      ],
                    }),
                    o.jsxs('div', {
                      className: 'flex items-start gap-2',
                      children: [
                        o.jsx('span', {
                          className: 'text-yellow-600 font-bold',
                          children: '🚀',
                        }),
                        o.jsxs('span', {
                          className: 'text-sm',
                          children: [
                            o.jsx('strong', { children: 'CHAIN:' }),
                            ' Say multiple commands back-to-back',
                          ],
                        }),
                      ],
                    }),
                    o.jsxs('div', {
                      className: 'flex items-start gap-2',
                      children: [
                        o.jsx('span', {
                          className: 'text-yellow-600 font-bold',
                          children: '💨',
                        }),
                        o.jsxs('span', {
                          className: 'text-sm',
                          children: [
                            o.jsx('strong', { children: 'NO PAUSES:' }),
                            ' Speak continuously for maximum speed',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs('div', {
              className: 'bg-blue-50 p-4 rounded-lg',
              children: [
                o.jsx('h4', {
                  className: 'font-medium mb-2 text-blue-800',
                  children: '⚡ SPEED WORKFLOW EXAMPLES:',
                }),
                o.jsxs('div', {
                  className: 'space-y-2 text-sm text-blue-700',
                  children: [
                    o.jsxs('p', {
                      children: [
                        o.jsx('strong', { children: 'Ultra-Fast:' }),
                        ' Click mic → "332" → Done! (2 seconds)',
                      ],
                    }),
                    o.jsxs('p', {
                      children: [
                        o.jsx('strong', { children: 'Fast Setup:' }),
                        ' Click mic → "Door 335 to 6024" → Done! (3 seconds)',
                      ],
                    }),
                    o.jsxs('p', {
                      children: [
                        o.jsx('strong', { children: 'Complete:' }),
                        ' Click mic → "Door 340 to 6070 XD empty" → Done! (4 seconds)',
                      ],
                    }),
                    o.jsxs('p', {
                      children: [
                        o.jsx('strong', { children: 'Chain Mode:' }),
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
  k0 = () => {
    const [e, r] = h.useState('doors')
    return (
      Ge(),
      o.jsx(ba, { children: o.jsx(N0, { currentView: e, setCurrentView: r }) })
    )
  },
  N0 = ({ currentView: e, setCurrentView: r }) => {
    const { currentUser: t } = rr()
    return o.jsxs('div', {
      className: 'min-h-screen bg-gray-50',
      children: [
        o.jsx('header', {
          className: 'bg-walmart-blue text-white py-4 shadow-md',
          children: o.jsxs('div', {
            className:
              'container mx-auto px-4 flex justify-between items-center',
            children: [
              o.jsxs('div', {
                children: [
                  o.jsx('h1', {
                    className: 'text-2xl font-bold',
                    children: 'Walmart DC 8980 Shipping',
                  }),
                  o.jsx('p', {
                    className: 'text-sm opacity-80',
                    children: 'Door scheduling and pallet tracking system',
                  }),
                ],
              }),
              o.jsxs('div', {
                className: 'flex items-center gap-4',
                children: [
                  o.jsxs(Zn, {
                    children: [
                      o.jsx(qn, {
                        asChild: !0,
                        children: o.jsxs(fe, {
                          variant: 'ghost',
                          className:
                            'text-white hover:bg-walmart-blue/20 gap-2',
                          title: 'Voice Commands Quick Reference',
                          children: [
                            o.jsx(Vn, { className: 'h-4 w-4' }),
                            o.jsx('span', {
                              className: 'hidden sm:inline',
                              children: 'Voice Commands',
                            }),
                          ],
                        }),
                      }),
                      o.jsx(Mr, {
                        className: 'max-w-4xl max-h-[80vh] overflow-y-auto',
                        children: o.jsx(_0, {}),
                      }),
                    ],
                  }),
                  o.jsxs('div', {
                    className:
                      'flex items-center bg-walmart-blue/30 px-3 py-1 rounded-full',
                    children: [
                      o.jsx(nc, {
                        className: 'h-7 w-7 border border-white/30',
                        children: o.jsx(oc, {
                          className: 'bg-walmart-blue/50 text-white',
                          children: t.displayName
                            .split(' ')
                            .map(n => n[0])
                            .join(''),
                        }),
                      }),
                      o.jsx('span', {
                        className: 'ml-2 text-sm font-medium',
                        children: t.displayName,
                      }),
                    ],
                  }),
                  o.jsxs(h0, {
                    children: [
                      o.jsx(p0, {
                        asChild: !0,
                        children: o.jsx(fe, {
                          variant: 'ghost',
                          className: 'text-white hover:bg-walmart-blue/20',
                          children: o.jsx(Gd, { className: 'h-6 w-6' }),
                        }),
                      }),
                      o.jsxs(rc, {
                        align: 'end',
                        className: 'w-48',
                        children: [
                          o.jsx(Yt, {
                            onClick: () => r('doors'),
                            children: 'Door Schedule',
                          }),
                          o.jsx(Yt, {
                            onClick: () => r('pallets'),
                            children: 'Pallet Counter',
                          }),
                          o.jsx(Yt, {
                            onClick: () => r('settings'),
                            children: 'Settings',
                          }),
                          o.jsx(Yt, {
                            asChild: !0,
                            children: o.jsxs(Ps, {
                              to: '/notes',
                              className: 'flex w-full',
                              children: [
                                o.jsx(ta, { className: 'mr-2 h-4 w-4' }),
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
        o.jsx('div', {
          className: 'py-8',
          children: o.jsxs('div', {
            className: 'container mx-auto px-4',
            children: [
              o.jsx('div', {
                className: 'mb-6',
                children: o.jsx(C0, { onSubmit: n => {} }),
              }),
              e === 'doors' && o.jsx(Kp, {}),
              e === 'pallets' && o.jsx(bi, {}),
              e === 'settings' && o.jsx(ng, {}),
            ],
          }),
        }),
      ],
    })
  },
  E0 = () =>
    o.jsx('div', {
      className: 'container mx-auto p-4',
      children: o.jsx(bi, {}),
    }),
  j0 = () =>
    o.jsxs('div', {
      className: 'container mx-auto p-4',
      children: [
        o.jsx('h1', { className: 'text-2xl font-bold', children: 'Notes' }),
        o.jsx('p', { children: 'User notes and logs will be available here.' }),
      ],
    }),
  T0 = () =>
    o.jsxs('div', {
      className: 'container mx-auto p-4',
      children: [
        o.jsx('h1', { className: 'text-2xl font-bold', children: 'Settings' }),
        o.jsx('p', {
          children: 'Application settings will be configured here.',
        }),
      ],
    }),
  R0 = () => {
    const e = Ds()
    return (
      h.useEffect(() => {
        console.error(
          '404 Error: User attempted to access non-existent route:',
          e.pathname
        )
      }, [e.pathname]),
      o.jsx('div', {
        className: 'min-h-screen flex items-center justify-center bg-gray-100',
        children: o.jsxs('div', {
          className: 'text-center',
          children: [
            o.jsx('h1', {
              className: 'text-4xl font-bold mb-4',
              children: '404',
            }),
            o.jsx('p', {
              className: 'text-xl text-gray-600 mb-4',
              children: 'Oops! Page not found',
            }),
            o.jsx('a', {
              href: '/',
              className: 'text-blue-500 hover:text-blue-700 underline',
              children: 'Return to Home',
            }),
          ],
        }),
      })
    )
  }
function P0(...e) {
  return la(Bn(e))
}
const D0 = [
    { name: 'Scheduler', path: '/' },
    { name: 'Pallet Counter', path: '/pallet-counter' },
    { name: 'Notes', path: '/notes' },
    { name: 'Settings', path: '/settings' },
  ],
  I0 = () => {
    const r = Ds().pathname
    return o.jsx('nav', {
      className: 'bg-wal-blue-500 p-2 mb-4 shadow-md',
      children: o.jsx('div', {
        className: 'container mx-auto flex justify-center space-x-2',
        children: D0.map(t => {
          const n = r === t.path
          return o.jsx(
            fe,
            {
              variant: n ? 'secondary' : 'ghost',
              className: P0(
                'text-white hover:bg-wal-blue-400',
                n && 'bg-wal-blue-600 font-semibold'
              ),
              asChild: !0,
              children: o.jsx(Ps, { to: t.path, children: t.name }),
            },
            t.name
          )
        }),
      }),
    })
  }
class A0 extends h.Component {
  constructor(t) {
    super(t)
    Ve(this, 'handleRetry', () => {
      this.setState({ hasError: !1, error: null, errorInfo: null })
    })
    Ve(this, 'handleGoHome', () => {
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
        : o.jsx('div', {
            className:
              'min-h-screen flex items-center justify-center p-4 bg-gray-50',
            children: o.jsxs(et, {
              className: 'w-full max-w-md',
              children: [
                o.jsxs(ht, {
                  className: 'text-center',
                  children: [
                    o.jsx('div', {
                      className:
                        'mx-auto mb-4 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center',
                      children: o.jsx(ru, {
                        className: 'w-6 h-6 text-red-600',
                      }),
                    }),
                    o.jsx(tt, {
                      className: 'text-xl font-semibold text-gray-900',
                      children: 'Something went wrong',
                    }),
                    o.jsx(xa, {
                      className: 'text-gray-600',
                      children:
                        'We encountered an unexpected error. This has been logged and our team will investigate.',
                    }),
                  ],
                }),
                o.jsxs(pt, {
                  className: 'space-y-4',
                  children: [
                    !1,
                    o.jsxs('div', {
                      className: 'flex flex-col sm:flex-row gap-2',
                      children: [
                        o.jsxs(fe, {
                          onClick: this.handleRetry,
                          className:
                            'flex-1 flex items-center justify-center gap-2',
                          variant: 'default',
                          children: [
                            o.jsx(Qd, { className: 'w-4 h-4' }),
                            'Try Again',
                          ],
                        }),
                        o.jsxs(fe, {
                          onClick: this.handleGoHome,
                          className:
                            'flex-1 flex items-center justify-center gap-2',
                          variant: 'outline',
                          children: [
                            o.jsx(Vd, { className: 'w-4 h-4' }),
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
const $0 = new td(),
  M0 = () =>
    o.jsx(A0, {
      children: o.jsx(rd, {
        client: $0,
        children: o.jsxs(Kn, {
          children: [
            o.jsx(Hu, {}),
            o.jsx(ba, {
              children: o.jsxs(Jc, {
                children: [
                  o.jsx(I0, {}),
                  o.jsx('main', {
                    className: 'container mx-auto p-4',
                    children: o.jsxs(ed, {
                      children: [
                        o.jsx(Ut, { path: '/', element: o.jsx(k0, {}) }),
                        o.jsx(Ut, {
                          path: '/pallet-counter',
                          element: o.jsx(E0, {}),
                        }),
                        o.jsx(Ut, { path: '/notes', element: o.jsx(j0, {}) }),
                        o.jsx(Ut, {
                          path: '/settings',
                          element: o.jsx(T0, {}),
                        }),
                        o.jsx(Ut, { path: '*', element: o.jsx(R0, {}) }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  O0 = 'modulepreload',
  L0 = function (e) {
    return '/' + e
  },
  es = {},
  F0 = function (r, t, n) {
    let s = Promise.resolve()
    if (t && t.length > 0) {
      let l = function (u) {
        return Promise.all(
          u.map(p =>
            Promise.resolve(p).then(
              g => ({ status: 'fulfilled', value: g }),
              g => ({ status: 'rejected', reason: g })
            )
          )
        )
      }
      document.getElementsByTagName('link')
      const i = document.querySelector('meta[property=csp-nonce]'),
        d =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute('nonce'))
      s = l(
        t.map(u => {
          if (((u = L0(u)), u in es)) return
          es[u] = !0
          const p = u.endsWith('.css'),
            g = p ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${u}"]${g}`)) return
          const v = document.createElement('link')
          if (
            ((v.rel = p ? 'stylesheet' : O0),
            p || (v.as = 'script'),
            (v.crossOrigin = ''),
            (v.href = u),
            d && v.setAttribute('nonce', d),
            document.head.appendChild(v),
            p)
          )
            return new Promise((c, x) => {
              ;(v.addEventListener('load', c),
                v.addEventListener('error', () =>
                  x(new Error(`Unable to preload CSS for ${u}`))
                ))
            })
        })
      )
    }
    function a(l) {
      const i = new Event('vite:preloadError', { cancelable: !0 })
      if (((i.payload = l), window.dispatchEvent(i), !i.defaultPrevented))
        throw l
    }
    return s.then(l => {
      for (const i of l || []) i.status === 'rejected' && a(i.reason)
      return r().catch(a)
    })
  }
function z0(e = {}) {
  const {
    immediate: r = !1,
    onNeedRefresh: t,
    onOfflineReady: n,
    onRegistered: s,
    onRegisteredSW: a,
    onRegisterError: l,
  } = e
  let i, d, u
  const p = async (v = !0) => {
    ;(await d, u == null || u())
  }
  async function g() {
    if ('serviceWorker' in navigator) {
      if (
        ((i = await F0(async () => {
          const { Workbox: v } = await import(
            './workbox-window.prod.es5-B9K5rw8f.js'
          )
          return { Workbox: v }
        }, [])
          .then(
            ({ Workbox: v }) => new v('/sw.js', { scope: '/', type: 'classic' })
          )
          .catch(v => {
            l == null || l(v)
          })),
        !i)
      )
        return
      u = () => {
        i == null || i.messageSkipWaiting()
      }
      {
        let v = !1
        const c = () => {
          ;((v = !0),
            i == null ||
              i.addEventListener('controlling', x => {
                x.isUpdate && window.location.reload()
              }),
            t == null || t())
        }
        ;(i.addEventListener('installed', x => {
          typeof x.isUpdate > 'u'
            ? typeof x.isExternal < 'u' && x.isExternal
              ? c()
              : !v && (n == null || n())
            : x.isUpdate || n == null || n()
        }),
          i.addEventListener('waiting', c))
      }
      i.register({ immediate: r })
        .then(v => {
          a ? a('/sw.js', v) : s == null || s(v)
        })
        .catch(v => {
          l == null || l(v)
        })
    }
  }
  return ((d = g()), p)
}
function B0(e = {}) {
  const {
      immediate: r = !0,
      onNeedRefresh: t,
      onOfflineReady: n,
      onRegistered: s,
      onRegisteredSW: a,
      onRegisterError: l,
    } = e,
    [i, d] = h.useState(!1),
    [u, p] = h.useState(!1),
    [g] = h.useState(() =>
      z0({
        immediate: r,
        onOfflineReady() {
          ;(p(!0), n == null || n())
        },
        onNeedRefresh() {
          ;(d(!0), t == null || t())
        },
        onRegistered: s,
        onRegisteredSW: a,
        onRegisterError: l,
      })
    )
  return { needRefresh: [i, d], offlineReady: [u, p], updateServiceWorker: g }
}
const U0 = {}
function H0(e, r) {
  let t
  try {
    t = e()
  } catch {
    return
  }
  return {
    getItem: s => {
      var a
      const l = d => (d === null ? null : JSON.parse(d, void 0)),
        i = (a = t.getItem(s)) != null ? a : null
      return i instanceof Promise ? i.then(l) : l(i)
    },
    setItem: (s, a) => t.setItem(s, JSON.stringify(a, void 0)),
    removeItem: s => t.removeItem(s),
  }
}
const Jt = e => r => {
    try {
      const t = e(r)
      return t instanceof Promise
        ? t
        : {
            then(n) {
              return Jt(n)(t)
            },
            catch(n) {
              return this
            },
          }
    } catch (t) {
      return {
        then(n) {
          return this
        },
        catch(n) {
          return Jt(n)(t)
        },
      }
    }
  },
  V0 = (e, r) => (t, n, s) => {
    let a = {
        getStorage: () => localStorage,
        serialize: JSON.stringify,
        deserialize: JSON.parse,
        partialize: m => m,
        version: 0,
        merge: (m, w) => ({ ...w, ...m }),
        ...r,
      },
      l = !1
    const i = new Set(),
      d = new Set()
    let u
    try {
      u = a.getStorage()
    } catch {}
    if (!u)
      return e(
        (...m) => {
          ;(console.warn(
            `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
          ),
            t(...m))
        },
        n,
        s
      )
    const p = Jt(a.serialize),
      g = () => {
        const m = a.partialize({ ...n() })
        let w
        const S = p({ state: m, version: a.version })
          .then(C => u.setItem(a.name, C))
          .catch(C => {
            w = C
          })
        if (w) throw w
        return S
      },
      v = s.setState
    s.setState = (m, w) => {
      ;(v(m, w), g())
    }
    const c = e(
      (...m) => {
        ;(t(...m), g())
      },
      n,
      s
    )
    let x
    const f = () => {
      var m
      if (!u) return
      ;((l = !1), i.forEach(S => S(n())))
      const w =
        ((m = a.onRehydrateStorage) == null ? void 0 : m.call(a, n())) || void 0
      return Jt(u.getItem.bind(u))(a.name)
        .then(S => {
          if (S) return a.deserialize(S)
        })
        .then(S => {
          if (S)
            if (typeof S.version == 'number' && S.version !== a.version) {
              if (a.migrate) return a.migrate(S.state, S.version)
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              )
            } else return S.state
        })
        .then(S => {
          var C
          return ((x = a.merge(S, (C = n()) != null ? C : c)), t(x, !0), g())
        })
        .then(() => {
          ;(w == null || w(x, void 0), (l = !0), d.forEach(S => S(x)))
        })
        .catch(S => {
          w == null || w(void 0, S)
        })
    }
    return (
      (s.persist = {
        setOptions: m => {
          ;((a = { ...a, ...m }), m.getStorage && (u = m.getStorage()))
        },
        clearStorage: () => {
          u == null || u.removeItem(a.name)
        },
        getOptions: () => a,
        rehydrate: () => f(),
        hasHydrated: () => l,
        onHydrate: m => (
          i.add(m),
          () => {
            i.delete(m)
          }
        ),
        onFinishHydration: m => (
          d.add(m),
          () => {
            d.delete(m)
          }
        ),
      }),
      f(),
      x || c
    )
  },
  W0 = (e, r) => (t, n, s) => {
    let a = {
        storage: H0(() => localStorage),
        partialize: f => f,
        version: 0,
        merge: (f, m) => ({ ...m, ...f }),
        ...r,
      },
      l = !1
    const i = new Set(),
      d = new Set()
    let u = a.storage
    if (!u)
      return e(
        (...f) => {
          ;(console.warn(
            `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
          ),
            t(...f))
        },
        n,
        s
      )
    const p = () => {
        const f = a.partialize({ ...n() })
        return u.setItem(a.name, { state: f, version: a.version })
      },
      g = s.setState
    s.setState = (f, m) => {
      ;(g(f, m), p())
    }
    const v = e(
      (...f) => {
        ;(t(...f), p())
      },
      n,
      s
    )
    s.getInitialState = () => v
    let c
    const x = () => {
      var f, m
      if (!u) return
      ;((l = !1),
        i.forEach(S => {
          var C
          return S((C = n()) != null ? C : v)
        }))
      const w =
        ((m = a.onRehydrateStorage) == null
          ? void 0
          : m.call(a, (f = n()) != null ? f : v)) || void 0
      return Jt(u.getItem.bind(u))(a.name)
        .then(S => {
          if (S)
            if (typeof S.version == 'number' && S.version !== a.version) {
              if (a.migrate) return [!0, a.migrate(S.state, S.version)]
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              )
            } else return [!1, S.state]
          return [!1, void 0]
        })
        .then(S => {
          var C
          const [k, E] = S
          if (((c = a.merge(E, (C = n()) != null ? C : v)), t(c, !0), k))
            return p()
        })
        .then(() => {
          ;(w == null || w(c, void 0),
            (c = n()),
            (l = !0),
            d.forEach(S => S(c)))
        })
        .catch(S => {
          w == null || w(void 0, S)
        })
    }
    return (
      (s.persist = {
        setOptions: f => {
          ;((a = { ...a, ...f }), f.storage && (u = f.storage))
        },
        clearStorage: () => {
          u == null || u.removeItem(a.name)
        },
        getOptions: () => a,
        rehydrate: () => x(),
        hasHydrated: () => l,
        onHydrate: f => (
          i.add(f),
          () => {
            i.delete(f)
          }
        ),
        onFinishHydration: f => (
          d.add(f),
          () => {
            d.delete(f)
          }
        ),
      }),
      a.skipHydration || x(),
      c || v
    )
  },
  K0 = (e, r) =>
    'getStorage' in r || 'serialize' in r || 'deserialize' in r
      ? ((U0 ? 'production' : void 0) !== 'production' &&
          console.warn(
            '[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead.'
          ),
        V0(e, r))
      : W0(e, r),
  G0 = K0,
  Y0 = {
    voiceEnabled: !0,
    confidenceThreshold: 0.7,
    darkMode: !1,
    soundEnabled: !0,
    autoSave: !0,
    department: 'Shipping',
    shift: 'Day',
  },
  Z0 = nd()(
    G0(
      (e, r) => ({
        doorEntries: [],
        activeDoor: null,
        palletData: {},
        settings: Y0,
        isListening: !1,
        lastCommand: '',
        isOnline: navigator.onLine,
        lastSync: null,
        addDoor: t => {
          const n = {
            ...t,
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
          }
          e(s => ({ doorEntries: [...s.doorEntries, n] }))
        },
        updateDoor: (t, n) => {
          e(s => ({
            doorEntries: s.doorEntries.map(a =>
              a.id === t ? { ...a, ...n } : a
            ),
          }))
        },
        removeDoor: t => {
          e(n => {
            var s
            return {
              doorEntries: n.doorEntries.filter(a => a.id !== t),
              activeDoor:
                ((s = n.activeDoor) == null ? void 0 : s.id) === t
                  ? null
                  : n.activeDoor,
            }
          })
        },
        setActiveDoor: t => {
          e({ activeDoor: t })
        },
        updatePalletCount: (t, n) => {
          e(s => ({
            palletData: {
              ...s.palletData,
              [t]: { count: n, lastUpdated: new Date().toISOString() },
            },
          }))
        },
        updateSettings: t => {
          e(n => ({ settings: { ...n.settings, ...t } }))
        },
        setListening: t => {
          e({ isListening: t })
        },
        setLastCommand: t => {
          e({ lastCommand: t })
        },
        setOnlineStatus: t => {
          e({ isOnline: t })
        },
        markSynced: () => {
          e({ lastSync: new Date().toISOString() })
        },
        exportData: () => {
          const { doorEntries: t, palletData: n, settings: s } = r()
          return { doors: t, pallets: n, settings: s }
        },
        importData: t => {
          e(n => ({
            doorEntries: t.doors || n.doorEntries,
            palletData: t.pallets || n.palletData,
            settings: t.settings || n.settings,
          }))
        },
        clearAllData: () => {
          e({
            doorEntries: [],
            activeDoor: null,
            palletData: {},
            lastSync: null,
          })
        },
      }),
      {
        name: 'shipping-app-storage',
        storage: {
          getItem: async e =>
            new Promise(r => {
              const t = indexedDB.open('ShippingAppDB', 1)
              ;((t.onupgradeneeded = () => {
                const n = t.result
                n.objectStoreNames.contains('storage') ||
                  n.createObjectStore('storage')
              }),
                (t.onsuccess = () => {
                  const n = t.result,
                    l = n
                      .transaction(['storage'], 'readonly')
                      .objectStore('storage')
                      .get(e)
                  ;((l.onsuccess = () => {
                    ;(r(l.result || null), n.close())
                  }),
                    (l.onerror = () => {
                      ;(r(null), n.close())
                    }))
                }),
                (t.onerror = () => {
                  r(null)
                }))
            }),
          setItem: async (e, r) =>
            new Promise(t => {
              const n = indexedDB.open('ShippingAppDB', 1)
              ;((n.onupgradeneeded = () => {
                const s = n.result
                s.objectStoreNames.contains('storage') ||
                  s.createObjectStore('storage')
              }),
                (n.onsuccess = () => {
                  const s = n.result,
                    a = s.transaction(['storage'], 'readwrite')
                  ;(a.objectStore('storage').put(r, e),
                    (a.oncomplete = () => {
                      ;(t(), s.close())
                    }),
                    (a.onerror = () => {
                      ;(t(), s.close())
                    }))
                }),
                (n.onerror = () => {
                  t()
                }))
            }),
          removeItem: async e =>
            new Promise(r => {
              const t = indexedDB.open('ShippingAppDB', 1)
              ;((t.onsuccess = () => {
                const n = t.result,
                  s = n.transaction(['storage'], 'readwrite')
                ;(s.objectStore('storage').delete(e),
                  (s.oncomplete = () => {
                    ;(r(), n.close())
                  }),
                  (s.onerror = () => {
                    ;(r(), n.close())
                  }))
              }),
                (t.onerror = () => {
                  r()
                }))
            }),
        },
      }
    )
  ),
  q0 = () => {
    const [e, r] = h.useState(null),
      [t, n] = h.useState(!1),
      [s, a] = h.useState(!1),
      [l, i] = h.useState(!1)
    return (
      h.useEffect(() => {
        const u = /iPad|iPhone|iPod/.test(navigator.userAgent)
        i(u)
        const p = window.matchMedia('(display-mode: standalone)').matches,
          g = window.navigator.standalone === !0
        ;((p || (u && g)) && a(!0), u && !g && n(!0))
        const v = x => {
            ;(x.preventDefault(), r(x), n(!0))
          },
          c = () => {
            ;(a(!0), n(!1), r(null))
          }
        return (
          window.addEventListener('beforeinstallprompt', v),
          window.addEventListener('appinstalled', c),
          () => {
            ;(window.removeEventListener('beforeinstallprompt', v),
              window.removeEventListener('appinstalled', c))
          }
        )
      }, []),
      {
        isInstallable: t,
        isInstalled: s,
        promptToInstall: async () => {
          if (l || !e) return
          ;(await e.prompt(), (await e.userChoice).outcome, r(null), n(!1))
        },
        isIOS: l,
      }
    )
  }
function fn(e) {
  const [r, t] = h.useState(!1)
  return (
    h.useEffect(() => {
      const n = window.matchMedia(e),
        s = () => {
          t(n.matches)
        }
      return (
        s(),
        n.addEventListener('change', s),
        () => {
          n.removeEventListener('change', s)
        }
      )
    }, [e]),
    r
  )
}
function X0() {
  const e = fn('(max-width: 768px)'),
    r = fn('(min-width: 769px) and (max-width: 1024px)'),
    t = fn('(min-width: 1025px)')
  return { isMobile: e, isTablet: r, isDesktop: t }
}
const Q0 = () => {
    const { isInstallable: e, promptToInstall: r, isIOS: t } = q0(),
      [n, s] = h.useState(!1),
      { isMobile: a } = X0(),
      [l, i] = h.useState(!1),
      [d, u] = h.useState(!1)
    h.useEffect(() => {
      if (e) {
        const v = setTimeout(() => {
          i(!0)
        }, 3e3)
        return () => clearTimeout(v)
      }
    }, [e])
    const p = () => {
        t
          ? (u(!0),
            ce.info('Follow the instructions to install', {
              description:
                "Tap the share button and select 'Add to Home Screen'",
            }))
          : (r(),
            ce.success('Installing app to your device', {
              description:
                "You'll be able to access this app from your home screen",
            }))
      },
      g = () => {
        ;(s(!0),
          localStorage.setItem(
            'installPromptDismissed',
            new Date().toISOString()
          ))
      }
    return (
      h.useEffect(() => {
        const v = localStorage.getItem('installPromptDismissed')
        if (v) {
          const c = new Date(v)
          ;(new Date().getTime() - c.getTime()) / (1e3 * 60 * 60) < 24
            ? s(!0)
            : localStorage.removeItem('installPromptDismissed')
        }
      }, []),
      !e || n || !l
        ? null
        : d
          ? o.jsx('div', {
              className:
                'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4',
              children: o.jsxs('div', {
                className:
                  'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full',
                children: [
                  o.jsx('h3', {
                    className: 'font-semibold text-lg mb-4',
                    children: 'Install on iPhone',
                  }),
                  o.jsxs('div', {
                    className: 'space-y-3 text-sm',
                    children: [
                      o.jsxs('div', {
                        className: 'flex items-center',
                        children: [
                          o.jsx('span', {
                            className:
                              'bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3',
                            children: '1',
                          }),
                          o.jsxs('span', {
                            children: [
                              'Tap the ',
                              o.jsx(No, { className: 'inline h-4 w-4 mx-1' }),
                              ' Share button at the bottom of Safari',
                            ],
                          }),
                        ],
                      }),
                      o.jsxs('div', {
                        className: 'flex items-center',
                        children: [
                          o.jsx('span', {
                            className:
                              'bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3',
                            children: '2',
                          }),
                          o.jsxs('span', {
                            children: [
                              'Scroll down and tap ',
                              o.jsx(At, { className: 'inline h-4 w-4 mx-1' }),
                              ' "Add to Home Screen"',
                            ],
                          }),
                        ],
                      }),
                      o.jsxs('div', {
                        className: 'flex items-center',
                        children: [
                          o.jsx('span', {
                            className:
                              'bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3',
                            children: '3',
                          }),
                          o.jsx('span', {
                            children: 'Tap "Add" to install the app',
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs('div', {
                    className: 'flex gap-2 mt-6',
                    children: [
                      o.jsx(fe, {
                        variant: 'outline',
                        onClick: () => u(!1),
                        className: 'flex-1',
                        children: 'Close',
                      }),
                      o.jsx(fe, {
                        onClick: () => {
                          ;(u(!1), g())
                        },
                        className:
                          'flex-1 bg-walmart-blue hover:bg-wal-blue-600',
                        children: 'Got it',
                      }),
                    ],
                  }),
                ],
              }),
            })
          : o.jsx('div', {
              className:
                'fixed bottom-4 left-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in z-50',
              children: o.jsxs('div', {
                className: 'flex items-center justify-between',
                children: [
                  o.jsxs('div', {
                    className: 'flex items-center',
                    children: [
                      o.jsx('div', {
                        className: 'mr-3 bg-walmart-blue rounded-full p-2',
                        children: o.jsx(eu, {
                          className: 'h-6 w-6 text-white',
                        }),
                      }),
                      o.jsxs('div', {
                        children: [
                          o.jsx('h3', {
                            className: 'font-semibold text-lg',
                            children: 'Install DC8980 Shipping App',
                          }),
                          o.jsx('p', {
                            className:
                              'text-sm text-gray-500 dark:text-gray-400',
                            children: t
                              ? 'Add to home screen for the best experience'
                              : a
                                ? 'Add to home screen for quick access'
                                : 'Install for offline access and better performance',
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs('div', {
                    className: 'flex gap-2',
                    children: [
                      o.jsx(fe, {
                        variant: 'outline',
                        onClick: g,
                        className: 'text-gray-500',
                        children: 'Later',
                      }),
                      o.jsxs(fe, {
                        onClick: p,
                        className: 'bg-walmart-blue hover:bg-wal-blue-600',
                        children: [
                          t
                            ? o.jsx(No, { className: 'h-4 w-4 mr-2' })
                            : o.jsx(Bd, { className: 'h-4 w-4 mr-2' }),
                          t ? 'Instructions' : 'Install',
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
    )
  },
  J0 = ({ children: e }) => {
    const { isOnline: r, setOnlineStatus: t } = Z0(),
      {
        offlineReady: [n, s],
        needRefresh: [a, l],
        updateServiceWorker: i,
      } = B0({
        onRegistered(p) {
          p && t(navigator.onLine)
        },
        onRegisterError(p) {
          console.warn('PWA registration failed:', p.message)
        },
      })
    h.useEffect(() => {
      const p = () => {
          ;(t(!0),
            ce.success("You're back online!", {
              description: 'Data will sync automatically',
              icon: o.jsx(lu, { className: 'h-4 w-4' }),
            }))
        },
        g = () => {
          ;(t(!1),
            ce.warning("You're offline", {
              description: 'App continues to work. Changes saved locally',
              duration: 5e3,
              icon: o.jsx(iu, { className: 'h-4 w-4' }),
            }))
        }
      return (
        window.addEventListener('online', p),
        window.addEventListener('offline', g),
        () => {
          ;(window.removeEventListener('online', p),
            window.removeEventListener('offline', g))
        }
      )
    }, [t])
    const d = () => {
        ;(s(!1), l(!1))
      },
      u = () => {
        i(!0)
      }
    return o.jsxs(o.Fragment, {
      children: [
        e,
        o.jsx(Q0, {}),
        !r &&
          o.jsx('div', {
            className:
              'fixed top-0 left-0 right-0 bg-yellow-400 text-black px-4 py-1 text-sm text-center font-medium z-50',
            children:
              'Offline Mode — Changes saved locally, will sync when online',
          }),
        n &&
          o.jsx('div', {
            className:
              'fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm',
            children: o.jsxs('div', {
              className: 'flex items-center justify-between',
              children: [
                o.jsxs('div', {
                  children: [
                    o.jsx('div', {
                      className: 'font-semibold text-sm',
                      children: 'Ready for offline use',
                    }),
                    o.jsx('div', {
                      className: 'text-xs opacity-90',
                      children: 'App cached successfully',
                    }),
                  ],
                }),
                o.jsx('button', {
                  onClick: d,
                  className:
                    'ml-3 bg-green-700 hover:bg-green-800 px-2 py-1 rounded text-xs',
                  children: 'OK',
                }),
              ],
            }),
          }),
        a &&
          o.jsxs('div', {
            className:
              'fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm',
            children: [
              o.jsxs('div', {
                className: 'mb-3',
                children: [
                  o.jsx('div', {
                    className: 'font-semibold text-sm',
                    children: 'Update available',
                  }),
                  o.jsx('div', {
                    className: 'text-xs opacity-90',
                    children: 'New version ready to install',
                  }),
                ],
              }),
              o.jsxs('div', {
                className: 'flex gap-2',
                children: [
                  o.jsx('button', {
                    onClick: u,
                    className:
                      'bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-xs flex-1',
                    children: 'Update Now',
                  }),
                  o.jsx('button', {
                    onClick: d,
                    className:
                      'bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-xs',
                    children: 'Later',
                  }),
                ],
              }),
            ],
          }),
      ],
    })
  }
let sc = -1
const Bt = e => {
    addEventListener(
      'pageshow',
      r => {
        r.persisted && ((sc = r.timeStamp), e(r))
      },
      !0
    )
  },
  Ze = (e, r, t, n) => {
    let s, a
    return l => {
      r.value >= 0 &&
        (l || n) &&
        ((a = r.value - (s ?? 0)),
        (a || s === void 0) &&
          ((s = r.value),
          (r.delta = a),
          (r.rating = ((i, d) =>
            i > d[1] ? 'poor' : i > d[0] ? 'needs-improvement' : 'good')(
            r.value,
            t
          )),
          e(r)))
    }
  },
  vo = e => {
    requestAnimationFrame(() => requestAnimationFrame(() => e()))
  },
  bo = () => {
    const e = performance.getEntriesByType('navigation')[0]
    if (e && e.responseStart > 0 && e.responseStart < performance.now())
      return e
  },
  ar = () => {
    const e = bo()
    return (e == null ? void 0 : e.activationStart) ?? 0
  },
  qe = (e, r = -1) => {
    const t = bo()
    let n = 'navigate'
    return (
      sc >= 0
        ? (n = 'back-forward-cache')
        : t &&
          (document.prerendering || ar() > 0
            ? (n = 'prerender')
            : document.wasDiscarded
              ? (n = 'restore')
              : t.type && (n = t.type.replace(/_/g, '-'))),
      {
        name: e,
        value: r,
        rating: 'good',
        delta: 0,
        entries: [],
        id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
        navigationType: n,
      }
    )
  },
  hn = new WeakMap()
function xo(e, r) {
  return (hn.get(e) || hn.set(e, new r()), hn.get(e))
}
class ev {
  constructor() {
    Ve(this, 't')
    Ve(this, 'i', 0)
    Ve(this, 'o', [])
  }
  h(r) {
    var s
    if (r.hadRecentInput) return
    const t = this.o[0],
      n = this.o.at(-1)
    ;(this.i &&
    t &&
    n &&
    r.startTime - n.startTime < 1e3 &&
    r.startTime - t.startTime < 5e3
      ? ((this.i += r.value), this.o.push(r))
      : ((this.i = r.value), (this.o = [r])),
      (s = this.t) == null || s.call(this, r))
  }
}
const ir = (e, r, t = {}) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const n = new PerformanceObserver(s => {
          Promise.resolve().then(() => {
            r(s.getEntries())
          })
        })
        return (n.observe({ type: e, buffered: !0, ...t }), n)
      }
    } catch {}
  },
  wo = e => {
    let r = !1
    return () => {
      r || (e(), (r = !0))
    }
  }
let Rt = -1
const ac = new Set(),
  ts = () =>
    document.visibilityState !== 'hidden' || document.prerendering ? 1 / 0 : 0,
  In = e => {
    if (document.visibilityState === 'hidden') {
      if (e.type === 'visibilitychange') for (const r of ac) r()
      isFinite(Rt) ||
        ((Rt = e.type === 'visibilitychange' ? e.timeStamp : 0),
        removeEventListener('prerenderingchange', In, !0))
    }
  },
  Xr = () => {
    var e
    if (Rt < 0) {
      const r = ar()
      ;((Rt =
        (document.prerendering ||
        (e = globalThis.performance
          .getEntriesByType('visibility-state')
          .filter(n => n.name === 'hidden' && n.startTime > r)[0]) == null
          ? void 0
          : e.startTime) ?? ts()),
        addEventListener('visibilitychange', In, !0),
        addEventListener('prerenderingchange', In, !0),
        Bt(() => {
          setTimeout(() => {
            Rt = ts()
          })
        }))
    }
    return {
      get firstHiddenTime() {
        return Rt
      },
      onHidden(r) {
        ac.add(r)
      },
    }
  },
  Qr = e => {
    document.prerendering
      ? addEventListener('prerenderingchange', () => e(), !0)
      : e()
  },
  rs = [1800, 3e3],
  ic = (e, r = {}) => {
    Qr(() => {
      const t = Xr()
      let n,
        s = qe('FCP')
      const a = ir('paint', l => {
        for (const i of l)
          i.name === 'first-contentful-paint' &&
            (a.disconnect(),
            i.startTime < t.firstHiddenTime &&
              ((s.value = Math.max(i.startTime - ar(), 0)),
              s.entries.push(i),
              n(!0)))
      })
      a &&
        ((n = Ze(e, s, rs, r.reportAllChanges)),
        Bt(l => {
          ;((s = qe('FCP')),
            (n = Ze(e, s, rs, r.reportAllChanges)),
            vo(() => {
              ;((s.value = performance.now() - l.timeStamp), n(!0))
            }))
        }))
    })
  },
  ns = [0.1, 0.25],
  tv = (e, r = {}) => {
    const t = Xr()
    ic(
      wo(() => {
        let n,
          s = qe('CLS', 0)
        const a = xo(r, ev),
          l = d => {
            for (const u of d) a.h(u)
            a.i > s.value && ((s.value = a.i), (s.entries = a.o), n())
          },
          i = ir('layout-shift', l)
        i &&
          ((n = Ze(e, s, ns, r.reportAllChanges)),
          t.onHidden(() => {
            ;(l(i.takeRecords()), n(!0))
          }),
          Bt(() => {
            ;((a.i = 0),
              (s = qe('CLS', 0)),
              (n = Ze(e, s, ns, r.reportAllChanges)),
              vo(() => n()))
          }),
          setTimeout(n))
      })
    )
  }
let lc = 0,
  pn = 1 / 0,
  yr = 0
const rv = e => {
  for (const r of e)
    r.interactionId &&
      ((pn = Math.min(pn, r.interactionId)),
      (yr = Math.max(yr, r.interactionId)),
      (lc = yr ? (yr - pn) / 7 + 1 : 0))
}
let An
const os = () => (An ? lc : (performance.interactionCount ?? 0)),
  nv = () => {
    'interactionCount' in performance ||
      An ||
      (An = ir('event', rv, {
        type: 'event',
        buffered: !0,
        durationThreshold: 0,
      }))
  }
let ss = 0
class ov {
  constructor() {
    Ve(this, 'u', [])
    Ve(this, 'l', new Map())
    Ve(this, 'm')
    Ve(this, 'p')
  }
  v() {
    ;((ss = os()), (this.u.length = 0), this.l.clear())
  }
  L() {
    const r = Math.min(this.u.length - 1, Math.floor((os() - ss) / 50))
    return this.u[r]
  }
  h(r) {
    var s, a
    if (
      ((s = this.m) == null || s.call(this, r),
      !r.interactionId && r.entryType !== 'first-input')
    )
      return
    const t = this.u.at(-1)
    let n = this.l.get(r.interactionId)
    if (n || this.u.length < 10 || r.duration > t.P) {
      if (
        (n
          ? r.duration > n.P
            ? ((n.entries = [r]), (n.P = r.duration))
            : r.duration === n.P &&
              r.startTime === n.entries[0].startTime &&
              n.entries.push(r)
          : ((n = { id: r.interactionId, entries: [r], P: r.duration }),
            this.l.set(n.id, n),
            this.u.push(n)),
        this.u.sort((l, i) => i.P - l.P),
        this.u.length > 10)
      ) {
        const l = this.u.splice(10)
        for (const i of l) this.l.delete(i.id)
      }
      ;(a = this.p) == null || a.call(this, n)
    }
  }
}
const cc = e => {
    const r = globalThis.requestIdleCallback || setTimeout
    document.visibilityState === 'hidden'
      ? e()
      : ((e = wo(e)),
        addEventListener('visibilitychange', e, { once: !0, capture: !0 }),
        r(() => {
          ;(e(), removeEventListener('visibilitychange', e, { capture: !0 }))
        }))
  },
  as = [200, 500],
  sv = (e, r = {}) => {
    if (
      !globalThis.PerformanceEventTiming ||
      !('interactionId' in PerformanceEventTiming.prototype)
    )
      return
    const t = Xr()
    Qr(() => {
      nv()
      let n,
        s = qe('INP')
      const a = xo(r, ov),
        l = d => {
          cc(() => {
            for (const p of d) a.h(p)
            const u = a.L()
            u &&
              u.P !== s.value &&
              ((s.value = u.P), (s.entries = u.entries), n())
          })
        },
        i = ir('event', l, { durationThreshold: r.durationThreshold ?? 40 })
      ;((n = Ze(e, s, as, r.reportAllChanges)),
        i &&
          (i.observe({ type: 'first-input', buffered: !0 }),
          t.onHidden(() => {
            ;(l(i.takeRecords()), n(!0))
          }),
          Bt(() => {
            ;(a.v(), (s = qe('INP')), (n = Ze(e, s, as, r.reportAllChanges)))
          })))
    })
  }
class av {
  constructor() {
    Ve(this, 'm')
  }
  h(r) {
    var t
    ;(t = this.m) == null || t.call(this, r)
  }
}
const is = [2500, 4e3],
  iv = (e, r = {}) => {
    Qr(() => {
      const t = Xr()
      let n,
        s = qe('LCP')
      const a = xo(r, av),
        l = d => {
          r.reportAllChanges || (d = d.slice(-1))
          for (const u of d)
            (a.h(u),
              u.startTime < t.firstHiddenTime &&
                ((s.value = Math.max(u.startTime - ar(), 0)),
                (s.entries = [u]),
                n()))
        },
        i = ir('largest-contentful-paint', l)
      if (i) {
        n = Ze(e, s, is, r.reportAllChanges)
        const d = wo(() => {
            ;(l(i.takeRecords()), i.disconnect(), n(!0))
          }),
          u = p => {
            p.isTrusted &&
              (cc(d), removeEventListener(p.type, u, { capture: !0 }))
          }
        for (const p of ['keydown', 'click', 'visibilitychange'])
          addEventListener(p, u, { capture: !0 })
        Bt(p => {
          ;((s = qe('LCP')),
            (n = Ze(e, s, is, r.reportAllChanges)),
            vo(() => {
              ;((s.value = performance.now() - p.timeStamp), n(!0))
            }))
        })
      }
    })
  },
  ls = [800, 1800],
  $n = e => {
    document.prerendering
      ? Qr(() => $n(e))
      : document.readyState !== 'complete'
        ? addEventListener('load', () => $n(e), !0)
        : setTimeout(e)
  },
  lv = (e, r = {}) => {
    let t = qe('TTFB'),
      n = Ze(e, t, ls, r.reportAllChanges)
    $n(() => {
      const s = bo()
      s &&
        ((t.value = Math.max(s.responseStart - ar(), 0)),
        (t.entries = [s]),
        n(!0),
        Bt(() => {
          ;((t = qe('TTFB', 0)), (n = Ze(e, t, ls, r.reportAllChanges)), n(!0))
        }))
    })
  }
function cv(e) {
  const r = t => {
    ;(e && e(t), dv(t))
  }
  ;(tv(r), sv(r), ic(r), iv(r), lv(r))
}
async function dv(e) {
  try {
    const r = indexedDB.open('WebVitalsDB', 1)
    ;((r.onupgradeneeded = () => {
      const t = r.result
      if (!t.objectStoreNames.contains('metrics')) {
        const n = t.createObjectStore('metrics', { keyPath: 'id' })
        ;(n.createIndex('timestamp', 'timestamp'),
          n.createIndex('name', 'name'))
      }
    }),
      (r.onsuccess = () => {
        const t = r.result,
          n = t.transaction(['metrics'], 'readwrite')
        ;(n
          .objectStore('metrics')
          .add({
            ...e,
            timestamp: Date.now(),
            url: window.location.pathname,
            userAgent: navigator.userAgent,
          }),
          (n.oncomplete = () => t.close()),
          (n.onerror = () => t.close()))
      }))
  } catch (r) {
    console.warn('Failed to store web vitals metric:', r)
  }
}
const dc = document.getElementById('root')
dc.innerHTML = ''
id.createRoot(dc).render(
  o.jsx(X.StrictMode, { children: o.jsx(J0, { children: o.jsx(M0, {}) }) })
)
cv(e => {
  console.log('Web Vital:', e.name, e.value, e.rating)
})
