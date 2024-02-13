import { useCallback, useMemo, useRef } from 'react'

import LinearProgress from '@mui/material/LinearProgress'
import Button from '@mui/material/Button'

import { Paper } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import type { File } from '~/subjects/files/types'
import { LoadFile, Files, Audio, Hidable } from '~/views'
import { pushMove } from '~/subjects/cursor'

import { themeDark, themeLight } from '~/theme'
import { useFiles } from '~/hooks/use-files'
import { useProgress } from '~/hooks/use-progress'
import { useIsSelected } from '~/hooks/use-is-selected'

const useTopFile = (files: readonly File[]) => {
  const { blob, preview: { start = 0, end = 0 } = {} } = useMemo(
    (): File | { blob?: undefined; preview?: undefined } => files[0] || {},
    [files],
  )
  const ref = useRef({ url: '' })
  const url = useMemo(() => {
    if (ref.current.url) URL.revokeObjectURL(ref.current.url)
    return blob ? (ref.current.url = URL.createObjectURL(blob)) : ''
  }, [blob])
  return { url, start, end }
}

const goPrev = () => pushMove(-1)
const goNext = () => pushMove(1)

export const App = () => {
  const files = useFiles()
  const isSelected = useIsSelected()
  const { total = 0, progress = 0 } = useProgress()
  const { url, start, end } = useTopFile(files)

  const onEnded = useCallback(
    (replay: () => void) => (isSelected ? replay() : pushMove(1)),
    [isSelected],
  )

  return (
    <div>
      <ThemeProvider theme={isSelected && url ? themeDark : themeLight}>
        <CssBaseline />
        <Paper className="main">
          <header>
            <Hidable show={!!total && 1 > progress}>
              <LinearProgress
                variant="determinate"
                value={Math.floor(100 * progress)}
              />
            </Hidable>
            <Hidable show={!!url}>
              <Audio
                src={url}
                start={!isSelected && start}
                end={!isSelected && end}
                onEnded={onEnded}
              />
            </Hidable>
          </header>
          <main>
            <Files files={files} />
          </main>
          <footer>
            <Button onClick={goPrev} variant="outlined">
              up
            </Button>
            <Button onClick={goNext} variant="outlined">
              down
            </Button>
            <LoadFile />
          </footer>
        </Paper>
      </ThemeProvider>
    </div>
  )
}

export default App
