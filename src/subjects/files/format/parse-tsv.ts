type Parsed = {
  filename: string | undefined
  start: string | undefined
  end: string | undefined
}

export const parseTSV = (text: string): Parsed[] =>
  text
    .trim()
    .split(/\r?\n/giu)
    .map(p => p.trim())
    .filter(Boolean)
    .map(part => {
      const m = part.split(/\t/giu).map(p => p.trim())
      return {
        filename: m[0]?.trim(),
        start: m[1]?.trim(),
        end: m[2]?.trim(),
      }
    })
