import { useEffect } from 'react'
import { useAuthStore } from '../store/useAuthStore'

export function useAuthPersistence() {
  const hydrate = useAuthStore((s) => s.hydrate)

  useEffect(() => {
    hydrate()
  }, [hydrate])
}