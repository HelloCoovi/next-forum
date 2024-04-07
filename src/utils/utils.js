/**
 * 지정된 이름의 쿠키 값을 반환한다.
 * @param {string} cookieName 찾고자 하는 쿠키의 이름
 * @returns {string|null} 주어진 이름의 쿠키 값이 있으면 해당 값을 반환하고, 그렇지 않으면 null을 반환
 */
export const getCookieValue = (cookieName) => {
  return document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith(cookieName + '='))
    ?.split('=')[1] ?? null
}