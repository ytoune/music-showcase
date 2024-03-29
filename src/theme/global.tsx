import { Global } from '@emotion/react'
import { memo } from 'react'

export const GlobalStyles = memo(
  () => (
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0,

          '& #screen': {
            '&::after': {
              display: 'block',
              content: '""',
              overflow: 'hidden',
              clear: 'both',
            },

            margin: 0,
            padding: 0,

            '& > *': {
              width: '100%',
            },

            '& main': {
              position: 'fixed',
              overflow: 'hidden',
              left: 10,
              right: 10,
              top: 30,
              bottom: 30,
              zIndex: '1',
            },

            '& header, & footer': {
              position: 'fixed',
              left: 0,
              right: 0,
              margin: '0 auto',
              textAlign: 'center',
              zIndex: '10',
            },

            '& header': {
              top: 0,
            },

            '& footer': {
              bottom: 0,
              padding: '5px 20px 10px',
            },
          },
        },
      }}
    />
  ),
  () => true,
)
