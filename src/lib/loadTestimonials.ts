async function loadTestimonials(collectionId: string, containerId: string) {
  const container = document.getElementById(containerId)
  if (!container) return 
  const res = await fetch("/api/testimonial")
  const testimonials = await res.json()
  if (testimonials.length === 0) {
    container.innerHTML = `<p>No Testimonials available</p>`
    return
  }
}