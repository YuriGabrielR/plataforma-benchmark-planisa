export const paginaAtiva = (rota: string) => {
    const regexPath = /^\/[^/]+/
    const isMatch =
      location.pathname.match(regexPath)?.[0] === rota.match(regexPath)?.[0]
    return isMatch
  }
  