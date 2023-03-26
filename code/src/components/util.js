export const PooTimer = (setLoading) => {
  // set timer that executes after 3 seconds which sets loading to false
  const timer = setTimeout(() => {
    setLoading(false)
  }, 3000);
  return () => {
    clearTimeout(timer)
  }
}