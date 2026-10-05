function getSlideNumber(path) {
  const match = path.match(/\/(\d+)\.[^/]+$/)
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER
}

function orderedSlides(modules) {
  return Object.entries(modules)
    .sort(([firstPath], [secondPath]) => {
      const firstNumber = getSlideNumber(firstPath)
      const secondNumber = getSlideNumber(secondPath)

      return firstNumber - secondNumber || firstPath.localeCompare(secondPath)
    })
    .map(([, source]) => source)
}

export const blackSheepSlides = orderedSlides(
  import.meta.glob('../assets/works/blacksheep/*.{webp,png,jpg,jpeg}', {
    eager: true,
    import: 'default',
  }),
)

export const complettiSlides = orderedSlides(
  import.meta.glob('../assets/works/completti/*.{webp,png,jpg,jpeg}', {
    eager: true,
    import: 'default',
  }),
)
