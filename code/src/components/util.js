export const PooTimer = (setLoading) => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 3000);
  return () => {
    clearTimeout(timer)
  }
}