/* eslint-disable ts/ban-ts-comment */
import { resolveHeaders } from './outline.js'

export function getHeaders(range) {
  const headers = [...document.querySelectorAll('.VPDoc h2,h3,h4,h5,h6,.n-card')]
    .filter(el => el.id && el.hasChildNodes())
    .map((el) => {
      const level = Number(el.tagName[1])
      return {
        // @ts-expect-error
        title: serializeHeader(el),
        link: `#${el.id}`,
        level: level || 2,
      }
    })
  return resolveHeaders(headers, range)
}

export function serializeHeader(h: HTMLDivElement) {
  let ret = ''
  for (const node of h.childNodes) {
    if (h?.classList?.contains('n-card'))
      return serializeHeader(h.querySelector('.n-card-header__main')!)

    if (node.nodeType === 1) {
      // @ts-expect-error
      if (node?.classList?.contains('VPBadge') || node?.classList?.contains('header-anchor')) {
        continue
      }

      ret += node.textContent
    }
    else if (node.nodeType === 3) {
      ret += node.textContent
    }
  }
  return ret.trim()
}
