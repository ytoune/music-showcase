import { useRef, useCallback } from 'react'
import type { ChangeEvent } from 'react'
import Button from '@mui/material/Button'
import { pushZip } from '~/subjects/upload'

export const LoadFile = () => {
  const btnRef = useRef<HTMLInputElement | null>(null)
  const onClick = useCallback(() => {
    if (null == btnRef.current) return
    btnRef.current.click()
  }, [])
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) Array.from(e.target.files).map(pushZip)
  }, [])
  return (
    <>
      <Button onClick={onClick} variant="outlined">
        upload zip file
      </Button>
      <input
        type="file"
        ref={btnRef}
        style={{ display: 'none' }}
        onChange={onChange}
      />
    </>
  )
}
